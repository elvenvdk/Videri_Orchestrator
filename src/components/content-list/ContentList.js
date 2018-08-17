import React from "react";

import styles from "./ContentList.scss";
import PicLandscapeIcon from "../../img/svg/pic-landscape-icon.svg";
import VideoCamIcon from "../../img/svg/video-cam-icon.svg";

const ContentList = ({ previewPictureItems, previewVideoItems, itemClick }) => {
  let previewPictureData;
  if (previewPictureItems === undefined) previewPictureData = null;
  else
    previewPictureData = previewPictureItems.map(item => (
      <div
        onClick={() => itemClick(item.largeImageURL)}
        className={styles.Contentlist_Picture_Container}
        key={item.id}
      >
        <div>
          <img src={item.previewURL} alt="Thumbnail" />
          <div>
            <p>
              {item.tags.split(" ")[0].match(/[a-zA-Z0-9]/gi)}
              .jpg
            </p>
            <div className={styles.Contentlist_Image_Icon}>
              <img src={PicLandscapeIcon} alt="Pic Icon" />
            </div>
            <div>
              <p>
                {item.imageWidth} x {item.imageHeight}
              </p>
            </div>
            <div>
              <p>Created {item.userImageURL.substring(29, 39)}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  let previewVideoData;
  if (previewVideoItems === undefined) previewVideoData = null;
  else
    previewVideoData = previewVideoItems.map(item => (
      <div
        onClick={() => itemClick(item.videos.tiny.url)}
        className={styles.Contentlist_Video_Container}
        key={item.id}
      >
        <div>
          <video
            src={item.videos.tiny.url}
            width="200"
            height="100"
            alt="Thumbnail"
          />
          <div>
            <p>
              {item.tags.split(" ")[0].match(/[a-zA-Z0-9]/gi)}
              .mp4
            </p>
            <div className={styles.Contentlist_Video_Icon}>
              <img src={VideoCamIcon} alt="Video Icon" />
              <p>
                00:
                {item.duration}
              </p>
            </div>
            <div>
              <p>
                {item.videos.tiny.width} x {item.videos.tiny.height}
              </p>
            </div>
            <div>
              <p>Created {item.userImageURL.substring(29, 39)}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className={styles.Contentlist}>
      {previewPictureData}
      {previewVideoData}
    </div>
  );
};

export default ContentList;
