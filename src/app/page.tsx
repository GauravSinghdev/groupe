import IdentityCard from "@/components/IdentityCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Suspense>
        <IdentityCard />
      </Suspense>
    </main>
  );
}
