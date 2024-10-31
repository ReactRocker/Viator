import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { saveActivityDetails } from '../../../store/checkoutSlice';
import './ActivityDetails.css';

const ActivityDetails = ({ onNext, onPrev }) => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: 'Anna',
    lastName: 'Watson',
    meetingPoint: 'select',
    arrivalAirline: '',
    arrivalFlightNumber: '',
    arrivalTime: '',
    dropOffLocation: '',
    tourLanguage: 'English',
    specialRequirements: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    meetingPoint: Yup.string().required('Required'),
    tourLanguage: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(saveActivityDetails(values));
    setSubmitting(false);
    onNext();
  };

  return (
    <div className="activity-details">
      <div className="activity-header">
        <div className="activity-step">2</div>
      </div>

      <div className="activity-form">
        <h2 className="activity-title">Activity details</h2>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, setFieldValue }) => (
            <Form>
              <div className="traveler-details">
                <h3 className="traveler-title">Primary traveler (Adult)</h3>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="firstName">FIRST NAME*</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                    />
                    {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">LAST NAME*</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                    />
                    {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
                  </div>
                </div>
              </div>
              
              <div className="meeting-point">
                <h3 className="meeting-point-title">Meeting point</h3>
                <p className="meeting-point-description">Please choose where you prefer to meet for your experience. If you're not sure, you can decide later.</p>
                
                <div className="meeting-point-option">
                  <label className="meeting-point-radio">
                    <Field
                      type="radio"
                      name="meetingPoint"
                      value="select"
                    />
                    <span>Select a meeting point</span>
                  </label>
                  
                  <Field
                    type="text"
                    placeholder="Type city, address, state..."
                    name="meetingPoint"
                    value={values.meetingPoint}
                    disabled={values.meetingPoint !== 'select'}
                  />
                  
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="arrivalAirline">ARRIVAL AIRLINE</label>
                      <Field
                        type="text"
                        id="arrivalAirline"
                        name="arrivalAirline"
                        value={values.arrivalAirline}
                        disabled={values.meetingPoint !== 'select'}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="arrivalFlightNumber">ARRIVAL FLIGHT NUMBER</label>
                      <Field
                        type="text"
                        id="arrivalFlightNumber"
                        name="arrivalFlightNumber"
                        value={values.arrivalFlightNumber}
                        disabled={values.meetingPoint !== 'select'}
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="arrivalTime">ARRIVAL TIME</label>
                      <Field
                        type="text"
                        id="arrivalTime"
                        name="arrivalTime"
                        value={values.arrivalTime}
                        disabled={values.meetingPoint !== 'select'}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="dropOffLocation">DROP OFF LOCATION</label>
                      <Field
                        type="text"
                        id="dropOffLocation"
                        name="dropOffLocation"
                        value={values.dropOffLocation}
                        disabled={values.meetingPoint !== 'select'}
                      />
                    </div>
                  </div>
                </div>
                
                <label className="meeting-point-radio">
                  <Field
                    type="radio"
                    name="meetingPoint"
                    value="later"
                  />
                  <span>I'll decide later</span>
                </label>
              </div>
              
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="tourLanguage">TOUR LANGUAGE</label>
                  <Field
                    type="text"
                    id="tourLanguage"
                    name="tourLanguage"
                    value={values.tourLanguage}
                  />
                  {errors.tourLanguage && touched.tourLanguage && <div className="error">{errors.tourLanguage}</div>}
                </div>
                <div className="input-group">
                  <label htmlFor="specialRequirements">SPECIAL REQUIREMENTS</label>
                  <Field
                    type="text"
                    id="specialRequirements"
                    name="specialRequirements"
                    value={values.specialRequirements}
                    placeholder="e.g. dietary needs, accessibility"
                  />
                  {errors.specialRequirements && touched.specialRequirements && <div className="error">{errors.specialRequirements}</div>}
                </div>
              </div>
              
              <div className="button-group">
                <div className="button-group-left">
                  <button type="button" onClick={onPrev} className="btn-secondary">Previous</button>
                </div>
                <div className="button-group-right">
                  <button type="submit" className="btn-primary">Next</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ActivityDetails;
