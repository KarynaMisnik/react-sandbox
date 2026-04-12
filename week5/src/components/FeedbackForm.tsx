import { useState } from "react";

export default function FeedbackForm() {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            body: message,
            userId: 1,
          }),
        },
      );

      const data = await response.json();

      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  // Conditional rendering
  if (isSubmitted) {
    return (
      <p className="text-green-600 text-lg">
        Thank you for your feedback! Your message was saved with ID:{" "}
        {responseId}
      </p>
    );
  }

  return (
    <form
      onSubmit={submitFeedback}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
