import { mount } from "@vue/test-utils";
import AppFooter from "@/components/inc/AppFooter.vue";

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = mount(AppFooter);

    expect(wrapper.find(".py-10").exists()).toBe(true);
    expect(wrapper.find(".bg-black").exists()).toBe(true);
    expect().toMatchSnapshot();
  });
});
