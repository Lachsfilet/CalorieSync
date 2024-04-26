"use client";
import { SignIn, UserButton, useUser } from "@clerk/nextjs";

import { api } from "~/trpc/react";

import { useState } from "react";

export const CreatePost = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");

  const ctx = api.useContext();

  const { mutate } = api.example.create.useMutation({
    onSuccess: () => {
      setInput("");
      void ctx.example.getLatest.invalidate();
    },
    onError: (e) => {
      const errorMessage: string[] | undefined =
        e.data?.zodError?.fieldErrors.example;
      if (errorMessage?.[0]) {
        console.error(errorMessage[0]);
      } else {
        console.error("Failed to post! Please try again later.");
      }
    },
  });

  if (!user) return <SignIn />;
  console.log(user.id);
  return (
    <div className="flex w-full gap-3">
      <UserButton
        appearance={{
          elements: {
            userButtonAvatarBox: {
              width: 56,
              height: 56,
            },
          },
        }}
      />
      <input
        placeholder="Type something!"
        className="grow bg-transparent outline-none"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            if (input !== "") {
              mutate({ name: input, userID: user.id });
            }
          }
        }}
      />
      {input !== "" && (
        <button onClick={(): void => mutate({ name: input, userID: user.id })}>
          Post
        </button>
      )}
    </div>
  );
};
