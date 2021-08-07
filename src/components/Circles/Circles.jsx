import React from 'react'; 
import CircleSelector from '../CircleSelector/CircleSelector';
import '../Circles/Circles.css';



const Circles = (props) => (
    <div className='Circles'>
     
      <div className='Circles div'>
         {
             props.selections.map(
             (userSelection, idx) => <CircleSelecto />
        </div> 
    )
}

 </div> 



export default Circles; 