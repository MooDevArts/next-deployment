import Button from "@/components/Button";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-36 items-center gap-2 relative">
      <Button color="green" text="Button"></Button>
      <Button color="red" text="Button"></Button>
      <Button color="yellow" text="Button"></Button>
      <Menu />
    </main>
  );
}
