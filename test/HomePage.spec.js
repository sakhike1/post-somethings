import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HomePage from "@/pages/index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HomePage", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      getters: {
        loadedPosts: () => [],
      },
    });
  });

  it("should render correctly", () => {
    const wrapper = mount(HomePage, {
      localVue,
      store,
      stubs: ["router-link", "textcontent", "PostList", "Nuxt"], // Stub components
    });

    expect(wrapper.exists()).toBe(true);
    expect().toMatchSnapshot();
  });
});
