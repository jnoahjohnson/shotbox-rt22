module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/img": "40vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      colors: {
        primary: {
          light: "hsl(181, 47%, 86%)",
          DEFAULT: "hsl(181, 47%, 36%)",
          dark: "hsl(182, 47%, 28%)",
        },
        lightbg: "hsl(300, 0%, 94%)",
      },
    },
  },
  variants: {},
  plugins: [],
};
