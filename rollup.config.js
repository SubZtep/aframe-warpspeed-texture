import { terser } from "rollup-plugin-terser"
import webWorkerLoader from "rollup-plugin-web-worker-loader"

export default {
  input: "component.js",
  plugins: [
    terser(),
    webWorkerLoader({ targetPlatform: "browser" })
  ],
  output: {
    file: "awt.min.js",
  },
}
