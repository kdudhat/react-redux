import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cake- {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
//this function -> convert redux state into props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};
//this function dispatch mathod as props so you can direacly dispatch them using props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
