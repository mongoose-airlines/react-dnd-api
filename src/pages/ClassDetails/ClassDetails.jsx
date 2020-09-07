import React, { Component } from 'react';

class ClassDetails extends Component {
  state = { classTitle : this.props.location.state.classTitle.name }
  render() {
    console.log(this.state.classTitle)
    console.log(this.props)
    return (
      <div>sup? class details go here have fun.</div>
    );
  }
}
// is that state thing right? that's what we're passing to this, right?
// I don't think I ever wrote anything that ugly is this just API bull?
// I
// OK.  Time for a PUSH
export default ClassDetails;