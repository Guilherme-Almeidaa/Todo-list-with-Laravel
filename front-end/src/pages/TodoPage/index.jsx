import React, { useCallback, useEffect, useState } from "react";
import { exclude, getAll, register, search, update } from "../../api/todoApi";
import Form from "../../components/Form";
import Todo from "../../components/Todo";
import TodoList from "../../components/TodoList";
import { connect } from "react-redux";
import cookie from "js-cookie";
import "./styles.css";
import { isLoadding } from "../../actions/todoList";

function TodoPage({ selectTask, isLoadding, setIsLoadding }) {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);

  const searchTask = () => {
    const token = cookie.get("token");
    search(description, token).then((response) => {
      setList(response);
    });
  };

  const updateTask = (id, task) => {
    const token = cookie.get("token");
    update(id, task, token)
      .then((_response) => {
        searchTask();
        setEdit(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const refresh = useCallback(() => {
    setIsLoadding(true);
    const token = cookie.get("token");
    getAll(token).then((response) => {
      setList(response);
      setIsLoadding(false);
    });
  }, [setIsLoadding]);

  const handlerAdd = () => {
    const token = cookie.get("token");
    register({ description }, token).then((_response) => {
      setDescription("");
      refresh();
    });
  };
  const handlerChange = ({ target }) => {
    setDescription(target.value);
  };

  useEffect(() => {
    if (description.length === 0) refresh();
  }, [description, refresh]);

  useEffect(() => {
    setDescription(selectTask.description);
  }, [selectTask]);

  useEffect(() => {
    if (!edit) setDescription("");
  }, [edit]);

  const deleteTask = (id) => {
    exclude(id).then((_response) => {
      setDescription("");
      searchTask();
    });
  };

  return (
    <div className="cont-page-todo">
      <Todo />
      <Form
        handlerAdd={handlerAdd}
        description={description}
        handlerChange={handlerChange}
        searchTask={searchTask}
        updateTask={updateTask}
        edit={edit}
      />
      {isLoadding ? (
        "Loadding..."
      ) : (
        <TodoList
          deleteTask={deleteTask}
          list={list}
          updateTask={updateTask}
          handlerAdd={handlerAdd}
          description={description}
          edit={edit}
          setEdit={setEdit}
          setList={setList}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.todoList.tasks,
  selectTask: state.todoList.taskSelect,
  isFetching: state.todoList.isFetching,
  isLoadding: state.todoList.isLoadding,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoadding: (status) => dispatch(isLoadding(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
