import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Field, Form, Formik} from 'formik';
import {login} from '../../store/userSlice';
import './ContactDetails.css';
import AvatarImage64 from '../../assets/images/AvatarImage64.jpg';
import {validationSchema} from "./ContactDetails.schema";

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
};
const ContactDetails = ({onNext}) => {
    const dispatch = useDispatch();
    const {isLoggedIn, userInfo} = useSelector((state) => state.user);
    const [mode, setMode] = useState('create');

    const handleSubmit = (values, {setSubmitting}) => {
        console.log("Form submitted", values);
        if (!isLoggedIn) {
            console.log("Dispatching login action");
            dispatch(login(values));
        }
        setSubmitting(false);
        console.log("Calling onNext");
        onNext();
    };


    const getSubtitleText = () => {
        if (isLoggedIn) {
            return "Confirm your information to finish your booking";
        } else if (mode === 'create') {
            return "To proceed with your booking, please create an account";
        } else {
            return "To proceed with your booking, please login";
        }
    };

    return (
        <div className="contact-details">
            <div className="contact-header">
                <div className="steps-container">
                    <div className="step">
                        <div className="step-circle active">1</div>
                        <div className="step-label">Contact</div>
                    </div>
                    <div className="step-line active"></div>
                    <div className="step">
                        <div className="step-circle inactive">2</div>
                        <div className="step-label">Activity</div>
                    </div>
                    <div className="step-line"></div>
                    <div className="step">
                        <div className="step-circle inactive">3</div>
                        <div className="step-label">Payment</div>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <div className="mb-6">
                    <h2 className="contact-title">Contact details</h2>
                    <p className="contact-subtitle">{getSubtitleText()}</p>
                    {isLoggedIn && (
                        <>
                            <p className="welcome-back">Welcome Back</p>
                            <div className="user-avatar-container">
                                <img src={AvatarImage64} alt="User Avatar" className="user-avatar"/>
                                <span className="user-name">{`${userInfo.firstName} ${userInfo.lastName}`}</span>
                            </div>
                        </>
                    )}
                </div>

                <div className="flex-grow">
                    {!isLoggedIn && (
                        <div className="form-grid mb-6">
                            <button
                                type="button"
                                className={mode === 'create' ? 'btn-primary' : 'btn-secondary'}
                                onClick={() => setMode('create')}
                            >
                                Create Account
                            </button>
                            <button
                                type="button"
                                className={mode === 'login' ? 'btn-primary' : 'btn-secondary'}
                                onClick={() => setMode('login')}
                            >
                                Login
                            </button>
                        </div>
                    )}

                    {!isLoggedIn && mode === 'create' && (
                        <p className="guest-info mb-4">By continuing, we will create an Account for you throughout the
                            booking process.</p>
                    )}
                    <hr className="contact-details-input-seperator"/>

                    <Formik
                        initialValues={isLoggedIn ? userInfo : initialValues}
                        validationSchema={validationSchema(isLoggedIn, mode)}
                        onSubmit={handleSubmit}
                        enableReinitialize={true}
                        validateOnMount={true}
                    >
                        {({errors, touched, isSubmitting, isValid}) => (
                            <Form className="form-layout">
                                <div className="form-row">
                                    <div
                                        className={`input-group ${errors.firstName && touched.firstName ? 'error' : ''}`}>
                                        <label htmlFor="firstName">FIRST NAME*</label>
                                        <Field
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            placeholder="Your First Name"
                                            disabled={isLoggedIn}
                                        />
                                        {errors.firstName && touched.firstName &&
                                            <div className="error">{errors.firstName}</div>}
                                    </div>
                                    <div
                                        className={`input-group ${errors.lastName && touched.lastName ? 'error' : ''}`}>
                                        <label htmlFor="lastName">LAST NAME*</label>
                                        <Field
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            placeholder="Your Last Name"
                                            disabled={isLoggedIn}
                                        />
                                        {errors.lastName && touched.lastName &&
                                            <div className="error">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className={`input-group ${errors.email && touched.email ? 'error' : ''}`}>
                                        <label htmlFor="email">EMAIL ADDRESS*</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            disabled={isLoggedIn}
                                        />
                                        {errors.email && touched.email && <div className="error">{errors.email}</div>}
                                    </div>
                                    <div
                                        className={`input-group ${errors.phoneNumber && touched.phoneNumber ? 'error' : ''}`}>
                                        <label htmlFor="phoneNumber">MOBILE NUMBER*</label>
                                        <Field
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="+61 0987661661"
                                            disabled={isLoggedIn}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber &&
                                            <div className="error">{errors.phoneNumber}</div>}
                                    </div>
                                </div>
                                {!isLoggedIn && mode === 'create' && (
                                    <>
                                        <div className="form-row">
                                            <div
                                                className={`input-group ${errors.password && touched.password ? 'error' : ''}`}>
                                                <label htmlFor="password">PASSWORD*</label>
                                                <Field
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Create a strong Password"
                                                />
                                                {errors.password && touched.password &&
                                                    <div className="error">{errors.password}</div>}
                                            </div>
                                            <div
                                                className={`input-group ${errors.confirmPassword && touched.confirmPassword ? 'error' : ''}`}>
                                                <label htmlFor="confirmPassword">CONFIRM PASSWORD*</label>
                                                <Field
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    placeholder="Retype Password"
                                                />
                                                {errors.confirmPassword && touched.confirmPassword &&
                                                    <div className="error">{errors.confirmPassword}</div>}
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group">
                                                <p className="terms-text">
                                                    By signing up to create an account I accept Swaggie's{' '}
                                                    <a
                                                        href="https://swaggie.co/terms-of-service/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="terms-link"
                                                    >
                                                        Terms and Conditions
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="input-group">
                                                <button type="submit" className="btn-primary" disabled={!isValid}>
                                                    Create Account and Continue
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                                {!isLoggedIn && mode === 'login' && (
                                    <div className="form-row">
                                        <div className="input-group"></div>
                                        <div className="input-group">
                                            <button type="submit" className="btn-primary" disabled={!isValid}>
                                                Login and Continue
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {isLoggedIn && (
                                    <div className="form-row">
                                        <div className="input-group"></div>
                                        <div className="input-group">
                                            <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
