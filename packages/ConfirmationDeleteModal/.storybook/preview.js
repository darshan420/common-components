import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from  "@ecosystemos/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withChakra = StoryFn => {
  return (
    /* 
    <ChakraProvider resetCSS theme={theme}>
      */
    <ChakraProvider resetCSS theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  );
};

export const decorators = [withChakra];
