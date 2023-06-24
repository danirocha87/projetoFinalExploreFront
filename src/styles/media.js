import { css } from "styled-components"

const sizes = {
  small: 540,
  medium: 768,
  large: 960,
  exlarge: 1200
}
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})