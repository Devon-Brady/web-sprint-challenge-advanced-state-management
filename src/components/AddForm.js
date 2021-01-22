import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import {addSmurf} from '../actions/index'
import axios from 'axios';
class AddForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      position: "",
      nickname: "",
      description: "",
    };
    // console.log(this.state);
  }
  handleChange = (evt) => {
    const correctValue = evt.target.name;
    this.setState({
      [correctValue]: evt.target.value,
    });
    // console.log(this.state);
  };
  onSubmit = (e) => {
      e.preventDefault();
     this.props.addSmurf(this.state);
  }
  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input onChange={this.handleChange} name="name" id="name" />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="position"
              id="position"
            />
          </div>
          <div>
            <label htmlFor="nickname">Nickname</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="nickname"
              id="nickname"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="description"
              id="description"
            />
          </div>
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error:{ this.props.error}
          </div>
          <button>Submit Smurf</button>
        </form>
      </section>
    );
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
export default connect(mapStateToProps,{addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
