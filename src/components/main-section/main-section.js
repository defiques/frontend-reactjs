import React, {Component} from 'react';

import Triangle from '../triangle/triangle';
import './main-section.css';
import MainSectionFieldReg from "../main-section-field-reg";
import MainSectionFieldImg from "../main-section-field-img";
import MainSectionFieldConfirm from "../main-section-field-confirm";

export default class MainSection extends Component {


    renderMainSection = (id) => {

        if (id == 1){
            return <MainSectionFieldReg />
        }
        else if (id == 2) {
            return <MainSectionFieldImg />
        }

        else {
            return <MainSectionFieldConfirm />
        }


    };




    render() {

        const { curIndex } = this.props;

        const curMainSection = this.renderMainSection(curIndex);

        return(
            <div className="main-section">
                <Triangle curIndex={curIndex}/>
                {curMainSection}
            </div>
        )
    }


}