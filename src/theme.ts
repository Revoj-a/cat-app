import { extendTheme } from "@chakra-ui/theme-utils";
import { colorPalettes } from "./lib/color-palettes";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body, #root": {
        backgroundColor: "pink",
        color: "gray.800",
        height: "100%",
        margin: 0,
        padding: 0,
      },
    },
  },
  colors: {
    ...colorPalettes,
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
