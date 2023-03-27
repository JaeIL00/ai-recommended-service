import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { HomeView } from '../../view/home/HomeView'
import { userInfoState } from '../../recoil/Atoms'
import { useNavigate } from 'react-router-dom'

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

	// 테스트 페이지 이동
	const navigate = useNavigate()
	const moveToMusicRecommendTest = () => {
		navigate('/test')
	}

	return (
		<HomeView name={userInfo.nickname} moveToMusicRecommendTest={moveToMusicRecommendTest} />
	)
}
