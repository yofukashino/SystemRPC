// Define the path to your TypeScript source and output directories

const { readFileSync } = require("fs");
const { createContext } = require("@marshift/argus");
const esbuild = require("esbuild");
const path = require("path");
const { execSync } = require("child_process");

const ctx = createContext(process.argv);
const watch = ctx.hasOptionalArg(/--watch/);

const NODE_VERSION = "20";
const srcDir = "src/rpc";
const outDir = "dist-rpc";

const packageJson = JSON.parse(readFileSync(path.join(__dirname, "package.json"), "utf-8"));
const packageNames = Object.keys(packageJson.dependencies);

esbuild
  .context({
    absWorkingDir: __dirname,
    bundle: true,
    minify: false,
    format: "cjs",
    logLevel: "info",
    metafile: true,
    entryPoints: [path.join(srcDir, "index.ts")],
    platform: "node",
    target: `node${NODE_VERSION}`,
    outdir: outDir,
    resolveExtensions: [".js", ".ts", ".json"],
    sourcemap: true,
    banner: {
      js: "// @ts-nocheck",
    },
  })
  .then((context) => {
    if (watch) {
      context.watch();
      execSync('tsc -p src/rpc/tsconfig.json --watch', { stdio: 'inherit' });
      return;
    }

    context.rebuild().then(() => execSync('tsc -p src/rpc/tsconfig.json', { stdio: 'inherit' }));
    return context;
  })
  .then((context) => context?.dispose?.());
