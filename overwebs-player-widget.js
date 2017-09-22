import{GluonElement,html,onRouteChange}from'../gluonjs/gluon.js';import'../overwebs-fonts/overwebs-fonts.js';let prestigeRanks=['bronze','silver','gold'];class OverwebsPlayerWidget extends GluonElement{get template(){return html`
<style>
  :host {
    display: inline-flex;
    position: absolute;
    top: calc(40 / 25.6 * 1vw);
    right: calc(68 / 25.6 * 1vw);
    height: calc(60 * var(--overwebs-window-size, 1920px) / 1920);
    background: #27354F;
  }

  #status {
    height: 100%;
    width: calc(6 * var(--overwebs-window-size, 1920px) / 1920);
    background: #7DFF00;
  }

  #avatar {
    height: 100%;
    width: calc(60 * var(--overwebs-window-size, 1920px) / 1920);
    background-size: contain;
    background-repeat: no-repeat;
  }

  .player {
    line-height: 1;
    display: flex;
    align-items: center;
    color: white;
    height: 100%;
    width: calc(340 * var(--overwebs-window-size, 1920px) / 1920);
  }

  .name {
    margin-left: calc(9.8 * var(--overwebs-window-size, 1920px) / 1920);
    font-size: calc(18 * var(--overwebs-window-size, 1920px) / 1920);
    margin-top: calc(1 * var(--overwebs-window-size, 1920px) / 1920);
    letter-spacing: calc(0.25 * var(--overwebs-window-size, 1920px) / 1920);
    font-family: overwebs-helvetica;
    text-transform: uppercase;
  }

  #levelBox {
    height: calc(18 * var(--overwebs-window-size, 1920px) / 1920);
    margin-left: calc(8 * var(--overwebs-window-size, 1920px) / 1920);
    padding-left: calc(6 * var(--overwebs-window-size, 1920px) / 1920);
    border-radius: calc(3 * var(--overwebs-window-size, 1920px) / 1920);
    padding-right: calc(2 * var(--overwebs-window-size, 1920px) / 1920);
    display: flex;
    align-items: center;
  }

  .level {
    font-size: calc(15 * var(--overwebs-window-size, 1920px) / 1920);
    line-height: calc(18 * var(--overwebs-window-size, 1920px) / 1920);
    padding-right: calc(5 * var(--overwebs-window-size, 1920px) / 1920);
    font-family: overwebs-futura;
    color: white;
    transform: translateY(calc(1 * var(--overwebs-window-size, 1920px) / 1920));
  }

  .prestige {
    display: inline-block;
    border-radius: calc(3 * var(--overwebs-window-size, 1920px) / 1920);
    font-family: overwebs-futura;
    background: #FFFFFF;
    font-size: calc(18 * var(--overwebs-window-size, 1920px) / 1920);
    line-height: calc(14 * var(--overwebs-window-size, 1920px) / 1920);
  }

  #levelBox.bronze {
    background: #A35435;
  }

  #levelBox.bronze .prestige {
    color: #A35435;
  }

  #levelBox.silver {
    background: silver; // TODO: fix placeholder
  }
  #levelBox.silver .prestige {
    color: silver; // TODO: fix placeholder
  }

  #levelBox.gold {
    background: gold; // TODO: fix placeholder
  }
  #levelBox.gold .prestige {
    color: gold; // TODO: fix placeholder
  }
</style>
<div id="status"></div>
<div id="avatar"></div>
<div class="player">
  <span class="name">${this.name}</span>
  <span id="levelBox">
    <span class="level">${(this.level-1)%100+1}</span>
    <!-- TODO: The futura font does not support the star glyph -->
    <span class="prestige">${'\u2605'.repeat(Math.trunc((this.level%600-1)/100))}</span>
  </span>
</div>
    `}constructor(){super(),this._player={}}set player(a){Object.assign(this,a)}get player(){return this._player}set name(a){this._player.name=a,this.render()}get name(){return this._player.name||''}set avatar(a){this._player.avatar=a,this.$.avatar.style.backgroundImage=`url("${window.modulesAssetPath&&window.modulesAssetPath('overwebs-player-widget')||''}/avatars/${a}.png")`}get avatar(){return this._player.avatar}set level(a){this._player.level=a,this.$.levelBox.classList.remove(...prestigeRanks),this.$.levelBox.classList.add(prestigeRanks[Math.trunc(a/600)]),this.render()}get level(){return this._player.level||''}set status(a){this._player.status=a,this.$.status.style.background=this._statusBackground(a)}get status(){return this._player.status}_statusBackground(a){return'available'===a?'#7DFF00':'away'===a?'yellow':'busy'===a?'red':'#7DFF00'}}customElements.define(OverwebsPlayerWidget.is,OverwebsPlayerWidget);