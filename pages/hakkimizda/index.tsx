import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const index = () => {

  return (
    <div>

    
    <Header>

    </Header>
    <div className='h-[calc(100vh-20.3vh)]'>
    <section className="bg-gray-100 py-16 px-6 md:px-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 inline-block">Hakkımızda</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      <strong><b className='text-red-500'>E</b>M Yazılım</strong>, yenilikçi çözümlerle işletmenizin dijital dönüşümüne rehberlik eder. Web ve mobil uygulama geliştirme, özel yazılım çözümleri ve danışmanlık hizmetlerimizle; ihtiyaçlarınıza özel, sürdürülebilir ve modern projeler sunuyoruz.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      Müşteri memnuniyetini ve kaliteli yazılım geliştirmeyi ilke edinerek, her sektöre uygun çözümler üretmeye devam ediyoruz. Teknolojiyi işinize entegre etmek için buradayız!
    </p>
  </div>
</section>

    </div>
    <Footer>

    </Footer>
    </div>
  )
}

export default index