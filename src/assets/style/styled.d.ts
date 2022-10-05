import "styled-components"
declare module "styled-components" {
    export interface DefaultTheme {
        "colors": {
            "primary": string,
            "secondary": string,
            "text": string,
            "accent": string
        },
        "fonts": {
            "primary": string,
            "secondary": string
        }
    }
}