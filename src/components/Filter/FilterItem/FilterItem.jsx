import React from "react";
import PropTypes from "prop-types";

const FilterItem = ({ item, onChange }) => {
  return (
    <div className="filter__item" key={item}>
      <label className="filter__label" htmlFor={item}>
        {item}
      </label>
      <input
        className="filter__input"
        id={item}
        type="radio"
        name="pokeType"
        value={item}
        onChange={onChange}
      />
    </div>
  );
};

FilterItem.propTypes = {
  item: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterItem;
