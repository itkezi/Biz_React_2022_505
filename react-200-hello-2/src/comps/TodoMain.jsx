import { useState } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([]);

  const insert_todo = (content) => {
    // 여기는 TodoInput이 전달해준 todo를 todoList에 추가하는 곳
    // const todo = {
    //   t_id: "",
    //   t_s_date: "",
    //   content,
    //   t_e_date: "",
    // };

    // todoList 배열을 모두 복사하고 끝에 todo를 추가하여
    // todoBody 배열을 생성하라
    const todoBody = [...todoList, content];
    setTodoList(todoBody);
  };

  return (
    <div className="w3-container w3-margin">
      {/* TodoInput아 insert_todo 함수를 너에게 보낸다 */}
      <TodoInput insert_todo={insert_todo} />
      {/* TodoList야 TodoList 데이터를 TodoList 변수에 담아 보낸다 */}
      <TodoList todoList={todoList} />
    </div>
  );
};
export default TodoMain;
