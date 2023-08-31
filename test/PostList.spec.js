import { mount } from "@vue/test-utils";
import PostList from "@/components/Posts/PostList.vue";

describe("MyComponent", () => {
  it("renders posts correctly", () => {
    const posts = [];
    const wrapper = mount(PostList, {
      propsData: {
        isAdmin: false,
        posts: posts,
      },
    });

    expect(wrapper.find(".post-list").exists()).toBe(true);
    expect(wrapper.findAll(".post-preview").length).toBe(posts.length);
    expect().toMatchSnapshot();
  });
});
