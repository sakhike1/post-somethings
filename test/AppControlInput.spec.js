import { mount } from "@vue/test-utils";
import AppControlInput from "@/components/UI/AppControlInput.vue";

describe("AppControlInput", () => {
  it('renders an input control when controlType is "input"', () => {
    const wrapper = mount(AppControlInput, {
      propsData: {
        controlType: "input",
        value: "Hello",
      },
    });

    const inputControl = wrapper.find("input");
    expect(inputControl.exists()).toBe(true);
    expect(inputControl.element.value).toBe("Hello");
  });

  it('renders a textarea control when controlType is "textarea"', () => {
    const wrapper = mount(AppControlInput, {
      propsData: {
        controlType: "textarea",
        value: "Hello",
      },
    });

    const textareaControl = wrapper.find("textarea");
    expect(textareaControl.exists()).toBe(true);
    expect(textareaControl.element.value).toBe("Hello");
  });

  it("emits input event when the input control value changes", async () => {
    const wrapper = mount(AppControlInput, {
      propsData: {
        controlType: "input",
        value: "Hello",
      },
    });

    const inputControl = wrapper.find("input");
    await inputControl.setValue("Updated value");

    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toBe("Updated value");
    expect().toMatchSnapshot();
  });
});
