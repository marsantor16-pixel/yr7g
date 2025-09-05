import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from "vite-plugin-static-copy";
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    svelte(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@titaniumnetwork-dev/ultraviolet/dist/*.js",
          dest: "uv",
          overwrite: false, // preserve our custom uv.config.js
        },
        {
          src: "node_modules/@mercuryworkshop/bare-as-module3/dist/*.js",
          dest: "baremod",
        },
        {
          src: "node_modules/@mercuryworkshop/libcurl-transport/dist/*.js",
          dest: "libcurl",
        },
        {
          src: "node_modules/@mercuryworkshop/bare-mux/dist/*.js",
          dest: "baremux",
        },
      ],
    }),
  ],
});