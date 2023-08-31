<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>
      <div class="post-content">
        <h1 class="post-title">{{ title }}</h1>
        <p class="post-meta">{{ previewText }}</p>
      </div>
    </article>
    <Nuxt />
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
  },
};
</script>

<style scoped>
.post-preview {
  background-image: linear-gradient(
    to right,
    rgb(134, 239, 172),
    rgb(59, 130, 246),
    rgb(147, 51, 234)
  );
  width: 90%;
  border-radius: 25px;
}

a {
  text-decoration: none;
  color: rgb(247, 242, 242);
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 20px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
}

.post-thumbnail:hover {
  transform: scale(1.1);
}

.post-content {
  padding: 10px;
  text-align: center;
}
</style>
