import React from "react";
import { SingleTag, TagContainer } from "../../styles/StyledComps";

export interface CardTagProps {}

const CardTag: React.FC<CardTagProps> = ({}) => {
  return (
    <TagContainer>
      <SingleTag>Crypto</SingleTag>
      <SingleTag>+3</SingleTag>
      <SingleTag>Japan</SingleTag>
    </TagContainer>
  );
};

export default CardTag;
