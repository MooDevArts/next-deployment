import Button from "@/components/Button";
import MenuBack from "@/components/MenuBack";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function Page({ params }) {
  const id = (await params).id;

  const client = await clientPromise;
  const db = client.db("tasks_next");
  const collection = db.collection("tasks");
  const cursor = collection.find({ _id: new ObjectId(id) });

  const data = await cursor.toArray();

  return (
    <div className="min-h-screen flex flex-col pt-36 items-center gap-2 relative">
      <Button text={data[0].name} color=""></Button>
      <Button text={data[0].description || "no decription"} color=""></Button>
      <MenuBack></MenuBack>
    </div>
  );
}
