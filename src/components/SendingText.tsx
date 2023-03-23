import React, { useState } from "react";
import { useMutation } from "react-query";
import { fetchOpenAnswer } from "../api/UseApi";

export const SendingText = () => {
  const [saidAi, setSaidAi] = useState<string>("");
  const kogptMutation = useMutation("textToAi", fetchOpenAnswer, {
    onError: (error) => {
      console.log("error : ", error);
    },
    onSuccess: (data) => {
      console.log("success");
    },
  });

  const [userInputText, setUserInputText] = useState<string>("");

  const koSubmitButtonHandler = async () => {
    kogptMutation.mutate("hi");
  };

  return (
    <div style={{ textAlign: "center", margin: "10vw" }}>
      <h1>Short Novel</h1>
      <h4>{kogptMutation.isLoading ? "................." : saidAi}</h4>
      <textarea
        placeholder="인간 시대의 끝이 도래했다."
        onChange={(event) => setUserInputText(event.target.value)}
        style={{ width: "80vw", height: "10vh", resize: "none" }}
      />
      <button onClick={() => koSubmitButtonHandler()}>전송</button>
    </div>
  );
};
