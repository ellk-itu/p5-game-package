import { tree } from "./index";

test("env", () => {
  expect(process.env.JEST_WORKER_ID).toBeDefined();
});

test("Tree Exists", () => {
  expect(tree).toBeDefined();
});
