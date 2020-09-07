import React from 'react'
import { Link } from 'react-router-dom'

const SpellCard = (props) => {
  return ( 
    <>
      <Link
        to={{
          pathname: `/spell/${props.spell.index}`,
        }}
      >
        <h2>{props.spell.name}</h2>
      </Link>
    </>
   );
}
 
export default SpellCard;