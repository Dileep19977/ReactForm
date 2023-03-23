import React from 'react';

const ListRendering = () => {

  const data=['Dileep','Reddy','Bodanam']
  return(
  <div>
     {
     data.map(a => (<h2>{a}</h2>))
     
     }
    </div>
    ) 
};

export default ListRendering;
