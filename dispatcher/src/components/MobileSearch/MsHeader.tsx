import React, { useState } from "react";
import { SearchInput } from "../../styles/StyledComps";
import { blueArrow, xbutton } from "../../assets";
import {
  MobileSearchHeader,
  ArrowImg,
  CancelImg,
} from "../../styles/StyledComps";

export interface MsHeaderProps {}

const MsHeader: React.FC<MsHeaderProps> = ({}) => {
  const [inputVal, setinputVal] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinputVal(e.currentTarget.value);
  };

  return (
    <MobileSearchHeader>
      <ArrowImg src={blueArrow} />
      <SearchInput placeholder="Search" onChange={onChange} />
      {inputVal !== "" && <CancelImg src={xbutton} />}
    </MobileSearchHeader>
  );
};

export default MsHeader;
