import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Column.module.scss';
import { convertDateFunc } from '../../utils/ustils';
import {
  infoToggleModalAC,
  saveObjForInfo,
  updateTasks
} from '../../redux/actions/actions';
import { useSelector } from 'react-redux';
const Column = ({ position, inner_tasks }) => {
  const dispatch = useDispatch();
  const position_name =
    position == 'new'
      ? 'New Tasks'
      : position == 'progress'
      ? 'In Progress'
      : position == 'done'
      ? 'Done'
      : null;

  const handeDeleteBtn = (id, inner_tasks) => {
    let taskIndex = inner_tasks.findIndex((item) => item.id == id);
    if (taskIndex !== -1) {
      inner_tasks.splice(taskIndex, 1);
    }
    dispatch(updateTasks(inner_tasks));
  };

  const { tasks } = useSelector((state) => state.task);

  const changePosition = (id, position, tasks) => {
    tasks.map((item) => {
      if (item.id == id) {
        item.position = position;
      }
    });
    dispatch(updateTasks(tasks));
  };

  const handleNextBtn = (item) => {
    if (item.position == 'new') {
      changePosition(item.id, 'progress', tasks);
    } else if (item.position == 'progress') {
      changePosition(item.id, 'done', tasks);
    }
  };
  const handlePrevBtn = (item) => {
    if (item.position == 'done') {
      changePosition(item.id, 'progress', tasks);
    } else if (item.position == 'progress') {
      changePosition(item.id, 'new', tasks);
    }
  };

  const handleInfoModalShow = (item) => {
    dispatch(saveObjForInfo(item));
    dispatch(infoToggleModalAC());
  };

  return (
    <>
      <div className={styles.colomn}>
        <div className={styles.title}>{position_name}</div>
        <div className={styles.cards}>
          {inner_tasks &&
            inner_tasks.map((item) =>
              item && item.position == position ? (
                <div className={styles.card} key={item.id}>
                  <span
                    onClick={(e) => handeDeleteBtn(item.id, tasks)}
                    className={styles.close}
                  >
                    X
                  </span>

                  <h5
                    className={
                      item.taskPriority == 'lowest'
                        ? 'priority green'
                        : item.taskPriority == 'low'
                        ? 'priority green'
                        : item.taskPriority == 'medium'
                        ? 'priority blue'
                        : item.taskPriority == 'high'
                        ? 'priority red'
                        : item.taskPriority == 'highest'
                        ? 'priority red'
                        : 'priority'
                    }
                  >
                    {/* {!prioritySelected ? (
                      <div>
                        {item.taskPriority}
                        <AiOutlineEdit onClick={handleEditClick} />
                      </div>
                    ) : (
                      <div className="prioritySelect">
                        <select
                          // onBlur={(e) => handlePriorityOff(e, item, task__arr)}
                          // onChange={(e) =>
                          //   handlePriorityOff(e, item, task__arr)
                          // }
                        >
                          <option value="lowest">LOWEST</option>
                          <option value="low">LOW</option>
                          <option value="medium">MEDIUM</option>
                          <option value="high">HIGH</option>
                          <option value="highest">HIGHEST</option>
                        </select>
                      </div>
                    )} */}
                  </h5>

                  <div className={styles.item__priority}>
                    {item.taskPriority}
                  </div>
                  <h3 className={styles.item_title}>{item.taskName}</h3>
                  <br />
                  <div className={styles.item_text}>
                    {item.textTask.length >= 20
                      ? item.textTask.slice(0, 20) + '...'
                      : item.textTask}
                  </div>
                  <div className={styles.date}>
                    <span>Creation date: </span>
                    {convertDateFunc(item.date)}
                    <br />
                    <span>Must be complited: </span>
                    <span
                      className={
                        item.complitedDate < item.date
                          ? `${styles.red}`
                          : `${styles.green}`
                      }
                    >
                      {convertDateFunc(item.complitedDate)}
                    </span>
                  </div>
                  <div className={styles.buttons}>
                    <button
                      className={styles.card__btn}
                      onClick={() => handlePrevBtn(item)}
                    >
                      Prev
                    </button>
                    <button
                      className={styles.card__btn}
                      onClick={() => handleNextBtn(item)}
                    >
                      Next
                    </button>
                  </div>
                  <div
                    onClick={() => handleInfoModalShow(item)}
                    className={styles.detailed}
                  >
                    Show Details
                  </div>
                </div>
              ) : null
            )}
        </div>
      </div>
    </>
  );
};

export default Column;
