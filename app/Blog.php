<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{

    protected $fillable = ['user_id', 'blog_title', 'blog_post'];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
