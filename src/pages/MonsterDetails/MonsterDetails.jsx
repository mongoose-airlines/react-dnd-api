import React, { Component } from 'react'
import { getMonsterDetails } from '../../services/api-calls'

class MonsterDetails extends Component {
  state = { 
    name: this.props.location.state.monster.index,
    // I was unsuccessful I am sad
    // what results do we want to show on the page?
    // ^^
    // OK fixed it woot woot
    // we have access to....
    // name, size, type, armor_class I was going to list more but there is so much lol
    monsterDetails: {} //blahblahblah
  }

  async componentDidMount() {
    const monsterDetails = await getMonsterDetails(this.state.name)
    console.log(monsterDetails)
    this.setState({monsterDetails})
    console.log(this.props.location)
  }
  render() {
    return ( 
      <>
        <h3>Monster Deets</h3>
    <div>{this.state.monsterDetails.name}</div>
      </>
    );
  }
}
 
export default MonsterDetails;