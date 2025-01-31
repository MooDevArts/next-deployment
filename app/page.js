import Button from "@/components/Button";
import Menu from "@/components/Menu";
import clientPromise from "@/lib/mongodb";
import Link from "next/link";

export default async function Home() {
  const client = await clientPromise;
  const db = client.db("tasks_next");
  const collection = db.collection("tasks");
  const result = await collection.find({}).toArray();
  return (
    <main className="min-h-screen flex flex-col pt-36 items-center gap-2 relative">
      {result.map((task) => {
        return (
          <Button href={`${task._id}`} key={task._id} text={task.name}></Button>
        );
      })}
      <Menu />
    </main>
  );
}
