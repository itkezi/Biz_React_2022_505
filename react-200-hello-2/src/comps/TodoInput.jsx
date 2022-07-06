import uuid from "react-uuid";
import moment from "moment";

const TodoInput = (props) => {
  const { insert_todo } = props;

  /*
  input box에 키보드로 문자열을 입력하는 중에 Enter를 누르면
  데이터를 TodoMain의 insert_todo에게 보내서
  todoList에 추가해 달라라고 요청을 할 것이다
  */
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const todo = {
        t_id: uuid(),
        t_s_date: moment().format("YY[-]MM[-]DD / HH:mm"),
        content: e.target.value,
        t_e_date: "",
      };
      // insert_todo 호출하며 입력된 Todo를 전송한다
      insert_todo(todo);
      e.target.value = "";
    }
  };

  return (
    <>
      {/* 
      input box onKeyDown 핸들러 등록
      키보드 입력을 감시하기
       */}
      <input
        className="w3-input w3-border w3-hover-light-gray"
        placeholder="TODO INPUT"
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default TodoInput;
