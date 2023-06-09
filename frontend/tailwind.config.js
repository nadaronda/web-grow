/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: { rosa: '#FEC3FB', azul: '#82FCFD' },
            backgroundImage: {
                tienda: "url('/tienda.jpg')",
                colores: "url('/multi.png')",
                pageConstruction: "url('/page.png')",
            },
            dropShadow: {
                line: '0 0 20px rgba(254, 195, 251, 1)',
            },
        },
    },
    plugins: [],
};
