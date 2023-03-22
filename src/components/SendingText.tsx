import React, { useState } from "react";
import { useMutation } from "react-query";
import { fetchAiAnswer } from "../api/UseApi";

export const SendingText = () => {
  const [saidAi, setSaidAi] = useState<string>("");
  const kogptMutation = useMutation("textToAi", fetchAiAnswer, {
    onError: (error, variable, context) => {
      console.log("error");
    },
    onSuccess: (data, variables, context) => {
      console.log("success");
      setSaidAi(data.generations[0].text);
    },
  });
  type reqBodyType = {
    prompt: string;
    max_tokens: number;
    temperature: number;
    top_p: number;
  };
  const [userInputText, setUserInputText] = useState<string>("");
  const reqBody: reqBodyType = {
    prompt: userInputText, // 전달할 제시어
    max_tokens: 100, // koGPT의 응답 문자열 길이
    temperature: 0.3, // 올바른 결과일 가능성을 얼마나 신뢰할지 온도값으로 조절, 높으면 창의적으로 대답
    top_p: 0.7, // 가능성이 높은 토큰부터 수치를 합하여 상위확률(top_p)를 넘지 않도록 제한
  };

  const koSubmitHandler = () => {
    kogptMutation.mutate(reqBody);
  };

  return (
    <div style={{ textAlign: "center", margin: "10vw" }}>
      <h1>내가 말할거 같으면</h1>
      <h4>{kogptMutation.isLoading ? "................." : saidAi}</h4>
      <input
        type="text"
        placeholder="인간 시대의 끝이 도래했다."
        onChange={(event) => setUserInputText(event.target.value)}
        style={{ width: "80vw", height: "3vh" }}
      />
      <button onClick={() => koSubmitHandler()}>전송</button>
    </div>
  );
};
