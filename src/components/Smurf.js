import React from 'react';

class Smurf extends React.Component {
    constructor(props) {
        super()
        console.log('this is props in smurf',props)
    }
    render() {
        const { smurf } = this.props;
        
        return(<div data-testid="smurf" className="card">
           <p>Name:{this.props.name}</p>
           <p>Nickname:{this.props.nickname}</p>
           <p>Role:{this.props.position}</p>
           <p>About:{this.props.description}</p>
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.