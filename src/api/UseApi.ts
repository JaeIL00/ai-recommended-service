

const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
const JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URL
export const getKakaoAuthCode = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`

export const getKakaoToken = async (KAKAO_CODE: string) => {
	const response = await fetch('https://kauth.kakao.com/oauth/token', {
		method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
		body: `grant_type=authorization_code&client_id=${JAVASCRIPT_KEY}&redirect_url=${REDIRECT_URI}&code=${KAKAO_CODE}`
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
      prompt: userPropmpt,
      temperature: 0,
      max_tokens: 1000,
    }),
  });
  return response.json();
};
