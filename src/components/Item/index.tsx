import React from "react";
import styled from "styled-components";

type ItemProps = {
  children: React.ReactNode;
  xs: number; // will be passed 1-12
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

const Item = styled.div<ItemProps>`
  width: ${({ xs }) => `${(xs / 12) * 100}%`};
  @media screen and (min-width: 600px) {
    width: ${({ sm }) => `${(sm / 12) * 100}%`};
  }
  @media screen and (min-width: 900px) {
    width: ${({ md }) => `${(md / 12) * 100}%`};
  }
  @media screen and (min-width: 1200px) {
    width: ${({ lg }) => `${(lg / 12) * 100}%`};
  }
  @media screen and (min-width: 1536px) {
    width: ${({ xl }) => `${(xl / 12) * 100}%`};
  }
`;

export default Item;
