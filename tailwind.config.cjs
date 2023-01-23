/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        darkCyan: "hsl(179, 81%, 29%)",
        darkGreyBlue: "hsl(215, 19%, 25%)",
        paleOrange: "hsl(25, 94%, 86%)",
        lightCream: "hsl(43, 78%, 98%)",
        cusGray: "hsl(215, 5%, 54%)",
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },

      maxWidth: {
        "8xl": "1440px",
      },
      backgroundImage: {
        heroMobile: "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        heroTablet: "url('/assets/home/tablet/image-hero-coffeepress.jpg')",
        heroDesktop: "url('/assets/home/desktop/image-hero-coffeepress.jpg')",
        heroAboutMobile: "url('/assets/about/mobile/image-hero-whitecup.jpg')",
        heroAboutTablet: "url('/assets/about/tablet/image-hero-whitecup.jpg')",
        heroAboutDesktop:
          "url('/assets/about/desktop/image-hero-whitecup.jpg')",
        heroSubscribeMobile:
          "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
        heroSubscribeTablet:
          "url('/assets/plan/tablet/image-hero-blackcup.jpg')",
        heroSubscribeDesktop:
          "url('/assets/plan/desktop/image-hero-blackcup.jpg')",
      },
    },
  },
  plugins: [],
};
