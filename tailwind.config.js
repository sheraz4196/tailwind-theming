/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      textColor: {
        skin: {
          fill: "var(--color-fill)",
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted-hover": "var(--color-button-muted)",
          "button-muted": "var(--color-button-muted-hover)",
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
          saturation: "var(--color-fill-two)",
        },
      },
    },
  },
  plugins: [],
};
