(()=>{"use strict";document.querySelector(".addTaskBtn").addEventListener("click",(()=>{!function(){const e=document.querySelector(".list");let t=document.querySelector(".addTaskBtn");t.classList.remove("visible"),t.classList.add("hidden");let n=document.createElement("form");n.classList.add("form");let c=document.createElement("label");c.innerHTML="Name";let a=document.createElement("input");a.placeholder="Name...";let l=document.createElement("label");l.innerHTML="Due Date";let r=document.createElement("input");r.setAttribute("type","date");let o=document.createElement("label");o.innerHTML="Description";let s=document.createElement("textarea");s.placeholder="Enter a brief description...";let d=document.createElement("button");d.innerHTML="Add Task",d.setAttribute("id","submitTaskBtn"),d.setAttribute("type","button"),d.addEventListener("click",(()=>{!function(e,t,n,c){const a=document.querySelector(".form");let l=e.value,r=t.value,o=n.value,s=new class{constructor(e,t,n){this.name=e,this.date=t,this.description=n}}(l,r,o);c.push(s),console.log(c),a.reset()}(a,r,s,tasks),e.removeChild(n),t.classList.add("visible")})),n.append(c,a,l,r,o,s,d),e.appendChild(n)}()})),function(e){let t=document.querySelector(".list");const n=document.createElement("div");n.setAttribute("class","taskContainer"),[{name:"hola",date:"2020-12-02",descr:"Piiza"},{name:"chao"}].forEach((e=>{const t=document.createElement("div");t.setAttribute("class","taskDiv");const c=document.createElement("p");c.innerHTML=e.name;const a=document.createElement("date");a.innerHTML=e.date;const l=document.createElement("p");l.innerHTML=e.descr;const r=document.createElement("button");r.innerHTML="Done";const o=document.createElement("button");o.innerHTML="Del",t.append(c,a,l,r,o),n.append(t)})),t.append(n)}()})();