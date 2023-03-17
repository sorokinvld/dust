import { checkDatasetData } from "@app/lib/datasets";

describe("checkDatasetData", function () {
  test("returns dataset keys if there are no key mismatch", function () {
    const dataset = [{ hello: "world" }, { hello: "dust" }];
    const keys = checkDatasetData(dataset);
    expect(keys).toEqual(["hello"]);
  });

  test("throws an error if data is not an array", function () {
    const dataset = { hello: "world" };
    expect(() => checkDatasetData(dataset as any)).toThrow(
      "data must be an array"
    );
  });

  test("throws an error if data is an empty array", function () {
    const dataset: object[] = [];
    expect(() => checkDatasetData(dataset)).toThrow(
      "Data must be a non-empty array"
    );
  });

  test("throws an error if there is a key mismatch", function () {
    const dataset = [{ hello: "world" }, { hello: "dust", foo: "bar" }];
    expect(() => checkDatasetData(dataset)).toThrow(
      "Keys mismatch between data entries: hello != hello,foo"
    );
  });
});