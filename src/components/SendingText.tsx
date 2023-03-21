import React, { useState } from "react";
import { useMutation } from "react-query";
import { fetchAiAnswer } from "../api/useApi";

export const SendingText = () => {
  const kogptMutation = useMutation("textToAi", fetchAiAnswer, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onError: (error, variable, context) => {
      console.log("error", error, variable, context);
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
  });
  type reqBodyType = {
    prompt: string;
    max_tokens: number;
    temperature: number;
    top_p: number;
  };
  const [userInputText, setUserInputText] = useState("");
  const reqBody: reqBodyType = {
    prompt: userInputText, // 전달할 제시어
    max_tokens: 100, // koGPT의 응답 문자열 길이
    temperature: 0.3, // 올바른 결과일 가능성을 얼마나 신뢰할지 온도값으로 조절, 높으면 창의적으로 대답
    top_p: 0.7, // 가능성이 높은 토큰부터 수치를 합하여 상위확률(top_p)를 넘지 않도록 제한
  };

  const koSubmitHandler = () => {
    // if (event.key === "Enter") kogptMutation.mutate(reqBody);
    kogptMutation.mutate(reqBody);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUserInputText(event.target.value)}
        // onKeyDown={(event) => koSubmitHandler(event)}
      />
      <button onClick={() => koSubmitHandler()}>전송</button>
    </div>
  );
};
