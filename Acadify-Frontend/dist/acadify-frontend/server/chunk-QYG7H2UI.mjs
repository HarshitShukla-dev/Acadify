import './polyfills.server.mjs';
var w=Object.create;var n=Object.defineProperty,x=Object.defineProperties,y=Object.getOwnPropertyDescriptor,z=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,B=Reflect.get;var l=(b,a)=>(a=Symbol[b])?a:Symbol.for("Symbol."+b);var r=(b,a,c)=>a in b?n(b,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):b[a]=c,D=(b,a)=>{for(var c in a||={})o.call(a,c)&&r(b,c,a[c]);if(m)for(var c of m(a))t.call(a,c)&&r(b,c,a[c]);return b},E=(b,a)=>x(b,z(a));var F=(b=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(b,{get:(a,c)=>(typeof require<"u"?require:a)[c]}):b)(function(b){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+b+'" is not supported')});var G=(b,a)=>{var c={};for(var d in b)o.call(b,d)&&a.indexOf(d)<0&&(c[d]=b[d]);if(b!=null&&m)for(var d of m(b))a.indexOf(d)<0&&t.call(b,d)&&(c[d]=b[d]);return c};var H=(b,a)=>()=>(a||b((a={exports:{}}).exports,a),a.exports),I=(b,a)=>{for(var c in a)n(b,c,{get:a[c],enumerable:!0})},C=(b,a,c,d)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of A(a))!o.call(b,e)&&e!==c&&n(b,e,{get:()=>a[e],enumerable:!(d=y(a,e))||d.enumerable});return b};var J=(b,a,c)=>(c=b!=null?w(s(b)):{},C(a||!b||!b.__esModule?n(c,"default",{value:b,enumerable:!0}):c,b));var K=(b,a,c)=>B(s(b),c,a);var L=(b,a,c)=>new Promise((d,e)=>{var g=f=>{try{i(c.next(f))}catch(j){e(j)}},h=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(g,h);i((c=c.apply(b,a)).next())}),u=function(b,a){this[0]=b,this[1]=a},M=(b,a,c)=>{var d=(h,i,f,j)=>{try{var p=c[h](i),q=(i=p.value)instanceof u,v=p.done;Promise.resolve(q?i[0]:i).then(k=>q?d(h==="return"?h:"next",i[1]?{done:k.done,value:k.value}:k,f,j):f({value:k,done:v})).catch(k=>d("throw",k,f,j))}catch(k){j(k)}},e=h=>g[h]=i=>new Promise((f,j)=>d(h,i,f,j)),g={};return c=c.apply(b,a),g[l("asyncIterator")]=()=>g,e("next"),e("throw"),e("return"),g},N=b=>{var a=b[l("asyncIterator")],c=!1,d,e={};return a==null?(a=b[l("iterator")](),d=g=>e[g]=h=>a[g](h)):(a=a.call(b),d=g=>e[g]=h=>{if(c){if(c=!1,g==="throw")throw h;return h}return c=!0,{done:!1,value:new u(new Promise(i=>{var f=a[g](h);if(!(f instanceof Object))throw TypeError("Object expected");i(f)}),1)}}),e[l("iterator")]=()=>e,d("next"),"throw"in a?d("throw"):e.throw=g=>{throw g},"return"in a&&d("return"),e};export{D as a,E as b,F as c,G as d,H as e,I as f,J as g,K as h,L as i,u as j,M as k,N as l};