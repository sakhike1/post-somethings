import { mount, createLocalVue } from "@vue/test-utils";
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

// Create a localVue instance
const localVue = createLocalVue();

describe("TheHeader", () => {
  it('emits "sidenavToggle" event when TheSideNavToggle emits "toggle"', async () => {
    // Mount the component with localVue
    const wrapper = mount(TheHeader, {
      localVue,
      stubs: {
        TheSideNavToggle: true, // Stub the TheSideNavToggle component
        NuxtLink: true, // Stub the NuxtLink component
      },
    });

    // Trigger the toggle event in TheSideNavToggle component
    await wrapper.findComponent(TheSideNavToggle).vm.$emit("toggle");

    // Assert that the "sidenavToggle" event has been emitted by the component
    expect(wrapper.emitted().sidenavToggle).toBeTruthy();
    expect().toMatchSnapshot();
  });
});
