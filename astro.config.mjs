// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: import.meta.env.DEV
    ? node({
        mode: "standalone",
      })
    : vercel({
        webAnalytics: {
          enabled: true,
        },
        imageService: true,
        devImageService: "sharp",
      }),
  fonts: [
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--jetbrains-mono",
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--roboto",
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Serif",
      cssVariable: "--noto-serif",
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Bitcount",
      cssVariable: "--bitcount",
      weights: [400, 500, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--inter",
      weights: [400, 600],
      styles: ["normal"],
    },
  ],
});
