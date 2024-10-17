import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button className="bg-green-800">Shadcn button</Button>
     <Link href={"/signup"}>Signup</Link>
    </main>
  );
}
