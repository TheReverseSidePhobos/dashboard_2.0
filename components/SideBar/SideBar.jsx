import React, { useEffect, useState } from 'react';
import styles from '../../styles/SideBar.module.scss';
import DatePicker from 'react-datepicker';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import * as types from '../../redux/actions/types';
import { saveStartDate } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const sideBarStyle = cn(styles.sidebar);
  const dispatch = useDispatch();
  const handleMakeTask = () => {
    dispatch({ type: types.TOGGLE_MODAL });
  };
  const {startDate} = useSelector((state) => state.task)


  const setStartDate = (date) => {
    dispatch(saveStartDate(date));
  };
  return (
    <>
      <div className={sideBarStyle}>
        <DatePicker
          selected={startDate}
          inline
          onChange={(date) => setStartDate(date)}
        />
        <button onClick={handleMakeTask} className={styles.makeTaskBtn}>
          Make New Task
        </button>
      </div>
    </>
  );
};

export default SideBar;
