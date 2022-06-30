import Sub from "./Sub";

const Main = () => {
  const comp = (
    <div>
      <h1>[Main] 반갑습니다</h1>
      <p>[Main] 리액트를 사용하여 컴포넌트를 만들고 있습니다</p>
      <p>[Main] 3 + 4 = {3 + 4}</p>
      <Sub name="(Main)순대국밥" />
    </div>
  );
  return comp;
};

export default Main;
