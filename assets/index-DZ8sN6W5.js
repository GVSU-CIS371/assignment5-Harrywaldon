(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const be={},Gr=[],Wt=()=>{},_d=()=>!1,Xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sl=n=>n.startsWith("onUpdate:"),ut=Object.assign,il=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},F_=Object.prototype.hasOwnProperty,Ie=(n,e)=>F_.call(n,e),re=Array.isArray,Qr=n=>yi(n)==="[object Map]",yd=n=>yi(n)==="[object Set]",sh=n=>yi(n)==="[object Date]",le=n=>typeof n=="function",qe=n=>typeof n=="string",Lt=n=>typeof n=="symbol",Ce=n=>n!==null&&typeof n=="object",vd=n=>(Ce(n)||le(n))&&le(n.then)&&le(n.catch),Ed=Object.prototype.toString,yi=n=>Ed.call(n),U_=n=>yi(n).slice(8,-1),Td=n=>yi(n)==="[object Object]",Yo=n=>qe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zs=rl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},B_=/-\w/g,Jn=Zo(n=>n.replace(B_,e=>e.slice(1).toUpperCase())),j_=/\B([A-Z])/g,Rr=Zo(n=>n.replace(j_,"-$1").toLowerCase()),Id=Zo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Zo(n=>n?`on${Id(n)}`:""),$n=(n,e)=>!Object.is(n,e),ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},wd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},ol=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ih;const ea=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ps(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=qe(r)?z_(r):ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(n)||Ce(n))return n}const $_=/;(?![^(]*\))/g,q_=/:([^]+)/,H_=/\/\*[^]*?\*\//g;function z_(n){const e={};return n.replace(H_,"").split($_).forEach(t=>{if(t){const r=t.split(q_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function al(n){let e="";if(qe(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=al(n[t]);r&&(e+=r+" ")}else if(Ce(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const W_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",K_=rl(W_);function Ad(n){return!!n||n===""}function G_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Io(n[r],e[r]);return t}function Io(n,e){if(n===e)return!0;let t=sh(n),r=sh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Lt(n),r=Lt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?G_(n,e):!1;if(t=Ce(n),r=Ce(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Io(n[a],e[a]))return!1}}return String(n)===String(e)}const bd=n=>!!(n&&n.__v_isRef===!0),Dn=n=>qe(n)?n:n==null?"":re(n)||Ce(n)&&(n.toString===Ed||!le(n.toString))?bd(n)?Dn(n.value):JSON.stringify(n,Sd,2):String(n),Sd=(n,e)=>bd(e)?Sd(n,e.value):Qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ka(r,i)+" =>"]=s,t),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ka(t))}:Lt(e)?Ka(e):Ce(e)&&!re(e)&&!Td(e)?String(e):e,Ka=(n,e="")=>{var t;return Lt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Pd(n){return new Rd(n)}function Cd(){return it}function Q_(n,e=!1){it&&it.cleanups.push(n)}let Se;const Ga=new WeakSet;class Vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oh(this),Od(this);const e=Se,t=Ot;Se=this,Ot=!0;try{return this.fn()}finally{Nd(this),Se=e,Ot=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ul(e);this.deps=this.depsTail=void 0,oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_c(this)&&this.run()}get dirty(){return _c(this)}}let kd=0,Ws,Ks;function Dd(n,e=!1){if(n.flags|=8,e){n.next=Ks,Ks=n;return}n.next=Ws,Ws=n}function cl(){kd++}function ll(){if(--kd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ul(r),J_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function _c(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function xd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===oi)||(n.globalVersion=oi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_c(n))))return;n.flags|=2;const e=n.dep,t=Se,r=Ot;Se=n,Ot=!0;try{Od(n);const s=n.fn(n._value);(e.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=t,Ot=r,Nd(n),n.flags&=-3}}function ul(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ul(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function J_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ot=!0;const Md=[];function mn(){Md.push(Ot),Ot=!1}function _n(){const n=Md.pop();Ot=n===void 0?!0:n}function oh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Se;Se=void 0;try{e()}finally{Se=t}}}let oi=0;class X_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!Ot||Se===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Se)t=this.activeLink=new X_(Se,this),Se.deps?(t.prevDep=Se.depsTail,Se.depsTail.nextDep=t,Se.depsTail=t):Se.deps=Se.depsTail=t,Ld(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Se.depsTail,t.nextDep=void 0,Se.depsTail.nextDep=t,Se.depsTail=t,Se.deps===t&&(Se.deps=r)}return t}trigger(e){this.version++,oi++,this.notify(e)}notify(e){cl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ll()}}}function Ld(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ld(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wo=new WeakMap,vr=Symbol(""),yc=Symbol(""),ai=Symbol("");function at(n,e,t){if(Ot&&Se){let r=wo.get(n);r||wo.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new hl),s.map=r,s.key=t),s.track()}}function an(n,e,t,r,s,i){const a=wo.get(n);if(!a){oi++;return}const c=l=>{l&&l.trigger()};if(cl(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Yo(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===ai||!Lt(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ai)),e){case"add":l?h&&c(a.get("length")):(c(a.get(vr)),Qr(n)&&c(a.get(yc)));break;case"delete":l||(c(a.get(vr)),Qr(n)&&c(a.get(yc)));break;case"set":Qr(n)&&c(a.get(vr));break}}ll()}function Y_(n,e){const t=wo.get(n);return t&&t.get(e)}function Fr(n){const e=ve(n);return e===n?e:(at(e,"iterate",ai),wt(n)?e:e.map(Ft))}function ta(n){return at(n=ve(n),"iterate",ai),n}function Nn(n,e){return yn(n)?fn(n)?rs(Ft(e)):rs(e):Ft(e)}const Z_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>Nn(this,n))},concat(...n){return Fr(this).concat(...n.map(e=>re(e)?Fr(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=Nn(this,n[1]),n))},every(n,e){return rn(this,"every",n,e,void 0,arguments)},filter(n,e){return rn(this,"filter",n,e,t=>t.map(r=>Nn(this,r)),arguments)},find(n,e){return rn(this,"find",n,e,t=>Nn(this,t),arguments)},findIndex(n,e){return rn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return rn(this,"findLast",n,e,t=>Nn(this,t),arguments)},findLastIndex(n,e){return rn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return rn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Fr(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,e){return rn(this,"map",n,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...n){return Ls(this,"push",n)},reduce(n,...e){return ah(this,"reduce",n,e)},reduceRight(n,...e){return ah(this,"reduceRight",n,e)},shift(){return Ls(this,"shift")},some(n,e){return rn(this,"some",n,e,void 0,arguments)},splice(...n){return Ls(this,"splice",n)},toReversed(){return Fr(this).toReversed()},toSorted(n){return Fr(this).toSorted(n)},toSpliced(...n){return Fr(this).toSpliced(...n)},unshift(...n){return Ls(this,"unshift",n)},values(){return Qa(this,"values",n=>Nn(this,n))}};function Qa(n,e,t){const r=ta(n),s=r[e]();return r!==n&&!wt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const ey=Array.prototype;function rn(n,e,t,r,s,i){const a=ta(n),c=a!==n&&!wt(n),l=a[e];if(l!==ey[e]){const p=l.apply(n,i);return c?Ft(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,Nn(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function ah(n,e,t,r){const s=ta(n);let i=t;return s!==n&&(wt(n)?t.length>3&&(i=function(a,c,l){return t.call(this,a,c,l,n)}):i=function(a,c,l){return t.call(this,a,Nn(n,c),l,n)}),s[e](i,...r)}function Ja(n,e,t){const r=ve(n);at(r,"iterate",ai);const s=r[e](...t);return(s===-1||s===!1)&&ra(t[0])?(t[0]=ve(t[0]),r[e](...t)):s}function Ls(n,e,t=[]){mn(),cl();const r=ve(n)[e].apply(n,t);return ll(),_n(),r}const ty=rl("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Lt));function ny(n){Lt(n)||(n=String(n));const e=ve(this);return at(e,"has",n),e.hasOwnProperty(n)}class Ud{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?fy:qd:i?$d:jd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=Z_[t]))return l;if(t==="hasOwnProperty")return ny}const c=Reflect.get(e,t,Ne(e)?e:r);if((Lt(t)?Fd.has(t):ty(t))||(s||at(e,"get",t),i))return c;if(Ne(c)){const l=a&&Yo(t)?c:c.value;return s&&Ce(l)?Ec(l):l}return Ce(c)?s?Ec(c):na(c):c}}class Bd extends Ud{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&Yo(t);if(!this._isShallow){const h=yn(i);if(!wt(r)&&!yn(r)&&(i=ve(i),r=ve(r)),!a&&Ne(i)&&!Ne(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Ie(e,t),l=Reflect.set(e,t,r,Ne(e)?e:s);return e===ve(s)&&(c?$n(r,i)&&an(e,"set",t,r):an(e,"add",t,r)),l}deleteProperty(e,t){const r=Ie(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&an(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Lt(t)||!Fd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":vr),Reflect.ownKeys(e)}}class ry extends Ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const sy=new Bd,iy=new ry,oy=new Bd(!0);const vc=n=>n,Yi=n=>Reflect.getPrototypeOf(n);function ay(n,e,t){return function(...r){const s=this.__v_raw,i=ve(s),a=Qr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?vc:e?rs:Ft;return!e&&at(i,"iterate",l?yc:vr),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function Zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function cy(n,e){const t={get(s){const i=this.__v_raw,a=ve(i),c=ve(s);n||($n(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=Yi(a),h=e?vc:n?rs:Ft;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(ve(s),"iterate",vr),s.size},has(s){const i=this.__v_raw,a=ve(i),c=ve(s);return n||($n(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ve(c),h=e?vc:n?rs:Ft;return!n&&at(l,"iterate",vr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ut(t,n?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(s){!e&&!wt(s)&&!yn(s)&&(s=ve(s));const i=ve(this);return Yi(i).has.call(i,s)||(i.add(s),an(i,"add",s,s)),this},set(s,i){!e&&!wt(i)&&!yn(i)&&(i=ve(i));const a=ve(this),{has:c,get:l}=Yi(a);let h=c.call(a,s);h||(s=ve(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?$n(i,d)&&an(a,"set",s,i):an(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:c}=Yi(i);let l=a.call(i,s);l||(s=ve(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&an(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&an(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ay(s,n,e)}),t}function fl(n,e){const t=cy(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ie(t,s)&&s in r?t:r,s,i)}const ly={get:fl(!1,!1)},uy={get:fl(!1,!0)},hy={get:fl(!0,!1)};const jd=new WeakMap,$d=new WeakMap,qd=new WeakMap,fy=new WeakMap;function dy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function py(n){return n.__v_skip||!Object.isExtensible(n)?0:dy(U_(n))}function na(n){return yn(n)?n:dl(n,!1,sy,ly,jd)}function gy(n){return dl(n,!1,oy,uy,$d)}function Ec(n){return dl(n,!0,iy,hy,qd)}function dl(n,e,t,r,s){if(!Ce(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=py(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function fn(n){return yn(n)?fn(n.__v_raw):!!(n&&n.__v_isReactive)}function yn(n){return!!(n&&n.__v_isReadonly)}function wt(n){return!!(n&&n.__v_isShallow)}function ra(n){return n?!!n.__v_raw:!1}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function pl(n){return!Ie(n,"__v_skip")&&Object.isExtensible(n)&&wd(n,"__v_skip",!0),n}const Ft=n=>Ce(n)?na(n):n,rs=n=>Ce(n)?Ec(n):n;function Ne(n){return n?n.__v_isRef===!0:!1}function gl(n){return my(n,!1)}function my(n,e){return Ne(n)?n:new _y(n,e)}class _y{constructor(e,t){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ve(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||wt(e)||yn(e);e=r?e:ve(e),$n(e,t)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function ue(n){return Ne(n)?n.value:n}const yy={get:(n,e,t)=>e==="__v_raw"?n:ue(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Ne(s)&&!Ne(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Hd(n){return fn(n)?n:new Proxy(n,yy)}function vy(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=Ty(n,t);return e}class Ey{constructor(e,t,r){this._object=e,this._key=t,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ve(e);let s=!0,i=e;if(!re(e)||!Yo(String(t)))do s=!ra(i)||wt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=ue(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ne(this._raw[this._key])){const t=this._object[this._key];if(Ne(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Y_(this._raw,this._key)}}function Ty(n,e,t){return new Ey(n,e,t)}class Iy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return Dd(this,!0),!0}get value(){const e=this.dep.track();return xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wy(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new Iy(r,s,t)}const eo={},Ao=new WeakMap;let pr;function Ay(n,e=!1,t=pr){if(t){let r=Ao.get(t);r||Ao.set(t,r=[]),r.push(n)}}function by(n,e,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=H=>s?H:wt(H)||s===!1||s===0?cn(H,1):cn(H);let d,p,_,b,P=!1,O=!1;if(Ne(n)?(p=()=>n.value,P=wt(n)):fn(n)?(p=()=>h(n),P=!0):re(n)?(O=!0,P=n.some(H=>fn(H)||wt(H)),p=()=>n.map(H=>{if(Ne(H))return H.value;if(fn(H))return h(H);if(le(H))return l?l(H,2):H()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){mn();try{_()}finally{_n()}}const H=pr;pr=d;try{return l?l(n,3,[b]):n(b)}finally{pr=H}}:p=Wt,e&&s){const H=p,oe=s===!0?1/0:s;p=()=>cn(H(),oe)}const x=Cd(),z=()=>{d.stop(),x&&x.active&&il(x.effects,d)};if(i&&e){const H=e;e=(...oe)=>{H(...oe),z()}}let G=O?new Array(n.length).fill(eo):eo;const Q=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const oe=d.run();if(s||P||(O?oe.some((Ee,I)=>$n(Ee,G[I])):$n(oe,G))){_&&_();const Ee=pr;pr=d;try{const I=[oe,G===eo?void 0:O&&G[0]===eo?[]:G,b];G=oe,l?l(e,3,I):e(...I)}finally{pr=Ee}}}else d.run()};return c&&c(Q),d=new Vd(p),d.scheduler=a?()=>a(Q,!1):Q,b=H=>Ay(H,!1,d),_=d.onStop=()=>{const H=Ao.get(d);if(H){if(l)l(H,4);else for(const oe of H)oe();Ao.delete(d)}},e?r?Q(!0):G=d.run():a?a(Q.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function cn(n,e=1/0,t){if(e<=0||!Ce(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ne(n))cn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)cn(n[r],e,t);else if(yd(n)||Qr(n))n.forEach(r=>{cn(r,e,t)});else if(Td(n)){for(const r in n)cn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&cn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(n,e,t,r){try{return r?n(...r):n()}catch(s){sa(s,e,t)}}function Jt(n,e,t,r){if(le(n)){const s=vi(n,e,t,r);return s&&vd(s)&&s.catch(i=>{sa(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Jt(n[i],e,t,r));return s}}function sa(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){mn(),vi(i,null,10,[n,l,h]),_n();return}}Sy(n,t,s,r,a)}function Sy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const gt=[];let qt=-1;const Jr=[];let xn=null,$r=0;const zd=Promise.resolve();let bo=null;function Wd(n){const e=bo||zd;return n?e.then(this?n.bind(this):n):e}function Ry(n){let e=qt+1,t=gt.length;for(;e<t;){const r=e+t>>>1,s=gt[r],i=ci(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function ml(n){if(!(n.flags&1)){const e=ci(n),t=gt[gt.length-1];!t||!(n.flags&2)&&e>=ci(t)?gt.push(n):gt.splice(Ry(e),0,n),n.flags|=1,Kd()}}function Kd(){bo||(bo=zd.then(Qd))}function Py(n){re(n)?Jr.push(...n):xn&&n.id===-1?xn.splice($r+1,0,n):n.flags&1||(Jr.push(n),n.flags|=1),Kd()}function ch(n,e,t=qt+1){for(;t<gt.length;t++){const r=gt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;gt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gd(n){if(Jr.length){const e=[...new Set(Jr)].sort((t,r)=>ci(t)-ci(r));if(Jr.length=0,xn){xn.push(...e);return}for(xn=e,$r=0;$r<xn.length;$r++){const t=xn[$r];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xn=null,$r=0}}const ci=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qd(n){try{for(qt=0;qt<gt.length;qt++){const e=gt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<gt.length;qt++){const e=gt[qt];e&&(e.flags&=-2)}qt=-1,gt.length=0,Gd(),bo=null,(gt.length||Jr.length)&&Qd()}}let lt=null,Jd=null;function So(n){const e=lt;return lt=n,Jd=n&&n.type.__scopeId||null,e}function Ct(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&yh(-1);const i=So(e);let a;try{a=n(...s)}finally{So(i),r._d&&yh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(n,e){if(lt===null)return n;const t=ca(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=be]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&cn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function hr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(mn(),Jt(l,t,8,[n.el,c,n,e]),_n())}}const Cy=Symbol("_vte"),Vy=n=>n.__isTeleport,ky=Symbol("_leaveCb");function _l(n,e){n.shapeFlag&6&&n.component?(n.transition=e,_l(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ei(n,e){return le(n)?ut({name:n.name},e,{setup:n}):n}function Xd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ro=new WeakMap;function Gs(n,e,t,r,s=!1){if(re(n)){n.forEach((P,O)=>Gs(P,e&&(re(e)?e[O]:e),t,r,s));return}if(Xr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Gs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ca(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===be?c.refs={}:c.refs,p=c.setupState,_=ve(p),b=p===be?_d:P=>Ie(_,P);if(h!=null&&h!==l){if(lh(e),qe(h))d[h]=null,b(h)&&(p[h]=null);else if(Ne(h)){h.value=null;const P=e;P.k&&(d[P.k]=null)}}if(le(l))vi(l,c,12,[a,d]);else{const P=qe(l),O=Ne(l);if(P||O){const x=()=>{if(n.f){const z=P?b(l)?p[l]:d[l]:l.value;if(s)re(z)&&il(z,i);else if(re(z))z.includes(i)||z.push(i);else if(P)d[l]=[i],b(l)&&(p[l]=d[l]);else{const G=[i];l.value=G,n.k&&(d[n.k]=G)}}else P?(d[l]=a,b(l)&&(p[l]=a)):O&&(l.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{x(),Ro.delete(n)};z.id=-1,Ro.set(n,z),Et(z,t)}else lh(n),x()}}}function lh(n){const e=Ro.get(n);e&&(e.flags|=8,Ro.delete(n))}ea().requestIdleCallback;ea().cancelIdleCallback;const Xr=n=>!!n.type.__asyncLoader,Yd=n=>n.type.__isKeepAlive;function Dy(n,e){Zd(n,"a",e)}function Oy(n,e){Zd(n,"da",e)}function Zd(n,e,t=mt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ia(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Yd(s.parent.vnode)&&Ny(r,e,t,s),s=s.parent}}function Ny(n,e,t,r){const s=ia(e,n,r,!0);ep(()=>{il(r[e],s)},t)}function ia(n,e,t=mt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{mn();const c=Ti(t),l=Jt(e,t,n,a);return c(),_n(),l});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=mt)=>{(!ui||n==="sp")&&ia(n,(...r)=>e(...r),t)},xy=bn("bm"),Tc=bn("m"),My=bn("bu"),Ly=bn("u"),Fy=bn("bum"),ep=bn("um"),Uy=bn("sp"),By=bn("rtg"),jy=bn("rtc");function $y(n,e=mt){ia("ec",n,e)}const qy=Symbol.for("v-ndc");function Ln(n,e,t,r){let s;const i=t,a=re(n);if(a||qe(n)){const c=a&&fn(n);let l=!1,h=!1;c&&(l=!wt(n),h=yn(n),n=ta(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?rs(Ft(n[d])):Ft(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function co(n,e,t={},r,s){if(lt.ce||lt.parent&&Xr(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),he(),on(Me,null,[Be("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),he();const a=i&&tp(i(t)),c=t.key||a&&a.key,l=on(Me,{key:(c&&!Lt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function tp(n){return n.some(e=>El(e)?!(e.type===vn||e.type===Me&&!tp(e.children)):!0)?n:null}const Ic=n=>n?Ip(n)?ca(n):Ic(n.parent):null,Qs=ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ic(n.parent),$root:n=>Ic(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>rp(n),$forceUpdate:n=>n.f||(n.f=()=>{ml(n.update)}),$nextTick:n=>n.n||(n.n=Wd.bind(n.proxy)),$watch:n=>nv.bind(n)}),Xa=(n,e)=>n!==be&&!n.__isScriptSetup&&Ie(n,e),Hy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Xa(r,e))return a[e]=1,r[e];if(s!==be&&Ie(s,e))return a[e]=2,s[e];if(Ie(i,e))return a[e]=3,i[e];if(t!==be&&Ie(t,e))return a[e]=4,t[e];wc&&(a[e]=0)}}const h=Qs[e];let d,p;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==be&&Ie(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Ie(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Xa(s,e)?(s[e]=t,!0):r!==be&&Ie(r,e)?(r[e]=t,!0):Ie(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==be&&c[0]!=="$"&&Ie(n,c)||Xa(e,c)||Ie(i,c)||Ie(r,c)||Ie(Qs,c)||Ie(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ie(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wc=!0;function zy(n){const e=rp(n),t=n.proxy,r=n.ctx;wc=!1,e.beforeCreate&&hh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:P,activated:O,deactivated:x,beforeDestroy:z,beforeUnmount:G,destroyed:Q,unmounted:H,render:oe,renderTracked:Ee,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:w,components:S,directives:E,filters:ft}=e;if(h&&Wy(h,r,null),a)for(const ae in a){const _e=a[ae];le(_e)&&(r[ae]=_e.bind(t))}if(s){const ae=s.call(t,t);Ce(ae)&&(n.data=na(ae))}if(wc=!0,i)for(const ae in i){const _e=i[ae],Rt=le(_e)?_e.bind(t,t):le(_e.get)?_e.get.bind(t,t):Wt,sr=!le(_e)&&le(_e.set)?_e.set.bind(t):Wt,Zt=Ap({get:Rt,set:sr});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:He=>Zt.value=He})}if(c)for(const ae in c)np(c[ae],r,t,ae);if(l){const ae=le(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(_e=>{Yy(_e,ae[_e])})}d&&hh(d,n,"c");function ke(ae,_e){re(_e)?_e.forEach(Rt=>ae(Rt.bind(t))):_e&&ae(_e.bind(t))}if(ke(xy,p),ke(Tc,_),ke(My,b),ke(Ly,P),ke(Dy,O),ke(Oy,x),ke($y,m),ke(jy,Ee),ke(By,I),ke(Fy,G),ke(ep,H),ke(Uy,y),re(T))if(T.length){const ae=n.exposed||(n.exposed={});T.forEach(_e=>{Object.defineProperty(ae,_e,{get:()=>t[_e],set:Rt=>t[_e]=Rt,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Wt&&(n.render=oe),w!=null&&(n.inheritAttrs=w),S&&(n.components=S),E&&(n.directives=E),y&&Xd(n)}function Wy(n,e,t=Wt){re(n)&&(n=Ac(n));for(const r in n){const s=n[r];let i;Ce(s)?"default"in s?i=Js(s.from||r,s.default,!0):i=Js(s.from||r):i=Js(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function hh(n,e,t){Jt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function np(n,e,t,r){let s=r.includes(".")?op(t,r):()=>t[r];if(qe(n)){const i=e[n];le(i)&&lo(s,i)}else if(le(n))lo(s,n.bind(t));else if(Ce(n))if(re(n))n.forEach(i=>np(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&lo(s,i,n)}}function rp(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,a,!0)),Po(l,e,a)),Ce(e)&&i.set(e,l),l}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Ky[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Ky={data:fh,props:dh,emits:dh,methods:Bs,computed:Bs,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Bs,directives:Bs,watch:Qy,provide:fh,inject:Gy};function fh(n,e){return e?n?function(){return ut(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Gy(n,e){return Bs(Ac(n),Ac(e))}function Ac(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function Bs(n,e){return n?ut(Object.create(null),n,e):e}function dh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:ut(Object.create(null),uh(n),uh(e??{})):e}function Qy(n,e){if(!n)return e;if(!e)return n;const t=ut(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function sp(){return{app:null,config:{isNativeTag:_d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Xy(n,e){return function(r,s=null){le(r)||(r=ut({},r)),s!=null&&!Ce(s)&&(s=null);const i=sp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Jy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ov,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||Be(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,d,_),l=!0,h._container=d,d.__vue_app__=h,ca(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Jt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Er;Er=h;try{return d()}finally{Er=p}}};return h}}let Er=null;function Yy(n,e){if(mt){let t=mt.provides;const r=mt.parent&&mt.parent.provides;r===t&&(t=mt.provides=Object.create(r)),t[n]=e}}function Js(n,e,t=!1){const r=Tp();if(r||Er){let s=Er?Er._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Zy(){return!!(Tp()||Er)}const ev=Symbol.for("v-scx"),tv=()=>Js(ev);function lo(n,e,t){return ip(n,e,t)}function ip(n,e,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,c=ut({},t),l=e&&r||!e&&i!=="post";let h;if(ui){if(i==="sync"){const b=tv();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Wt,b.resume=Wt,b.pause=Wt,b}}const d=mt;c.call=(b,P,O)=>Jt(b,d,P,O);let p=!1;i==="post"?c.scheduler=b=>{Et(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,P)=>{P?b():ml(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=by(n,e,c);return ui&&(h?h.push(_):l&&_()),_}function nv(n,e,t){const r=this.proxy,s=qe(n)?n.includes(".")?op(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ti(this),c=ip(s,i.bind(r),t);return a(),c}function op(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const rv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Jn(e)}Modifiers`]||n[`${Rr(e)}Modifiers`];function sv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||be;let s=t;const i=e.startsWith("update:"),a=i&&rv(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>qe(d)?d.trim():d)),a.number&&(s=t.map(ol)));let c,l=r[c=Wa(e)]||r[c=Wa(Jn(e))];!l&&i&&(l=r[c=Wa(Rr(e))]),l&&Jt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Jt(h,n,6,s)}}const iv=new WeakMap;function ap(n,e,t=!1){const r=t?iv:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=ap(h,e,!0);d&&(c=!0,ut(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ce(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):ut(a,i),Ce(n)&&r.set(n,a),a)}function oa(n,e){return!n||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(n,e[0].toLowerCase()+e.slice(1))||Ie(n,Rr(e))||Ie(n,e))}function ph(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:P,inheritAttrs:O}=n,x=So(n);let z,G;try{if(t.shapeFlag&4){const H=s||r,oe=H;z=zt(h.call(oe,H,d,p,b,_,P)),G=c}else{const H=e;z=zt(H.length>1?H(p,{attrs:c,slots:a,emit:l}):H(p,null)),G=e.props?c:ov(c)}}catch(H){Xs.length=0,sa(H,n,1),z=Be(vn)}let Q=z;if(G&&O!==!1){const H=Object.keys(G),{shapeFlag:oe}=Q;H.length&&oe&7&&(i&&H.some(sl)&&(G=av(G,i)),Q=ss(Q,G,!1,!0))}return t.dirs&&(Q=ss(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&_l(Q,t.transition),z=Q,So(x),z}const ov=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=n[t]);return e},av=(n,e)=>{const t={};for(const r in n)(!sl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function cv(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?gh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!oa(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?gh(r,a,h):!0:!!a;return!1}function gh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!oa(t,i))return!0}return!1}function lv({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const cp={},lp=()=>Object.create(cp),up=n=>Object.getPrototypeOf(n)===cp;function uv(n,e,t,r=!1){const s={},i=lp();n.propsDefaults=Object.create(null),hp(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:gy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function hv(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=ve(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(oa(n.emitsOptions,_))continue;const b=e[_];if(l)if(Ie(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const P=Jn(_);s[P]=bc(l,c,P,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{hp(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ie(e,p)&&((d=Rr(p))===p||!Ie(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=bc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ie(e,p))&&(delete i[p],h=!0)}h&&an(n.attrs,"set","")}function hp(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(zs(l))continue;const h=e[l];let d;s&&Ie(s,d=Jn(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:oa(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ve(t),h=c||be;for(let d=0;d<i.length;d++){const p=i[d];t[p]=bc(s,l,p,h[p],n,!Ie(h,p))}}return a}function bc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Ie(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Ti(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Rr(t))&&(r=!0))}return r}const fv=new WeakMap;function fp(n,e,t=!1){const r=t?fv:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[_,b]=fp(p,e,!0);ut(a,_),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Ce(n)&&r.set(n,Gr),Gr;if(re(i))for(let d=0;d<i.length;d++){const p=Jn(i[d]);mh(p)&&(a[p]=be)}else if(i)for(const d in i){const p=Jn(d);if(mh(p)){const _=i[d],b=a[p]=re(_)||le(_)?{type:_}:ut({},_),P=b.type;let O=!1,x=!0;if(re(P))for(let z=0;z<P.length;++z){const G=P[z],Q=le(G)&&G.name;if(Q==="Boolean"){O=!0;break}else Q==="String"&&(x=!1)}else O=le(P)&&P.name==="Boolean";b[0]=O,b[1]=x,(O||Ie(b,"default"))&&c.push(p)}}const h=[a,c];return Ce(n)&&r.set(n,h),h}function mh(n){return n[0]!=="$"&&!zs(n)}const yl=n=>n==="_"||n==="_ctx"||n==="$stable",vl=n=>re(n)?n.map(zt):[zt(n)],dv=(n,e,t)=>{if(e._n)return e;const r=Ct((...s)=>vl(e(...s)),t);return r._c=!1,r},dp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(yl(s))continue;const i=n[s];if(le(i))e[s]=dv(s,i,r);else if(i!=null){const a=vl(i);e[s]=()=>a}}},pp=(n,e)=>{const t=vl(e);n.slots.default=()=>t},gp=(n,e,t)=>{for(const r in e)(t||!yl(r))&&(n[r]=e[r])},pv=(n,e,t)=>{const r=n.slots=lp();if(n.vnode.shapeFlag&32){const s=e._;s?(gp(r,e,t),t&&wd(r,"_",s,!0)):dp(e,r)}else e&&pp(n,e)},gv=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=be;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:gp(s,e,t):(i=!e.$stable,dp(e,s)),a=e}else e&&(pp(n,e),a={default:1});if(i)for(const c in s)!yl(c)&&a[c]==null&&delete s[c]},Et=Ev;function mv(n){return _v(n)}function _v(n,e){const t=ea();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Wt,insertStaticContent:P}=n,O=(v,A,V,F=null,N=null,M=null,$=void 0,B=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Fs(v,A)&&(F=en(v),He(v,N,M,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:L,ref:Y,shapeFlag:q}=A;switch(L){case aa:x(v,A,V,F);break;case vn:z(v,A,V,F);break;case Za:v==null&&G(A,V,F,$);break;case Me:S(v,A,V,F,N,M,$,B,U);break;default:q&1?oe(v,A,V,F,N,M,$,B,U):q&6?E(v,A,V,F,N,M,$,B,U):(q&64||q&128)&&L.process(v,A,V,F,N,M,$,B,U,jt)}Y!=null&&N?Gs(Y,v&&v.ref,M,A||v,!A):Y==null&&v&&v.ref!=null&&Gs(v.ref,null,M,v,!0)},x=(v,A,V,F)=>{if(v==null)r(A.el=c(A.children),V,F);else{const N=A.el=v.el;A.children!==v.children&&h(N,A.children)}},z=(v,A,V,F)=>{v==null?r(A.el=l(A.children||""),V,F):A.el=v.el},G=(v,A,V,F)=>{[v.el,v.anchor]=P(v.children,A,V,F,v.el,v.anchor)},Q=({el:v,anchor:A},V,F)=>{let N;for(;v&&v!==A;)N=_(v),r(v,V,F),v=N;r(A,V,F)},H=({el:v,anchor:A})=>{let V;for(;v&&v!==A;)V=_(v),s(v),v=V;s(A)},oe=(v,A,V,F,N,M,$,B,U)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),v==null)Ee(A,V,F,N,M,$,B,U);else{const L=v.el&&v.el._isVueCE?v.el:null;try{L&&L._beginPatch(),y(v,A,N,M,$,B,U)}finally{L&&L._endPatch()}}},Ee=(v,A,V,F,N,M,$,B)=>{let U,L;const{props:Y,shapeFlag:q,transition:J,dirs:te}=v;if(U=v.el=a(v.type,M,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&m(v.children,U,null,F,N,Ya(v,M),$,B),te&&hr(v,null,F,"created"),I(U,v,v.scopeId,$,F),Y){for(const ce in Y)ce!=="value"&&!zs(ce)&&i(U,ce,null,Y[ce],M,F);"value"in Y&&i(U,"value",null,Y.value,M),(L=Y.onVnodeBeforeMount)&&$t(L,F,v)}te&&hr(v,null,F,"beforeMount");const Z=yv(N,J);Z&&J.beforeEnter(U),r(U,A,V),((L=Y&&Y.onVnodeMounted)||Z||te)&&Et(()=>{L&&$t(L,F,v),Z&&J.enter(U),te&&hr(v,null,F,"mounted")},N)},I=(v,A,V,F,N)=>{if(V&&b(v,V),F)for(let M=0;M<F.length;M++)b(v,F[M]);if(N){let M=N.subTree;if(A===M||yp(M.type)&&(M.ssContent===A||M.ssFallback===A)){const $=N.vnode;I(v,$,$.scopeId,$.slotScopeIds,N.parent)}}},m=(v,A,V,F,N,M,$,B,U=0)=>{for(let L=U;L<v.length;L++){const Y=v[L]=B?Mn(v[L]):zt(v[L]);O(null,Y,A,V,F,N,M,$,B)}},y=(v,A,V,F,N,M,$)=>{const B=A.el=v.el;let{patchFlag:U,dynamicChildren:L,dirs:Y}=A;U|=v.patchFlag&16;const q=v.props||be,J=A.props||be;let te;if(V&&fr(V,!1),(te=J.onVnodeBeforeUpdate)&&$t(te,V,A,v),Y&&hr(A,v,V,"beforeUpdate"),V&&fr(V,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(B,""),L?T(v.dynamicChildren,L,B,V,F,Ya(A,N),M):$||_e(v,A,B,null,V,F,Ya(A,N),M,!1),U>0){if(U&16)w(B,q,J,V,N);else if(U&2&&q.class!==J.class&&i(B,"class",null,J.class,N),U&4&&i(B,"style",q.style,J.style,N),U&8){const Z=A.dynamicProps;for(let ce=0;ce<Z.length;ce++){const ge=Z[ce],Je=q[ge],Xe=J[ge];(Xe!==Je||ge==="value")&&i(B,ge,Je,Xe,N,V)}}U&1&&v.children!==A.children&&d(B,A.children)}else!$&&L==null&&w(B,q,J,V,N);((te=J.onVnodeUpdated)||Y)&&Et(()=>{te&&$t(te,V,A,v),Y&&hr(A,v,V,"updated")},F)},T=(v,A,V,F,N,M,$)=>{for(let B=0;B<A.length;B++){const U=v[B],L=A[B],Y=U.el&&(U.type===Me||!Fs(U,L)||U.shapeFlag&198)?p(U.el):V;O(U,L,Y,null,F,N,M,$,!0)}},w=(v,A,V,F,N)=>{if(A!==V){if(A!==be)for(const M in A)!zs(M)&&!(M in V)&&i(v,M,A[M],null,N,F);for(const M in V){if(zs(M))continue;const $=V[M],B=A[M];$!==B&&M!=="value"&&i(v,M,B,$,N,F)}"value"in V&&i(v,"value",A.value,V.value,N)}},S=(v,A,V,F,N,M,$,B,U)=>{const L=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=A;te&&(B=B?B.concat(te):te),v==null?(r(L,V,F),r(Y,V,F),m(A.children||[],V,Y,N,M,$,B,U)):q>0&&q&64&&J&&v.dynamicChildren?(T(v.dynamicChildren,J,V,N,M,$,B),(A.key!=null||N&&A===N.subTree)&&mp(v,A,!0)):_e(v,A,V,Y,N,M,$,B,U)},E=(v,A,V,F,N,M,$,B,U)=>{A.slotScopeIds=B,v==null?A.shapeFlag&512?N.ctx.activate(A,V,F,$,U):ft(A,V,F,N,M,$,U):Bt(v,A,U)},ft=(v,A,V,F,N,M,$)=>{const B=v.component=Rv(v,F,N);if(Yd(v)&&(B.ctx.renderer=jt),Pv(B,!1,$),B.asyncDep){if(N&&N.registerDep(B,ke,$),!v.el){const U=B.subTree=Be(vn);z(null,U,A,V),v.placeholder=U.el}}else ke(B,v,A,V,N,M,$)},Bt=(v,A,V)=>{const F=A.component=v.component;if(cv(v,A,V))if(F.asyncDep&&!F.asyncResolved){ae(F,A,V);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},ke=(v,A,V,F,N,M,$)=>{const B=()=>{if(v.isMounted){let{next:q,bu:J,u:te,parent:Z,vnode:ce}=v;{const tt=_p(v);if(tt){q&&(q.el=ce.el,ae(v,q,$)),tt.asyncDep.then(()=>{v.isUnmounted||B()});return}}let ge=q,Je;fr(v,!1),q?(q.el=ce.el,ae(v,q,$)):q=ce,J&&ao(J),(Je=q.props&&q.props.onVnodeBeforeUpdate)&&$t(Je,Z,q,ce),fr(v,!0);const Xe=ph(v),At=v.subTree;v.subTree=Xe,O(At,Xe,p(At.el),en(At),v,N,M),q.el=Xe.el,ge===null&&lv(v,Xe.el),te&&Et(te,N),(Je=q.props&&q.props.onVnodeUpdated)&&Et(()=>$t(Je,Z,q,ce),N)}else{let q;const{el:J,props:te}=A,{bm:Z,m:ce,parent:ge,root:Je,type:Xe}=v,At=Xr(A);fr(v,!1),Z&&ao(Z),!At&&(q=te&&te.onVnodeBeforeMount)&&$t(q,ge,A),fr(v,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Xe);const tt=v.subTree=ph(v);O(null,tt,V,F,v,N,M),A.el=tt.el}if(ce&&Et(ce,N),!At&&(q=te&&te.onVnodeMounted)){const tt=A;Et(()=>$t(q,ge,tt),N)}(A.shapeFlag&256||ge&&Xr(ge.vnode)&&ge.vnode.shapeFlag&256)&&v.a&&Et(v.a,N),v.isMounted=!0,A=V=F=null}};v.scope.on();const U=v.effect=new Vd(B);v.scope.off();const L=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>ml(Y),fr(v,!0),L()},ae=(v,A,V)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,hv(v,A.props,F,V),gv(v,A.children,V),mn(),ch(v),_n()},_e=(v,A,V,F,N,M,$,B,U=!1)=>{const L=v&&v.children,Y=v?v.shapeFlag:0,q=A.children,{patchFlag:J,shapeFlag:te}=A;if(J>0){if(J&128){sr(L,q,V,F,N,M,$,B,U);return}else if(J&256){Rt(L,q,V,F,N,M,$,B,U);return}}te&8?(Y&16&&or(L,N,M),q!==L&&d(V,q)):Y&16?te&16?sr(L,q,V,F,N,M,$,B,U):or(L,N,M,!0):(Y&8&&d(V,""),te&16&&m(q,V,F,N,M,$,B,U))},Rt=(v,A,V,F,N,M,$,B,U)=>{v=v||Gr,A=A||Gr;const L=v.length,Y=A.length,q=Math.min(L,Y);let J;for(J=0;J<q;J++){const te=A[J]=U?Mn(A[J]):zt(A[J]);O(v[J],te,V,null,N,M,$,B,U)}L>Y?or(v,N,M,!0,!1,q):m(A,V,F,N,M,$,B,U,q)},sr=(v,A,V,F,N,M,$,B,U)=>{let L=0;const Y=A.length;let q=v.length-1,J=Y-1;for(;L<=q&&L<=J;){const te=v[L],Z=A[L]=U?Mn(A[L]):zt(A[L]);if(Fs(te,Z))O(te,Z,V,null,N,M,$,B,U);else break;L++}for(;L<=q&&L<=J;){const te=v[q],Z=A[J]=U?Mn(A[J]):zt(A[J]);if(Fs(te,Z))O(te,Z,V,null,N,M,$,B,U);else break;q--,J--}if(L>q){if(L<=J){const te=J+1,Z=te<Y?A[te].el:F;for(;L<=J;)O(null,A[L]=U?Mn(A[L]):zt(A[L]),V,Z,N,M,$,B,U),L++}}else if(L>J)for(;L<=q;)He(v[L],N,M,!0),L++;else{const te=L,Z=L,ce=new Map;for(L=Z;L<=J;L++){const Ye=A[L]=U?Mn(A[L]):zt(A[L]);Ye.key!=null&&ce.set(Ye.key,L)}let ge,Je=0;const Xe=J-Z+1;let At=!1,tt=0;const Rn=new Array(Xe);for(L=0;L<Xe;L++)Rn[L]=0;for(L=te;L<=q;L++){const Ye=v[L];if(Je>=Xe){He(Ye,N,M,!0);continue}let bt;if(Ye.key!=null)bt=ce.get(Ye.key);else for(ge=Z;ge<=J;ge++)if(Rn[ge-Z]===0&&Fs(Ye,A[ge])){bt=ge;break}bt===void 0?He(Ye,N,M,!0):(Rn[bt-Z]=L+1,bt>=tt?tt=bt:At=!0,O(Ye,A[bt],V,null,N,M,$,B,U),Je++)}const As=At?vv(Rn):Gr;for(ge=As.length-1,L=Xe-1;L>=0;L--){const Ye=Z+L,bt=A[Ye],Mi=A[Ye+1],Or=Ye+1<Y?Mi.el||Mi.placeholder:F;Rn[L]===0?O(null,bt,V,Or,N,M,$,B,U):At&&(ge<0||L!==As[ge]?Zt(bt,V,Or,2):ge--)}}},Zt=(v,A,V,F,N=null)=>{const{el:M,type:$,transition:B,children:U,shapeFlag:L}=v;if(L&6){Zt(v.component.subTree,A,V,F);return}if(L&128){v.suspense.move(A,V,F);return}if(L&64){$.move(v,A,V,jt);return}if($===Me){r(M,A,V);for(let q=0;q<U.length;q++)Zt(U[q],A,V,F);r(v.anchor,A,V);return}if($===Za){Q(v,A,V);return}if(F!==2&&L&1&&B)if(F===0)B.beforeEnter(M),r(M,A,V),Et(()=>B.enter(M),N);else{const{leave:q,delayLeave:J,afterLeave:te}=B,Z=()=>{v.ctx.isUnmounted?s(M):r(M,A,V)},ce=()=>{M._isLeaving&&M[ky](!0),q(M,()=>{Z(),te&&te()})};J?J(M,Z,ce):ce()}else r(M,A,V)},He=(v,A,V,F=!1,N=!1)=>{const{type:M,props:$,ref:B,children:U,dynamicChildren:L,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:te}=v;if(q===-2&&(N=!1),B!=null&&(mn(),Gs(B,null,V,v,!0),_n()),te!=null&&(A.renderCache[te]=void 0),Y&256){A.ctx.deactivate(v);return}const Z=Y&1&&J,ce=!Xr(v);let ge;if(ce&&(ge=$&&$.onVnodeBeforeUnmount)&&$t(ge,A,v),Y&6)ir(v.component,V,F);else{if(Y&128){v.suspense.unmount(V,F);return}Z&&hr(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,V,jt,F):L&&!L.hasOnce&&(M!==Me||q>0&&q&64)?or(L,A,V,!1,!0):(M===Me&&q&384||!N&&Y&16)&&or(U,A,V),F&&ze(v)}(ce&&(ge=$&&$.onVnodeUnmounted)||Z)&&Et(()=>{ge&&$t(ge,A,v),Z&&hr(v,null,A,"unmounted")},V)},ze=v=>{const{type:A,el:V,anchor:F,transition:N}=v;if(A===Me){ka(V,F);return}if(A===Za){H(v);return}const M=()=>{s(V),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:$,delayLeave:B}=N,U=()=>$(V,M);B?B(v.el,M,U):U()}else M()},ka=(v,A)=>{let V;for(;v!==A;)V=_(v),s(v),v=V;s(A)},ir=(v,A,V)=>{const{bum:F,scope:N,job:M,subTree:$,um:B,m:U,a:L}=v;_h(U),_h(L),F&&ao(F),N.stop(),M&&(M.flags|=8,He($,v,A,V)),B&&Et(B,A),Et(()=>{v.isUnmounted=!0},A)},or=(v,A,V,F=!1,N=!1,M=0)=>{for(let $=M;$<v.length;$++)He(v[$],A,V,F,N)},en=v=>{if(v.shapeFlag&6)return en(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),V=A&&A[Cy];return V?_(V):A};let Is=!1;const xi=(v,A,V)=>{v==null?A._vnode&&He(A._vnode,null,null,!0):O(A._vnode||null,v,A,null,null,null,V),A._vnode=v,Is||(Is=!0,ch(),Gd(),Is=!1)},jt={p:O,um:He,m:Zt,r:ze,mt:ft,mc:m,pc:_e,pbc:T,n:en,o:n};return{render:xi,hydrate:void 0,createApp:Xy(xi)}}function Ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function mp(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Mn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&mp(a,c)),c.type===aa&&c.patchFlag!==-1&&(c.el=a.el),c.type===vn&&!c.el&&(c.el=a.el)}}function vv(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function _p(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function _h(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const yp=n=>n.__isSuspense;function Ev(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):Py(n)}const Me=Symbol.for("v-fgt"),aa=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Xs=[];let It=null;function he(n=!1){Xs.push(It=n?null:[])}function Tv(){Xs.pop(),It=Xs[Xs.length-1]||null}let li=1;function yh(n,e=!1){li+=n,n<0&&It&&e&&(It.hasOnce=!0)}function vp(n){return n.dynamicChildren=li>0?It||Gr:null,Tv(),li>0&&It&&It.push(n),n}function Te(n,e,t,r,s,i){return vp(Ue(n,e,t,r,s,i,!0))}function on(n,e,t,r,s){return vp(Be(n,e,t,r,s,!0))}function El(n){return n?n.__v_isVNode===!0:!1}function Fs(n,e){return n.type===e.type&&n.key===e.key}const Ep=({key:n})=>n??null,uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qe(n)||Ne(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function Ue(n,e=null,t=null,r=0,s=null,i=n===Me?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ep(e),ref:e&&uo(e),scopeId:Jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(Tl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=qe(t)?8:16),li>0&&!a&&It&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&It.push(l),l}const Be=Iv;function Iv(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===qy)&&(n=vn),El(n)){const c=ss(n,e,!0);return t&&Tl(c,t),li>0&&!i&&It&&(c.shapeFlag&6?It[It.indexOf(n)]=c:It.push(c)),c.patchFlag=-2,c}if(Dv(n)&&(n=n.__vccOpts),e){e=wv(e);let{class:c,style:l}=e;c&&!qe(c)&&(e.class=al(c)),Ce(l)&&(ra(l)&&!re(l)&&(l=ut({},l)),e.style=ps(l))}const a=qe(n)?1:yp(n)?128:Vy(n)?64:Ce(n)?4:le(n)?2:0;return Ue(n,e,t,r,s,a,i,!0)}function wv(n){return n?ra(n)||up(n)?ut({},n):n:null}function ss(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Av(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Ep(h),ref:e&&e.ref?t&&i?re(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Me?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ss(n.ssContent),ssFallback:n.ssFallback&&ss(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&_l(d,l.clone(d)),d}function js(n=" ",e=0){return Be(aa,null,n,e)}function dr(n="",e=!1){return e?(he(),on(vn,null,n)):Be(vn,null,n)}function zt(n){return n==null||typeof n=="boolean"?Be(vn):re(n)?Be(Me,null,n.slice()):El(n)?Mn(n):Be(aa,null,String(n))}function Mn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ss(n)}function Tl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!up(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[js(e)]):t=8);n.children=e,n.shapeFlag|=t}function Av(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=al([e.class,r.class]));else if(s==="style")e.style=ps([e.style,r.style]);else if(Xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function $t(n,e,t,r=null){Jt(n,e,7,[t,r])}const bv=sp();let Sv=0;function Rv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||bv,i={uid:Sv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fp(r,s),emitsOptions:ap(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sv.bind(null,i),n.ce&&n.ce(i),i}let mt=null;const Tp=()=>mt||lt;let Co,Sc;{const n=ea(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Co=e("__VUE_INSTANCE_SETTERS__",t=>mt=t),Sc=e("__VUE_SSR_SETTERS__",t=>ui=t)}const Ti=n=>{const e=mt;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(e)}},vh=()=>{mt&&mt.scope.off(),Co(null)};function Ip(n){return n.vnode.shapeFlag&4}let ui=!1;function Pv(n,e=!1,t=!1){e&&Sc(e);const{props:r,children:s}=n.vnode,i=Ip(n);uv(n,r,i,e),pv(n,s,t||e);const a=i?Cv(n,e):void 0;return e&&Sc(!1),a}function Cv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Hy);const{setup:r}=t;if(r){mn();const s=n.setupContext=r.length>1?kv(n):null,i=Ti(n),a=vi(r,n,0,[n.props,s]),c=vd(a);if(_n(),i(),(c||n.sp)&&!Xr(n)&&Xd(n),c){if(a.then(vh,vh),e)return a.then(l=>{Eh(n,l)}).catch(l=>{sa(l,n,0)});n.asyncDep=a}else Eh(n,a)}else wp(n)}function Eh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ce(e)&&(n.setupState=Hd(e)),wp(n)}function wp(n,e,t){const r=n.type;n.render||(n.render=r.render||Wt);{const s=Ti(n);mn();try{zy(n)}finally{_n(),s()}}}const Vv={get(n,e){return at(n,"get",""),n[e]}};function kv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Vv),slots:n.slots,emit:n.emit,expose:e}}function ca(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hd(pl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qs)return Qs[t](n)},has(e,t){return t in e||t in Qs}})):n.proxy}function Dv(n){return le(n)&&"__vccOpts"in n}const Ap=(n,e)=>wy(n,e,ui),Ov="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const Th=typeof window<"u"&&window.trustedTypes;if(Th)try{Rc=Th.createPolicy("vue",{createHTML:n=>n})}catch{}const bp=Rc?n=>Rc.createHTML(n):n=>n,Nv="http://www.w3.org/2000/svg",xv="http://www.w3.org/1998/Math/MathML",sn=typeof document<"u"?document:null,Ih=sn&&sn.createElement("template"),Mv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?sn.createElementNS(Nv,n):e==="mathml"?sn.createElementNS(xv,n):t?sn.createElement(n,{is:t}):sn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>sn.createTextNode(n),createComment:n=>sn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>sn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ih.innerHTML=bp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Ih.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Lv=Symbol("_vtc");function Fv(n,e,t){const r=n[Lv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const wh=Symbol("_vod"),Uv=Symbol("_vsh"),Bv=Symbol(""),jv=/(?:^|;)\s*display\s*:/;function $v(n,e,t){const r=n.style,s=qe(t);let i=!1;if(t&&!s){if(e)if(qe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&ho(r,c,"")}else for(const a in e)t[a]==null&&ho(r,a,"");for(const a in t)a==="display"&&(i=!0),ho(r,a,t[a])}else if(s){if(e!==t){const a=r[Bv];a&&(t+=";"+a),r.cssText=t,i=jv.test(t)}}else e&&n.removeAttribute("style");wh in n&&(n[wh]=i?r.display:"",n[Uv]&&(r.display="none"))}const Ah=/\s*!important$/;function ho(n,e,t){if(re(t))t.forEach(r=>ho(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=qv(n,e);Ah.test(t)?n.setProperty(Rr(r),t.replace(Ah,""),"important"):n[r]=t}}const bh=["Webkit","Moz","ms"],ec={};function qv(n,e){const t=ec[e];if(t)return t;let r=Jn(e);if(r!=="filter"&&r in n)return ec[e]=r;r=Id(r);for(let s=0;s<bh.length;s++){const i=bh[s]+r;if(i in n)return ec[e]=i}return e}const Sh="http://www.w3.org/1999/xlink";function Rh(n,e,t,r,s,i=K_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Sh,e.slice(6,e.length)):n.setAttributeNS(Sh,e,t):t==null||i&&!Ad(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Lt(t)?String(t):t)}function Ph(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?bp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Ad(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function mr(n,e,t,r){n.addEventListener(e,t,r)}function Hv(n,e,t,r){n.removeEventListener(e,t,r)}const Ch=Symbol("_vei");function zv(n,e,t,r,s=null){const i=n[Ch]||(n[Ch]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Wv(e);if(r){const h=i[e]=Qv(r,s);mr(n,c,h,l)}else a&&(Hv(n,c,a,l),i[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function Wv(n){let e;if(Vh.test(n)){e={};let r;for(;r=n.match(Vh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Rr(n.slice(2)),e]}let tc=0;const Kv=Promise.resolve(),Gv=()=>tc||(Kv.then(()=>tc=0),tc=Date.now());function Qv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Jt(Jv(r,t.value),e,5,[r])};return t.value=n,t.attached=Gv(),t}function Jv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Xv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Fv(n,r,a):e==="style"?$v(n,t,r):Xo(e)?sl(e)||zv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Yv(n,e,r,a))?(Ph(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?Ph(n,Jn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Rh(n,e,r,a))};function Yv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&kh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kh(e)&&qe(t)?!1:e in n}const Vo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>ao(e,t):e};function Zv(n){n.target.composing=!0}function Dh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Yr=Symbol("_assign");function Oh(n,e,t){return e&&(n=n.trim()),t&&(n=ol(n)),n}const eE={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Yr]=Vo(s);const i=r||s.props&&s.props.type==="number";mr(n,e?"change":"input",a=>{a.target.composing||n[Yr](Oh(n.value,t,i))}),(t||i)&&mr(n,"change",()=>{n.value=Oh(n.value,t,i)}),e||(mr(n,"compositionstart",Zv),mr(n,"compositionend",Dh),mr(n,"change",Dh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Yr]=Vo(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?ol(n.value):n.value,l=e??"";c!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Us={created(n,{value:e},t){n.checked=Io(e,t.props.value),n[Yr]=Vo(t),mr(n,"change",()=>{n[Yr](tE(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Yr]=Vo(r),e!==t&&(n.checked=Io(e,r.props.value))}};function tE(n){return"_value"in n?n._value:n.value}const nE=ut({patchProp:Xv},Mv);let Nh;function rE(){return Nh||(Nh=mv(nE))}const sE=((...n)=>{const e=rE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=oE(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,iE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function iE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function oE(n){return qe(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sp;const la=n=>Sp=n,Rp=Symbol();function Pc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ys;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ys||(Ys={}));function aE(){const n=Pd(!0),e=n.run(()=>gl({}));let t=[],r=[];const s=pl({install(i){la(s),s._a=i,i.provide(Rp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Pp=()=>{};function xh(n,e,t,r=Pp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Cd()&&Q_(s),s}function Br(n,...e){n.forEach(t=>{t(...e)})}const cE=n=>n(),Mh=Symbol(),nc=Symbol();function Cc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Pc(s)&&Pc(r)&&n.hasOwnProperty(t)&&!Ne(r)&&!fn(r)?n[t]=Cc(s,r):n[t]=r}return n}const lE=Symbol();function uE(n){return!Pc(n)||!Object.prototype.hasOwnProperty.call(n,lE)}const{assign:On}=Object;function hE(n){return!!(Ne(n)&&n.effect)}function fE(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=vy(t.state.value[n]);return On(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=pl(Ap(()=>{la(t);const b=t._s.get(n);return a[_].call(b,b)})),p),{}))}return l=Cp(n,h,e,t,r,!0),l}function Cp(n,e,t={},r,s,i){let a;const c=On({actions:{}},t),l={deep:!0};let h,d,p=new Set,_=new Set,b;const P=r.state.value[n];!i&&!P&&(r.state.value[n]={}),gl({});let O;function x(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:Ys.patchFunction,storeId:n,events:b}):(Cc(r.state.value[n],m),y={type:Ys.patchObject,payload:m,storeId:n,events:b});const T=O=Symbol();Wd().then(()=>{O===T&&(h=!0)}),d=!0,Br(p,y,r.state.value[n])}const z=i?function(){const{state:y}=t,T=y?y():{};this.$patch(w=>{On(w,T)})}:Pp;function G(){a.stop(),p.clear(),_.clear(),r._s.delete(n)}const Q=(m,y="")=>{if(Mh in m)return m[nc]=y,m;const T=function(){la(r);const w=Array.from(arguments),S=new Set,E=new Set;function ft(ae){S.add(ae)}function Bt(ae){E.add(ae)}Br(_,{args:w,name:T[nc],store:oe,after:ft,onError:Bt});let ke;try{ke=m.apply(this&&this.$id===n?this:oe,w)}catch(ae){throw Br(E,ae),ae}return ke instanceof Promise?ke.then(ae=>(Br(S,ae),ae)).catch(ae=>(Br(E,ae),Promise.reject(ae))):(Br(S,ke),ke)};return T[Mh]=!0,T[nc]=y,T},H={_p:r,$id:n,$onAction:xh.bind(null,_),$patch:x,$reset:z,$subscribe(m,y={}){const T=xh(p,m,y.detached,()=>w()),w=a.run(()=>lo(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:Ys.direct,events:b},S)},On({},l,y)));return T},$dispose:G},oe=na(H);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||cE)(()=>r._e.run(()=>(a=Pd()).run(()=>e({action:Q}))));for(const m in I){const y=I[m];if(Ne(y)&&!hE(y)||fn(y))i||(P&&uE(y)&&(Ne(y)?y.value=P[m]:Cc(y,P[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=Q(y,m);I[m]=T,c.actions[m]=y}}return On(oe,I),On(ve(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{x(y=>{On(y,m)})}}),r._p.forEach(m=>{On(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),P&&i&&t.hydrate&&t.hydrate(oe.$state,P),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function dE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Zy();return a=a||(l?Js(Rp,null):null),a&&la(a),a=Sp,a._s.has(n)||(s?Cp(n,e,r,a):fE(n,r,a)),a._s.get(n)}return i.$id=n,i}function pE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function Il(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=Il(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Vp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return Il(n,Vp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function kp(n,e){return e.map(t=>t.split(".")).map(t=>[t,pE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>Il(t,r[1],r[0]),{})}function Dp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Vp(t,r),n)}function Lh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=t.deserialize(p),b=i?kp(_,i):_,P=a?Dp(b,a):b;n.$patch(P)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function Fh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?kp(n,i):n,l=a?Dp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function gE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function mE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Lh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{Fh(s.$state,c)})},a.forEach(c=>{Lh(s,c,n),s.$subscribe((l,h)=>Fh(h,c),{detached:!0})})}function _E(n={}){return function(e){mE(e,t=>{const r=gE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var yE=_E();const vE=()=>{};var Uh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},EE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(t[d],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Op(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):EE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new TE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class TE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IE=function(n){const e=Op(n);return Np.encodeByteArray(e,!0)},ko=function(n){return IE(n).replace(/\./g,"")},xp=function(n){try{return Np.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=()=>wE().__FIREBASE_DEFAULTS__,bE=()=>{if(typeof process>"u"||typeof Uh>"u")return;const n=Uh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},SE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&xp(n[1]);return e&&JSON.parse(e)},ua=()=>{try{return vE()||AE()||bE()||SE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mp=n=>{var e,t;return(t=(e=ua())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},RE=n=>{const e=Mp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Lp=()=>{var n;return(n=ua())===null||n===void 0?void 0:n.config},Fp=n=>{var e;return(e=ua())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Up(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ko(JSON.stringify(t)),ko(JSON.stringify(a)),""].join(".")}const Zs={};function VE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?n.emulator.push(e):n.prod.push(e);return n}function kE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Bh=!1;function Bp(n,e){if(typeof window>"u"||typeof document>"u"||!gs(window.location.host)||Zs[n]===e||Zs[n]||Bh)return;Zs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=VE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Bh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=kE(r),b=t("text"),P=document.getElementById(b)||document.createElement("span"),O=t("learnmore"),x=document.getElementById(O)||document.createElement("a"),z=t("preprendIcon"),G=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const Q=_.element;c(Q),d(x,O);const H=h();l(G,z),Q.append(G,P,x,H),document.body.appendChild(Q)}i?(P.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function OE(){var n;const e=(n=ua())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ME(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LE(){const n=ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function FE(){return!OE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UE(){try{return typeof indexedDB=="object"}catch{return!1}}function BE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FirebaseError";class Sn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=jE,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ii.prototype.create)}}class Ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$E(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,c,r)}}function $E(n,e){return n.replace(qE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qE=/\{\$([^}]+)}/g;function HE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ir(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(jh(i)&&jh(a)){if(!Ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function jh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zE(n,e){const t=new WE(n,e);return t.subscribe.bind(t)}class WE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");KE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=rc),s.error===void 0&&(s.error=rc),s.complete===void 0&&(s.complete=rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){return n&&n._delegate?n._delegate:n}class wr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new PE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JE(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QE(n){return n===gr?void 0:n}function JE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const YE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},ZE=de.INFO,eT={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},tT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=eT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=ZE,this._logHandler=tT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const nT=(n,e)=>e.some(t=>n instanceof t);let $h,qh;function rT(){return $h||($h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sT(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jp=new WeakMap,Vc=new WeakMap,$p=new WeakMap,sc=new WeakMap,Al=new WeakMap;function iT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(qn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jp.set(t,n)}).catch(()=>{}),Al.set(e,n),e}function oT(n){if(Vc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vc.set(n,e)}let kc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$p.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function aT(n){kc=n(kc)}function cT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ic(this),e,...t);return $p.set(r,e.sort?e.sort():[e]),qn(r)}:sT().includes(n)?function(...e){return n.apply(ic(this),e),qn(jp.get(this))}:function(...e){return qn(n.apply(ic(this),e))}}function lT(n){return typeof n=="function"?cT(n):(n instanceof IDBTransaction&&oT(n),nT(n,rT())?new Proxy(n,kc):n)}function qn(n){if(n instanceof IDBRequest)return iT(n);if(sc.has(n))return sc.get(n);const e=lT(n);return e!==n&&(sc.set(n,e),Al.set(e,n)),e}const ic=n=>Al.get(n);function uT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=qn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(qn(a.result),l.oldVersion,l.newVersion,qn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const hT=["get","getKey","getAll","getAllKeys","count"],fT=["put","add","delete","clear"],oc=new Map;function Hh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=fT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return oc.set(e,i),i}aT(n=>({...n,get:(e,t,r)=>Hh(e,t)||n.get(e,t,r),has:(e,t)=>!!Hh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",zh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new wl("@firebase/app"),gT="@firebase/app-compat",mT="@firebase/analytics-compat",_T="@firebase/analytics",yT="@firebase/app-check-compat",vT="@firebase/app-check",ET="@firebase/auth",TT="@firebase/auth-compat",IT="@firebase/database",wT="@firebase/data-connect",AT="@firebase/database-compat",bT="@firebase/functions",ST="@firebase/functions-compat",RT="@firebase/installations",PT="@firebase/installations-compat",CT="@firebase/messaging",VT="@firebase/messaging-compat",kT="@firebase/performance",DT="@firebase/performance-compat",OT="@firebase/remote-config",NT="@firebase/remote-config-compat",xT="@firebase/storage",MT="@firebase/storage-compat",LT="@firebase/firestore",FT="@firebase/ai",UT="@firebase/firestore-compat",BT="firebase",jT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",$T={[Dc]:"fire-core",[gT]:"fire-core-compat",[_T]:"fire-analytics",[mT]:"fire-analytics-compat",[vT]:"fire-app-check",[yT]:"fire-app-check-compat",[ET]:"fire-auth",[TT]:"fire-auth-compat",[IT]:"fire-rtdb",[wT]:"fire-data-connect",[AT]:"fire-rtdb-compat",[bT]:"fire-fn",[ST]:"fire-fn-compat",[RT]:"fire-iid",[PT]:"fire-iid-compat",[CT]:"fire-fcm",[VT]:"fire-fcm-compat",[kT]:"fire-perf",[DT]:"fire-perf-compat",[OT]:"fire-rc",[NT]:"fire-rc-compat",[xT]:"fire-gcs",[MT]:"fire-gcs-compat",[LT]:"fire-fst",[UT]:"fire-fst-compat",[FT]:"fire-vertex","fire-js":"fire-js",[BT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,qT=new Map,Nc=new Map;function Wh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function is(n){const e=n.name;if(Nc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,n);for(const t of Do.values())Wh(t,n);for(const t of qT.values())Wh(t,n);return!0}function bl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new Ii("app","Firebase",HT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=jT;function qp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(t||(t=Lp()),!t)throw Hn.create("no-options");const i=Do.get(s);if(i){if(Ir(t,i.options)&&Ir(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const a=new XE(s);for(const l of Nc.values())a.addComponent(l);const c=new zT(t,r,a);return Do.set(s,c),c}function Hp(n=Oc){const e=Do.get(n);if(!e&&n===Oc&&Lp())return qp();if(!e)throw Hn.create("no-app",{appName:n});return e}function zn(n,e,t){var r;let s=(r=$T[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}is(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="firebase-heartbeat-database",KT=1,hi="firebase-heartbeat-store";let ac=null;function zp(){return ac||(ac=uT(WT,KT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Hn.create("idb-open",{originalErrorMessage:n.message})})),ac}async function GT(n){try{const t=(await zp()).transaction(hi),r=await t.objectStore(hi).get(Wp(n));return await t.done,r}catch(e){if(e instanceof Sn)En.warn(e.message);else{const t=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function Kh(n,e){try{const r=(await zp()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,Wp(n)),await r.done}catch(t){if(t instanceof Sn)En.warn(t.message);else{const r=Hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Wp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=1024,JT=30;class XT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ZT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>JT){const a=eI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gh(),{heartbeatsToSend:r,unsentEntries:s}=YT(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Gh(){return new Date().toISOString().substring(0,10)}function YT(n,e=QT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Qh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Qh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ZT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UE()?BE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qh(n){return ko(JSON.stringify({version:2,heartbeats:n})).length}function eI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n){is(new wr("platform-logger",e=>new dT(e),"PRIVATE")),is(new wr("heartbeat",e=>new XT(e),"PRIVATE")),zn(Dc,zh,n),zn(Dc,zh,"esm2017"),zn("fire-js","")}tI("");function Sl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Kp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=Kp,Gp=new Ii("auth","Firebase",Kp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new wl("@firebase/auth");function rI(n,...e){Oo.logLevel<=de.WARN&&Oo.warn(`Auth (${ms}): ${n}`,...e)}function fo(n,...e){Oo.logLevel<=de.ERROR&&Oo.error(`Auth (${ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,...e){throw Pl(n,...e)}function Nt(n,...e){return Pl(n,...e)}function Rl(n,e,t){const r=Object.assign(Object.assign({},nI()),{[e]:t});return new Ii("auth","Firebase",r).create(e,{appName:n.name})}function Tr(n){return Rl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(n,"argument-error"),Rl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gp.create(n,...e)}function ne(n,e,...t){if(!n)throw Pl(e,...t)}function un(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fo(e),new Error(e)}function Tn(n,e){n||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function iI(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iI()||xE()||"connection"in navigator)?navigator.onLine:!0}function aI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tn(t>e,"Short delay should be less than long delay!"),this.isMobile=DE()||ME()}get(){return oI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n,e){Tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uI=new Ai(3e4,6e4);function Vl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _s(n,e,t,r,s={}){return Jp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return NE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&gs(n.emulatorConfig.host)&&(h.credentials="include"),Qp.fetch()(await Xp(n,n.config.apiHost,t,c),h)})}async function Jp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cI),e);try{const s=new fI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw to(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw to(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw to(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Rl(n,d,h);Xt(n,d)}}catch(s){if(s instanceof Sn)throw s;Xt(n,"network-request-failed",{message:String(s)})}}async function hI(n,e,t,r,s={}){const i=await _s(n,e,t,r,s);return"mfaPendingCredential"in i&&Xt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Cl(n.config,s):`${n.config.apiScheme}://${s}`;return lI.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class fI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),uI.get())})}}function to(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Nt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(n,e){return _s(n,"POST","/v1/accounts:delete",e)}async function No(n,e){return _s(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pI(n,e=!1){const t=_t(n),r=await t.getIdToken(e),s=kl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(cc(s.auth_time)),issuedAtTime:ei(cc(s.iat)),expirationTime:ei(cc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cc(n){return Number(n)*1e3}function kl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=xp(t);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xh(n){const e=kl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Sn&&gI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function gI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await fi(n,No(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yp(i.providerUserInfo):[],c=yI(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Mc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function _I(n){const e=_t(n);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yp(n){return n.map(e=>{var{providerId:t}=e,r=Sl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(n,e){const t=await Jp(n,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Xp(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&gs(n.emulatorConfig.host)&&(l.credentials="include"),Qp.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EI(n,e){return _s(n,"POST","/v2/accounts:revokeToken",Vl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Xh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await vI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Zr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Sl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pI(this,e)}reload(){return _I(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await fi(this,dI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=t.createdAt)!==null&&h!==void 0?h:void 0,G=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:H,isAnonymous:oe,providerData:Ee,stsTokenManager:I}=t;ne(Q&&I,e,"internal-error");const m=Zr.fromJSON(this.name,I);ne(typeof Q=="string",e,"internal-error"),kn(p,e.name),kn(_,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),kn(b,e.name),kn(P,e.name),kn(O,e.name),kn(x,e.name),kn(z,e.name),kn(G,e.name);const y=new kt({uid:Q,auth:e,email:_,emailVerified:H,displayName:p,isAnonymous:oe,photoURL:P,phoneNumber:b,tenantId:O,stsTokenManager:m,createdAt:z,lastLoginAt:G});return Ee&&Array.isArray(Ee)&&(y.providerData=Ee.map(T=>Object.assign({},T))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Zr;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Zr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function hn(n){Tn(n instanceof Function,"Expected a class definition");let e=Yh.get(n);return e?(Tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zp.type="NONE";const Zh=Zp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n,e,t){return`firebase:${n}:${e}:${t}`}class es{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await No(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new es(hn(Zh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hn(Zh);const a=po(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await No(e,{idToken:d}).catch(()=>{});if(!_)break;p=await kt._fromGetAccountInfoResponse(e,_,d)}else p=kt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new es(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(og(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(sg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function eg(n=ht()){return/firefox\//i.test(n)}function tg(n=ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(n=ht()){return/crios\//i.test(n)}function rg(n=ht()){return/iemobile/i.test(n)}function sg(n=ht()){return/android/i.test(n)}function ig(n=ht()){return/blackberry/i.test(n)}function og(n=ht()){return/webos/i.test(n)}function Dl(n=ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function TI(n=ht()){var e;return Dl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function II(){return LE()&&document.documentMode===10}function ag(n=ht()){return Dl(n)||sg(n)||og(n)||ig(n)||/windows phone/i.test(n)||rg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e=[]){let t;switch(n){case"Browser":t=ef(ht());break;case"Worker":t=`${ef(ht())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e={}){return _s(n,"GET","/v2/passwordPolicy",Vl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=6;class SI{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:bI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new wI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await No(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Tr(this));const t=e?_t(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AI(this),t=new SI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await EI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[hn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ha(n){return _t(n)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=zE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PI(n){Ol=n}function CI(n){return Ol.loadJS(n)}function VI(){return Ol.gapiScript}function kI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e){const t=bl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ir(i,e??{}))return s;Xt(s,"already-initialized")}return t.initialize({options:e})}function OI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(hn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NI(n,e,t){const r=ha(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lg(e),{host:a,port:c}=xI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Ir(h,r.config.emulator)&&Ir(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,gs(a)?(Up(`${i}//${a}${l}`),Bp("Auth",!0)):MI()}function lg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xI(n){const e=lg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:nf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:nf(a)}}}function nf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function MI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,t){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e){return hI(n,"POST","/v1/accounts:signInWithIdp",Vl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="http://localhost";class Ar extends ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Sl(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ts(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ts(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ts(e,t)}buildRequest(){const e={requestUri:LI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends bi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ar._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ln.credential(t,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends bi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends bi{constructor(){super("twitter.com")}static credential(e,t){return Ar._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=rf(r);return new os({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=rf(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function rf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Sn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Mo(e,t,r,s)}}function hg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(n,i,e,r):i})}async function FI(n,e,t=!1){const r=await fi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return os._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await fi(n,hg(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=kl(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),os._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e,t=!1){if(Vt(n.app))return Promise.reject(Tr(n));const r="signIn",s=await hg(n,r,e),i=await os._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function jI(n,e,t,r){return _t(n).onIdTokenChanged(e,t,r)}function $I(n,e,t){return _t(n).beforeAuthStateChanged(e,t)}function qI(n,e,t,r){return _t(n).onAuthStateChanged(e,t,r)}function HI(n){return _t(n).signOut()}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1e3,WI=10;class dg extends fg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);II()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,WI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dg.type="LOCAL";const KI=dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends fg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pg.type="SESSION";const gg=pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await GI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=xl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function JI(n){Kt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function XI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ZI(){return mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="firebaseLocalStorageDb",ew=1,Fo="firebaseLocalStorage",yg="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function da(n,e){return n.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function tw(){const n=indexedDB.deleteDatabase(_g);return new Si(n).toPromise()}function Lc(){const n=indexedDB.open(_g,ew);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fo,{keyPath:yg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await tw(),e(await Lc()))})})}async function sf(n,e,t){const r=da(n,!0).put({[yg]:e,value:t});return new Si(r).toPromise()}async function nw(n,e){const t=da(n,!1).get(e),r=await new Si(t).toPromise();return r===void 0?null:r.value}function of(n,e){const t=da(n,!0).delete(e);return new Si(t).toPromise()}const rw=800,sw=3;class vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fa._getInstance(ZI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await XI(),!this.activeServiceWorker)return;this.sender=new QI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lc();return await sf(e,Lo,"1"),await of(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>nw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>of(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=da(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vg.type="LOCAL";const iw=vg;new Ai(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n,e){return e?hn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ow(n){return BI(n.auth,new Ml(n),n.bypassAuthState)}function aw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),UI(t,new Ml(n),n.bypassAuthState)}async function cw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),FI(t,new Ml(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return cw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:Xt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Ai(2e3,1e4);async function uw(n,e,t){if(Vt(n.app))return Promise.reject(Nt(n,"operation-not-supported-in-this-environment"));const r=ha(n);sI(n,e,Nl);const s=Eg(r,t);return new _r(r,"signInViaPopup",e,s).executeNotNull()}class _r extends Tg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lw.get())};e()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="pendingRedirect",go=new Map;class fw extends Tg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await dw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dw(n,e){const t=mw(e),r=gw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pw(n,e){go.set(n._key(),e)}function gw(n){return hn(n._redirectPersistence)}function mw(n){return po(hw,n.config.apiKey,n.name)}async function _w(n,e,t=!1){if(Vt(n.app))return Promise.reject(Tr(n));const r=ha(n),s=Eg(r,e),a=await new fw(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=600*1e3;class vw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(af(e))}saveEventToCache(e){this.cachedEventUids.add(af(e)),this.lastProcessedEventTime=Date.now()}}function af(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ig({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ig(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw(n,e={}){return _s(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ww=/^https?/;async function Aw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Tw(n);for(const t of e)try{if(bw(t))return}catch{}Xt(n,"unauthorized-domain")}function bw(n){const e=xc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ww.test(t))return!1;if(Iw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=new Ai(3e4,6e4);function cf(){const n=Kt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Rw(n){return new Promise((e,t)=>{var r,s,i;function a(){cf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cf(),t(Nt(n,"network-request-failed"))},timeout:Sw.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const c=kI("iframefcb");return Kt()[c]=()=>{gapi.load?a():t(Nt(n,"network-request-failed"))},CI(`${VI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw mo=null,e})}let mo=null;function Pw(n){return mo=mo||Rw(n),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=new Ai(5e3,15e3),Vw="__/auth/iframe",kw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ow=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nw(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cl(e,kw):`https://${n.config.authDomain}/${Vw}`,r={apiKey:e.apiKey,appName:n.name,v:ms},s=Ow.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${wi(r).slice(1)}`}async function xw(n){const e=await Pw(n),t=Kt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Nw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Nt(n,"network-request-failed"),c=Kt().setTimeout(()=>{i(a)},Cw.get());function l(){Kt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lw=500,Fw=600,Uw="_blank",Bw="http://localhost";class lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jw(n,e,t,r=Lw,s=Fw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Mw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();t&&(c=ng(h)?Uw:t),eg(h)&&(e=e||Bw,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,P])=>`${_}${b}=${P},`,"");if(TI(h)&&c!=="_self")return $w(e||"",c),new lf(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new lf(p)}function $w(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="__/auth/handler",Hw="emulator/auth/handler",zw=encodeURIComponent("fac");async function uf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ms,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",HE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof bi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${zw}=${encodeURIComponent(l)}`:"";return`${Ww(n)}?${wi(c).slice(1)}${h}`}function Ww({config:n}){return n.emulator?Cl(n,Hw):`https://${n.authDomain}/${qw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="webStorageSupport";class Kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=_w,this._overrideRedirectResult=pw}async _openPopup(e,t,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await uf(e,t,r,xc(),s);return jw(e,a,xl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await uf(e,t,r,xc(),s);return JI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xw(e),r=new vw(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(lc,{type:lc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[lc];a!==void 0&&t(!!a),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Aw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ag()||tg()||Dl()}}const Gw=Kw;var hf="@firebase/auth",ff="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xw(n){is(new wr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cg(n)},h=new RI(r,s,i,l);return OI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),is(new wr("auth-internal",e=>{const t=ha(e.getProvider("auth").getImmediate());return(r=>new Qw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(hf,ff,Jw(n)),zn(hf,ff,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=300,Zw=Fp("authIdTokenMaxAge")||Yw;let df=null;const eA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Zw)return;const s=t==null?void 0:t.token;df!==s&&(df=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uc(n=Hp()){const e=bl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DI(n,{popupRedirectResolver:Gw,persistence:[iw,KI,gg]}),r=Fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=eA(i.toString());$I(t,a,()=>a(t.currentUser)),jI(t,c=>a(c))}}const s=Mp("auth");return s&&NI(t,`http://${s}`),t}function tA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}PI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",tA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xw("Browser");const Pr=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},nA={},rA={class:"carafe"};function sA(n,e){return he(),Te("div",rA,[co(n.$slots,"top",{},void 0,!0),co(n.$slots,"mid",{},void 0,!0),co(n.$slots,"bottom",{},void 0,!0)])}const hc=Pr(nA,[["render",sA],["__scopeId","data-v-43d2bfc5"]]),iA={},oA={class:"mug"};function aA(n,e){return he(),Te("div",oA,[co(n.$slots,"default")])}const cA=Pr(iA,[["render",aA]]),lA="modulepreload",uA=function(n,e){return new URL(n,e).href},pf={},hA=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const c=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(d=>{if(d=uA(d,r),d in pf)return;pf[d]=!0;const p=d.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(!!r)for(let O=c.length-1;O>=0;O--){const x=c[O];if(x.href===d&&(!p||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${_}`))return;const P=document.createElement("link");if(P.rel=p?"stylesheet":lA,p||(P.as="script"),P.crossOrigin="",P.href=d,h&&P.setAttribute("nonce",h),document.head.appendChild(P),p)return new Promise((O,x)=>{P.addEventListener("load",O),P.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,wg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,w,S){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return m.prototype[w].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(w=0;16>w;++w)T[w]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],w=I.g[2];var S=I.g[3],E=m+(S^y&(w^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[2]+606105819&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[3]+3250441966&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[6]+2821735955&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[7]+4249261313&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[10]+4294925233&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[11]+2304563134&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(S^y&(w^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(w^m&(y^w))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=w+(y^S&(m^y))+T[14]+2792965006&4294967295,w=S+(E<<17&4294967295|E>>>15),E=y+(m^w&(S^m))+T[15]+1236535329&4294967295,y=w+(E<<22&4294967295|E>>>10),E=m+(w^S&(y^w))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[11]+643717713&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[0]+3921069994&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[15]+3634488961&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[4]+3889429448&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[3]+4107603335&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[8]+1163531501&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(w^S&(y^w))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^w&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=w+(m^y&(S^m))+T[7]+1735328473&4294967295,w=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(w^S))+T[12]+2368359562&4294967295,y=w+(E<<20&4294967295|E>>>12),E=m+(y^w^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[11]+1839030562&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[14]+4259657740&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[7]+4139469664&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[10]+3200236656&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[3]+3572445317&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[6]+76029189&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(y^w^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^w)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=w+(S^m^y)+T[15]+530742520&4294967295,w=S+(E<<16&4294967295|E>>>16),E=y+(w^S^m)+T[2]+3299628645&4294967295,y=w+(E<<23&4294967295|E>>>9),E=m+(w^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[14]+2878612391&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[5]+4237533241&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[10]+4293915773&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[1]+2240044497&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[6]+2734768916&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[13]+1309151649&4294967295,y=w+(E<<21&4294967295|E>>>11),E=m+(w^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~w))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=w+(m^(S|~y))+T[2]+718787259&4294967295,w=S+(E<<15&4294967295|E>>>17),E=y+(S^(w|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,w=this.h,S=0;S<m;){if(w==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[w++]=I.charCodeAt(S++),w==this.blockSize){s(this,T),w=0;break}}else for(;S<m;)if(T[w++]=I[S++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,w=I.length-1;0<=w;w--){var S=I[w]|0;T&&S==m||(y[w]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return x(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,w=0;w<I.length;w+=8){var S=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-x(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(O(this))return"-"+x(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var w=H(y,m).g;y=z(y,w.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=w,P(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=z(this,I),O(I)?-1:P(I)?0:1};function x(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}n.abs=function(){return O(this)?x(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,w=0;w<=m;w++){var S=T+(this.i(w)&65535)+(I.i(w)&65535),E=(S>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);T=E>>>16,S&=65535,E&=65535,y[w]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,m){return I.add(x(m))}n.j=function(I){if(P(this)||P(I))return p;if(O(this))return O(I)?x(this).j(x(I)):x(x(this).j(I));if(O(I))return x(this.j(x(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<I.g.length;w++){var S=this.i(T)>>>16,E=this.i(T)&65535,ft=I.i(w)>>>16,Bt=I.i(w)&65535;y[2*T+2*w]+=E*Bt,G(y,2*T+2*w),y[2*T+2*w+1]+=S*Bt,G(y,2*T+2*w+1),y[2*T+2*w+1]+=E*ft,G(y,2*T+2*w+1),y[2*T+2*w+2]+=S*ft,G(y,2*T+2*w+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function G(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function Q(I,m){this.g=I,this.h=m}function H(I,m){if(P(m))throw Error("division by zero");if(P(I))return new Q(p,p);if(O(I))return m=H(x(I),m),new Q(x(m.g),x(m.h));if(O(m))return m=H(I,x(m)),new Q(x(m.g),m.h);if(30<I.g.length){if(O(I)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=oe(y),T=oe(T);var w=Ee(y,1),S=Ee(T,1);for(T=Ee(T,2),y=Ee(y,2);!P(T);){var E=S.add(T);0>=E.l(I)&&(w=w.add(y),S=E),T=Ee(T,1),y=Ee(y,1)}return m=z(I,w.j(m)),new Q(w,m)}for(w=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);O(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);P(S)&&(S=_),w=w.add(S),I=z(I,E)}return new Q(w,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function Ee(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,w=[],S=0;S<T;S++)w[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Wn=a}).apply(typeof gf<"u"?gf:typeof self<"u"?self:typeof window<"u"?window:{});var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ag,$s,bg,_o,Fc,Sg,Rg,Pg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof no=="object"&&no];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var j=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)j[Ae-2]=arguments[Ae];return u.prototype[R].apply(g,j)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function x(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let j=0;j<C;j++)o[R+j]=g[j]}else o.push(g)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Ee(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function w(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,f){const g=Bt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Bt=new z(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,_e=!1,Rt=new ft,sr=()=>{const o=c.Promise.resolve(void 0);ae=()=>{o.then(Zt)}};var Zt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Bt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var ka=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function ir(o,u){if(ze.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:or[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ir.aa.h.call(this)}}P(ir,ze);var or={2:"touch",3:"pen",4:"mouse"};ir.prototype.h=function(){ir.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),Is=0;function xi(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Is,this.da=this.fa=!1}function jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ws(o){this.src=o,this.g={},this.h=0}ws.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var j=A(o,u,g,R);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new xi(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(jt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var V="closure_lm_"+(1e6*Math.random()|0),F={};function N(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)N(o,u[C],f,g,R);return null}return f=te(f),o&&o[en]?o.K(u,f,h(g)?!!g.capture:!1,R):M(o,u,f,!1,g,R)}function M(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var j=h(R)?!!R.capture:!!R,Ae=q(o);if(Ae||(o[V]=Ae=new ws(o)),f=Ae.add(u,f,g,j,C),f.proxy)return f;if(g=$(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)ka||(R=j),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(L(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function B(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)B(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[en]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,g,R),-1<f&&(jt(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[en])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(L(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[V]=null)):jt(o)}}}function L(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new ir(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function q(o){return o=o[V],o instanceof ws?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function Z(){He.call(this),this.i=new ws(this),this.M=this,this.F=null}P(Z,He),Z.prototype[en]=!0,Z.prototype.removeEventListener=function(o,u,f,g){B(this,o,u,f,g)};function ce(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new ze(u,o);else if(u instanceof ze)u.target=u.target||o;else{var R=u;u=new ze(g,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var j=u.g=f[C];R=ge(j,g,!0,u)&&R}if(j=u.g=o,R=ge(j,g,!0,u)&&R,R=ge(j,g,!1,u)&&R,f)for(C=0;C<f.length;C++)j=u.g=f[C],R=ge(j,g,!1,u)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)jt(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function ge(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==f){var Ae=j.listener,Ze=j.ha||j.src;j.fa&&v(o.i,j),R=Ae.call(Ze,g)!==!1&&R}}return R&&!g.defaultPrevented}function Je(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Xe(o){o.g=Je(()=>{o.g=null,o.i&&(o.i=!1,Xe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){He.call(this),this.h=o,this.g={}}P(tt,He);var Rn=[];function As(o){Ee(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),As(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=c.JSON.stringify,bt=c.JSON.parse,Mi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Or(){}Or.prototype.h=null;function du(o){return o.h||(o.h=o.i())}function pu(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){ze.call(this,"d")}P(Da,ze);function Oa(){ze.call(this,"c")}P(Oa,ze);var ar={},gu=null;function Li(){return gu=gu||new Z}ar.La="serverreachability";function mu(o){ze.call(this,ar.La,o)}P(mu,ze);function Ss(o){const u=Li();ce(u,new mu(u))}ar.STAT_EVENT="statevent";function _u(o,u){ze.call(this,ar.STAT_EVENT,o),this.stat=u}P(_u,ze);function dt(o){const u=Li();ce(u,new _u(u,o))}ar.Ma="timingevent";function yu(o,u){ze.call(this,ar.Ma,o),this.size=u}P(yu,ze);function Rs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function g_(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var j="",Ae=C.split("&"),Ze=0;Ze<Ae.length;Ze++){var ye=Ae[Ze].split("=");if(1<ye.length){var nt=ye[0];ye=ye[1];var rt=nt.split("_");j=2<=rt.length&&rt[1]=="type"?j+(nt+"="+ye+"&"):j+(nt+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+j})}function m_(o,u,f,g,R,C,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+j})}function Nr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+y_(o,f)+(g?" "+g:"")})}function __(o,u){o.info(function(){return"TIMEOUT: "+u})}Ps.prototype.info=function(){};function y_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Ye(f)}catch{return u}}var Fi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Na;function Ui(){}P(Ui,Or),Ui.prototype.g=function(){return new XMLHttpRequest},Ui.prototype.i=function(){return{}},Na=new Ui;function Pn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}var Tu={},xa={};function Ma(o,u,f){o.L=1,o.v=qi(tn(u)),o.m=f,o.P=!0,Iu(o,null)}function Iu(o,u){o.F=Date.now(),Bi(o),o.A=tn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Mu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Eu,o.g=eh(o.j,f?u:null,!o.m),0<o.O&&(o.M=new At(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Rn[0]=R.toString()),R=Rn);for(var C=0;C<R.length;C++){var j=N(f,R[C],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ss(),g_(o.i,o.u,o.A,o.l,o.R,o.m)}Pn.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},Pn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=nn(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||qu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Lr?Ss(3):Ss(2)),La(this);var f=this.g.Z();this.X=f;t:if(wu(this)){var g=qu(this.g);o="";var R=g.length,C=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cr(this),Cs(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,m_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,Ze=this.g;if((Ae=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ae)){var ye=Ae;break t}}ye=null}if(f=ye)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,f);else{this.o=!1,this.s=3,dt(12),cr(this),Cs(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<j.length;)if(Pt=v_(this,j),Pt==xa){rt==4&&(this.s=4,dt(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==Tu){this.s=4,dt(15),Nr(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,Pt,null),Fa(this,Pt);if(wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||j.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,j,"[Invalid Chunked Response]"),cr(this),Cs(this);else if(0<j.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ha(nt),nt.M=!0,dt(11))}}else Nr(this.i,this.l,j,null),Fa(this,j);rt==4&&cr(this),this.o&&!this.J&&(rt==4?Ju(this.j,this):(this.o=!1,Bi(this)))}else M_(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),cr(this),Cs(this)}}}catch{}finally{}};function wu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function v_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?xa:(f=Number(u.substring(f,g)),isNaN(f)?Tu:(g+=1,g+f>u.length?xa:(u=u.slice(g,g+f),o.C=g+f,u)))}Pn.prototype.cancel=function(){this.J=!0,cr(this)};function Bi(o){o.S=Date.now()+o.I,Au(o,o.I)}function Au(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rs(_(o.ba,o),u)}function La(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Pn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(__(this.i,this.A),this.L!=2&&(Ss(),dt(17)),cr(this),this.s=2,Cs(this)):Au(this,this.S-o)};function Cs(o){o.j.G==0||o.J||Ju(o.j,o)}function cr(o){La(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,As(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ua(f.h,o))){if(!o.K&&Ua(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Qi(f),Ki(f);else break e;qa(f),dt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Rs(_(f.Za,f),6e3));if(1>=Ru(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ur(f,11)}else if((o.K||f.g==o)&&Qi(f),!G(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let ye=R[u];if(f.T=ye[0],ye=ye[1],f.G==2)if(ye[0]=="c"){f.K=ye[1],f.ia=ye[2];const nt=ye[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=ye[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Lr=ye[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(g=1.5*Lr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Pt=o.g;if(Pt){const Xi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var C=g.h;C.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ba(C,C.h),C.h=null))}if(g.D){const za=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(g.ya=za,Ve(g.I,g.D,za))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=Zu(g,g.J?g.ia:null,g.W),j.K){Pu(g.h,j);var Ae=j,Ze=g.L;Ze&&(Ae.I=Ze),Ae.B&&(La(Ae),Bi(Ae)),g.g=j}else Gu(g);0<f.i.length&&Gi(f)}else ye[0]!="stop"&&ye[0]!="close"||ur(f,7);else f.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?ur(f,7):$a(f):ye[0]!="noop"&&f.l&&f.l.ta(ye),f.v=0)}}Ss(4)}catch{}}var E_=class{constructor(o,u){this.g=o,this.map=u}};function bu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Su(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ru(o){return o.h?1:o.g?o.g.size:0}function Ua(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ba(o,u){o.g?o.g.add(u):o.h=u}function Pu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}bu.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Cu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function T_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function I_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Vu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=I_(o),g=T_(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function lr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof lr){this.h=o.h,ji(this,o.j),this.o=o.o,this.g=o.g,$i(this,o.s),this.l=o.l;var u=o.i,f=new Ds;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Du(this,f),this.m=o.m}else o&&(u=String(o).match(ku))?(this.h=!1,ji(this,u[1]||"",!0),this.o=Vs(u[2]||""),this.g=Vs(u[3]||"",!0),$i(this,u[4]),this.l=Vs(u[5]||"",!0),Du(this,u[6]||"",!0),this.m=Vs(u[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}lr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ks(u,Ou,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ks(u,Ou,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ks(f,f.charAt(0)=="/"?S_:b_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ks(f,P_)),o.join("")};function tn(o){return new lr(o)}function ji(o,u,f){o.j=f?Vs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function $i(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Du(o,u,f){u instanceof Ds?(o.i=u,C_(o.i,o.h)):(f||(u=ks(u,R_)),o.i=new Ds(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function qi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Vs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ks(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,A_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function A_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ou=/[#\/\?@]/g,b_=/[#\?:]/g,S_=/[#\?]/g,R_=/[#\?@]/g,P_=/#/g;function Ds(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&w_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Ds.prototype,n.add=function(o,u){Cn(this),this.i=null,o=xr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Nu(o,u){Cn(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function xu(o,u){return Cn(o),u=xr(o,u),o.g.has(u)}n.forEach=function(o,u){Cn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){Cn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},n.V=function(o){Cn(this);let u=[];if(typeof o=="string")xu(this,o)&&(u=u.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Cn(this),this.i=null,o=xr(this,o),xu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Mu(o,u,f){Nu(o,u),0<f.length&&(o.i=null,o.g.set(xr(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var R=C;j[g]!==""&&(R+="="+encodeURIComponent(String(j[g]))),o.push(R)}}return this.i=o.join("&")};function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function C_(o,u){u&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Nu(this,g),Mu(this,R,f))},o)),o.j=u}function V_(o,u){const f=new Ps;if(c.Image){const g=new Image;g.onload=b(Vn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(Vn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(Vn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(Vn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function k_(o,u){const f=new Ps,g=new AbortController,R=setTimeout(()=>{g.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Vn(f,"TestPingServer: error",!1,u)})}function Vn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function D_(){this.g=new Mi}function O_(o,u,f){const g=f||"";try{Vu(o,function(R,C){let j=R;h(R)&&(j=Ye(R)),u.push(g+C+"="+encodeURIComponent(j))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function Hi(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Hi,Or),Hi.prototype.g=function(){return new zi(this.l,this.j)},Hi.prototype.i=(function(o){return function(){return o}})({});function zi(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(zi,Z),n=zi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ns(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Os(this):Ns(this),this.readyState==3&&Lu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Os(this))},n.Qa=function(o){this.g&&(this.response=o,Os(this))},n.ga=function(){this.g&&Os(this)};function Os(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ns(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Fu(o){let u="";return Ee(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ja(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Fu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function Oe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Oe,Z);var N_=/^https?$/i,x_=["POST","PUT"];n=Oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Na.g(),this.v=this.o?du(this.o):du(Na),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Uu(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(x_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of f)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$u(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Uu(this,C)}};function Uu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bu(o),Wi(o)}function Bu(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),Oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ju(this):this.bb())},n.bb=function(){ju(this)};function ju(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)Je(o.Ea,0,o);else if(ce(o,"readystatechange"),nn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var R=String(o.D).match(ku)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!N_.test(R?R.toLowerCase():"")}f=g}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var C=2<nn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Bu(o)}}finally{Wi(o)}}}}function Wi(o,u){if(o.g){$u(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=g}catch{}}}function $u(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function M_(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(G(o[g]))continue;var f=w(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Hu(o){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,o),this.cb=xs("retryDelaySeedMs",1e4,o),this.Wa=xs("forwardChannelMaxRetries",2,o),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new bu(o&&o.concurrentRequestLimit),this.Da=new D_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Zu(this,null,this.W),Gi(this)};function $a(o){if(zu(o),o.G==3){var u=o.U++,f=tn(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),Ms(o,f),u=new Pn(o,o.j,u),u.L=2,u.v=qi(tn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=eh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Bi(u)}Yu(o)}function Ki(o){o.g&&(Ha(o),o.g.cancel(),o.g=null)}function zu(o){Ki(o),o.u&&(c.clearTimeout(o.u),o.u=null),Qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Gi(o){if(!Su(o.h)&&!o.s){o.s=!0;var u=o.Ga;ae||sr(),_e||(ae(),_e=!0),Rt.add(u,o),o.B=0}}function L_(o,u){return Ru(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rs(_(o.Ga,o,u),Xu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Pn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ku(this,R,u),f=tn(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),Ms(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Fu(C)))+"&"+u:this.m&&ja(f,this.m,C)),Ba(this.h,R),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),R.T=!0,Ma(R,f,null)):Ma(R,f,u),this.G=2}}else this.G==3&&(o?Wu(this,o):this.i.length==0||Su(this.h)||Wu(this))};function Wu(o,u){var f;u?f=u.l:f=o.U++;const g=tn(o.I);Ve(g,"SID",o.K),Ve(g,"RID",f),Ve(g,"AID",o.T),Ms(o,g),o.m&&o.o&&ja(g,o.m,o.o),f=new Pn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Ku(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ba(o.h,f),Ma(f,g,u)}function Ms(o,u){o.H&&Ee(o.H,function(f,g){Ve(u,g,f)}),o.l&&Vu({},function(f,g){Ve(u,g,f)})}function Ku(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const j=["count="+f];C==-1?0<f?(C=R[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let Ae=!0;for(let Ze=0;Ze<f;Ze++){let ye=R[Ze].g;const nt=R[Ze].map;if(ye-=C,0>ye)C=Math.max(0,R[Ze].g-100),Ae=!1;else try{O_(nt,j,"req"+ye+"_")}catch{g&&g(nt)}}if(Ae){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Gu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ae||sr(),_e||(ae(),_e=!0),Rt.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rs(_(o.Fa,o),Xu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rs(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Ki(this),Qu(this))};function Ha(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Qu(o){o.g=new Pn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Ms(o,u),o.m&&o.o&&ja(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=qi(tn(u)),f.m=null,f.P=!0,Iu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ki(this),qa(this),dt(19))};function Qi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ju(o,u){var f=null;if(o.g==u){Qi(o),Ha(o),o.g=null;var g=2}else if(Ua(o.h,u))f=u.D,Pu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Li(),ce(g,new yu(g,f)),Gi(o)}else Gu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&L_(o,u)||g==2&&qa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:ur(o,5);break;case 4:ur(o,10);break;case 3:ur(o,6);break;default:ur(o,2)}}}function Xu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ur(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new lr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ji(g,"https"),qi(g),R?V_(g.toString(),f):k_(g.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),Yu(o),zu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Yu(o){if(o.G=0,o.ka=[],o.l){const u=Cu(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Zu(o,u,f){var g=f instanceof lr?tn(f):new lr(f);if(g.g!="")u&&(g.g=u+"."+g.g),$i(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new lr(null);g&&ji(C,g),u&&(C.g=u),R&&$i(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Ve(g,f,u),Ve(g,"VER",o.la),Ms(o,g),g}function eh(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Oe(new Hi({eb:f})):new Oe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function th(){}n=th.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ji(){}Ji.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){Z.call(this),this.g=new Hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!G(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Mr(this)}P(vt,Z),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){$a(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ye(o),o=f);u.i.push(new E_(u.Ya++,o)),u.G==3&&Gi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,vt.aa.N.call(this)};function nh(o){Da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(nh,Da);function rh(){Oa.call(this),this.status=1}P(rh,Oa);function Mr(o){this.g=o}P(Mr,th),Mr.prototype.ua=function(){ce(this.g,"a")},Mr.prototype.ta=function(o){ce(this.g,new nh(o))},Mr.prototype.sa=function(o){ce(this.g,new rh)},Mr.prototype.ra=function(){ce(this.g,"b")},Ji.prototype.createWebChannel=Ji.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Pg=function(){return new Ji},Rg=function(){return Li()},Sg=ar,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fi.NO_ERROR=0,Fi.TIMEOUT=8,Fi.HTTP_ERROR=6,_o=Fi,vu.COMPLETE="complete",bg=vu,pu.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",Z.prototype.listen=Z.prototype.K,$s=pu,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,Ag=Oe}).apply(typeof no<"u"?no:typeof self<"u"?self:typeof window<"u"?window:{});const mf="@firebase/firestore",_f="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new wl("@firebase/firestore");function qr(){return br.logLevel}function W(n,...e){if(br.logLevel<=de.DEBUG){const t=e.map(Ll);br.debug(`Firestore (${ys}): ${n}`,...t)}}function In(n,...e){if(br.logLevel<=de.ERROR){const t=e.map(Ll);br.error(`Firestore (${ys}): ${n}`,...t)}}function wn(n,...e){if(br.logLevel<=de.WARN){const t=e.map(Ll);br.warn(`Firestore (${ys}): ${n}`,...t)}}function Ll(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Cg(n,r,t)}function Cg(n,e,t){let r=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function we(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Cg(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dA{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new Vg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class pA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){we(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(we(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Uc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return fe(r,s);{const i=Dg(),a=yA(i.encode(vf(n,t)),i.encode(vf(e,t)));return a!==0?a:fe(r,s)}}t+=r>65535?2:1}return fe(n.length,e.length)}function vf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function yA(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return fe(n[t],e[t]);return fe(n.length,e.length)}function as(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="__name__";class Ht{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ht?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ht.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=Ht.isNumericId(e),s=Ht.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ht.extractNumericId(e).compare(Ht.extractNumericId(t)):Uc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wn.fromString(e.substring(4,e.length-2))}}class Re extends Ht{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const vA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Ht{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return vA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ef}static keyField(){return new Ge([Ef])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ng(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tf(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function If(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ga(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function dn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ga(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ri(n,e){if(!xg(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=-62135596800,Af=1e6;class Pe{static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Af);return new Pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wf)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Af}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ri(e,Pe._jsonSchema))return new Pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pe._jsonSchemaVersion="firestore/timestamp/1.0",Pe._jsonSchema={type:$e("string",Pe._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Pe(0,0))}static max(){return new se(new Pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=-1;function EA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Pe(t+1,0):new Pe(t,r));return new Xn(s,X.empty(),e)}function TA(n){return new Xn(n.readTime,n.key,di)}class Xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xn(se.min(),X.empty(),di)}static max(){return new Xn(se.max(),X.empty(),di)}}function IA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==wA)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function bA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Es(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ma.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=-1;function _a(n){return n==null}function Uo(n){return n===0&&1/n==-1/0}function SA(n){return typeof n=="number"&&Number.isInteger(n)&&!Uo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="";function RA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bf(e)),e=PA(n.get(t),e);return bf(e)}function PA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Mg:t+="";break;default:t+=i}}return t}function bf(n){return n+Mg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.comparator=e,this.root=t||et.EMPTY}insert(e,t){return new De(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new et(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rf(this.data.getIterator())}getIteratorFrom(e){return new Rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new We(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fg("Invalid base64 string: "+i):i}})(e);return new Qe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const CA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(n){if(we(!!n,39018),typeof n=="string"){let e=0;const t=CA.exec(n);if(we(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zn(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="server_timestamp",Bg="__type__",jg="__previous_value__",$g="__local_write_time__";function Ul(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bg])===null||t===void 0?void 0:t.stringValue)===Ug}function ya(n){const e=n.mapValue.fields[jg];return Ul(e)?ya(e):e}function pi(n){const e=Yn(n.mapValue.fields[$g].timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Bo="(default)";class cs{constructor(e,t){this.projectId=e,this.database=t||Bo}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database===Bo}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="__type__",kA="__max__",so={mapValue:{}},Hg="__vector__",jo="value";function er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ul(n)?4:OA(n)?9007199254740991:DA(n)?10:11:ee(28295,{value:n})}function Yt(n,e){if(n===e)return!0;const t=er(n);if(t!==er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pi(n).isEqual(pi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yn(s.timestampValue),c=Yn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Zn(s.bytesValue).isEqual(Zn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xe(s.doubleValue),c=xe(i.doubleValue);return a===c?Uo(a)===Uo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return as(n.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Sf(a)!==Sf(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Yt(a[l],c[l])))return!1;return!0})(n,e);default:return ee(52216,{left:n})}}function gi(n,e){return(n.values||[]).find((t=>Yt(t,e)))!==void 0}function ls(n,e){if(n===e)return 0;const t=er(n),r=er(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=xe(i.integerValue||i.doubleValue),l=xe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Pf(n.timestampValue,e.timestampValue);case 4:return Pf(pi(n),pi(e));case 5:return Uc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Zn(i),l=Zn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=fe(c[h],l[h]);if(d!==0)return d}return fe(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=fe(xe(i.latitude),xe(a.latitude));return c!==0?c:fe(xe(i.longitude),xe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Cf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[jo])===null||c===void 0?void 0:c.arrayValue,P=(l=_[jo])===null||l===void 0?void 0:l.arrayValue,O=fe(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:Cf(b,P)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===so.mapValue&&a===so.mapValue)return 0;if(i===so.mapValue)return 1;if(a===so.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Uc(l[p],d[p]);if(_!==0)return _;const b=ls(c[l[p]],h[d[p]]);if(b!==0)return b}return fe(l.length,d.length)})(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function Pf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Yn(n),r=Yn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Cf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ls(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function us(n){return Bc(n)}function Bc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Yn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bc(t.fields[a])}`;return s+"}"})(n.mapValue):ee(61005,{value:n})}function yo(n){switch(er(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ya(n);return e?16+yo(e):16;case 5:return 2*n.stringValue.length;case 6:return Zn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+yo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Cr(r.fields,((i,a)=>{s+=i.length+yo(a)})),s})(n.mapValue);default:throw ee(13486,{value:n})}}function Vf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jc(n){return!!n&&"integerValue"in n}function Bl(n){return!!n&&"arrayValue"in n}function kf(n){return!!n&&"nullValue"in n}function Df(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vo(n){return!!n&&"mapValue"in n}function DA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[qg])===null||t===void 0?void 0:t.stringValue)===Hg}function ti(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ti(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ti(n.arrayValue.values[t]);return e}return Object.assign({},n)}function OA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!vo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ti(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());vo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(ti(this.value))}}function zg(n){const e=[];return Cr(n.fields,((t,r)=>{const s=new Ge([t]);if(vo(r)){const i=zg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),St.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.position=e,this.inclusive=t}}function Of(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=ls(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Yt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function NA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{}class je extends Wg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new MA(e,t,r):t==="array-contains"?new UA(e,r):t==="in"?new BA(e,r):t==="not-in"?new jA(e,r):t==="array-contains-any"?new $A(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new LA(e,r):new FA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ls(t,this.value)):t!==null&&er(this.value)===er(t)&&this.matchesComparison(ls(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends Wg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ut(e,t)}matches(e){return Kg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Kg(n){return n.op==="and"}function Gg(n){return xA(n)&&Kg(n)}function xA(n){for(const e of n.filters)if(e instanceof Ut)return!1;return!0}function $c(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+us(n.value);if(Gg(n))return n.filters.map((e=>$c(e))).join(",");{const e=n.filters.map((t=>$c(t))).join(",");return`${n.op}(${e})`}}function Qg(n,e){return n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)})(n,e):n instanceof Ut?(function(r,s){return s instanceof Ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Qg(a,s.filters[c])),!0):!1})(n,e):void ee(19439)}function Jg(n){return n instanceof je?(function(t){return`${t.field.canonicalString()} ${t.op} ${us(t.value)}`})(n):n instanceof Ut?(function(t){return t.op.toString()+" {"+t.getFilters().map(Jg).join(" ,")+"}"})(n):"Filter"}class MA extends je{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class LA extends je{constructor(e,t){super(e,"in",t),this.keys=Xg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class FA extends je{constructor(e,t){super(e,"not-in",t),this.keys=Xg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class UA extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bl(t)&&gi(t.arrayValue,this.value)}}class BA extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gi(this.value.arrayValue,t)}}class jA extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gi(this.value.arrayValue,t)}}class $A extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>gi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function xf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new qA(n,e,t,r,s,i,a)}function jl(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>$c(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),_a(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>us(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>us(r))).join(",")),e.Pe=t}return e.Pe}function $l(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nf(n.startAt,e.startAt)&&Nf(n.endAt,e.endAt)}function qc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function HA(n,e,t,r,s,i,a,c){return new Pi(n,e,t,r,s,i,a,c)}function ql(n){return new Pi(n)}function Mf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Yg(n){return n.collectionGroup!==null}function ni(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new We(Ge.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new qo(i,r))})),t.has(Ge.keyField().canonicalString())||e.Te.push(new qo(Ge.keyField(),r))}return e.Te}function Gt(n){const e=ie(n);return e.Ie||(e.Ie=zA(e,ni(n))),e.Ie}function zA(n,e){if(n.limitType==="F")return xf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new qo(s.field,i)}));const t=n.endAt?new $o(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $o(n.startAt.position,n.startAt.inclusive):null;return xf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Hc(n,e){const t=n.filters.concat([e]);return new Pi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function zc(n,e,t){return new Pi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function va(n,e){return $l(Gt(n),Gt(e))&&n.limitType===e.limitType}function Zg(n){return`${jl(Gt(n))}|lt:${n.limitType}`}function Hr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Jg(s))).join(", ")}]`),_a(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>us(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>us(s))).join(",")),`Target(${r})`})(Gt(n))}; limitType=${n.limitType})`}function Ea(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Of(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,ni(r),s)||r.endAt&&!(function(a,c,l){const h=Of(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,ni(r),s))})(n,e)}function WA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function em(n){return(e,t)=>{let r=!1;for(const s of ni(n)){const i=KA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function KA(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ls(l,h):ee(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Lg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new De(X.comparator);function An(){return GA}const tm=new De(X.comparator);function qs(...n){let e=tm;for(const t of n)e=e.insert(t.key,t);return e}function nm(n){let e=tm;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function yr(){return ri()}function rm(){return ri()}function ri(){return new Vr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const QA=new De(X.comparator),JA=new We(X.comparator);function pe(...n){let e=JA;for(const t of n)e=e.add(t);return e}const XA=new We(fe);function YA(){return XA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function sm(n){return{integerValue:""+n}}function ZA(n,e){return SA(e)?sm(e):Hl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this._=void 0}}function eb(n,e,t){return n instanceof Ho?(function(s,i){const a={fields:{[Bg]:{stringValue:Ug},[$g]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ul(i)&&(i=ya(i)),i&&(a.fields[jg]=i),{mapValue:a}})(t,e):n instanceof mi?om(n,e):n instanceof _i?am(n,e):(function(s,i){const a=im(s,i),c=Lf(a)+Lf(s.Ee);return jc(a)&&jc(s.Ee)?sm(c):Hl(s.serializer,c)})(n,e)}function tb(n,e,t){return n instanceof mi?om(n,e):n instanceof _i?am(n,e):t}function im(n,e){return n instanceof zo?(function(r){return jc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ho extends Ta{}class mi extends Ta{constructor(e){super(),this.elements=e}}function om(n,e){const t=cm(e);for(const r of n.elements)t.some((s=>Yt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class _i extends Ta{constructor(e){super(),this.elements=e}}function am(n,e){let t=cm(e);for(const r of n.elements)t=t.filter((s=>!Yt(s,r)));return{arrayValue:{values:t}}}class zo extends Ta{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Lf(n){return xe(n.integerValue||n.doubleValue)}function cm(n){return Bl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function nb(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof mi&&s instanceof mi||r instanceof _i&&s instanceof _i?as(r.elements,s.elements,Yt):r instanceof zo&&s instanceof zo?Yt(r.Ee,s.Ee):r instanceof Ho&&s instanceof Ho})(n.transform,e.transform)}class rb{constructor(e,t){this.version=e,this.transformResults=t}}class pn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ia{}function lm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hm(n.key,pn.none()):new Ci(n.key,n.data,pn.none());{const t=n.data,r=St.empty();let s=new We(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kr(n.key,r,new Dt(s.toArray()),pn.none())}}function sb(n,e,t){n instanceof Ci?(function(s,i,a){const c=s.value.clone(),l=Uf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof kr?(function(s,i,a){if(!Eo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Uf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(um(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function si(n,e,t,r){return n instanceof Ci?(function(i,a,c,l){if(!Eo(i.precondition,a))return c;const h=i.value.clone(),d=Bf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof kr?(function(i,a,c,l){if(!Eo(i.precondition,a))return c;const h=Bf(i.fieldTransforms,l,a),d=a.data;return d.setAll(um(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return Eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function ib(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=im(r.transform,s||null);i!=null&&(t===null&&(t=St.empty()),t.set(r.field,i))}return t||null}function Ff(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,((i,a)=>nb(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ci extends Ia{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends Ia{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function um(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Uf(n,e,t){const r=new Map;we(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,tb(a,c,t[s]))}return r}function Bf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,eb(i,a,e))}return r}class hm extends Ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ob extends Ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=si(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=si(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=lm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pe())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,((t,r)=>Ff(t,r)))&&as(this.baseMutations,e.baseMutations,((t,r)=>Ff(t,r)))}}class zl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return QA})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new zl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,me;function ub(n){switch(n){case k.OK:return ee(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function fm(n){if(n===void 0)return In("GRPC error has no .code"),k.UNKNOWN;switch(n){case Fe.OK:return k.OK;case Fe.CANCELLED:return k.CANCELLED;case Fe.UNKNOWN:return k.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return k.INTERNAL;case Fe.UNAVAILABLE:return k.UNAVAILABLE;case Fe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Fe.NOT_FOUND:return k.NOT_FOUND;case Fe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Fe.ABORTED:return k.ABORTED;case Fe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Fe.DATA_LOSS:return k.DATA_LOSS;default:return ee(39323,{code:n})}}(me=Fe||(Fe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=new Wn([4294967295,4294967295],0);function jf(n){const e=Dg().encode(n),t=new wg;return t.update(e),new Uint8Array(t.digest())}function $f(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([t,r],0),new Wn([s,i],0)]}class Wl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hs(`Invalid padding: ${t}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Wn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Wn.fromNumber(r)));return s.compare(hb)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=jf(e),[r,s]=$f(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Wl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=jf(e),[r,s]=$f(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new wa(se.min(),s,new De(fe),An(),pe())}}class Vi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vi(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class dm{constructor(e,t){this.targetId=e,this.De=t}}class pm{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class qf{constructor(){this.ve=0,this.Ce=Hf(),this.Fe=Qe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=pe(),t=pe(),r=pe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Vi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Hf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class fb{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=io(),this.Je=io(),this.He=new De(fe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(qc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else we(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Zn(r).toUint8Array()}catch(l){if(l instanceof Fg)return wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wl(a,s,i)}catch(l){return wn(l instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&qc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=pe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new wa(e,t,this.He,this.ze,r);return this.ze=An(),this.je=io(),this.Je=io(),this.He=new De(fe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new qf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new We(fe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new We(fe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function io(){return new De(X.comparator)}function Hf(){return new De(X.comparator)}const db={asc:"ASCENDING",desc:"DESCENDING"},pb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gb={and:"AND",or:"OR"};class mb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wc(n,e){return n.useProto3Json||_a(e)?e:{value:e}}function Wo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _b(n,e){return Wo(n,e.toTimestamp())}function Qt(n){return we(!!n,49232),se.fromTimestamp((function(t){const r=Yn(t);return new Pe(r.seconds,r.nanos)})(n))}function Kl(n,e){return Kc(n,e).canonicalString()}function Kc(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function mm(n){const e=Re.fromString(n);return we(Tm(e),10190,{key:e.toString()}),e}function Gc(n,e){return Kl(n.databaseId,e.path)}function fc(n,e){const t=mm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(ym(t))}function _m(n,e){return Kl(n.databaseId,e)}function yb(n){const e=mm(n);return e.length===4?Re.emptyPath():ym(e)}function Qc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ym(n){return we(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function zf(n,e,t){return{name:Gc(n,e),fields:t.value.mapValue.fields}}function vb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(we(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:fm(h.code);return new K(d,h.message||"")})(a);t=new pm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(n,r.document.name),i=Qt(r.document.updateTime),a=r.document.createTime?Qt(r.document.createTime):se.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new To(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(n,r.document),i=r.readTime?Qt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new To([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(n,r.document),i=r.removedTargetIds||[];t=new To([],i,s,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new lb(s,i),c=r.targetId;t=new dm(c,a)}}return t}function Eb(n,e){let t;if(e instanceof Ci)t={update:zf(n,e.key,e.value)};else if(e instanceof hm)t={delete:Gc(n,e.key)};else if(e instanceof kr)t={update:zf(n,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof ob))return ee(16599,{Rt:e.type});t={verify:Gc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof zo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:_b(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(n,e.precondition)),t}function Tb(n,e){return n&&n.length>0?(we(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Qt(s.updateTime):Qt(i);return a.isEqual(se.min())&&(a=Qt(i)),new rb(a,s.transformResults||[])})(t,e)))):[]}function Ib(n,e){return{documents:[_m(n,e.path)]}}function wb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_m(n,s);const i=(function(h){if(h.length!==0)return Em(Ut.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:zr(_.field),direction:Sb(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Wc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function Ab(n){let e=yb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=vm(p);return _ instanceof Ut&&Gg(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(P){return new qo(Wr(P.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,_a(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new $o(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new $o(b,_)})(t.endAt)),HA(e,s,a,i,c,"F",l,h)}function bb(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wr(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wr(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(n):n.fieldFilter!==void 0?(function(t){return je.create(Wr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ut.create(t.compositeFilter.filters.map((r=>vm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(t.compositeFilter.op))})(n):ee(30097,{filter:n})}function Sb(n){return db[n]}function Rb(n){return pb[n]}function Pb(n){return gb[n]}function zr(n){return{fieldPath:n.canonicalString()}}function Wr(n){return Ge.fromServerFormat(n.fieldPath)}function Em(n){return n instanceof je?(function(t){if(t.op==="=="){if(Df(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NAN"}};if(kf(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Df(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NOT_NAN"}};if(kf(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(t.field),op:Rb(t.op),value:t.value}}})(n):n instanceof Ut?(function(t){const r=t.getFilters().map((s=>Em(s)));return r.length===1?r[0]:{compositeFilter:{op:Pb(t.op),filters:r}}})(n):ee(54877,{filter:n})}function Cb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,r,s,i=se.min(),a=se.min(),c=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.gt=e}}function kb(n){const e=Ab({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.Dn=new Ob}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Xn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ob{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Im=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Im,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new hs(0)}static ur(){return new hs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="LruGarbageCollector",Nb=1048576;function Gf([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class xb{constructor(e){this.Tr=e,this.buffer=new We(Gf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Mb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Kf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Es(t)?W(Kf,"Ignoring IndexedDB error during garbage collection: ",t):await vs(t)}await this.Rr(3e5)}))}}class Lb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(ma.ue);const r=new xb(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Wf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),qr()<=de.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Fb(n,e){return new Lb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.changes=new Vr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&si(r.mutation,s,Dt.empty(),Pe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=pe()){const s=yr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=qs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,pe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=An();const a=ri(),c=(function(){return ri()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),si(d.mutation,h,d.mutation.getFieldMask(),Pe.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Bb(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ri();let s=new De(((a,c)=>a-c)),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||pe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=rm();d.forEach((_=>{if(!i.has(_)){const b=lm(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Yg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(yr());let c=di,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,pe()))).next((d=>({batchId:c,changes:nm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,_){return new Pi(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=qs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&si(d.mutation,h,Dt.empty(),Pe.now()),Ea(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:kb(s.bundledQuery),readTime:Qt(s.readTime)}})(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.overlays=new De(X.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=yr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new De(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=yr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cb(t,r));let i=this.kr.get(t);i===void 0&&(i=pe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.qr=new We(Ke.Qr),this.$r=new We(Ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ke(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Re([])),r=new Ke(t,e),s=new Ke(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Re([])),r=new Ke(t,e),s=new Ke(t,e+1);let i=pe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ke(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||fe(e.Hr,t.Hr)}static Ur(e,t){return fe(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new We(Ke.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ab(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Fl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),s=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(fe);return t.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new X(i),0);let c=new We(fe);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){we(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ke(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.ni=e,this.docs=(function(){return new De(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||IA(TA(d),r)<=0||(s.has(d.key)||Ea(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Kb(this)}getSize(e){return D.resolve(this.size)}}class Kb extends Ub{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.persistence=e,this.ii=new Vr((t=>jl(t)),$l),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new Gl,this.targetCount=0,this._i=hs.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new hs(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t){this.ai={},this.overlays={},this.ui=new ma(0),this.ci=!1,this.ci=!0,this.li=new Hb,this.referenceDelegate=e(this),this.hi=new Gb(this),this.indexManager=new Db,this.remoteDocumentCache=(function(s){return new Wb(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Vb(t),this.Ti=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new zb(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new Qb(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Qb extends AA{constructor(e){super(),this.currentSequenceNumber=e}}class Ql{constructor(e){this.persistence=e,this.Ai=new Gl,this.Ri=null}static Vi(e){return new Ql(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ko{constructor(e,t){this.persistence=e,this.gi=new Vr((r=>RA(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Fb(this,t)}static Vi(e,t){return new Ko(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yo(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return FE()?8:bA(ht())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Jb;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(qr()<=de.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(qr()<=de.DEBUG&&W("QueryEngine","Query:",Hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(qr()<=de.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gt(t))):D.resolve())}ps(e,t){if(Mf(t))return D.resolve(null);let r=Gt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=zc(t,null,"F"),r=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=pe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,zc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return Mf(t)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(qr()<=de.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(t)),this.vs(e,a,t,EA(s,di)).next((c=>c)))}))}bs(e,t){let r=new We(em(e));return t.forEach(((s,i)=>{Ea(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return qr()<=de.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Hr(t)),this.gs.getDocumentsMatchingQuery(e,t,Xn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="LocalStore",Yb=3e8;class Zb{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new De(fe),this.Ms=new Vr((i=>jl(i)),$l),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function e0(n,e,t,r){return new Zb(n,e,t,r)}async function Am(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=pe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function t0(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=D.resolve();return _.forEach((P=>{b=b.next((()=>d.getEntry(l,P))).next((O=>{const x=h.docVersions.get(P);we(x!==null,48541),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=pe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function bm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function n0(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Qe.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(O,x,z){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Yb?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(_,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=An(),h=pe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(r0(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function r0(n,e,t){let r=pe(),s=pe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=An();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Xl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function s0(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function i0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new jn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Jc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Es(a))throw a;W(Xl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Qf(n,e,t){const r=ie(n);let s=se.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?D.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Gt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:pe()))).next((c=>(o0(r,WA(e),c),{documents:c,qs:i})))))}function o0(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Jf{constructor(){this.activeTargetIds=YA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a0{constructor(){this.Fo=new Jf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Jf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="ConnectivityMonitor";class Yf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Xf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function Xc(){return oo===null?oo=(function(){return 268435456+Math.round(2147483648*Math.random())})():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="RestConnection",l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class u0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Xc(),c=this.Go(e,t.toUriEncodedString());W(dc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=gs(h);return this.jo(e,c,l,r,d).then((p=>(W(dc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw wn(dc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ys})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=l0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class f0 extends u0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Xc();return new Promise(((c,l)=>{const h=new Ag;h.setWithCredentials(!0),h.listenOnce(bg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case _o.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case _o.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case _o.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const P=b==null?void 0:b.error;if(P&&P.status&&P.message){const O=(function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(G)>=0?G:k.UNKNOWN})(P.status);l(new K(O,P.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Xc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),c=Rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const P=new h0({Ho:x=>{b?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Yo:()=>p.close()}),O=(x,z,G)=>{x.listen(z,(Q=>{try{G(Q)}catch(H){setTimeout((()=>{throw H}),0)}}))};return O(p,$s.EventType.OPEN,(()=>{b||(W(st,`RPC '${e}' stream ${s} transport opened.`),P.s_())})),O(p,$s.EventType.CLOSE,(()=>{b||(b=!0,W(st,`RPC '${e}' stream ${s} transport closed`),P.__(),this.I_(p))})),O(p,$s.EventType.ERROR,(x=>{b||(b=!0,wn(st,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),P.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),O(p,$s.EventType.MESSAGE,(x=>{var z;if(!b){const G=x.data[0];we(!!G,16349);const Q=G,H=(Q==null?void 0:Q.error)||((z=Q[0])===null||z===void 0?void 0:z.error);if(H){W(st,`RPC '${e}' stream ${s} received error:`,H);const oe=H.status;let Ee=(function(y){const T=Fe[y];if(T!==void 0)return fm(T)})(oe),I=H.message;Ee===void 0&&(Ee=k.INTERNAL,I="Unknown error status: "+oe+" with message "+H.message),b=!0,P.__(new K(Ee,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,G),P.a_(G)}})),O(c,Sg.STAT_EVENT,(x=>{x.stat===Fc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Fc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.o_()}),0),P}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){return new mb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="PersistentStream";class Rm{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Sm(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Zf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Zf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class d0 extends Rm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=vb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Qt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Qc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=qc(l)?{documents:Ib(i,l)}:{query:wb(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gm(i,a.resumeToken);const h=Wc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Wo(i,a.snapshotVersion.toTimestamp());const h=Wc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=bb(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Qc(this.serializer),t.removeTarget=e,this.k_(t)}}class p0 extends Rm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Tb(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Qc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Eb(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{}class m0 extends g0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Kc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Kc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class _0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(In(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="RemoteStore";class y0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Dr(this)&&(W(Sr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await ki(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ba(h)})(this))}))})),this.Aa=new _0(r,s)}}async function ba(n){if(Dr(n))for(const e of n.da)await e(!0)}async function ki(n){for(const e of n.da)await e(!1)}function Pm(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),tu(t)?eu(t):Ts(t).x_()&&Zl(t,e))}function Yl(n,e){const t=ie(n),r=Ts(t);t.Ta.delete(e),r.x_()&&Cm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Dr(t)&&t.Aa.set("Unknown"))}function Zl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ts(n).H_(e)}function Cm(n,e){n.Ra.$e(e),Ts(n).Y_(e)}function eu(n){n.Ra=new fb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ts(n).start(),n.Aa.aa()}function tu(n){return Dr(n)&&!Ts(n).M_()&&n.Ta.size>0}function Dr(n){return ie(n).Ia.size===0}function Vm(n){n.Ra=void 0}async function v0(n){n.Aa.set("Online")}async function E0(n){n.Ta.forEach(((e,t)=>{Zl(n,e)}))}async function T0(n,e){Vm(n),tu(n)?(n.Aa.la(e),eu(n)):n.Aa.set("Unknown")}async function I0(n,e,t){if(n.Aa.set("Online"),e instanceof pm&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(n,r)}else if(e instanceof To?n.Ra.Ye(e):e instanceof dm?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await bm(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),Cm(i,l);const p=new jn(d.target,l,h,d.sequenceNumber);Zl(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(Sr,"Failed to raise snapshot:",r),await Go(n,r)}}async function Go(n,e,t){if(!Es(e))throw e;n.Ia.add(1),await ki(n),n.Aa.set("Offline"),t||(t=()=>bm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Sr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ba(n)}))}function km(n,e){return e().catch((t=>Go(n,t,e)))}async function Sa(n){const e=ie(n),t=tr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fl;for(;w0(e);)try{const s=await s0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,A0(e,s)}catch(s){await Go(e,s)}Dm(e)&&Om(e)}function w0(n){return Dr(n)&&n.Pa.length<10}function A0(n,e){n.Pa.push(e);const t=tr(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Dm(n){return Dr(n)&&!tr(n).M_()&&n.Pa.length>0}function Om(n){tr(n).start()}async function b0(n){tr(n).na()}async function S0(n){const e=tr(n);for(const t of n.Pa)e.X_(t.mutations)}async function R0(n,e,t){const r=n.Pa.shift(),s=zl.from(r,e,t);await km(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Sa(n)}async function P0(n,e){e&&tr(n).Z_&&await(async function(r,s){if((function(a){return ub(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();tr(r).N_(),await km(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Sa(r)}})(n,e),Dm(n)&&Om(n)}async function ed(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(Sr,"RemoteStore received new credentials");const r=Dr(t);t.Ia.add(3),await ki(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ba(t)}async function C0(n,e){const t=ie(n);e?(t.Ia.delete(2),await ba(t)):e||(t.Ia.add(2),await ki(t),t.Aa.set("Unknown"))}function Ts(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new d0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:v0.bind(null,n),e_:E0.bind(null,n),n_:T0.bind(null,n),J_:I0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),tu(n)?eu(n):n.Aa.set("Unknown")):(await n.Va.stop(),Vm(n))}))),n.Va}function tr(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new p0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:b0.bind(null,n),n_:P0.bind(null,n),ea:S0.bind(null,n),ta:R0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Sa(n)):(await n.ma.stop(),n.Pa.length>0&&(W(Sr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new nu(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(n,e){if(In("AsyncQueue",`${e}: ${n}`),Es(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{static emptySet(e){return new ns(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=qs(),this.sortedSet=new De(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.fa=new De(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class fs{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new fs(e,t,ns.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class k0{constructor(){this.queries=nd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=nd(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function nd(){return new Vr((n=>Zg(n)),va)}async function Nm(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new V0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ru(a,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&su(t)}async function xm(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function D0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&su(t)}function O0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function su(n){n.Da.forEach((e=>{e.next()}))}var Yc,rd;(rd=Yc||(Yc={})).Fa="default",rd.Cache="cache";class Mm{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.key=e}}class Fm{constructor(e){this.key=e}}class N0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=pe(),this.mutatedKeys=pe(),this.Xa=em(e),this.eu=new ns(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new td,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=Ea(this.query,p)?p:null,P=!!_&&this.mutatedKeys.has(_.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;_&&b?_.data.isEqual(b.data)?P!==O&&(r.track({type:3,doc:b}),x=!0):this.iu(_,b)||(r.track({type:2,doc:b}),x=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),x=!0):_&&!b&&(r.track({type:1,doc:_}),x=!0,(l||h)&&(c=!0)),x&&(b?(a=a.add(b),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,P){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:x})}};return O(b)-O(P)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new fs(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new td,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=pe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Fm(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Lm(r))})),t}uu(e){this.Ha=e.qs,this.Za=pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return fs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const iu="SyncEngine";class x0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class M0{constructor(e){this.key=e,this.lu=!1}}class L0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Vr((c=>Zg(c)),va),this.Tu=new Map,this.Iu=new Set,this.du=new De(X.comparator),this.Eu=new Map,this.Au=new Gl,this.Ru={},this.Vu=new Map,this.mu=hs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function F0(n,e,t=!0){const r=Hm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Um(r,e,t,!0),s}async function U0(n,e){const t=Hm(n);await Um(t,e,!0,!1)}async function Um(n,e,t,r){const s=await i0(n.localStore,Gt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await B0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pm(n.remoteStore,s),c}async function B0(n,e,t,r,s){n.gu=(p,_,b)=>(async function(O,x,z,G){let Q=x.view.nu(z);Q.Ds&&(Q=await Qf(O.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,Q))));const H=G&&G.targetChanges.get(x.targetId),oe=G&&G.targetMismatches.get(x.targetId)!=null,Ee=x.view.applyChanges(Q,O.isPrimaryClient,H,oe);return id(O,x.targetId,Ee._u),Ee.snapshot})(n,p,_,b);const i=await Qf(n.localStore,e,!0),a=new N0(e,i.qs),c=a.nu(i.documents),l=Vi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);id(n,t,h._u);const d=new x0(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function j0(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!va(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Yl(r.remoteStore,s.targetId),Zc(r,s.targetId)})).catch(vs)):(Zc(r,s.targetId),await Jc(r.localStore,s.targetId,!0))}async function $0(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Yl(t.remoteStore,r.targetId))}async function q0(n,e,t){const r=J0(n);try{const s=await(function(a,c){const l=ie(a),h=Pe.now(),d=c.reduce(((b,P)=>b.add(P.key)),pe());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let P=An(),O=pe();return l.Os.getEntries(b,d).next((x=>{P=x,P.forEach(((z,G)=>{G.isValidDocument()||(O=O.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,P))).next((x=>{p=x;const z=[];for(const G of c){const Q=ib(G,p.get(G.key).overlayedDocument);Q!=null&&z.push(new kr(G.key,Q,zg(Q.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,z,c)})).next((x=>{_=x;const z=x.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(b,x.batchId,z)}))})).then((()=>({batchId:_.batchId,changes:nm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new De(fe)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Di(r,s.changes),await Sa(r.remoteStore)}catch(s){const i=ru(s,"Failed to persist write");t.reject(i)}}async function Bm(n,e){const t=ie(n);try{const r=await n0(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?we(a.lu,14607):s.removedDocuments.size>0&&(we(a.lu,42227),a.lu=!1))})),await Di(t,r,e)}catch(r){await vs(r)}}function sd(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&su(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function H0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new De(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=pe().add(i),l=new wa(se.min(),new Map,new De(fe),a,c);await Bm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ou(r)}else await Jc(r.localStore,e,!1).then((()=>Zc(r,e,t))).catch(vs)}async function z0(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await t0(t.localStore,e);$m(t,r,null),jm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Di(t,s)}catch(s){await vs(s)}}async function W0(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(we(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);$m(r,e,t),jm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Di(r,s)}catch(s){await vs(s)}}function jm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function $m(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Zc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||qm(n,r)}))}function qm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Yl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ou(n))}function id(n,e,t){for(const r of t)r instanceof Lm?(n.Au.addReference(r.key,e),K0(n,r)):r instanceof Fm?(W(iu,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||qm(n,r.key)):ee(19791,{yu:r})}function K0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(iu,"New document in limbo: "+t),n.Iu.add(r),ou(n))}function ou(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Re.fromString(e)),r=n.mu.next();n.Eu.set(r,new M0(t)),n.du=n.du.insert(t,r),Pm(n.remoteStore,new jn(Gt(ql(t.path)),r,"TargetPurposeLimboResolution",ma.ue))}}async function Di(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Jl.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(_=>D.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>D.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!Es(p))throw p;W(Xl,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),P=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(P);d.Fs=d.Fs.insert(_,O)}}})(r.localStore,i))}async function G0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(iu,"User change. New user:",e.toKey());const r=await Am(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Di(t,r.Bs)}}function Q0(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return pe().add(r.key);{let s=pe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Hm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=H0.bind(null,e),e.hu.J_=D0.bind(null,e.eventManager),e.hu.pu=O0.bind(null,e.eventManager),e}function J0(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=z0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W0.bind(null,e),e}class Qo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return e0(this.persistence,new Xb,e.initialUser,this.serializer)}Du(e){return new wm(Ql.Vi,this.serializer)}bu(e){return new a0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qo.provider={build:()=>new Qo};class X0 extends Qo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){we(this.persistence.referenceDelegate instanceof Ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mb(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new wm((r=>Ko.Vi(r,t)),this.serializer)}}class el{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G0.bind(null,this.syncEngine),await C0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new k0})()}createDatastore(e){const t=Aa(e.databaseInfo.databaseId),r=(function(i){return new f0(i)})(e.databaseInfo);return(function(i,a,c,l){return new m0(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new y0(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>sd(this.syncEngine,t,0)),(function(){return Yf.C()?new Yf:new c0})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new L0(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(Sr,"RemoteStore shutting down."),i.Ia.add(5),await ki(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}el.provider={build:()=>new el};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="FirestoreClient";class Y0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=pa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(nr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(nr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ru(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function gc(n,e){n.asyncQueue.verifyOperationInProgress(),W(nr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Am(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{wn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{wn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function od(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Z0(n);W(nr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ed(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ed(e.remoteStore,s))),n._onlineComponents=e}async function Z0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(nr,"Using user provided OfflineComponentProvider");try{await gc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;wn("Error using user provided cache. Falling back to memory cache: "+t),await gc(n,new Qo)}}else W(nr,"Using default OfflineComponentProvider"),await gc(n,new X0(void 0));return n._offlineComponents}async function Wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(nr,"Using user provided OnlineComponentProvider"),await od(n,n._uninitializedComponentsProvider._online)):(W(nr,"Using default OnlineComponentProvider"),await od(n,new el))),n._onlineComponents}function eS(n){return Wm(n).then((e=>e.syncEngine))}async function tl(n){const e=await Wm(n),t=e.eventManager;return t.onListen=F0.bind(null,e.syncEngine),t.onUnlisten=j0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=U0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$0.bind(null,e.syncEngine),t}function tS(n,e,t={}){const r=new Kn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new zm({next:_=>{d.Ou(),a.enqueueAndForget((()=>xm(i,p))),_.fromCache&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new Mm(c,d,{includeMetadataChanges:!0,ka:!0});return Nm(i,p)})(await tl(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="firestore.googleapis.com",cd=!0;class ld{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gm,this.ssl=cd}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:cd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Im;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ng("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new kg;switch(r.type){case"firstParty":return new gA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ad.get(t);r&&(W("ComponentProvider","Removing Datastore"),ad.delete(t),r.terminate())})(this),Promise.resolve()}}function Qm(n,e,t,r={}){var s;n=dn(n,Ra);const i=gs(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Up(`https://${l}`),Bp("Firestore",!0)),a.host!==Gm&&a.host!==l&&wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Ir(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=CE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}n._authCredentials=new fA(new Vg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class Le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ri(t,Le._jsonSchema))return new Le(e,r||null,new X(Re.fromString(t.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:$e("string",Le._jsonSchemaVersion),referencePath:$e("string")};class gn extends rr{constructor(e,t,r){super(e,t,ql(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new X(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function nl(n,e,...t){if(n=_t(n),Og("collection","path",e),n instanceof Ra){const r=Re.fromString(e,...t);return If(r),new gn(n,null,r)}{if(!(n instanceof Le||n instanceof gn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return If(r),new gn(n.firestore,null,r)}}function Jm(n,e,...t){if(n=_t(n),arguments.length===1&&(e=pa.newId()),Og("doc","path",e),n instanceof Ra){const r=Re.fromString(e,...t);return Tf(r),new Le(n,null,new X(r))}{if(!(n instanceof Le||n instanceof gn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Tf(r),new Le(n.firestore,n instanceof gn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="AsyncQueue";class hd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Sm(this,"async_queue_retry"),this.oc=()=>{const r=pc();r&&W(ud,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=pc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=pc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Es(e))throw e;W(ud,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,In("INTERNAL UNHANDLED ERROR: ",fd(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=nu.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ee(47125,{hc:fd(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function fd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class ds extends Ra{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new hd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hd(e),this._firestoreClient=void 0,await e}}}function Xm(n,e){const t=typeof n=="object"?n:Hp(),r=typeof n=="string"?n:Bo,s=bl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=RE("firestore");i&&Qm(s,...i)}return s}function Pa(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nS(n),n._firestoreClient}function nS(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new VA(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Km(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Y0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(Qe.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ri(e,Tt._jsonSchema))return Tt.fromBase64String(e.bytes)}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:$e("string",Tt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(Ri(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:$e("string",xt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ri(e,Mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Mt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mt._jsonSchemaVersion="firestore/vectorValue/1.0",Mt._jsonSchema={type:$e("string",Mt._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=/^__.*__$/;class sS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}function Ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class cu{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Jo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ym(this.Ec)&&rS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class iS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Aa(e)}Dc(e,t,r,s=!1){return new cu({Ec:e,methodName:t,bc:r,path:Ge.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zm(n){const e=n._freezeSettings(),t=Aa(n._databaseId);return new iS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oS(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);n_("Data must be an object, but it was:",a,r);const c=e_(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=cS(e,p,t);if(!a.contains(_))throw new K(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);uS(d,_)||d.push(_)}l=new Dt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new sS(new St(c),l,h)}function aS(n,e,t,r=!1){return lu(t,n.Dc(r?4:3,e))}function lu(n,e){if(t_(n=_t(n)))return n_("Unsupported field value:",e,n),e_(n,e);if(n instanceof au)return(function(r,s){if(!Ym(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=lu(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Pe.fromDate(r);return{timestampValue:Wo(s.serializer,i)}}if(r instanceof Pe){const i=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wo(s.serializer,i)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tt)return{bytesValue:gm(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mt)return(function(a,c){return{mapValue:{fields:{[qg]:{stringValue:Hg},[jo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Hl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ga(r)}`)})(n,e)}function e_(n,e){const t={};return Lg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,((r,s)=>{const i=lu(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function t_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pe||n instanceof xt||n instanceof Tt||n instanceof Le||n instanceof au||n instanceof Mt)}function n_(n,e,t){if(!t_(t)||!xg(t)){const r=ga(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function cS(n,e,t){if((e=_t(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return r_(n,e);throw Jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const lS=new RegExp("[~\\*/\\[\\]]");function r_(n,e,t){if(e.search(lS)>=0)throw Jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ca(...e.split("."))._internalPath}catch{throw Jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+n+l)}function uS(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(uu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hS extends s_{data(){return super.data()}}function uu(n,e){return typeof e=="string"?r_(n,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hu{}class o_ extends hu{}function a_(n,e,...t){let r=[];e instanceof hu&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof Va)).length,c=i.filter((l=>l instanceof Oi)).length;if(a>1||a>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Oi extends o_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Oi(e,t,r)}_apply(e){const t=this._parse(e);return l_(e._query,t),new rr(e.firestore,e.converter,Hc(e._query,t))}_parse(e){const t=Zm(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){gd(p,d);const P=[];for(const O of p)P.push(pd(l,i,O));_={arrayValue:{values:P}}}else _=pd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||gd(p,d),_=aS(c,a,p,d==="in"||d==="not-in");return je.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function c_(n,e,t){const r=e,s=uu("where",n);return Oi._create(s,r,t)}class Va extends hu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Va(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ut.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)l_(a,l),a=Hc(a,l)})(e._query,t),new rr(e.firestore,e.converter,Hc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function pd(n,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yg(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vf(n,new X(r))}if(t instanceof Le)return Vf(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ga(t)}.`)}function gd(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function l_(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class u_{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[jo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>xe(a.doubleValue)));return new Mt(i)}convertGeoPoint(e){return new xt(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ya(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pi(e));default:return null}}convertTimestamp(e){const t=Yn(e);return new Pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);we(Tm(r),9688,{name:e});const s=new cs(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gn extends s_{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(uu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gn._jsonSchema={type:$e("string",Gn._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class ii extends Gn{data(e={}){return super.data(e)}}class Qn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ii(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:dS(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=pa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}Qn._jsonSchemaVersion="firestore/querySnapshot/1.0",Qn._jsonSchema={type:$e("string",Qn._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class fu extends u_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function pS(n){n=dn(n,rr);const e=dn(n.firestore,ds),t=Pa(e),r=new fu(e);return i_(n._query),tS(t,n._query).then((s=>new Qn(e,r,n,s)))}function h_(n,e,t){n=dn(n,Le);const r=dn(n.firestore,ds),s=fS(n.converter,e);return d_(r,[oS(Zm(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,pn.none())])}function f_(n,...e){var t,r,s;n=_t(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||dd(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(dd(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof Le)h=dn(n.firestore,ds),d=ql(n._key.path),l={next:p=>{e[a]&&e[a](gS(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=dn(n,rr);h=dn(p.firestore,ds),d=p._query;const _=new fu(h);l={next:b=>{e[a]&&e[a](new Qn(h,_,p,b))},error:e[a+1],complete:e[a+2]},i_(n._query)}return(function(_,b,P,O){const x=new zm(O),z=new Mm(b,x,P);return _.asyncQueue.enqueueAndForget((async()=>Nm(await tl(_),z))),()=>{x.Ou(),_.asyncQueue.enqueueAndForget((async()=>xm(await tl(_),z)))}})(Pa(h),d,c,l)}function d_(n,e){return(function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget((async()=>q0(await eS(r),s,i))),i.promise})(Pa(n),e)}function gS(n,e,t){const r=t.docs.get(e._key),s=new fu(n);return new Gn(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ys=s})(ms),is(new wr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new ds(new dA(r.getProvider("auth-internal")),new mA(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),zn(mf,_f,e),zn(mf,_f,"esm2017")})();const mS=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:u_,Bytes:Tt,CollectionReference:gn,DocumentReference:Le,DocumentSnapshot:Gn,FieldPath:Ca,FieldValue:au,Firestore:ds,FirestoreError:K,GeoPoint:xt,Query:rr,QueryCompositeFilterConstraint:Va,QueryConstraint:o_,QueryDocumentSnapshot:ii,QueryFieldFilterConstraint:Oi,QuerySnapshot:Qn,SnapshotMetadata:Kr,Timestamp:Pe,VectorValue:Mt,_AutoId:pa,_ByteString:Qe,_DatabaseId:cs,_DocumentKey:X,_EmptyAuthCredentialsProvider:kg,_FieldPath:Ge,_cast:dn,_logWarn:wn,_validateIsNotUsedTogether:Ng,collection:nl,connectFirestoreEmulator:Qm,doc:Jm,ensureFirestoreConfigured:Pa,executeWrite:d_,getDocs:pS,getFirestore:Xm,onSnapshot:f_,query:a_,setDoc:h_,where:c_},Symbol.toStringTag,{value:"Module"}));var _S="firebase",yS="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(_S,yS,"app");const vS={apiKey:"AIzaSyCyaNb2K79ZRWJ1QMuGhc3AcCi4L3d6zdQ",authDomain:"harrison-waldon-assignment-4.firebaseapp.com",projectId:"harrison-waldon-assignment-4",storageBucket:"harrison-waldon-assignment-4.firebasestorage.app",messagingSenderId:"564498396828",appId:"1:564498396828:web:30d3cc1cc81b2685b01f59",measurementId:"G-7BYZ1KT0TC"},ES=qp(vS),mc=Xm(ES),Ni=dE("BeverageStore",{state:()=>({user:null,_bevUnsub:null,beverages:[],currentBeverage:null,temps:["Cold","Hot"],currentTemp:"Cold",bases:[],currentBase:null,creamers:[],currentCreamer:null,syrups:[],currentSyrup:null,currentName:""}),actions:{async init(){const n=async e=>(await hA(async()=>{const{getDocs:r}=await Promise.resolve().then(()=>mS);return{getDocs:r}},void 0,import.meta.url).then(({getDocs:r})=>r(nl(mc,e)))).docs.map(r=>({id:r.id,...r.data()}));this.bases=await n("bases"),this.creamers=await n("creamers"),this.syrups=await n("syrups"),this.currentBase=this.bases[0]||null,this.currentCreamer=this.creamers[0]||null,this.currentSyrup=this.syrups[0]||null},setUser(n){if(this._bevUnsub&&(this._bevUnsub(),this._bevUnsub=null),this.user=n,!n){this.beverages=[],this.currentBeverage=null;return}const e=a_(nl(mc,"beverages"),c_("userId","==",n.uid));this._bevUnsub=f_(e,t=>{this.beverages=t.docs.map(r=>({id:r.id,...r.data()})),this.currentBeverage&&this.beverages.some(r=>r.id===this.currentBeverage.id)?this.currentBeverage=this.beverages.find(r=>r.id===this.currentBeverage.id):this.currentBeverage=null})},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentTemp||!this.currentBase||!this.currentCreamer||!this.currentSyrup||!this.currentName.trim())return"Please complete all beverage options and the name before making a beverage.";const n=`${this.user.uid}_${this.currentName.replace(/\s+/g,"_")}`,e={id:n,name:this.currentName.trim(),userId:this.user.uid,config:{temp:this.currentTemp,baseId:this.currentBase.id,creamerId:this.currentCreamer.id,syrupId:this.currentSyrup.id}},t=this.beverages.findIndex(r=>r.id===n);return t>=0?this.beverages[t]=e:this.beverages.push(e),await h_(Jm(mc,"beverages",n),e),this.currentBeverage=e,`Beverage "${e.name}" made successfully!`},showBeverage(){if(!this.currentBeverage)return;const{temp:n,baseId:e,creamerId:t,syrupId:r}=this.currentBeverage.config;this.currentTemp=n,this.currentBase=this.bases.find(s=>s.id===e)||null,this.currentCreamer=this.creamers.find(s=>s.id===t)||null,this.currentSyrup=this.syrups.find(s=>s.id===r)||null}},persist:!0}),TS=Ei({__name:"Syrup",setup(n){const e=Ni();return(t,r)=>(he(),Te("div",{class:"syrup",key:ue(e).currentSyrup.id,style:ps({backgroundColor:ue(e).currentSyrup.color})},null,4))}}),IS=Pr(TS,[["__scopeId","data-v-5c0fee87"]]),wS=Ei({__name:"Base",setup(n){const e=Ni();return(t,r)=>(he(),Te("div",{class:"baseBeverage",key:ue(e).currentBase.id,style:ps({backgroundColor:ue(e).currentBase.color,animation:"pour-tea 2s"})},null,4))}}),jr=Pr(wS,[["__scopeId","data-v-12ccc158"]]),AS={class:"froth"},bS=Ei({__name:"Creamer",setup(n){const e=Ni();return(t,r)=>(he(),Te("div",AS,[(he(),Te(Me,null,Ln(5,s=>Ue("div",{key:s,class:"foam",style:ps({backgroundColor:ue(e).currentCreamer.color})},null,4)),64))]))}}),md=Pr(bS,[["__scopeId","data-v-9662e68c"]]),SS={},RS={id:"steam"},PS={class:"stream"};function CS(n,e){return he(),Te("div",RS,[(he(),Te(Me,null,Ln(3,()=>Ue("div",PS)),64))])}const VS=Pr(SS,[["render",CS]]),kS={},DS={id:"condensation"},OS={class:"flake"};function NS(n,e){return he(),Te("div",DS,[(he(),Te(Me,null,Ln(3,()=>Ue("div",OS)),64))])}const xS=Pr(kS,[["render",NS]]),MS=Ei({__name:"Beverage",props:{isIced:{type:Boolean}},setup(n){const e=Ni();return(t,r)=>(he(),on(cA,null,{default:Ct(()=>[n.isIced?(he(),on(xS,{key:0})):(he(),on(VS,{key:1})),ue(e).currentSyrup.id==="s1"&&ue(e).currentCreamer.id==="c1"?(he(),on(hc,{key:2},{top:Ct(()=>[Be(jr)]),mid:Ct(()=>[Be(jr)]),bottom:Ct(()=>[Be(jr)]),_:1})):ue(e).currentSyrup.id==="s1"&&ue(e).currentCreamer.id!=="c1"?(he(),on(hc,{key:3},{top:Ct(()=>[Be(md)]),mid:Ct(()=>[Be(jr)]),bottom:Ct(()=>[Be(jr)]),_:1})):(he(),on(hc,{key:4},{top:Ct(()=>[Be(md)]),mid:Ct(()=>[Be(IS)]),bottom:Ct(()=>[Be(jr)]),_:1}))]),_:1}))}}),LS={key:0},FS=["value"],US={key:1},BS=["value"],jS={key:2},$S=["value"],qS={key:3},HS=["value"],zS={class:"auth-row"},WS={key:1},KS={class:"user-label"},GS={key:4},QS=["disabled"],JS={key:5,class:"status-message"},XS={key:6,style:{"margin-top":"20px"}},YS=["value"],ZS=Ei({__name:"App",setup(n){const e=Ni();Tc(()=>{e.init()});const t=gl(""),r=c=>{t.value=c,setTimeout(()=>{t.value=""},5e3)},s=async()=>{try{const c=uc(),l=new ln;await uw(c,l)}catch(c){r("Sign-in failed: "+c.message)}},i=async()=>{await HI(uc()),e.setUser(null)};Tc(()=>{const c=uc();qI(c,l=>{e.setUser(l)})});const a=async()=>{const c=await e.makeBeverage();r(c)};return(c,l)=>(he(),Te("div",null,[Be(MS,{isIced:ue(e).currentTemp==="Cold"},null,8,["isIced"]),ue(e).user?(he(),Te("ul",LS,[Ue("li",null,[(he(!0),Te(Me,null,Ln(ue(e).temps,h=>(he(),Te("label",{key:h},[Ur(Ue("input",{type:"radio",name:"temperature",value:h,"onUpdate:modelValue":l[0]||(l[0]=d=>ue(e).currentTemp=d)},null,8,FS),[[Us,ue(e).currentTemp]]),js(" "+Dn(h),1)]))),128))])])):dr("",!0),ue(e).user?(he(),Te("ul",US,[Ue("li",null,[(he(!0),Te(Me,null,Ln(ue(e).bases,h=>(he(),Te("label",{key:h.id},[Ur(Ue("input",{type:"radio",name:"bases",value:h,"onUpdate:modelValue":l[1]||(l[1]=d=>ue(e).currentBase=d)},null,8,BS),[[Us,ue(e).currentBase]]),js(" "+Dn(h.name),1)]))),128))])])):dr("",!0),ue(e).user?(he(),Te("ul",jS,[Ue("li",null,[(he(!0),Te(Me,null,Ln(ue(e).creamers,h=>(he(),Te("label",{key:h.id},[Ur(Ue("input",{type:"radio",name:"creamers",value:h,"onUpdate:modelValue":l[2]||(l[2]=d=>ue(e).currentCreamer=d)},null,8,$S),[[Us,ue(e).currentCreamer]]),js(" "+Dn(h.name),1)]))),128))])])):dr("",!0),ue(e).user?(he(),Te("ul",qS,[Ue("li",null,[(he(!0),Te(Me,null,Ln(ue(e).syrups,h=>(he(),Te("label",{key:h.id},[Ur(Ue("input",{type:"radio",name:"syrups",value:h,"onUpdate:modelValue":l[3]||(l[3]=d=>ue(e).currentSyrup=d)},null,8,HS),[[Us,ue(e).currentSyrup]]),js(" "+Dn(h.name),1)]))),128))])])):dr("",!0),Ue("div",zS,[ue(e).user?(he(),Te("div",WS,[Ue("span",KS,Dn(ue(e).user.email),1),Ue("button",{onClick:i},"Sign out")])):(he(),Te("button",{key:0,onClick:s}," Sign in with Google "))]),ue(e).user?(he(),Te("div",GS,[Ur(Ue("input",{"onUpdate:modelValue":l[4]||(l[4]=h=>ue(e).currentName=h),type:"text",placeholder:"Beverage Name"},null,512),[[eE,ue(e).currentName]]),Ue("button",{onClick:a,disabled:!ue(e).user}," 🍺 Make Beverage ",8,QS)])):dr("",!0),t.value?(he(),Te("p",JS,Dn(t.value),1)):dr("",!0),ue(e).user?(he(),Te("div",XS,[(he(!0),Te(Me,null,Ln(ue(e).beverages,h=>(he(),Te(Me,{key:h.id},[Ur(Ue("input",{type:"radio",value:h,"onUpdate:modelValue":l[5]||(l[5]=d=>ue(e).currentBeverage=d),onChange:l[6]||(l[6]=d=>ue(e).showBeverage())},null,40,YS),[[Us,ue(e).currentBeverage]]),Ue("label",null,Dn(h.name),1)],64))),128))])):dr("",!0)]))}}),p_=aE();p_.use(yE);sE(ZS).use(p_).mount("#app");
