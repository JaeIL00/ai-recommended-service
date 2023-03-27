

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
const JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URL
export const getKakaoAuthCode = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

export const getKakaoToken = async (KAKAO_CODE: string) => {
	const response = await fetch('https://kauth.kakao.com/oauth/token', {
		method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
		body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`
	})
	return response.json()
}



export const fetchOpenAnswer = async (userPropmpt: string) => {
  const response = await fetch("/v1/engines/text-davinci-003/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: '나는 대한민국 20대 남성이야. 내가 가장 좋아하는 음악 아티스트는 fkj, coldplay, daft punk. 가장 좋아하는 노래는 fkj-ylang ylang, coldplay-O, crush-가끔. 최근에 좋아하게된 아티스트는 Anderson .Paak. 최근에 자주 듣는 음악은 지바노프-여기서서. 내 음악 취향을 기반으로 새로운 음악 2개 가수와 곡이름을 추천해줘. 추천한 곡마다 추천한 이유를 같이 알려줘. 추천한 곡과 이유 구분은 @로 해줘.',
      temperature: 0,
      max_tokens: 1000,
    }),
  });
  return response.json();
};
