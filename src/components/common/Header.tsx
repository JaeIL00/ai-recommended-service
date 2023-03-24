import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../../recoil/Atoms'
import { HeaderView } from '../../view/common/HeaderView'

export const Header = () => {
	const navigate = useNavigate()
	const userInfo = useRecoilValue(userInfoState)
	const logoutHandler = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}
	return (
		<HeaderView thumnailImg={userInfo.thumbnail_image} logoutHandler={logoutHandler} />
	)
}
