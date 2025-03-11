export type TypographyProps = {
  variant: "p" | "h1" | "h2" | "h3" | "h4";
  children: string;
  color: EsColors;
  fontSize: FontSizes;
  letterSpacing: LetterSpacing;
};

export type TextOptions = {
  color: EsColors;
  fontSize: FontSizes;
  letterSpacing: LetterSpacing;
};

export type EsColors =
  | "black"
  | "medium-grey"
  | "dark-grey"
  | "light-grey"
  | "white"
  | "extra-light-grey"
  | "green"
  | "mint"
  | "light-mint"
  | "blue"
  | "navy"
  | "lily"
  | "orange"
  | "yellow"
  | "deep-pink"
  | "red"
  | "light-red";

export type FontSizes = "xs" | "sm" | "normal" | "lg" | "xl";

export type LetterSpacing = "normal" | "wide" | "xwide";
