<template>
  <section class="post-list" id="app">
    <PostPreview
      v-bind:class="vueClass"
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
import textcontent from "@/components/Posts/textcontent.vue";

export default {
  components: {
    PostPreview,
    textcontent,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      vueClass: "pinkBG",
    };
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px;
}
</style>
