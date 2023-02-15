import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos"; //액션객체 임포트

function Form() {
  // dispatch 생성
  const dispatch = useDispatch();

  // input을 통해 들어오는 변화값을 받는 state
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // id값 주기  승호님이 해결해주심 ㅠㅠㅠ
  const nextId = useSelector((state) => {
    return state.todos[state.todos.length - 1].id + 1;
  });

  // input의 onChange 이벤트 핸들러
  // input 이벤트헨들러
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id: nextId });
  };

  // form의 onSubmit 이벤트 핸들러. 클릭하면 form에서 나온 변화(명령)를 dispatch에 담아서 올려보낸다!
  // form - onSubmit 이벤트 핸들러.
  const onSubmit = (e) => {
    e.preventDefault();

    //dispatch에 액션을 담아서 리듀서로 보낸다. 여기서 보낸 값이 액션객체의 payload에 들어감
    dispatch(addTodo({ ...todo }));
    setTodo({ id: 0, title: "", body: "", isDone: false }); //이벤트(클릭)이 끝날 때 초기화-> input창을 빈칸으로 만들어 주는 역할!
  };

  return (
    <StForm onSubmit={onSubmit}>
      <StInputGroup>
        <StLabel>제목</StLabel>
        {/* useState의 객체todo의 title(key)를 value로 가져온다 */}
        <StInput type="text" name="title" value={todo.title} onChange={onChange} required />
        <StLabel>내용</StLabel>
        {/* useState의 객체todo의 body(key)를 value로 가져온다 */}
        <StInput type="text" name="body" value={todo.body} onChange={onChange} />
      </StInputGroup>
      <StButton>추가하기</StButton>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  margin: 20px 40px;
  border: none;
  border-radius: 20px;
  background-color: #ffffff6c;
  display: flex;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  padding: 25px;
  font-size: 25px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const StLabel = styled.label`
  font-size: 1.5rem; //최상위 엘리먼트의 font size의 1.2배 크기
  color: black;
`;
const StButton = styled.button`
  border-radius: 15px;
  border: none;
  background-color: #ffffff97;
  width: 120px;
  height: 50px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
  /* 버튼에 마우스 올릴 때 반응 */
  &:hover {
    /* width: 130px;
    border: 1px solid white; */
    color: rgb(255, 255, 255);
    background-color: #057d47df;
  }
`;

const StInput = styled.input`
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  width: 200px;
  height: 30px;
  color: #ff0000;
  padding-left: 50px;
  /* 첫번째 요소에만 오른쪽 여백 */
  &:first-of-type {
    margin-right: 30px;
    height: 50px;
  }
  /* 두번째 요소의 크기만 증가 */
  &:nth-of-type(2) {
    width: 500px;
    height: 50px;
  }
`;
