import React from 'react'
import { Container,HeaderTitle, LogoutButton, ProfileThum } from '../../styles/common/HeaderStyles'

type headerPropsTypes = {
	thumnailImg: string;
	logoutHandler: () =>void
}

export const HeaderView = ({thumnailImg, logoutHandler}: headerPropsTypes) => {
	return (
		<Container>
			<HeaderTitle>Music</HeaderTitle>
			<LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
			<ProfileThum to='/'>
				<img src={thumnailImg} alt="상단 프로필 사진" />
			</ProfileThum>
		</Container>
	)
}
