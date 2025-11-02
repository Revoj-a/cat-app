import { extendTheme } from "@chakra-ui/theme-utils";
import { colorPalettes } from "./lib/color-palettes";

const theme = extendTheme({
  colors: {
    ...colorPalettes,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
