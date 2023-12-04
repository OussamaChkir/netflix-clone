import React from 'react'
import './PlansScreen.css';

function PlansScreen() {

    const products =[
        {id:1, active:true,description:"720p",name:"Basic"},
        {id:2, active:true,description:"1080p",name:"Standard"},
        {id:3, active:true,description:"4k +HDR",name:"Premium"}
    ];

  return (
    <div className='plansScreen'>
        {products.map((product)=>(
            <div className='plansScreen_plan'>
                <div className='plansScreen_info'>
                    <h5>{product.name}</h5>
                    <h6>{product.description}</h6>
                </div>
                <button className='plansScreen_button'>Subscribe</button>
            </div>
        ))}
    </div>
  )
}

export default PlansScreen