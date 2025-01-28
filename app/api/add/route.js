import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  //mongo connection
  const client = await clientPromise;
  const db = client.db("tasks_next");
  const collection = db.collection("tasks");
  const result = await collection.insertOne(body);

  return Response.json({ message: "Task added", result: result });
}
