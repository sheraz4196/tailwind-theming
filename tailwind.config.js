function withopacity(variablename) {
  return ({ opacityvalue }) => {
    if (opacityvalue !== undefined) {
      return `rgba(var(${variablename}), ${opacityvalue})`;
    }
    return `rgba(var(${variablename}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      borderColor: {
        primary: withopacity("--border-color"),
      },
      textColor: {
        skin: {
          fill: withopacity("--color-fill"),
          base: withopacity("--color-text-base"),
          muted: withopacity("--color-text-muted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withopacity("--color-fill"),
          "button-accent": withopacity("--color-button-accent"),
          "button-accent-hover": withopacity("--color-button-accent-hover"),
          "button-muted-hover": withopacity("--color-button-muted-hover"),
          "button-muted": withopacity("--color-button-muted"),
          camera: withopacity("--color-camera-button"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withopacity("--color-fill"),
          saturation: withopacity("--color-fill-two"),
        },
      },
    },
  },
  plugins: [],
};
