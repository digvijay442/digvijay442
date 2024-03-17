function C(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),o=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",n?"false":"true"),e.setAttribute("aria-label",n?"Open Menu":"Close Menu"),o?.classList.toggle("display-none")})}C(),document.addEventListener("astro:after-swap",C);const Z="astro:before-preparation",ee="astro:after-preparation",te="astro:before-swap",ne="astro:after-swap",oe=e=>document.dispatchEvent(new Event(e));class _ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,a,s,l,u,r,m){super(t,o),this.from=n,this.to=a,this.direction=s,this.navigationType=l,this.sourceElement=u,this.info=r,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class re extends _{formData;loader;constructor(t,o,n,a,s,l,u,r,m){super(Z,{cancelable:!0},t,o,n,a,s,l,u),this.formData=r,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ie extends _{direction;viewTransition;swap;constructor(t,o,n){super(te,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,o,n,a,s,l,u){const r=new re(e,t,o,n,a,s,window.document,l,u);return document.dispatchEvent(r)&&(await r.loader(),r.defaultPrevented||(oe(ee),r.navigationType!=="traverse"&&P({scrollX,scrollY}))),r}async function ae(e,t,o){const n=new ie(e,t,o);return document.dispatchEvent(n),n.swap(),n}const ce=history.pushState.bind(history),E=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},k=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let L,p,A=!1,B;const V=e=>document.dispatchEvent(new Event(e)),W=()=>V("astro:page-load"),le=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},w="data-astro-transition-persist",X="data-astro-transition",Y="data-astro-transition-fallback";let M,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(E({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const ue=(e,t)=>{let o=!1,n=!1;return(...a)=>{if(o){n=!0;return}e(...a),o=!0,setTimeout(()=>{n&&(n=!1,e(...a)),o=!1},t)}};async function fe(e,t){try{const o=await fetch(e,t),n=(o.headers.get("content-type")??"").split(";",1)[0].trim();return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:n}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function de(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=t.getAttribute("type");if(o&&o!=="module"&&o!=="text/javascript")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const a of t.attributes){if(a.name==="src"){const s=new Promise(l=>{n.onload=n.onerror=l});e=e.then(()=>s)}n.setAttribute(a.name,a.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const K=(e,t,o,n,a)=>{const s=U(t,e),l=document.title;document.title=n;let u=!1;if(e.href!==location.href&&!a)if(o.history==="replace"){const r=history.state;E({...o.state,index:r.index,scrollX:r.scrollX,scrollY:r.scrollY},"",e.href)}else ce({...o.state,index:++T,scrollX:0,scrollY:0},"",e.href);if(L=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),u=!0),a)scrollTo(a.scrollX,a.scrollY);else{if(e.hash){history.scrollRestoration="auto";const r=history.state;location.href=e.href,history.state||E(r,"")}else u||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=l};function me(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${w}="${o.getAttribute(w)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(a=>{["load","error"].forEach(s=>n.addEventListener(s,a)),document.head.append(n)}))}return t}async function H(e,t,o,n){const a=(i,d)=>{const f=i.getAttribute(w),g=f&&d.head.querySelector(`[${w}="${f}"]`);if(g)return g;if(i.matches("link[rel=stylesheet]")){const y=i.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${y}"]`)}return null},s=()=>{const i=document.activeElement;if(i?.closest(`[${w}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const d=i.selectionStart,f=i.selectionEnd;return{activeElement:i,start:d,end:f}}return{activeElement:i}}else return{activeElement:null}},l=({activeElement:i,start:d,end:f})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=d,i.selectionEnd=f))},u=i=>{const d=document.documentElement,f=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...f].forEach(({name:c,value:h})=>d.setAttribute(c,h));for(const c of document.scripts)for(const h of i.newDocument.scripts)if(!c.src&&c.textContent===h.textContent||c.src&&c.type===h.type&&c.src===h.src){h.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const h=a(c,i.newDocument);h?h.remove():c.remove()}document.head.append(...i.newDocument.head.children);const g=document.body,y=s();document.body.replaceWith(i.newDocument.body);for(const c of g.querySelectorAll(`[${w}]`)){const h=c.getAttribute(w),x=document.querySelector(`[${w}="${h}"]`);x&&x.replaceWith(c)}l(y)};async function r(i){function d(y){const c=y.effect;return!c||!(c instanceof KeyframeEffect)||!c.target?!1:window.getComputedStyle(c.target,c.pseudoElement).animationIterationCount==="infinite"}const f=document.getAnimations();document.documentElement.setAttribute(Y,i);const g=document.getAnimations().filter(y=>!f.includes(y)&&!d(y));return Promise.all(g.map(y=>y.finished))}if(!A)document.documentElement.setAttribute(X,e.direction),n==="animate"&&await r("old");else throw new DOMException("Transition was skipped");const m=document.title,b=await ae(e,p,u);K(b.to,b.from,t,m,o),V(ne),n==="animate"&&!A&&r("new").then(()=>B())}async function G(e,t,o,n,a){if(!I()||location.origin!==o.origin){location.href=o.href;return}const s=a?"traverse":n.history==="replace"?"replace":"push";if(s!=="traverse"&&P({scrollX,scrollY}),U(t,o)&&o.hash){K(o,t,n,document.title,a);return}const l=await se(t,o,e,s,n.sourceElement,n.info,n.formData,u);if(l.defaultPrevented){location.href=o.href;return}async function u(r){const m=r.to.href,b={};if(r.formData){b.method="POST";const f=r.sourceElement instanceof HTMLFormElement?r.sourceElement:r.sourceElement instanceof HTMLElement&&"form"in r.sourceElement?r.sourceElement.form:r.sourceElement?.closest("form");b.body=f?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(r.formData):r.formData}const i=await fe(m,b);if(i===null){r.preventDefault();return}if(i.redirected&&(r.to=new URL(i.redirected)),M??=new DOMParser,r.newDocument=M.parseFromString(i.html,i.mediaType),r.newDocument.querySelectorAll("noscript").forEach(f=>f.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const d=me(r.newDocument);d.length&&await Promise.all(d)}if(A=!1,k)p=document.startViewTransition(async()=>await H(l,n,a));else{const r=(async()=>{await new Promise(m=>setTimeout(m)),await H(l,n,a,j())})();p={updateCallbackDone:r,ready:r,finished:new Promise(m=>B=m),skipTransition:()=>{A=!0}}}p.ready.then(async()=>{await de(),W(),le()}),p.finished.then(()=>{document.documentElement.removeAttribute(X),document.documentElement.removeAttribute(Y)}),await p.ready}async function N(e,t){await G("forward",L,new URL(e,location.href),t??{})}function he(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>T?"forward":"back";T=o,G(n,L,new URL(location.href),{},t)}const F=()=>{P({scrollX,scrollY})};{(k||j()!=="none")&&(L=new URL(location.href),addEventListener("popstate",he),addEventListener("load",W),"onscrollend"in window?addEventListener("scrollend",F):addEventListener("scroll",ue(F,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const z=new Set,S=new WeakSet;let R,J,q=!1;function we(e){q||(q=!0,R??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",ye(),pe(),ge(),Te())}function ye(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&D(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function pe(){let e;document.body.addEventListener("focusin",n=>{v(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",o,{passive:!0}),O(()=>{for(const n of document.getElementsByTagName("a"))S.has(n)||v(n,"hover")&&(S.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",o,{passive:!0}))});function t(n){const a=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{D(a,{with:"fetch"})},80)}function o(){e&&(clearTimeout(e),e=0)}}function ge(){let e;O(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||v(t,"viewport")&&(S.add(t),e??=be(),e.observe(t))})}function be(){const e=new WeakMap;return new IntersectionObserver((t,o)=>{for(const n of t){const a=n.target,s=e.get(a);n.isIntersecting?(s&&clearTimeout(s),e.set(a,setTimeout(()=>{o.unobserve(a),e.delete(a),D(a.href,{with:"link"})},300))):s&&(clearTimeout(s),e.delete(a))}})}function Te(){O(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&D(e.href,{with:"link"})})}function D(e,t){const o=t?.ignoreSlowConnection??!1;if(ve(e,o))if(z.add(e),(t?.with??"link")==="link"){const n=document.createElement("link");n.rel="prefetch",n.setAttribute("href",e),document.head.append(n)}else fetch(e).catch(n=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(n)})}function ve(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const o=new URL(e,location.href);return location.origin===o.origin&&(location.pathname!==o.pathname||location.search!==o.search)&&!z.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const o=e.dataset.astroPrefetch;return o==="false"?!1:t==="tap"&&(o!=null||R)&&Q()?!0:o==null&&R||o===""?t===J:o===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function O(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ee(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(k||Ee()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,a=new URL(n,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||a!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),N(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||$(t))return;const o=t,n=e.submitter,a=new FormData(o,n);let s=n?.getAttribute("formaction")??o.action??location.pathname;const l=n?.getAttribute("formmethod")??o.method;if(l==="dialog"||location.origin!==new URL(s,location.href).origin)return;const u={sourceElement:n??o};if(l==="get"){const r=new URLSearchParams(a),m=new URL(s);m.search=r.toString(),s=m.toString()}else u.formData=a;e.preventDefault(),N(s,u)}),we({prefetchAll:!0}));