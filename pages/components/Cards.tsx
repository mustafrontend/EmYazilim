import React, { useEffect, useState } from 'react'
import { phoneNumber } from '../dummy';

const Cards = ({CardData }) => {

const [CardDataMap,setCardDataMap] = useState<Datable>();
    
type Datable =  {

    title:string,
    description:string,
   cardData:[]

} 


const BilgiWhatsapp = (p:string) => {
    p = "Selamlar,"+p+" hakkında bilgi almak istiyor dum?"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(p)}`;
    window.open(url, '_blank');

}

useEffect(()=>{
    setCardDataMap(CardData)
},[])

    
  return (
    
<div>

      <div   className="w-[350]  hover:opacity-60 rounded overflow-hidden shadow-lg">
      
      
    
        {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{CardDataMap?.title} </div>
          <p className="text-gray-700 text-base">
          {CardDataMap?.description}      </p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-end">
        <button onClick={()=> BilgiWhatsapp(CardDataMap?.title)} className='btn-primary hover:opacity-70 hover:cursor-alias'>
     Bilgi Al
    </button>
        </div>
      </div>
 
</div>


  )
}

export default Cards