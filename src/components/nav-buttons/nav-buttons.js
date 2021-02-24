import React, {Component} from 'react';

import './nav-buttons.css';

export default class NavButtons extends Component {


    onButtonClick = (e) => {


        const { changeCurIndexOnClick } = this.props;

        return changeCurIndexOnClick(e)

    };


    render() {

        const { changeCurIndexOnClick } = this.props;

        return(
            <div className="nav-buttons">
                <button className="nav-buttons-btn"
                        id={1}
                        onClick={this.onButtonClick}>
                        Отменить
                </button>
                <button type="button"
                        className="nav-buttons-btn"
                        id={2}
                        onClick={this.onButtonClick}>
                        Назад
                </button>
                <button type="button"
                        className="nav-buttons-btn"
                        id={3}
                        onClick={this.onButtonClick}>
                        Продолжить
                </button>
            </div>
        )
    }


}