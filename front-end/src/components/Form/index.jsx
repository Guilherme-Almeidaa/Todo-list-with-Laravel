import React from "react";
import AddButton from "../AddButton";
import { connect } from "react-redux";
import Grid from "../Grid";
import SearchButton from "../SerachButton";
import "./styles.css";

function Form({
  handlerAdd,
  handlerChange,
  description,
  searchTask,
  edit,
  updateTask,
  selectTask,
}) {
  const keyHandler = ({ key }) => {
    if (key === "Enter") {
      handlerAdd();
    } else if (key === "Escape") {
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={handlerChange}
          onKeyUp={keyHandler}
          value={description}
        ></input>
      </Grid>

      <Grid>
        <AddButton
          edit={edit}
          onClick={
            edit
              ? () =>
                  updateTask(selectTask.id, {
                    ...selectTask,
                    description,
                  })
              : handlerAdd
          }
        />
      </Grid>
      <Grid>
        <SearchButton onClick={searchTask} />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectTask: state.todoList.taskSelect,
});

export default connect(mapStateToProps)(Form);
