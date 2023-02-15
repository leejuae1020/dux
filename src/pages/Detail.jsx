import React from "react";
import styled from "styled-components";

// useParams는 path에 있는 id값을 조회할 수 있게 해주는 훅!
// useNavigate는 컴포넌트 간의 연결을 도와주는 훅! (다른 종류로는 Linkto가 있음)
import { useParams, useNavigate } from "react-router-dom";

// useSelector를 통해 store에 있는 state를 구독!
import { useSelector } from "react-redux";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos);

  return (
    <StDetailContainer>
      <StDetailBox>
        <StHeadContainer>
          <h3>ID - {param.id}</h3>
          <StButton onClick={() => navigate("/")}>🏠</StButton>
        </StHeadContainer>

        {/* useSelector를 통해 가져온 state(여기서의 이름은 todoStore) 요소에 하나하나 접근하여 id일치 여부를 확인 */}
        {todoStore.map((todo) => {
          // pram.id의 타입은 문자열, todo.id는 숫자여서 형변환
          if (todo.id === parseInt(param.id)) {
            return (
              <StTodoDescBox key={todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </StTodoDescBox>
            );
          } else {
            return null;
          }
        })}
      </StDetailBox>
    </StDetailContainer>
  );
}

export default Detail;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.01)),
    url("https://i.pinimg.com/originals/a2/08/8e/a2088ec5ed675c888e079cdeb6117f30.jpg");
  background-position: center;
  background-size: cover;
`;

const StDetailBox = styled.div`
  border: none;
  border-radius: 20px;
  background-color: white;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const StHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > h3 {
    color: black;
  }
`;
const StButton = styled.button`
  display: inline-block;
  border: none;
  border-radius: 20px;
  background-color: #cee5fb;
  font-size: 1.3em;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    font-size: 1.7rem;
  }
`;

const StTodoDescBox = styled.div`
  & > h1,
  p {
    color: #000000;
  }
`;
