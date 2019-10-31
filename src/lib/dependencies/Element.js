import React, {Component} from 'react';

export default class Element extends Component {
    onClick(event) {
        if (this.props.enabled) {
            this.props.onClick(this.props.symbol);
        }
    }

    render() {
        let {number, symbol, category, enabled, selected} = this.props;

        let classList = ['face', 'front'];

        if (!enabled) {
            classList.push('disabled');
        } else if (selected) {
            classList.push('active');
        }

        return (
            <td className={category}>
                <div className="chip">
                    <div
                        onClick={event => this.onClick(event)}
                        className={classList.join(' ')}
                    >
                        <i className="hidden-phone">{number}</i>
                        <strong className="symbol">{symbol}</strong>
                    </div>
                </div>
            </td>
        );
    }
}

Element.defaultProps = {
    number: 0,
    symbol: '',
    category: '',
    enabled: false,
    selected: false,
    onClick: null,
};
