import webComponentPost from "./how-to-create-a-web-component-with-create-react-app";
import codeReviewPost from "./improve-velocity-with-efficient-code-review-process";
import hooksVsClassesPost from "./react-hooks-vs-classes-the-ultimate-comparison";
import visualRegressionPost from "./visual-regression-testing-quality";

export default [
  webComponentPost,
  codeReviewPost,
  hooksVsClassesPost,
  visualRegressionPost,
]
  .flatMap((post) => post.split(`\n`))
  .map((value) => value.trim())
  .filter(Boolean);
