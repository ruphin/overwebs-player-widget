{
  let prestigeRanks = ['bronze', 'silver', 'gold']

  let _source = document.currentScript

  class OverwebsPlayerWidget extends Gluon.Element {
    static get _source() {
      return _source;
    }

    static get is() { return 'overwebs-player-widget' }

    constructor() {
      super();
      this._player = {};
    }

    set player(player) {
      // Risky?
      Object.assign(this, player);
    }

    get player() {
      return this._player;
    }

    set name(name) {
      this._player.name = name
      this.$.name.textContent = name
    }

    get name() {
      return this._player.name
    }

    set avatar(avatar) {
      this._player.avatar = avatar
      this.$.avatar.style.backgroundImage = 'url(' + this.resolveUrl(`avatars/${avatar}.png`) + ')';
    }

    get avatar() {
      return this._player.avatar
    }

    set level(level) {
      this._player.level = level
      this.$.levelBox.classList.remove.apply(this.$.levelBox.classList, prestigeRanks);
      this.$.levelBox.classList.add(prestigeRanks[Math.trunc(level / 600)]);
      this.$.level.textContent = (level - 1) % 100 + 1;
      this.$.prestige.textContent = '★'.repeat(Math.trunc(((level % 600) - 1) / 100));
    }

    get level() {
      return this._player.level
    }


    set status(status) {
      this._player.status = status
      this.$.status.style.background = this._statusBackground(status);
    }

    get status() {
      return this._player.status
    }

    _statusBackground(status) {
      switch(status) {
        case 'available': return '#7DFF00';
        case 'away': return 'yellow';
        case 'busy': return 'red';
        default: return '#7DFF00';
      }
    }

  }

  customElements.define(OverwebsPlayerWidget.is, OverwebsPlayerWidget)
}
