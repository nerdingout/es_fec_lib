// import "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
import React from "react";
import styled, { css } from "styled-components";
import "typeface-montserrat";
import { colorMap } from "../../utils/colorMap";
import { fontSizeMap } from "../../utils/fontSizeMap";
import { letterSpacingMap } from "../../utils/letterSpacingMap";
import {
  EsColors,
  FontSizes,
  LetterSpacing,
  TextOptions,
  TypographyProps,
} from "../types";

const baseTextStyles = css<TextOptions>`
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const StyledP = styled.p<TextOptions>`
  ${baseTextStyles}
`;

const StyledH1 = styled.h1<TextOptions>`
  ${baseTextStyles}
`;

const StyledH2 = styled.h2<TextOptions>`
  ${baseTextStyles}
`;

const StyledH3 = styled.h3<TextOptions>`
  ${baseTextStyles}
`;

const StyledH4 = styled.h4<TextOptions>`
  ${baseTextStyles}
`;

const variantMap = {
  p: StyledP,
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  color,
  fontSize,
  letterSpacing,
}) => {
  if (!color || !fontSize || !letterSpacing || !variant) {
    console.error(
      "Missing required props: color && fontSize && letterSpacing && variant must be passed as props"
    );
  }
  const TextElement = variantMap[variant];

  return (
    <TextElement
      color={colorMap[color] as EsColors}
      fontSize={fontSizeMap[fontSize] as FontSizes}
      letterSpacing={letterSpacingMap[letterSpacing] as LetterSpacing}
    >
      {children}
    </TextElement>
  );
};

export default Typography;
