/** @type {import('tailwindcss').Config} */
// import withMT from "@material-tailwind/react/utils/withMT";

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'eucalyptus': {
          '50': '#effaf4',
          '100': '#d8f3e4',
          '200': '#b4e6cd',
          '300': '#82d3af',
          '400': '#4eb98d',
          '500': '#29926a',
          '600': '#1d7e5b',
          '700': '#17654b',
          '800': '#15503d',
          '900': '#124233',
          '950': '#09251d',
        },
      }
    },
  }
}
