import React from "react";
import styled from "styled-components";

export type ContainerProps = {
  children: React.ReactNode;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-wrap: wrap;
`;

export default Container;
