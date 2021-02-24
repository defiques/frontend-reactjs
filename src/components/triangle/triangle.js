import React, {Component} from 'react';

import './triangle.css';

export default class Triangle extends Component{


    render() {

        const { curIndex } = this.props;

        let className = 'triangle';

        if (curIndex == 1){
            className += ' first'
        }
        else if (curIndex == 2){
            className += ' second'
        }

        else {
            className += ' third'
        }



        return (
            <div className={className}>
            </div>
        )
    }

}