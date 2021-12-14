import React from 'react';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1, ServicesH2,
    ServicesIcon, ServicesP,
    ServicesWrapper
} from "../DashboardElements";
import Icon3 from "../../../images/svg-5.svg";

const Awards = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Awards</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Let's Go</ServicesH2>
                    <ServicesP>
                        We extend our help to children in remote villages in Ghana to ensure they get education.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Awards;
