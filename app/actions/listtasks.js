export const listTasks = () => {
  const raw = "";

  const requestOptions = {
    method: "GET",
    body: raw,
    redirect: "follow",
  };

  fetch("/api/list", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};
