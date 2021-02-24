import React, { Component } from 'react';
import './main-section-field-confirm.css';

export default class MainSectionFieldConfirm extends Component {


    render() {

        return(
            <div className="main-section-field-confirm">
                <div className="main-section-field-confirm-pwd">
                    <div className="confirm-label">
                        Подтвердите пароль
                    </div>
                    <input type="password"
                           placeholder="Подтвердите пароль"/>
                </div>
            </div>
        )
    }
}