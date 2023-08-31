<template>
  <section class="relative h-[700px] py-20 bg-gray-900 sm:py-16 lg:py-24">
    <div class="absolute inset-0">
      <img class="object-cover w-full h-full"
        src="https://cdn.rareblocks.xyz/collection/celebration/images/signin/2/man-eating-noodles.jpg" alt="" />
    </div>
    <div class="absolute inset-0 py-20 bg-gray-900/20"></div>

    <div class="relative py-8 max-w-lg px-4 mx-auto sm:px-0">
      <div class="overflow-hidden bg-gray-50 rounded-md shadow-md">
        <div class="px-4 py-6 sm:px-8 sm:py-7">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900">Welcome back</h2>
          </div>

          <form @submit.prevent="onSubmit">
            <div class="space-y-5">
              <div>
                <div class="mt-2.5">
                  <AppControlInput placeholder="type your email" type="email" v-model="email">E-Mail Address
                  </AppControlInput>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between"></div>
                <div class="mt-2.5">
                  <AppControlInput class="border-rounded" placeholder="password" type="password" v-model="password">
                    Password
                  </AppControlInput>
                </div>
              </div>

              <div>
                <AppButton type="submit">{{
                  isLogin ? "Login" : "Sign Up"
                }}</AppButton>
                <AppButton type="button" btn-style="inverted" style="margin-left: 10px" @click="isLogin = !isLogin">Switch
                  to {{ isLogin ? "Signup" : "Login" }}</AppButton>
              </div>

              <div class="message" v-if="submitted">
                Thank you for your submission, {{ username }}.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Nuxt />
  </section>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/admin');
        });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>
