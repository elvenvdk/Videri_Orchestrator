import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./Content.scss";
import Navbarmain from "../nav/navbar-main/NavbarMain";
import FolderNav from "../nav/folder-nav/FolderNav";
import ContentList from "../content-list/ContentList";
import ContentItem from "../content-item/ContentItem";
import SearchStrip from "../search-strip/SearchStrip";
import { selectContent } from "../../actions/contentActions";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcontent: false
    };
  }

  onSelectContent = selectedContent => {
    this.props.selectContent(selectedContent);
    this.setState({ showcontent: true });
  };

  onCloseContent = () => {
    this.setState({ showcontent: false });
  };

  render() {
    const { contentURL } = this.props.content;
    const { pictures, videos } = this.props.preview;

    let items;
    if (pictures.hits === undefined)
      items = <h5>Click a folder to view media</h5>;
    if (videos.hits === undefined)
      items = <h5>Click a folder to view media</h5>;
    if (pictures.hits || videos.hits)
      items = (
        <ContentList
          itemClick={this.onSelectContent}
          previewPictureItems={pictures.hits}
          previewVideoItems={videos.hits}
        />
      );

    return (
      <div className={styles.Content}>
        <Navbarmain />
        <FolderNav />
        <SearchStrip />
        {items}
        <ContentItem
          show={this.state.showcontent}
          contentClosed={this.onCloseContent}
          contentItem={contentURL}
        />
      </div>
    );
  }
}

Content.propTypes = {
  preview: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  selectContent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  preview: state.preview,
  content: state.content
});

export default connect(
  mapStateToProps,
  { selectContent }
)(Content);
