import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PropTypes from "prop-types";

import styles from "./FolderNav.scss";
import folderImg from "../../../img/svg/folder1.svg";
import {
  getCars,
  getClouds,
  getUrban,
  getCountry
} from "../../../actions/contentActions";

class FolderNav extends Component {
  render() {
    return (
      <nav className={styles.Nav}>
        <ul className={styles.Nav_list}>
          <li>
            <img
              onClick={_.debounce(() => this.props.getCars(), 500)}
              src={folderImg}
              alt="Folder 1"
            />
            <div>Folder 1</div>
          </li>
          <li>
            <img
              onClick={_.debounce(() => this.props.getClouds(), 500)}
              src={folderImg}
              alt="Folder 2"
            />
            <div>Folder 2</div>
          </li>
          <li>
            <img
              onClick={_.debounce(() => this.props.getUrban(), 500)}
              src={folderImg}
              alt="Folder 3"
            />
            <div>Folder 3</div>
          </li>
          <li>
            <img
              onClick={_.debounce(() => this.props.getCountry(), 500)}
              src={folderImg}
              alt="Folder 3"
            />
            <div>Folder 4</div>
          </li>
        </ul>
      </nav>
    );
  }
}

FolderNav.propTypes = {
  getCars: PropTypes.func.isRequired,
  getClouds: PropTypes.func.isRequired,
  getUrban: PropTypes.func.isRequired,
  getCountry: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCars, getClouds, getUrban, getCountry }
)(FolderNav);
