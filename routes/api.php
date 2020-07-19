<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('get-all-blog-posts', 'API\BlogController@getBlogs');
Route::post('post-blog-article', 'API\BlogController@postBlogArticle');
Route::put('update-blog-article/{id}', 'API\BlogController@updateBlogArticle');
Route::get('get-blog-article/{id}', 'API\BlogController@getBlogArticle');