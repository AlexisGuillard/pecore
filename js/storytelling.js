const MAX_NARRATIVES = 10;

export class Storytelling {
  static addNarrative(narrative, storytellingNode) {
    storytellingNode.insertAdjacentHTML("afterbegin", "<div class='narrative'>" + narrative + "</div>");
    const narrativeNodes = storytellingNode.getElementsByClassName("narrative");
    if (narrativeNodes.length > MAX_NARRATIVES)
      storytellingNode.removeChild(storytellingNode.lastChild);

    let opacity = 1;
    for (let node of narrativeNodes) {
      node.style.opacity = opacity;
      opacity -= 1 / MAX_NARRATIVES;
    }
  }
}