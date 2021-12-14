import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {register, RegisterContainer} from "./RegistrationStyles"
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewUser} from "../../actions/securityActions";

class Registration extends Component {
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
            errorOpen: false

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


    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    errorClose = e => {
        this.setState({
            errorOpen: false
        });
    };

    handleChange = name => e => {
        this.setState({
            [name]: e.target.value
        });
    };


    showPassword = () => {
        this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;
        return (
            <RegisterContainer>
            <div className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PeopleAltIcon className={classes.icon} />
                    </Avatar>
                    <form
                        className={classes.form}
                        onSubmit={() => this.onSubmit()}
                    >
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="firstName" className={classes.labels}> First Name</InputLabel>
                            <Input
                                name="firstName"
                                type="text"
                                autoComplete="firstName"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.onChange}
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.firstName}</span> : ''
                            }
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="lastName" className={classes.labels}> Last Name</InputLabel>
                            <Input
                                name="lastName"
                                type="text"
                                autoComplete="lasName"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.onChange}
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.lastName}</span> : ''
                            }
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="tel" className={classes.labels}> Mobile</InputLabel>
                            <Input
                                name="tel"
                                type="text"
                                autoComplete="mobile"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.onChange}
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.tel}</span> : ''
                            }
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="username" className={classes.labels}> E-mail</InputLabel>
                            <Input
                                name="username"
                                type="text"
                                autoComplete="tel"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.onChange}
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.username}</span> : ''
                            }
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="password" className={classes.labels}>
                                Password
                            </InputLabel>
                            <Input
                                name="password"
                                autoComplete="password"
                                className={classes.inputs}
                                disableUnderline={true}
                                onChange={this.onChange}
                                type={this.state.hidePassword ? "password" : "input"}
                                endAdornment={
                                    this.state.hidePassword ? (
                                        <InputAdornment position="end">
                                            <VisibilityOffTwoToneIcon
                                                fontSize="default"
                                                className={classes.passwordEye}
                                                onClick={this.showPassword}
                                            />
                                        </InputAdornment>
                                    ) : (
                                        <InputAdornment position="end">
                                            <VisibilityTwoToneIcon
                                                fontSize="medium"
                                                className={classes.passwordEye}
                                                onClick={this.showPassword}
                                            />
                                        </InputAdornment>
                                    )
                                }
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.password}</span> : ''
                            }
                        </FormControl>

                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="confirmPassword" className={classes.labels}>
                                Confirm Password
                            </InputLabel>
                            <Input
                                name="confirmPassword"
                                autoComplete="confirmPassword"
                                className={classes.inputs}
                                disableUnderline={true}
                                onClick={this.state.showPassword}
                                onChange={this.onChange}
                                type={this.state.hidePassword ? "password" : "input"}
                                endAdornment={
                                    this.state.hidePassword ? (
                                        <InputAdornment position="end">
                                            <VisibilityOffTwoToneIcon
                                                fontSize="default"
                                                className={classes.passwordEye}
                                                onClick={this.showPassword}
                                            />
                                        </InputAdornment>
                                    ) : (
                                        <InputAdornment position="end">
                                            <VisibilityTwoToneIcon
                                                fontSize="default"
                                                className={classes.passwordEye}
                                                onClick={this.showPassword}
                                            />
                                        </InputAdornment>
                                    )
                                }
                            />
                            {
                                errors ? <span style={{ color: 'red', fontSize: '12px'}}>{errors.confirmPassword}</span> : ''
                            }
                        </FormControl>
                        <Button
                            disableRipple
                            fullWidth
                            variant="outlined"
                            className={classes.button}
                            type="submit"
                            onClick={this.onSubmit}
                        >
                            Join
                        </Button>
                    </form>

                    {this.state.error ? (
                        <Snackbar
                            variant="error"
                            key={this.state.error}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center"
                            }}
                            open={this.state.errorOpen}
                            onClose={this.errorClose}
                            autoHideDuration={3000}
                        >
                            <SnackbarContent
                                className={classes.error}
                                message={
                                    <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                                        <span> {this.state.error} </span>
                                    </div>
                                }
                                action={[
                                    <IconButton
                                        key="close"
                                        aria-label="close"
                                        onClick={this.errorClose}
                                    >
                                        <CloseIcon color="error" />
                                    </IconButton>
                                ]}
                            />
                        </Snackbar>
                    ) : null}
                </Paper>
            </div>
            </RegisterContainer>
        );
    }
}
Registration.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { createNewUser })(withStyles(register)(Registration));



