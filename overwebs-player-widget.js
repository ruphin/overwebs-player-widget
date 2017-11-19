import{GluonElement as e,html as s}from"../gluonjs/gluon.js";import"../overwebs-fonts/overwebs-fonts.js";const a=["bronze","silver","gold"],t=["16","16","16","15","13","11"],r=/^(?:https?:)?\/\//;export class OverwebsPlayerWidget extends e{get template(){return s`
<style>
  :host {
    display: flex;
    height: calc(60 * var(--overwebs-window-size, 1920px) / 1920);
    width: calc(406 * var(--overwebs-window-size, 1920px) / 1920);
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
    display: inline-flex;
    align-items: center;
    font-family: overwebs-futura;
  }

  .level {
    font-size: calc(15 * var(--overwebs-window-size, 1920px) / 1920);
    line-height: calc(18 * var(--overwebs-window-size, 1920px) / 1920);
    padding-right: calc(5 * var(--overwebs-window-size, 1920px) / 1920);
    transform: translateY(calc(1 * var(--overwebs-window-size, 1920px) / 1920));
  }

  #prestige {
    display: inline-flex;
    align-items: center;
    border-radius: calc(3 * var(--overwebs-window-size, 1920px) / 1920);
    background: white;
    letter-spacing: calc(-3 * var(--overwebs-window-size, 1920px) / 1920);
    height: calc(16 * var(--overwebs-window-size, 1920px) / 1920);
    vertical-align: text-bottom;
  }

  #levelBox.bronze {
    background: #A35435;
    color: white;
  }

  #levelBox.bronze #prestige {
    color: #A35435;
  }

  #levelBox.silver {
    background: #AFBDC3;
    color: #2F3C55;
  }

  #levelBox.silver #prestige {
    color: #333F58;
  }

  #levelBox.gold {
    background: #D3AD12;
    color: #6E2E15;
  }
  #levelBox.gold #prestige {
    color: #A35435;
  }
</style>
<div id="status"></div>
<div id="avatar"></div>
<div class="player">
  <span class="name">${this.name}</span>
  <span id="levelBox">
    <span class="level">${(this.level-1)%100+1}</span>
    <!-- TODO: The futura font does not support the star glyph -->
    <span id="prestige">${"★".repeat(Math.trunc((this.level%600-1)/100))}</span>
  </span>
</div>
    `}constructor(){super(),this._player={}}set player(e){Object.assign(this,e)}get player(){return this._player}set name(e){this._player.name=e,this.render()}get name(){return this._player.name||""}set avatar(e){this._player.avatar=e,r.test(e)?this.$.avatar.style.backgroundImage=`url("${e}")`:this.$.avatar.style.backgroundImage=`url("${window.modulesAssetPath&&window.modulesAssetPath("overwebs-player-widget")||""}/avatars/${e}.png")`}get avatar(){return this._player.avatar}set level(e){this._player.level=e,this.$.levelBox.classList.remove(...a),this.$.levelBox.classList.add(a[Math.trunc(e/600)]);const s=Math.trunc((e%600-1)/100);this.$.prestige.style.fontSize=`calc(${t[s]} * var(--overwebs-window-size, 1920px) / 1920)`;const r=s>0?"3":"0";this.$.prestige.style.paddingRight=`calc(${r} * var(--overwebs-window-size, 1920px) / 1920)`,this.render()}get level(){return this._player.level||""}set status(e){this._player.status=e,this.$.status.style.background=this._statusBackground(e)}get status(){return this._player.status}_statusBackground(e){switch(e){case"available":return"#7DFF00";case"away":return"#F9CC1E";case"busy":return"#BE1E2D";default:return"#7DFF00"}}};customElements.define(OverwebsPlayerWidget.is,OverwebsPlayerWidget);
//# sourceMappingURL=overwebs-player-widget.js.map
