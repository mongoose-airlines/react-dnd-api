import React, { Component } from "react";
import { getDetails } from "../../services/api-calls";

class ClassDetails extends Component {
  state = {
    url: this.props.location.state.classTitle.url,
    classDetails: {},
  };

  async componentDidMount() {
    const classDetails = await getDetails(this.state.url);
    this.setState({ classDetails });
  }

  render() {
    const { classDetails } = this.state;
    return (
      <div>
        {classDetails.name ?
        <>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <h2>{classDetails.name}</h2>
          <div>Hit die: d{classDetails.hit_die}</div>
          <h3>Proficiencies:</h3>
          {classDetails.proficiencies.map((proficiency) => (
            <div key={proficiency.index}>{proficiency.name}</div>
          ))}
        </>
        :
        <>
          <p>Loading class details...</p>
        </>
        }
      </div>
    );
  }
}

export default ClassDetails;
