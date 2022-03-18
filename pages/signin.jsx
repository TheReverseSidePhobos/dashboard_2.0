import React from 'react';
import Layout from '../components/Layout/Layout';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../styles/Signup.module.scss';
// import { login } from '../redux/actions/auth_actions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Signin = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  });
  const initialValues = {
    email: '',
    password: ''
  };
  const renderError = (message) => <p className={styles.isDanger}>{message}</p>;
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(login(values.email, values.password));
    router.push('/');
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form autoComplete="off">
          <div className={styles.signup}>
            <div className={styles.control}>
              <h1>Sing In</h1>

              <div className={styles.field}>
                <div className={styles.control}>
                  <Field
                    name="email"
                    type="text"
                    className="input"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.control}>
                  <Field
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>

              <button type="submit" className="button is-primary">
                Sign In
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Layout>
  );
};

export default Signin;
