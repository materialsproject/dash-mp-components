import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class Scrollspy extends Component {
    render() {
        return (
          <mp.Scrollspy {...this.props}/>
        );
    }
}

Scrollspy.propTypes = {
  className: PropTypes.string,
  menuGroups: PropTypes.array,
  activeItemClassName: PropTypes.string,
  offset: PropTypes.number,
  menuLabelClassName: PropTypes.string,
  menuContainerClassName: PropTypes.string,
  menuItemClassName: PropTypes.string,
};
