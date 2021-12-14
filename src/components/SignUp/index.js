import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            tel: "",
            username: "",
            password: "",
            confirmPassword: "",
            errors: {},
            redirect: false

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            tel: this.state.tel,
            username: this.state.username,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };

        this.props.createNewUser(newUser, this.props.history);

        this.setState({
            redirect: true
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Container>
                    <FormWrap>
                        <Icon to='/'>grazdiaspora</Icon>
                        <FormContent>
                            <Form onSubmit={this.onSubmit}>
                                <FormH1>Create an account</FormH1>
                                <FormLabel htmlFor='for'>First Name</FormLabel>
                                <FormInput type='text'  name="firstName" defaultValue={this.state.firstName}  onChange={this.onChange}/>
                                {
                                    errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.firstName}</span> : ''
                                }

                                <FormLabel htmlFor='for'>Last Name</FormLabel>
                                <FormInput type='text' name="lastName" defaultValue={this.state.lastName}  onChange={this.onChange}/>
                                {
                                    errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.lastName}</span> : ''
                                }

                                <FormLabel htmlFor='for'>Mobile</FormLabel>
                                <FormInput type='text' name="tel" defaultValue={this.state.tel}  onChange={this.onChange}/>
                                        {
                                            errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.tel}</span> : ''
                                        }

                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='text' name="username" defaultValue={this.state.username}  onChange={this.onChange}/>
                                        {
                                            errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.username}</span> : ''
                                        }

                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password'name="password" defaultValue={this.state.password}  onChange={this.onChange}/>
                                        {
                                            errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.password}</span> : ''
                                        }


                                <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                                <FormInput type='password' name="confirmPassword" defaultValue={this.state.confirmPassword}  onChange={this.onChange}/>
                                        {
                                            errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.confirmPassword}</span> : ''
                                        }
                                <FormButton type='submit'>Continue</FormButton>
                            </Form>
                        </FormContent>
                    </FormWrap>
                </Container>
            </div>

        );
    }
}

SignUp.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});
export default connect(mapStateToProps, { createNewUser })(SignUp);
