import React, { useState, useEffect } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import TechItem from "./TechItem";
// REDUX
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => (
              <TechItem key={tech.id} tech={tech}></TechItem>
            ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
