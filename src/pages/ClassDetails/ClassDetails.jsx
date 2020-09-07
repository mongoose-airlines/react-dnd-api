import React, { Component } from 'react';
import { getClassDetails } from '../../services/api-calls'

class ClassDetails extends Component {
  state = { 
    classTitle : this.props.location.state.classTitle.index,
    classDetails: {
      name: "",
      hit_die: "",
      proficiencies: []
    }
  }
  
  async componentDidMount(){
    const classDetails = await getClassDetails(this.props.location.state.classTitle.index)
    console.log(classDetails)
    this.setState({classDetails})
  }

  
  render() {
    const {classDetails} = this.state
    return (
      <div>
        <div>{classDetails.name}</div>
        <div>Hit die: d{classDetails.hit_die}</div>
        <div>Proficiencies:</div>
        {classDetails.proficiencies.map((proficiency) =>
          <div key={proficiency.index}>
            {proficiency.name}
          </div>
        )}
      </div>
    );
  }
}
 
export default ClassDetails;