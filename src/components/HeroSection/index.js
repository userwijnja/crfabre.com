import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Professionele administratie</HeroH1>
                <HeroP>
                Bent u op zoek naar een professional voor uw administratie, maar wilt u geen werknemer fulltime aannemen?
                </HeroP>

                <HeroP>
                Ik bied de oplossing!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='over' onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"


                    >
                        Meer informatie{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>



                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection