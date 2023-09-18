import "./styles.css";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-002/completions",
          {
            prompt:
              "I need gift recommendations for my friend who loves hiking and camping. They also enjoy reading. Can you suggest some personalized gift ideas?",
            max_tokens: 100 // Adjust the number of tokens as needed
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer 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` // Replace with your actual API key
            }
          }
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };

    fetchData();
  }, []);
  return <div className="App"></div>;
}
