import React, { useState } from "react";
import { FirstMusicTestView } from "../../view/musicTest/FirstMusicTestView";
import { SecondMusicTestView } from "../../view/musicTest/SecondMusicTestView";

type userBasicInfoTypes = {
  gender: string;
  age: string;
};

export const MusicTest = () => {
  // 다음 질문 이동
  const [questionOrder, setQuestionOrder] = useState<string>("first");
  const moveToNextQuiz = () => {
    switch (questionOrder) {
      case "first":
        if (userBasicInfo.gender && userBasicInfo.age) setQuestionOrder("second");
        break;
      case "second":
        setQuestionOrder("third");
        break;
      case "third":
        setQuestionOrder("fourth");
        break;
      case "fourth":
        setQuestionOrder("fifth");
        break;
			default: return
    }
  };


  // 유저 성별과 나이 기본 정보
  const [userBasicInfo, setUserBasicInfo] = useState<userBasicInfoTypes>({
    gender: "",
    age: "",
  });
  const getUserAge = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setUserBasicInfo({ ...userBasicInfo, age: event.currentTarget.value });
  };
  const getUserGender = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setUserBasicInfo({ ...userBasicInfo, gender: event.currentTarget.value });
  };


  // 각 질문에 해당하는 스테이트를 구분하여 사용자가 기입한 값 관리
  const [loveArtist, setLoveArtist] = useState<string[]>([]);
	const [loveMusicName, setLoveMusicName] = useState<string[]>([]);
	const [recentArtist, setRecentArtist] = useState<string[]>([]);
	const [recentMusicName, setRecentMusicName] = useState<string[]>([]);
  const getUserLoveArtist = (
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string,
		order: number,
		question: string
  ) => {
    if (event.nativeEvent.isComposing) {
      return;
    }
    else if (event.key === "Enter" && !loveArtist[0]) setLoveArtist([value]);
    else if (event.key === "Enter") {
			// 인풋의 위치를 인덱스로 식별하여 값 수정할때에 이전값을 수정
			switch(question) {
				case 'questionOne':
					firstAnswer(value, order)
					break
			}
			
		}
  };
	// 첫번째 질문일 때에 인풋값에 맞게 어레인지한다.
	const firstAnswer = (value: string, order: number) => {
		order > 0 ? 
		setLoveArtist(prev => {
			prev.splice(order, 1, ', ' + value)
			return prev
		}) :
		setLoveArtist(prev => {
			prev.splice(order, 1, value)
			return prev
		})
	}


  return (
    <>
      {questionOrder === "first" && (
        <FirstMusicTestView
          moveToNextQuiz={moveToNextQuiz}
          getUserAge={getUserAge}
          getUserGender={getUserGender}
        />
      )}
      {questionOrder === "second" && (
        <SecondMusicTestView
          moveToNextQuiz={moveToNextQuiz}
          getUserLoveArtist={getUserLoveArtist}
        />
      )}
    </>
  );
};
