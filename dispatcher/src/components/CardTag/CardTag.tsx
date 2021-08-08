import React from "react";
import { SingleTag, TagContainer } from "./StyledCardTag";

export interface CardTagProps {
  mainTag?: string;
  subTag?: string;
}

const CardTag: React.FC<CardTagProps> = ({ mainTag, subTag }) => {
  return (
    <TagContainer>
      <SingleTag>{mainTag}</SingleTag>
      <SingleTag>{subTag}</SingleTag>
    </TagContainer>
  );
};

export default CardTag;
