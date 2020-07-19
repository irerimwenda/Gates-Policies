<template>
  <div class="container">
      <div class="row">
            <div class="col-md-2">
                <div class="card"></div>
            </div>

            <div class="col-md-8">
                <div class="card">
                    <div class="single-blog-container">
                        {{blog_article.id}}
                    </div>
                </div>
            </div>

            <div class="col-md-2">
                <div class="card"></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'blog',

    props: ['blog'],

    data() {
        return {
            blog_article: this.blog
        }
    },
}
</script>
