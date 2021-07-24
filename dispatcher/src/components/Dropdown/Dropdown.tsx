import React, { useEffect, useState } from "react";
import { useRef, RefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdownArrow } from "../../assets";
import { filterActions } from "../../store/filter";
import { RootState } from "../../store/store";
import CATEGORIES from "../../data/categories.json";

import {
  DropdownDiv,
  DropBtn,
  DropdownContent,
  DropdownItem,
  DownArrow,
} from "./StyledDropdown";
import { StyledLink } from "../../styles/StyledComps";

export interface DropdownProps {
  isSearch: boolean;
  withArrow: boolean;
  mainTitle?: string;
}

const MAIN_CATEGORIES = [
  { id: 1, name: "Everything" },
  { id: 2, name: "Top Headlines" },
];

const Everything = [
  { id: 1, name: "Sort By" },
  { id: 2, name: "Dates" },
  { id: 3, name: "Sources" },
  { id: 4, name: "Languages" },
  { id: 5, name: "Results per page" },
];
const Top_Headlines = [
  { id: 1, name: "Country" },
  { id: 2, name: "Category" },
  { id: 3, name: "Sources" },
  { id: 4, name: "Results per page" },
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

const Dropdown: React.FC<DropdownProps> = ({
  isSearch,
  withArrow,
  mainTitle,
}) => {
  const wrapperRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const selectionRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const [selected, setSelected] = useState("");

  const currentFilter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    wrapperRef.current.classList.toggle("show");
  };

  useEffect(() => {
    setSelected("");
  }, [currentFilter.mainFilter]);

  const handleItemClick = (selected: string) => {
    setSelected(selected);
  };

  const handleClickOutside = () => {
    wrapperRef.current.classList.remove("show");
  };

  useOnOutsideClick(wrapperRef, handleClickOutside);

  return (
    <DropdownDiv isSearch={isSearch} withArrow={withArrow}>
      <DropBtn onClick={handleTitleClick}>
        {isSearch
          ? currentFilter.mainFilter
          : selected === ""
          ? mainTitle
          : selected}
        {withArrow && <DownArrow src={dropdownArrow} />}
      </DropBtn>
      <DropdownContent id="myDropdown" ref={wrapperRef}>
        {isSearch &&
          MAIN_CATEGORIES.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
                dispatch(filterActions.setMainFilter(item.name));
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Sort By" &&
          CATEGORIES.sort_by.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Dates" &&
          CATEGORIES.dates.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Sources" &&
          CATEGORIES.sources.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Languages" &&
          CATEGORIES.languages.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Results per page" &&
          CATEGORIES.results_per_page.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Category" &&
          CATEGORIES.sub_categories.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {mainTitle === "Country" &&
          CATEGORIES.countries.map((item) => (
            <DropdownItem
              ref={selectionRef}
              key={item.id}
              onClick={() => {
                handleItemClick(item.name);
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
      </DropdownContent>
    </DropdownDiv>
  );
};

export default Dropdown;
