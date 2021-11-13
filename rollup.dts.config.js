import dts from "rollup-plugin-dts";
import alias from '@rollup/plugin-alias';
import path from "path"

const dtsTemp = path.resolve(__dirname, '.local/dts-temp');

/**@type {import("rollup").RollupOptions} */
const config = {
    input: path.resolve(__dirname, dtsTemp, "./src/index.d.ts"),
    output: {
        file: path.resolve(__dirname, "./dist/index.d.ts"),
        format: "es"
    },
    plugins: [
        alias({
            entries: {
                "@": path.resolve(__dirname, dtsTemp, './src'),
                "vue-cook": path.resolve(__dirname, dtsTemp, './src/index.d.ts'),
            }
        }),
        dts(),
    ],
}
export default config;