import React, { useState } from 'react'
import styles from '../../styles/Popup.module.scss';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const Modal = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div id={styles.popup} className={styles.popup}>
        <div className={styles.popup__body}>
            <div className={styles.popup__content}>
                <a href="#" className={styles.popup__close}>X</a>
                <div className={styles.popup__title}>Make New Task</div>
                <div className={styles.popup__body}>
                    <form onSubmit={(e) => {e.preventDefault()}} className={styles.form}>
                      <input className={styles.inp} type="text" autoComplete='off' id="taskName" name="taskName" placeholder="task name..."/>
                      <select
                        id="priority"
                        name="priority"
                        className={styles.select__item}
                      >
                        <option value="lowest">Lowest</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="highest">Highest</option>
                      </select>
                      <DatePicker
                        name="dp"
                        className={styles.dp}
                        selected={startDate}
                        //onChange={(date) => setStartDate(date)}
                      />
                      <textarea
                        id="textTask"
                        name="textTask"
                        rows="6"
                        //value={textTask}
                        //onChange={(e) => handeTextChanged(e)}
                        className={styles.field__item}
                        placeholder="text name..."
                        //onBlur={(e) => handleTouched(e)}
                      />
                      <button
                      className={styles.field__itemBtn}
                          // className={
                          //   !textTask || !taskName
                          //     ? styles.field__itemBtn__disabled
                          //     : styles.field__itemBtn
                          // }
                          type="submit"
                        >
                          Submit
                      </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal