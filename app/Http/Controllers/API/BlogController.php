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
}
