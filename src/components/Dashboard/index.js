import React, {Component} from 'react';
import Icon1 from '../../images/svg-1.svg';
import {logout} from '../../actions/securityActions';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    DashItemsLink, DashLoginLink
} from './DashboardElements';

class Dashboard extends Component {

    logout() {
        this.props.logout();
        window.location.href = "/";
    }

    render() {
        const {validToken, user} = this.props.security;

        const userIsAuthenticated = (
            <div>
                <ul>
                    <li>
                        <DashLoginLink>
                            {'Welcome ' + user.firstName}
                        </DashLoginLink>
                    </li>
                    <li>
                        <DashLoginLink to="/logout"
                            onClick={this.logout.bind(this)}>
                            Logout
                        </DashLoginLink>
                    </li>
                </ul>
            </div>
        );

        const userIsNotAuthenticated = (
            <div >
                <ul >
                    <li>
                        <DashLoginLink to="/register">
                            Sign Up
                        </DashLoginLink>
                    </li>
                    <li className="nav-item">
                        <DashLoginLink to="/login">
                            Login
                        </DashLoginLink>
                    </li>
                </ul>
            </div>
        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }


        return (
            <ServicesContainer id='services'>
                {headerLinks}
                <ServicesH1>Dashboard</ServicesH1>
                <ServicesWrapper>
                    <DashItemsLink to="/entryFee">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Membership Fee</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>

                    <DashItemsLink to="/monthlyFee">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Monthly Fee</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>

                    <DashItemsLink to="/constitution">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Constitution</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>


                    <DashItemsLink to="/members">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>View Members</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>

                    <DashItemsLink to="/contributions">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Contributions</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>

                    <DashItemsLink to="/awards">
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesH2>Awards</ServicesH2>
                        </ServicesCard>
                    </DashItemsLink>

                </ServicesWrapper>
            </ServicesContainer>
        );
    }
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});


export default connect(mapStateToProps, {logout})(Dashboard);


