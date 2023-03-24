import React from 'react'
import { 
	Container,
	GuideText,
	TestStartButton,
	RecordContain,
	RTitle,
	RBox,
	REmpty,
	RGuideText
} from '../../styles/home/HomeStyles'

type homePropsTypes = {
	name: string
}

export const HomeView = ({name}: homePropsTypes) => {
	return (
		<Container>
			<GuideText>
				아직 {name}님 음악 취향을 잘 몰라요😢<br />
				테스트를 진행해서<br />
				AI에게 음악 추천 받아보세요!
			</GuideText>
			<TestStartButton>테스트 시작하기</TestStartButton>
			<RecordContain>
				<RTitle>기록</RTitle>
				<RBox>
					<REmpty>
						<RGuideText>
							AI에게 추천을 받으면<br />
							이곳에 기록이 남아요!
						</RGuideText>
					</REmpty>
				</RBox>
			</RecordContain>
		</Container>
	)
}
