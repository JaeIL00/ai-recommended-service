import React, { useState } from "react";

type MusicTestViewTypes = {
  moveToNextQuiz: () => void;
  getUserLoveArtist: (
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string,
		order: number,
		question: string
  ) => void;
};

export const SecondMusicTestView = ({
  moveToNextQuiz,
  getUserLoveArtist,
}: MusicTestViewTypes) => {
	// 인풋 값 onChange
  const [firstInputValue, setFirstInputValue] = useState<string>("");
	const [secondInputValue, setSecondInputValue] = useState<string>("");
  const artistInputValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
		order: string,
  ) => {
    const {
      target: { value },
    } = event;
		switch(order) {
			case 'first':
				setFirstInputValue(value)
				break
			case 'second':
				setSecondInputValue(value);
				break
			default: return
		}
    

  };
  return (
    <div>
      <h1>취향 테스트</h1>
      <strong>내 최애 음악은?</strong>
      <br />
      <input
        type="text"
				placeholder=""
        value={firstInputValue}
        onChange={(event) => artistInputValueHandler(event, 'first')}
				onKeyDown={(event) => getUserLoveArtist(event, firstInputValue, 0, 'questionOne')}
      />
			<input
        type="text"
				placeholder=""
        value={secondInputValue}
        onChange={(event) => artistInputValueHandler(event, 'second')}
				onKeyDown={(event) => getUserLoveArtist(event, secondInputValue, 1, 'questionOne')}
      />
      <button onClick={moveToNextQuiz}>다음</button>
    </div>
  );
};
