import React from "react";
import { useRef, useEffect, RefObject } from "react";
import { dropdownArrow } from "../../assets";
import {
  DropdownDiv,
  DropBtn,
  DropdownContent,
  DropdownItem,
  DownArrow,
} from "../../styles/StyledComps";

export interface DropdownProps {
  isSearch: boolean;
  withArrow: boolean;
}

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

const Dropdown: React.FC<DropdownProps> = ({ isSearch, withArrow }) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClickInside = () => {
    wrapperRef.current.classList.toggle("show");
  };

  const handleClickOutside = () => {
    wrapperRef.current.classList.remove("show");
  };

  useOnOutsideClick(wrapperRef, handleClickOutside);

  return (
    <DropdownDiv isSearch={isSearch} withArrow={withArrow}>
      <DropBtn onClick={handleClickInside}>
        Everything
        {withArrow && <DownArrow src={dropdownArrow} />}
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
