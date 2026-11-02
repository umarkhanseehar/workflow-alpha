import { esc } from "./util.js";
import { icon } from "./icons.js";

// Original illustrations drawn in code (no stock photos). Colours come from CSS (.a-*).
const wrap = (inner, label) =>
  `<svg class="art" viewBox="0 0 240 160" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const artProfile = () =>
  wrap(
    `<rect class="a-soft" x="6" y="10" width="228" height="140" rx="16"/>
     <rect class="a-card" x="28" y="26" width="184" height="108" rx="12"/>
     <rect class="a-navy" x="28" y="26" width="184" height="34" rx="12"/>
     <rect class="a-navy" x="28" y="44" width="184" height="16"/>
     <circle class="a-ring" cx="62" cy="62" r="19"/>
     <circle class="a-blue" cx="62" cy="62" r="15"/>
     <circle class="a-white" cx="62" cy="57" r="5.5"/>
     <path class="a-white" d="M51 72c2-6 6-8 11-8s9 2 11 8z"/>
     <rect class="a-line" x="90" y="76" width="92" height="7" rx="3.5"/>
     <rect class="a-line a-line--s" x="90" y="90" width="70" height="6" rx="3"/>
     <rect class="a-blue" x="40" y="108" width="62" height="16" rx="8"/>
     <rect class="a-white" x="52" y="114" width="38" height="4" rx="2"/>
     <rect class="a-line" x="112" y="112" width="40" height="8" rx="4"/>
     <circle class="a-green" cx="196" cy="44" r="5"/>`,
    "A professional profile card with a clear headline"
  );

export const artContent = () =>
  wrap(
    `<rect class="a-soft" x="6" y="10" width="228" height="140" rx="16"/>
     <g class="a-float a-f1"><rect class="a-card" x="22" y="26" width="92" height="64" rx="10"/>
       <rect class="a-line" x="34" y="40" width="68" height="6" rx="3"/><rect class="a-line a-line--s" x="34" y="54" width="52" height="5" rx="2.5"/><rect class="a-line a-line--s" x="34" y="66" width="60" height="5" rx="2.5"/></g>
     <g class="a-float a-f2"><rect class="a-navy" x="104" y="46" width="62" height="78" rx="10"/>
       <rect class="a-blue" x="114" y="58" width="42" height="26" rx="5"/><rect class="a-line a-line--d" x="114" y="94" width="42" height="5" rx="2.5"/><rect class="a-line a-line--d" x="114" y="106" width="28" height="5" rx="2.5"/></g>
     <g class="a-float a-f3"><rect class="a-card" x="150" y="76" width="70" height="58" rx="10"/>
       <circle class="a-blue" cx="185" cy="105" r="14"/><path class="a-white" d="M181 98l12 7-12 7z"/></g>`,
    "Posts, a carousel and a short video made from your expertise"
  );

export const artConversation = () =>
  wrap(
    `<rect class="a-soft" x="6" y="10" width="228" height="140" rx="16"/>
     <rect class="a-card" x="24" y="28" width="118" height="42" rx="14"/>
     <rect class="a-line" x="38" y="42" width="84" height="6" rx="3"/><rect class="a-line a-line--s" x="38" y="55" width="56" height="5" rx="2.5"/>
     <rect class="a-blue" x="98" y="84" width="118" height="42" rx="14"/>
     <rect class="a-white" x="112" y="98" width="84" height="6" rx="3"/><rect class="a-white a-white--s" x="112" y="111" width="50" height="5" rx="2.5"/>
     <circle class="a-green" cx="30" cy="30" r="7"/><path class="a-white" d="m26.5 30 2.5 2.5 4.5-5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>`,
    "A relevant business conversation starting"
  );

// Hero scene: founder portrait with floating cards that show the system at work
export function heroArt(ctx, founder) {
  const img = founder.image
    ? `<img src="${esc(ctx.href(founder.image))}" alt="${esc(founder.name)}, ${esc(founder.role)}" width="420" height="520">`
    : `<div class="ha-mono" role="img" aria-label="Photo placeholder for ${esc(founder.name)}"><span>MU</span><small>Add your photo</small></div>`;
  return `<div class="ha" aria-hidden="false">
    <div class="ha-glow"></div>
    <svg class="ha-ring" viewBox="0 0 400 400" aria-hidden="true"><circle cx="200" cy="200" r="190"/><circle cx="200" cy="200" r="150"/></svg>
    <div class="ha-photo">${img}</div>
    <div class="ha-card ha-card--a">${icon("linkedin", 18)}<div><b>Post scheduled</b><span>Approved by you</span></div></div>
    <div class="ha-card ha-card--b">${icon("mic", 18)}<div><b>Voice note in</b><span>Draft on the way</span></div></div>
    <div class="ha-card ha-card--c">${icon("chat", 18)}<div><b>New enquiry</b><span>Follow-up ready</span></div></div>
  </div>`;
}
