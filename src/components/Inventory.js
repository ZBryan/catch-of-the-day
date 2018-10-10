import React, { Component } from "react";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../Base";

class Inventory extends Component {
  state = {
    uid: null,
    owner: null
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  };

  authHandler = async authData => {
    const store = await base.fetch(this.props.storeid, { context: this });
    if (!store.owner) {
      await base.postMessage(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
      this.setState({
        uid: authData.user.uid,
        owner: store.owner || authData.user.uid
      });
    }
  };
  auth = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  render() {
    const logout = <button onClick={this.logout}>Log Out</button>;
    if (!this.state.uid) {
      return <Login auth={this.auth} />;
    }
    if (this.this.state.uid !== this.this.state.owner) {
      return (
        <div>
          <p>Sorry you don't have permission to view this page</p>
          {logout}
        </div>
      );
    }
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            index={key}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadFish}>Load Sample Fish</button>
      </div>
    );
  }
}
export default Inventory;
