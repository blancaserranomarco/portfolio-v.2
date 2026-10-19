/* =========================================================
   APP — focus choice, selected work and rendering
   ========================================================= */
const UI = {
 nav_home:['Home','Inicio'], menu:['Menu','Menú'], lang_label:['Language','Idioma'], nav_work:['Work','Trabajo'], nav_about:['About','Sobre mí'], nav_contact:['Contact','Contacto'],
 tag:['Personalise your experience','Personaliza tu experiencia'],
 fq:['What brings you here?','¿Qué te trae por aquí?'], fp:['Pick a focus and I’ll bring the most relevant work to the front.','Elige un foco y pongo delante el trabajo más relevante.'],
 explore:['Just exploring? See all work','¿Solo curioseando? Ver todo el trabajo'], choose:['Choose a focus','Elige un foco'],
 open_roles:['Open to senior roles','Abierta a roles senior'], prev_at:['Previously at','Antes en'], talk:['Let’s talk','Hablemos'], redo:['Change my welcome','Cambiar mi bienvenida'], seework:['See my work','Ver mi trabajo'],
 sel_h:['Selected work','Trabajo destacado'], w_eb:['Experience & projects','Experiencia y proyectos'], w_h:['My work','Mi trabajo'], wt_proj:['By project','Por proyectos'], wt_proj_s:['All my projects at a glance','Vista de todos los proyectos'], wt_co:['By company','Por empresas'], wt_co_s:['Companies and their projects','Empresas y proyectos asociados'], show:['Show','Ver'], all7:['See all 7 projects','Ver los 7 proyectos'],
 why:['Why it fits this focus','Por qué encaja con este foco'], open:['Open case','Abrir caso'], in_sel:['In your selection','En tu selección'],
 work_h:['All work','Todo el trabajo'], whyopen:['Why open this case','Por qué abrir este caso'], before:['Before product design','Antes del diseño de producto'], work_p:['All my experience and projects.','Toda mi experiencia y proyectos.'],
 projects:['projects','proyectos'], project:['project','proyecto'],
 depth:['Reading depth','Profundidad de lectura'], quick:['Quick read','Lectura rápida'], fullstory:['Full story','Historia completa'],
 story:['The full story','La historia completa'], story_hint:['Context, decisions, results and learnings','Contexto, decisiones, resultados y aprendizajes'],
 hide:['Hide','Ocultar'], showx:['Show','Mostrar'], learn:['What I learned','Qué aprendí'], jump:['Sections','Secciones'], close_img:['Close image','Cerrar imagen'], overview:['Overview','Resumen'],
 hyp:['Hypothesis','Hipótesis'], res:['Result','Resultado'], lrn:['Learning','Aprendizaje'],
 full:['Original case in Notion','Caso original en Notion'], in30:['In 30 seconds','En 30 segundos'], v_schema:['Diagram','Esquema'], v_flow:['Real flow','Flujo real'], v_label:['View','Vista'], fl_pause:['Pause','Pausar'], fl_play:['Play','Reproducir'], fl_step:['Step','Paso'], qz_tag:['Your turn · quick quiz','Tu turno · mini quiz'], qz_hint:['Pick an option to reveal the result','Elige una opción para descubrir el resultado'], qz_pick:['Choose this one','Elegir esta'], qz_choose:['Choose','Elegir'], see_calc:['See how it’s calculated','Ver cómo se calcula'], ask_h:['Ask me','Pregúntame'], ask_sub:['What people usually ask me about this project.','Lo que suelen preguntarme de este proyecto.'], ask_l:['Questions about this case','Preguntas sobre el caso'], draft:['Coming soon','Pendiente de completar'],
 d_no:['Ruled out','Descartada'], d_later:['Postponed','Aplazada'], d_test:['Tested','Probada'], d_testno:['Tested, no impact','Probada, sin impacto'], d_win:['Winner','Ganadora'], th_opt:['Option','Opción'], th_dec:['Decision','Decisión'], th_why:['Why','Por qué'], close:['Close case','Cerrar caso'], prev:['Previous case','Caso anterior'], next_c:['Next case','Caso siguiente'],
 about_h:['Who I am','Quién soy'], strengths:['What I’m good at','En qué soy buena'], xp:['Experience','Experiencia'], edu:['Education','Formación'],
 contact_h:['Let’s talk','Hablemos'], contact_p:['Open to senior product design roles.','Abierta a roles senior de diseño de producto.'],
 copy:['Copy','Copiar'], copied:['Copied','Copiado'], copy_mail:['Copy email','Copiar email'], mail_copied:['Email copied!','¡Email copiado!'], me_alt:['Illustrated portrait of Blanca','Retrato ilustrado de Blanca'], me_poke:['Poke Blanca','Pincha a Blanca'], linkedin:['Visit my LinkedIn','Visita mi LinkedIn'], or_write:['Prefer another way?','¿Prefieres otro canal?'],
 form_h:['Write to me','Escríbeme'], form_p:['An opportunity, feedback on a case or just a hello. I reply to every message.','Una oportunidad, feedback sobre un caso o simplemente un hola. Respondo a todos los mensajes.'], ct_eb:['Contact','Contacto'],
 f_topic:['What is it about?','¿De qué se trata?'], f_t1:['Portfolio feedback','Feedback del portfolio'], f_t2:['A role or project','Un rol o proyecto'], f_t3:['Just saying hi','Solo saludar'],
 f_msg:['What would you like to tell me?','¿Qué quieres contarme?'], f_msg_ph:['A role you’re hiring for, feedback on a case or just a hello. I read every message.','Un puesto que quieres cubrir, feedback sobre un caso o simplemente un hola. Leo todos los mensajes.'],
 f_name:['Name (optional)','Nombre (opcional)'], f_mail:['Your email, if you’d like a reply (optional)','Tu email, si quieres respuesta (opcional)'],
 f_send:['Send message','Enviar mensaje'], f_sending:['Sending…','Enviando…'], f_ok:['Message sent. Thank you, I’ll read it soon.','Mensaje enviado. Gracias, lo leeré pronto.'],
 f_err_empty:['Write a message before sending.','Escribe un mensaje antes de enviar.'], f_err_mail:['That email doesn’t look right. Check it or leave it empty.','Ese email no parece correcto. Revísalo o déjalo vacío.'],
 f_fail:['It couldn’t be sent from here. Open it in your email app, or copy it and send it to my address.','No se ha podido enviar desde aquí. Ábrelo en tu app de correo o cópialo y envíalo a mi dirección.'],
 f_open:['Open in email app','Abrir en el correo'], f_copy:['Copy message','Copiar mensaje'],
 foot:['Designed and built by Blanca Serrano Marco, 2026.','Diseñado y construido por Blanca Serrano Marco, 2026.']
};
/* Which interest explains a project under each focus */
const FOCUS_REASON = { growth:['experimentation'], systems:['complex','systems'], build:['ai','zero','b2b'], all:[] };

/* ---------- Helpers ---------- */
const store = { get(k){try{return JSON.parse(localStorage.getItem('bs_'+k))}catch(e){return null}}, set(k,v){try{localStorage.setItem('bs_'+k,JSON.stringify(v))}catch(e){}} };
try{ localStorage.removeItem('bs_focus'); }catch(e){}
const INTRO=store.get('intro')||null;
const S = { lang: (INTRO&&INTRO.lang)||'en', who:(INTRO&&INTRO.who)||'', introStep:0, introOpen:!INTRO,
  focus: (INTRO&&INTRO.focus)||null, depth: store.get('depth') || 'full', touched: false,
  openId:null, lastFocus:null, topic:'t1', form:{name:'',mail:'',msg:''} };
if(S.focus && !FOCUS[S.focus]) S.focus=null;
const tr = v => Array.isArray(v) ? v[S.lang==='es'?1:0] : (v ?? '');
const u = k => tr(UI[k]);
const $ = (s,r=document)=>r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const X = v => esc(tr(v));
const fmt = v => S.lang==='es' ? String(v).replace(/(\d)\.(\d)/g,'$1,$2').replace(/(\d),(\d{3})(?!\d)/g,'$1.$2') : String(v);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const P = PROJECTS, I = INTERESTS, byId = id => P.find(p=>p.id===id);
const yr = p => String(p.year).slice(0,4);
const chrono = () => P.slice().sort((a,b)=>yr(b)-yr(a));
const curF = () => S.focus || 'all';
const selIds = () => curF()==='all' ? chrono().map(p=>p.id) : FOCUS[curF()].ids;
const caseOrder = () => { const s=selIds(); return [...s.map(byId), ...chrono().filter(p=>!s.includes(p.id))]; };
const topInterests = (p,n=2) => Object.keys(p.w).sort((a,b)=>p.w[b]-p.w[a]).slice(0,n);
function whyFor(p){ if(!S.focus) return null; const ks=FOCUS_REASON[S.focus]; const k=ks.find(i=>p.reasons[i]); return k?tr(p.reasons[k]):null; }
const metric = p => p.cover ? {v:p.cover.v, t:p.cover.t} : {v:p.nums[0].v, t:p.nums[0].t};

/* ---------- Pieces ---------- */
const spark = '<svg class="spark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5l2.3 7.2 7.2 2.3-7.2 2.3L12 20.5l-2.3-7.2L2.5 11l7.2-2.3z"/></svg>';
const HAND = ['...XXXXXXXXXX.','..XooooooooooX','..XooXXXXXXXX.','XXXooX........','XooooXXXX.....','XoooooooX.....','XooooXXXX.....','XoooooooX.....','XooooXXX......','.XoooooX......','..XXXXX.......'];
const hand = (cls='') => { let r=''; HAND.forEach((row,y)=>[...row].forEach((c,x)=>{ if(c!=='.') r+=`<rect x="${x}" y="${y}" width="1" height="1" class="${c==='X'?'hx':'ho'}"/>`; }));
  return `<svg class="hand ${cls}" viewBox="0 0 14 11" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`; };
const sticker = k => { const g=TAGS[k]; return typeof g==='string' ? `<span class="sticker seg">${g}</span>` : `<span class="sticker" style="--tone:var(${g.tone})">${g.s?`<span class="tl">${X(g.t)}</span><span class="ts" aria-hidden="true">${X(g.s)}</span>`:X(g.t)}</span>`; };
const tagsHTML = p => `<span class="tags">${(p.tags||[]).map(sticker).join('')}</span>`;
const cover = (p,rank) => `<div class="cover" style="--tone:var(${p.tone})">${rank?`<span class="rk">${rank}</span>`:''}${!p.cover?`<img src="${p.img}" alt="" loading="lazy">`:`<div class="type"><strong>${esc(fmt(p.cover.v))}</strong><span>${X(p.cover.t)}</span></div>`}</div>`;
const icon = {
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  l:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
  r:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
  ne:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>',
  down:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
  growth:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5l2.2 6.8 6.8 2.2-6.8 2.2L12 20.5l-2.2-6.8L3 11.5l6.8-2.2z"/></svg>'
};

/* ---------- Page ---------- */
const quizSparks=()=>{ const P=[[-3,-30,20,'--butter',0],[22,-46,13,'--lilac',120],[48,-28,18,'--mint',220],[70,-40,14,'--pink',300],[101,52,16,'--sky',380],[-5,78,14,'--pink',460]];
  return `<span class="h1-sparks" aria-hidden="true">${P.map(([x,y,sz,c,d])=>`<svg class="h1-sp" viewBox="0 0 24 24" style="--x:${x}%;--y:${y}%;--s:${sz}px;--d:${d}ms"><path d="M12 1.5l2.3 7.2 7.2 2.3-7.2 2.3L12 20.5l-2.3-7.2L2.5 11l7.2-2.3z" style="fill:var(${c})" stroke="#1B1724" stroke-width="1.4" stroke-linejoin="round"/></svg>`).join('')}</span>`; };
const nameSparks=()=>{ const P=[[-8,-34,24,'--butter',0],[ 40,-52,15,'--lilac',90],[ 88,-36,26,'--mint',180],[103, 30,16,'--pink',260],[ 34, 70,14,'--sky',330],[-16, 40,18,'--butter',420]];
  return `<span class="h1-sparks" aria-hidden="true">${P.map(([x,y,sz,c,d])=>`<svg class="h1-sp" viewBox="0 0 24 24" style="--x:${x}%;--y:${y}%;--s:${sz}px;--d:${d}ms"><path d="M12 1.5l2.3 7.2 7.2 2.3-7.2 2.3L12 20.5l-2.3-7.2L2.5 11l7.2-2.3z" style="fill:var(${c})" stroke="#1B1724" stroke-width="1.4" stroke-linejoin="round"/></svg>`).join('')}</span>`; };
function heroHTML(){
  const h=tr(PROFILE.hello);
  return `<div class="wrap"><section class="hero">
    <div class="hero-txt">
      <p class="hero-role">${X(PROFILE.role)}</p>
      <h1 class="hello">${S.who?`<span class="h1a h1n">${S.lang==='es'?'Hola':'Hi'} <span class="h1-name">${esc(S.who)}${nameSparks()}</span>,</span>`:`<span class="h1a">${S.lang==='es'?'Hola, soy Blanca.':'Hi, I’m Blanca.'}</span>`} <span class="h1b">${esc(S.who?h[1].charAt(0).toLowerCase()+h[1].slice(1):h[1])}</span> <span class="h1c"><em>${esc(h[2])}</em>.${spark}</span></h1>
      <p class="hello-sub"><strong class="lead-in">${X(PROFILE.lead)}</strong> ${X(PROFILE.intro)}</p>
      <div class="hero-meta"><button type="button" class="deck-btn" data-deck><span class="fan" aria-hidden="true"><i></i><i></i><i>?</i></span><span><b>${dk('h_t')}</b><small>${dk('h_s')}</small></span></button></div>
    </div>
    <div class="cta ice-hero" id="cta">
      <span class="sticker tag-p" style="--tone:var(--butter)">${spark}${X(ICE.hero_tag)}</span>
      <h2>${X(ICE.hero_h)}</h2>
      <p>${X(ICE.hero_p)}</p>
      <p class="ice-msg" id="ice-msg" aria-live="polite"></p>
      <div class="ice-stage"><canvas id="ice-cv" aria-label="${X(ICE.draw)}"></canvas><p class="ice-hint" id="ice-hint">${CUR_IC}${X(ICE.draw)}</p></div>
      <div class="ice-foot"><span class="ice-actions"><button class="link" data-act="ice-auto">${X(ICE.auto)}</button></span></div>
    </div>
  </section></div>`;
}
function chipsHTML(){
  return `<div class="filters" role="group" aria-label="${esc(u('fq'))}">${['all','growth','systems','build'].map(k=>`<button class="chip" data-focus="${k}" aria-pressed="${curF()===k}">${X(FOCUS[k].t)}</button>`).join('')}</div>`;
}
/* ---------- Selected work illustrations (viewBox 600x230) ---------- */
const ilSh = (x,y,w,h,r=14)=>`<rect class="ink" x="${x+6}" y="${y+6}" width="${w}" height="${h}" rx="${r}"/>`;
function ilCard(x,y,w,h,rot,fill,inner,r=14){
  const f = fill.startsWith('--') ? `style="fill:var(${fill})"` : `class="crd"`;
  return `<g transform="rotate(${rot} ${x+w/2} ${y+h/2})">${ilSh(x,y,w,h,r)}<rect ${f} class="st" x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>${inner}</g>`;
}
const ilStar = (cx,cy,s)=>`<path class="ink" d="M${cx} ${cy-s}Q${cx} ${cy} ${cx+s} ${cy}Q${cx} ${cy} ${cx} ${cy+s}Q${cx} ${cy} ${cx-s} ${cy}Q${cx} ${cy} ${cx} ${cy-s}Z"/>`;
const ilStarO = (cx,cy,s)=>`<path class="ln" style="stroke-width:1.8" d="M${cx} ${cy-s}Q${cx} ${cy} ${cx+s} ${cy}Q${cx} ${cy} ${cx} ${cy+s}Q${cx} ${cy} ${cx-s} ${cy}Q${cx} ${cy} ${cx} ${cy-s}Z"/>`;
const ilTx = (x,y,s,t,cls='b',extra='')=>`<text x="${x}" y="${y}" font-size="${s}" class="${cls}" ${extra}>${t}</text>`;
const ilBar = (x,y,w,h=8)=>`<rect class="soft" x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}"/>`;
const ilTick = (x,y,s=1)=>`<path class="ln" style="stroke-width:${2.4*s}" d="M${x} ${y}l${5*s} ${5*s}l${10*s} -${11*s}"/>`;

const ILL = {
discount: ()=> ilCard(34,38,118,142,-9,'',ilTx(93,112,46,'A/B','d','text-anchor="middle"')+ilTx(93,152,11,'TEST 01','cap','text-anchor="middle"'))
  + ilCard(150,54,118,142,2,'',ilTx(209,128,46,'A/B','d','text-anchor="middle"')+ilTx(209,168,11,'TEST 02','cap','text-anchor="middle"'))
  + ilCard(264,30,118,142,11,'',ilTx(323,104,46,'A/B','d','text-anchor="middle"')+ilTx(323,144,11,'TEST 03','cap','text-anchor="middle"'))
  + `<g transform="rotate(-6 480 160)">${ilSh(396,116,170,88,16)}<path class="st" style="fill:var(--butter)" d="M396 132a16 16 0 0 1 16-16h138a16 16 0 0 1 16 16v14a14 14 0 0 0 0 28v14a16 16 0 0 1-16 16H412a16 16 0 0 1-16-16v-14a14 14 0 0 0 0-28z"/>
     <line class="ln" style="stroke-dasharray:5 6" x1="448" y1="124" x2="448" y2="196"/>
     ${ilTx(422,170,30,'%','d','text-anchor="middle"')}${ilTx(507,150,11,'PURCHASE','cap','text-anchor="middle"')}${ilTx(507,176,22,'voucher','d','text-anchor="middle"')}</g>`
  + ilStar(530,62,16),

taxdown: ()=> ilCard(36,22,290,180,-4,'',
      `<rect class="st" style="fill:var(--sky)" x="62" y="44" width="40" height="40" rx="10"/>`+ilTx(82,71,18,'P','d','text-anchor="middle"')
      +ilTx(114,60,11,'YOUR PARTNER','cap')+ilBar(114,70,84,7)
      +ilTx(62,116,23,'Partner discount','d')+ilTx(62,138,12,'Included in your plan','b','opacity=".7"')
      +`<rect class="ink" x="62" y="152" width="176" height="34" rx="17"/>`+ilTx(150,174,13,'Apply discount ✓','b w','text-anchor="middle"'))
  + ilCard(370,40,184,160,7,'--butter', ilTx(392,72,11,'PREMIUM PLAN','cap')+ilTx(392,104,28,'Premium','d')
      +[0,1,2].map(k=>ilTick(394,122+k*22,.8)+ilBar(418,120+k*22,[96,80,104][k],7)).join(''))
  + ilStar(548,40,16),

health: ()=> ilCard(40,36,262,150,-4,'',`<path class="st" style="fill:var(--mint)" d="M104 66l34 12v32c0 22-15 36-34 44c-19-8-34-22-34-44V78z"/>`+ilTick(91,106,1.3)
    +ilTx(158,96,23,'Health','d')+ilTx(158,122,23,'insurance','d')+ilTx(158,150,12,'COVERED ✓','cap')+ilBar(158,162,100,6))
  + ilCard(346,30,96,46,7,'',`<circle class="crd st" cx="364" cy="53" r="6"/>`+ilTx(380,63,24,'ES','d'))
  + ilCard(410,92,96,46,-6,'--sky',`<circle class="crd st" cx="428" cy="115" r="6"/>`+ilTx(444,125,24,'MX','d'))
  + ilCard(352,156,96,46,4,'--butter',`<circle class="crd st" cx="370" cy="179" r="6"/>`+ilTx(386,189,24,'PT','d'))
  + `<path class="ln" style="stroke-dasharray:4 6" d="M302 70C330 60 330 50 346 54M302 120c40 0 60 0 108 -6M302 160c20 10 30 20 50 18"/>`
  + ilStar(552,52,16),

renewals: ()=> { let g=''; for(let r=0;r<4;r++) for(let c=0;c<4;c++){ const x=68+c*44, y=84+r*26; g+=`<rect class="st" style="fill:var(--pink)" x="${x}" y="${y}" width="30" height="18" rx="5"/>`+ilTick(x+8,y+7,.7); }
  return ilCard(40,28,236,170,-4,'',`<path class="ink" d="M40 42a14 14 0 0 1 14-14h208a14 14 0 0 1 14 14v26H40z"/>`+ilTx(158,54,12,'RENEWALS · 16 SCENARIOS','cap w','text-anchor="middle"')+g)
  + `<g transform="rotate(5 452 108)">${ilSh(334,54,232,104,26)}<rect class="crd st" x="334" y="54" width="232" height="104" rx="26"/>
     <path class="crd st" d="M368 156l-6 26l30 -24"/><rect class="crd" x="364" y="150" width="34" height="8"/>
     ${ilTx(354,100,30,'89%','d')}${ilTx(430,96,13,'positive feedback','b')}<line class="ln" style="stroke-width:1.5;opacity:.25" x1="354" y1="112" x2="546" y2="112"/>${ilTx(354,142,30,'−50%','d')}${ilTx(440,138,13,'incidents','b')}</g>`
  + ilStar(540,200,14); },

benefits: ()=> { const pills=[['🍎','Free fruit',20,24,134],['🏷️','Product discounts',166,24,190],['🌴','Extra days off',20,76,166],['👨‍👩‍👧','Family bonuses',198,76,166],['🎟️','Event tickets',20,128,158],['🧠','Mental health',190,128,158]];
  let g=pills.map(([e,l,x,y,w],k)=>{ const r=k%2?2:-2; return `<g transform="rotate(${r} ${x+w/2} ${y+20})"><rect class="ink" x="${x+4}" y="${y+4}" width="${w}" height="40" rx="20"/><rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="#2B2456" class="st"/><text x="${x+16}" y="${y+26}" font-size="16">${e}</text><text x="${x+42}" y="${y+26}" font-size="14.5" class="b w">${l}</text></g>`; }).join('');
  g+=`<rect x="20" y="180" width="186" height="40" rx="20" fill="none" class="ln" style="stroke-dasharray:6 6"/>`+ilTx(113,205,14,'+ Create your own','b','text-anchor="middle"');
  return g + ilCard(404,44,156,136,7,'',ilTx(424,82,11,'UNIQUE BENEFITS','cap')+ilTx(420,136,50,'+400','d')+ilTx(424,160,12,'created in','b')+ilTx(424,175,12,'three countries','b'))
  + ilStar(562,30,14); },

banners: ()=> { const cols=['--sky','--butter','--pink','--mint','--lilac','--peach']; let g='';
  cols.forEach((c,i)=>{ const x=60+(i%3)*94, y=50+Math.floor(i/3)*72; g+=`<rect class="st" style="fill:var(${c})" x="${x}" y="${y}" width="82" height="58" rx="8"/>`
    + (i%2 ? `<circle class="crd st" cx="${x+60}" cy="${y+29}" r="12"/>`+ilBar(x+10,y+20,30,6)+ilBar(x+10,y+32,20,6) : ilBar(x+10,y+16,52,7)+`<rect class="ink" x="${x+10}" y="${y+34}" width="30" height="12" rx="6"/>`); });
  return ilCard(40,30,316,176,-3,'',g)
  + ilCard(392,52,118,148,6,'',`<path class="ln" d="M478 52v26h32"/>`+[0,1,2,3,4].map(k=>`<rect class="ink" x="${k%2?452:444}" y="${62+k*14}" width="14" height="8" rx="2"/>`).join('')
    +ilTx(451,160,24,'.ZIP','d','text-anchor="middle"')+ilTx(451,184,11,'72 BANNERS','cap','text-anchor="middle"'))
  + ilStar(548,48,20)+ilStar(560,176,10); },

playtomic: ()=> ilCard(40,24,282,178,-4,'',`<circle class="st" style="fill:var(--mint)" cx="78" cy="60" r="17"/>`+ilBar(104,50,96)+ilBar(104,66,60,6)
    +ilTx(64,104,11,'MATCH RESULT','cap')+ilTx(64,142,34,'6–4 · 6–3','d')
    +ilTx(64,182,15,'♥ 128   ·   ↻ 14 shares','b'))
  + `<g transform="rotate(12 438 92)"><circle class="ink" cx="444" cy="98" r="48"/><circle class="st" style="fill:var(--butter)" cx="438" cy="92" r="48"/>
     <path class="ln" d="M400 70c26 14 26 44 0 58M476 66c-26 14 -26 44 0 58"/></g>`
  + `<g transform="rotate(-4 470 178)"><rect class="ink" x="376" y="152" width="188" height="50" rx="25"/>${ilTx(470,183,14,'130K open the feed weekly','b w','text-anchor="middle"')}</g>`
  + ilStar(548,40,16)
};

function scard(p){ const c=SELCARD[p.id];
  const why=X(c.why).replace(/^(See how (I|we)|Encontrarás cómo)/,'<b>$1</b>');
  return `<button class="scard sv" data-open="${p.id}" data-key="${p.id}" style="--tone:var(${p.tone})">
    <span class="sv-hd"><svg class="ill" viewBox="0 0 600 230" aria-hidden="true">${ILL[p.id]()}</svg>
      <span class="sv-back" aria-hidden="true"><span class="sv-back-eb">${u('whyopen')}</span><span class="sv-back-t">${why}</span></span></span>
    <span class="sv-bd"><span class="tags"><span class="sv-chip sv-cy">${esc(p.company)} · ${p.year}</span><span class="sv-chip sv-c1">${esc(p.company)}</span><span class="sv-chip sv-c1">${p.year}</span>${(p.tags||[]).map(sticker).join('')}</span>
      <h3>${tr(c.h).map(l=>`<span>${esc(l)}</span>`).join('')}</h3>
      <span class="sv-p">${X(c.p).replace(/\*\*(.+?)\*\*/g,'<mark class="sv-hl">$1</mark>').split('\n').map(l=>`<span class="sv-line">${l}</span>`).join('')}</span>
      <span class="sv-q">${why}</span>
      <span class="sv-why sv-why2"><span class="sv-open"><span>${u('open')}</span><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M7 27L27 7M11 7h16v16"/></svg></span></span>
    </span></button>`; }
function scardOld(p){ const m=metric(p);
  return `<button class="scard" data-open="${p.id}" data-key="${p.id}" style="--tone:var(${p.tone})">
    <span class="sc-top"><span class="sc-co">${p.company}, ${yr(p)}</span><strong>${esc(fmt(m.v))}</strong><span class="sc-ml">${X(m.t)}</span></span>
    <span class="sc-body"><h3>${X(p.title)}</h3><p>${X(p.card)}</p>
      ${tagsHTML(p)}
      <span class="open">${u('open')}</span></span></button>`; }
function projPanel(){ const f=FOCUS[curF()];
  return `<div class="sel-head">${chipsHTML()}<div><p id="sel-sub">${X(f.sub)}</p></div></div>
    <div class="sgrid n${selIds().length}" id="sgrid">${selIds().map(id=>scard(byId(id))).join('')}</div>`; }
const WCROP={};
const CO_LOGO={Playtomic: `<img class="co-logo" src="data:image/png;base64,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" alt="" width="56" height="56">`, TaxDown: `<img class="co-logo" src="data:image/png;base64,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" alt="" width="56" height="56">`, Cobee: `<img class="co-logo" src="data:image/png;base64,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" alt="" width="56" height="56">`};
function wrow(p){ const c=SELCARD[p.id]; const h=c?tr(c.h).join(' '):X(p.title);
  const body=c?X(c.p).replace(/\*\*(.+?)\*\*/g,'<mark class="sv-hl">$1</mark>').split('\n').map(l=>`<span class="wtl-l">${l}</span>`).join(''):'';
  return `<div class="wtl-i" style="--tone:var(${p.tone})"><span class="wtl-y">${yr(p)}</span>
    <button class="wtl-c" data-open="${p.id}"><span class="wrt"><span class="tags">${(p.tags||[]).map(sticker).join('')}</span>
      <b class="wtl-h">${esc(h)}</b>${body?`<span class="wtl-p">${body}</span>`:''}
      ${c&&c.why?`<span class="wtl-why"><span class="wtl-why-in"><span class="sv-back-eb">${u('whyopen')}</span><span class="wtl-why-t">${X(c.why).replace(/^(See how (I|we)|Encontrarás cómo)/,'<b>$1</b>')}</span></span></span>`:''}
      <span class="wtl-go"><span>${u('open')}</span><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M7 27L27 7M11 7h16v16"/></svg></span></span></button></div>`; }
function coPanel(){
  return COMPANIES.map(c=>{ const list=P.filter(p=>p.company===c.id).sort((a,b)=>yr(b)-yr(a));
    return `<section class="co" style="--tone:var(${c.tone})" aria-labelledby="co-${c.id}">
      <div class="co-info"><h3 id="co-${c.id}">${esc(c.name||c.id)}</h3><span class="co-role">${X(c.role)}</span><span class="co-d">${X(c.when)}</span>
        <p class="co-what">${X(c.what)}</p><p>${X(c.me)}</p><p class="co-imp">${spark}<span>${X(c.impact)}</span></p></div>
      <div class="wtl">${list.map(wrow).join('')}</div></section>`; }).join(''); }
function extraHTML(){
  const known=COMPANIES.map(c=>(c.name||c.id));
  const prev=PROFILE.experience.filter(x=>!known.includes(x.co) && !COMPANIES.some(c=>x.co.startsWith(c.id)));
  const item=(t,d,w,note)=>`<li class="wli"><span class="wli-h"><b>${t}</b><span>${d}</span></span>${w?`<em>${w}</em>`:''}${note?`<p>${note}</p>`:''}</li>`;
  return (prev.length?`<section class="co co-x"><div class="co-info"><h3>${u('before')}</h3></div>
      <ul class="wlist">${prev.map(x=>item(esc(x.co),X(x.d),X(x.role),x.did?X(x.did):'')).join('')}</ul></section>`:'')
    + `<section class="co co-x"><div class="co-info"><h3>${u('edu')}</h3></div>
      <ul class="wlist">${PROFILE.education.map(e=>item(X(e.t),X(e.d),e.w,e.note?X(e.note):'')).join('')}</ul></section>`; }
function selectedHTML(){ const pr=S.wtab!=='co';
  const tab=(k,on,h,sub)=>`<button class="wtab" role="tab" id="wt-${k}" aria-controls="wpanel" aria-selected="${on}" tabindex="${on?0:-1}" data-wtab="${k}"><b>${h}</b><small>${sub}</small></button>`;
  return `<section class="wrap section sel" id="selected" aria-labelledby="sel-h">
    <div class="w-head"><span class="eyebrow-s">${u('w_eb')}</span><h2 class="h-sec" id="sel-h">${u('w_h')}</h2></div>
    <div class="wtabs" role="tablist" aria-label="${u('w_h')}">${tab('proj',pr,u('wt_proj'),u('wt_proj_s'))}${tab('co',!pr,u('wt_co'),u('wt_co_s'))}</div>
    <div class="wfolder ${pr?'is-proj':'is-co'}" id="wpanel" role="tabpanel" aria-labelledby="wt-${pr?'proj':'co'}">${pr?projPanel():coPanel()}</div>
  </section>`; }
function setWTab(k,focusTab){ if(S.wtab===k && $('#selected')) return; S.wtab=k; const old=$('#selected'); if(!old) return;
  old.outerHTML=selectedHTML(); if(focusTab) $('#wt-'+k)?.focus();
  if(!reduce) $('#wpanel').animate([{opacity:.4},{opacity:1}],{duration:220,easing:'ease-out'}); }
function pcard(p){ const inSel=S.focus && selIds().includes(p.id);
  return `<button class="pcard" data-open="${p.id}">${cover(p)}<span class="pb">
    ${inSel?`<span class="in-sl">${spark}${u('in_sel')}</span>`:''}
    <span class="meta">${yr(p)}</span><h4>${X(p.title)}</h4><p>${X(p.card)}</p>${tagsHTML(p)}</span></button>`; }
function workHTML(){
  return `<div class="wrap section" id="work"><div class="res-head"><div><h2 class="h-sec">${u('work_h')}</h2><p>${u('work_p')}</p></div></div>
    ${COMPANIES.map(c=>{ const list=P.filter(p=>p.company===c.id).sort((a,b)=>yr(b)-yr(a));
      return `<section class="co" style="--tone:var(${c.tone})" aria-labelledby="co-${c.id}">
        <div class="co-info"><h3 id="co-${c.id}">${esc(c.name||c.id)}</h3><span class="co-role">${X(c.role)}</span><span class="co-d">${X(c.when)} · ${list.length} ${list.length===1?u('project'):u('projects')}</span>
          <p class="co-what">${X(c.what)}</p><p>${X(c.me)}</p><p class="co-imp">${spark}<span>${X(c.impact)}</span></p></div>
        <div class="co-list">${list.map(pcard).join('')}</div></section>`; }).join('')}
  </div>`;
}
function aboutHTML(){
  return `<div class="wrap"><section class="about section" id="about">
    <div class="about-main">
      <span class="eyebrow-s">${u('about_h')}</span>
      <blockquote class="about-quote"><h2>${S.lang==='es'?'«':'“'}${X(PROFILE.quote)}${S.lang==='es'?'»':'”'}</h2></blockquote>
      ${PROFILE.about.map((p,i)=>`<p class="${i===0?'lead':''}">${X(p)}</p>`).join('')}
    </div>
    <div class="about-side">
      <h3 class="sub-h">${u('strengths')}</h3>
      <ul class="strengths">${PROFILE.strengths.map((s,i)=>`<li style="--tone:var(${s.tone})" tabindex="0"><span class="str-h"><span class="str-ic">${pixel(STR_PX[i]||STR_PX[0],'str-px')}</span><b>${X(s.h)}</b></span><span class="str-p"><span>${X(s.p)}</span></span></li>`).join('')}</ul>
    </div></section></div>`;
}
const STR_PX=[
 ['...XXX.....','..XoooX....','XXXoooXXX..','XoooooooX..','XoooooooXX.','XoooooooooX','XoooooooooX','XoooooooXX.','XoooooooX..','XXXXXXXXX..'],
 ['........XXX','........XoX','.....XXXXoX','.....XoXXoX','..XXXXoXXoX','..XoXXoXXoX','..XoXXoXXoX','..XoXXoXXoX','XXXXXXXXXXX'],
 ['.XXXXXXXXX.','XoooooooooX','XoXXXXXXooX','XoooooooooX','XoXXXXooooX','XoooooooooX','.XoXXXXXXX.','.XX........'],
 ['..XXX.XXX..','.XoooXoooX.','.XoooXoooX.','..XXX.XXX..','...........','.XXX...XXX.','XoooX.XoooX','XoooXXXoooX','XXXXXXXXXXX'],
 ['...XXXXX...','.XXoooXoXX.','.XoooXXooX.','XoooXXooooX','XoXXoooXXoX','XoooooXXXoX','XXooooXXooX','.XooooXooX.','.XXoooooXX.','...XXXXX...'],
 ['...XXXXX...','..XoooooX..','.XoooooooX.','.XooXoXooX.','.XoooXoooX.','..XooXooX..','...XoXoX...','...XXXXX...','...XoooX...','....XXX....']];
const PROFILE_PX=['XXXXXXXXXXX','XoooooooooX','XoooXXXoooX','XooXoooXooX','XooXoooXooX','XoooXXXoooX','XoooooooooX','XooXXXXXooX','XoXoooooXoX','XoXoooooXoX','XXXXXXXXXXX'];
const pixel = (grid,cls='') => { let r=''; grid.forEach((row,y)=>[...row].forEach((c,x)=>{ if(c!=='.') r+=`<rect x="${x}" y="${y}" width="1" height="1" class="${c==='X'?'hx':'ho'}"/>`; }));
  return `<svg class="px ${cls}" viewBox="0 0 ${grid[0].length} ${grid.length}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`; };
/* ---------- Image zoom (case images) ---------- */
(function(){
  let lb=null, back=null;
  const close=()=>{ if(!lb) return; lb.remove(); lb=null; back&&back.focus(); };
  const open=img=>{ back=img; lb=document.createElement('div'); lb.className='zoom'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); lb.setAttribute('aria-label',img.alt);
    lb.innerHTML=`<button type="button" class="zoom-x" aria-label="${esc(u('close_img'))}">×</button><div class="zoom-in"><img src="${img.getAttribute('src')}" alt="${esc(img.alt)}"></div>`;
    document.body.appendChild(lb); lb.querySelector('.zoom-x').focus(); };
  document.addEventListener('click',e=>{ const im=e.target.closest('img[data-zoom]'); if(im){ e.preventDefault(); open(im); return; }
    if(lb && (e.target===lb || e.target.closest('.zoom-x') || e.target.classList.contains('zoom-in'))) close(); });
  document.addEventListener('keydown',e=>{ if(lb && e.key==='Escape'){ e.stopPropagation(); close(); return; }
    const im=e.target.closest && e.target.closest('img[data-zoom]'); if(im && (e.key==='Enter'||e.key===' ')){ e.preventDefault(); open(im); } },true);
})();
/* ---------- Feedback (thumbs + optional comment) ---------- */
/* strings for the "Behind this portfolio" deck and its teaser */
const DK={
  title:['Behind this portfolio','Detrás de este portfolio'], close:['Close','Cerrar'], prev:['Previous card','Carta anterior'], next:['Next card','Siguiente carta'],
  tip:['Drag the card or use ← →','Arrastra la carta o usa ← →'], why:['Why','Por qué'], data:['The data','El dato'],
  work:['See my projects','Ver mis proyectos'], again:['↺ Back to the cards','↺ Volver a las cartas'], cont:['Continue','Continuar'], card:['card','carta'],
  of:['Card {a} of {b}','Carta {a} de {b}'],
  h_t:['Why is this portfolio like this?','¿Por qué este portfolio es así?'], h_s:['Discover the decisions behind this design.','Descubre las decisiones detrás de este diseño.'],
  t_eb:['Behind the portfolio','Detrás del portfolio'], t_h:['Have you wondered why this portfolio is the way it is?','¿Te has preguntado por qué este portfolio es así?'],
  t_p:['Discover the decisions behind the experience.','Descubre las decisiones detrás de la experiencia.'],
  t_btn:['Discover why ✦','Descubre por qué ✦']
};
const dk=k=>tr(DK[k]);
const FB={ h:['Did you like it?','¿Te ha gustado?'], p:['Help me improve it, or leave me a comment.','Ayúdame a mejorar o déjame un comentario.'],
  opt:['Optional','Opcional'], ph:['Tell me in your own words…','Cuéntamelo con tus palabras…'], name_l:['Name or company','Nombre o empresa'], name_ph:['You can leave it blank','Puedes dejarlo en blanco'], hint:['You can send just your rating, without writing anything.','Puedes enviar solo tu valoración, sin escribir nada.'],
  up:['Yes, I liked it','Sí, me ha gustado'], down:['Not really','No mucho'],
  q_up:['What did you like most?','¿Qué es lo que más te ha gustado?'], q_down:['What could we improve?','¿Qué podríamos mejorar?'],
  name:['Your name or company (optional)','Tu nombre o empresa (opcional)'], send:['Send rating','Enviar valoración'], sending:['Sending…','Enviando…'],
  thanks:['Thank you! It reached me.','¡Gracias! Me ha llegado.'], thanks2:['Every comment helps me make this better.','Cada comentario me ayuda a mejorarlo.'],
  fail:['I couldn’t send it from here. You can email me at','No he podido enviarlo desde aquí. Puedes escribirme a'] };
const fb=k=>tr(FB[k]);
const THUMB='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3m0 10V11m0 10h10.3a2 2 0 0 0 2-1.6l1.3-6.6A2 2 0 0 0 18.6 10H14V5.5A2.5 2.5 0 0 0 11.5 3L7 11"/></svg>';
S.fb=S.fb||{rate:null,state:store.get('fb_sent')?'done':'idle'};
function feedbackHTML(){ const f=S.fb;
  let inner='';
  if(f.state==='done') inner=`<div class="fb-done" role="status"><span class="fb-ok">${spark}</span><div><b>${fb('thanks')}</b><p>${fb('thanks2')}</p></div></div>`;
  else inner=`<div class="fb-q"><div><h2 id="fb-h">${fb('h')}</h2><p>${fb('p')}</p></div>
      <div class="fb-thumbs" role="group" aria-labelledby="fb-h">
        <button type="button" class="fb-t up" data-fb="up" aria-pressed="${f.rate==='up'}" aria-label="${fb('up')}">${THUMB}</button>
        <button type="button" class="fb-t down" data-fb="down" aria-pressed="${f.rate==='down'}" aria-label="${fb('down')}">${THUMB}</button>
      </div></div>
      ${f.rate?`<form class="fb-form" id="fb-form">
        <label for="fb-c"><b>${fb(f.rate==='up'?'q_up':'q_down')}</b> <span class="fb-opt">${fb('opt')}</span></label>
        <textarea id="fb-c" rows="4" maxlength="1500" placeholder="${esc(fb('ph'))}">${esc(f.c||'')}</textarea>
        <label for="fb-n"><b>${fb('name_l')}</b> <span class="fb-opt">${fb('opt')}</span></label>
        <div class="fb-row"><input id="fb-n" type="text" maxlength="60" placeholder="${esc(fb('name_ph'))}" value="${esc(f.n!=null?f.n:(S.who||''))}">
        <input type="text" name="website" class="fb-hp" tabindex="-1" autocomplete="off" aria-hidden="true">
        <button class="btn" type="submit" ${f.state==='sending'?'disabled':''}>${f.state==='sending'?fb('sending'):fb('send')+' <span aria-hidden="true">→</span>'}</button></div>
        <p class="fb-hint">${fb('hint')}</p>
        ${f.state==='error'?`<p class="fb-err" role="alert">${fb('fail')} <b>${PROFILE.email}</b></p>`:''}
      </form>`:''}`;
  return `<div class="wrap"><section class="fb-sec" id="feedback" aria-labelledby="fb-h"><div class="fb-card">${inner}</div></section>
    <footer class="foot"><span>${u('foot')}</span><div class="foot-r"><button type="button" class="link" data-iredo="1">${u('redo')}</button><label class="lang-sel"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18"/></svg><span class="sr">${u('lang_label')}</span><select id="lang-sel"><option value="en" ${S.lang==='en'?'selected':''}>English</option><option value="es" ${S.lang==='es'?'selected':''}>Español</option></select></label></div></footer></div>`; }
function refreshFb(focusSel){ const sec=$('#feedback'); if(!sec) return; sec.querySelector('.fb-card').outerHTML=new DOMParser().parseFromString(feedbackHTML(),'text/html').querySelector('.fb-card').outerHTML; const el=focusSel&&$(focusSel); el&&el.focus(); }
async function sendFb(rec){
  // 1) the deployed site: serverless endpoint that writes to Notion and emails Blanca
  try{ const r=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(rec)}); if(r.ok) return true; }catch(e){}
  // 2) inside Claude: the artifact's own store (synced to Notion on request)
  try{ const db=window.claude&&await window.claude.use('db'); const us=db&&await window.claude.use('user'); const id=us&&await us.id(); if(db&&id){ await db.collection('feedback/'+id+'/items').add(rec); return true; } }catch(e){}
  return false; }
document.addEventListener('click',e=>{ const b=e.target.closest('[data-fb]'); if(!b) return; S.fb.rate=b.dataset.fb; if(S.fb.state==='error') S.fb.state='idle'; refreshFb('#fb-c'); });
document.addEventListener('input',e=>{ if(e.target.id==='fb-c') S.fb.c=e.target.value; if(e.target.id==='fb-n') S.fb.n=e.target.value; });
document.addEventListener('submit',async e=>{ if(e.target.id!=='fb-form') return; e.preventDefault();
  if(e.target.querySelector('.fb-hp').value) return;
  const rec={rating:S.fb.rate==='up'?'Positivo':'Negativo',comment:(S.fb.c||'').trim().slice(0,1500),name:((S.fb.n!=null?S.fb.n:S.who)||'').trim().slice(0,60)||'Anónimo',date:new Date().toISOString(),lang:S.lang,focus:curF()};
  S.fb.state='sending'; refreshFb();
  const ok=await sendFb(rec); S.fb.state=ok?'done':'error'; if(ok) store.set('fb_sent',true); refreshFb(ok?'.fb-done':'#fb-c'); });
function behindHTML(){ return `<div class="wrap"><section class="bh-sec" aria-labelledby="bh-h"><div class="bh-card"><div class="bh-stack" aria-hidden="true"><i></i><i></i><i>?</i></div><div class="bh-txt"><span class="bh-eb">${dk('t_eb')}</span><h2 id="bh-h">${dk('t_h')}</h2><p>${dk('t_p')}</p></div><button type="button" class="bh-btn" data-deck>${dk('t_btn')}</button></div></section></div>`; }
function contactHTML(){
  return `<div class="wrap"><section class="contact-sec section" id="contact" aria-labelledby="ct-h">
    <div class="ct-panel ct-me">
      <div class="ct-l">
        <span class="eyebrow-s">${u('ct_eb')}</span>
        <h2 id="ct-h">${u('contact_h')}.</h2>
        <p>${u('contact_p')}</p>
        <div class="ct-btns"><button type="button" class="btn ghost ct-copy" data-act="copy"><span class="lbl">${u('copy_mail')}</span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/></svg></button>
        <a class="btn ghost" href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">↗</span></a></div>
        <code id="mail" class="ct-mail">${PROFILE.email}</code>
      </div>
      <div class="ct-art" aria-hidden="false">
        <button type="button" class="ct-face" data-me="poke" aria-label="${esc(u('me_poke'))}"><svg class="me-svg" viewBox="0 0 300 300" role="img" aria-label="${esc(u('me_alt'))}"><circle cx="150" cy="150" r="140" fill="#FFC6E3" stroke="#1B1724" stroke-width="4"/><g class="me-body"><g transform="rotate(-6 150 150)"><path d="M150 40C96 40 66 80 68 138C70 186 58 220 74 252C88 268 112 264 112 244L114 176L186 176L188 244C188 264 212 268 226 252C242 220 230 186 232 138C234 80 204 40 150 40Z" fill="#fff" stroke="#fff" stroke-width="22" stroke-linejoin="round"/><ellipse cx="150" cy="146" rx="62" ry="72" fill="#fff" stroke="#fff" stroke-width="22"/><path d="M150 40C96 40 66 80 68 138C70 186 58 220 74 252C88 268 112 264 112 244L114 176L186 176L188 244C188 264 212 268 226 252C242 220 230 186 232 138C234 80 204 40 150 40Z" fill="#1B1724" transform="translate(7 7)"/><path d="M150 40C96 40 66 80 68 138C70 186 58 220 74 252C88 268 112 264 112 244L114 176L186 176L188 244C188 264 212 268 226 252C242 220 230 186 232 138C234 80 204 40 150 40Z" fill="#C98A4B" stroke="#1B1724" stroke-width="4" stroke-linejoin="round"/><path d="M86 170c-6 26-8 50 0 70M214 170c6 26 8 50 0 70" fill="none" stroke="#A86C35" stroke-width="4" stroke-linecap="round"/><path d="M134 210v26h32v-26" fill="#FFD3BE" stroke="#1B1724" stroke-width="4" stroke-linejoin="round"/><ellipse cx="90" cy="152" rx="11" ry="17" fill="#E8725F" stroke="#1B1724" stroke-width="4"/><circle cx="91" cy="176" r="4.5" fill="none" stroke="#E0A93A" stroke-width="3"/><ellipse cx="210" cy="152" rx="11" ry="17" fill="#FFD3BE" stroke="#1B1724" stroke-width="4"/><ellipse cx="150" cy="146" rx="62" ry="72" fill="#FFD3BE" stroke="#1B1724" stroke-width="4"/><path d="M150 52C112 52 86 76 84 120C102 98 126 82 150 72C174 82 198 98 216 120C214 76 188 52 150 52Z" fill="#C98A4B" stroke="#1B1724" stroke-width="4" stroke-linejoin="round"/><path d="M150 54v18" stroke="#1B1724" stroke-width="3" stroke-linecap="round"/><path d="M110 74c-10 10-16 24-18 38M190 74c10 10 16 24 18 38" fill="none" stroke="#A86C35" stroke-width="3.5" stroke-linecap="round"/><path class="me-brows" d="M110 114q14-9 28-2M162 112q14-7 28 2" fill="none" stroke="#A86C35" stroke-width="5" stroke-linecap="round"/><g class="me-blush"><ellipse cx="112" cy="170" rx="13" ry="7" fill="#FFB4C8"/><ellipse cx="188" cy="170" rx="13" ry="7" fill="#FFB4C8"/></g><path d="M153 118C141 134 138 158 150 172C157 178 165 170 158 163C149 152 150 135 157 121Z" fill="#E8725F" stroke="#1B1724" stroke-width="3.5" stroke-linejoin="round"/><g class="me-open"><g class="me-eye" data-cx="124" data-cy="140"><g class="me-lid"><path d="M118 133l-5 -4M117.2 137.5l-6 -1.5M118 142l-5 1.5" stroke="#1B1724" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="124" cy="140" rx="6.5" ry="11.5" fill="#1B1724"/><circle cx="126" cy="138" r="2.6" fill="#fff"/></g></g><g class="me-eye" data-cx="176" data-cy="140"><g class="me-lid"><path d="M182 133l5 -4M182.8 137.5l6 -1.5M182 142l5 1.5" stroke="#1B1724" stroke-width="2.4" stroke-linecap="round"/><ellipse cx="176" cy="140" rx="6.5" ry="11.5" fill="#1B1724"/><circle cx="178" cy="138" r="2.6" fill="#fff"/></g></g></g><g class="me-shut" fill="none" stroke="#1B1724" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M114 132l14 8-14 8M186 132l-14 8 14 8"/></g><g class="me-joy" fill="none" stroke="#1B1724" stroke-width="4.5" stroke-linecap="round"><path d="M114 144q10-14 20 0M166 144q10-14 20 0"/></g><path class="me-m me-m-idle" d="M134 190q16 12 32 0q-16 4-32 0z" fill="#FFB4C8" stroke="#1B1724" stroke-width="3" stroke-linejoin="round"/><ellipse class="me-m me-m-o" cx="150" cy="193" rx="7" ry="9" fill="#8A3A3A" stroke="#1B1724" stroke-width="3"/><path class="me-m me-m-joy" d="M128 186q22 0 44 0q-4 26-22 26t-22-26z" fill="#8A3A3A" stroke="#1B1724" stroke-width="3" stroke-linejoin="round"/><path class="me-m me-m-joy" d="M140 204q10-8 20 0q-10 8-20 0z" fill="#FF8FA6"/><g class="me-sweat"><path d="M214 106q8 12 0 16q-8-4 0-16z" fill="#C2E2FF" stroke="#1B1724" stroke-width="2.5"/></g></g></g><g class="me-sparks" fill="#FFE7A1" stroke="#1B1724" stroke-width="2.5"><path d="M48 70l3 9 9 3-9 3-3 9-3-9-9-3 9-3z"/><path d="M256 60l4 11 11 4-11 4-4 11-4-11-11-4 11-4z"/><path d="M250 214l3 8 8 3-8 3-3 8-3-8-8-3 8-3z"/></g></svg></button>
      </div>
    </div>
  </section></div>`; }
const vidTag=(src,poster,c)=>`<video src="${src}" poster="${poster}" ${reduce?'':'autoplay'} muted loop playsinline controls preload="metadata" aria-label="${esc(tr(c))}"></video>`;
function block(b, p, ids){
  switch(b.k){
    case 'h': { const id=`s-${p.id}-${ids.length}`; ids.push([id,tr(b.t)]); return `<h2 class="b-h" id="${id}">${X(b.t)}</h2>`; }
    case 'p': return `<p class="b-p">${X(b.t)}</p>`;
    case 'call': return `<div class="b-call">${X(b.t)}</div>`;
    case 'list': return `<ul class="b-list">${b.t.map(x=>`<li>${X(x)}</li>`).join('')}</ul>`;
    case 'quote': return `<blockquote class="b-quote"><p>${X(b.t)}</p><cite>${X(b.by)}</cite></blockquote>`;
    case 'table': return `<div class="b-table"><table><thead><tr>${b.head.map(h=>`<th scope="col">${X(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map((c,i)=>i===0?`<th scope="row">${esc(fmt(tr(c)))}</th>`:`<td>${esc(fmt(tr(c)))}</td>`).join('')}</tr>`).join('')}</tbody></table>${b.note?`<p class="b-note">${X(b.note)}</p>`:''}</div>`;
    case 'steps': return `<ol class="steps">${b.items.map(([h,t])=>`<li><div><h3>${X(h)}</h3><p>${X(t)}</p></div></li>`).join('')}</ol>`;
    case 'exp': return `<div class="exps">${b.items.map(e=>`<article class="exp"><span class="exp-tag">${X(e.tag)}</span><h3>${X(e.h)}</h3>
        <dl><div><dt>${u('hyp')}</dt><dd>${X(e.hyp)}</dd></div><div><dt>${u('res')}</dt><dd>${X(e.res)}</dd></div><div><dt>${u('lrn')}</dt><dd>${X(e.learn)}</dd></div></dl></article>`).join('')}</div>`;
    case 'ba': return `<figure class="fig"><div class="ba" style="--n:${b.n}">${b.items.map(([s,c])=>`<div>${/\.mp4$/.test(s)?vidTag(s,s.replace('.mp4','-poster.webp'),c):`<img src="${s}" alt="${X(c)}" loading="lazy" tabindex="0" data-zoom>`}<span>${X(c)}</span></div>`).join('')}</div><figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'img': return `<figure class="fig"><img src="${b.src}" alt="${X(b.cap)}" loading="lazy" tabindex="0" data-zoom ${b.max?`class="narrow" style="max-width:${b.max}px"`:''}><figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'vid': return `<figure class="fig"><div class="vid" ${b.max?`style="max-width:${b.max}px"`:''}>${vidTag(b.src,b.poster,b.cap)}</div><figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'abc': { const max=Math.max(...b.rows.map(r=>r[1]));
      return `<figure class="fig"><div class="abc">${b.rows.map(([l,v])=>`<div><span>${X(l)}</span><i><em style="width:${(v/max*100).toFixed(1)}%"></em></i><strong>${esc(fmt(v))}${b.unit||''}</strong></div>`).join('')}</div><figcaption>${X(b.cap)}</figcaption></figure>`; }
    case 'learn': return `<div class="learns"><h2 class="b-h" id="s-${p.id}-learn">${u('learn')}</h2>${b.items.map(([h,t])=>`<div class="lr"><h3>${X(h)}</h3><p>${X(t)}</p></div>`).join('')}</div>`;
  }
  return '';
}
function caseHTML(p){
  if(p.story) return storyCaseHTML(p);
  const w=whyFor(p);
  const ids=[]; const body=p.blocks.map(b=>block(b,p,ids)).join('');
  if(p.blocks.some(b=>b.k==='learn')) ids.push([`s-${p.id}-learn`, u('learn')]);
  // snippet for each section: first text block after its heading
  const plain=t=>tr(t).replace(/\*\*|__|<[^>]+>/g,'');
  const snip=[]; let hi=-1; p.blocks.forEach(b=>{ if(b.k==='h'){ hi++; snip[hi]=''; } else if(hi>=0 && !snip[hi] && (b.k==='p'||b.k==='call')) snip[hi]=plain(b.t); else if(b.k==='learn' && b.items&&b.items[0]) snip[ids.length-1]=plain(b.items[0][1]); });
  const secs=[[`case-top-${p.id}`, u('overview'), plain(p.challenge)], ...ids.map(([id,t],k)=>[id,t,snip[k]||''])];
  const cut=t=>t.length>120?t.slice(0,118).replace(/\s+\S*$/,'')+'…':t;
  return `<div class="sheet-bar">
      <button class="icon-btn" data-act="close" aria-label="${u('close')}">${icon.x}</button>
      <span class="meta">${p.company}, ${p.year} · ${X(p.short)}</span>
</div>
    <div class="case-wrap"><nav class="sec-nav" aria-label="${u('jump')}">${secs.map(([id,t,sn],k)=>`<a href="#${id}" data-jump="${id}" class="${k===0?'on':''}"><i aria-hidden="true"></i><span class="sec-pop"><b>${esc(t)}</b>${sn?`<small>${esc(cut(sn))}</small>`:''}</span></a>`).join('')}</nav>
    <article class="sheet-in" style="--tone:var(${p.tone})">
      <header class="case-h" id="case-top-${p.id}">${tagsHTML(p)}
        <h1 id="case-title">${X(p.title)}</h1><p class="challenge">${X(p.challenge)}</p>
        <dl class="facts">${p.facts.map(([k,v])=>`<div><dt>${X(k)}</dt><dd>${X(v)}</dd></div>`).join('')}</dl></header>
      <div class="bignums">${p.nums.map(n=>`<div><strong>${esc(fmt(n.v))}</strong><span>${X(n.t)}</span></div>`).join('')}</div>
      <div class="hl-big"><b>${X(p.hl.label)}</b>${X(p.hl.text)}</div>
      ${w?`<div class="why-big"><b>${spark}${u('why')}</b>${esc(w)}</div>`:''}
      <div class="blocks">${body}</div>
      ${p.notion?`<footer class="sheet-foot"><a class="link" href="${p.notion}" target="_blank" rel="noopener">${u('full')}</a></footer>`:''}
    </article></div>`;
}
/* Funnel trip: vertical bars, a line over their tops walked by a face, friction bubbles anchored to points */
const TRIP_MOOD=['<circle class="tf" r="17"/><circle class="te" cx="-5" cy="-3" r="1.8"/><circle class="te" cx="5" cy="-3" r="1.8"/><path d="M-7 4q7 8 14 0"/>',
 '<circle class="tf" r="17"/><circle class="te" cx="-5" cy="-3" r="1.8"/><circle class="te" cx="5" cy="-3" r="1.8"/><path d="M-6 7h12"/>',
 '<circle class="tf" r="17"/><path d="M-9 -9l6 2M9 -9l-6 2"/><circle class="te" cx="-5" cy="-2" r="1.8"/><circle class="te" cx="5" cy="-2" r="1.8"/><path d="M-6 8q3-3 6 0t6 0"/><text class="tq" x="14" y="-11">?</text>',
 '<circle class="tf" r="17"/><path d="M-9 -7l6 3M9 -7l-6 3"/><circle class="te" cx="-5" cy="-1" r="1.8"/><circle class="te" cx="5" cy="-1" r="1.8"/><path d="M-6 10q6-6 12 0"/><path class="tr-red" d="M13 -18q3 -4 6 0t6 0"/><text class="tq tr-redt" x="15" y="-4">!</text>'];
function tripHTML(b){
  const tot=b.steps[0][1], pc=n=>Math.round(n/tot*100)+(S.lang==='es'?' %':'%');
  const svg=D=>{ const base=D?490:330, H=D?270:220, n=b.steps.length, gap=D?(680/(n-1)):(288/(n-1)), x0=D?110:36, w=D?120:56;
    const pts=b.steps.map(([,v],i)=>[Math.round(x0+i*gap),Math.round(base-H*v/tot)]);
    let o=b.steps.map(([l,v],i)=>{ const [x,y]=pts[i];
      return `<rect class="tr-bar" x="${x-w/2}" y="${y}" width="${w}" height="${base-y}" rx="${D?10:7}" style="transition-delay:${i*.1}s"/><text class="tr-pct" x="${x}" y="${y+(D?40:26)}"${D?'':' style="font-size:15px"'}>${pc(v)}</text><text class="tr-tot" x="${x}" y="${y+(D?60:40)}"${D?'':' style="font-size:10px"'}>${D?`${v} ${esc(tr(['people','personas']))}`:v}</text>`
        +tr(l).split('\n').map((t,j)=>`<text class="tr-lab" x="${x}" y="${base+(D?28:20)+j*15}"${D?'':' style="font-size:11px"'}>${esc(t)}</text>`).join(''); }).join('');
    o+=`<line class="tr-base" x1="${D?30:4}" y1="${base}" x2="${D?870:356}" y2="${base}"/>`;
    o+=pts.slice(1).map((q,i)=>`<line class="tr-ln" data-i="${i}" x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[i][0]}" y2="${pts[i][1]}"/>`).join('');
    o+=pts.slice(1).map((q,i)=>{ const d=Math.round(b.steps[i][1]/tot*100)-Math.round(b.steps[i+1][1]/tot*100), mx=(pts[i][0]+q[0])/2, my=(pts[i][1]+q[1])/2;
      return `<text class="tr-fx tr-drop" data-at="${i+1}" x="${mx}" y="${D?my+26:my-8}"${D?'':' style="font-size:9px"'}>−${d} pp</text>`; }).join('');
    o+=pts.map(([x,y],i)=>`<circle class="tr-dot tr-fx" data-at="${i}" cx="${x}" cy="${y}" r="${D?7:5}"/>`).join('');
    o+=b.bubbles.map((bb,k)=>{ const [px,py]=pts[bb.at];
      return D?`<g class="tr-fx tr-bub" data-at="${bb.at}" data-box="${bb.x},${bb.y},${bb.w},84,${px},${py-14}"><path style="fill:var(--${bb.tone})"/><text class="tr-bt" x="${bb.x+20}" y="${bb.y+26}">${k+1} · ${X(bb.tag)}</text><text class="tr-bq" x="${bb.x+20}" y="${bb.y+52}">${X(bb.q)}</text><text class="tr-bh" x="${bb.x+20}" y="${bb.y+72}">${X(bb.h)}</text></g>`
               :`<g class="tr-fx tr-pin" data-at="${bb.at}" transform="translate(${px} ${py-48})"><circle r="11" style="fill:var(--${bb.tone})"/><text y="4.5">${k+1}</text></g>`; }).join('');
    o+=`<g class="tr-face" data-lift="${D?30:22}" data-sc="${D?1:.75}"></g>`;
    return `<svg class="tr-${D?'d':'m'}" viewBox="0 0 ${D?'900 550':'360 400'}" data-pts='${JSON.stringify(pts)}' aria-hidden="true">${o}</svg>`; };
  const list=`<ol class="tr-list">${b.bubbles.map((bb,k)=>`<li><span style="background:var(--${bb.tone})">${k+1}</span><div><b>${X(bb.q)}</b>${X(bb.long||bb.h)}</div></li>`).join('')}</ol>`;
  const cap=b.cap?`<figcaption>${X(b.cap)}</figcaption>`:'';
  if(!b.flow) return `<figure class="scene trip" data-anim="trip"><span class="sc-k">${X(b.label)}</span>${svg(1)}${svg(0)}<p class="sr">${X(b.sr)}</p>${list}${cap}</figure>`;
  const flow=b.steps.map(([l,v],i)=>{ const k=b.bubbles.findIndex(bb=>bb.at===i), bb=b.bubbles[k], img=b.flow[i];
    return `<div class="tf-b">${bb?`<div class="tf-note" style="--t:var(--${bb.tone})"><small><i aria-hidden="true">${k+1}</i>${X(bb.tag)}</small><span>${X(bb.h)}</span></div>`:''}</div>
      <div class="tf-s">${img?`<img src="${img[0]}" alt="${X(img[1])}" loading="lazy" decoding="async" tabindex="0" data-zoom>`:`<div class="tf-done"><img src="${b.done.img}" alt="" loading="lazy" decoding="async"><div class="tf-ov" role="img" aria-label="${X(b.done.alt)}"><div class="tf-mod"><span class="tf-ck" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><b>${X(b.done.h)}</b><small>${X(b.done.t)}</small><i aria-hidden="true">${X(b.done.btn)}</i></div></div></div>`}
      <span class="tf-l">${esc(tr(l).replace('\n',' '))} <b>·&nbsp;${Math.round(v/tot*100)}${S.lang==='es'?'&nbsp;%':'%'}</b></span></div>`; }).join('');
  return `<figure class="scene trip" data-anim="trip"><div class="jv-top"><span class="sc-k">${X(b.label)}</span>
      <div class="jv-sw" role="group" aria-label="${u('v_label')}"><button type="button" data-view="schema" aria-pressed="true">${u('v_schema')}</button><button type="button" data-view="flow" aria-pressed="false">${u('v_flow')}</button></div></div>
    <div class="jv-schema">${svg(1)}${svg(0)}<p class="sr">${X(b.sr)}</p>${list}</div>
    <div class="tr-flow" hidden><div class="tf-row">${flow}</div><p class="tf-hint">${esc(tr(['Swipe to see every screen →','Desliza para ver todas las pantallas →']))}</p></div>${cap}</figure>`;
}
function tripInit(f,instant){
  f.classList.add('on');
  f.querySelectorAll('svg[data-pts]').forEach(sv=>{ if(!sv.getBoundingClientRect().width) { tripRun(sv,true); return; } tripRun(sv,instant); });
}
function tripSize(sv){ sv.querySelectorAll('.tr-bub').forEach(g=>{ let [x,y,w,h,tx,ty]=g.dataset.box.split(',').map(Number); const ts=[...g.querySelectorAll('text')];
  try{ w=Math.max(w,...ts.map(t=>t.getComputedTextLength()+44)); }catch(e){}
  if(x+w>890){ const dx=x+w-890; x-=dx; ts.forEach(t=>t.setAttribute('x',+t.getAttribute('x')-dx)); }
  const r=16, B=y+h, bx=Math.min(Math.max(tx,x+r+4),x+w-r-4);
  g.querySelector('path').setAttribute('d',`M${x+r} ${y}H${x+w-r}Q${x+w} ${y} ${x+w} ${y+r}V${B-r}Q${x+w} ${B} ${x+w-r} ${B}H${x+r}Q${x} ${B} ${x} ${B-r}V${y+r}Q${x} ${y} ${x+r} ${y}Z`);
  let ld=g.querySelector('.tr-lead'); if(!ld){ ld=document.createElementNS('http://www.w3.org/2000/svg','line'); ld.setAttribute('class','tr-lead'); g.insertBefore(ld,g.firstChild); }
  ld.setAttribute('x1',bx); ld.setAttribute('y1',B+6); ld.setAttribute('x2',tx); ld.setAttribute('y2',ty); }); }
function tripRun(sv,instant){
  tripSize(sv); const pts=JSON.parse(sv.dataset.pts), n=pts.length-1, segs=[...sv.querySelectorAll('.tr-ln')], f=sv.querySelector('.tr-face'), lift=+f.dataset.lift, sc=+f.dataset.sc;
  const mood=i=>{ i=Math.min(i,3); if(f.dataset.m!==String(i)){ f.dataset.m=i; f.innerHTML=TRIP_MOOD[i]; } };
  const at=(x,y)=>f.setAttribute('transform',`translate(${x} ${y-lift}) scale(${sc})`);
  const show=i=>sv.querySelectorAll(`.tr-fx[data-at="${i}"]`).forEach(e=>e.classList.add('in'));
  const seg=(i,x,y)=>{ segs[i].style.opacity=1; segs[i].setAttribute('x2',x); segs[i].setAttribute('y2',y); };
  if(instant){ segs.forEach((s,i)=>seg(i,...pts[i+1])); for(let i=0;i<=n;i++) show(i); at(...pts[n]); mood(n); return; }
  at(...pts[0]); mood(0); show(0); const T0=performance.now()+500, walk=800, pause=600, end=pause+n*(walk+pause);
  const step=now=>{ const t=now-T0;
    for(let i=0;i<n;i++){ const s=pause+i*(walk+pause), k=Math.min(1,Math.max(0,(t-s)/walk));
      if(t>=s&&k<1){ const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2, x=pts[i][0]+(pts[i+1][0]-pts[i][0])*e, y=pts[i][1]+(pts[i+1][1]-pts[i][1])*e; at(x,y); seg(i,x,y); mood(k>=.5?i+1:i); }
      if(k>=1){ seg(i,...pts[i+1]); show(i+1); if(t<s+walk+pause) at(...pts[i+1]); } }
    if(t<end) requestAnimationFrame(step); else { at(...pts[n]); mood(n); } };
  requestAnimationFrame(step);
}
/* ---------- Story case (new structure): chapters + scenes + "Ask me" ---------- */
const ph=v=>/X €/.test(v)?`<span class="ph">${esc(v)}</span>`:esc(fmt(v));
function sBlock(b,p,ids){
  switch(b.k){
    case 'chap': { const id=`s-${p.id}-${ids.length}`; ids.push([id,tr(b.n),tr(b.t)]); return `<header class="chap" id="${id}"><span class="chap-n">${X(b.n)}</span><h2>${X(b.t)}</h2></header>`; }
    case 'p': return `<p class="s-p">${X(b.t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')}</p>`;
    case 'next': return `<div class="s-next"><span class="sc-k">${X(b.h)}</span><ol>${b.t.map(x=>`<li>${X(x)}</li>`).join('')}</ol></div>`;
    case 'cmp': { const tag=c=>`<span class="cmp-dot" style="background:var(--${c.tone})" aria-hidden="true"></span>`;
      const val=(r,j)=>r[3]?`<span class="${j?'cmp-lose':'cmp-win'}">${X(r[j+1])}</span>`:X(r[j+1]);
      return `<figure class="s-cmp"><table class="cmp-t"><thead><tr><td></td>${b.cols.map(c=>`<th scope="col"><span class="cmp-h">${tag(c)}${esc(c.id)} · ${X(c.h)}</span></th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr><th scope="row">${X(r[0])}</th>${b.cols.map((c,j)=>`<td>${val(r,j)}</td>`).join('')}</tr>`).join('')}</tbody></table>
        <div class="cmp-m" aria-hidden="true">${b.cols.map((c,j)=>`<div class="cmp-c"><span class="cmp-h">${tag(c)}${esc(c.id)} · ${X(c.h)}</span><dl>${b.rows.map(r=>`<dt>${X(r[0])}</dt><dd>${val(r,j)}</dd>`).join('')}</dl></div>`).join('')}</div>
        ${b.cap?`<figcaption>${X(b.cap)}</figcaption>`:''}</figure>`; }
    case 'segs': { const ic={phone:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg>',mail:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>'};
      return `<figure class="s-segs">${b.label?`<span class="sc-k">${X(b.label)}</span>`:''}<div class="sc-segs">${b.items.map(it=>`<div class="sgc ${it.win?'win':'lose'}"><div class="sgc-top"><span class="sgc-ic">${ic[it.icon]}</span><span class="sgc-tag" style="background:var(--${it.tone})">${esc(it.tag)}</span></div><h3>${X(it.h)}</h3>${it.d?`<p class="sgc-d">${X(it.d)}</p>`:`<dl>${it.rows.map(([k,v])=>`<div><dt>${X(k)}</dt><dd>${X(v)}</dd></div>`).join('')}</dl>`}<p class="sgc-res">${X(it.res)}</p></div>`).join('')}</div><figcaption>${X(b.cap)}</figcaption></figure>`; }
    case 'goal': if(b.q) return `<div class="s-q"><p class="q-t">${X(b.t)}</p><p class="q-s">${X(b.label)}</p></div>`;
      return `<div class="s-goal${b.main?' main':''}"><b>${X(b.label)}</b><p>${X(b.t)}</p>${b.sub?`<p class="g-sub">${X(b.sub)}</p>`:''}</div>`;
    case 'journey': {
      const I={web:'<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 8.5h18M6 15.5l3-3 2.5 2.5 2-2 3.5 3.5"/>',user:'<circle cx="10" cy="8" r="3.5"/><path d="M3.5 19.5c.8-3.5 3.4-5.5 6.5-5.5 1.3 0 2.5.3 3.5 1M18 14v6M15 17h6"/>',bank:'<path d="M3.5 9.5L12 4.5l8.5 5M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3.5 19.5h17"/>',doc:'<path d="M6 3.5h8.5l3.5 3.5v13.5H6zM9 10h6M9 13.5h6M9 17h3.5"/>',card:'<rect x="2.5" y="5.5" width="19" height="13" rx="2"/><path d="M2.5 9.5h19M6 14.5h5"/>',mail:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>'};
      const face=(x,y)=>`<g class="jface" transform="translate(${x} ${y})"><circle r="17"/><circle cx="-5" cy="-3" r="1.8"/><circle cx="5" cy="-3" r="1.8"/><path d="M-6 7q3-3 6 0t6 0"/><text class="jq" x="14" y="-11">?</text></g>`;
      const wrap=(t,n)=>{ const w=tr(t).split(' '), L=[]; let c=''; w.forEach(x=>{ if((c+' '+x).trim().length>n){ L.push(c.trim()); c=x; } else c+=' '+x; }); if(c.trim()) L.push(c.trim()); return L; };
      const tsp=(L,x,y,lh)=>L.map((l,i)=>`<tspan x="${x}" y="${y+i*lh}">${esc(l)}</tspan>`).join('');
      const node=(ic,x,y,i,cls='')=>`<g class="jn ${cls}" data-p="${i}" transform="translate(${x} ${y})"><circle r="24"/><g class="ji" transform="translate(-12 -12)">${I[ic]}</g></g>`;
      const stick=(t,cx,y,w,tone,cls,n)=>{ const o=t.tag?0:-16, HL=wrap(t.h,Math.floor((w-28)/8.6)), L=t.q?wrap(t.q,n||40):[], qy=42+o+(HL.length-1)*20+22;
        return `<g class="js ${cls}" transform="translate(${cx} ${y-o})"><rect x="${-w/2}" y="0" width="${w}" height="${t.q?qy+L.length*17-6:qy-8}" rx="12" style="fill:var(--${tone})"/>${t.tag?`<text class="jt" x="${-w/2+14}" y="21">${X(t.tag)}</text>`:''}<text class="jh">${tsp(HL,-w/2+14,42+o,20)}</text>${t.q?`<text class="jqt">${tsp(L,-w/2+14,qy,17)}</text>`:''}</g>`; };
      const labelsH=(xs,ry)=>b.steps.map(([ic,h,t],i)=>`<text class="jt jlab" text-anchor="middle" x="${xs[i]}" y="${ry+46}">${X(h)}</text><text class="jdesc" text-anchor="middle">${tsp(wrap(t,20),xs[i],ry+66,16)}</text>`).join('');
      const labelsV=(ys,rx)=>b.steps.map(([ic,h,t],i)=>`<text class="jt jlab" x="${rx+38}" y="${ys[i]-2}">${X(h)}</text><text class="jdesc">${tsp(wrap(t,24),rx+38,ys[i]+21,20)}</text>`).join('');
      const xs=[60,255,450,645,840], rx=34; let H='', V='';
      if(b.mode==='base'){ const ry=200, f=b.fr;
        const card=(cx,y,w,bw)=>{ const x0=-w/2;
          const TL=wrap(f.tag,Math.floor((w-40)/7.6)), d=(TL.length-1)*16, HL=wrap(f.h,Math.floor((w-40)/9.6)), d2=(HL.length-1)*22;
          return `<g class="js jfr" transform="translate(${cx} ${y})"><rect x="${x0}" y="0" width="${w}" height="${142+d+d2}" rx="14"/><text class="jfk">${tsp(TL,x0+20,30,16)}</text><text class="jfh">${tsp(HL,x0+20,54+d,22)}</text>
            ${f.stats.map(([l,v],i)=>{ const yy=88+d+d2+i*32, pct=parseFloat(v); return `<text class="jfl" x="${x0+20}" y="${yy+5}">${X(l)}</text><rect class="jbar0" x="${x0+110}" y="${yy-7}" width="${bw}" height="14" rx="7"/><rect class="jbar ${i?'lo':''}" x="${x0+110}" y="${yy-7}" width="${(bw*pct/100).toFixed(1)}" height="14" rx="7"/><text class="jfv ${i?'lo':''}" x="${x0+120+bw}" y="${yy+7}">${esc(fmt(v))}</text>`; }).join('')}</g>`; };
        H=`<svg class="jr-h" viewBox="0 0 900 350" aria-hidden="true"><line class="jb" x1="60" y1="${ry}" x2="840" y2="${ry}"/><line class="jf" x1="60" y1="${ry}" x2="840" y2="${ry}" pathLength="1"/>
          <line class="jc" x1="450" y1="150" x2="450" y2="${ry-26}"/>${b.steps.map(([ic],i)=>node(ic,xs[i],ry,i,i===f.at?'jx':'')).join('')}${labelsH(xs,ry)}${card(450,6,440,230)}</svg>`;
        const ys=[40,150,260,560,670];
        V=`<svg class="jr-v" viewBox="0 0 360 740" aria-hidden="true"><line class="jb" x1="${rx}" y1="40" x2="${rx}" y2="670"/><line class="jf" x1="${rx}" y1="40" x2="${rx}" y2="670" pathLength="1"/>
          ${b.steps.map(([ic],i)=>node(ic,rx,ys[i],i,i===f.at?'jx':'')).join('')}${labelsV(ys,rx)}<line class="jc" x1="${rx+26}" y1="260" x2="${rx+40}" y2="260"/><line class="jc" x1="206" y1="304" x2="206" y2="318"/>${card(204,320,300,100)}</svg>`;
      } else if(b.mode==='t1'){ const ry=170;
        H=`<svg class="jr-h" viewBox="0 0 900 300" aria-hidden="true"><rect class="jband" x="282" y="${ry-38}" width="140" height="76" rx="16" style="fill:var(--sky)"/><line class="jb full" x1="60" y1="${ry}" x2="840" y2="${ry}"/>
          ${b.steps.map(([ic],i)=>node(ic,xs[i],ry,i,'on'+(i>1?' dim':''))).join('')}${labelsH(xs,ry)}<line class="jc" x1="352" y1="66" x2="352" y2="${ry-18}"/>${face(352,ry)}${stick(b.t1,372,8,440,'sky','',52)}</svg>`;
        const ys=[40,150,400,510,620];
        V=`<svg class="jr-v" viewBox="0 0 360 680" aria-hidden="true"><rect class="jband" x="${rx-30}" y="200" width="60" height="160" rx="16" style="fill:var(--sky)"/><line class="jb full" x1="${rx}" y1="40" x2="${rx}" y2="620"/>
          ${b.steps.map(([ic],i)=>node(ic,rx,ys[i],i,'on'+(i>1?' dim':''))).join('')}${labelsV(ys,rx)}<line class="jc" x1="${rx+18}" y1="280" x2="70" y2="280"/>${face(rx,280)}${stick(b.t1,212,226,284,'sky','',34)}</svg>`;
      } else { const ry=170;
        H=`<svg class="jr-h" viewBox="0 0 900 430" aria-hidden="true"><rect class="jband" x="672" y="${ry-38}" width="140" height="76" rx="16" style="fill:var(--pink)"/><line class="jb full" x1="60" y1="${ry}" x2="840" y2="${ry}"/>
          <path class="jl" pathLength="1" d="M690 ${ry} C708 ${ry} 708 ${ry+22} 708 ${ry+50} V${ry+120} C708 ${ry+140} 722 ${ry+150} 742 ${ry+150} C762 ${ry+150} 776 ${ry+140} 776 ${ry+120} V${ry+50} C776 ${ry+22} 776 ${ry} 794 ${ry}"/>
          ${b.steps.map(([ic],i)=>node(ic,xs[i],ry,i,'on'+(i<3?' dim':''))).join('')}${node('mail',742,ry+150,9,'jm')}${labelsH(xs,ry)}<line class="jc" x1="742" y1="85" x2="742" y2="${ry-18}"/>${face(742,ry)}
          ${stick(b.t2a,690,8,380,'pink','',44)}${stick(b.t2b,742,ry+186,250,'paper','dashed')}</svg>`;
        const ys=[40,150,260,370,670];
        V=`<svg class="jr-v" viewBox="0 0 360 730" aria-hidden="true"><rect class="jband" x="${rx-30}" y="420" width="60" height="210" rx="16" style="fill:var(--pink)"/><line class="jb full" x1="${rx}" y1="40" x2="${rx}" y2="670"/>
          ${b.steps.map(([ic],i)=>node(ic,rx,ys[i],i,'on'+(i<3?' dim':''))).join('')}${labelsV(ys,rx)}<line class="jc" x1="${rx+18}" y1="478" x2="70" y2="478"/>${face(rx,478)}${stick(b.t2a,212,430,284,'pink','',34)}${stick(b.t2b,212,560,284,'paper','dashed')}</svg>`;
      }
      const sr=b.mode==='base'?`${X(b.fr.h)}: ${b.fr.stats.map(([l,v])=>`${X(l)} ${esc(fmt(v))}`).join(', ')}`:b.mode==='t1'?`${X(b.t1.tag)}: ${X(b.t1.h)}`:`${X(b.t2a.tag)}: ${X(b.t2a.h)}. ${X(b.t2a.q)} ${X(b.t2b.tag)}: ${X(b.t2b.h)}.`;
      if(b.flow){ const F=b.flow, n=F.steps.length;
        return `<figure class="scene jr2 m-${b.mode} has-flow" data-anim="journey" data-mode="${b.mode}"><div class="jv-top"><span class="sc-k">${X(b.label)}</span>
          <div class="jv-sw" role="group" aria-label="${u('v_label')}"><button type="button" data-view="schema" aria-pressed="true">${u('v_schema')}</button><button type="button" data-view="flow" aria-pressed="false">${u('v_flow')}</button></div></div>
          <div class="jv jv-schema">${H}${V}<p class="sr">${b.steps.map(([ic,h])=>X(h)).join(' → ')}. ${sr}</p>${b.cap?`<figcaption>${X(b.cap)}</figcaption>`:''}</div>
          <div class="jv jv-flow" hidden data-n="${n}" data-src="${F.src}"><div class="fl-frame"><img src="${F.src}1.webp" alt="${u('fl_step')} 1: ${X(F.steps[0])}" loading="lazy" tabindex="0" data-zoom></div>
            <div class="fl-bar"><button type="button" class="fl-pp" data-flpp aria-label="${u('fl_pause')}" data-l-pause="${u('fl_pause')}" data-l-play="${u('fl_play')}"><span aria-hidden="true">❚❚</span></button>
            <ol class="fl-steps">${F.steps.map((l,i)=>`<li><button type="button" data-fl="${i}" ${i?'':'aria-current="step"'}><i aria-hidden="true"></i><span class="fl-n">${i+1}</span><span class="fl-l">${X(l)}</span></button></li>`).join('')}</ol></div>
            <figcaption>${X(F.cap)}</figcaption></div></figure>`; }
      return `<figure class="scene jr2 m-${b.mode}" data-anim="journey" data-mode="${b.mode}"><span class="sc-k">${X(b.label)}</span>${H}${V}
        <p class="sr">${b.steps.map(([ic,h])=>X(h)).join(' → ')}. ${sr}</p>${b.cap?`<figcaption>${X(b.cap)}</figcaption>`:''}</figure>`; }
    case 'trip': return tripHTML(b);
    case 'lead': return `<p class="s-lead">${X(b.t)}</p>`;
    case 'img': return `<figure class="s-fig"><img src="${b.src}" alt="${X(b.cap)}" decoding="async" tabindex="0" data-zoom><figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'bars': return `<figure class="scene" data-anim="bars"><span class="sc-k">${X(b.label)}</span>${b.rows.map(([l,v,c])=>`<div class="sc-row"><span>${X(l)}</span><i><em class="${c||''}" data-w="${(v/(b.max||100)*100).toFixed(1)}"></em></i><b>${esc(fmt(v))}%</b></div>`).join('')}<figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'split': if(b.h) return `<div class="s-res"><h3 class="s-h3">${X(b.h)}</h3>${b.intro?`<p class="s-p">${X(b.intro)}</p>`:''}<div class="sc-split n${b.items.length}">${b.items.map(([k,v,t,up])=>`<div><span class="sc-k">${X(k)}</span><strong class="${up?'up':''}">${esc(fmt(tr(v)))}</strong><span>${X(t)}</span></div>`).join('')}</div>${b.meta?`<p class="s-foot">${X(b.meta)}</p>`:''}</div>`;
    case 'split': return `<figure class="scene">${b.meta?`<p class="sc-meta">${X(b.meta)}</p>`:''}${b.h?`<h3 class="sc-h">${X(b.h)}</h3>`:''}${b.intro?`<p class="sc-intro">${X(b.intro)}</p>`:''}<div class="sc-split n${b.items.length}">${b.items.map(([k,v,t,up])=>`<div><span class="sc-k">${X(k)}</span><strong class="${up?'up':''}">${esc(fmt(tr(v)))}</strong><span>${X(t)}</span></div>`).join('')}</div>${b.cap?`<figcaption>${X(b.cap)}</figcaption>`:''}</figure>`;
    case 'h': return `<h3 class="s-h3">${X(b.t)}</h3>`;
    case 'dots': return `<figure class="scene" data-anim="dots" data-total="${b.total}" data-no="${b.no}">
        <div class="sc-cnt" aria-hidden="true"><div class="tot"><span data-n="tot">0</span><small>${X(b.l_tot)}</small></div>
          <span class="grp"><i class="sw yes"></i><b data-n="yes">0</b> ${X(b.l_yes)}</span><span class="grp"><i class="sw no"></i><b data-n="no">0</b> ${X(b.l_no)}</span></div>
        <div class="sc-dots" aria-hidden="true">${'<i></i>'.repeat(b.total)}</div><p class="sr">${X(b.sr)}</p>${b.cap?`<figcaption>${X(b.cap)}</figcaption>`:''}</figure>`;
    case 'tl': return `<figure class="scene"><ol class="sc-tl">${b.items.map(([h,t,hit],i)=>`<li class="${hit?'hit':''}"><span class="c" aria-hidden="true">${hit?'★':i+1-(b.items.slice(0,i).some(x=>x[2])?1:0)}</span><b>${X(h)}</b>${t?`<em>${X(t)}</em>`:''}</li>`).join('')}</ol><figcaption>${X(b.cap)}</figcaption></figure>`;
    case 'quiz': return `<div class="scene quiz" data-quiz="${p.id}"><div class="qz-head"><span class="qz-tag">${spark}${u('qz_tag')}</span><h3 id="qz-${p.id}">${X(b.q)}</h3></div><p class="muted">${X(b.sub)}</p>
        <div class="qz-opts" role="group" aria-labelledby="qz-${p.id}">${b.opts.map(o=>`<button type="button" class="qz-opt${o.img?' qz-img':''}" data-pick="${o.id}" aria-pressed="false">${o.img?`<img src="${o.img}" alt="" decoding="async">`:`<span class="mock ${o.mock}" aria-hidden="true">${o.mock==='a'?'<b>BBVA</b><small>25%</small>':'<b>TaxDown | BBVA</b><small>25%</small>'}</span><strong>${X(o.h)}</strong>`}<span class="qz-t">${X(o.t)}</span><span class="qz-go">${o.img?`${u('qz_choose')} ${o.id.toUpperCase()}`:`${u('qz_pick')} →`}</span>${o.img?`<span class="qz-letter" aria-hidden="true">${o.id.toUpperCase()}</span>`:''}</button>`).join('')}</div>
        <div class="qz-lock" aria-hidden="true">${b.rows.map(()=>`<div class="sc-row"><span class="lk-l"></span><i></i><b>?</b></div>`).join('')}<p>${u('qz_hint')}</p></div>
        <div class="qz-res" hidden aria-live="polite">${b.rows.map(([l,v,c])=>`<div class="sc-row"><span>${X(l)}</span><i><em class="${c||''}" data-w="${(v/Math.max(...b.rows.map(r=>r[1]))*100).toFixed(1)}"></em></i><b>${esc(fmt(v))}${b.unit||''}</b></div>`).join('')}
          <p class="qz-v" data-ok="${X(b.ok)}" data-ko="${X(b.ko)}" data-win="${b.win}"></p>
          ${b.img?`<figure class="s-fig"><img src="${b.img}" alt="${X(b.imgcap)}" loading="lazy" tabindex="0" data-zoom><figcaption>${X(b.imgcap)}</figcaption></figure>`:''}${b.note?`<p class="qz-note">${X(b.note)}</p>`:''}</div></div>`;
    case 'impact': { const c=([k,v,t,d])=>`<div><span class="sc-k">${X(k)}</span><strong>${ph(tr(v))}</strong><span>${d?`<span class="ph">${X(t)}</span>`:X(t)}</span></div>`;
      return `<figure class="scene"><div class="sc-imp">${c(b.from)}<span class="ar" aria-hidden="true">→</span>${c(b.to)}</div>${b.more?`<p class="imp-more"><a href="#s-${p.id}-ask" data-ask-open="${b.more}">${u('see_calc')} →</a></p>`:''}</figure>`; }
  }
  return block(b,p,ids);
}
function askPanel(a){
  if(a.draft) return `<p class="ph">${u('draft')}</p>`;
  if(a.m) return `<div class="ask-m">${a.m.map(([v,t,d])=>`<div><strong>${d?`<span class="ph">${esc(tr(v))}</span>`:esc(fmt(tr(v)))}</strong><span>${X(t)}</span></div>`).join('')}</div>${a.note?`<p class="ask-note">${X(a.note)}</p>`:''}`;
  if(a.learn) return `<ul class="b-list ask-lb">${a.learn.map(([h,t])=>`<li><b>${X(h)}.</b> ${X(t)}</li>`).join('')}</ul>`;
  if(a.list) return `<ul class="b-list">${a.list.map(x=>`<li>${X(x)}</li>`).join('')}</ul>`;
  if(a.dec){ const pills=a.dec.some(([,d])=>d!=='no');
    return `<div class="ask-t"><table><thead><tr><th scope="col">${u('th_opt')}</th>${pills?`<th scope="col">${u('th_dec')}</th>`:''}<th scope="col">${u('th_why')}</th></tr></thead><tbody>${a.dec.map(([o,d,w])=>`<tr><th scope="row">${X(o)}</th>${pills?`<td><span class="dec-pill ${d}">${u('d_'+d)}</span></td>`:''}<td>${X(w)}</td></tr>`).join('')}</tbody></table></div>`; }
  return a.t?`<p>${X(a.t)}</p>`:'';
}
function askHTML(p){
  return `<section class="ask" id="s-${p.id}-ask" aria-labelledby="ask-h-${p.id}"><h2 id="ask-h-${p.id}">${u('ask_h')}</h2><p class="muted">${u('ask_sub')}</p>
    <div class="ask-acc">${p.ask.map(a=>`<details class="ask-i" data-ask="${a.id}"><summary><span>${X(a.q)}</span><i aria-hidden="true"></i></summary><div class="ask-p">${askPanel(a)}</div></details>`).join('')}</div></section>`;
}
function storyCaseHTML(p){
  const ids=[]; const body=p.blocks.map(b=>sBlock(b,p,ids)).join('');
  ids.push([`s-${p.id}-ask`, u('ask_h'), u('ask_sub')]);
  // side index: chapter number as title, chapter heading as description
  const secs=[[`case-top-${p.id}`, u('overview'), tr(p.lede||p.title)], ...ids];
  const cut=t=>t.length>120?t.slice(0,118).replace(/\s+\S*$/,'')+'…':t;
  return `<div class="sheet-bar"><button class="icon-btn" data-act="close" aria-label="${u('close')}">${icon.x}</button><span class="meta">${p.company}, ${p.year} · ${X(p.short)}</span></div>
    <div class="case-wrap"><nav class="sec-nav" aria-label="${u('jump')}">${secs.map(([id,t,sn],k)=>`<a href="#${id}" data-jump="${id}" class="${k===0?'on':''}"><i aria-hidden="true"></i><span class="sec-pop"><b>${esc(t)}</b>${sn?`<small>${esc(cut(sn))}</small>`:''}</span></a>`).join('')}</nav>
    <article class="sheet-in story" style="--tone:var(${p.tone})">
      <header class="case-h" id="case-top-${p.id}">${tagsHTML(p)}<h1 id="case-title">${X(p.h1||p.title)}</h1>
        ${p.lede?`<p class="s-lede">${X(p.lede)}</p>`:''}
        <dl class="facts">${p.facts.map(([k,v])=>`<div><dt>${X(k)}</dt><dd>${X(v).split('\n').map((l,j)=>`<span class="${j?'f2':'f1'}">${l}</span>`).join('')}</dd></div>`).join('')}</dl></header>
      <section class="s-sum n${p.sum.length}" aria-label="${u('overview')}">${p.sum.map(c=>`<div class="sum-c ${c.tone||''}"><span class="sc-k">${X(c.k)}</span>${c.big?`<p class="sum-big"><span aria-hidden="true">${X(c.big)}</span><span class="sr">${X(c.bigl)}</span></p>`:''}<p>${X(c.t).replace(/\[\[(.+?)\]\]/,'<b class="sum-n">$1</b>')}${c.pp?`&nbsp;<b class="sum-pp">·&nbsp;${X(c.pp)}</b>`:''}</p>${c.chip?`<span class="sum-chip">${X(c.chip)}</span>`:''}${c.note?`<p class="sum-note">${X(c.note)}</p>`:''}</div>`).join('')}</section>
      <div class="s-body">${body}</div>
      ${askHTML(p)}
      ${p.notion?`<footer class="sheet-foot"><a class="link" href="${p.notion}" target="_blank" rel="noopener">${u('full')}</a></footer>`:''}
    </article></div>`;
}
function initStory(sheet){
  const once=(el,fn)=>{ if(reduce||!('IntersectionObserver' in window)){fn(true);return} const o=new IntersectionObserver(e=>{ if(e[0].isIntersecting){fn(false);o.disconnect()} },{root:sheet,threshold:.45}); o.observe(el); };
  const ch=sheet.querySelector('.s30 .chain'); ch&&once(ch,()=>ch.classList.add('on'));
  const sm=sheet.querySelector('.s-sum'); sm&&once(sm,()=>sm.classList.add('on'));
  sheet.querySelectorAll('[data-anim="journey"]').forEach(f=>once(f,instant=>{
    if(f.dataset.mode!=='base'){ f.classList.add('on'); return; }
    const set=p=>{ f.querySelectorAll('.jf').forEach(l=>l.style.strokeDashoffset=1-Math.min(1,p/4));
      f.querySelectorAll('[data-p]').forEach(n=>n.classList.toggle('on',p>=+n.dataset.p-.02));
      f.classList.toggle('on',p>=2); };
    if(instant){ set(4); return; }
    let t0=null; const dur=2600; const st=ts=>{ if(!t0) t0=ts; const k=Math.min(1,(ts-t0)/dur), e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2; set(e*4); if(k<1) requestAnimationFrame(st); }; set(0); requestAnimationFrame(st);
  }));
  sheet.querySelectorAll('[data-quiz]').forEach(q=>once(q,instant=>{ if(instant) return; q.classList.add('nudge');
    const h=q.querySelector('.qz-head'); if(h && !h.querySelector('.h1-sparks')) h.insertAdjacentHTML('beforeend',quizSparks()); }));
  sheet.querySelectorAll('[data-anim="trip"]').forEach(f=>once(f,instant=>tripInit(f,instant)));
  sheet.querySelectorAll('[data-anim="bars"]').forEach(f=>once(f,()=>f.querySelectorAll('em').forEach(e=>e.style.width=e.dataset.w+'%')));
  sheet.querySelectorAll('[data-anim="dots"]').forEach(f=>once(f,instant=>{
    const d=[...f.querySelectorAll('.sc-dots i')], T=+f.dataset.total, N=+f.dataset.no, n=k=>f.querySelector(`[data-n="${k}"]`), cnt=f.querySelector('.sc-cnt');
    const order=d.map((_,i)=>i); for(let i=order.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [order[i],order[j]]=[order[j],order[i]]; }
    const forgot=new Set(order.slice(0,N));
    if(instant){ d.forEach((x,i)=>x.classList.add('in',forgot.has(i)?'no':'yes')); n('tot').textContent=T; n('yes').textContent=T-N; n('no').textContent=N; cnt.classList.add('ph2'); return; }
    let k=0; const a=setInterval(()=>{ if(k>=T){ clearInterval(a); setTimeout(ph2,250); return; } d[k++].classList.add('in'); n('tot').textContent=k; },12);
    function ph2(){ cnt.classList.add('ph2'); let m=0,y=0,z=0; const b=setInterval(()=>{ if(m>=T){clearInterval(b);return} const i=order[T-1-m++]; if(forgot.has(i)){ d[i].classList.add('no'); n('no').textContent=++z; } else { d[i].classList.add('yes'); n('yes').textContent=++y; } },16); }
  }));
}
/* Anonymous "Ask me" tracking: case, question, language and focus. No cookies, no personal data. Web only (/api/event). */
const tracked=new Set();
function track(c,q){ const k=c+'|'+q; if(tracked.has(k)) return; tracked.add(k);
  if(!/^https?:/.test(location.protocol)) return;
  try{ fetch('/api/event',{method:'POST',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({c,q,lang:S.lang,focus:curF()})}).catch(()=>{}); }catch(e){} }
function selAsk(t,focus){ const box=t.closest('.ask'); box.querySelectorAll('[role="tab"]').forEach(x=>{ const on=x===t; x.setAttribute('aria-selected',on); x.tabIndex=on?0:-1; box.querySelector('#'+x.getAttribute('aria-controls')).hidden=!on; });
  S.askTab=t.dataset.ask; if(focus) t.focus(); if(S.openId) track(S.openId,t.dataset.ask); }
document.addEventListener('toggle',e=>{ const d=e.target; if(d.matches&&d.matches('details.ask-i')&&d.open&&S.openId) track(S.openId,d.dataset.ask); },true);
document.addEventListener('click',e=>{ const a=e.target.closest('[data-ask-open]'); if(!a) return; e.preventDefault();
  const sh=a.closest('.sheet-in')||document; const d=sh.querySelector(`.ask-i[data-ask="${a.dataset.askOpen}"]`); if(!d) return;
  d.open=true; d.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'}); d.querySelector('summary').focus({preventScroll:true}); });
/* Small confetti burst from the chosen card (only on a correct pick, skipped with reduced motion) */
function confetti(el){ const box=document.createElement('span'); box.className='cf'; box.setAttribute('aria-hidden','true');
  const cols=['#00A86B','#FFC6E3','#FFE7A1','#CDBFFF','#C2E2FF'];
  for(let k=0;k<28;k++){ const c=document.createElement('i'); const a=Math.random()*Math.PI*2, d=60+Math.random()*90;
    c.style.cssText=`--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d-40}px;--r:${Math.random()*540-270}deg;background:${cols[k%cols.length]};animation-delay:${Math.random()*80}ms`; box.appendChild(c); }
  el.appendChild(box); setTimeout(()=>box.remove(),1300); }
document.addEventListener('click',e=>{
  const o=e.target.closest('[data-quiz] [data-pick]'); if(!o) return;
  const qz=o.closest('[data-quiz]'), res=qz.querySelector('.qz-res'), v=qz.querySelector('.qz-v');
  qz.querySelectorAll('[data-pick]').forEach(x=>x.setAttribute('aria-pressed',x===o));
  qz.classList.add('done'); qz.querySelectorAll('[data-pick]').forEach(x=>x.classList.toggle('is-win',x.dataset.pick===v.dataset.win));
  if(o.dataset.pick===v.dataset.win && !matchMedia('(prefers-reduced-motion: reduce)').matches) confetti(o);
  res.hidden=false; const lk=qz.querySelector('.qz-lock'); if(lk) lk.remove(); v.textContent=o.dataset.pick===v.dataset.win?v.dataset.ok:v.dataset.ko;
  requestAnimationFrame(()=>res.querySelectorAll('em').forEach(e=>e.style.width=e.dataset.w+'%'));
});
/* Journey: schema / real flow switch and a small frame player */
const flT=new WeakMap();
function flGo(box,i){ const n=+box.dataset.n, img=box.querySelector('.fl-frame img'), bs=box.querySelectorAll('[data-fl]'); i=(i+n)%n; box.dataset.i=i;
  img.src=box.dataset.src+(i+1)+'.webp'; img.alt=`${u('fl_step')} ${i+1}: ${bs[i].querySelector('.fl-l').textContent}`;
  bs.forEach((b,k)=>{ if(k===i) b.setAttribute('aria-current','step'); else b.removeAttribute('aria-current'); b.classList.toggle('done',k<i); }); }
function flPlay(box,on){ clearInterval(flT.get(box)); const pp=box.querySelector('[data-flpp]'); box.classList.toggle('playing',on);
  pp.setAttribute('aria-label',on?pp.dataset.lPause:pp.dataset.lPlay); pp.querySelector('span').textContent=on?'❚❚':'▶';
  if(on) flT.set(box,setInterval(()=>flGo(box,(+box.dataset.i||0)+1),3000)); }
document.addEventListener('click',e=>{
  const v=e.target.closest('[data-view]'); if(v){ const f=v.closest('figure'); f.querySelectorAll('[data-view]').forEach(x=>x.setAttribute('aria-pressed',x===v));
    const flow=v.dataset.view==='flow', box=f.querySelector('.jv-flow,.tr-flow'); f.querySelector('.jv-schema').hidden=flow; box.hidden=!flow;
    if(!box.classList.contains('jv-flow')) return;
    if(flow){ flGo(box,+box.dataset.i||0); flPlay(box,!reduce); } else flPlay(box,false); return; }
  const st=e.target.closest('[data-fl]'); if(st){ const box=st.closest('.jv-flow'); flPlay(box,false); flGo(box,+st.dataset.fl); return; }
  const pp=e.target.closest('[data-flpp]'); if(pp){ const box=pp.closest('.jv-flow'); flPlay(box,!box.classList.contains('playing')); }
});
document.addEventListener('keydown',e=>{ const t=e.target.closest&&e.target.closest('.ask [role="tab"]'); if(!t) return;
  const tabs=[...t.parentElement.children], i=tabs.indexOf(t); let j=null;
  if(e.key==='ArrowRight') j=(i+1)%tabs.length; else if(e.key==='ArrowLeft') j=(i-1+tabs.length)%tabs.length; else if(e.key==='Home') j=0; else if(e.key==='End') j=tabs.length-1;
  if(j!==null){ e.preventDefault(); selAsk(tabs[j],true); } });
function openCase(id){
  const p=P.find(x=>x.id===id); if(!p) return; let sheet=$('#sheet');
  if(!sheet){ S.lastFocus=document.activeElement;
    const scrim=document.createElement('div'); scrim.className='scrim'; scrim.id='scrim'; scrim.dataset.act='close';
    sheet=document.createElement('div'); sheet.className='sheet'; sheet.id='sheet'; sheet.setAttribute('role','dialog'); sheet.setAttribute('aria-modal','true'); sheet.setAttribute('aria-labelledby','case-title');
    document.body.append(scrim,sheet); document.body.style.overflow='hidden';
    requestAnimationFrame(()=>{scrim.classList.add('on'); sheet.classList.add('on');}); }
  S.openId=id; sheet.innerHTML=caseHTML(p); sheet.scrollTop=0; $('[data-act="close"]',sheet).focus(); if(p.story) initStory(sheet);
  if(!sheet.dataset.spy){ sheet.dataset.spy=1; sheet.addEventListener('scroll',()=>secSpy(sheet),{passive:true}); }
  secSpy(sheet);
}
function secSpy(sheet){
  const links=[...sheet.querySelectorAll('.sec-nav a')]; if(!links.length) return;
  const line=sheet.getBoundingClientRect().top+innerHeight*.3; let cur=0;
  links.forEach((a,k)=>{ const t=document.getElementById(a.dataset.jump); if(t && t.getBoundingClientRect().top<=line) cur=k; });
  if(sheet.scrollTop+sheet.clientHeight>=sheet.scrollHeight-4) cur=links.length-1;
  links.forEach((a,k)=>{ a.classList.toggle('on',k===cur); a.classList.toggle('past',k<cur); if(k===cur) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); });
}
function closeCase(){ const sheet=$('#sheet'), scrim=$('#scrim'); if(!sheet) return;
  sheet.classList.remove('on'); scrim.classList.remove('on'); S.openId=null;
  setTimeout(()=>{sheet.remove(); scrim.remove(); document.body.style.overflow='';}, reduce?0:220);
  if(S.lastFocus && document.contains(S.lastFocus)) S.lastFocus.focus(); }

/* ---------- Feedback form ---------- */
async function sendFeedback(e){
  e.preventDefault();
  const st=$('#f-status'), btn=$('#f-send');
  const msg=$('#f-msg').value.trim(), name='', mail=$('#f-mail').value.trim();
  $('#f-msg').removeAttribute('aria-invalid'); $('#f-mail').removeAttribute('aria-invalid');
  if(!msg){ st.className='f-st err'; st.textContent=u('f_err_empty'); $('#f-msg').setAttribute('aria-invalid','true'); $('#f-msg').focus(); return; }
  if(mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){ st.className='f-st err'; st.textContent=u('f_err_mail'); $('#f-mail').setAttribute('aria-invalid','true'); $('#f-mail').focus(); return; }
  const subject=`Portfolio${name?` · ${name}`:''}`;
  const body=`${msg}\n\n— ${name||'Anonymous'}${mail?` (${mail})`:''}\n${S.focus?`Focus: ${tr(FOCUS[S.focus].t)}`:''}`;
  btn.disabled=true; btn.textContent=u('f_sending'); st.className='f-st'; st.textContent='';
  try{
    const ctl=new AbortController(); const to=setTimeout(()=>ctl.abort(),9000);
    const r=await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`,{signal:ctl.signal,method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({_subject:subject, name:name||'—', email:mail||'—', message:msg, _template:'table', _captcha:'false'})});
    clearTimeout(to); const j=await r.json().catch(()=>({}));
    if(!r.ok || j.success===false || j.success==='false') throw new Error('fail');
    st.className='f-st ok'; st.textContent=u('f_ok'); S.form={name:'',mail:'',msg:''}; $('#fb').reset();
  }catch(err){
    const href=`mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    st.className='f-st warn'; st.innerHTML=`<p>${u('f_fail')}</p><div class="f-alt"><a class="btn ghost" href="${href}">${u('f_open')}</a><button type="button" class="small-btn" data-act="copymsg">${u('f_copy')}</button></div>`;
    st.dataset.body=`To: ${PROFILE.email}\nSubject: ${subject}\n\n${body}`;
  }
  btn.disabled=false; btn.textContent=u('f_send');
}


/* ---------- The tip of the iceberg (inspired by Iceberger, Joshua Tauberer) ---------- */
const CUR_IC='<svg class="cur-ic" viewBox="0 0 12 16" aria-hidden="true"><path d="M1 1v12l3.2-3 2.3 5 2-1-2.3-4.8H10z" fill="#fff" stroke="#1B1724" stroke-width="1.4" stroke-linejoin="round"/></svg>';
const ICE = {
  btn:['Want to see what’s below the surface?','¿Quieres ver lo que hay bajo la superficie?'],
  try:['Try me','Pruébame'],
  btn_sub:['Get to know me better: draw an iceberg and see how much of me you’ve seen so far.','Conóceme mejor: dibuja un iceberg y descubre cuánto de mí has visto hasta ahora.'],
  title:['The tip of the iceberg','La punta del iceberg'],
  hero_tag:['Try me','Pruébame'], hero_h:['Let’s break the ice.','Rompamos el hielo.'], hero_p:['Draw an iceberg and see how it will float.','Dibuja un iceberg y mira cómo flota.'],
  draw:['Draw an iceberg','Dibuja un iceberg'],
  small:['Try a bigger shape.','Prueba con una forma más grande.'],
  floating:['Letting it float…','Dejándolo flotar…'],
  pct:['Only {p}% of your iceberg is above the water. That’s about how much of me fits in a portfolio.','Solo un {p}% de tu iceberg asoma por encima del agua. Más o menos lo que cabe de mí en un portfolio.'],
  flip:['Did you see that? It flipped. First impressions rarely match how things really are.','¿Lo has visto? Ha volcado. Las primeras impresiones casi nunca coinciden con cómo son las cosas.'],
  noflip:['You drew it the way it really floats. Still, most of it stays under the surface.','Lo has dibujado tal y como flota de verdad. Aun así, casi todo queda bajo la superficie.'],
  depth_h:['Below the surface','Bajo la superficie'],
  end:['This is just the tip. Dare to meet the rest?','Esto es solo la punta. ¿Te atreves a conocer el resto?'],
  msgs:[
    [['Only {p}% of your iceberg shows above the water. That’s about as much of me as a portfolio can show.','Solo un {p}% de tu iceberg asoma por encima del agua. Más o menos lo que puedo enseñarte de mí en un portfolio.'],['Dare to meet the rest?','¿Te atreves a conocer el resto?']],
    [['Another one? If you drew it again, you must find this clever, so imagine what I’m like!','¿Otro? Si has vuelto a dibujarlo es que te parece ingenioso, ¡así que imagínate cómo soy yo!'],['Try reaching out.','Prueba a escribirme.']],
    [['Don’t resist: besides designing well, I’m genuinely lovely to work with.','No te resistas: además de diseñar bien, soy majísima.'],['','']]
  ],
  again:['Draw another','Dibujar otro'], auto:['Rather not draw? Draw one for me','¿No te apetece dibujar? Dibújalo por mí'], close:['Close','Cerrar'],
  credit:['Inspired by Iceberger, by Joshua Tauberer','Inspirado en Iceberger, de Joshua Tauberer'],
  facts:[
    ['−10 m',['Fine Arts before pixels.','Bellas Artes antes que píxeles.']],
    ['−30 m',['Graphic designer first. Product designer since 2020.','Primero diseñadora gráfica. Product designer desde 2020.']],
    ['−60 m',['My first app was for mushroom foragers. It won the Ironhack Hackshow.','Mi primera app fue para recolectores de setas. Ganó el Hackshow de Ironhack.']],
    ['−100 m',['When a team needs a tool yesterday, I build it myself with AI.','Cuando un equipo necesita una herramienta para ayer, la construyo yo con IA.']],
    ['−150 m',['I ran workshops mapping taxpayers into 17 different profiles.','He hecho workshops mapeando contribuyentes en 17 perfiles distintos.']],
    ['−200 m',['A good designer because a terrible user: I notice every bit of friction.','Buena diseñadora porque soy pésima usuaria: noto cada fricción.']]
  ]
};
const ICE_PX=['...XXXXXXX..','..XooooooXX.','.XooooooXoX.','XXXXXXXXooX.','XoooooooXoX.','XoXXooooXoX.','XoXoooooXoX.','XoooooooXoX.','XoooooooXX..','XXXXXXXXX...'];
S.iceOpen=false;
function icebergHTML(){
  return `<div class="ice-wrap">
    ${S.iceOpen?'':`<span class="sticker ice-try" aria-hidden="true">${spark}${X(ICE.try)}</span>`}
    <button class="ice-btn" data-act="ice-toggle" aria-expanded="${S.iceOpen}" aria-controls="ice-panel">${pixel(ICE_PX,'ice-px')}<span><b>${X(ICE.btn)}</b><small>${X(ICE.btn_sub)}</small></span><span class="ice-chev" aria-hidden="true">${icon.r}</span></button>
    <div class="ice-panel" id="ice-panel" ${S.iceOpen?'':'hidden'}>
      <div class="ice-head"><h3>${X(ICE.title)}</h3><button class="icon-btn" data-act="ice-toggle" aria-label="${X(ICE.close)}">${icon.x}</button></div>
      <p class="ice-msg" id="ice-msg" aria-live="polite"></p>
      <div class="ice-grid">
        <div class="ice-stage"><canvas id="ice-cv" aria-label="${X(ICE.draw)}"></canvas><p class="ice-hint" id="ice-hint">${CUR_IC}${X(ICE.draw)}</p></div>
      </div>
      <div class="ice-foot"><span class="ice-actions"><button class="link" data-act="ice-auto">${X(ICE.auto)}</button></span>
        <a class="ice-credit" href="https://joshdata.me/iceberger.html" target="_blank" rel="noopener">${X(ICE.credit)}</a></div>
    </div></div>`;
}

const Ice = (()=>{
  let cv, ctx, W, H, water, pts=[], drawing=false, poly=null, vel=0, ang=0, raf=0, still=0, startTheta=0, theta=0, done=false;
  const col = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const area = P => { let a=0; for(let i=0;i<P.length;i++){ const [x1,y1]=P[i],[x2,y2]=P[(i+1)%P.length]; a+=x1*y2-x2*y1; } return a/2; };
  const centroid = P => { let a=area(P), cx=0, cy=0; if(!a) return [0,0];
    for(let i=0;i<P.length;i++){ const [x1,y1]=P[i],[x2,y2]=P[(i+1)%P.length], f=x1*y2-x2*y1; cx+=(x1+x2)*f; cy+=(y1+y2)*f; } return [cx/(6*a), cy/(6*a)]; };
  const inertia = (P,c) => { let s=0; for(let i=0;i<P.length;i++){ const x1=P[i][0]-c[0],y1=P[i][1]-c[1],x2=P[(i+1)%P.length][0]-c[0],y2=P[(i+1)%P.length][1]-c[1], f=x1*y2-x2*y1;
      s+=f*(x1*x1+x1*x2+x2*x2+y1*y1+y1*y2+y2*y2); } return Math.abs(s/12); };
  const clipBelow = P => { const out=[]; for(let i=0;i<P.length;i++){ const a=P[i], b=P[(i+1)%P.length], ia=a[1]>=water, ib=b[1]>=water;
      if(ia) out.push(a); if(ia!==ib){ const t=(water-a[1])/(b[1]-a[1]); out.push([a[0]+(b[0]-a[0])*t, water]); } } return out; };
  function size(){ const r=cv.getBoundingClientRect(), d=devicePixelRatio||1; W=r.width; H=r.height; cv.width=W*d; cv.height=H*d; ctx.setTransform(d,0,0,d,0,0); water=H*.38; }
  function scene(){
    ctx.clearRect(0,0,W,H);
    const sky=col('--paper'), sea=col('--sky'), deep=col('--lilac'), ink=col('--ink');
    ctx.fillStyle=sky; ctx.fillRect(0,0,W,water);
    ctx.fillStyle=sea; ctx.fillRect(0,water,W,H-water);
    if(poly){ ctx.beginPath(); poly.forEach(([x,y],i)=> i?ctx.lineTo(x,y):ctx.moveTo(x,y)); ctx.closePath();
      ctx.fillStyle='rgba(255,255,255,.95)'; ctx.fill(); ctx.lineWidth=2.5; ctx.lineJoin='round'; ctx.strokeStyle=ink; ctx.stroke();
      ctx.save(); ctx.clip(); ctx.fillStyle='rgba(60,90,200,.16)'; ctx.fillRect(0,water,W,H-water); ctx.restore(); }
    else if(pts.length>1){ ctx.beginPath(); pts.forEach(([x,y],i)=> i?ctx.lineTo(x,y):ctx.moveTo(x,y)); ctx.lineWidth=2.5; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.strokeStyle=ink; ctx.stroke(); }
    // waterline on top, dashed, retro
    ctx.save(); ctx.setLineDash([8,6]); ctx.strokeStyle=ink; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(0,water); ctx.lineTo(W,water); ctx.stroke(); ctx.restore();
    bubbles.forEach(b=>{ ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,7); ctx.strokeStyle=ink; ctx.lineWidth=1.5; ctx.globalAlpha=b.a; ctx.stroke(); ctx.globalAlpha=1; });
  }
  let bubbles=[];
  function step(){
    const A=Math.abs(area(poly)), C=centroid(poly), sub=clipBelow(poly), As=sub.length>2?Math.abs(area(sub)):0, Cs=sub.length>2?centroid(sub):C;
    const g=.32, ri=.9, Fb=As/(ri*A);              // buoyancy relative to weight
    vel += g*(1-Fb); vel*=.93;
    const I=inertia(poly,C)/A;                     // per unit mass
    const torque = -(Cs[0]-C[0]) * g * Fb;         // y-down coordinates
    ang += As? torque/I*18 : 0; ang*=.9;
    theta += ang;
    const c=Math.cos(ang), s=Math.sin(ang);
    poly = poly.map(([x,y])=>{ const dx=x-C[0], dy=y-C[1]; return [C[0]+dx*c-dy*s, C[1]+dx*s+dy*c+vel]; });
    return Math.abs(vel)<.02 && Math.abs(ang)<.0006;
  }
  function finish(){
    done=true; const A=Math.abs(area(poly)), sub=clipBelow(poly), As=Math.abs(area(sub)), p=Math.max(1,Math.round(100*(1-As/A)));
    const flipped=Math.abs(theta-startTheta)>.45;
    const mi=(Ice.drawn=(Ice.drawn||0)+1)-1; const M=ICE.msgs[mi % ICE.msgs.length];
    $('#ice-msg').innerHTML=`<span class="ice-txt">${spark}<span>${esc(tr(M[0]).replace('{p}',p))} ${esc(tr(M[1]))} <button class="link ice-link" data-go="contact">${u('talk')} →</button></span></span>`;
    $('#ice-hint').hidden=true;
    if(!reduce){
      const C=centroid(poly); for(let i=0;i<14;i++) bubbles.push({x:C[0]+(Math.random()-.5)*60, y:H-10-Math.random()*40, r:2+Math.random()*4, v:.6+Math.random()*1.1, a:.8});
      const bub=()=>{ bubbles.forEach(b=>{ b.y-=b.v; b.x+=Math.sin(b.y/14)*.4; if(b.y<water+6) b.a-=.06; }); bubbles=bubbles.filter(b=>b.a>0); scene(); if(bubbles.length) raf=requestAnimationFrame(bub); };
      raf=requestAnimationFrame(bub); }
    else scene();
  }
  function run(){
    const acts=$('.ice-actions'); if(acts) acts.hidden=true;
    $('#ice-hint').textContent=tr(ICE.floating); $('#ice-hint').hidden=false; vel=0; ang=(Math.random()<.5?-1:1)*.003; theta=0; startTheta=0; still=0; done=false;
    if(reduce){ for(let i=0;i<4000 && !(step()&&++still>30);i++); finish(); return; }
    let frames=0;
    const loop=()=>{ for(let k=0;k<2;k++){ if(step()) still++; else still=0; } frames++; scene();
      if(still>45 || frames>900){ finish(); return; } raf=requestAnimationFrame(loop); };
    raf=requestAnimationFrame(loop);
  }
  function close(P){ if(P.length<12) return false; const A=Math.abs(area(P)); return A > W*H*.012; }
  function down(e){ if(poly && !done) return; cancelAnimationFrame(raf); poly=null; bubbles=[]; pts=[[...xy(e)]]; drawing=true; cv.setPointerCapture(e.pointerId);
    $('#ice-hint').hidden=true; scene(); }
  function move(e){ if(!drawing) return; const p=xy(e), l=pts[pts.length-1]; if((p[0]-l[0])**2+(p[1]-l[1])**2>16){ pts.push(p); scene(); } }
  function up(){ if(!drawing) return; drawing=false;
    if(!close(pts)){ pts=[]; scene(); const h=$('#ice-hint'); h.textContent=tr(ICE.small); h.hidden=false; return; }
    poly=pts.slice(); pts=[]; run(); }
  const xy = e => { const r=cv.getBoundingClientRect(); return [e.clientX-r.left, e.clientY-r.top]; };
  function auto(){ cancelAnimationFrame(raf); bubbles=[]; const cx=W*(.35+Math.random()*.3), cy=water*.55, n=26, R=Math.min(W,H)*.2; pts=[];
    // an upright, top-heavy "cartoon" iceberg, the way people usually draw them
    for(let i=0;i<n;i++){ const t=i/n*Math.PI*2, wob=.75+Math.random()*.35; pts.push([cx+Math.cos(t)*R*.75*wob, cy+Math.sin(t)*R*1.25*wob - (Math.sin(t)<0?R*.25:0)]); }
    poly=pts.slice(); pts=[]; run(); }
  function reset(){ cancelAnimationFrame(raf); poly=null; pts=[]; bubbles=[]; done=false; if(!cv) return; const h=$('#ice-hint'); h.innerHTML=CUR_IC+esc(tr(ICE.draw)); h.hidden=false; scene(); }
  function init(){ cv=$('#ice-cv'); if(!cv || cv.dataset.init) return; cv.dataset.init='1'; ctx=cv.getContext('2d'); size(); reset();
    cv.addEventListener('pointerdown',down); cv.addEventListener('pointermove',move); cv.addEventListener('pointerup',up); cv.addEventListener('pointercancel',up);
    new ResizeObserver(()=>{ const ow=W, oh=H, ow2=water; size(); if(ow && (ow!==W || oh!==H)){ const sx=W/ow, sy=H/oh, f=([x,y])=>[x*sx, water+(y-ow2)*sx];
        if(poly) poly=poly.map(f); if(pts.length) pts=pts.map(f); bubbles=[]; } scene(); }).observe(cv); }
  return {init, reset, auto, stop:()=>cancelAnimationFrame(raf)};
})();

/* ---------- Attention cue for the iceberg button (plays once, until opened) ---------- */
let iceAttnPlayed=false, iceIO=null;
function iceBurst(btn){ const wrap=btn.parentElement, px=btn.querySelector('.ice-px'); if(!px) return;
  const wr=wrap.getBoundingClientRect(), r=px.getBoundingClientRect(), tones=['--butter','--lilac','--mint','--pink'];
  for(let i=0;i<4;i++){ const sp=document.createElement('span'); sp.className='ice-spark'; sp.setAttribute('aria-hidden','true');
    sp.innerHTML=`<svg viewBox="0 0 24 24" width="12" height="12"><path d="M12 1.5l2.3 7.2 7.2 2.3-7.2 2.3L12 20.5l-2.3-7.2L2.5 11l7.2-2.3z" style="fill:var(${tones[i]})"/></svg>`;
    sp.style.left=(r.left-wr.left+r.width/2)+'px'; sp.style.top=(r.top-wr.top+4)+'px'; wrap.append(sp);
    const dx=(i-1.5)*18, dy=-34-Math.random()*16;
    sp.animate([{transform:'translate(-50%,-50%) scale(.3)',opacity:0},{transform:'translate(-50%,-50%) scale(1.1)',opacity:1,offset:.25},{transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.6) rotate(${dx*4}deg)`,opacity:0}],
      {duration:900,delay:380+i*70,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}).onfinish=()=>sp.remove(); } }
function iceAttn(){
  if(iceIO){ iceIO.disconnect(); iceIO=null; }
  if(reduce || store.get('ice_seen') || !('IntersectionObserver' in window)) return;
  const btn=$('.ice-btn'); if(!btn) return;
  iceIO=new IntersectionObserver(es=>es.forEach(e=>{
    if(store.get('ice_seen') || S.iceOpen){ btn.classList.remove('attn','idle'); return; }
    if(e.isIntersecting){
      if(!iceAttnPlayed){ iceAttnPlayed=true; btn.classList.add('attn'); iceBurst(btn); setTimeout(()=>{ btn.classList.remove('attn'); if(!store.get('ice_seen') && !S.iceOpen) btn.classList.add('idle'); },1700); }
      else btn.classList.add('idle');
    } else btn.classList.remove('idle');
  }),{threshold:.6});
  iceIO.observe(btn);
}

/* ---------- Render ---------- */
function applyLang(){ document.documentElement.lang=S.lang;
  document.querySelectorAll('[data-t]').forEach(el=> el.textContent=u(el.dataset.t));
  document.querySelectorAll('[data-lang]').forEach(b=> b.setAttribute('aria-pressed', b.dataset.lang===S.lang));
  document.querySelectorAll('#lang-sel').forEach(s=> s.value=S.lang); }
function render(){ applyLang();
  $('#app').innerHTML = heroHTML() + selectedHTML() + aboutHTML() + contactHTML() + feedbackHTML();
  if(S.openId){ const sh=$('#sheet'); if(sh){ const p=byId(S.openId); sh.innerHTML=caseHTML(p); if(p.story) initStory(sh); } }
  Ice.init(); }
function jumpTo(id){ const t=document.getElementById(id); if(!t) return; t.setAttribute('tabindex','-1'); t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); t.focus({preventScroll:true}); }
function selectMail(){ const r=document.createRange(); r.selectNodeContents($('#mail')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); }

function markList(){ // badges in the full list
  document.querySelectorAll('#work .pcard').forEach(c=>{ const id=c.dataset.open, on=S.focus && S.focus!=='all' && selIds().includes(id); const b=c.querySelector('.in-sl');
    if(on && !b) c.querySelector('.pb').insertAdjacentHTML('afterbegin',`<span class="in-sl">${spark}${u('in_sel')}</span>`); if(!on && b) b.remove(); });
  $('#live').textContent = S.focus && S.focus!=='all' ? `${u('sel_h')}: ${selIds().map(id=>tr(byId(id).short)).join(', ')}` : ''; }
function setFocus(k){
  S.focus = k; S.touched=true;
  if(S.wtab==='co'){ setWTab('proj'); document.querySelectorAll('[data-focus]').forEach(b=> b.setAttribute('aria-pressed', b.dataset.focus===S.focus)); $('#selected').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); return; }
  $('.cta-hand')?.remove();
  if(!$('#selected')){ // first choice: insert the section after the hero, then reveal it
    $('#app > .wrap').insertAdjacentHTML('afterend', selectedHTML());
    document.querySelectorAll('[data-focus]').forEach(b=> b.setAttribute('aria-pressed', b.dataset.focus===S.focus));
    const sec=$('#selected'); if(!reduce) sec.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'none'}],{duration:450,easing:'cubic-bezier(.2,.8,.2,1)'});
    markList(); sec.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'}); return; }
  document.querySelectorAll('[data-focus]').forEach(b=> b.setAttribute('aria-pressed', b.dataset.focus===S.focus));
  // selected work with FLIP
  const grid=$('#sgrid'); const first={};
  grid.querySelectorAll('.scard').forEach(el=> first[el.dataset.key]=el.getBoundingClientRect());
  grid.innerHTML = selIds().map(id=>scard(byId(id))).join('');
  grid.className=`sgrid n${selIds().length}`;
  $('#sel-sub').textContent = tr(FOCUS[S.focus].sub);
  if(!reduce) grid.querySelectorAll('.scard').forEach((el,i)=>{ const f=first[el.dataset.key], n=el.getBoundingClientRect();
    if(f){ const dx=f.left-n.left, dy=f.top-n.top; if(dx||dy) el.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'none'}],{duration:480,easing:'cubic-bezier(.2,.9,.25,1.1)'}); }
    else el.animate([{opacity:0,transform:'translateY(14px) rotate(-1deg)'},{opacity:1,transform:'none'}],{duration:420,delay:i*60,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}); });
  markList();
  $('#live').textContent = `${u('sel_h')}: ${selIds().map(id=>tr(byId(id).short)).join(', ')}`;
  const sec=$('#selected'); if(sec && sec.getBoundingClientRect().top > innerHeight*0.62) sec.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}

/* ---------- Events ---------- */
document.addEventListener('click', e=>{
  const el=e.target.closest('[data-wtab],[data-focus],[data-depth],[data-act],[data-go],[data-open],[data-lang],[data-jump],[data-topic]'); if(!el) return;
  if(el.dataset.wtab){ setWTab(el.dataset.wtab); return; }
  if(el.dataset.focus){ setFocus(el.dataset.focus); return; }
  if(el.dataset.jump){ e.preventDefault(); jumpTo(el.dataset.jump); return; }
  if(el.dataset.topic){ S.topic=el.dataset.topic; document.querySelectorAll('[data-topic]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.topic===S.topic)); return; }
  if(el.dataset.lang){ setLang(el.dataset.lang); return; }
  if(el.dataset.go!==undefined){ closeCase(); const map={all:'selected',about:'about',contact:'contact',sel:'selected'}; if(el.dataset.go==='home') window.scrollTo({top:0,behavior:reduce?'auto':'smooth'}); else jumpTo(map[el.dataset.go]); return; }
  if(el.dataset.open!==undefined){ if(el.dataset.open) openCase(el.dataset.open); return; }
  const a=el.dataset.act;
  if(a==='close'){ closeCase(); return; }
  if(a==='ice-toggle'){ S.iceOpen=!S.iceOpen; if(S.iceOpen){ store.set('ice_seen',true); $('.ice-btn').classList.remove('attn','idle'); if(iceIO){iceIO.disconnect(); iceIO=null;} } const pnl=$('#ice-panel'); pnl.hidden=!S.iceOpen; $('.ice-btn').setAttribute('aria-expanded',S.iceOpen);
    if(S.iceOpen){ Ice.init(); pnl.scrollIntoView({behavior:reduce?'auto':'smooth',block:'nearest'}); } else { Ice.stop(); $('.ice-btn').focus(); } return; }
  if(a==='ice-again'){ Ice.reset(); return; }
  if(a==='ice-auto'){ Ice.auto(); return; }
  if(a==='copy'){ const lb=el.querySelector('.lbl')||el, base=lb.textContent; const done=()=>{lb.textContent=el.classList.contains('ct-copy')?u('mail_copied'):u('copied'); document.dispatchEvent(new CustomEvent('bs:copied')); setTimeout(()=>lb.textContent=base,1800)};
    try{ navigator.clipboard.writeText(PROFILE.email).then(done,selectMail); }catch(err){ selectMail(); } return; }
  if(a==='copymsg'){ const txt=$('#f-status').dataset.body||''; try{ navigator.clipboard.writeText(txt).then(()=>{el.textContent=u('copied');},()=>{}); }catch(err){} return; }
});
document.addEventListener('submit', e=>{ if(e.target.id==='fb') sendFeedback(e); });
document.addEventListener('input', e=>{ if(e.target.id==='f-msg') S.form.msg=e.target.value; if(e.target.id==='f-name') S.form.name=e.target.value; if(e.target.id==='f-mail') S.form.mail=e.target.value; });
document.addEventListener('keydown', e=>{
  const wt=e.target.closest && e.target.closest('.wtab'); if(wt && (e.key==='ArrowRight'||e.key==='ArrowLeft')){ e.preventDefault(); setWTab(wt.dataset.wtab==='proj'?'co':'proj',true); return; }
  const top=$('#sheet'); if(!top) return;
  if(e.key==='Escape'){ closeCase(); return; }
  if(e.key==='Tab'){ const f=[...top.querySelectorAll('button:not([disabled]),a[href],summary')]; if(!f.length) return;
    const first=f[0], last=f[f.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); } } });
/* ---------- Intro: 3 quick questions before the portfolio ---------- */
const IQ={
  eb:['Before you come in','Antes de entrar'],
  q1:['Which language do you prefer?','¿En qué idioma prefieres verlo?'],
  q2:['Who’s visiting?','¿Quién eres?'], q2p:['So I can say hello properly.','Para saludarte como toca.'],
  ph:['Your name or company','Tu nombre o empresa'], next:['Continue','Continuar'], anon:['I’d rather not say','Prefiero no decirlo'],
  q3:['What would you like to see?','¿Qué te interesa ver?'], q3p:['I’ll open the portfolio there. You can change it anytime.','Abriré el portfolio por ahí. Puedes cambiarlo cuando quieras.'],
  all:['A bit of everything','Un poco de todo'], alld:['All 7 projects, newest first.','Los 7 proyectos, del más reciente al más antiguo.'],
  skip:['Skip and go to the portfolio','Saltar e ir al portfolio'], back:['Back','Atrás'], step:['Step {i} of 3','Paso {i} de 3']
};
const iq=k=>tr(IQ[k]);
function introHTML(){ const i=S.introStep;
  const dots=[0,1,2].map(n=>`<span class="iq-dot${n<=i?' on':''}"></span>`).join('');
  let body='';
  if(i===0) body=`<h2 id="iq-h">${iq('q1')}</h2>
    <div class="iq-langs">${[['en','English'],['es','Español']].map(([k,l])=>`<button type="button" class="iq-lang" data-il="${k}" aria-pressed="${S.lang===k}">${FLAG[k]}<span>${l}</span></button>`).join('')}</div>`;
  if(i===1) body=`<h2 id="iq-h">${iq('q2')}</h2><p class="iq-p">${iq('q2p')}</p>
    <form class="iq-form" id="iq-form"><label class="sr" for="iq-name">${iq('ph')}</label>
      <input id="iq-name" type="text" maxlength="30" autocomplete="organization" placeholder="${esc(iq('ph'))}" value="${esc(S.who)}">
      <button class="btn" type="submit">${iq('next')} →</button></form>
    <button type="button" class="link iq-anon" data-ianon="1">${iq('anon')}</button>`;
  if(i===2) body=`<h2 id="iq-h">${iq('q3')}</h2><p class="iq-p">${iq('q3p')}</p>
    <div class="iq-opts">${['growth','systems'].map(k=>`<button type="button" class="iq-opt" data-ifocus="${k}" style="--tone:var(${FOCUS_TONE[k]})"><b>${X(FOCUS[k].t)}</b><span>${X(FOCUS[k].d)}</span></button>`).join('')}
      <button type="button" class="iq-opt" data-ifocus="all" style="--tone:var(--butter)"><b>${iq('all')}</b><span>${iq('alld')}</span></button></div>`;
  return `<div class="iq-card" role="dialog" aria-modal="true" aria-labelledby="iq-h">
    <div class="iq-top"><span class="iq-eb">${spark}<span>${iq('eb')}</span></span><span class="iq-dots" aria-label="${iq('step').replace('{i}',i+1)}">${dots}</span></div>
    ${body}
    <div class="iq-foot">${i>0?`<button type="button" class="link" data-iback="1">← ${iq('back')}</button>`:'<span></span>'}<button type="button" class="link iq-skip" data-iskip="1">${iq('skip')} →</button></div>
  </div>`; }
const FLAG={
 en:'<span class="iq-flag" aria-hidden="true"><svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice"><clipPath id="ukc"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30M60 0L0 30" clip-path="url(#ukc)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></svg></span>',
 es:'<span class="iq-flag" aria-hidden="true"><svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice"><path d="M0 0h60v30H0z" fill="#C60B1E"/><path d="M0 7.5h60v15H0z" fill="#FFC400"/></svg></span>'};
const FOCUS_TONE={growth:'--mint',systems:'--pink',build:'--lilac'};
function showIntro(){ let el=$('#intro'); if(!el){ el=document.createElement('div'); el.id='intro'; document.body.append(el); }
  el.innerHTML=introHTML(); document.body.classList.add('iq-lock');
  const f=el.querySelector('#iq-name')||el.querySelector('.iq-lang[aria-pressed="true"]')||el.querySelector('.iq-opt'); f&&f.focus(); }
function closeIntro(){ const el=$('#intro'); S.introOpen=false; store.set('intro',{lang:S.lang,who:S.who,focus:S.focus}); document.body.classList.remove('iq-lock'); render();
  if(el){ if(reduce){ el.remove(); } else { el.classList.add('out'); setTimeout(()=>el.remove(),320); } } window.scrollTo(0,0); }
document.addEventListener('click',e=>{ if(e.target.closest('[data-iredo]')){ S.introStep=0; S.introOpen=true; showIntro(); return; }
  const t=e.target.closest('#intro [data-il],#intro [data-ifocus],#intro [data-iback],#intro [data-iskip],#intro [data-ianon]'); if(!t) return;
  if(t.dataset.il){ S.lang=t.dataset.il; applyLang(); S.introStep=1; showIntro(); return; }
  if(t.dataset.ianon){ S.who=''; S.introStep=2; showIntro(); return; }
  if(t.dataset.iback){ S.introStep=Math.max(0,S.introStep-1); showIntro(); return; }
  if(t.dataset.ifocus){ S.focus=t.dataset.ifocus; closeIntro(); return; }
  if(t.dataset.iskip){ S.focus=null; closeIntro(); return; } });
document.addEventListener('submit',e=>{ if(e.target.id!=='iq-form') return; e.preventDefault(); S.who=($('#iq-name').value||'').trim().replace(/\s+/g,' ').slice(0,30); S.introStep=2; showIntro(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && $('#intro') && S.introOpen){ S.focus=null; closeIntro(); } });
render();
if(S.introOpen) showIntro();


/* ---------- Cursor sparkle trail (subtle) ---------- */
(function sparkleTrail(){
  if(reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  const layer=document.createElement('div'); layer.className='trail'; layer.setAttribute('aria-hidden','true'); document.body.append(layer);
  const tones=['--butter','--lilac','--mint','--pink','--sky'];
  let lx=0, ly=0, last=0, alive=0, n=0;
  addEventListener('pointermove', e=>{
    const now=performance.now(), dx=e.clientX-lx, dy=e.clientY-ly;
    if(now-last<55 || dx*dx+dy*dy<420 || alive>14) return;
    last=now; lx=e.clientX; ly=e.clientY; alive++; n++;
    const s=7+Math.random()*7, el=document.createElement('span');
    el.className='tr-s';
    el.innerHTML=`<svg viewBox="0 0 24 24" width="${s}" height="${s}"><path d="M12 1.5l2.3 7.2 7.2 2.3-7.2 2.3L12 20.5l-2.3-7.2L2.5 11l7.2-2.3z" style="fill:var(${tones[n%tones.length]})"/></svg>`;
    el.style.left=(e.clientX+6)+'px'; el.style.top=(e.clientY+6)+'px';
    layer.append(el);
    const drift=(Math.random()-.5)*26, fall=14+Math.random()*16, rot=(Math.random()-.5)*160;
    el.animate([{transform:'translate(-50%,-50%) scale(.4) rotate(0deg)',opacity:0},{transform:'translate(-50%,-50%) scale(1) rotate(20deg)',opacity:.9,offset:.18},{transform:`translate(calc(-50% + ${drift}px),calc(-50% + ${fall}px)) scale(.3) rotate(${rot}deg)`,opacity:0}],
      {duration:760+Math.random()*260,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=()=>{el.remove(); alive--;};
  },{passive:true});
})();


/* ---------- "Behind this portfolio": swipeable deck explaining the UX decisions ---------- */
(function(){
const INK='#1B1724';
const IL={
  hello:`<svg viewBox="0 0 200 140"><rect x="22" y="22" width="156" height="92" rx="18" fill="#fff" stroke="${INK}" stroke-width="4"/><path d="M60 114l-6 22 26-22" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><text x="100" y="80" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="34" fill="${INK}">hola ✦</text></svg>`,
  quiz:`<svg viewBox="0 0 200 140"><g stroke="${INK}" stroke-width="4"><rect x="30" y="18" width="140" height="30" rx="15" fill="#fff"/><rect x="30" y="56" width="140" height="30" rx="15" fill="#CDBFFF"/><rect x="30" y="94" width="140" height="30" rx="15" fill="#fff"/></g><circle cx="50" cy="71" r="7" fill="${INK}"/><g fill="${INK}"><rect x="66" y="29" width="70" height="8" rx="4"/><rect x="66" y="67" width="84" height="8" rx="4"/><rect x="66" y="105" width="56" height="8" rx="4"/></g></svg>`,
  name:`<svg viewBox="0 0 200 140"><rect x="28" y="36" width="144" height="70" rx="12" fill="#fff" stroke="${INK}" stroke-width="4"/><rect x="28" y="36" width="144" height="22" rx="10" fill="#FFC6E3" stroke="${INK}" stroke-width="4"/><path d="M58 92h84" stroke="#FFE7A1" stroke-width="9" stroke-linecap="round"/><text x="100" y="88" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="24" fill="${INK}">tu nombre</text><path d="M168 18l3 9 9 3-9 3-3 9-3-9-9-3 9-3z M30 104l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#FFE7A1" stroke="${INK}" stroke-width="2.5"/></svg>`,
  ice:`<svg viewBox="0 0 200 140"><rect x="0" y="62" width="200" height="78" fill="#7FB6F0"/><path d="M0 62h200" stroke="${INK}" stroke-width="4"/><path d="M78 62l14-34 18 10 14 24z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M58 62l-10 30 22 34 50 4 36-28-14-40z" fill="#E6F2FF" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/></svg>`,
  folders:`<svg viewBox="0 0 200 140"><path d="M24 40h52l10 12h62v70H24z" fill="#FFE7A1" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M58 22h50l10 12h58v66H58z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M24 62h124v60H24z" fill="#FFE7A1" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><g fill="${INK}"><rect x="40" y="80" width="60" height="7" rx="3.5"/><rect x="40" y="96" width="40" height="7" rx="3.5"/></g></svg>`,
  why:`<svg viewBox="0 0 200 140"><rect x="26" y="24" width="148" height="92" rx="14" fill="#C2E2FF" stroke="${INK}" stroke-width="4"/><rect x="40" y="38" width="120" height="64" rx="10" fill="#fff" stroke="${INK}" stroke-width="3"/><text x="100" y="84" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-size="44" fill="${INK}">?</text><path d="M150 20l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#FFE7A1" stroke="${INK}" stroke-width="2.5"/></svg>`,
  hand:`<svg viewBox="0 0 200 140"><path d="M30 104c26-40 46 6 70-28s40-10 70-44" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><g transform="rotate(-38 132 62)"><rect x="96" y="54" width="86" height="18" rx="4" fill="#FFD3BE" stroke="${INK}" stroke-width="4"/><path d="M96 54l-16 9 16 9z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><rect x="164" y="54" width="18" height="18" rx="3" fill="#FFC6E3" stroke="${INK}" stroke-width="4"/></g></svg>`,
  fb:`<svg viewBox="0 0 200 140"><g class="up"><rect x="40" y="34" width="54" height="72" rx="27" fill="#fff" stroke="${INK}" stroke-width="4"/><text x="67" y="82" text-anchor="middle" font-size="30">👍</text></g><g class="dn"><rect x="106" y="34" width="54" height="72" rx="27" fill="#fff" stroke="${INK}" stroke-width="4"/><text x="133" y="82" text-anchor="middle" font-size="30">👎</text></g><g class="ck"><circle cx="90" cy="36" r="13" fill="${INK}" stroke="#fff" stroke-width="2.5"/><path d="M84 36.5l4 4 8-8.5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`,
  loop:`<svg viewBox="0 0 200 140"><g class="doc"><rect x="34" y="20" width="104" height="100" rx="12" fill="#fff" stroke="${INK}" stroke-width="4"/><path d="M34 50V32a12 12 0 0 1 12-12h80a12 12 0 0 1 12 12v18z" fill="#FFC6E3" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><g class="ln" fill="${INK}"><rect x="48" y="64" width="62" height="7" rx="3.5"/><rect x="48" y="80" width="76" height="7" rx="3.5"/><rect x="48" y="96" width="44" height="7" rx="3.5"/></g></g><g class="lens"><path d="M151 101l20 20" stroke="${INK}" stroke-width="9" stroke-linecap="round"/><circle cx="132" cy="82" r="26" fill="#C2E2FF" fill-opacity=".75" stroke="${INK}" stroke-width="5"/><path d="M120 72a14 14 0 0 1 10-6" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/></g><path class="spk" d="M172 26l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#FFE7A1" stroke="${INK}" stroke-width="2.5"/></svg>`
};
const DECK=[
  {il:'hello',k:['My approach','Mi criterio'],tone:'var(--lilac)',tag:['Creativity and experimentation','Creatividad y experimentación'],h:['A portfolio that doesn’t only talk about work','Un portfolio que no solo habla de trabajo'],
   w:['In this portfolio I used AI, already part of my toolkit, to turn my designs into a working experience, with no limits on creativity.','En este portfolio, he utilizado la IA, que ya forma parte de mis herramientas de trabajo, para llevar mis diseños a una experiencia funcional sin límites a la creatividad.'],
   y:['As a product designer, I look for new ways to work and create. This portfolio is a space of my own to try ideas, enjoy myself and express my personality. I allowed myself to trade a little simplicity and usability for play and surprise: a conscious decision to explore freely.','Como diseñadora de producto, busco nuevas formas de trabajar y crear. Este portfolio es un espacio propio donde probar ideas, disfrutar y expresar mi personalidad. Me he permitido sacrificar algo de simplicidad y usabilidad para dar espacio al juego y la sorpresa: una decisión consciente para explorar con libertad.']},
  {il:'quiz',tone:'var(--sky)',tag:['Relevance and control','Relevancia y control'],h:['Start with what interests you','Empieza por lo que te interesa'],
   w:['The welcome steps adapt the language and the projects you see to your answers.','La bienvenida adapta el idioma y los proyectos que ves según tus respuestas.'],
   y:['In several projects I worked with people who needed different things from the same product. Here I apply that lesson: showing relevant content to help you focus and spark the interest to keep exploring.','En varios proyectos he trabajado con personas que necesitaban cosas distintas de un mismo producto. Aquí aplico ese aprendizaje: mostrar contenido relevante para facilitar el foco y despertar interés por seguir explorando.']},
  {il:'name',tone:'var(--pink)',tag:['Closeness','Cercanía'],h:['Nice to meet you, {your name}','Encantada, {tu nombre}'],
   w:['If you tell me your name, I welcome you by it.','Si me dices cómo te llamas, te recibo por tu nombre.'],
   y:['When you meet someone, you ask their name. I wanted to bring that small gesture into the portfolio and keep the closeness of a conversation, even with a screen between us.','Cuando conoces a alguien, le preguntas su nombre. Quería llevar ese pequeño gesto al portfolio y conservar la cercanía de una conversación, aunque nos separe una pantalla.'],
   d:['A name can catch attention: in an email marketing experiment, adding it to the subject line increased opens by about 20%.','Un nombre puede captar atención: en un experimento de email marketing, añadirlo al asunto aumentó las aperturas aproximadamente un 20 %.'],
   s:[['Sahni, Wheeler & Chintagunta · Marketing Science, 2018','Sahni, Wheeler y Chintagunta · Marketing Science, 2018'],'https://pubsonline.informs.org/doi/10.1287/mksc.2017.1066']},
  {il:'ice',tone:'var(--mint)',tag:['Participation and discovery','Participación y descubrimiento'],h:['Let’s break the ice','Rompamos el hielo'],
   w:['Draw an iceberg and watch it float. Like this portfolio, what you see is only the tip.','Dibuja un iceberg y mira cómo flota. Como en este portfolio, lo que ves es solo la punta.'],
   y:['After so many portfolios, you might welcome a surprise. This little game invites you to pause, pay attention and take part. I want to spark your curiosity, make the visit more memorable and make you want to keep exploring.','Después de tantos portfolios, quizá agradezcas una sorpresa. Este pequeño juego te invita a parar, prestar atención y participar. Busco despertar tu curiosidad, hacer más memorable la visita y darte ganas de seguir explorando.'],
   d:['Von Restorff effect: among similar items, we remember the one that stands out.','Efecto Von Restorff: entre elementos parecidos, recordamos el que es diferente.'],
   s:['Hedwig von Restorff, 1933','https://en.wikipedia.org/wiki/Von_Restorff_effect']},
  {il:'folders',tone:'var(--butter)',tag:['Flexible navigation','Flexibilidad de uso'],h:['Two ways to get to know my work','Dos formas de conocer mi trabajo'],
   w:['Explore my projects by type of challenge, or follow my path company by company.','Explora mis proyectos por tipo de reto o recorre mi trayectoria por empresa.'],
   y:['What have I solved? Where and how have I grown? Depending on what you want to know, one view will be more useful than the other. That’s why I organised the same work into two paths: so you can find it the way that makes sense to you.','¿Qué he resuelto? ¿Dónde y cómo he ido creciendo? Según lo que quieras saber, te será más útil una vista u otra. Por eso organicé el mismo trabajo en dos recorridos: para que puedas encontrarlo como tiene sentido para ti.']},
  {il:'why',tone:'var(--sky)',tag:['Product judgement','Criterio de producto'],h:['The problem first, then the solution','Primero el problema, después la solución'],
   w:['What did we need to solve? My cases start there and walk through the decisions until the result.','¿Qué necesitábamos resolver? Mis casos parten de ahí y recorren las decisiones hasta llegar al resultado.'],
   y:['To judge a solution, you need to know the challenge. So I share what I prioritised, what I ruled out and how I balanced people’s needs with business goals. I want you to follow the reasoning and understand my contribution.','Para valorar una solución, necesitas conocer el reto. Por eso cuento qué prioricé, qué descarté y cómo equilibré las necesidades de las personas con los objetivos del negocio. Quiero que puedas seguir el razonamiento y entender mi aportación.']},
  {il:'hand',tone:'var(--peach)',tag:['Visual design','Diseño visual'],h:['My identity, in the details','Mi identidad, en los detalles'],
   w:['A retro-flavoured look in a modern digital experience.','Una estética con aire retro en una experiencia digital actual.'],
   y:['I chose a visual language that mixes nostalgia and play. A nod to those new interfaces that still borrowed visual references from the physical world, and where the rules were still to be written.','Elegí un lenguaje visual que mezcla nostalgia y juego. Un guiño a aquellas nuevas interfaces que aún tomaban referencias visuales del mundo físico y donde las reglas estaban todavía por escribir.'],
   d:['Aesthetic-usability effect: we perceive attractive designs as easier to use.','Efecto estética-usabilidad: percibimos los diseños atractivos como más fáciles de usar.'],
   s:[['Kurosu & Kashimura, Hitachi, 1995','Kurosu y Kashimura, Hitachi, 1995'],'https://lawsofux.com/aesthetic-usability-effect/']},
  {il:'fb',tone:'var(--mint)',tag:['Listening and iteration','Escucha e iteración'],h:['How was the experience?','¿Qué tal ha sido la experiencia?'],
   w:['A rating with room for feedback.','Una valoración con espacio para feedback.'],
   y:['Designing also means putting your own ideas to the test. This satisfaction question lets me gather your impression and make room for criticism. Listening, questioning my decisions and learning from feedback are part of my work as a product designer.','Diseñar también es poner a prueba tus propias ideas. Esta pregunta de satisfacción me permite recoger tu impresión y abrir espacio a la crítica. Escuchar, cuestionar mis decisiones y aprender del feedback son parte de mi trabajo como diseñadora de producto.']}
];

let i=0, deck=null, stack=null, dots=null, live=null, opener=null;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const CARDS=DECK;
function ensure(){
  if(!deck){
    document.body.insertAdjacentHTML('beforeend',`<div class="deck" id="deck" role="dialog" aria-modal="true" aria-labelledby="deck-t">
  <div class="deck-in">
    <div class="deck-top"><span class="t" id="deck-t"></span><button class="x" id="dk-close">×</button></div>
    <div class="stack" id="dk-stack"></div>
    <p class="swipe-tip" id="dk-tip"></p>
    <div class="sr" id="dk-live" aria-live="polite"></div>
  </div></div>`);
    deck=document.getElementById('deck'); stack=document.getElementById('dk-stack'); live=document.getElementById('dk-live');
    document.getElementById('dk-close').onclick=close;
    deck.addEventListener('click',e=>{ if(e.target===deck) close(); });
    stack.addEventListener('click',e=>{
      const a=e.target.closest('[data-a]'); if(!a) return;
      if(a.dataset.a==='next') go(1); else if(a.dataset.a==='prev') go(-1); else if(a.dataset.a==='close') close();
    });
  }
  document.getElementById('deck-t').textContent=dk('title');
  document.getElementById('dk-close').setAttribute('aria-label',dk('close'));
  document.getElementById('dk-tip').textContent=dk('tip');
}
function cardHTML(c,k){
  return `<div class="c-bd"><div class="c-meta"><span class="c-n">${k+1}/${CARDS.length}</span><span class="c-tag" style="--tone:${c.tone}">${tr(c.tag)}</span></div><div class="c-top"><h2>${tr(c.h)}</h2><div class="c-il il il-${c.il}" style="--tone:${c.tone}" aria-hidden="true">${IL[c.il]}</div></div><p class="what">${tr(c.w)}</p>
  ${c.y?`<div class="why"><span class="k">${c.k?tr(c.k):dk('why')}</span><p>${tr(c.y)}</p></div>`:''}
  ${c.d?`<div class="dato"><span class="k">${dk('data')}</span><p>${tr(c.d)}</p>${c.s?`<a href="${c.s[1]}" target="_blank" rel="noopener">${tr(c.s[0])} ↗</a>`:''}</div>`:''}
  </div>
  <div class="c-ft"><button type="button" class="btn alt" data-a="prev" aria-label="${dk('prev')}"${k===0?' disabled':''}>←</button><span class="dots" aria-hidden="true">${CARDS.map((_,j)=>`<i class="${j===k?'on':''}"></i>`).join('')}</span>${k===CARDS.length-1?`<button type="button" class="btn" data-a="close">${dk('close')}</button>`:`<button type="button" class="btn" data-a="next">${dk('cont')} →</button>`}</div>`;
}
function render(){
  stack.innerHTML='';
  [2,1,0].forEach(off=>{
    const k=i+off; if(k>=CARDS.length) return;
    const el=document.createElement('article');
    el.className='card '+(off===0?'front':off===1?'back1':'back2');
    el.setAttribute('aria-roledescription',dk('card'));
    if(off){ el.setAttribute('aria-hidden','true'); el.inert=true; }
    el.innerHTML=cardHTML(CARDS[k],k);
    stack.appendChild(el);
  });
  live.textContent=dk('of').replace('{a}',i+1).replace('{b}',CARDS.length)+': '+tr(CARDS[i].h);
  bindDrag(stack.querySelector('.front'));
  if(deck.classList.contains('on')){ const f=stack.querySelector('.front .c-ft [data-a="next"],.front .c-ft [data-a="close"]'); f&&f.focus({preventScroll:true}); }
}
function go(dir){
  const n=i+dir; if(n<0||n>=CARDS.length) return;
  const f=stack.querySelector('.front');
  if(dir>0 && f && !reduce){ f.classList.add('fly'); f.style.transform='translate(110%,-20px) rotate(18deg)'; f.style.opacity='0'; setTimeout(()=>{i=n;render();},300); }
  else { i=n; render(); }
}
function bindDrag(el){
  if(!el) return;
  let x0=null,y0=0,dx=0,lock=null;
  const start=(x,y)=>{x0=x;y0=y;dx=0;lock=null;};
  const move=(x,y,e)=>{
    if(x0===null) return;
    const ddx=x-x0, ddy=y-y0;
    if(!lock){ if(Math.abs(ddx)<6&&Math.abs(ddy)<6) return; lock=Math.abs(ddx)>Math.abs(ddy)?'x':'y'; if(lock==='x') el.classList.add('drag'); }
    if(lock!=='x') return;
    if(e&&e.cancelable) e.preventDefault();
    dx=ddx; el.style.transform=`translateX(${dx}px) rotate(${dx/18}deg)`;
  };
  const end=()=>{
    if(x0===null) return; x0=null; el.classList.remove('drag');
    if(lock!=='x') return;
    if(Math.abs(dx)>80 && i<CARDS.length-1){
      el.classList.add('fly'); el.style.transform=`translate(${Math.sign(dx)*120}%,-20px) rotate(${Math.sign(dx)*20}deg)`; el.style.opacity='0';
      setTimeout(()=>{i++;render();},reduce?0:300);
    } else { el.classList.add('settle'); el.style.transform=''; setTimeout(()=>el.classList.remove('settle'),260); }
  };
  // touch (phones/tablets): lock to the horizontal axis, vertical keeps scrolling the card text
  el.addEventListener('touchstart',e=>{ if(e.target.closest('button,a')) return; const t=e.touches[0]; start(t.clientX,t.clientY); },{passive:true});
  el.addEventListener('touchmove',e=>{ const t=e.touches[0]; move(t.clientX,t.clientY,e); },{passive:false});
  el.addEventListener('touchend',end); el.addEventListener('touchcancel',end);
  // mouse / pen
  el.addEventListener('pointerdown',e=>{ if(e.pointerType==='touch'||e.target.closest('button,a')) return; start(e.clientX,e.clientY); el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove',e=>{ if(e.pointerType!=='touch') move(e.clientX,e.clientY,e); });
  el.addEventListener('pointerup',e=>{ if(e.pointerType!=='touch') end(); });
  el.addEventListener('pointercancel',e=>{ if(e.pointerType!=='touch') end(); });
  // hover (desktop): the card leans toward the mouse to hint that it can be dragged
  if(!reduce && matchMedia('(hover:hover) and (pointer:fine)').matches){
    el.addEventListener('pointermove',e=>{ if(e.pointerType!=='mouse'||x0!==null) return; const r=el.getBoundingClientRect(); const k=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width-.5)*2)); el.classList.add('lean'); el.style.translate=`${k*12}px 0`; el.style.rotate=`${k*2}deg`; });
    el.addEventListener('pointerleave',()=>{ el.style.translate=''; el.style.rotate=''; });
    el.addEventListener('pointerdown',()=>{ el.style.translate=''; el.style.rotate=''; });
  }
}

function open(){ ensure(); i=0; render(); deck.classList.add('on'); document.body.style.overflow='hidden'; const f=stack.querySelector('.front [data-a="next"]'); f&&f.focus(); }
function close(){ deck.classList.remove('on'); document.body.style.overflow=''; opener&&opener.focus(); }
document.addEventListener('click',e=>{ const t=e.target.closest('[data-deck]'); if(!t) return; e.preventDefault(); opener=t; open(); });
document.addEventListener('keydown',e=>{
  if(!deck||!deck.classList.contains('on')) return;
  if(e.key==='Escape') close();
  if(e.key==='ArrowRight') go(1);
  if(e.key==='ArrowLeft') go(-1);
  if(e.key==='Tab'){
    const f=[...deck.querySelectorAll('button:not([disabled])')].filter(b=>b.offsetParent!==null && b.style.visibility!=='hidden' && !b.closest('[aria-hidden="true"]'));
    if(!f.length) return; const a=f[0], z=f[f.length-1];
    if(e.shiftKey && document.activeElement===a){ e.preventDefault(); z.focus(); }
    else if(!e.shiftKey && document.activeElement===z){ e.preventDefault(); a.focus(); }
  }
});
window.bsDeck={open:()=>open()};
})();

/* ---------- Language selector (footer) and mobile menu ---------- */
function setLang(l){ S.lang=l; store.set('lang',S.lang); const it=store.get('intro'); if(it){ it.lang=S.lang; store.set('intro',it); } render(); }
document.addEventListener('change',e=>{ if(e.target.id==='lang-sel'){ setLang(e.target.value); const s=$('#lang-sel'); s&&s.focus(); } });
(function(){
  const top=document.querySelector('.top'), btn=document.getElementById('menu-btn'), nav=document.getElementById('main-nav');
  if(!btn||!nav) return;
  const set=o=>{ top.classList.toggle('open',o); btn.setAttribute('aria-expanded',o); };
  btn.addEventListener('click',()=>set(!top.classList.contains('open')));
  nav.addEventListener('click',e=>{ if(e.target.closest('button')) set(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&top.classList.contains('open')){ set(false); btn.focus(); } });
  document.addEventListener('click',e=>{ if(top.classList.contains('open')&&!e.target.closest('.top')) set(false); });
})();

/* ---------- Contact portrait: eyes follow the pointer, poke = scared, email copied = happy ---------- */
(function(){
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const face=()=>document.querySelector('.me-svg');
  let tmr=null;
  const mood=(m,ms)=>{ const s=face(); if(!s) return; clearTimeout(tmr); s.classList.remove('is-scared','is-happy'); void s.getBoundingClientRect(); if(m){ s.classList.add('is-'+m); tmr=setTimeout(()=>s.classList.remove('is-'+m),ms); } };
  if(!reduce) document.addEventListener('pointermove',e=>{ const s=face(); if(!s||s.offsetParent===null) return; const m=s.getScreenCTM(); if(!m) return;
    s.querySelectorAll('.me-eye').forEach(eye=>{ const ex=+eye.dataset.cx, ey=+eye.dataset.cy; const sx=m.a*ex+m.c*ey+m.e, sy=m.b*ex+m.d*ey+m.f; const dx=e.clientX-sx, dy=e.clientY-sy, L=Math.hypot(dx,dy)||1, k=Math.min(1,L/220);
      eye.style.transform=`translate(${(dx/L*3.4*k).toFixed(2)}px,${(dy/L*2.6*k).toFixed(2)}px)`; }); });
  if(!reduce) (function loop(){ setTimeout(()=>{ const s=face(); if(s&&!s.classList.contains('is-scared')&&!s.classList.contains('is-happy')){ s.querySelectorAll('.me-lid').forEach(l=>{ l.classList.remove('blink'); void l.getBoundingClientRect(); l.classList.add('blink'); }); } loop(); },2600+Math.random()*2800); })();
  document.addEventListener('click',e=>{ if(e.target.closest('[data-me="poke"]')) mood('scared',900); });
  document.addEventListener('bs:copied',()=>mood('happy',2200));
})();
