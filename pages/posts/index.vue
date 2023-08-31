<template>
  <div class="posts-page">
    <textcontent />

    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import textcontent from "@/components/Posts/textcontent.vue";
export default {
  components: {
    textcontent,
  },
  middleware: "log",
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
