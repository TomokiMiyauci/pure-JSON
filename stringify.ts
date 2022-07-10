/** Safe converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
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
 * const [data, err] = JSON.stringify(cycle);
 *
 * assertIsError(err, TypeError);
 * assertEquals(data, undefined);
 * ```
 */
export default function stringify(
  value: unknown,
  replacer?: (number | string)[] | null,
  space?: string | number,
): [data: string, err: undefined] | [data: undefined, error: TypeError] {
  try {
    const result = JSON.stringify(value, replacer, space);
    return [result ?? "", undefined];
  } catch (e) {
    return [, e as TypeError];
  }
}
