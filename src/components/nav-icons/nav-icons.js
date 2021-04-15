import React, {Component} from 'react';
import './nav-icons.css';

export default class NavIcons extends Component {

    state = {
        style: {
            transform: `rotate(360deg)`,
            transition: `transform 2000ms`,
            },
        buttons: [
            { className: "fas fa-user", active: true },
            { className: "fas fa-image", active: false },
            { className: "fas fa-check", active: false }
        ]
        };

    setItemStyleOnMouseOver = (e) => {

        this.setState({
            style: {
                transform: null,
                transition: null,
            }
        });

        e.target.style.transform = this.state.style.transform;
        e.target.style.transition = this.state.style.transition;
    };

    setItemStyleOnMouseLeave = (e) => {

        this.setState({
            style: {
                transform: `rotate(360deg)`,
                transition: `transform 2000ms`
            }
        });

        e.target.style.transform = this.state.style.transform;
        e.target.style.transition = this.state.style.transition;
    };

    setItemStyleOnMouseClick = (e) => {

        this.state.buttons.map(({ className }, index) => {
            if (e.target.className === className + ' inactive'
                || e.target.className === className + ' active') {
                this.setState(prevState => {
                    const buttons = prevState.buttons.slice();
                    buttons[index] = {...buttons[index], active: true};

                    return {buttons}
                })
            }
            else {
                this.setState(prevState => {
                    const buttons = prevState.buttons.slice();
                    buttons[index] = {...buttons[index], active: false};

                    return {buttons}
                })
            }


        });



        const { getCurIndex } =  this.props;



        return getCurIndex(e)

    };

    componentDidUpdate(prevProps) {
        
        if (this.props.curIndex !== prevProps.curIndex) {
            const { curIndex } = this.props;

            this.state.buttons.map(({ className }, index) => {
                if (index + 1 === +curIndex) {
                    this.setState(prevState => {
                        const buttons = prevState.buttons.slice();
                        buttons[index] = {...buttons[index], active: true};

                        return {buttons}
                    })
                }
                else {
                    this.setState(prevState => {
                        const buttons = prevState.buttons.slice();
                        buttons[index] = {...buttons[index], active: false};

                        return {buttons}
                    })
                }


            });
        }
    }





    render() {


        const classNames = this.state.buttons.map(({ className, active }, index) => {
            if (active) {
                return `${className} active`;
            }

            else {
                return `${className} inactive`
            }
        });






        return(


            <div className="nav-icons">
                <button type="button"
                        className="nav-icons-btn">
                    <i className={classNames[0]}
                       id={1}
                       onClick={this.setItemStyleOnMouseClick}
                       onMouseOver={this.setItemStyleOnMouseOver}
                       onMouseLeave={this.setItemStyleOnMouseLeave}
                       >
                    </i>
                </button>

                <button type="button"
                        className="nav-icons-btn">
                    <i className={classNames[1]}
                       id={2}
                       onMouseOver={this.setItemStyleOnMouseOver}
                       onMouseLeave={this.setItemStyleOnMouseLeave}
                       onClick={this.setItemStyleOnMouseClick}>
                    </i>
                </button>

                <button type="button"
                        className="nav-icons-btn">
                    <i className={classNames[2]}
                       id={3}
                       onMouseOver={this.setItemStyleOnMouseOver}
                       onMouseLeave={this.setItemStyleOnMouseLeave}
                       onClick={this.setItemStyleOnMouseClick}>
                    </i>
                </button>


            </div>

        );
    }

};
