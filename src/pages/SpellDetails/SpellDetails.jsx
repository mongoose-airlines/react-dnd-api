import React, { Component } from 'react'
import { getSpellDetails } from '../../services/api-calls'

class SpellDetails extends Component {
  state = {
    spellDetails: {},
   }

  async componentDidMount() {
    const spellDetails = await getSpellDetails(this.props.match.params.name)
    console.log(spellDetails)
    this.setState({ spellDetails: spellDetails })
    console.log(this.state.spellDetails)
  }

  render() {
    const { spellDetails } = this.state
    return (
      <>
        { spellDetails.name ? 
        <>
          <h1>{spellDetails.name}</h1>
          <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
          <p>{spellDetails.desc[0]}</p>
          <h2>Spell Player Classes</h2>
          {spellDetails.classes.length ?
          <>
            {spellDetails.classes.map(playerClass =>
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
            )}
          </>
          :
          <p>No player classes may use this spell</p>
          }
        </>
        :
        <>
          <p>Loading spell details...</p>
        </>
        }
      </>
     );
  }
}


export default SpellDetails;
