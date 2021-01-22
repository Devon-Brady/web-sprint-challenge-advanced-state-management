import React from "react";
import {connect} from 'react-redux';
import Smurf from './Smurf';

export class SmurfDisplay extends React.Component {
    constructor(props) {
        super()
        console.log('this is props in smurfDis',props)
    }
  render() {
    return this.props.appLoading ? <div>Smurfs are loading</div> : 
    <div>
        
        {this.props.smurfs.map(ele =>(
            <Smurf
            name={ele.name}
            position={ele.position}
            nickname={ele.nickname}
            description={ele.description}
            />
        ))}
    </div>;
  }
}
const mapStateToProps = (state) => {
    // console.log(state)
  return {
    smurfs: state.smurfs,
    appLoading: state.appLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps)(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
