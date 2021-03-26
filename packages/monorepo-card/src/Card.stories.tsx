import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { SimpleCard, CardProps } from "./";

export default {
  title: "Design System/SimpleCard",
  component: SimpleCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <SimpleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Word of the Day",
};
