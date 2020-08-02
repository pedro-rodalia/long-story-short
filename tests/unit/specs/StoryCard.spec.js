import { shallowMount } from "@vue/test-utils";
import StoryCard from "@/components/StoryCard";
import Stories from "stories";

describe("StoryCard test suite", () => {
  test("The Story Card component shows the title and an abstract of the content", () => {
    const wrapper = shallowMount(StoryCard, {
      propsData: { story: Stories[0] }
    });
    expect(wrapper.find("h1").text()).toBe(Stories[0].title);
    expect(wrapper.find("p").text()).toBe(Stories[0].content);
  });
});
