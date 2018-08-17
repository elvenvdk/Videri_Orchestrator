import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContentItem.scss";
import Aux from "../../hoc/Aux";
import Backdrop from "../backdrop/Backdrop";

class ContentItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    const subStr = "https://player.vimeo.com";
    const contentStr = this.props.contentItem.substring(0, 24);
    let contentItemDisplay;
    if (contentStr.indexOf(subStr) > -1)
      contentItemDisplay = (
        <video src={this.props.contentItem} controls height="600" width="500" />
      );
    else
      contentItemDisplay = (
        <img src={this.props.contentItem} alt="Content item" />
      );
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.contentClosed} />
        <div
          className={styles.Contentitem}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            background: "black"
          }}
        >
          <button onClick={this.props.contentClosed}>Close</button>
          <h5>Content Item</h5>
          {contentItemDisplay}
        </div>
      </Aux>
    );
  }
}

ContentItem.propTypes = {
  contentItem: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired
};

export default ContentItem;
