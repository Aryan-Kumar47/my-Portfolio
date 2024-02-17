
import React from 'react'

const SectionWrapper = (Component, idName) =>
  function HOC() {

    return (
      <div className=' relative'>
        <span className='hash-span absolute -top-4' id={idName}/>
        <Component />
      </div>
    );
  };

export default SectionWrapper;