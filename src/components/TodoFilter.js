import React from 'react'
import PropTypes from 'prop-types';
import Link from "./Link";


const TodoFilter = (props) => {
  const {handleFilter, filter} = props;
  return (
    <div>
      <Link isActive={filter === TodoFilter.SHOW_COMPLETE}
            onClick={() => handleFilter(TodoFilter.SHOW_COMPLETE)}>
         Complete
      </Link>
      <Link isActive={filter === TodoFilter.SHOW_NOT_COMPLETE}
            onClick={() => handleFilter(TodoFilter.SHOW_NOT_COMPLETE)}>
         Not Complete
      </Link>
      <Link isActive={filter === TodoFilter.SHOW_ALL}
            onClick={() => handleFilter(TodoFilter.SHOW_ALL)}>
         All
      </Link>
    </div>
  );
};

TodoFilter.SHOW_ALL = 'show_all';
TodoFilter.SHOW_COMPLETE = 'show_complete';
TodoFilter.SHOW_NOT_COMPLETE = 'show_not_complete';


TodoFilter.PropTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string
};


export default TodoFilter;


