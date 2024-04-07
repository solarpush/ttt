async function main() {
  let res;
  // fonction asynchrone sans async
  function asynchroneValue() {
    const result = fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((json) => {
        res = json;
        return json;
      });
    return result;
  }
  async function asynchroneValueAwait() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const json = await result.json();

    return json;
  }
  console.log(asynchroneValue());
  console.log(
    "Avec le await car le main est asynchrone",
    await asynchroneValue()
  );

  // fonction syncrhone mal implémenté
  function synchroneValue() {
    let res_in_function = null;
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => (res_in_function = json));
    return res_in_function;
  }
  console.log(synchroneValue());

  // attente avant affichage du res global
  setTimeout(() => {
    console.log("dans le timeOut", res);
  }, 3000);

  asynchroneValue().then((data) => console.log("dans le main", data));
  asynchroneValueAwait().then((data) =>
    console.log("dans le main avec await", data)
  );
}
main();
