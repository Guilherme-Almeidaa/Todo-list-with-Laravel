import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import RefreshIcon from "@mui/icons-material/Refresh";
import { connect } from "react-redux";
import "./styles.css";
import ButtonEdit from "../ButtonEdit/index,";
import { fetchTask } from "../../actions/todoList";

function TodoList({
  list,
  updateTask,
  deleteTask,
  edit,
  requestTask,
  setList,
  setEdit,
}) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const changeStyleSelectedTask = (index) => {
    list.forEach((element) => {
      if (element.selected) delete element.selected;
    });
    list[index].selected = "selected";
    setList(list);
  };

  const selectedTask = (id, index) => {
    setEdit(true);
    requestTask(id);
    changeStyleSelectedTask(index);
  };

  return (
    <TableContainer className="content-table" component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="table-icons">Descrição</StyledTableCell>
            <StyledTableCell className="table-icons" align="right">
              Status
            </StyledTableCell>
            <StyledTableCell className="table-icons" align="right">
              Ações
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <StyledTableRow id={item.selected} key={index}>
              <StyledTableCell
                className="table-icons colum-table"
                component="th"
                scope="row"
              >
                {item.description}
              </StyledTableCell>

              <StyledTableCell
                className="colum-table"
                style={{ color: item.done ? "#2E8B57" : "#708090" }}
                align="right"
              >
                {<CheckCircleIcon className="icon-status"></CheckCircleIcon>}
              </StyledTableCell>
              <StyledTableCell className="colum-table" align="right">
                <CheckIcon
                  hidden={item.done}
                  onClick={() => updateTask(item.id, { ...item, done: true })}
                  className="icon-btn-check"
                ></CheckIcon>

                <ButtonEdit
                  onClick={() => selectedTask(item.id, index)}
                  edit={edit}
                />

                <RefreshIcon
                  onClick={() => updateTask(item.id, { ...item, done: false })}
                  hidden={!item.done}
                  className="icon-btn-refresh"
                ></RefreshIcon>
                <IconButton
                  hidden={!item.done}
                  aria-label="delete"
                  style={{ color: "#DC143C" }}
                  onClick={() => deleteTask(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  requestTask: (id) => dispatch(fetchTask(id)),
});

const mapStateToProps = (state) => ({
  selectTask: state.todoList.taskSelect,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
