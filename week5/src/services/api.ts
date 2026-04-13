export const loginUser = async (username: string, password: string) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Wrong credentials!");
  }

  return response.json();
};

export const sendFeedback = async (
  title: string,
  message: string,
  token?: string
) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({
        title,
        body: message,
        userId: 1,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send feedback");
  }

  return response.json();
};