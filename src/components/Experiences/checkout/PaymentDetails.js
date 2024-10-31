import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { setBookingSuccess, closeCheckout } from '../../../store/checkoutSlice';
import './PaymentDetails.css';

const PaymentDetails = ({ onPrev }) => {
  const dispatch = useDispatch();

  const initialValues = {
    currency: 'USD',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  };

  const validationSchema = Yup.object({
    currency: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    expiryDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Payment Details:', values);
    // Simulate a successful booking
    setTimeout(() => {
      dispatch(setBookingSuccess(true));
      dispatch(closeCheckout());
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="payment-details">
      <div className="payment-header">
        <div className="payment-step">3</div>
      </div>

      <h2 className="payment-title">Payment details</h2>
      <p className="payment-subtitle">Please enter your payment information to complete your booking.</p>

      <hr className="payment-separator" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="payment-form">
            <div className="card-details">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="cardNumber">CARD NUMBER</label>
                  <Field
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && touched.cardNumber && <div className="error">{errors.cardNumber}</div>}
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="expiryDate">EXPIRY DATE</label>
                  <Field
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                  />
                  {errors.expiryDate && touched.expiryDate && <div className="error">{errors.expiryDate}</div>}
                </div>
                <div className="input-group">
                  <label htmlFor="cvv">CVV</label>
                  <Field
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                  />
                  {errors.cvv && touched.cvv && <div className="error">{errors.cvv}</div>}
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">NAME ON CARD</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && <div className="error">{errors.name}</div>}
                </div>
              </div>
            </div>

            <p className="terms-agreement">
              By clicking 'Book Now', you agree to Viator's Customer Terms of Use and Privacy Statement, plus the third party operator's terms & conditions. Viator, Inc. facilitates your booking, but the operator provides the experience directly to you.
            </p>

            <div className="button-group">
              <div className="button-group-left">
                <button type="button" onClick={onPrev} className="btn-secondary">Previous</button>
              </div>
              <div className="button-group-right">
                <button type="submit" className="btn-primary">Book Now</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentDetails;
