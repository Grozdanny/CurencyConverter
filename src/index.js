import React from 'react'
import ReactDOM from 'react-dom'
import Curency from './components/Curency';

class Exchange extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        Pln: 0,
        Sek: 0,
    };

this.changeCurency = this.changeCurency.bind(this);
};

changeCurency(value, scale){
    switch(scale){
        case "Sek":
            this.setState({Pln: value * 0.45, Sek: value});
            return;
        case "Pln":
            this.setState({Sek: value * 2.2, Pln: value});
            return;
    }
}
render() {
    return (
        <main>
         <Curency
          curencyName="Sek"
          curencyValue={this.state.Sek}
          changeCurency={this.changeCurency}
        />

        <Curency
         curencyName="Pln"
         curencyValue={this.state.Pln}
         changeCurency={this.changeCurency}
        />
        </main>
    )
    
}
}

ReactDOM.render(<Exchange/>, document.getElementById('root'));

