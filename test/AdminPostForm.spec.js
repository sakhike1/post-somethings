import { mount } from "@vue/test-utils";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

describe("AdminPostForm", () => {
  it("emits submit event with edited post data", async () => {
    const wrapper = mount(AdminPostForm);

    // Fill in form fields
    await wrapper.setData({
      editedPost: {
        author: "John Doe",
        title: "Test Post",
        thumbnail: "thumbnail-url",
        content: "This is the content",
        previewText: "Preview text",
      },
    });

    // Simulate form submission
    await wrapper.find("form").trigger("submit.prevent");

    // Check if submit event is emitted with correct data
    expect(wrapper.emitted().submit[0][0]).toEqual({
      author: "John Doe",
      title: "Test Post",
      thumbnail: "thumbnail-url",
      content: "This is the content",
      previewText: "Preview text",
    });
  });

  it("navigates back on cancel", async () => {
    const $router = { push: jest.fn() };
    const wrapper = mount(AdminPostForm, {
      mocks: {
        $router,
      },
    });

    // Mock the $router.push method
    wrapper.vm.$router.push = $router.push;

    await wrapper.vm.onCancel();
    expect($router.push).toHaveBeenCalledWith("/admin");
    expect().toMatchSnapshot();
  });

  // Add more test cases as needed
});
