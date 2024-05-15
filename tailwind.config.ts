const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

const MTConfig = withMT({
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      body: [
        'Poppins',
      ],
      mono: [
        'monospace',
      ],
    },
  },
  plugins: [],
});

export default MTConfig;