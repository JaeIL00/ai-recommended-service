import React from "react";

type MusicTestViewTypes = {
  getUserAge: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  getUserGender: (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
  moveToNextQuiz: () => void;
};

export const FirstMusicTestView = ({
  getUserAge,
  getUserGender,
  moveToNextQuiz,
}: MusicTestViewTypes) => {
  return (
    <div>
      <h1>취향 테스트</h1>
      <strong>내 기본 정보</strong>
      <br />
      <input
        type="radio"
        name="gender"
        value="남성"
        onClick={(event) => getUserGender(event)}
      />
      남성
      <input
        type="radio"
        name="gender"
        value="여성"
        onClick={(event) => getUserGender(event)}
      />
      여성
      <input
        type="radio"
        name="age"
        value="10대"
        onClick={(event) => getUserAge(event)}
      />
      10대
      <input
        type="radio"
        name="age"
        value="20대"
        onClick={(event) => getUserAge(event)}
      />
      20대
      <button onClick={moveToNextQuiz}>다음</button>
    </div>
  );
};
