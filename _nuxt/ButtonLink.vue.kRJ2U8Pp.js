import{_ as i}from"./nuxt-link.TUTGXjcM.js";import{_ as u}from"./SButton.vue.vO0GzXzH.js";import{d as p,af as d,A as f,b as c,B as h,w as m,W as _,C as n,n as B}from"./entry.F814_7cu.js";const C=p({__name:"ButtonLink",props:{href:{},rounded:{type:Boolean},size:{default:"lg"},white:{type:Boolean},outline:{type:Boolean},link:{type:Boolean}},setup(o){const a=o,s=i,r=d(),t=f(()=>a.href.startsWith("http"));return(e,k)=>{const l=u;return c(),h(l,{external:n(t),class:B(["underline-transparent hover:underline-current",[e.rounded?"rounded-full!":""]]),to:n(t)?e.href:n(r)(e.href),as:n(s),size:e.size,variant:e.link?"link":e.outline?"outline":e.white?"white":"gradient"},{default:m(()=>[_(e.$slots,"default")]),_:3},8,["external","to","as","size","variant","class"])}}});export{C as _};