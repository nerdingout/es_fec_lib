import { Meta, StoryFn } from "@storybook/react";
import { TypographyProps } from "../types";
import  Typography  from "./index";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
        options: ["p", "h1", "h2", "h3", "h4"],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
    color: {
      control: {
        type: "select",
        options: [
          "black",
          "medium-grey",
          "dark-grey",
          "light-grey",
          "white",
          "extra-light-grey",
          "green",
          "mint",
          "light-mint",
          "blue",
          "navy",
          "lily",
          "orange",
          "yellow",
          "deep-pink",
          "red",
          "light-red",
        ],
      },
    },
    fontSize: {
      control: {
        type: "inline-radio",
        options: ["xs", "sm", "normal", "lg", "xl"],
      },
    },
    letterSpacing: {
      control: {
        type: "inline-radio",
        options: ["normal", "wide", "xwide"],
      },
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args: TypographyProps) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "p",
  children: "Hello world",
  fontSize: "normal",
  letterSpacing: "normal",
};
