import React, { Component } from 'react';
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const YELL = 1;
const GREEN = 2;

class TrafficLight extends Component{
    constructor(){
        super();
        this.currentColor = RED;

        setInterval(() => {
            this.currentColor = this.getNExtColor(this.currentColor);
        }, 1000);

    };

    getNExtColor(color){
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
        return <div className="TrafficLight">
            <div className={ classNames('bulb', 'red', {
                active: this.currentColor === RED
            })} />
            <div className="bulb yellow" />
            <div className="bulb green" />
        </div>
    };
};

export default TrafficLight;