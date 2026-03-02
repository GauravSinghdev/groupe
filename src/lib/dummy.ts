import { nanoid } from "nanoid";
const ANIMALS = ["tiger", "panda", "whale", "crow"];

export const STORAGE_KEY = "chat_username";

export const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];

  return `anonymous-${word}-${nanoid(5)}`;
};

export const formatTimeRemaining = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};
