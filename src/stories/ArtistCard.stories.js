import ArtistCard from "../components/ArtistCard/ArtistCard";
import placeholder from "./assets/images/placeholder.png";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ArtistCard",
  component: ArtistCard,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ArtistCard {...args} />;

export const LightStory = {
  args: {
    name: "John Doe",
    backgroundColor: "white",
    color: "black",
    imgSrc: placeholder,
    listencount: "1234",
    playcount: "1234",
  },
};

export const DarkStory = {
  args: {
    name: "Jane Doe",
    backgroundColor: "black",
    color: "white",
    imgSrc: placeholder,
    listencount: "1234",
    playcount: "1234",
  },
};
