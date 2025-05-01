import { 
    faUserPlus, 
    faThumbsUp, 
    faEye, 
    faSearch, 
    faShareAlt, 
    faGlobe, 
    faCode, 
    IconDefinition,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

import React from 'react'
import Footer from "./Footer";
import { useRouter } from "next/router";
import { BilgiWhatsappGlobal } from "../utils/dummy";

const IndexPage = () => {

    const router = useRouter();
 
const DetailFrom = (p:string):void => {

    
    router.push('/hizmetler/'+p, undefined, { shallow: true })
 
}

type CardItem = {
    key: string;
    icon: IconDefinition;
    Title: string;
    Description: string;
    Button: string;
  };

  


 const CardData: CardItem[] = [
  {
    key: "takipci",
    icon: faUserPlus,
    Title: "Takipçi Hizmeti",
    Description: "Instagram ve diğer platformlar için gerçek ve etkileşim sağlayan takipçi artışı.",
    Button: "Detay"
  },
  {
    key: "begeni",
    icon: faThumbsUp,
    Title: "Beğeni Hizmeti",
    Description: "Gönderilerinize organik veya hedefli beğeni gönderimi.",
    Button: "Detay"
  },
  {
    key: "izlenme",
    icon: faEye,
    Title: "İzlenme Hizmeti",
    Description: "Video içerikleriniz için görüntülenme artırma çözümleri.",
    Button: "Detay"
  },
  {
    key: "seo",
    icon: faSearch,
    Title: "SEO Hizmeti",
    Description: "Google ve diğer arama motorlarında üst sıralarda yer almanızı sağlıyoruz.",
    Button: "Detay"
  },
  {
    key: "sosyal-medya",
    icon: faShareAlt,
    Title: "Sosyal Medya Uzmanlığı",
    Description: "Markanız için stratejik sosyal medya yönetimi ve danışmanlık.",
    Button: "Detay"
  },
  {
    key: "web-site",
    icon: faGlobe,
    Title: "Web Site Yapımı",
    Description: "Kurumsal, kişisel ve e-ticaret siteleri tasarım ve yazılım hizmeti.",
    Button: "Detay"
  },
  {
    key: "yazilim",
    icon: faCode,
    Title: "Yazılım Geliştirme",
    Description: "Size özel masaüstü veya web tabanlı yazılım çözümleri geliştiriyoruz.",
    Button: "Detay"
  }
];






      



  return (
    <div>
    <div className='h-[calc(100vh-50vh)] flex justify-between bg-black'>
    <div className='flex justify-center items-center'>
     


    <div  >
  <div className="text-center text-white px-6 py-8">
    <h1 className="left-hover text-5xl font-extrabold mb-4">
      <b className='text-red-700'>E</b>M Yazılım  
    </h1>
    <p className="down-hover text-xl font-medium mb-6">
      Yazılım çözümleriniz burada başlar. Teknolojik yeniliklerle iş süreçlerinizi kolayca yönetebilir, analiz edebilir ve optimize edebilirsiniz.
    </p>
    <a  onClick={()=> BilgiWhatsappGlobal("Genel ")}  className=" down-hover hover:cursor-alias btn-primary">
      Bilgi Edin <FontAwesomeIcon icon={faPhone} />  
    </a>
  </div>
</div>







    </div> 

 <img className='mr-50 justify-center right-hover' src="/socialMedia2.jpeg" />  

 

    </div>
    <div className='dark:bg-black  flex wrapper  items-center justify-center  flex-row flex-wrap  gap-5 mt-2 p-4'>
      
    {CardData.map((x, i) => (
  <div key={i} className=" dark:text-white dark:border-gray-700 dark:border-4 dark:bg-gray-950 w-md hover:cursor-pointer hover:opacity-70  m-h-55 ease-in rounded overflow-hidden shadow-lg">
  
  

    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{x.Title} <FontAwesomeIcon className="ml-2 text-red-700" icon={x.icon}></FontAwesomeIcon></div>
      <p className="text-gray-700 text-base">
      {x.Description}      </p>
    </div>
    <div className="px-6 pt-4 pb-2 flex justify-end cursor-pointer">
    <button onClick={() => DetailFrom(x.key)} className='btn-primary cursor-alias'>
  Detay
</button>
    </div>
  </div>
))}








    
    

    </div>
 
 <Footer  ></Footer>
    </div>
  )
}

export default IndexPage