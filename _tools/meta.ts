import { BuildOptions } from "https://deno.land/x/dnt@0.26.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {
    deno: false,
  },
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "pure-json",
    version,
    description: "Pure version of built-in JSON Object",
    keywords: [
      "JSON",
      "parse",
      "stringify",
      "pure",
    ],
    license: "MIT",
    homepage: "https://github.com/TomokiMiyauci/pure-JSON",
    repository: {
      type: "git",
      url: "git+https://github.com/TomokiMiyauci/pure-JSON.git",
    },
    bugs: {
      url: "https://github.com/TomokiMiyauci/pure-JSON/issues",
    },
    sideEffects: false,
    type: "module",
  },
  packageManager: "pnpm",
});
