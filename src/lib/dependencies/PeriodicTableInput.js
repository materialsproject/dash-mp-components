import React, {Component} from 'react';
import {elements} from './ElementData';
import Element from './Element';

export default class PeriodicTableInput extends Component {
    onClick(symbol) {
        let currClicked = new Set(this.state.clicked);
        if (currClicked.has(symbol)) {
            // If this is a deselect
            currClicked.delete(symbol);
        } else {
            // Else select it
            currClicked.add(symbol);
        }
        this.setState({clicked: Array.from(currClicked)});

        if (this.props.updateSelected) {
            this.props.updateSelected(Array.from(currClicked));
        }
    }

    constructor(props) {
        super(props);
        let {initialClicked} = props;
        this.state = {clicked: initialClicked};
    }

    render() {
        let rows = [];

        // Main Block
        for (let i = 0; i < 7; i++) {
            let cells = [];
            for (let j = 0; j < 18; j++) {
                let index = i * 18 + j;

                if (index in elements) {
                    let {symbol, number, category} = elements[index];
                    let selected = this.state.clicked.includes(symbol);
                    //let selected = false
                    let enabled = !this.props.disabled.includes(symbol);
                    cells.push(
                        <Element
                            key={number}
                            number={number}
                            symbol={symbol}
                            category={category}
                            enabled={enabled}
                            selected={selected}
                            onClick={clickedSymbol =>
                                this.onClick(clickedSymbol)
                            }
                        />
                    );
                } else {
                    cells.push(
                        <td className="element-blank" key={index + 500} />
                    );
                }
            }
            rows.push(
                <tr className="periodic-row" key={i + 1000}>
                    {cells}
                </tr>
            );
        }

        // Seperator
        rows.push(<tr className="element-blank full" key="9999" />);

        // Lanthanides
        for (let i = 8; i < 10; i++) {
            let cells = [];
            for (let j = 0; j < 18; j++) {
                let index = i * 18 + j;

                if (index in elements) {
                    let {symbol, number, category} = elements[index];
                    let selected = this.state.clicked.includes(symbol);
                    //let selected = false
                    let enabled = !this.props.disabled.includes(symbol);
                    cells.push(
                        <Element
                            key={number}
                            number={number}
                            symbol={symbol}
                            category={category}
                            enabled={enabled}
                            selected={selected}
                            onClick={elementData => this.onClick(elementData)}
                        />
                    );
                } else {
                    cells.push(
                        <td className="element-blank" key={index + 1500} />
                    );
                }
            }
            rows.push(
                <tr className="periodic-row" key={i + 2000}>
                    {cells}
                </tr>
            );
        }

        return (
            <table className="pt-wrapper">
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

PeriodicTableInput.defaultProps = {
    disabled: [],
    initialClicked: [],
    updateSelected: null,
};
PeriodicTableInput.state = {clicked: []};
