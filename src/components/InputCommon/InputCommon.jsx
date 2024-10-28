import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
const InputCommon = ({ label, type, isRequire = false, ...props }) => {
  const { container, boxLabel, boxInput, boxIcon, errMess } = styles;
  const [showPassword, setShowPassword] = useState(false);
  const { formik, id } = props;
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && showPassword ? 'text' : type;
  const isShowMessErr = formik.touched[id] && formik.errors[id];

  const handleShowPassWord = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={container}>
      <div className={boxLabel}>{label}</div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassWord}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
        {isShowMessErr && <div className={errMess}>{formik.errors[id]}</div>}
      </div>
    </div>
  );
};

export default InputCommon;
