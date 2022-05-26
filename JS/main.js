import render from "./render.js";
let list = document.getElementById("list");

async function main() {
  let ftch = await fetch("https://reqres.in/api/users");
  let newftch = await ftch;

  if (newftch.ok) {
    let data = (await newftch.json()).data;
    render(list, data);
  }
}
main();
