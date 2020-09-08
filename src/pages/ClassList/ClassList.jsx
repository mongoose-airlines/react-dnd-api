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
        <div className="icon-container">
          {this.state.results.map((classTitle) => (
            <Link
            to={{
              pathname: `/class/${classTitle.index}`,
              state: { classTitle },
            }}
          >
            <div id="classDiv" key={classTitle.index}>
              <img style={{ width: "100px", height: "100px" }} src={`/images/${classTitle.name}.svg`} alt=""/>
              
                {classTitle.name}
            </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default ClassList;
