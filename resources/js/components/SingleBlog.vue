<template>
  <div class="container">

    <!-- Vue Router -->
    <router-view :key="$route.fullPath"></router-view>

      my blog
  </div>
</template>

<script>
export default {

    name: 'blog',
    
    mounted() {
        console.log('component mounted')
    }
}
</script>
