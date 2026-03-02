import RoomComp from "@/components/RoomComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Room",
};

export default function RoomPage() {
  return (
    <main className="flex flex-col h-screen max-h-screen">
      <RoomComp />
    </main>
  );
}
