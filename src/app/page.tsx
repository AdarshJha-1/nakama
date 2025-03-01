import Tiptap from "@/components/Tiptap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {

  return (
    <main >
     <Tiptap/>
    </main>
  );
}
