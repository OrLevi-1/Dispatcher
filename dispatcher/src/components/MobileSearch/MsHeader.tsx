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

export interface MsHeaderProps {
  onBackClick: (isClick: boolean) => void;
}

const MsHeader: React.FC<MsHeaderProps> = ({ onBackClick }) => {
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
    dispatch(searchActions.setSearchTerm(""));
  };

  const searchSumbit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && inputRef.current.value != "") {
      dispatch(searchActions.setSearchTerm(inputVal));
      dispatch(searchActions.setArrayTerm(inputVal));
    }
  };

  const resetSearchTerm = () => {
    dispatch(searchActions.setSearchTerm(""));
  };

  return (
    <MobileSearchHeader>
      <ArrowImg
        src={blueArrow}
        onClick={() => {
          onBackClick(false);
          resetSearchTerm();
        }}
      />
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
