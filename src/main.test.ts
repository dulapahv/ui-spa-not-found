import { expect, it } from "vitest";
import { buildNotFoundPage } from "./main";

it("renders the not-found page markup", () => {
  expect(buildNotFoundPage().outerHTML).toMatchSnapshot();
});
