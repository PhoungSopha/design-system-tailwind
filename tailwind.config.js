module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: 'var(--color-bg-primary-lightest)',
          lighter: 'var(--color-bg-primary-lighter)',
          light: 'var(--color-bg-primary-light)',
          DEFAULT: 'var(--color-bg-primary)',
          dark: 'var(--color-bg-primary-dark)',
        },
        danger: {
          lightest: 'var(--color-bg-danger-lightest)',
          lighter: 'var(--color-bg-danger-lighter)',
          light: 'var(--color-bg-danger-light)',
          DEFAULT: 'var(--color-bg-danger)',
          dark: 'var(--color-bg-danger-dark)',
        },
        success: {
          lightest: 'var(--color-bg-success-lightest)',
          lighter: 'var(--color-bg-success-lighter)',
          light: 'var(--color-bg-success-light)',
          DEFAULT: 'var(--color-bg-success)',
          dark: 'var(--color-bg-success-dark)',
        },
        warning: {
          lightest: 'var(--color-bg-warning-lightest)',
          lighter: 'var(--color-bg-warning-lighter)',
          light: 'var(--color-bg-warning-light)',
          DEFAULT: 'var(--color-bg-warning)',
          dark: 'var(--color-bg-warning-dark)',
        },
      },
      minWidth: {
        lg: '32rem',
      },
      fontFamily: {
        sans: ['Inter', 'Kantumruy'],
        rubik: 'rubik',
      },
      textColor: {
        primary: {
          DEFAULT: 'var(--color-text-primary)',
        },
        inverse: {
          DEFAULT: 'var(--color-text-inverse)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
