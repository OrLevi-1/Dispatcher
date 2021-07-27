import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blueArrow, xbutton } from "../../assets";
import { searchActions } from "../../store/search";
import { RootState } from "../../store/store";
import {
  ArrowImg,
  CancelImg,
  MobileSearchHeader,
  SearchInput,
} from "./StyledMobileSearch";

export interface MsHeaderProps {}

const MsHeader: React.FC<MsHeaderProps> = ({}) => {
  const [inputVal, setinputVal] = useState("");
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinputVal(e.currentTarget.value);
  };

  const clearSearch = () => {
    inputRef.current.value = "";
    setinputVal("");
  };

  const searchSumbit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (inputVal !== "") dispatch(searchActions.setSearchTerm(inputVal));
    }
  };

  const closeSearch = () => {};

  return (
    <MobileSearchHeader>
      <ArrowImg src={blueArrow} onClick={closeSearch} />
      <SearchInput
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={onChange}
        onKeyDown={searchSumbit}
      />
      {inputVal !== "" && <CancelImg src={xbutton} onClick={clearSearch} />}
    </MobileSearchHeader>
  );
};

export default MsHeader;
