import { useState, useEffect } from 'react';
import "./Banner.scss";
import "../../assets/font.scss";

function Banner(props) {
  const [url, setUrl] = useState(window.location.pathname);
  const device = window.innerWidth;

  useEffect(() => {
    setUrl(window.location.pathname);
    
  }, []);
  let bannerProps;
  // eslint-disable-next-line no-lone-blocks
  {url === "/" ? bannerProps = {title: 'Home', image: '../../assets/images/homeBanner.png', id:'home__banner'} : bannerProps = { title: 'About', images: '../../assets/images/aboutBanner.png', id:'about__banner'}}

  return (
    <div {...bannerProps}>
      <h1 id="home__banner--title">Chez vous,{device < 800 ? <br/> : null}partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
