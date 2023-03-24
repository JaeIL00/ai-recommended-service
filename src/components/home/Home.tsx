import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { HomeView } from '../../view/home/HomeView'
import { userInfoState } from '../../recoil/Atoms'

export const Home = () => {
	const userInfo = useRecoilValue(userInfoState)
	const setUser = useSetRecoilState(userInfoState)
	
	useEffect(() => {
		const name = userInfo.nickname
		const finalName = name === '.' || name === '' ? '유저' : name
		setUser(prev => {
			return {...prev, nickname: finalName}
		})
	}, [])

	return (
		<HomeView name={userInfo.nickname} />
	)
}
