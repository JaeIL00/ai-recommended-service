import React from 'react'
import {
	Title,
	Container,
	TopDownCircle,
	BlueObject,
	GuideText
} from '../../styles/home/HomeStyles'

export const HomeView = () => {
	return (
		<>
			<Title>음악 추천 AI</Title>
			<GuideText top={'27vh'} left={'5vw'}>듣던 음악이<br />질렸어😔</GuideText>
			<GuideText top={'46vh'} left={'42vw'}>새로운 음악 없을까?</GuideText>
			<GuideText top={'60vh'} left={'8.5vw'}>찾아보기에는<br />음악이 너무 많아😩</GuideText>
			<Container>
				<TopDownCircle
					background={'radial-gradient(50% 50% at 50% 50%, rgba(243, 181, 63, 0) 0%, #F3B53F 80.21%)'} />
				<BlueObject />
				<TopDownCircle background={'radial-gradient(50% 50% at 50% 50%, rgba(153, 116, 227, 0) 0%, #9974E3 80.21%)'} />
			</Container>
		</>
	)
}
