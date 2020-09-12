import React from 'react';
import PropTypes from 'prop-types';


export function ProjectList(props) {
    return (
        <div className="portfolio_grid">
            {props.projects.map((project) =>
            <img key={project.index}
              className="portfolio_item"
              src={project.img} />
            )}
        </div>
    );
}

ProjectList.propTypes = {
    projects:PropTypes.array.isRequired,
};
