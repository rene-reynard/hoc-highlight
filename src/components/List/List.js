import React from 'react';
import PropTypes from "prop-types";

import Video from '../Video/Video';
import Article from '../Article/Article';
import New from "../New/New";
import Popular from "../Popular/Popular";

import withConditionChainWrapper from '../../utils/withConditionWrapper';

const ListItem = withConditionChainWrapper([Video, Article, New, Popular]);

const List = ({ list }) => (
  <>
    {list.map((item, index) => (
      <ListItem {...item} key={index} />
    ))}
  </>
);

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    url: PropTypes.string,
    title: PropTypes.string
  }))
};

export default List;