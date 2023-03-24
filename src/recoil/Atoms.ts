import { atom } from "recoil";

export const userInfoState = atom({
	key: 'info',
	default: {
		id: '',
		nickname: '',
		thumbnail_image: ''
	}
})