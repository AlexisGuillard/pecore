const MAX_NARRATIVES = 10;

export class Storytelling {
  static addNarrative(narrative, node) {
    node.insertAdjacentHTML("afterbegin", "<div class='narrative'>" + narrative + "</div>");
    if (node.getElementsByClassName("narrative").length > MAX_NARRATIVES)
      node.removeChild(node.lastChild);
  }
}