import { Meta } from "@storybook/react";
import Item from "../Item";
import Container from "./";

export default {
  title: "Layout/Container",
  component: Container,
} as Meta;

const Template = () => (
  <div>
    <Container>
      <Item xs={12} sm={6} md={3} lg={2} xl={2}>
        Item 1
      </Item>
      <Item xs={12} sm={6} md={3} lg={2} xl={2}>
        Item 2
      </Item>
      <Item xs={12} sm={6} md={3} lg={2} xl={2}>
        Item 3
      </Item>
      <Item xs={12} sm={6} md={3} lg={2} xl={2}>
        Item 4
      </Item>
    </Container>
  </div>
);

export const Default = Template.bind({});
