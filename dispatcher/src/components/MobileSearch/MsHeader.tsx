import React, { useState } from "react";
import { blueArrow, xbutton } from "../../assets";
import {
  ArrowImg,
  CancelImg,
  MobileSearchHeader,
  SearchInput,
} from "./StyledMobileSearch";

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
