/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    '2xl': '2rem',
                    DEFAULT: '1rem',
                    lg: '2rem',
                    sm: '1rem',
                    xl: '3rem',
                },
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            fontFamily: {
                primary: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#0076F2',
                secondary: '#160F28',
                light: 'rgba(255,255,255,0.7)',
                lightbg: '#1D172F',
                service: '#251F37',
                gradient: 'linear-gradient(114.03deg, #E033A5 -5.96%, rgba(24, 101, 255, 0.74) 98.34%)',
                gradient2: 'linear-gradient(90deg, #1865FF 100%,  #E033A5 100%)',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
    important: true,
};
