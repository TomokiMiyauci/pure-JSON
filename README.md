# pure-JSON

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black&color=black)](https://deno.land/x/pure_json)
[![deno doc](https://img.shields.io/badge/deno-doc-black)](https://doc.deno.land/https/deno.land/x/pure_json/mod.ts)

Pure version of built-in JSON Object

`JSON#parse` and `JSON#stringify` without throwing an error and `any` types.

## Why?

Methods of the `JSON` object in Built-in are not pure functions and may throw
errors. Also, as of TypeScript 4.7, there is a divergence between implementation
and types.

For example, `JSON#stringify` may return `undefined` for historical reasons.
However, the return type is `string`.

```ts
JSON.stringify(undefined); // undefined
```

This project will resolve these. The return value returns the return value of
the function and the error, as in GoLang. (But as a tuple.)

## Example

### JSON#parse

```ts
import { JSON } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";

const [data, err] = JSON.parse(`{ "hello": "world"}`);

assertEquals(err, undefined);
assertEquals(data, { hello: "world" });
```

### JSON#stringify

```ts
import { JSON } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
import {
  assertEquals,
  assertIsError,
} from "https://deno.land/std@$VERSION/testing/asserts.ts";

const cycle: Record<string, unknown> = {};
cycle[""] = cycle;

const [data, err] = JSON.stringify(cycle);

assertIsError(err, TypeError);
assertEquals(data, undefined);
```

## API

### JSON

An intrinsic object that provides functions to convert JavaScript values to and
from the JavaScript Object Notation (JSON) format.

### parse

Safe converts a JavaScript Object Notation (JSON) string into an object. It does
not throw errors compared to `JSON.parse`.

```ts
import { parse } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";

const [data, err] = parse(`{ "hello": "world"}`);

assertEquals(err, undefined);
assertEquals(data, { hello: "world" });
```

#### Parameters

- text: `string`
- reviver: `Parameters<typeof JSON.parse>[1]`

#### Return Type

`[data: json, err: undefined]` | `[data: undefined, err: SyntaxError]`

### stringify

Safe converts a JavaScript value to a JavaScript Object Notation (JSON) string.

```ts
import { stringify } from "https://deno.land/x/pure_json@$VERSION/mod.ts";
import {
  assertEquals,
  assertIsError,
} from "https://deno.land/std@$VERSION/testing/asserts.ts";

const cycle: Record<string, unknown> = {};
cycle[""] = cycle;

const [data, err] = stringify(cycle);

assertIsError(err, TypeError);
assertEquals(data, undefined);
```

#### Parameters

- value: `unknown`
- replacer?: `(number | string)[] | null`
- space?: `string | number`

#### Return Type

`[valid: false, error: TypeError] | [valid: true, data: string]`

### json

Types for JSON.

```ts
type json =
  | string
  | number
  | boolean
  | null
  | { [k: string]: json }
  | json[];
```

## License

Copyright © 2022-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
