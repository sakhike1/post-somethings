<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners"
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-orange-500 rounded-full hover:bg-black hover:text-white">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>