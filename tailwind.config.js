/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    // Add unique prefix to avoid conflicts with user's Tailwind classes
    prefix: "dxkit-marquee-",
    // Disable base and components to avoid style conflicts for users
    corePlugins: {
        preflight: false, // Disable Tailwind's CSS reset
    },
    theme: {
        extend: {
            keyframes: {
                "marquee-left": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-up": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
            animation: {
                "marquee-left": "marquee-left var(--duration, 40s) linear infinite",
                "marquee-up": "marquee-up var(--duration, 40s) linear infinite",
            },
        },
    },
    plugins: [
        // Removed tailwindcss-animate to avoid extra keyframes
    ],
}