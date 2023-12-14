import { useState } from "react";
import { getAllianceNameByCode } from "../util/util";
import Checkbox from "./Checkbox";

const Filter = ({ onChange }) => {
  const [filters, setFilters] = useState({});

  const alliances = ["OW", "ST", "SA"];

  const onFilterChange = (code) => {
    const current = {
      ...filters,
      [code]: filters[code] === undefined ? true : !filters[code]
    };
    setFilters(current);

    const filterBy = [];
    alliances.forEach((alliance) => {
      if (current[alliance]) {
        filterBy.push(alliance);
      }
    });
    console.log(current, code);
    onChange(filterBy);
  };
  const allianceComponents = alliances.map((alliance) => {
    if (alliance === "none") return null;
    return (
      <Checkbox
        className="filter--item"
        key={alliance}
        text={getAllianceNameByCode(alliance)}
        onChange={() => {
          onFilterChange(alliance);
        }}
        checked={filters[alliance] !== undefined ? filters[alliance] : false}
      />
    );
  });

  return (
    <div className="filter">
      <h2 className="filter--title">Filter by Alliances</h2>
      <div className="filter--items">{allianceComponents}</div>
    </div>
  );
};

export default Filter;
