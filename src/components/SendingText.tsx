import React, { useState } from "react";
import { useMutation } from "react-query";
import { fetchAiAnswer } from "../api/UseApi";

export const SendingText = () => {
  const [saidAi, setSaidAi] = useState<string>("");
  const kogptMutation = useMutation("textToAi", fetchAiAnswer, {
    onError: (error) => {
      console.log("error : ", error);
    },
    onSuccess: (data) => {
      console.log("success");
      setSaidAi(data.generations[0].text);
    },
  });
  type reqBodyType = {
    prompt: string;
    max_tokens: number;
  };
  const [userInputText, setUserInputText] = useState<string>("");
  const reqBody: reqBodyType = {
    prompt: userInputText, // 전달할 제시어
    max_tokens: 50, // koGPT의 응답 문자열 길이
  };

  const koSubmitButtonHandler = () => {
    kogptMutation.mutate(reqBody);
  };

  return (
    <div style={{ textAlign: "center", margin: "10vw" }}>
      <h1>내가 말할거 같으면</h1>
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
