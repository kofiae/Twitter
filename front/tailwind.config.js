/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Lato',
                    ...defaultTheme.fontFamily.sans,
                ]
            },
            colors: {
                'pink': '#F08080',
                'lpink': '#F4978E',
                'brightpink': 'F8AD9D',
                'midpink': 'FBC4AB',
                'lightest': 'FFDAB9'

            }
        },
    },
    plugins: [
        require('@tailwindcss/ui'),
    ]
};