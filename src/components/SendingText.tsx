import { useMutation } from "react-query";
import { fetchOpenAnswer } from "../api/UseApi";

export const SendingText = () => {
  const kogptMutation = useMutation("textToAi", fetchOpenAnswer, {
    onError: (error) => {},
    onSuccess: (data) => {},
  });

  const koSubmitButtonHandler = async () => {
    kogptMutation.mutate("");
  };

  return (
    <div style={{ textAlign: "center", margin: "10vw" }}>
      <h1>Short Novel</h1>
      <textarea
        placeholder="인간 시대의 끝이 도래했다."
        style={{ width: "80vw", height: "10vh", resize: "none" }}
      />
      <button onClick={() => koSubmitButtonHandler()}>전송</button>
    </div>
  );
};
