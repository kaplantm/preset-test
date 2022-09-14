import { Meta, Story } from "@storybook/react";
import useGetPlanet, { getPlanetParams } from "./useGetPlanet";

export default {
  title: "Hooks/API/useGetPlanet",
  argTypes: {
    hook: {
      table: {
        disable: true,
      },
    },
    params: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<getPlanetParams> = (args) => {
  const results = useGetPlanet(args);
  return <pre>{JSON.stringify(results, null, 2)}</pre>;
}

export const Standard = Template.bind({});
Standard.args = {
  id: '2'
};
