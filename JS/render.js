import Node from "./createNode.js";

export default function (where, data) {
  let fragments = document.content.createDocumentFragment();

  data.forEach((user) => {
    let nodes = Node(user);
    fragments.append(nodes);
  });

  where.innerHTML = "";
  where.append(fragments);
}
