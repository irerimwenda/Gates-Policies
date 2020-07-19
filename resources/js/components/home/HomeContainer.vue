<template>
  <div class="container">
      <div class="row">
            <div class="col-md-2">
                <div class="card"></div>
            </div>

            <div class="col-md-8">
                <!-- Blog Component -->
                <blog-component></blog-component>
            </div>

            <div class="col-md-2">
                <div class="card"></div>
            </div>
        </div>
  </div>
</template>

<script>
import BlogComponent from '../blogs/BlogComponent'

export default {

    name: 'home',

    components: {
        BlogComponent,
    }
}
</script>