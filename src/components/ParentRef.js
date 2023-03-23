import React, { Component } from 'react';
import ChildRef from './ChildRef.js';
class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.parentref = React.createRef();
  }

  Clickevent = () => {
    this.parentref.current.focusinp();
  };

  render() {
    return (
      <>
        <ChildRef ref={this.parentref} />
        <button onClick={this.Clickevent}>Click Here to Focus</button>
      </>
    );
  }
}

export default ParentRef;
