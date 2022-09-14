import { ComponentStory, ComponentMeta } from "@storybook/react";
import Foo from "./Foo";

export default {
  title: "Atoms/Foo",
  component: Foo,
  argTypes: {},
} as ComponentMeta<typeof Foo>;

const Template: ComponentStory<typeof Foo> = (args) => <Foo {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "foo bar baz"
};
