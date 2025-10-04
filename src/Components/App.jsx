import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const STORAGE_KEY = "feedbackData";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const dataParsed = localStorage.getItem(STORAGE_KEY);
    if (dataParsed) {
      try {
        return JSON.parse(dataParsed);
      } catch (e) {
        console.error("Parsing error:", e);
      }
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  const total = feedback.good + feedback.bad + feedback.neutral;
  const positivePercent = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <>
      <Description />
      <Options onFeedback={updateFeedback} showReset={total > 0} />
      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positivePercent}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
}
