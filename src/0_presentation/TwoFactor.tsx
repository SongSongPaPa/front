import React, { FormEvent, ChangeEvent, useState } from "react";
import Button from "./components/common/Button";
import { PageWrapper } from "./PageStyle";
import { ModalBody } from "./modals/ModalStyle";
import styled from "styled-components";
import Input from "./components/common/Input";
import useUserService from "@root/1_application/useUserService";

const TwoFactor = () => {
  const [code, setCode] = useState("");
  const { checkTwoFactor } = useUserService();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleCodeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await checkTwoFactor(code);
    if (result) {
      window.open("/lobby", "_self");
    } else {
      alert("2차 비밀번호 인증에 실패했습니다");
      window.open("/", "_self");
    }
  };
  return (
    <PageWrapper>
      <ModalBody>
        <h1>Check TwoFactor Code</h1>
        <form onSubmit={handleCodeSubmit}>
          <Input name="search" value={code} onChange={handleCodeChange} />
          <Button name="modal-round-common" type="submit">
            submit
          </Button>
        </form>
      </ModalBody>
    </PageWrapper>
  );
};

export default TwoFactor;
