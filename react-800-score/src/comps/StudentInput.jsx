import { useScoreContext } from "../context/ScoreContextProvider";

const StudentInput = () => {
  const { student, setStudent, insertStudent, stNumCheck } = useScoreContext();

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const onChangeStNum = (e) => {
    const value = e.target.value;
    if (value.length >= 5) {
      stNumCheck(value);
    }
    setStudent({ ...student, st_num: value.toUpperCase() });
  };

  return (
    <div className="w3-row-padding">
      <div className="w3-third w3-margin">
        <input
          name="st_num"
          value={student.st_num}
          className="w3-input"
          placeholder="학번"
          onChange={onChangeStNum}
        />
      </div>
      <div className="w3-third w3-margin">
        <input
          name="st_name"
          value={student.st_name}
          className="w3-input"
          placeholder="이름"
          onChange={onChangeEvent}
        />
      </div>
      <div className="w3-third w3-margin">
        <input
          name="st_dept"
          value={student.st_dept}
          className="w3-input"
          placeholder="학과"
          onChange={onChangeEvent}
        />
      </div>
      <div className="w3-row-padding">
        <div className="w3-third">
          <input
            name="st_tel"
            value={student.st_tel}
            className="w3-input"
            placeholder="전화번호"
            onChange={onChangeEvent}
          />
        </div>

        <div className="w3-third">
          <input
            name="st_addr"
            value={student.st_addr}
            className="w3-input"
            placeholder="주소"
            onChange={onChangeEvent}
          />
        </div>
        <div className="w3-third">
          <button
            onClick={insertStudent}
            className="w3-block w3-button w3-blue"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentInput;
