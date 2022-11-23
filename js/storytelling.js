export class Storytelling {
  static addNarrative(narrative, node) {
    node.insertAdjacentHTML("afterbegin", "<div class='narrative'>" + narrative + "</div>");
  }
}