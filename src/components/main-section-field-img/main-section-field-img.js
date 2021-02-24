import React, { Component } from 'react';
import './main-section-field-img.css';

export default class MainSectionFieldImg extends Component {


    render() {

        return(
            <div className="main-section-field-img">
                <div className="main-section-field-img-load">
                    <form action=""
                          className="form">
                        <label htmlFor="load-img"
                               className="form-label">
                            Загрузить изображение
                            <i className="fas fa-image">
                            </i>
                        </label>
                        <input type="file"
                               name="file"
                               className="load-img" id="load-img"
                               accept="image/jpeg,image/png,image/gif">
                        </input>
                    </form>
                </div>
            </div>
        )
    }

}