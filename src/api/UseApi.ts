export const fetchOpenAnswer = async (userPropmpt: string) => {
  const response = await fetch(
    `https://api.openai.com/v1/engines/text-davinci-003/completions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userPropmpt,
        temperature: 0,
        max_tokens: 50,
      }),
    }
  );
  return response.json();
};
