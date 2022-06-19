var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function d(){return m(" ")}function p(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function h(e,t,n,i){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let v;function b(e){v=e}const w=[],$=[],k=[],q=[],y=Promise.resolve();let x=!1;function A(e){k.push(e)}function j(e){q.push(e)}const D=new Set;let E=0;function S(){const e=v;do{for(;E<w.length;){const e=w[E];E++,b(e),_(e.$$)}for(b(null),w.length=0,E=0;$.length;)$.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];D.has(t)||(D.add(t),t())}k.length=0}while(w.length);for(;q.length;)q.pop()();x=!1,D.clear(),b(e)}function _(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const P=new Set;let U;function M(){U={r:0,c:[],p:U}}function V(){U.r||i(U.c),U=U.p}function C(e,t){e&&e.i&&(P.delete(e),e.i(t))}function J(e,t,n,i){if(e&&e.o){if(P.has(e))return;P.add(e),U.c.push((()=>{P.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function L(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function F(e){e&&e.c()}function G(e,n,r,a){const{fragment:o,on_mount:l,on_destroy:u,after_update:c}=e.$$;o&&o.m(n,r),a||A((()=>{const n=l.map(t).filter(s);u?u.push(...n):i(n),e.$$.on_mount=[]})),c.forEach(A)}function O(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function T(e,t){-1===e.$$.dirty[0]&&(w.push(e),x||(x=!0,y.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(t,s,r,a,o,u,c,m=[-1]){const d=v;b(t);const p=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||d.$$.root};c&&c(p.root);let f=!1;if(p.ctx=r?r(t,s.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&o(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),f&&T(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();s.intro&&C(t.$$.fragment),G(t,s.target,s.anchor,s.customElement),S()}b(d)}class N{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function z(e,t,n){const i=e.slice();return i[2]=t[n],i}function I(e){let t,n,i,s,r=e[2].name+"";return{c(){t=c("li"),n=c("a"),i=m(r),f(n,"href",s=e[2].url),f(n,"class","svelte-1bfld3l"),f(t,"class","svelte-1bfld3l")},m(e,s){o(e,t,s),a(t,n),a(n,i)},p(e,t){1&t&&r!==(r=e[2].name+"")&&g(i,r),1&t&&s!==(s=e[2].url)&&f(n,"href",s)},d(e){e&&l(t)}}}function H(t){let n,i,s,r,v,b,w,$,k,q,y=t[0].bio+"",x=t[0].social,A=[];for(let e=0;e<x.length;e+=1)A[e]=I(z(t,x,e));return{c(){n=c("div"),i=c("div"),s=c("div"),r=d(),v=c("p"),b=m(y),w=d(),$=c("ul");for(let e=0;e<A.length;e+=1)A[e].c();f(s,"class","cover svelte-1bfld3l"),h(s,"background-image","url("+t[0].imgUrl+")"),f(v,"class","svelte-1bfld3l"),f($,"class","svelte-1bfld3l"),f(i,"class","modal svelte-1bfld3l"),f(n,"class","overlay svelte-1bfld3l")},m(e,l){o(e,n,l),a(n,i),a(i,s),a(i,r),a(i,v),a(v,b),a(i,w),a(i,$);for(let e=0;e<A.length;e+=1)A[e].m($,null);k||(q=p(n,"click",t[1]),k=!0)},p(e,[t]){if(1&t&&h(s,"background-image","url("+e[0].imgUrl+")"),1&t&&y!==(y=e[0].bio+"")&&g(b,y),1&t){let n;for(x=e[0].social,n=0;n<x.length;n+=1){const i=z(e,x,n);A[n]?A[n].p(i,t):(A[n]=I(i),A[n].c(),A[n].m($,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=x.length}},i:e,o:e,d(e){e&&l(n),u(A,e),k=!1,q()}}}function R(e,t,n){let{personDetails:i}=t;return e.$$set=e=>{"personDetails"in e&&n(0,i=e.personDetails)},[i,()=>n(0,i="")]}class K extends N{constructor(e){super(),B(this,e,R,H,r,{personDetails:0})}}function Y(e,t,n){const i=e.slice();return i[7]=t[n],i}function W(e,t,n){const i=e.slice();return i[10]=t[n],i}function X(e){let t,n,i;function s(){return e[3](e[10])}return{c(){t=c("li"),h(t,"background-image","url("+e[10].imgUrl+")"),f(t,"class","svelte-vgklrd")},m(e,r){o(e,t,r),n||(i=p(t,"click",s),n=!0)},p(n,i){e=n,1&i&&h(t,"background-image","url("+e[10].imgUrl+")")},d(e){e&&l(t),n=!1,i()}}}function Z(e){let t,n,i,s;function r(t){e[4](t)}let a={};return void 0!==e[2]&&(a.personDetails=e[2]),t=new K({props:a}),$.push((()=>L(t,"personDetails",r))),{c(){F(t.$$.fragment),i=m("o")},m(e,n){G(t,e,n),o(e,i,n),s=!0},p(e,i){const s={};!n&&4&i&&(n=!0,s.personDetails=e[2],j((()=>n=!1))),t.$set(s)},i(e){s||(C(t.$$.fragment,e),s=!0)},o(e){J(t.$$.fragment,e),s=!1},d(e){O(t,e),e&&l(i)}}}function Q(e){let t,n,i;function s(){return e[5](e[7])}return{c(){t=c("li"),h(t,"background-image","url("+e[7].imgUrl+")"),f(t,"class","svelte-vgklrd")},m(e,r){o(e,t,r),n||(i=p(t,"click",s),n=!0)},p(n,i){e=n,2&i&&h(t,"background-image","url("+e[7].imgUrl+")")},d(e){e&&l(t),n=!1,i()}}}function ee(e){let t,n,i;function s(t){e[6](t)}let r={};return void 0!==e[2]&&(r.personDetails=e[2]),t=new K({props:r}),$.push((()=>L(t,"personDetails",s))),{c(){F(t.$$.fragment)},m(e,n){G(t,e,n),i=!0},p(e,i){const s={};!n&&4&i&&(n=!0,s.personDetails=e[2],j((()=>n=!1))),t.$set(s)},i(e){i||(C(t.$$.fragment,e),i=!0)},o(e){J(t.$$.fragment,e),i=!1},d(e){O(t,e)}}}function te(e){let t,n,i,s,r,m,p,g,h,v,b,w,$,k,q,y,x,A,j,D,E=e[0],S=[];for(let t=0;t<E.length;t+=1)S[t]=X(W(e,E,t));let _=e[2]&&Z(e),P=e[1],U=[];for(let t=0;t<P.length;t+=1)U[t]=Q(Y(e,P,t));let L=e[2]&&ee(e);return{c(){t=c("html"),n=c("link"),i=d(),s=c("main"),r=c("h1"),r.innerHTML="V.A.R 22 <br/> 11 JUIN 2022",m=d(),p=c("h2"),p.textContent="A Propos",g=d(),h=c("p"),h.innerHTML='A l’occasion d’une après midi le 11 juin, découvrez le parcours de différent.e.s artistes numériques/makers lyonnais.e.s.\n\t\t<a href="https://fb.me/e/2jJ88Zrl3"><h3>Event Facebook</h3></a>',v=d(),b=c("h2"),b.textContent="Programmation",w=d(),$=c("ul");for(let e=0;e<S.length;e+=1)S[e].c();k=d(),_&&_.c(),q=d(),y=c("h2"),y.textContent="Organisation",x=d(),A=c("ul");for(let e=0;e<U.length;e+=1)U[e].c();j=d(),L&&L.c(),document.title="V.A.R 22",f(t,"lang","en"),f(n,"rel","icon"),f(n,"href","https://i.imgur.com/RCo4eDs.png"),f(r,"class","svelte-vgklrd"),f(p,"class","svelte-vgklrd"),f(h,"class","svelte-vgklrd"),f(b,"class","svelte-vgklrd"),f($,"class","artists svelte-vgklrd"),f(y,"class","svelte-vgklrd"),f(A,"class","team svelte-vgklrd"),f(s,"class","svelte-vgklrd")},m(e,l){a(document.head,t),a(document.head,n),o(e,i,l),o(e,s,l),a(s,r),a(s,m),a(s,p),a(s,g),a(s,h),a(s,v),a(s,b),a(s,w),a(s,$);for(let e=0;e<S.length;e+=1)S[e].m($,null);a($,k),_&&_.m($,null),a(s,q),a(s,y),a(s,x),a(s,A);for(let e=0;e<U.length;e+=1)U[e].m(A,null);a(A,j),L&&L.m(A,null),D=!0},p(e,[t]){if(5&t){let n;for(E=e[0],n=0;n<E.length;n+=1){const i=W(e,E,n);S[n]?S[n].p(i,t):(S[n]=X(i),S[n].c(),S[n].m($,k))}for(;n<S.length;n+=1)S[n].d(1);S.length=E.length}if(e[2]?_?(_.p(e,t),4&t&&C(_,1)):(_=Z(e),_.c(),C(_,1),_.m($,null)):_&&(M(),J(_,1,1,(()=>{_=null})),V()),6&t){let n;for(P=e[1],n=0;n<P.length;n+=1){const i=Y(e,P,n);U[n]?U[n].p(i,t):(U[n]=Q(i),U[n].c(),U[n].m(A,j))}for(;n<U.length;n+=1)U[n].d(1);U.length=P.length}e[2]?L?(L.p(e,t),4&t&&C(L,1)):(L=ee(e),L.c(),C(L,1),L.m(A,null)):L&&(M(),J(L,1,1,(()=>{L=null})),V())},i(e){D||(C(_),C(L),D=!0)},o(e){J(_),J(L),D=!1},d(e){l(t),l(n),e&&l(i),e&&l(s),u(S,e),_&&_.d(),u(U,e),L&&L.d()}}}function ne(e,t,n){let{artists:i}=t,{team:s}=t,r="";return e.$$set=e=>{"artists"in e&&n(0,i=e.artists),"team"in e&&n(1,s=e.team)},[i,s,r,e=>n(2,r=e),function(e){r=e,n(2,r)},e=>n(2,r=e),function(e){r=e,n(2,r)}]}return new class extends N{constructor(e){super(),B(this,e,ne,te,r,{artists:0,team:1})}}({target:document.body,props:{name:"world",artists:[{name:"Makio135",nomination:"Generative Artist",imgUrl:"https://i.imgur.com/T90Xdcd.jpg",bio:"Classic generative weirdo.",social:[{name:"Site",url:"http://makio135.com"},{name:"instagram",url:"https://www.instagram.com/makio135/"}]},{name:"Elisalien",nomination:"VJ",imgUrl:"https://i.imgur.com/1qfqGTE.jpg",bio:"D’abord dessinatrice, Elisalien trouve son bonheur dans les pratiques multimédias (Motion Design, 3D) qui sont pour elle des outils aux possibilités infinies. Elle découvre le VJ chez Exoria en 2017 et travaille aujourd'hui avec Neon. Elle mêle visuels génératifs, créations personnelles et extraits de films et anime dans un VJing coloré et psychédélique.",social:[{name:"Site",url:"https://www.elisalien.com/"},{name:"Instagram",url:"https://www.instagram.com/elisalien/"}]},{name:"Arthur Baude",nomination:"Designer / Maker / VJ",imgUrl:"https://i.imgur.com/OEqVBuK.jpg",bio:"Issu d'une formation multimédia puis arts appliqués, il a découvert le milieu 'maker' à la fin de ses études où il a pu se former en autodidacte à l'électronique interactive et à la fabrication numérique.Passionné par ces différents univers, il les intègre en permanence dans son travail en mélangeant design, création artistique et fabrication numérique. Après 3 ans passés chez nod-A en tant que designer / maker / facilitateur, il travaille désormais en freelance. Depuis 2016, il consacre une grande part de son temps professionnel à concevoir et donner des formations à la fabrication numérique et au monde maker dans sa globalité.",social:[{name:"instagram",url:"https://www.instagram.com/le_robota/"},{name:"site",url:"http://www.arthurbaude.com/"}]},{name:"Emiliano Germain",nomination:"Playtronica",imgUrl:"https://i.imgur.com/FOFqduy.jpg",bio:"Emiliano Germain est musicien et artiste intervenant auprès du jeune public. membre du Séquenceur et de Playtronica, sont travail d'intervenant se centre sur les nouvelles technologies comme vectrices d'initiation à la pratique musicale. Également DJ, il est membre du collectif lyonnais Bon Public et se produit régulièrement sur scène avec ses divers projets.",social:[{name:"SITE",url:"https://www.grame.fr/artistes-chercheurs-partenaires/emiliano-germain"},{name:"SC",url:"https://soundcloud.com/keithlimbomusic"}]},{name:"Paul Ycorne",nomination:"Playtronica",imgUrl:"https://i.imgur.com/NiedDos.jpg",bio:"Fascinée par les images et les salles obscures depuis le plus jeune âge, Pauline Millet a fait ses armes en tant que VJ aux côtés du collectif lyonnais l’Octopus depuis 2017, en parallèle de ses études dans l’audiovisuel et le cinéma. Ainsi, elle a pu performer dans de nombreuses SMAC de France, des parcs d’expositions, dans un Planétarium … Grâce notamment à l'association AADN qui oeuvre pour la promotion des arts numériques, elle transmet sa passion par des ateliers depuis maintenant 2 ans, auprès d’ados et d’adultes.",social:[{name:"instagram",url:"https://www.instagram.com/paul_icorne/"},{name:"vimeo",url:"https://vimeo.com/392215527"}]},{name:"Acqtäz",nomination:"Musician",imgUrl:"https://i.imgur.com/gPnEShM.jpg",bio:"Acqtäz fait du bruit, pour les gens qui aiment le bruit",social:[{name:"",url:"https://acqz.bandcamp.com/"},{name:"site",url:"https://www.grame.fr/artistes-chercheurs-partenaires/romain-darracq"},{name:"facebook",url:"https://www.facebook.com/acqtaz"}]},{name:"VFG",nomination:"Live Viual Artist",imgUrl:"https://i.imgur.com/ROr113O.jpg",bio:"Artiste numérique et créateur de bons moments, VFG s'efforce d'allier visuels, effets et technologies diverses pour créer toujours plus d'expériences uniques afin de sublimer la performance audiovisuelle des artistes et de la scène. \t\t\t\tDe Gandalf LSD aux fractales, de concret à abstrait, de calme à violent, de la webcam au joystick, on se retrouve pendant les kicks !",social:[{name:"instagram",url:"https://www.instagram.com/vfgarts/"},{name:"facebook",url:"https://www.facebook.com/vfgtv"},{name:"twitch",url:"https://www.twitch.tv/vfgtv"}]},{name:"Arthur Saunier",nomination:"Instrument Maker",imgUrl:"https://i.imgur.com/XMtlxhv.jpg",bio:"La bidouille c'est cool, la bidouille qui fait du son c'est mieux. Autodidacte et pas musicien pour 3 sous 😁",social:[{name:"github",url:"https://github.com/arthursaunier/Synth"}]},{name:"Pierre - WSK",nomination:"VJ / Scénographe",imgUrl:"https://i.imgur.com/AsqFuBA.jpg",bio:"WSK est un collectif d’artistes composé de 3 personnes oeuvrant dans les arts visuels et numériques. Actifs depuis 2007, les membres se sont spécialisés dans le VJing, la scénographie et le mapping. Domaines dans lesquels, ils animent régulièrement des workshops et/ou ateliers à l'intention des scolaires, des amateurs et des professionnels. Ils ont \t\t\t\tégalement développé une activité de régie générale et \t\t\t\taudiovisuelle (Régie vidéo du festival Nuits Sonores, \t\t\t\tdu Planétarium de Vaulx en Velin, régie technique \t\t\t\tpour Erasme [métropole de Lyon], mais aussi sur des \t\t\t\tprojets de portée internationale comme le régie générale \t\t\t\tdes expositions de Adrien M et Claire B).",social:[{name:"site",url:"https://www.wskvj.com/"},{name:"instagram",url:"https://www.instagram.com/wsk_vj/"}]}],team:[{name:"Yassin Siouda",nomination:"Caffeined Hacker",imgUrl:"https://i.imgur.com/ysuvk79.jpg",bio:"Yassin Siouda est un artiste polyvalent qui s'implique dans diverses activités autour des arts numériques. Musicien électronique, développeur et VJ. Co-fondateur de Bon Public, un collectif de DJs et producteurs, de TheShowMustGoLive, une plateforme d'accompagnement des artistes au streaming, et de Localhost, un lieu dédié au partage de pratiques autour des arts numériques, du mouvement maker et du creative coding.\t\t\t\tSes travaux interrogent les relations entre les individus et la technologie, et explorent les possibilités de l'intelligence artificielle appliquée au design et aux pratiques artistiques.",social:[{name:"Site",url:"https://yassin.siouda.com/"},{name:"instagram",url:"https://www.instagram.com/yassinsiouda/"}]},{name:"Marc Charton",nomination:"Creative Thinker",imgUrl:"https://i.imgur.com/Ek8bBPv.jpg",bio:"Marc Charton is a creative thinker and music enthusiast from France. He has a passion for music and creative coding, and is a member of several musical collectives and hacking groups. He is also active in the makers community, and is always looking for new and innovative ways to create and share his work with others.",social:[{name:"Site",url:"https://marc-charton.fr"},{name:"facebook",url:"https://www.facebook.com/narcomarch"},{name:"github",url:"https://github.com/marccharton"}]}]}})}();
//# sourceMappingURL=bundle.js.map