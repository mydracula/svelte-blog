import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md'],
  kit: {
    paths: {},
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/lib/assets/scss/variables.scss" as *;',
      },
    }),
    mdsvex({
      extensions: ['.md'],
      highlight: {
        alias: { vue: 'html' }
      },
    })
  ],
};

export default config;
