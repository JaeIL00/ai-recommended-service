import React from 'react'
import { getKakaoAuthCode } from '../../api/UseApi'
import {
	Title,
	Container,
	GuideText,
	KakaoLogin,
	BackObjectBox,
	TopDownCircle,
	BlueObject,
} from '../../styles/signIn/SignInStyles'
import kakaoDesign from '../../assets/kakao_login_button.png'

export const SignInView = () => {
	return (
		<Container>
			<Title>음악 추천 AI</Title>
			<GuideText top={'27vh'} left={'7vw'}>듣던 음악이<br />질렸어😔</GuideText>
			<GuideText top={'46vh'} left={'42vw'}>새로운 음악 없을까?</GuideText>
			<GuideText top={'62vh'} left={'12.5vw'}>찾아보기에는<br />음악이 너무 많아😩</GuideText>
			<KakaoLogin to={getKakaoAuthCode}>
				<img src={kakaoDesign} alt="" />
			</KakaoLogin>
			<BackObjectBox>
				<TopDownCircle
					background={'radial-gradient(50% 50% at 50% 50%, rgba(243, 181, 63, 0) 0%, #F3B53F 80.21%)'} />
				<BlueObject />
				<TopDownCircle background={'radial-gradient(50% 50% at 50% 50%, rgba(153, 116, 227, 0) 0%, #9974E3 80.21%)'} />
			</BackObjectBox>
		</Container>
	)
}
