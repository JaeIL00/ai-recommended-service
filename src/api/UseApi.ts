type reqBodyType = {
  prompt: string;
  max_tokens: number;
};

export const fetchAiAnswer = async (reqBody: reqBodyType) => {
  const response = await fetch(`v1/inference/kogpt/generation`, {
    method: "POST",
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  return response.json();
};
