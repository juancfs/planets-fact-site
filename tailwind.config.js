module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ["bg-mercury", "bg-venus", "bg-earth", "bg-mars", "bg-jupiter", "bg-saturn", "bg-uranus", "bg-neptune",
      "md:bg-mercury", "md:bg-venus", "md:bg-earth", "md:bg-mars", "md:bg-jupiter", "md:bg-saturn", "md:bg-uranus", "md:bg-neptune",
      "bg-mercury-menu", "bg-venus-menu", "bg-earth-menu", "bg-mars-menu", "bg-jupiter-menu", "bg-saturn-menu", "bg-uranus-menu", "bg-neptune-menu",
      "border-mercury", "border-venus", "border-earth", "border-mars", "border-jupiter", "border-saturn", "border-uranus", "border-neptune",
      "xl:border-mercury", "xl:border-venus", "xl:border-earth", "xl:border-mars", "xl:border-jupiter", "xl:border-saturn", "xl:border-uranus", "xl:border-neptune",
      "xl:hover:border-mercury", "xl:hover:border-venus", "xl:hover:border-earth", "xl:hover:border-mars", "xl:hover:border-jupiter", "xl:hover:border-saturn", "xl:hover:border-uranus", "xl:hover:border-neptune",
      "w-36", "w-40", "w-44", "w-48",
      "md:w-52", "md:w-56", "md:w-60", "md:w-64",
      "xl:w-72", "xl:w-96", "xl:w-100", "xl:w-104"]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "stars": `url(/src/components/assets/background-stars.svg)`
      }),
      borderWidth: {
        "1.5": "1.5px"
      },
      colors: {
        "dark-space": "#070724",
        "dark-light-space": "#38384F",
        "gray-space": "#838391",
        "mercury-menu": "#DEF4FC",
        "venus-menu": "#F7CC7F",
        "earth-menu": "#545BFE",
        "mars-menu": "#FF6A45",
        "jupiter-menu": "#ECAD7A",
        "saturn-menu": "#FCCB6B",
        "uranus-menu": "#65F0D5",
        "neptune-menu": "#497EFA",
        "mercury": "#419EBB",
        "venus": "#EDA249",
        "earth": "#6F2ED6",
        "mars": "#D14C32",
        "jupiter": "#D83A34",
        "saturn": "#CD5120",
        "uranus": "#1EC2A4",
        "neptune": "#2D68F0"
      },
      fontFamily: {
        "antonio": ["Antonio"],
        "spartan": ["Spartan"]
      },
      fontSize: {
        "2xs": ".6rem",
        "3xs": ".575rem"
      },
      letterSpacing: {
        "widest": ".175em"
      },
      width: {
        "100": "27rem",
        "104": "29.5rem",
      },
      borderTop: ["hover"],
      borderColor: ["hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
