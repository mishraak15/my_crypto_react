import React from 'react';
import HorizontalBar from './HorizontalBar';

export default function CompleteData({completeInfo , statusCode}) {
    console.log(completeInfo);
    console.log(statusCode);
  return (
    <div className='completedata'>
        <h1 className='top50'>Top 50 Crypto Currency</h1>
      {
      completeInfo.map((singleBar)=>{
        return (<HorizontalBar key={singleBar.id} singleBar={singleBar}/>)
      })
      }
    </div>
  )
}
