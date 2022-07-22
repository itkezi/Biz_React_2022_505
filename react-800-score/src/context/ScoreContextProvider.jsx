import { useContext, createContext, useState, useEffect } from "react";

// ScoreContext라는 Store 생성
const ScoreContext = createContext();

// store에서 state 변수와 함수를 가져가기 쉽도록
// 도와줄 함술을 선언하기
const useScoreContext = () => {
  return useContext(ScoreContext);
};

// state 변수와 함수를 공유하기 위한 Store
const ScoreContextProvider = ({ children }) => {
  // 입력된 text 저장할 state 변수
  const [student, setStudent] = useState({
    st_num: "",
    st_name: "",
    st_dept: "",
    st_tel: "",
    st_addr: "",
  });

  // API 서버에서 학생 리스트를 가져와서 저장할 state 배열
  const [studentList, setStudentList] = useState([]);

  const [stdIsUpdate, setStdUpdate] = useState(false);

  const fetchStudent = async () => {
    const response = await fetch("/api/student");
    const stdList = await response.json();
    setStudentList(stdList);
  };

  const deleteStudent = async (st_num) => {
    // await 빼먹으면 result값을 받기 전에 if문이 실행되어 버림
    const response = await fetch(
      `http://localhost:8080/SpMVC_030_Score/api/student/${st_num}/delete`
    );
    const result = await response.text();

    // 서버에서 삭제가 되었다는 메시지를 받으면
    // 다시 서버에 데이터를 요청하여 화면 다시 그린다
    if (result === "OK") {
      alert("삭제 완");
      fetchStudent();
    } else {
      alert("삭제 오류");
    }
  };

  const stNumCheck = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}/check`);
    const result = await response.text();
    if (result === "OK") {
      alert("사용 가능한 학번");
    } else {
      alert("중 복 !");
    }
  };

  const insertStudent = async () => {
    let url = "/api/student/insert";
    if (stdIsUpdate) {
      url = "/api/student/insert";
    }
    const fetchData = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(student),
    };
    const response = await fetch(url, fetchData);
    const result = await response.text();
    if (result === "OK") {
      alert("데이터 추가 완.");
      fetchStudent();
    } else {
      alert("데이터 추가 실패");
    }
  };

  const getStudent = async (st_num) => {
    const response = await fetch(`/api/student/${st_num}`);
    const stJson = await response.json();
    setStudent(stJson);
    setStdUpdate(true);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  // store에 state 변수와 함수를 보관하기 위하여 보관용 창고 생성
  const props = {
    studentList,
    setStudentList,
    student,
    setStudent,
    deleteStudent,
    insertStudent,
    stNumCheck,
    getStudent,
  };

  return (
    <ScoreContext.Provider value={props}>{children}</ScoreContext.Provider>
  );
};

export { ScoreContextProvider, useScoreContext };
