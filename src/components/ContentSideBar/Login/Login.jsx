import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import InputCommon from '@components/InputCommon/InputCommon';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { getInfo, login, register } from '@components/apis/authService';
import Cookies from 'js-cookie';
const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { container, title, boxRememberMe, lostPw } = styles;
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('(*) Invalid email')
        .required('(*) Email is required'),
      password: Yup.string()
        .min(6, '(*) Password must be at least 6 characters')
        .required('(*) Password is required'),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        '(*) Password must match'
      )
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const { email: username, password } = values;

      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res?.data?.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message);
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        await login({ username, password })
          .then((res) => {
            console.log(res);
            const { token, refreshToken } = res.data;
            Cookies.set('token', token);
            Cookies.set('refreshToken', refreshToken);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);

            setIsLoading(false);
          });
      }
    }
  });
  const handleRegister = () => {
    setIsRegister(!isRegister);
  };
useEffect(() => {
  handleGetInfo();
},[])
  const handleGetInfo = () => {
    getInfo();
  };
  return (
    <div className={container}>
      <div className={title}>{isRegister ? 'Sign Up' : 'Sign In'}</div>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <InputCommon
            id='email'
            label='Username or email *'
            type='text'
            formik={formik}
          />
          <InputCommon
            id='password'
            label='Password *'
            type='password'
            formik={formik}
          />
          {isRegister && (
            <InputCommon
              id='confirmPassword'
              label='ConfirmPassword *'
              type='password'
              formik={formik}
            />
          )}
        </div>
        {!isRegister && (
          <div className={boxRememberMe}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}

        <div style={{ width: '100%', marginTop: '10px' }}>
          <Button
            content={
              isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'
            }
            type='submit'
          />
        </div>
      </form>

      <Button
        content={
          isRegister ? 'Already have an account?' : 'Don’t have an account?'
        }
        isPrimary={false}
        type='submit'
        onClick={handleRegister}
        style={{ width: '100%', marginTop: '10px' }}
      />
      {!isRegister && <div className={lostPw}>Lost your password?</div>}
    </div>
  );
};

export default Login;
