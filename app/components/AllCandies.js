import React from 'react';

const AllCandies = (props) => {
  return (
    <ul>
      {
        props.candies ? props.candies.map( candy => {
          return (
            <li key={candy.id}>
              {candy.name}
            </li>
          )
        }) : 'Candies Loading'
      }
    </ul>
  )
}

export default AllCandies;
