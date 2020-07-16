<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Blog;

class BlogController extends Controller
{
    // Return all blogs
    public function getBlogs() {

        // Get all blogs from DB
        $blogs = Blog::all();

        return response()->json($blogs, 200);
    }

    // Post an article
    public function postBlogArticle(Request $request) {
        $validated_data = $this->validate($request, [
                            'user_id' => 'required',
                            'blog_title' => 'required',
                            'blog_post' => 'required',
                        ]);

        $save_article = Blog::create($validated_data);

        return response()->json($save_article, 201);
    }
}
