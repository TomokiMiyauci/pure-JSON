import { json } from "./types.ts";

/** Safe converts a JavaScript Object Notation (JSON) string into an object.
 * It does not throw errors compared to `JSON.parse`.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * ```ts
 * import { parse } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
 * import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";
 *
 * const [data, err] = parse(`{ "hello": "world"}`);
 *
 * assertEquals(err, undefined);
 * assertEquals(data, { hello: "world" });
 * ```
 */
export default function parse(
  text: string,
  reviver?: Parameters<typeof JSON.parse>[1],
): [data: json, err: undefined] | [data: undefined, err: SyntaxError] {
  try {
    const result = JSON.parse(text, reviver) as json;
    return [result, undefined];
  } catch (e) {
    return [, e as SyntaxError];
  }
}
