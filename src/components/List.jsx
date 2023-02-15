import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos); //store 연결확인

  // dispatch로 명령 전달
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggle = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <StListContainer>
      <h1 style={{ color: "black" }}> 💙You can doit💙</h1>
      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === false) {
            return (
              <StTodoBox key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>+</StDetailBtn>
                <Tiltle>{todo.title}</Tiltle>
                <Body>{todo.body}</Body>
                <StBtnBox>
                  <StBtn onClick={() => onDelete(todo.id)}>삭 제</StBtn>
                  <StBtn onClick={() => onToggle(todo.id)}>{todo.isDone ? "취 소" : "완 료"}</StBtn>
                </StBtnBox>
              </StTodoBox>
            );
          } else {
            return null;
          }
        })}
      </StListBox>

      <h1 style={{ marginTop: "70px", color: "black" }}>💙I knew you could do it💙</h1>
      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === true) {
            return (
              <StTodoBox key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>+</StDetailBtn>
                <Tiltle>{todo.title}</Tiltle>
                <Body>{todo.body}</Body>
                <StBtnBox>
                  <StBtn onClick={() => onDelete(todo.id)}>삭 제</StBtn>
                  <StBtn onClick={() => onToggle(todo.id)}>{todo.isDone ? "취 소" : "완 료"}</StBtn>
                </StBtnBox>
              </StTodoBox>
            );
          } else {
            return null;
          }
        })}
      </StListBox>
    </StListContainer>
  );
}

export default List;
const StListContainer = styled.div`
  padding: 40px;
`;

const StListBox = styled.div`
  box-sizing: border-box;
  display: flex;
  /* todos들을 여러 행으로 표현 */
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
`;
const StTodoBox = styled.div`
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 20px;
  // 배경색 투명도 조절
  background-color: rgba(255, 255, 255, 0.332);
  padding: 20px;
`;

const StDetailBtn = styled.button`
  float: right; //버튼 오른쪽상단
  border-radius: 20px;
  border: none;
  padding: 5px 10px;
  width: 90px;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    width: 100px;
  }
`;

const Tiltle = styled.h1`
  color: black;
`;

const Body = styled.p`
  color: black;
  font-size: 1.3rem;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;
const StBtn = styled.button`
  border-radius: 20px;
  border: none;
  padding: 15px 15px;
  width: 100px;
  cursor: pointer;
  font-size: 1rem;
  &:first-of-type {
    background-color: #bb2f2fc5;
    &:hover {
      font-size: 0.9rem;
    }
  }
  &:nth-of-type(2) {
    background-color: #1a4721b6;
    color: #ffffff;
    &:hover {
      font-size: 0.9rem;
    }
  }
`;
