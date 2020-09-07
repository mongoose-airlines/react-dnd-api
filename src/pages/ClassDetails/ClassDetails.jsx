import React, { Component } from 'react';
import * as API from '../../services/api-calls'

class ClassDetails extends Component {
  state = { 
    classTitle : this.props.location.state.classTitle.index,
    classDetails: ''
  }
  
  async componentDidMount(){
    const classDetails = await API.getClassDetails(this.props.location.state.classTitle.index)
    console.log(classDetails)
    this.setState({classDetails: classDetails.results})
  }

  render() {
    return (
      <div>sup? class details go here have fun.</div>
    );
  }
}

// Always lol This is fun!!!

// Hrm.  Yeah.  It IS returning the whole list
// which implies that it's not getting the title
//  I WAS JUT ABOUT TO TYPE THAT.  WHEEEEEE 
export default ClassDetails;