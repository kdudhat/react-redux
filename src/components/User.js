import React, { useEffect } from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";

function User(props) {
  const { loading, users, error } = props.userData;
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <>
          {users.map((name) => (
            <li>{name}</li>
          ))}
        </>
      )}
      {error && <h2>{error}</h2>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUser: () => dispatch(fetchUser()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
