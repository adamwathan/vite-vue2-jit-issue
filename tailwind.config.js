const toRem = px => `${px / 16}rem`;
const rem = px => ({[px]: `${px / 16}rem`});

module.exports = {
    mode: 'jit',
    purge: [
        './index.html',
        './src/app.vue',
        './src/index.js'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#20201F',
                'light': '#F7F7F7',
                'light-tint': '#AFAFAF',
                'red': '#ff5a5a',
                'blue': '#0089FF'
            },
            fontFamily: {
                header: ['sans-serif'],
                body: ['serif']
            },
            fontSize: {
                ...rem(11),
                ...rem(12),
                ...rem(13),
                ...rem(14),
                ...rem(16),
                ...rem(18),
                ...rem(20),
                ...rem(22),
                ...rem(24),
                ...rem(28),
                ...rem(32),
                ...rem(42),
                ...rem(56)
            },
        },
    }
}
