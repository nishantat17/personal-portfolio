// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from "@astrojs/vercel";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    adapter: process.env.NODE_ENV == "development" ? node({
        mode: "standalone",
    }) : vercel({
        webAnalytics: {
            enabled: true
        }
    }),
    fonts: [{
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--jetbrains-mono",
        weights: [400],
        styles: ["normal"]
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
        name: "Bitcount",
        cssVariable: "--bitcount",
        weights: [400, 500, 700],
        styles: ["normal"],
    }],
});