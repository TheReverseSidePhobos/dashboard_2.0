import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import * as types from '../../redux/actions/types';
import { useSelector } from 'react-redux';
import { saveStartDate, saveTask } from '../../redux/actions/actions';
//
import { Formik, Field, Form } from 'formik';

const Modal = () => {
  const dispatch = useDispatch();

  const { startDate, tasks } = useSelector((state) => state.task);

  const handleCloseModal = () => {
    dispatch({ type: types.TOGGLE_MODAL });
  };

  const setStartDate = (date) => {
    dispatch(saveStartDate(date));
  };

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  const handleSubmit = (task) => {
    dispatch(saveTask(task));
  };
  return (
    <div id={styles.popup} className={styles.popup}>
      <div className={styles.popup__body}>
        <div className={styles.popup__content}>
          <span onClick={handleCloseModal} className={styles.popup__close}>
            X
          </span>
          <div className={styles.popup__title}>Make New Task</div>
          <div className={styles.popup__body}>
            <Formik
              initialValues={{
                taskName: '',
                textTask: '',
                taskPriority: 'lowest'
              }}
              onSubmit={(values, { resetForm }) => {
                const { taskName, textTask, taskPriority } = values;
                let task = {
                  id: tasks.length,
                  date: new Date(),
                  taskName,
                  textTask,
                  taskPriority: taskPriority,
                  startDate,
                  position: 'new',
                  complitedDate: startDate
                };
                handleSubmit(task);
                resetForm();
                handleCloseModal();
              }}
            >
              {({ errors, touched, values }) => (
                <Form className={styles.form}>
                  <Field
                    className={styles.inp}
                    type="text"
                    autoComplete="off"
                    id="taskName"
                    name="taskName"
                    placeholder="task name..."
                  />
                  {touched.taskName && !values.taskName ? (
                    <div className={styles.warning}>is required</div>
                  ) : null}

                  <Field
                    component="select"
                    id="priority"
                    name="priority"
                    className={styles.select__item}
                  >
                    <option value="lowest">Lowest</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="highest">Highest</option>
                  </Field>
                  <DatePicker
                    name="dp"
                    className={styles.dp}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <Field
                    id="textTask"
                    name="textTask"
                    rows="6"
                    component="textarea"
                    className={styles.field__item}
                    placeholder="text name..."
                  />
                  {touched.textTask && !values.textTask ? (
                    <div className={styles.warning}>is required</div>
                  ) : null}
                  <label htmlFor="" />
                  <input name="" type={'checkbox'} />
                  <button
                    disabled={!values.taskName || !values.textTask}
                    className={
                      !values.taskName || !values.textTask
                        ? styles.field__itemBtn_disabled
                        : styles.field__itemBtn
                    }
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
