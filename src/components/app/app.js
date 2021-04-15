import React, { Component } from 'react';

import NavIcons from '../nav-icons';
import NavButtons from '../nav-buttons';

import './app.css';
import MainSection from "../main-section";

export default class App extends Component{


    state = {
        curIndex: 1
    };

    getCurIndex = (e) => {


        this.setState({
            curIndex: e.target.id
        });


    };

    changeCurIndexOnClick = (e) => {

        if (+e.target.id === 1){
            this.setState({
                curIndex: 1
            });
        }

        else if (+e.target.id === 2 && this.state.curIndex !== 1){
            this.setState({
                curIndex: --this.state.curIndex
            });
        }

        else if (+e.target.id === 3 && this.state.curIndex !== 3) {
            this.setState({
                curIndex: ++this.state.curIndex
            });
        }

    };
    

    render() {
        return (
            <div className="front-app">
                <NavIcons getCurIndex={this.getCurIndex}
                            curIndex={this.state.curIndex}/>
                <MainSection curIndex={this.state.curIndex} />
                <NavButtons curIndex={this.state.curIndex}
                            changeCurIndexOnClick={this.changeCurIndexOnClick}/>
            </div>
        )
    }
}
