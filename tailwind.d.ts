// tailwind.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette' {
  function flattenColorPalette(colors: object): object;
  export = flattenColorPalette;
}