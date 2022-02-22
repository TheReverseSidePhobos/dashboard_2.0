import React, { useEffect, useState } from 'react';
import styles from './ModalDetaile.module.scss';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { infoToggleModalAC } from '../../redux/actions/actions';
import { convertDateFunc } from '../../utils/ustils';

const ModalDetaile = ({ name, text, priority, dateStart, dateFinish }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(infoToggleModalAC());
  };

  const { selectedForInfo } = useSelector((state) => state.task);
  const [dtemp, setDtemp] = useState(null);

  useEffect(() => {
    let dtm = Date.parse(selectedForInfo.date);
    let dm = new Date(dtm);
    setDtemp(dm);
  }, [selectedForInfo]);
  return (
    <div id={styles.popup} className={styles.popup}>
      <div className={styles.popup__body}>
        <div className={styles.popup__content}>
          <span onClick={handleCloseModal} className={styles.popup__close}>
            X
          </span>
          <div className={styles.popup__title}>Task Details</div>
          <div className={styles.popup__body}>
            <div className={styles.datePicker}>
              <div className={styles.info_container}>
                <div className={styles.date_picker}>
                  <DatePicker
                    name="dp"
                    inline
                    selected={dtemp}
                    //onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className={styles.text_fields}>
                  <div>
                    <input
                      className={styles.inp}
                      type="text"
                      value={selectedForInfo.taskName}
                    />
                  </div>
                  <div>
                    <input
                      className={styles.inp}
                      type="text"
                      value={selectedForInfo.taskPriority}
                    />
                  </div>
                  <div>
                    <textarea
                      className={styles.txta}
                      type="text"
                      value={selectedForInfo.textTask}
                    ></textarea>
                  </div>
                  <div className={styles.complitedDate}>
                    <label>Must be complited for</label> <br />
                    {convertDateFunc(selectedForInfo.complitedDate).toString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetaile;
