import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	height: 8vh;
	display: flex;
	align-items: center;
	padding: 0 7vw;
	border-bottom: 1vh solid #1353F5;
`
export const HeaderTitle = styled.h2`
	font-size: 3vh;
	font-weight: 700;
	margin-right: auto;
`
export const LogoutButton = styled.button`
	background: none;
	font-size: 1.2vh;
	color: #C5C5C5;
	margin-right: 2.3vw;
`
export const ProfileThum = styled(Link)`
	width: 3.4vh;
	height: 3.4vh;
	border: 0.3vw solid #383838;
	border-radius: 50%;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
	}
`