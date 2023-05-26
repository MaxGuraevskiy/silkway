import Image from "next/image";
import Section1 from "./sections/section1/section1";
import Section2 from "./sections/section2/section2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10">
      <Section1 />
      <Section2 />
    </main>
  );
}
