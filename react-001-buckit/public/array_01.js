const data = {
  b_title: "새끼양",
  b_comment: "lamb",
};

const dataList = [data];

// dataList 배열에 담긴 값을 dataList2로 그대로 복세하면서
// 새로운 data 요소를 추가하는 코드
// react에서 state 변수가 배열일 경우
// setter 함수 내부에서 다음과 같은 코드가 사용돼야 한다
const dataList2 = [...dataList, data];

console.log(dataList2);
