import { useDispatch, useSelector } from "react-redux";
import categories from "../../data/categories.json";
import { filterActions } from "../../store/filter";
import { RootState } from "../../store/store";

import { FullDivider, FilterLine, FilterText } from "./StyledFilterMobile";

export enum cat {
  dates = "Dates",
  countries = "Country",
  languages = "Languages",
  results_per_page = "Results per page",
  sources = "Sources",
  sub_categories = "Category",
}

export interface FilterSwitchProps {
  param: string;
  closeClick: (click: boolean) => void;
}

const FilterSwitch: React.FC<FilterSwitchProps> = ({ param, closeClick }) => {
  const dispatch = useDispatch();
  const filterArray = useSelector(
    (state: RootState) => state.filter.filterArray
  );

  return (
    <>
      {(() => {
        switch (param) {
          case cat.dates.valueOf():
            return (
              <>
                {categories.dates.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
          case cat.countries.valueOf():
            return (
              <>
                {categories.countries.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
          case cat.languages.valueOf():
            return (
              <>
                {categories.languages.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
          case cat.results_per_page.valueOf():
            return (
              <>
                {categories.results_per_page.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
          case cat.sources.valueOf():
            return (
              <>
                {categories.sources.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
          case cat.sub_categories.valueOf():
            return (
              <>
                {categories.sub_categories.map((item, index) => (
                  <div key={index}>
                    <FilterLine
                      onClick={() => {
                        const id = item.id;
                        const category = param.replace(/\s/g, "").toLowerCase();
                        dispatch(filterActions.addSubFilter({ category, id }));
                        closeClick(false);
                        console.log(filterArray);
                      }}
                    >
                      <FilterText>{item.name}</FilterText>
                    </FilterLine>
                    <FullDivider />
                  </div>
                ))}
              </>
            );
        }
      })()}
    </>
  );
};

export default FilterSwitch;
