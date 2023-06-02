import React, { useState } from 'react';

const Slider = () => {
  const photos = [
    `https://img2.akspic.ru/previews/4/9/5/3/7/173594/173594-ulybchivyj-13_sentyabrya-argentina-ulybka-zhest-550x310.jpg`,
    `https://img2.akspic.ru/previews/3/8/5/3/7/173583/173583-saske_uchiha-naruto-akacuki-naruto_uzumaki-anime-550x310.jpg`,
    `https://img2.akspic.ru/previews/4/8/3/3/7/173384/173384-akihabara-ikanvas-holst-holst_steny_iskusstva-neboskreb-550x310.jpg`,
    `https://img2.akspic.ru/previews/3/8/3/9/6/169383/169383-oblako-voda-svet-lyudi_v_prirode-poslesvechenie-550x310.jpg`,
    `https://img2.akspic.ru/previews/9/7/9/7/6/167979/167979-bmw-legkovyye_avtomobili-bajerishe_motoren_verke_ag-bmw_m3-sportkar-550x310.jpg`,
    `https://img3.akspic.ru/previews/5/6/9/7/6/167965/167965-amoled-shlem-art-maska-elektrik-550x310.jpg`,
    `https://img3.akspic.ru/previews/7/1/2/3/7/173217/173217-eren_jeger-mikasa_akerman-napadenie_na_titan-historiya_rejss-poster-550x310.jpg`,
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? photos.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider">
      <img src={photos[currentSlide]} alt="Slide" className="slide" />
      <button onClick={goToPrevSlide}>Назад</button>
      <button onClick={goToNextSlide}>Далее</button>
    </div>
  );
};

export default Slider;


