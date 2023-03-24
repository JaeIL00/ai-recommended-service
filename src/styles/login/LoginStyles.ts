import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	text-align: center;
`
export const Title = styled.h1`
	font-size: 6.5vh;
	font-weight: 700;
	text-align: center;
	margin-top: 15vh;
`
export const GuideText = styled.span<{top: string, left: string}>`
	position: absolute;
	top: ${({top}) => top};
	left: ${({left}) => left};
	font-size: 3vh;
	line-height: 3.5vh
`
export const KakaoLogin = styled(Link)`
	width: 80vw;
	margin-top: 60vh;
	img {
		width: 80vw;
	}
`
export const BackObjectBox = styled.div`
	width: 100vw;
	position: absolute;
	top: -25vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12vh;
	z-index: -1;
`
export const TopDownCircle = styled.div<{background:string}>`
	width: 80vw;
	height: 36.5vh;
	background: ${({background}) => background};
	border-radius: 50%;
	transform: rotate(-180deg);
`
export const BlueObject = styled.div`
	width: 60vw;
	height: 50vh;
	background: radial-gradient(50% 50% at 50% 50%, rgba(3, 65, 224, 0) 0%, #0341E0 80.21%);
	border-radius: 30vw;
	transform: rotate(-180deg);  
` 
