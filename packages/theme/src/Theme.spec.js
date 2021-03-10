import { spacing } from "./index";

describe("Theme", () => {
  test("shold be prop", () => {
    expect(spacing.small).toEqual("8px");
  });
});
