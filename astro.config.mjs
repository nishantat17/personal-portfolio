// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
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
    }]
});
