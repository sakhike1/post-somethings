import { mount } from "@vue/test-utils";
import testing from "@/components/Admin/testing.vue";

describe("testing", () => {
  it("emits an event with two arguments", () => {
    const wrapper = mount(testing);

    wrapper.vm.emitEvent();

    expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"]);
  });
});
