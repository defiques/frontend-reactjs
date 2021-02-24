import React, {Component} from 'react';

import './main-section-field-reg.css';


export default class MainSectionFieldReg extends Component {

    state = {
        isValid: true,
        term: ''
    };


    checkIsValid = (e) => {
        if (!e.target.checkValidity()){
            this.setState({
                isValid: false
            });
        }
        else {
            this.setState({
                isValid: true
            });
        }
    };

    onTermChange = (e) => {
        this.setState({
            term: e.target.value
        });

        this.checkIsValid(e);
    };


    render() {

        let className = 'main-section-field-error';

        if (!this.state.isValid) {
            className += ' invalid';
        }

        
        return(
            <div className="main-section-field-reg">
                <div className="main-section-field">
                    <h1>Имя</h1>
                    <input type="text"
                    placeholder="Введите имя"/>
                </div>
                <div className="main-section-field">
                    <h1>Фамилия</h1>
                    <input type="text"
                    placeholder="Введите фамилию"/>
                </div>
                <div className="main-section-field">
                    <h1>Эл.почта</h1>
                    <input type="email"
                           placeholder="Введите е-майл"
                           value={this.state.term}
                           onChange={this.onTermChange}/>
                    <div className={className}>
                        <h2>Адрес электронной почты указан неверно</h2>
                    </div>
                </div>
                <div className="main-section-field">
                    <h1>Пароль</h1>
                    <input type="password"
                    placeholder="Введите пароль"/>
                </div>
            </div>
        )
    }

}