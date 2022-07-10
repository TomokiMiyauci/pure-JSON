import parse from "./parse.ts";
import stringify from "./stringify.ts";

/** An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
 * ## JSON#parse
 * ```ts
 * import { JSON } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 *
 * const [data, err] = JSON.parse(`{ "hello": "world"}`);
 *
 * assertEquals(err, undefined);
 * assertEquals(data, { hello: "world" });
 * ```
 * ## JSON#stringify
 * ```ts
 * import { stringify } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
 * import {
 *   assertEquals,
 *   assertIsError,
 * } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 *
 * const cycle: Record<string, unknown> = {};
 * cycle[""] = cycle;
 *
 * const [data, err] = stringify(cycle);
 *
 * assertIsError(err, TypeError);
 * assertEquals(data, undefined);
 * ```
 */
const JSON = {
  /** Safe converts a JavaScript Object Notation (JSON) string into an object.
   * It does not throw errors compared to `JSON.parse`.
   * @param text A valid JSON string.
   * @param reviver A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
   * ```ts
   * import { JSON } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
   * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
   *
   * const [data, err] = JSON.parse(`{ "hello": "world"}`);
   *
   * assertEquals(err, undefined);
   * assertEquals(data, { hello: "world" });
   * ```
   */
  parse,

  /** Safe converts a JavaScript value to a JavaScript Object Notation (JSON) string.
   * @param value A JavaScript value, usually an object or array, to be converted.
   * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
   * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
   * ## JSON#stringify
   * ```ts
   * import { stringify } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
   * import {
   *   assertEquals,
   *   assertIsError,
   * } from "https://deno.land/std@$VERSION/testing/asserts.ts";
   *
   * const cycle: Record<string, unknown> = {};
   * cycle[""] = cycle;
   *
   * const [data, err] = stringify(cycle);
   *
   * assertIsError(err, TypeError);
   * assertEquals(data, undefined);
   * ```
   */
  stringify,
};

export default JSON;
