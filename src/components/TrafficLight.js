import React, { Component } from 'react';
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const YELL = 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.state = {
            currentColor: GREEN
        };

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 1000);

    };

    getNextColor(color){
        switch(color){
            case RED:
                return YELL;
            case YELL:
                return GREEN;
            default:
                return RED;
        };
    };

    render(){
        const { currentColor } = this.state;

        console.log(currentColor)
        return <div className="TrafficLight">
            <div className={ classNames('bulb', 'red', {
                active: currentColor === RED
            })} />
            <div className={ classNames('bulb', 'yellow', {
                active: currentColor === YELL
            })} />
            <div className={ classNames('bulb', 'green', {
                active: currentColor === GREEN
            })} />
        </div>
    };
};

export default TrafficLight;