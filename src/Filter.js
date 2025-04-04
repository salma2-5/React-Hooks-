import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    onFilterChange({ ...filter, [name]: value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Filtrer par titre"
        value={filter.title}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filtrer par note"
        value={filter.rating}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Filter;
