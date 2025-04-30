import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { ServicesDummy } from '../dummy';
import Cards from '../components/Cards';

const Hizmetler = () => {

  type DummyData =  {
    Title:string,
    Description:string,
    CardData:[]
    }


  const [queryType, setQueryType] = useState<string | undefined>();
  const [DummyData, setDummyData] = useState< DummyData | undefined>();

  const router = useRouter();
    
  console.log(router.query)

  
  useEffect(() => {
    // Eğer router.query.id bir dizi ise, ilk öğeyi al
    const queryString = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
    if (queryString) {
      setQueryType(queryString);
  
    }
  }, [router.query]);
  
  useEffect(() => {
    // queryType'ın geçerli bir anahtar olduğuna emin olalım
    if (queryType && ServicesDummy[queryType]) {
      setDummyData(ServicesDummy[queryType]);
    } else {
      // Eğer geçerli bir değer yoksa, dummyData'ya varsayılan bir değer set edebiliriz
      setDummyData(null);
    }
  }, [queryType]);




   


  return (
    <div>
    <Header>

    </Header>
    <div className='overflow-auto h-[calc(100vh-20.3vh)]' >
    
    <div className='main'>
      
    <h4 className='font-bold text-3xl  text-center mb-4'>{DummyData?.Title}</h4>
     <p className=' text-xl  text-center text-gray-700 mb-4'>{DummyData?.Description}</p>

<div className='card  flex flex-row flex-wrap gap-8 wrapper '>

     {DummyData?.CardData.map((x,i) => (
      <Cards key={i} CardData={x}></Cards>

     ))}
     </div>
    </div>


     


    </div>
    <Footer>

    </Footer>
    </div>
  )
}

export default Hizmetler