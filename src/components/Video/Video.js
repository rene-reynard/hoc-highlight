import React from 'react';
import PropTypes from "prop-types";

const Video = ({ url, views }) => (
  <div className="item item-video">
    <iframe title='myFrame' src={url} />
    <p className="views">Просмотров: {views}</p>
  </div>
);

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number
}

Video.withCondition = ({ type }) => "video" === type;

export default Video;