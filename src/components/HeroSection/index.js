import React, { useState } from 'react';
import {ButtonStart} from '../ButtonElements';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import {string} from "prop-types";

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Charity and Philanthropy made easy</HeroH1>
        <HeroP>
          Sign up and gain the benefit of being a member and enjoy all the
          good things we provide.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonStart
            to='register'
            smooth={string.toString()}
            duration={500}
            spy={string.toString()}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonStart>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
