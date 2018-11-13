import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

fairyGateTheme.headerFontFamily = ['Open Sans', 'sans-serif']
fairyGateTheme.bodyFontFamily = ['Open Sans', 'sans-serif']
fairyGateTheme.googleFonts = [
    {
        name: 'Titillium Web',
        styles: [
        '400',
        ],
    },
    {
        name: 'Cinzel',
        styles: [
        '400',
        ],
    }
]

const typography = new Typography(fairyGateTheme)

export default typography