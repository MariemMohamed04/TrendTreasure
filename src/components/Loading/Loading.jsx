/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  const [count, setCount] = useState(0);
  useEffect(() =>{}, []);
  return (
    <>
  <div className="text-center py-5">
      <i className=" fa fa-spinner fa-5x fa-spin"></i>
    </div>
    </>
  )
}
