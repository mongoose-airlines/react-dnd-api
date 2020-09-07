import React, { Component } from 'react'
import * as API from '../../services/api-calls'
import { Link } from 'react-router-dom'


class ClassList extends Component {
  state = {
    results : [] 
  }

  async componentDidMount() {
    // This will be where we call the API via the services module
    // and then run setState to update state with the info returned 
    // from the API  (Leave these comments here for now, IMO)
    const classData = await API.getClassList()
    this.setState({ results: classData.results}) 
    console.log(this.state.results)
    // leave this one, just so we can access it

    //** each result has index, name, and url classTitle.url I think that you're right, keep going sorry lol
  } // Now we need to add these links to our App.js Route.

  render() {
    return(
      <>
        <h1>DERP, I'M THE CLASS DATA COMPONENT</h1> 
        { this.state.results.map((classTitle) => 
          <Link
            key={classTitle.index}
            to={{
              pathname: `/class/${classTitle.index}`,
              state: {classTitle}
            }}
          >{classTitle.name}               
          </Link>
        )}
      </>
    )
  }
}

export default ClassList;