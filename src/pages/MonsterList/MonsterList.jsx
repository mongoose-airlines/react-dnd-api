import React, { Component } from "react";
import { getMonsterList } from "../../services/api-calls";
import { Link } from "react-router-dom";

class MonsterList extends Component {
  state = {
    monsterList: [],
  };

  async componentDidMount() {
    const monsterList = await getMonsterList();
    this.setState({ monsterList: monsterList.results });
  }
  render() {
    return (
      <>
        <h3>Monster List (OMG SCARY)</h3>
        {this.state.monsterList.map((monster) => (
          <Link
            key={monster.index}
            to={{
              pathname: `monster/${monster.index}`,
              state: { monster },
            }}
          >
            {monster.name}
          </Link>
        ))}
      </>
    );
  }
}

export default MonsterList;
