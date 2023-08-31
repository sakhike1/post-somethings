<template>
  <div class="home-page">
    <section class="intro">
      <div class="bg-black">
        <header class="">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <button
                type="button"
                class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg
                  class="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg
                  class="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1
                  id="box"
                  class="text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
                >
                  Post something share your view on emerging
                  <div class="relative inline-flex">
                    <span
                      class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"
                    ></span>
                    <h1
                      class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl"
                    >
                      frameworks.
                    </h1>
                  </div>
                </h1>

                <p class="mt-8 text-xs text-white">
                  Post something is a blog that helps developers learn from
                  other developers
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <button
                    @click="$router.push('/admin')"
                    class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span
                      class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"
                    ></span>
                    <span
                      class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
                    ></span>
                    <span class="relative">Signup to post </span>
                  </button>
                </div>
              </div>

              <div>
                <img
                  class="w-full"
                  id="floating"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <textcontent />

    <PostList :posts="loadedPosts" />
    <Nuxt />
  </div>
</template>

<script>
import textcontent from "@/components/Posts/textcontent.vue";

export default {
  components: {
    textcontent,
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }

  50% {
    transform: translate(0, 15px);
  }

  100% {
    transform: translate(0, -0px);
  }
}
</style>
