import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class CurencyChange extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pln: 0,
            Sek: 0,
        };
    }

    changeCurency(value,scale){
        switch(scale){
            case "Sek":
                this.setState({Pln: value * 0.45, Sek: value});
                return;
            case "Pln":
                this.setState({Sek: value * 2.2, Pln: value});
                return;
        }
    }

    render(){
        return<>
        <p>Pln</p>
        <input type="text" value={this.state.Pln} onChange={(event) => this.changeCurency(event.target.value, "Pln") }/>
        <p>Sek</p>
        <input type="text" value={this.state.Sek} onChange={(event) => this.changeCurency(event.target.value, "Sek") }/>
        </>
    }
}
export default CurencyChange;