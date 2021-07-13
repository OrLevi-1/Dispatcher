import React from "react";
import { useRef, useEffect, RefObject } from "react";
import styled from "styled-components";
import "typeface-roboto";
import { dropdownArrow } from "../../assets";

export interface DropdownProps {}

const DropBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  font-family: "Roboto";
  color: #5a5a89;
  font-size: 1rem;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #969a9d30;
  }
  &:focus {
    background-color: #969a9d30;
  }
`;

const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;

  & a {
    color: #5a5a89;
    font-size: 14px;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  &.show {
    display: block;
  }
`;

const DropdownItem = styled.a`
  background-color: #f1f1f1;
  color: white;
  padding: 16px;
  font-family: "Roboto";
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #969a9d5b;
  }
  &:focus {
    background-color: #969a9d5b;
  }
`;

const DownArrow = styled.img`
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 16px;
`;

type AnyEvent = MouseEvent | TouchEvent;
function useOnOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: AnyEvent) => void
) {
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [ref, handler]);
}

const Dropdown: React.FC<DropdownProps> = ({}) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickInside = () => {
    wrapperRef.current.classList.toggle("show");
  };

  const handleClickOutside = () => {
    wrapperRef.current.classList.remove("show");
  };

  useOnOutsideClick(wrapperRef, handleClickOutside);

  return (
    <DropdownDiv>
      <DropBtn onClick={handleClickInside}>
        Everything
        <DownArrow src={dropdownArrow} />
      </DropBtn>
      <DropdownContent id="myDropdown" ref={wrapperRef}>
        <DropdownItem>Everything</DropdownItem>
        <DropdownItem>Top Headlines</DropdownItem>
        <DropdownItem>Trending</DropdownItem>
        <DropdownItem>Most Viewed</DropdownItem>
      </DropdownContent>
    </DropdownDiv>
  );
};

export default Dropdown;
