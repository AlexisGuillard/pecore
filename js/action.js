export class Action {
  #_html;
  #_name;
  #_action;
  #_delay;
  #_clickCounter;
  #_events;

  constructor(name, action, delay = 0) {
    this._name = name;
    this._action = action;
    this._delay = delay;
    this._clickCounter = 0;
    this._events = [];

    this._html = document.createElement("div");
    this._html.classList.add("button");
    this._html.innerHTML = "<div class='text'>" + name + "</div>";
    this._html.addEventListener("click", () => { this.click() }, false);
  }

  get html() {
    return this._html;
  }

  get clickCounter() {
    return this._clickCounter;
  }

  click() {
    this._clickCounter += 1;

    if (this._delay) {
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress");
      progressBar.style.animationDuration = (this._delay / 1000) + "s";

      this._html.classList.add("disable");
      this._html.appendChild(progressBar);

      setTimeout(() => {
        this.doAction();
        progressBar.remove();
        this._html.classList.remove("disable");
      }, this._delay);
    } else {
      this.doAction();
    }

    this._events.forEach(event => {
      if (event.trigger())
        event.action();
    });
  }

  doAction() {
    this._action();
  }

  delayAction(delay) {
    setTimeout(this.doAction(), delay);
  }

  addEventOnTrigger(trigger, action) {
    this._events.push({ trigger: trigger, action: action })
  }
}