// import { SWRConfig } from "swr";
// import { fetcher } from "../src";
import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "../src/lib/api/utils";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <SWRConfig value={{ fetcher }}>
      <Story />
    </SWRConfig>
  ),
];
