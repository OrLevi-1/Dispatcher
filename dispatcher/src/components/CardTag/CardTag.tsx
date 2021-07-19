import React from "react";
import { SingleTag, TagContainer } from "../../styles/StyledComps";

export interface CardTagProps {}

const CardTag: React.FC<CardTagProps> = ({}) => {
  return (
    <TagContainer>
      <SingleTag>Everything</SingleTag>
      <SingleTag>+3</SingleTag>
      <SingleTag>Israel</SingleTag>
    </TagContainer>
  );
};

export default CardTag;
