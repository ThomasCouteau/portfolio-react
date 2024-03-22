/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#FF6B6B",
                    "secondary": "#FF7F7F",
                    "accent": "#FF8C8C",
                    "neutral": "#E85454",
                    "base-100": "#EEF1FF",
                    "info": "#AEE2FF",
                    "success": "#A5DD9B",
                    "warning": "#FEBE8C",
                    "error": "#FF8080",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}

