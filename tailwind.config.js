/** Tailwind build config — regenerate styles.css with:
 *  npx tailwindcss@3.4.17 -i src/input.css -o styles.css --minify
 */
module.exports = {
  content: ["./index.html", "./admin.html", "./app.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#FFFDF9',
        blush: '#FCE7F3',
        cocoa: '#3E2723',
        rose: '#E11D48',
        gold: '#F59E0B'
      }
    }
  }
};
