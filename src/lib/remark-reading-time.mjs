import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export const remarkReadingTime =
  () =>
  (tree, { data }) => {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
