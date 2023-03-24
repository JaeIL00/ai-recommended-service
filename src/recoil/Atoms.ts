import { atom } from "recoil";

export const userInfo = atom({
	key: 'info',
	default: {
		id: '',
		nickname: '',
		thumbnail_image: ''
	}
})