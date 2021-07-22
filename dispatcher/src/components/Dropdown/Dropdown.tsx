import React, { useState } from "react";
import { useRef, useEffect, RefObject } from "react";
import { dropdownArrow } from "../../assets";
import {
  DropdownDiv,
  DropBtn,
  DropdownContent,
  DropdownItem,
  DownArrow,
} from "./StyledDropdown";

export interface DropdownProps {
  isSearch: boolean;
  withArrow: boolean;
}

const CATEGORIES = [
  { id: 1, name: "Everything" },
  { id: 2, name: "Top Headlines" },
  { id: 3, name: "Trending" },
  { id: 4, name: "Most Viewed" },
  { id: 5, name: "Date" },
];

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
  const selectionRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const [selected, setSelected] = useState(CATEGORIES[0].name);

  const handleClickInside = () => {
    wrapperRef.current.classList.toggle("show");
  };

  const handleItemClick = (selected: string) => {
    setSelected(selected);
  };

  const handleClickOutside = () => {
    wrapperRef.current.classList.remove("show");
  };

  useOnOutsideClick(wrapperRef, handleClickOutside);

  return (
    <DropdownDiv isSearch={isSearch} withArrow={withArrow}>
      <DropBtn onClick={handleClickInside}>
        {selected}
        {withArrow && <DownArrow src={dropdownArrow} />}
      </DropBtn>
      <DropdownContent id="myDropdown" ref={wrapperRef}>
        {CATEGORIES.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => handleItemClick(item.name)}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownDiv>
  );
};

export default Dropdown;
