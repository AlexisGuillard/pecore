export class Action {
  #_html;
  #_name;
  #_action;
  #_delay;

  constructor(name, action, delay = 0) {
    this._name = name;
    this._action = action;
    this._delay = delay;

    this._html = document.createElement("div");
    this._html.classList.add("button");
    this._html.innerHTML = "<div class='text'>" + name + "</div>";
    this._html.addEventListener("click", () => { this.do_action() }, false);
  }

  do_action() {
    if (this._delay) {
      const progress_bar = document.createElement("div");
      progress_bar.classList.add("progress");
      progress_bar.style.animationDuration = (this._delay / 1000) + "s";

      this._html.classList.add("disable");
      this._html.appendChild(progress_bar);

      setTimeout(() => {
        this._action();
        progress_bar.remove();
        this._html.classList.remove("disable");
      }, this._delay);
    } else {
      this._action();
    }
  }

  get html() {
    return this._html;
  }
}
