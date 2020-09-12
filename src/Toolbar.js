import React from 'react';
import PropTypes from 'prop-types';

export function Toolbar(props) {
    const onSelectFilter = event => {
        props.onSelectFilter(event.target.textContent)
    }

    return (
        props.filters.map((filter) =>
            <button key={filter}
              onClick={onSelectFilter}
              className={filter === props.selected ? 'selected' : 'not-selected'}>
              {filter}
            </button>
        )
    );
}


Toolbar.PropTypes = {
    filters:PropTypes.array.isRequired,
    selected:PropTypes.string.isRequired,
    onSelectFilter:PropTypes.func.isRequired,
};
