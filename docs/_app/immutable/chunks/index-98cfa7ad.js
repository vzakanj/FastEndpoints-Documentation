function C(){}function nt(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(J)}function K(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function vt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function it(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $t(t){let e;return Q(t,n=>e=n)(),e}function kt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function Et(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?nt(n.ctx.slice(),t[1](i(e))):n.ctx}function St(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function At(t,e,n,i,r,u){if(r){const c=R(e,n,i,u);t.p(c,r)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Nt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ct(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Mt(t){const e={};for(const n in t)e[n]=!0;return e}function qt(t,e,n){return t.set(n),e}function Ot(t){return t&&K(t.destroy)?t.destroy:C}let M=!1;function rt(){M=!0}function ct(){M=!1}function st(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ot(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:st(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const d=f+1;n[d]=s,r=Math.max(d,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[s],f)}}function lt(t,e){if(M){for(ot(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Pt(t,e,n){M&&!n?lt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode.removeChild(t)}function Tt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function at(t){return document.createElement(t)}function ft(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Dt(){return I(" ")}function Bt(){return I("")}function Lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function U(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:U(t,i,e[i])}function zt(t,e){for(const n in e)U(t,n,e[n])}function _t(t){return Array.from(t.childNodes)}function dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,e,n,i,r=!1){dt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function X(t,e,n,i){return V(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ft(t,e,n){return X(t,e,n,at)}function Ht(t,e,n){return X(t,e,n,ft)}function ht(t,e){return V(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Wt(t){return ht(t," ")}function Gt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Jt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Kt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function Qt(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Rt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let v;function w(t){v=t}function x(){if(!v)throw new Error("Function called outside component initialization");return v}function Ut(t){x().$$.on_mount.push(t)}function Vt(t){x().$$.after_update.push(t)}function Xt(t){x().$$.on_destroy.push(t)}function Yt(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=mt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}function Zt(t,e){return x().$$.context.set(t,e),e}function te(t){return x().$$.context.get(t)}const b=[],W=[],j=[],G=[],Y=Promise.resolve();let B=!1;function Z(){B||(B=!0,Y.then(tt))}function ee(){return Z(),Y}function L(t){j.push(t)}const D=new Set;let A=0;function tt(){const t=v;do{for(;A<b.length;){const e=b[A];A++,w(e),pt(e.$$)}for(w(null),b.length=0,A=0;W.length;)W.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];D.has(n)||(D.add(n),n())}j.length=0}while(b.length);for(;G.length;)G.pop()();B=!1,D.clear(),w(t)}function pt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const N=new Set;let g;function ne(){g={r:0,c:[],p:g}}function ie(){g.r||$(g.c),g=g.p}function et(t,e){t&&t.i&&(N.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),g.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function re(t,e){yt(t,1,1,()=>{e.delete(t.key)})}function ce(t,e,n,i,r,u,c,o,s,l,f,d){let _=t.length,m=u.length,h=_;const q={};for(;h--;)q[t[h].key]=h;const k=[],O=new Map,P=new Map;for(h=m;h--;){const a=d(r,u,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),O.set(p,k[h]=y),p in q&&P.set(p,Math.abs(h-q[p]))}const z=new Set,F=new Set;function T(a){et(a,1),a.m(o,f),c.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=k[m-1],p=t[_-1],y=a.key,E=p.key;a===p?(f=a.first,_--,m--):O.has(E)?!c.has(y)||z.has(y)?T(a):F.has(E)?_--:P.get(y)>P.get(E)?(F.add(y),T(a)):(z.add(E),_--):(s(p,c),_--)}for(;_--;){const a=t[_];O.has(a.key)||s(a,c)}for(;m;)T(k[m-1]);return k}function se(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(n[s]=o[s],r[s]=1);t[u]=o}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function le(t){t&&t.c()}function ue(t,e){t&&t.l(e)}function gt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:c,after_update:o}=t.$$;r&&r.m(e,n),i||L(()=>{const s=u.map(J).filter(K);c?c.push(...s):$(s),t.$$.on_mount=[]}),o.forEach(L)}function xt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(b.push(t),Z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ae(t,e,n,i,r,u,c,o=[-1]){const s=v;w(t);const l=t.$$={fragment:null,ctx:null,props:u,update:C,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return l.ctx&&r(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),f&&bt(t,d)),_}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){rt();const d=_t(e.target);l.fragment&&l.fragment.l(d),d.forEach(ut)}else l.fragment&&l.fragment.c();e.intro&&et(t.$$.fragment),gt(t,e.target,e.anchor,e.customElement),ct(),tt()}w(s)}class fe{$destroy(){xt(this,1),this.$destroy=C}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ce as $,oe as A,xt as B,nt as C,ee as D,C as E,Q as F,$ as G,K as H,Et as I,At as J,jt as K,St as L,lt as M,Xt as N,Lt as O,Ct as P,Nt as Q,It as R,fe as S,ft as T,Ht as U,zt as V,W,Ot as X,Mt as Y,Yt as Z,kt as _,Dt as a,re as a0,qt as a1,L as a2,Kt as a3,Qt as a4,$t as a5,Rt as a6,vt as a7,te as a8,Tt as a9,Pt as b,Wt as c,ie as d,Bt as e,et as f,ne as g,ut as h,ae as i,Zt as j,Vt as k,at as l,Ft as m,_t as n,Ut as o,U as p,Jt as q,I as r,wt as s,yt as t,ht as u,Gt as v,le as w,ue as x,gt as y,se as z};
