import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
function HooksCakeContainer() {
  //this function is same working as mapStateToProps
  //useSelector select state from redux store and return state value
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);

  //useDispatch is dispatch mathod from store and we can use it to by calling with action
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cake(Hooks)- {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
