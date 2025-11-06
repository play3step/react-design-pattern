import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
