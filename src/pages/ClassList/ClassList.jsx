import React, { Component } from "react";
import { getClassList } from "../../services/api-calls";
import { Link } from "react-router-dom";

class ClassList extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {

    const classData = await getClassList();
    this.setState({ results: classData.results });
    console.log(this.state.results);
  } 

  render() {
    return (
      <>
        <h1>DERP, I'M THE CLASS DATA COMPONENT</h1>
        {this.state.results.map((classTitle) => (
          <>
          <Link
            key={classTitle.index}
            to={{
              pathname: `/class/${classTitle.index}`,
              state: { classTitle },
            }}
          >
            {classTitle.name}
          </Link><br></br>
          </>
        ))}
      </>
    );
  }
}

export default ClassList;
