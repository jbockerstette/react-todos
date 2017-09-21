import React from 'react'
import Link from "./Link";
import {store} from "../index";
import {setFilter} from "../actions/filterActions";

class TodoFilter extends React.Component {

  componentDidMount() {
    this.unsubsribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubsribe();
  }


  handleFilter(filter) {
    store.dispatch(setFilter(filter));
  }

  render() {
    const state = store.getState();
    return (
      <div>
        <Link isActive={state.filter === TodoFilter.SHOW_COMPLETE}
              onClick={() => this.handleFilter(TodoFilter.SHOW_COMPLETE)}>
          Complete
        </Link>
        <Link isActive={state.filter === TodoFilter.SHOW_NOT_COMPLETE}
              onClick={() => this.handleFilter(TodoFilter.SHOW_NOT_COMPLETE)}>
          Not Complete
        </Link>
        <Link isActive={state.filter === TodoFilter.SHOW_ALL}
              onClick={() => this.handleFilter(TodoFilter.SHOW_ALL)}>
          All
        </Link>
      </div>
    );
  }
}

TodoFilter.SHOW_ALL = 'show_all';
TodoFilter.SHOW_COMPLETE = 'show_complete';
TodoFilter.SHOW_NOT_COMPLETE = 'show_not_complete';


export default TodoFilter;


