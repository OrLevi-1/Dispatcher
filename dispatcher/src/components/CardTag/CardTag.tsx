import React from "react";
import { SingleTag, TagContainer } from "../../styles/StyledComps";

export interface CardTagProps {}

const CardTag: React.FC<CardTagProps> = ({}) => {
  return (
    <TagContainer>
      <SingleTag>Everything</SingleTag>
      <SingleTag>Israel</SingleTag>
      <SingleTag>+3</SingleTag>
    </TagContainer>
  );
};

export default CardTag;
