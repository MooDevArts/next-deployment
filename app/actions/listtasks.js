export const listTasks = async () => {
  const raw = "";

  const requestOptions = {
    method: "GET",
    body: raw,
    redirect: "follow",
  };

  const result = await fetch("/api/list", requestOptions);

  console.log("result");

  return result;
};
