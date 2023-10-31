"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState<[{ url: string }]>([{ url: "" }]);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      fetch("/api/completions/image", {
        method: "POST",
        body: JSON.stringify(input),
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then(res => {
          setUrl(res);
          setLoading(false);
          setInput("");
        })
        .catch(error => {
          console.log("Error:", error);
          setLoading(false);
        });
    } catch (error) {
      console.log("Catch Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />

      <form onSubmit={onSubmit}>
        <label>
          What is a topic of your video?
          <input
            required
            placeholder="Image Title"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <Button disabled={loading} type="submit">
          Send
          {loading && <Loader2 className="h-4 w-4 ml-2 animate-spin" />}
        </Button>
      </form>

      <ul>
        {url.map((e, i) => (
          <li key={i}>
            <img src={e.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
