import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { ServicesDummy } from '../../utils/dummy';
import Cards from '../components/Cards';

type SingleService = {
  Title: string;
  Description: string;
  CardData: []; // Eğer CardData'nın tipi belliyse burada detaylandırabilirsin
};

const Hizmetler = () => {
  const [queryType, setQueryType] = useState<string | undefined>();
  const [dummyData, setDummyData] = useState<SingleService | null>(null);

  const router = useRouter();

  useEffect(() => {
    const queryString = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
    if (queryString) {
      setQueryType(queryString);
    }
  }, [router.query]);

  useEffect(() => {
    if (queryType && ServicesDummy[queryType as keyof typeof ServicesDummy]) {
      setDummyData(ServicesDummy[queryType as keyof typeof ServicesDummy] as SingleService);
    } else {
      setDummyData(null);
    }
  }, [queryType]);
  

  return (
    <div>
      <Header />
      <div className='overflow-auto h-[calc(100vh-20.3vh)]'>
        <div className='main'>
          <h4 className='font-bold text-3xl text-center mb-4'>
            {dummyData?.Title || ''}
          </h4>
          <p className='text-xl text-center text-gray-700 mb-4'>
            {dummyData?.Description || ''}
          </p>

          <div className='card flex flex-row flex-wrap gap-8 wrapper'>
            {dummyData?.CardData?.map((x, i) => (
              <Cards key={i} CardData={x} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hizmetler;
