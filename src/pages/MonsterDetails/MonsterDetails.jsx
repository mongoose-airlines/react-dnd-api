import React, { Component } from "react";
import { getDetails } from "../../services/api-calls";

class MonsterDetails extends Component {
  state = {
    url: this.props.location.state.monster.url,
    monsterDetails: {}, 
  };

  async componentDidMount() {
    const monsterDetails = await getDetails(this.state.url);
    console.log(monsterDetails);
    this.setState({ monsterDetails });
    console.log(this.props.location);
  }
  render() {
    const { monsterDetails } = this.state
    return (
      <>
        <h3>Monster Deets</h3>
        <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
        <h2>{monsterDetails.name}</h2>
        <h4>Size: {monsterDetails.size}</h4>
        <h4>Type: {monsterDetails.type}</h4>
        <h4>AC: {monsterDetails.armor_class}</h4>
        <h4>Actions:</h4>
        {monsterDetails.actions ?
        <>
        {monsterDetails.actions.map(action => 
          <div key={action.name}>
            <h4 >{action.name}</h4>
            <h5>{action.desc}</h5>
          </div>
        )}
        </>
        :
        <p>This poor monster has no actions. Womp womp.</p>
        }
      </>
    );
  }
}

export default MonsterDetails;
