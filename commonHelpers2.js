import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";let s=document.querySelector('[name="delay"]'),l=document.getElementsByName("state"),m=document.querySelector(".form");m.addEventListener("submit",a);function a(i){i.preventDefault();const r=Array.from(l).find(e=>e.checked).value,t=s.value;new Promise((e,n)=>{setTimeout(()=>{r==="fulfilled"?e(`✅ Fulfilled promise in ${t}ms`):n(`❌ Rejected promise in ${t}ms`)},t)}).then(e=>{o.show({message:e,position:"topRight",color:"green"})}).catch(e=>{o.show({message:e,position:"topRight",color:"red"})})}
//# sourceMappingURL=commonHelpers2.js.map
