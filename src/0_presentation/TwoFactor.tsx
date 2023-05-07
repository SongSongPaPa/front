import React, { FormEvent, ChangeEvent, useState } from "react";
import Button from "./components/common/Button";
import { PageWrapper } from "./PageStyle";
import styled from "styled-components";
import Input from "./components/common/Input";
import useUserService from "@root/1_application/useUserService";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #fcfcfc;
  width: 864px;
  height: 683px;
  border-radius: 25px;
  border: none;
  gap: 20px;
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const TwoFactor = () => {
  const [code, setCode] = useState("");
  const { checkTwoFactor } = useUserService();
  const navigate = useNavigate();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleCodeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await checkTwoFactor(code);
    if (result) {
      navigate("/lobby");
    } else {
      alert("2차 비밀번호 인증에 실패했습니다");
      navigate("/");
    }
  };
  return (
    <PageWrapper>
      <Wrapper>
        <form onSubmit={handleCodeSubmit}>
          <Input name="search" value={code} onChange={handleCodeChange} />
          <Button name="modal-round-common" type="submit">
            submit
          </Button>
        </form>
      </Wrapper>
    </PageWrapper>
  );
};

export default TwoFactor;
