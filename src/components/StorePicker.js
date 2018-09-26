import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();
  gotToStore = e => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.myInput}
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}

export default StorePicker;
