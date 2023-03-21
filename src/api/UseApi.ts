type reqBodyType = {
  prompt: string;
  max_tokens: number;
  temperature: number;
  top_p: number;
};

export const fetchAiAnswer = async (reqBody: reqBodyType) => {
  const response = await fetch(
    `${import.meta.env.VITE_KAKAO_BASE_URL}/v1/inference/kogpt/generation`,
    {
      method: "POST",
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
