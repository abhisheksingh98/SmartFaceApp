import React from 'react';

const Rank = ({name, entries}) => {
  return (
  //Rank
  <div>
    <div className='f3 white'>
      {`${name}, your total entries are...`}
    </div>
    <div className='f1 white'>
      {entries}
    </div>
  </div>);
}

export default Rank;
