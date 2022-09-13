//theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode(*color for light mode(string)*,*color for dark mode(string)*)(props),
      }
    })
  },
})