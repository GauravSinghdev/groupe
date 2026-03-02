"use client";

import { useUsername } from "@/hooks/use-username";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function IdentityCard() {
  const { username } = useUsername();
  const searchParams = useSearchParams();

  const router = useRouter();

  const { mutate: createRoom } = useMutation({
    mutationFn: async () => {
      const res = await client.room.create.post();

      if (res.status === 200) {
        router.push(`/room/${res.data?.roomId}`);
      }
    },
  });

  useEffect(() => {
    const error = searchParams.get("error");

    if (error === "room-not-found") {
      toast.error("Room not found");
    } else if (error === "room-full") {
      toast.error("Room is already full");
    } else if (error === "destroyed") {
      toast.error("Room is destroyed");
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-green-500">
          {"> "}private_chat
        </h1>
        <p className="text-zinc-500 text-sm">
          A private, self-destructing chat room.
        </p>
      </div>
      <div className="border border-zinc-800 p-6 backdrop-blur-md">
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="flex items-center text-blue-500">
              Your Identity
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-200 font-mono">
                {username}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => createRoom()}
        className="w-full  p-3 text-sm font-bold border border-zinc-400 rounded-lg mt-2 cursor-pointer disabled:opacity-50 hover:scale-110 transition-all duration-300"
      >
        CREATE A ROOM
      </button>
    </div>
  );
}
