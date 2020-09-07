import React, { Component } from 'react'
import * as API from '../../services/api-calls'

class ClassList extends Component {
  state = {
    classData : [] 
  }

  async componentDidMount() {
    // This will be where we call the API via the services module
    // and then run setState to update state with the info returned 
    // from the API  (Leave these comments here for now, IMO)
    const classData = await API.getClassList()
    console.log(classData)
  this.setState({classData}) 
    // this doesn't seem right to me?
    // shouldn't it be like....
    // this.setState((state) => {
      //  return {results: classData.results}
    //})
    // and then also rename classData to results 
    // since that's what we get back from the API

    // brb

    // what is going on in App lol?
    // it's working
    // we have state being set.  Just need to make an adjustment
    // go load it and check the console
    // App.js is wildly broken on my end lol....
    // ORLY?  Lemme push
    
  }
  render() {
    return(
      <>
        <h1>DERP, I'M THE CLASS DATA COMPONENT</h1>
      </>
    )
  }
}

export default ClassList;