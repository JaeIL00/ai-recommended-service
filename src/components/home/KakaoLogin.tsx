import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useLocation,useNavigate } from 'react-router-dom'
import { getKakaoToken } from '../../api/UseApi'

const { Kakao } = window

export const KakaoLogin = () => {
	const navigate = useNavigate()
	const location = useLocation()
	
	// 카카오 인가코드 가져오기
	const kakaoCode = location.search.split('=')[1]

	// 마운트 후 토큰 발급 함수 호출
	// useEffect(() => {
	// 	mutate(kakaoCode)
	// },[])

	// 인가코드로 토큰 발급
	const {mutate} = useMutation('getKakaoToken', getKakaoToken, {
		onSuccess(data) {
			if(data.access_token) {
				// Kakao.init(import.meta.env.VITE_KAKAO_REST_API_KEY)
				// Kakao.Auth.setAccessToken(data.access_token);
				// localStorage.setItem('token', data.access_token)
				// getUserInfo()
			}
			else navigate('/signin')
		}
	})

	// 유저 정보 가져오기(닉네임, 프로필썸네일)
	const getUserInfo = async () => {
		const user = await Kakao.API.request({url: '/v2/user/me'})
		// 유저 정보 전역으로 관리하여 헤더 프로필과 테스트에서 쓰이도록 관리
		// user.properties.nickname
		// user.properties.thumbnail_image
		navigate('/')
	}
	
	
	
	return (
		<div>KakaoLogin</div>
	)
}