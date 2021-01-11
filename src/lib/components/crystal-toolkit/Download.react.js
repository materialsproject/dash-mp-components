import * as mp from '@materialsproject/mp-react-components';
import React, {Component} from 'react';

export default class Download extends Component {
    render() {
        return <mp.Download {...this.props} />;
    }
}

Download.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
   * When set, a download is invoked using a Blob.
   * Accepts an object with the following structure:
      {
        filename: string;
        content: any;
        isBase64: boolean (optional);
        isDataURL: boolean (optional);
        mimeType: string (optional, default: 'text/plan');
      }
   * Properties in data object take precedent over component props
   */
    data: PropTypes.object,

    /**
     * Set to true if data.content is a base64 string
     */
    isBase64: PropTypes.bool,

    /**
     * Set to true if data.content is a data url
     */
    isDataURL: PropTypes.bool,

    /**
     * Default value for mimeType.
     */
    mimeType: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
