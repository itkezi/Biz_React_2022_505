# TodoList Project

```
|----------TodoMain----------|
|                            |
|   |------TodoInput-----|   |
|   |--------------------|   |
|                            |
|   |------TodoList------|   |
|   |--------------------|   |
|                            |
|----------------------------|
```

## 데이터 흐름 정의

- TodoInput에서 데이터를 입력하고 추가하면 TodoList 배열에 추가하고
- TodoList 배열은 TodoList에서 표출한다
- TodoInput과 TodoList가 Parents-child 관계에 있다면 TodoInput에서 TodoList State에 값을 추가하면 자연히 TodoList에 변경된 값이 표출될 것이다 하지만 2개의 Component가 같은 level에 있기 때문에 TodoInput에서 TodoList State를 정의하면 데이터를 공유하는데 어려움이 있다
- 이러한 경우는 TodoMain에서 TodoList State를 선언하고 TodoInput과 TodoList가 공유할 수 있는 방법으로 진행해야 한다

## TodoList State의 추가

- TodoMain에서 TodoList State를 선언하고, 데이터를 입력하는 함수를 선언하여 데이터를 입력하는 함수를 TodoInput에 props로 전달해주어야 한다
- TodoInput은 input box에 입력된 데이터를 TodoMain으로부터 전달받은 함수를 통해 Todomain에 선언된 TodoList State에 추가하는 과정이 필요하다
