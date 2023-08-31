import { mount, createLocalVue } from "@vue/test-utils";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";

// Create a localVue instance
const localVue = createLocalVue();

describe("TheSidenav", () => {
  it('emits "close" event when backdrop is clicked', async () => {
    // Mount the component with localVue
    const wrapper = mount(TheSidenav, {
      localVue,
      propsData: {
        show: true,
      },
      stubs: {
        NuxtLink: true, // Stub the NuxtLink component
      },
    });

    // Click the backdrop
    await wrapper.find(".sidenav-backdrop").trigger("click");

    // Assert that the "close" event has been emitted by the component
    expect(wrapper.emitted().close).toBeTruthy();
  });

  it('emits "close" event when nav-list is clicked', async () => {
    // Mount the component with localVue
    const wrapper = mount(TheSidenav, {
      localVue,
      propsData: {
        show: true,
      },
      stubs: {
        NuxtLink: true, // Stub the NuxtLink component
      },
    });

    // Click the nav-list
    await wrapper.find(".nav-list").trigger("click");

    // Assert that the "close" event has been emitted by the component
    expect(wrapper.emitted().close).toBeTruthy();
    expect().toMatchSnapshot();
  });
});
