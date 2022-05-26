export default function (id, firstname, lastname, email, avatar) {
  let template = document.getElementById("template");
  let newTemp = template.content.cloneNode(true);

  newTemp.querySelector(".card").dataset.id = id;
  newTemp.querySelector(".names").textContent = `${firstname} ${lastname}`;
  newTemp.querySelector(".email").textContent = email;
  newTemp.querySelector(".img").src = avatar;

  return newTemp;
}
