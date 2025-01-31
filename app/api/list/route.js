import clientPromise from "@/lib/mongodb";

export async function GET() {
  //mongo connection
  const client = await clientPromise;
  const db = client.db("tasks_next");
  const collection = db.collection("tasks");
  const result = await collection.find({}).toArray();

  return Response.json({ message: "Task added", result: result });
}
