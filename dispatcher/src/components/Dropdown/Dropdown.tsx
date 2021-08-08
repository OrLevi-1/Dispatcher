import React, { useEffect, useState } from "react";
import { useRef, RefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropdownArrow } from "../../assets";
import { filterActions } from "../../store/filter";
import { RootState } from "../../store/store";
import categories from "../../data/categories.json";

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
  mainTitle?: string;
}

interface item {
  id: string;
  name: string;
}

const MAIN_CATEGORIES = [
  { id: "everything", name: "Everything" },
  { id: "topHeadlines", name: "Top Headlines" },
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

  const filterArray = useSelector(
    (state: RootState) => state.filter.filterArray
  );
  const currentFilter = useSelector((state: RootState) => state.filter);
  const currentPage = useSelector(
    (state: RootState) => state.filter.currentPage
  );
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    wrapperRef.current.classList.toggle("show");
    if (mainTitle === "Next Page") {
      dispatch(
        filterActions.addSubFilter({ category: "page", id: currentPage + 1 })
      );
      dispatch(filterActions.incrementPage());
      console.log("next-page");
    }
    if (mainTitle === "Next") {
      dispatch(
        filterActions.addSubFilter({ category: "page", id: currentPage + 1 })
      );
      dispatch(filterActions.incrementPage());
      console.log("next-page");
    }
    if (mainTitle === "Previous Page") {
      if (currentPage > 1) {
        dispatch(
          filterActions.addSubFilter({ category: "page", id: currentPage - 1 })
        );
        dispatch(filterActions.decrementPage());
        console.log("prev-page");
      }
    }
    if (mainTitle === "Prev") {
      if (currentPage > 1) {
        dispatch(
          filterActions.addSubFilter({ category: "page", id: currentPage - 1 })
        );
        dispatch(filterActions.decrementPage());
        console.log("prev-page");
      }
    }
  };

  useEffect(() => {
    setSelected("");
  }, [currentFilter.mainFilter]);

  const handleItemClick = (selected: item, category?: string) => {
    setSelected(selected.name);
    const id = selected.id;
    if (id !== "topHeadlines" && id !== "everything") {
      dispatch(filterActions.addSubFilter({ category, id }));
    } else {
      dispatch(filterActions.clearFilterArray());
    }

    console.log(filterArray);
  };

  const handleClickOutside = () => {
    wrapperRef.current.classList.remove("show");
  };

  useOnOutsideClick(wrapperRef, handleClickOutside);

  enum cat {
    sort_by = "Sort By",
    dates = "Dates",
    countries = "Country",
    languages = "Languages",
    results_per_page = "Results per page",
    sources = "Sources",
    sub_categories = "Category",
  }

  const renderSwitch = (param: string) => {
    switch (param) {
      case cat.sort_by.valueOf():
        return categories.sort_by.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.dates.valueOf():
        return categories.dates.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.countries.valueOf():
        return categories.countries.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.languages.valueOf():
        return categories.languages.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.results_per_page.valueOf():
        return categories.results_per_page.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.sources.valueOf():
        return categories.sources.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
      case cat.sub_categories.valueOf():
        return categories.sub_categories.map((item) => (
          <DropdownItem
            ref={selectionRef}
            key={item.id}
            onClick={() => {
              handleItemClick(item, param.replace(/\s/g, "").toLowerCase());
            }}
          >
            {item.name}
          </DropdownItem>
        ));
    }
  };

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
                handleItemClick(item);
                dispatch(filterActions.setMainFilter(item.name));
              }}
            >
              {item.name}
            </DropdownItem>
          ))}
        {renderSwitch(mainTitle!)}
      </DropdownContent>
    </DropdownDiv>
  );
};

export default Dropdown;
