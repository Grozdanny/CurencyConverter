import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Curency extends React.Component{
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
                this.setState({Pln: value * 2.2, Sek: value});
                return;
            case "Pln":
                this.setState({Sek: value * 0.451791, Pln: value});
                return;
        }
    }

    render(){
        return<>
        <p>Pln (Polish currency)</p>
        <input type="text" value={this.state.Pln} onChange={(event) => this.changeCurency(event.target.value, "Pln") }/>
        <p>Sek (Swedish currency)</p>
        <input type="text" value={this.state.Sek} onChange={(event) => this.changeCurency(event.target.value, "Sek") }/>
        </>
    }
}
export default Curency;import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Curency extends React.Component{
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
                this.setState({Pln: value * 2.2, Sek: value});
                return;
            case "Pln":
                this.setState({Sek: value * 0.451791, Pln: value});
                return;
        }
    }

    render(){
        return<>
        <p>Pln (Polish currency)</p>
        <input type="text" value={this.state.Pln} onChange={(event) => this.changeCurency(event.target.value, "Pln") }/>
        <p>Sek (Swedish currency)</p>
        <input type="text" value={this.state.Sek} onChange={(event) => this.changeCurency(event.target.value, "Sek") }/>
        </>
    }
}
export default Curency;