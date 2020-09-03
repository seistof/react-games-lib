import React from 'react';

function Info({match}) {
  console.log(match.params.id);
  return (
    <div>Info</div>
  );
}

export default Info;