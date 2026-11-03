
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
    base: "/portafolio-kimberly/",
    plugins: [
        handlebars({
            partialDirectory: "src/components",
        }),
    ],
});
