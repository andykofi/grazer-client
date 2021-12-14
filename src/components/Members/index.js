import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-5.svg";
import React from "react";
import {ServicesContainer,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from "./MembersElements";


const Members = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Support members</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support for the week</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Educate the poor</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Support members</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Support for the week</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Educate the poor</ServicesH2>
                    <ServicesP>
                        Pictures of some of our members
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Members;
