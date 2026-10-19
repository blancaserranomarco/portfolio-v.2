/* =========================================================
   CONTENT — edit texts here.
   A text is either 'same in both languages' or ['English', 'Español'].
   ========================================================= */

const INTERESTS = {
  experimentation:{tone:'--mint',  t:['Experimentation & growth','Experimentación y growth']},
  systems:        {tone:'--lilac', t:['Systems that scale','Sistemas que escalan']},
  complex:        {tone:'--pink',  t:['Untangling complex problems','Desenredar problemas complejos']},
  ai:             {tone:'--butter',t:['AI & designers who build','IA y diseñadoras que construyen']},
  b2b:            {tone:'--sky',   t:['B2B & internal tools','B2B y herramientas internas']},
  zero:           {tone:'--peach', t:['New products from zero','Productos desde cero']}
};

/* Tags shown on cards — same vocabulary as the Notion portfolio.
   kind:'skill' gets colour, kind:'seg' (B2B/B2C/B2B2C) is neutral. */
const TAGS = {
  abtest:  {tone:'--mint',  t:['A/B testing','A/B testing']},
  complex: {tone:'--pink',  t:['Complex problem solving','Problemas complejos'], s:['Complexity','Complejidad']},
  strategy:{tone:'--lilac', t:['Design strategy','Estrategia de diseño'], s:['Strategy','Estrategia']},
  internal:{tone:'--butter',  t:['Internal tool','Herramienta interna'], s:['Internal','Interna']},
  ai:      {tone:'--sky',   t:['AI','IA']},
  feature: {tone:'--peach', t:['New feature','Nueva funcionalidad'], s:['New feature','Novedad']},
  b2b:'B2B', b2c:'B2C', b2b2c:'B2B2C'
};

/* Focus options in the hero. ids = projects shown in Selected work, in order. */
const FOCUS = {
  growth:{icon:'growth', ids:['discount','taxdown'], t:['Growth & experimentation','Growth y experimentación'], d:['Decisions tested with data','Decisiones testadas con datos'], sub:['A/B tests and funnels, with the business impact measured.','A/B tests y funnels, con el impacto en negocio medido.']},
  systems:{icon:'layers', ids:['health','renewals','benefits'], t:['Complex systems at scale','Sistemas complejos a escala'], d:['Many rules and markets, one clear experience','Muchas reglas y mercados, una experiencia clara'], sub:['Products with many rules, roles and markets, made predictable.','Productos con muchas reglas, roles y mercados, hechos predecibles.']},
  build:{icon:'spark', ids:['banners','playtomic'], t:['Building from zero','Construir desde cero'], d:['New features, internal tools and AI','Nuevas funcionalidades, herramientas internas e IA'], sub:['New products and tools, from the first idea to people using them.','Productos y herramientas nuevas, de la primera idea a que la gente los use.']},
  all:{ids:[], t:['All','Todos'], sub:['All my projects, newest first.','Todos mis proyectos, del más reciente al más antiguo.']}
};

const COMPANIES = [
  {id:'TaxDown', d:'2026', tone:'--sky', role:['Senior product designer, B2B','Senior product designer, B2B'], when:['Jan – Jul 2026 · 7 months · Remote','Ene – Jul 2026 · 7 meses · Remoto'],
   what:['Spain’s leading AI-powered tax platform.','La plataforma fiscal con IA líder en España.'],
   me:['B2B was the area behind 40% of revenue. I worked on activating and converting users who arrive through partners, and on the tools partners and the CRM team needed.','B2B era el área que suponía el 40% de la facturación. Trabajé en activar y convertir a los usuarios que llegan desde partners, y en las herramientas que necesitaban los partners y el equipo de CRM.'],
   impact:['#9 fastest-growing tech company in Spain (Deloitte Fast 50, 2026), and the first Spanish tax company recognised by OpenAI.','#9 empresa tecnológica que más crece en España (Deloitte Fast 50, 2026) y primera empresa fiscal española reconocida por OpenAI.']},
  {id:'Cobee', name:'Cobee by Pluxee', d:'2021 – 2026', tone:'--lilac', role:['Senior product designer, Benefits’ core vertical','Senior product designer, vertical core de Beneficios'], when:['Nov 2021 – Jan 2026 · 4 years · Remote','Nov 2021 – Ene 2026 · 4 años · Remoto'],
   what:['A B2B2C employee benefits platform in Spain, Portugal and Mexico.','Una plataforma B2B2C de beneficios para empleados en España, Portugal y México.'],
   me:['Four years leading design for the core product, across the employee app, the admin dashboard and the backoffice, for employees, HR admins and internal agents. I also set up the experimentation mindset of the benefits vertical.','Cuatro años liderando el diseño del producto core, en la app del empleado, el dashboard de admin y el backoffice, para empleados, admins de RRHH y agentes internos. También introduje la cultura de experimentación de la vertical de beneficios.'],
   impact:['Acquired by Pluxee (Sodexo Benefits & Rewards) in 2024.','Adquirida por Pluxee (Sodexo Benefits & Rewards) en 2024.']},
  {id:'Playtomic', d:'2020 – 2021', tone:'--peach', role:['Product designer','Product designer'], when:['Nov 2020 – Nov 2021 · 1 year · Remote','Nov 2020 – Nov 2021 · 1 año · Remoto'],
   what:['The #1 platform for racket sports, in 40+ markets.','La plataforma nº1 de deportes de raqueta, en más de 40 mercados.'],
   me:['Joined during its shift from booking app to social community: habit, connection and retention. I also helped unify the design system across mobile and web.','Entré durante su paso de app de reservas a comunidad social: hábito, conexión y retención. También ayudé a unificar el design system en móvil y web.'],
   impact:['One of Europe’s fastest-growing sports tech companies in 2021.','Una de las empresas de sports tech que más creció en Europa en 2021.']}
];

const PROFILE = {
  name:'Blanca Serrano Marco',
  email:'blancaserranomarco@hotmail.es',
  linkedin:'https://www.linkedin.com/in/blancaserranomarco/',
  hello:[['It’s Blanca.','Make yourself','at home'],['Soy Blanca.','Estás en','tu casa']],
  role:['Senior Product Designer · Based in Madrid','Senior Product Designer · Con base en Madrid'],
  lead:['I’m Blanca, a product designer,','Yo soy Blanca, diseñadora de producto,'],
  intro:['and I made this space so you can get to know me and enjoy the journey. Feel free to poke around and explore at your own pace.',
        'y he creado este espacio para que me conozcas y disfrutes por el camino. Siéntete libre de curiosear y explorar a tu ritmo.'],
  years:['6 years at TaxDown, Cobee by Pluxee and Playtomic','6 años en TaxDown, Cobee by Pluxee y Playtomic'],
  quote:['I’m a good designer because I’m a terrible user.','Soy buena diseñadora porque soy una pésima usuaria.'],
  about:[
    ['That helps me put myself in the shoes of whoever uses a product, understand what they struggle with and look for ways to make it simpler.',
     'Eso me ayuda a ponerme en el lugar de quien usa un producto, entender qué le cuesta y buscar cómo hacerlo más sencillo.'],
    ['But a simple product isn’t enough, it also has to work for the business. Research and data help me decide where to act and check whether the solution works. I believe design should connect usability with strategy, creating human-centred, data-informed products that impact results.',
     'Pero que un producto sea sencillo no basta, también tiene que funcionar para el negocio. La investigación y los datos me ayudan a decidir dónde actuar y comprobar si la solución funciona. Creo que el diseño debe unir usabilidad y estrategia, creando productos centrados en las personas y guiados por datos, con impacto en los resultados.'],
    ['I studied Fine Arts and graphic design. In 2020 I found in product design a way to bring that creative background together with functionality, research and validation.',
     'Estudié Bellas Artes y diseño gráfico. En 2020 descubrí en el diseño de producto una forma de unir esa base creativa con funcionalidad, investigación y validación.'],
    ['Since then I’ve worked on B2C and B2B2C products, supporting their growth and international expansion by designing modular, scalable systems that adapt to different markets and needs.',
     'Desde entonces he trabajado en productos B2C y B2B2C, acompañando su crecimiento y expansión internacional diseñando sistemas modulares y escalables, capaces de adaptarse a distintos mercados y necesidades.']
  ],
  thread:['This portfolio started as a proposal at TaxDown: an onboarding that adapts to each user and shows them what matters first. Here it is, built.',
          'Este portfolio empezó como una propuesta en TaxDown: un onboarding que se adapta a cada usuario y le enseña primero lo que le importa. Aquí está, construido.'],
  strengths:[
    {tone:'--lilac', h:['Making complex systems feel simple','Que lo complejo parezca simple'], p:['I turn multi-layered ecosystems into clear, intuitive experiences.','Convierto ecosistemas con muchas capas en experiencias claras e intuitivas.']},
    {tone:'--mint',  h:['Product mindset','Mentalidad de producto'], p:['I translate user needs into growth metrics and company impact.','Traduzco necesidades de usuario en métricas de crecimiento e impacto para la empresa.']},
    {tone:'--pink',  h:['Impact over ego','Impacto antes que ego'], p:['I value feedback, love being challenged and focus on measurable outcomes.','Valoro el feedback, me gusta que me reten y me centro en resultados medibles.']},
    {tone:'--sky',   h:['Collaboration','Colaboración'], p:['I work closely with PMs and engineers, often defining MVPs that evolve into global products.','Trabajo muy cerca de PMs e ingenieros, a menudo definiendo MVPs que acaban siendo productos globales.']},
    {tone:'--peach', h:['Vision and scalability','Visión y escalabilidad'], p:['I connect day-to-day delivery with long-term vision, designing systems that adapt as products grow.','Conecto el día a día con la visión a largo plazo, diseñando sistemas que se adaptan cuando el producto crece.']},
    {tone:'--butter',h:['Creative problem-solving','Resolución creativa'], p:['I find practical, unexpected ways to turn constraints into opportunities.','Encuentro formas prácticas e inesperadas de convertir limitaciones en oportunidades.']}
  ],
  experience:[
    {co:'TaxDown', role:['Senior product designer, B2B','Senior product designer, B2B'], d:['Jan – Jul 2026 · Remote','Ene – Jul 2026 · Remoto'],
     did:['Scaled the B2B area, 40% of company revenue: activation and conversion of users arriving through partners, and tools for the partner team.','Escalé el área B2B, el 40% de la facturación: activación y conversión de usuarios que llegan desde partners, y herramientas para el equipo de partners.'],
     impact:['Deloitte Technology Fast 50 2026: #9 fastest-growing tech company in Spain. First Spanish tax company recognised by OpenAI.','Deloitte Technology Fast 50 2026: #9 empresa tecnológica que más crece en España. Primera empresa fiscal española reconocida por OpenAI.']},
    {co:'Cobee by Pluxee', role:['Senior product designer, Benefits’ core vertical','Senior product designer, vertical core de Beneficios'], d:['Nov 2021 – Jan 2026 · 4 years · Remote','Nov 2021 – Ene 2026 · 4 años · Remoto'],
     did:['Led design for the core product across app, admin dashboard and backoffice, for employees, HR admins and internal agents, in Spain, Portugal and Mexico. Set up the experimentation mindset of the benefits vertical.','Lideré el diseño del producto core en app, dashboard de admin y backoffice, para empleados, admins de RRHH y agentes internos, en España, Portugal y México. Introduje la cultura de experimentación de la vertical de beneficios.'],
     impact:['Acquired by Pluxee (Sodexo Benefits & Rewards) in 2024.','Adquirida por Pluxee (Sodexo Benefits & Rewards) en 2024.']},
    {co:'Playtomic', role:['Product designer','Product designer'], d:['Nov 2020 – Nov 2021 · Remote','Nov 2020 – Nov 2021 · Remoto'],
     did:['Designed the first social network for racket sports and helped unify the design system across mobile and web.','Diseñé la primera red social de deportes de raqueta y ayudé a unificar el design system en móvil y web.'],
     impact:['In 2021 it became the #1 racket sports platform, in 40+ markets.','En 2021 se convirtió en la plataforma nº1 de deportes de raqueta, en más de 40 mercados.']},
    {co:'Simed', role:['Graphic designer','Diseñadora gráfica'], d:['Oct 2019 – Jul 2020 · Madrid','Oct 2019 – Jul 2020 · Madrid'], did:null, impact:null}
  ],
  education:[
    {t:['Data & Design course','Curso de Data & Design'], w:'Mr Marcel', d:['2026, upcoming','2026, próximamente']},
    {t:['Design Systems course','Curso de Design Systems'], w:'Mr Marcel', d:'2022'},
    {t:['UX/UI bootcamp, Hackshow winner','Bootcamp UX/UI, ganadora del Hackshow'], w:'Ironhack', d:'2020', note:['Edulis, an app for mushroom foragers, chosen among the top projects for its creativity, clarity and interaction flow.','Edulis, una app para recolectores de setas, elegida entre los mejores proyectos por su creatividad, claridad y flujo de interacción.']},
    {t:['Fine Arts degree','Grado en Bellas Artes'], w:'URJC', d:'2012 – 2017'}
  ]
};

/* ---------- Projects ----------
   w: weight per interest (decides order).  hl: the highlight shown in the shortlist callout.
   blocks: the full story. Kinds: h (section title), p, call, list, table, steps, exp, quote, ba, img, abc, learn */
/* Partner user journey, reused by the TaxDown case scenes */
const TD_STEPS = [['web',['Partner landing','Landing del partner'],['Discovers the offer','Descubre la oferta']],
  ['user',['Sign up','Registro'],['Arrives linked to the partner','Llega vinculado al partner']],
  ['bank',['Authorisation','Apoderamiento'],['Accepts connecting their data with the AEAT','Acepta conectar sus datos con la AEAT']],
  ['doc',['Data and result','Datos y resultado'],['Completes the draft and sees the result','Completa el borrador y ve su resultado']],
  ['card',['Plan','Plan'],['Buys the plan to file the return','Compra el plan para presentar la declaración']]];
const PROJECTS = [
{
  id:'discount', company:'Cobee', year:'2024', tone:'--mint', img:'assets/discount-cover.webp', cover:{v:'+65.6%', t:['purchase success','compras con éxito']}, base:.6, recruiter:1,
  w:{experimentation:3, systems:1, complex:1},
  tags:['abtest','b2c'],
  short:['Discount experiments','Experimentos en Descuentos'],
  title:['Turning a design system migration into three growth experiments','Convertir una migración de design system en tres experimentos de growth'],
  card:['Three sequential A/B tests, run with one developer, raised purchase success by 65.6%.','Tres A/B tests secuenciales, con un solo desarrollador, que subieron las compras con éxito un 65,6%.'],
  hl:{label:['The moment it clicked','El momento clave'],
      text:['Test 3 changed two screens: clearer amount instructions and a security message at payment. Completed purchases went from 19.4% to 32.2% of people who started.','El test 3 cambió dos pantallas: instrucciones claras en el importe y un mensaje de seguridad en el pago. Las compras completadas pasaron del 19,4% al 32,2% de quienes empezaban.']},
  challenge:['Discounts moved almost €1M in GMV a year across 846 companies, yet fewer than 2% of eligible employees used it. The flow also had to move from legacy components to our new design system.',
             'Descuentos movía casi 1M € de GMV al año en 846 empresas, pero menos del 2% de los empleados con acceso lo usaba. Además, el flujo tenía que pasar de componentes legacy al nuevo design system.'],
  facts:[[['My role','Mi rol'],['Design-led initiative, I proposed and led it','Iniciativa de diseño, la propuse y lideré']],[['Team','Equipo'],['1 designer + 1 developer','1 diseñadora + 1 desarrollador']],[['Surface','Superficie'],['Employee app, B2C','App del empleado, B2C']],[['When','Cuándo'],['April – July 2024','Abril – julio 2024']]],
  nums:[{v:'+65.6%',t:['purchase success, 19.4% → 32.2%','compras con éxito, 19,4% → 32,2%']},{v:'+€98.8K',t:['estimated extra GMV a year, conservative','GMV anual extra estimado, conservador']},{v:'3',t:['sequential A/B tests, 50/50, in Amplitude','A/B tests secuenciales, 50/50, en Amplitude']}],
  blocks:[
    {k:'h', t:['Context','Contexto']},
    {k:'p', t:['The Discount benefit already generated substantial GMV but reached very few employees, across companies of every size. The legacy interface had three clear frictions: confusing purchase steps, low perceived security when adding a card, and no explanation of how the benefit worked.',
               'El beneficio de Descuentos ya generaba un GMV importante pero llegaba a muy pocos empleados, en empresas de todos los tamaños. La interfaz legacy tenía tres fricciones claras: pasos de compra confusos, poca sensación de seguridad al añadir la tarjeta y ninguna explicación de cómo funcionaba el beneficio.']},
    {k:'call', t:['The migration was going to happen anyway. I saw a chance to improve the experience as we went: ship each step as a small, low-risk test, measure it, and let each result decide the next change.',
                  'La migración iba a ocurrir igualmente. Vi la oportunidad de mejorar la experiencia por el camino: lanzar cada paso como un test pequeño y de bajo riesgo, medirlo y dejar que cada resultado decidiera el siguiente cambio.']},
    {k:'h', t:['Hypotheses','Hipótesis']},
    {k:'table', head:[['Goal','Objetivo'],['Hypothesis','Hipótesis'],['Success metric','Métrica de éxito']], rows:[
      [['Explain how the benefit works','Explicar cómo funciona el beneficio'],['Clarity drives adoption','La claridad impulsa la adopción'],['More users starting the purchase','Más usuarios que empiezan la compra']],
      [['Simplify the purchase flow','Simplificar el flujo de compra'],['Clarity drives adoption','La claridad impulsa la adopción'],['Conversion from amount to card entry','Conversión de importe a tarjeta']],
      [['Improve trust at checkout','Dar confianza en el pago'],['Trust increases completion','La confianza aumenta la compra'],['Users completing payment','Usuarios que completan el pago']]
    ], note:['Business metric: GMV, to measure the direct impact on revenue.','Métrica de negocio: GMV, para medir el impacto directo en ingresos.']},
    {k:'h', t:['Where people dropped','Dónde se caía la gente']},
    {k:'abc', unit:'%', rows:[[['Amount selection','Selección de importe'],100],[['Checkout and card page','Pago y tarjeta'],55.3],[['Confirm purchase button','Botón de confirmar'],31.4],[['Purchase confirmed','Compra confirmada'],30]],
      cap:['Funnel before the tests: of 850 people who started, 255 finished. Almost half were lost between choosing an amount and reaching checkout.','Funnel antes de los tests: de 850 personas que empezaron, terminaron 255. Casi la mitad se perdía entre elegir importe y llegar al pago.']},
    {k:'h', t:['Three experiments, one funnel step each','Tres experimentos, uno por paso del funnel']},
    {k:'exp', items:[
      {tag:['Test 1 · April 2024 · 19 days','Test 1 · abril 2024 · 19 días'], h:['Make the value clearer','Hacer el valor más claro'],
       hyp:['A lower-commitment button, “Continue” instead of “Request discount coupon”, and a more visible discount will get more people to start.','Un botón con menos compromiso, “Continuar” en vez de “Solicitar cupón”, y un descuento más visible harán que más gente empiece.'],
       res:['+7.54% moved to the amount screen, statistically significant. Purchases didn’t change (167 vs 147, not significant).','+7,54% avanzó a la pantalla de importe, con significancia. Las compras no cambiaron (167 vs 147, sin significancia).'],
       learn:['A clearer entry brings people in but doesn’t make them buyers. The bottleneck was further down.','Una entrada más clara mete a gente en el flujo, pero no la convierte en compradora. El cuello de botella estaba más abajo.']},
      {tag:['Test 2 · May 2024 · 22 days','Test 2 · mayo 2024 · 22 días'], h:['Explain how it works, without cluttering','Explicar cómo funciona, sin saturar'],
       hyp:['Each coupon has different conditions. A separate “Information” tab will help the people who need it without slowing down those who don’t.','Cada cupón tiene condiciones distintas. Una pestaña aparte de “Información” ayudará a quien la necesite sin frenar a quien no.'],
       res:['37.7% opened the tab. Purchases rose 13.19% with 90% confidence, while entries to the flow barely moved (+0.71%).','El 37,7% abrió la pestaña. Las compras subieron un 13,19% con un 90% de confianza, mientras que las entradas al flujo apenas cambiaron (+0,71%).'],
       learn:['People look for an explanation only when they need it, and once they understand, they buy.','La gente busca la explicación solo cuando la necesita, y cuando entiende, compra.']},
      {tag:['Test 3 · July 2024 · 7 days','Test 3 · julio 2024 · 7 días'], h:['Build trust at checkout','Dar confianza en el pago'],
       hyp:['People didn’t know whether to type what they pay or what they receive, the screen was all grey with a disabled button, and nothing reassured them when entering card details.','La gente no sabía si escribir lo que paga o lo que recibe, la pantalla era toda gris con un botón deshabilitado y nada les tranquilizaba al meter la tarjeta.'],
       res:['Clear instructions, a price breakdown and a security message. Continuing after the amount: 45.3% → 63.3%. Entering card details: 34.0% → 42.1%. Purchase success: +65.62%.','Instrucciones claras, desglose de precio y mensaje de seguridad. Continuar tras el importe: 45,3% → 63,3%. Introducir tarjeta: 34,0% → 42,1%. Compras con éxito: +65,62%.'],
       learn:['Clarity and trust at the amount and payment steps had the biggest impact of the three tests.','La claridad y la confianza en el importe y el pago tuvieron el mayor impacto de los tres tests.']}
    ]},
    {k:'ba', n:2, items:[['assets/discount-t1-before.webp',['Before · “Request coupon”','Antes · “Solicitar cupón”']],['assets/discount-t1-after.webp',['After · “Continue”','Después · “Continuar”']]],
      cap:['Test 1: a lower-commitment button and a more visible discount on the coupon detail.','Test 1: un botón con menos compromiso y un descuento más visible en el detalle del cupón.']},
    {k:'ba', n:3, items:[['assets/discount-t2-before.webp',['Before · coupons only','Antes · solo cupones']],['assets/discount-t2-after-a.webp',['After · Discounts tab','Después · pestaña Descuentos']],['assets/discount-t2-after-b.webp',['After · Information tab','Después · pestaña Información']]],
      cap:['Test 2: how the benefit works, in its own tab for whoever needs it.','Test 2: cómo funciona el beneficio, en su propia pestaña para quien lo necesite.']},
    {k:'ba', n:4, items:[['assets/discount-t3-amount-before.webp',['Before · amount','Antes · importe']],['assets/discount-t3-amount-after.webp',['After · amount','Después · importe']],['assets/discount-t3-pay-before.webp',['Before · payment','Antes · pago']],['assets/discount-t3-pay-after.webp',['After · payment','Después · pago']]],
      cap:['Test 3, the winning change: what to type and what you’ll pay, and a security message when entering the card.','Test 3, el cambio ganador: qué escribir y cuánto pagarás, y un mensaje de seguridad al meter la tarjeta.']},
    {k:'img', src:'assets/discount-t3-amplitude.webp', cap:['Test 3 in Amplitude: purchase success went from 19.4% (A) to 32.2% (B).','Test 3 en Amplitude: las compras con éxito pasaron del 19,4% (A) al 32,2% (B).']},
    {k:'h', t:['Estimating the business impact','Estimar el impacto en negocio']},
    {k:'table', head:[['Estimated per year','Estimación anual'],['Before','Antes'],['After','Después'],['Change','Cambio']], rows:[
      [['Purchase success rate','Tasa de compra con éxito'],'27.3%','45.2%','+65.62%'],
      [['Successful purchases','Compras con éxito'],'1,507','2,495','+988'],
      [['Annual GMV','GMV anual'],'€150,700','€249,500','+€98,800']
    ], note:['Same relative uplift applied to a yearly baseline of 5,520 people reaching the amount step and a €100 average purchase. Conservative: traffic during the tests was higher.','Mismo incremento relativo aplicado a una base anual de 5.520 personas que llegan al importe y una compra media de 100 €. Conservador: el tráfico durante los tests fue mayor.']},
    {k:'p', t:['Every change was first tested with 50% of users, so we only released what had proven to work. All three winning versions were rolled out to 100%, on the new design system.',
               'Cada cambio se probó primero con el 50% de los usuarios, así que solo lanzamos lo que había demostrado funcionar. Las tres versiones ganadoras se desplegaron al 100%, ya en el nuevo design system.']},
    {k:'learn', items:[
      [['Clarity matters at checkout','La claridad importa en el pago'],['Clear instructions, transparent pricing and payment reassurance make the difference between dropping off and buying.','Instrucciones claras, precio transparente y seguridad en el pago marcan la diferencia entre abandonar y comprar.']],
      [['Entry isn’t conversion','Entrar no es convertir'],['7.5% more people in the flow didn’t add a single significant purchase.','Un 7,5% más de gente en el flujo no añadió ni una compra significativa.']],
      [['Small tests, lower risk','Tests pequeños, menos riesgo'],['With one developer we tested focused changes, learned fast and only shipped what worked.','Con un desarrollador probamos cambios acotados, aprendimos rápido y solo lanzamos lo que funcionó.']]
    ]}
  ],
  reasons:{experimentation:['Three sequential A/B tests, each shaped by the last, with the business impact calculated.','Tres A/B tests secuenciales, cada uno guiado por el anterior, con el impacto en negocio calculado.'],
           systems:['Growth work done while migrating a flow to a new design system.','Trabajo de growth hecho mientras se migraba un flujo al nuevo design system.'],
           complex:['Funnel data and recordings showed the real friction was two steps after the obvious one.','Los datos de funnel y las grabaciones mostraron que la fricción real estaba dos pasos después de la obvia.']},
  notion:'https://app.notion.com/p/1239ce2bac8380cdb272decb907c9c61'
},
{
  id:'benefits', company:'Cobee', year:'2023', tone:'--lilac', img:'assets/benefits-cover.webp', cover:{v:'414', t:['unique benefits created','beneficios únicos creados']}, base:.5, recruiter:1,
  w:{systems:3, zero:2, experimentation:2, b2b:2},
  tags:['strategy','b2b2c'],
  short:['Custom Benefits','Beneficios personalizados'],
  title:['From one-off requests to a benefits engine for three countries','De peticiones a medida a un motor de beneficios para tres países'],
  card:['A low-code system that started as a fake door test and now runs 414 benefits in Spain, Mexico and Portugal.','Un sistema low-code que empezó como un fake door test y hoy mueve 414 beneficios en España, México y Portugal.'],
  hl:{label:['Why it matters','Por qué importa'],
      text:['HR teams can now launch their own perks in days instead of waiting months for development. 414 benefits later, Sales uses it to close deals.','Los equipos de RRHH lanzan sus propios beneficios en días en vez de esperar meses de desarrollo. 414 beneficios después, Ventas lo usa para cerrar deals.']},
  challenge:['HR teams wanted to offer perks our catalogue didn’t cover, from free fruit to extra days off, without relying on tech teams or waiting for custom development.',
             'Los equipos de RRHH querían ofrecer beneficios que el catálogo no cubría, desde fruta gratis hasta días libres extra, sin depender de tecnología ni esperar desarrollos a medida.'],
  facts:[[['My role','Mi rol'],['End-to-end research, design and strategy','Research, diseño y estrategia de principio a fin']],[['Surfaces','Superficies'],['App, admin dashboard, backoffice','App, dashboard de admin, backoffice']],[['Markets','Mercados'],['Spain, Mexico, Portugal','España, México, Portugal']],[['Model','Modelo'],'B2B2C']],
  nums:[{v:'414',t:['unique benefits created in two years','beneficios únicos creados en dos años']},{v:'5,300+',t:['active company–benefit instances','instancias activas empresa–beneficio']},{v:'70%',t:['faster time to market, months to days','más rápido al mercado, de meses a días']}],
  blocks:[
    {k:'h', t:['Context','Contexto']},
    {k:'p', t:['Cobee is a B2B2C platform that helps companies manage and distribute employee benefits. What began as a small experiment evolved into a scalable framework that changed how Cobee builds and expands its product.',
               'Cobee es una plataforma B2B2C que ayuda a las empresas a gestionar y distribuir beneficios para sus empleados. Lo que empezó como un pequeño experimento acabó siendo un marco escalable que cambió cómo Cobee construye y amplía su producto.']},
    {k:'h', t:['Discovery','Discovery']},
    {k:'p', t:['I led benchmarking, mystery shopping and an analysis of what companies were asking for. The concept of “benefit” was as diverse as the companies themselves: product discounts, branded gift boxes, event tickets, family bonuses, extra days off, mental health.',
               'Lideré el benchmarking, el mystery shopping y el análisis de lo que pedían las empresas. El concepto de “beneficio” era tan diverso como las propias empresas: descuentos en productos, cestas de regalo con su marca, entradas a eventos, ayudas familiares, días libres extra, salud mental.']},
    {k:'call', t:['The real need wasn’t more core benefits. It was flexibility and autonomy for admins. How could companies offer all their benefits, even the unique ones, without overloading the system or the UX?',
                  'La necesidad real no era tener más beneficios core, sino flexibilidad y autonomía para los admins. ¿Cómo podían las empresas ofrecer todos sus beneficios, incluso los únicos, sin sobrecargar el sistema ni la UX?']},
    {k:'h', t:['Validating demand before building','Validar la demanda antes de construir']},
    {k:'p', t:['We placed a “Create your own benefit” fake door in the admin dashboard to measure real intent.','Pusimos un fake door de “Crea tu propio beneficio” en el dashboard de admin para medir la intención real.']},
    {k:'abc', unit:'%', rows:[[['Admins who clicked','Admins que hicieron clic'],26],[['Completed the flow and joined the beta','Completaron el flujo y se unieron a la beta'],16]],
      cap:['A demand signal, not adoption. Sales confirmed it as a deal-closing differentiator, so we decided to build a low-tech MVP.','Una señal de demanda, no adopción. Ventas lo confirmó como diferencial para cerrar deals, así que decidimos construir un MVP low-tech.']},
    {k:'h', t:['The MVP: Plain Benefits','El MVP: Plain Benefits']},
    {k:'p', t:['One flexible, text-based template for any perk: image, title, description and an external link. An agent fills it in the backoffice, publishes it, and employees see it in the app instantly, with no development per benefit.',
               'Una única plantilla flexible de texto para cualquier beneficio: imagen, título, descripción y un enlace externo. Un agente la rellena en el backoffice, la publica y los empleados la ven en la app al momento, sin desarrollo por beneficio.']},
    {k:'list', t:[['Success criteria: traction in the sales pipeline and 15+ new custom benefits in three months.','Criterio de éxito: tracción en el pipeline de Ventas y más de 15 beneficios nuevos en tres meses.'],
                 ['For companies: autonomy to launch their own perks. For employees: everything in one place. For Cobee: faster go-to-market.','Para las empresas: autonomía para lanzar sus beneficios. Para los empleados: todo en un sitio. Para Cobee: salir antes al mercado.']]},
    {k:'img', src:'assets/benefits-howto.webp', max:760, cap:['How it works: one guided flow to create a benefit, available worldwide by default or only in the selected countries.','Cómo funciona: un único flujo guiado para crear un beneficio, disponible en todos los países por defecto o solo en los que se elijan.']},
    {k:'ba', n:2, items:[['assets/benefits-backoffice.webp',['Backoffice · one form','Backoffice · un formulario']],['assets/benefits-app.webp',['App · what employees see','App · lo que ve el empleado']]],
      cap:['One form feeds every surface: once published, the benefit appears in the employee app…','Un formulario alimenta todas las superficies: al publicarlo, el beneficio aparece en la app del empleado…']},
    {k:'img', src:'assets/benefits-admin.webp', cap:['…and in the admin dashboard, where HR manages and deactivates it.','…y en el dashboard de admin, donde RRHH lo gestiona y lo desactiva.']},
    {k:'h', t:['Scaling with reusable pieces','Escalar con piezas reutilizables']},
    {k:'steps', items:[
      [['Level 1 · Plain, 2023','Nivel 1 · Plain, 2023'],['Information and a link. Launched in Spain, then Mexico and Portugal.','Información y un enlace. Lanzado en España, luego México y Portugal.']],
      [['Level 2 · Card payment, 2024','Nivel 2 · Pago con tarjeta, 2024'],['The benefit is linked to the Cobee card, so employees pay directly at the provider, like the company canteen.','El beneficio se vincula a la tarjeta Cobee y el empleado paga directamente en el proveedor, como el comedor de la empresa.']],
      [['Level 3 · Reimbursement, 2024','Nivel 3 · Reembolso, 2024'],['Employees upload a receipt and the company reimburses it. Key for Portugal.','El empleado sube el ticket y la empresa se lo reembolsa. Clave para Portugal.']],
      [['Level 4 · Multi-payment, next','Nivel 4 · Multipago, siguiente'],['Combining payment methods under one benefit.','Combinar métodos de pago en un mismo beneficio.']]
    ]},
    {k:'p', t:['Each piece reused the same creation flow and templates, so it became available to every benefit instead of being rebuilt one by one.','Cada pieza reutilizaba el mismo flujo y las mismas plantillas, así quedaba disponible para todos los beneficios en lugar de construirse uno a uno.']},
    {k:'h', t:['Results two years later','Resultados dos años después']},
    {k:'table', head:[['Year','Año'],'Plain',['Card','Tarjeta'],['Reimbursement','Reembolso'],['Note','Nota']], rows:[
      [['2023, launch','2023, lanzamiento'],'38','–','–',['MVP launch and validation','Lanzamiento y validación del MVP']],
      ['2024','206','6','10',['Payment pieces launched','Lanzamiento de piezas de pago']],
      ['2025','161','8','5',['Sustained growth','Crecimiento sostenido']]
    ], note:['New unique benefits created each year.','Beneficios únicos nuevos creados cada año.']},
    {k:'list', t:[['The most popular benefit in Spain was offered by 45% of our companies there; in Mexico, by 34%.','El beneficio más popular en España lo ofrecía el 45% de nuestras empresas allí; en México, el 34%.'],
                 ['In Spain and Mexico, Plain covered most needs. In Portugal, 8 of 16 active custom benefits involved payments.','En España y México, Plain cubría casi todo. En Portugal, 8 de los 16 beneficios activos incluían pagos.'],
                 ['Payments were only 7% of unique benefits. The main value was flexibility and having everything in one place.','Los pagos eran solo el 7% de los beneficios únicos. El valor principal era la flexibilidad y tenerlo todo en un sitio.']]},
    {k:'learn', items:[
      [['Starting simple was the smartest move','Empezar simple fue la mejor decisión'],['Plain Benefits proved that centralising and communicating perks met most needs. Modular templates then let Cobee scale without technical debt.','Plain Benefits demostró que centralizar y comunicar los beneficios cubría casi todo. Las plantillas modulares permitieron escalar sin deuda técnica.']],
      [['A system that tests markets','Un sistema que valida mercados'],['In Mexico we used it to launch Meeting Pros, a medical service, to validate demand before investing in complex insurance. It became our fastest, lowest-risk way to test.','En México lo usamos para lanzar Meeting Pros, un servicio médico, y validar demanda antes de invertir en seguros complejos. Se convirtió en nuestra forma más rápida y de menor riesgo de testear.']]
    ]}
  ],
  reasons:{systems:['One reusable template grew into a modular engine for three markets, without rebuilding.','Una plantilla reutilizable que creció hasta un motor modular para tres mercados, sin reconstruir.'],
           zero:['Taken from a fake door test to a core product in two years.','Del fake door test a producto core en dos años.'],
           experimentation:['A fake door test (26% clicked) decided what to build before any code was written.','Un fake door test (26% de clics) decidió qué construir antes de escribir código.'],
           b2b:['Designed for HR admins and internal agents as much as for employees.','Diseñado para admins de RRHH y agentes internos tanto como para empleados.']},
  notion:'https://app.notion.com/p/2999ce2bac83803c9e83d844f551eb5a'
},
{
  id:'renewals', company:'Cobee', year:'2025', tone:'--pink', img:null, cover:{v:'89%', t:['positive feedback','feedback positivo']}, base:.45, recruiter:1,
  w:{complex:3, systems:2},
  tags:['complex','b2c'],
  short:['Health Insurance renewals','Renovaciones del Seguro de Salud'],
  title:['Renewals designed as a system, built to survive peak season','Renovaciones diseñadas como un sistema, preparadas para la temporada alta'],
  card:['16 scenario–outcome combinations turned into one predictable experience: 89% positive feedback and half the incidents.','16 combinaciones de escenario y resultado convertidas en una experiencia predecible: 89% de feedback positivo y la mitad de incidencias.'],
  hl:{label:['What changed','Qué cambió'],
      text:['89% of 351 people said renewing felt simple, asked in-app right after they renewed. Incidents halved and there were zero critical blockers in the biggest revenue window of the year.','El 89% de 351 personas dijo que renovar fue sencillo, preguntado in-app justo después de renovar. Las incidencias bajaron a la mitad y no hubo ningún blocker crítico en la ventana de ingresos más importante del año.']},
  challenge:['Health insurance grew from about 30,000 to 63,000 active employees in a year, and around 90% of them would renew or switch plans between December and January. Once shipped, the flow couldn’t be iterated until the next year.',
             'El seguro de salud pasó de unos 30.000 a 63.000 empleados activos en un año, y cerca del 90% iba a renovar o cambiar de plan entre diciembre y enero. Una vez lanzado, el flujo no se podía iterar hasta el año siguiente.'],
  facts:[[['My role','Mi rol'],['Senior product designer','Senior product designer']],[['Surfaces','Superficies'],['App, admin dashboard, backoffice','App, dashboard de admin, backoffice']],[['Worked with','Con'],['Operations, engineering, users','Operaciones, ingeniería, usuarios']],[['Window','Ventana'],['Dec 2025 – Jan 2026','Dic 2025 – Ene 2026']]],
  nums:[{v:'89%',t:['positive in-app feedback, 351 answers','feedback positivo in-app, 351 respuestas']},{v:'−50%',t:['CX and operations incidents vs. 2024','incidencias de CX y operaciones vs. 2024']},{v:'682',t:['companies renewed of ~1,000, no critical blockers','empresas renovadas de ~1.000, sin blockers críticos']}],
  blocks:[
    {k:'h', t:['Context','Contexto']},
    {k:'p', t:['After launching health insurance in Spain, Portugal and Mexico, the product entered its second chapter: moving from launch to long-term sustainability. Renewals stopped being a support feature and became a core product moment, with direct impact on retention, revenue and operational cost.',
               'Tras lanzar el seguro de salud en España, Portugal y México, el producto entró en su segundo capítulo: pasar del lanzamiento a la sostenibilidad. Las renovaciones dejaron de ser una funcionalidad de soporte y se convirtieron en un momento core del producto, con impacto directo en retención, ingresos y coste operativo.']},
    {k:'call', t:['In the 2024 campaign, 28% of the squad’s capacity went to fixing renewal issues, with 20+ tickets in two months. Renewals were built on unstable solutions that weren’t designed for high-volume annual cycles.',
                  'En la campaña de 2024, el 28% de la capacidad del squad se fue en arreglar problemas de renovación, con más de 20 tickets en dos meses. Las renovaciones se apoyaban en soluciones inestables, no pensadas para ciclos anuales de alto volumen.']},
    {k:'h', t:['Hypotheses','Hipótesis']},
    {k:'table', head:[['Hypothesis','Hipótesis'],['Goal','Objetivo'],['Success metric','Métrica de éxito']], rows:[
      [['Renewals are built on unstable solutions','Las renovaciones se apoyan en soluciones inestables'],['Reduce incidents in peak season','Reducir incidencias en temporada alta'],['↓ renewal incidents','↓ incidencias de renovación']],
      [['The experience doesn’t support growth','La experiencia no aguanta el crecimiento'],['A robust renewal and replacement system','Un sistema robusto de renovación y sustitución'],['No critical blockers in peak','Sin blockers críticos en el pico']],
      [['Engineering time is lost on fixes','Se pierde tiempo de ingeniería en arreglos'],['Protect squad capacity','Proteger la capacidad del squad'],['↓ % engineering time on renewals','↓ % de tiempo de ingeniería en renovaciones']],
      [['Renewals are critical for revenue','Las renovaciones son críticas para los ingresos'],['Uninterrupted coverage and retention','Cobertura y retención sin cortes'],['Stable MRR during renewals','MRR estable durante las renovaciones']],
      [['Other benefits will need the same logic','Otros beneficios necesitarán la misma lógica'],['Reusable renewal machinery','Maquinaria de renovación reutilizable'],['Reuse across insurance benefits','Reutilización en otros seguros']]
    ]},
    {k:'h', t:['A system design problem','Un problema de diseño de sistemas']},
    {k:'p', t:['I mapped two dimensions and designed every combination case by case.','Mapeé dos dimensiones y diseñé cada combinación caso a caso.']},
    {k:'steps', items:[
      [['Four member scenarios','Cuatro escenarios de miembros'],['Based on the relationship between the employee and their family members. Family members can’t keep coverage if the employee doesn’t renew, so every scenario had to stay logically consistent, including cancellations.','Según la relación entre el empleado y sus familiares. Los familiares no pueden mantener la cobertura si el empleado no renueva, así que cada escenario tenía que ser coherente, incluidas las cancelaciones.']],
      [['Four renewal outcomes','Cuatro resultados de renovación'],['Automatic renewal, contracting a new plan, replacement, or no coverage available for the next period.','Renovación automática, contratar un plan nuevo, sustitución o sin cobertura disponible para el siguiente periodo.']],
      [['One mental model for all of them','Un único modelo mental para todos'],['Clear, explicit outcomes and the same structure everywhere, reducing technical edge cases through product logic instead of exposing internal complexity. Errors, missing data, emails and notifications were mapped too.','Resultados claros y explícitos y la misma estructura en todas partes, resolviendo casos límite con lógica de producto en vez de mostrar la complejidad interna. También mapeamos errores, datos que faltan, emails y notificaciones.']],
      [['Validated with everyone who carries the risk','Validado con quien asume el riesgo'],['Reviewed with Operations to cover real cases, scoped early with Engineering, and tested with users for clarity and confidence.','Revisado con Operaciones para cubrir casos reales, acotado pronto con Ingeniería y testado con usuarios para comprobar claridad y confianza.']]
    ]},
    {k:'img', src:'assets/renewals-members.webp', cap:['The four member scenarios: who acts on whose coverage, the employee alone or with family members.','Los cuatro escenarios de miembros: quién actúa sobre la cobertura de quién, el empleado solo o con familiares.']},
    {k:'img', src:'assets/renewals-types.webp', cap:['The four renewal outcomes, each with its own explicit message.','Los cuatro resultados de renovación, cada uno con su mensaje explícito.']},
    {k:'vid', src:'assets/renewals-prototype.mp4', poster:'assets/renewals-prototype-poster.webp', max:300, cap:['Prototype of the renewal flow in the app.','Prototipo del flujo de renovación en la app.']},
    {k:'img', src:'assets/renewals-map.webp', cap:['Every flow organised by subject and the cases inside it, including errors, missing data, emails and notifications.','Todos los flujos organizados por tema y los casos que incluye, también errores, datos que faltan, emails y notificaciones.']},
    {k:'h', t:['Measuring at the moment of truth','Medir en el momento clave']},
    {k:'p', t:['Right after renewing, an in-app notification asked whether the experience felt simple. We tracked it per company, so we could contact the companies that struggled and learn why, and in which scenarios. Product and Operations tracked incidents jointly against the previous year.',
               'Justo después de renovar, una notificación in-app preguntaba si la experiencia había sido sencilla. Lo medimos por empresa, para poder contactar a las que tuvieron problemas y entender por qué y en qué escenarios. Producto y Operaciones siguieron juntos las incidencias frente al año anterior.']},
    {k:'img', src:'assets/renewals-feedback.webp', max:760, cap:['The in-app question right after renewing, and the thank-you state.','La pregunta in-app justo después de renovar y el estado de agradecimiento.']},
    {k:'table', head:[['Type','Tipo'],['Answers','Respuestas'],['Positive','Positivas'],['% positive','% positivo']], rows:[
      ['Total','351','331','89.2%'],[['Renewal','Renovación'],'272','250','91.9%'],[['Replacement','Sustitución'],'79','63','79.7%']
    ]},
    {k:'quote', t:['The new renewal experience is widely perceived as clearer, more intuitive and better structured. It significantly reduced operational friction.','La nueva experiencia de renovación se percibe como más clara, intuitiva y mejor estructurada. Ha reducido mucho la fricción operativa.'], by:['Operations team','Equipo de Operaciones']},
    {k:'learn', items:[
      [['Seasonality forces better decisions','La estacionalidad obliga a decidir mejor'],['With one high-risk window a year, priorities got sharper and solutions simpler. When you can’t iterate, clarity and robustness matter more than feature depth.','Con una única ventana de alto riesgo al año, las prioridades se afinaron y las soluciones se simplificaron. Si no puedes iterar, la claridad y la robustez importan más que la profundidad.']],
      [['Measuring unlocks long-term value','Medir desbloquea valor a largo plazo'],['Company-level feedback let us reach the exact companies and users with problems and understand the cause.','El feedback por empresa nos permitió llegar a las empresas y usuarios con problemas y entender la causa.']]
    ]}
  ],
  reasons:{complex:['16 scenario–outcome combinations turned into one predictable experience.','16 combinaciones de escenario y resultado convertidas en una experiencia predecible.'],
           systems:['Renewal logic built as reusable machinery for life and pension insurance.','La lógica de renovación, construida como maquinaria reutilizable para seguros de vida y pensiones.']},
  notion:'https://app.notion.com/p/2e89ce2bac83800b8a9eda5ac8dab94f'
},
{
  id:'taxdown', company:'TaxDown', year:'2026', tone:'--sky', img:'assets/taxdown-cover.webp', cover:{v:'21.5%', t:['purchase conversion, from 14.5%','conversión a compra, desde 14,5%']}, base:.4, recruiter:1,
  w:{experimentation:3, b2b:2},
  tags:['abtest','b2b'],
  short:['B2B conversion','Conversión B2B'],
  title:['Same discount, better timing: converting partner users','Mismo descuento, mejor momento: convertir a usuarios de partners'],
  card:['Two chained experiments in tax season. A reminder at the right moment took purchases from 14.5% to 21.5%.','Dos experimentos encadenados en plena campaña. Un recordatorio en el momento justo llevó las compras del 14,5% al 21,5%.'],
  hl:{label:['The finding','El hallazgo'],
      text:['Around 55% of users had forgotten their partner discount by the time they saw their tax result. Reminding them right then, with TaxDown’s own brand, raised purchases from 14.5% to 21.5%.','Cerca del 55% de los usuarios ya había olvidado el descuento de su partner al ver el resultado de su renta. Recordárselo justo ahí, con la marca de TaxDown, subió las compras del 14,5% al 21,5%.']},
  challenge:['People arriving from partners, mostly banks, connected their data with the Spanish tax agency 17 points less than organic users: 39.4% vs 56.4%. Partners were around 40% of company revenue.',
             'Los usuarios que llegaban desde partners, sobre todo bancos, conectaban sus datos con la AEAT 17 puntos menos que los orgánicos: 39,4% frente a 56,4%. Los partners suponían cerca del 40% de la facturación.'],
  h1:['Same discount, better timing.','Mismo descuento, mejor momento.'],
  lede:['A series of initiatives built on quick experiments to increase annual-plan purchases among partner users.','Una serie de iniciativas basadas en experimentos rápidos para aumentar la compra de planes anuales entre los usuarios de partners.'],
  facts:[[['My role','Mi rol'],['Senior Product Designer\nB2B growth','Senior Product Designer\nGrowth B2B']],[['Period','Periodo'],['June 2026\nTax season','Junio de 2026\nCampaña de la renta']],[['Scope','Alcance'],['Mobile app\nOnboarding, result and checkout','App móvil\nOnboarding, resultado y compra']]],
  story:1,
  sum:[{k:['The challenge','El reto'], tone:'bad', t:['A channel that brought in around 40% of revenue, but converted less than organic.','Un canal que aportaba cerca del 40% de los ingresos, pero convertía menos que el orgánico.']},
       {k:['My contribution','Mi aportación'], t:['Two experiments and a survey to identify where to intervene and what to test next.','Dos experimentos y una encuesta para identificar dónde intervenir y qué probar después.']},
       {k:['Impact','Impacto'], tone:'good', big:['14.5% → 21.5%','14,5% → 21,5%'], bigl:['From 14.5% to 21.5%','Del 14,5% al 21,5%'], t:['Purchase conversion after seeing the result','Conversión a compra tras ver el resultado'], pp:'+7 pp'}],
  nums:[{k:['Business','Negocio'],v:'+48%',t:['more purchases in the experiment, in the channel behind ~40% of revenue','más compras en el experimento, en el canal que aporta ~40% de la facturación']},
        {k:['User','Usuario'],v:'~55%',t:['had forgotten their discount by the time they saw their result','había olvidado su descuento al ver el resultado']},
        {k:['Experiment','Experimento'],v:'A/B/C',t:['~5,000 users from 3 top partners, significant','~5.000 usuarios de 3 partners top, significativo']}],
  chain:[[['What was at stake','Lo que estaba en juego'],['40% of revenue','40% de la facturación'],['It came through partners, but those users connected their data 17 points less and rarely bought.','Llegaba por partners, pero esos usuarios conectaban sus datos 17 puntos menos y compraban poco.']],
         [['My bet','Mi apuesta'],['The problem was when, not what','El problema era el cuándo, no el qué'],['Remind users of their discount right after their result, with our brand instead of the bank’s.','Recordar el descuento justo tras el resultado, con nuestra marca y no la del banco.']],
         [['Impact','Impacto'],['14.5% → 21.5%','14,5% → 21,5%'],['Purchases after seeing the result, with one modal and the same discount.','Compras tras ver el resultado, con una modal y el mismo descuento.']]],
  blocks:[
    {k:'chap', n:['1 · The context','1 · El contexto'], t:['A key channel for the business, with room to convert better','Un canal clave para el negocio, con margen para convertir mejor']},
    {k:'p', t:['Banks and companies offered TaxDown with an exclusive discount to their customers or employees. This channel brought in around 40% of revenue, but its users bought less than those who arrived organically.',
               'Bancos y empresas ofrecían TaxDown con un descuento exclusivo a sus clientes o empleados. Este canal aportaba cerca del 40 % de la facturación, pero sus usuarios compraban menos que quienes llegaban de forma orgánica.']},
    {k:'p', t:['The gap already showed when connecting their tax data with the AEAT, the Spanish tax agency: only 39.4% of partner users did it, compared with 56.4% of organic ones. Without that connection, they couldn’t get as far as seeing their tax result and buying a plan.',
               'La diferencia ya aparecía al conectar los datos fiscales con la AEAT, la Agencia Tributaria española: solo lo hacía el 39,4 % de los usuarios de partners, frente al 56,4 % de los orgánicos. Sin esa conexión, no podían avanzar hasta conocer el resultado de su declaración y comprar un plan.']},
    {k:'goal', main:1, label:['Main goal','Objetivo principal'], t:['Increase the share of users coming from partners who bought a plan.','Aumentar el porcentaje de usuarios procedentes de partners que compraban un plan.']},
    {k:'journey', mode:'base', label:['The partner user’s journey','El journey del usuario de partner'], steps:TD_STEPS,
      flow:{src:'assets/taxdown-flow-', steps:[['BBVA landing','Landing BBVA'],['Sign up','Registro'],['Authorisation','Apoderamiento'],['Home','Inicio'],['Data','Datos'],['Result','Resultado'],['Plan','Plan']],
            cap:['The real flow for a BBVA customer, from the landing to choosing a plan. Screens of the Spanish app.','El flujo real para un cliente de BBVA, de la landing a elegir el plan.']},
      fr:{at:2, tag:['First big drop: partner vs organic','Primera gran caída: partner vs. orgánico'], h:['How many accept connecting their data?','¿Cuántos aceptan conectar sus datos?'], stats:[[['Organic','Orgánicos'],'56.4%'],[['Partners','Partners'],'39.4%']]},
      cap:['Why this step matters so much: after signing up, a window asked for the authorisation (the permission TaxDown needed to access the user’s tax data and act on their behalf with the AEAT, the Spanish tax agency). If users didn’t accept, we couldn’t prepare or review their draft, so it blocked the way to buying the plan.','Por qué este paso es tan importante: tras el registro, una ventana solicitaba el apoderamiento (una autorización necesaria para que TaxDown pudiera acceder a los datos fiscales y actuar en nombre del usuario ante la AEAT, la Agencia Tributaria española). Si el usuario no aceptaba, no podíamos preparar ni revisar el borrador y, por lo tanto, suponía un bloqueo para llegar hasta la compra del plan.']},

    {k:'chap', n:['2 · First bet','2 · Primera apuesta'], t:['Understanding the product before trusting it with their data','Entender el producto antes de confiarle sus datos']},
    {k:'p', t:['Our hypothesis was that partner users arrived drawn by the discount, but without really knowing TaxDown. Giving them context before asking for access to their tax data could increase connection and, after that, purchases.',
               'Nuestra hipótesis era que los usuarios de partners llegaban atraídos por el descuento, pero sin conocer bien TaxDown. Darles contexto antes de pedir acceso a sus datos fiscales podría aumentar la conexión y, después, las compras.']},
    {k:'journey', mode:'t1', label:['Friction point where we placed experiment 1','Punto de fricción donde ubicamos el experimento 1'], steps:TD_STEPS,
      t1:{h:['“Who is TaxDown and why do they want my data?”','«¿Quién es TaxDown y por qué me piden mis datos?»']}},
    {k:'p', t:['**The opportunity:** if more users understood TaxDown’s value and authorised access to their data, more of them would get to see their tax result. We expected that to turn into more plan purchases.',
               '**La oportunidad:** si más usuarios entendían el valor de TaxDown y autorizaban el acceso a sus datos, más llegarían a conocer el resultado de su declaración. Esperábamos que eso se tradujera en más compras del plan.']},
    {k:'goal', q:1, label:['The question the experiment had to answer.','La pregunta que debía responder el experimento.'], t:['Would explaining TaxDown’s value before asking for access to their tax data get more users to connect it and go on to buy a plan?','¿Explicar el valor de TaxDown antes de pedir acceso a los datos fiscales conseguiría que más usuarios los conectaran y avanzaran hasta comprar un plan?']},
    {k:'p', t:['At first, the team suggested expanding the landing, but an earlier experiment had already shown that the short version converted better. That’s why I proposed keeping it and stepping in after sign-up, right before asking for the authorisation.',
               'En un primer momento, el equipo planteó ampliar la landing, pero un experimento anterior ya había mostrado que la versión corta convertía mejor. Es por eso que propuse mantenerla e intervenir después del registro, justo antes de solicitar el apoderamiento.']},
    {k:'h', t:['Four steps to give context','Cuatro pasos para dar contexto']},
    {k:'p', t:['I designed a short introduction: who we are → how it works → your discount → connecting with the AEAT.',
               'Diseñé una introducción breve: quiénes somos → cómo funciona → tu descuento → conexión con la AEAT.']},
    {k:'p', t:['The authorisation came at the end, after explaining why we needed the data. I decided the flow couldn’t be skipped, since the authorisation was required to continue. That decision also brought a risk: adding steps could increase drop-off, so we measured onboarding completion.',
               'La autorización quedaba al final, después de explicar para qué necesitábamos los datos. Decidí que el flujo no pudiera saltarse, ya que el apoderamiento era necesario para continuar. Esa decisión también introducía un riesgo: añadir pasos podía aumentar el abandono, así que medimos la finalización del onboarding.']},
    {k:'p', t:['Before launching it, we validated comprehension with users and reviewed the proposal with the internal teams responsible for approving the authorisation.',
               'Antes de lanzarlo, validamos la comprensión con usuarios y revisamos la propuesta con los equipos internos responsables de aprobar la autorización.']},
    {k:'img', src:'assets/taxdown-stepper.webp', cap:['The four-step onboarding, with the authorisation at the end.','El onboarding de cuatro pasos, con el apoderamiento al final.']},
    {k:'split', meta:['1–15 June 2026 · A/B experiment with an 80/20 split · New partner users on mobile','1–15 de junio de 2026 · Experimento A/B con reparto 80/20 · Nuevos usuarios de partners en móvil'],
      h:['More connections, no improvement in purchases','Más conexiones, sin mejora en compras'],
      items:[[['Connection with the AEAT','Conexión con la AEAT'],['+5.3 pp','+5,3 pp'],['Statistically significant improvement.','Mejora estadísticamente significativa.'],'up'],
             [['Onboarding completion','Finalización del onboarding'],'96%',['Among those who started it.','Entre quienes lo empezaron.']],
             [['Purchase conversion','Conversión a compra'],['No change','Sin cambios'],['They connected more, but didn’t buy more.','Conectaban más, pero no compraban más.']]]},
    {k:'p', t:['The experiment supported the first part of our hypothesis: giving context helped people connect their data. But that improvement didn’t turn into more purchases. I kept the onboarding and decided to investigate what was holding back those who had already connected, before iterating further on the same solution.',
               'El experimento apoyaba la primera parte de nuestra hipótesis: dar contexto ayudaba a conectar los datos. Pero esa mejora no se tradujo en más compras. Mantuve el onboarding y decidí investigar qué frenaba a quienes ya habían conectado, antes de seguir iterando sobre la misma solución.']},

    {k:'chap', n:['3 · The turn','3 · El giro'], t:['Before changing the hypothesis, ask why','Antes de cambiar la hipótesis, preguntar por qué']},
    {k:'p', t:['Instead of polishing the stepper, we asked the people who connected but didn’t buy. We surveyed 96 users from four groups, and the answer changed the problem.',
               'En vez de pulir el stepper, preguntamos a quienes conectaban y no compraban. Encuestamos a 96 usuarios de cuatro grupos, y la respuesta cambió el problema.']},
    {k:'dots', total:96, no:53, l_tot:['users surveyed','usuarios encuestados'], l_yes:['remembered their discount','recordaban su descuento'], l_no:['didn’t remember it','no lo recordaban'],
      sr:['Of 96 users surveyed, 43 remembered their discount and 53, around 55%, didn’t.','De 96 usuarios encuestados, 43 recordaban su descuento y 53, cerca del 55%, no lo recordaban.'],
      cap:['Days pass between signing up and seeing the result. By then, more than half had forgotten their discount.','Entre registrarse y ver el resultado pasan días. Para entonces, más de la mitad había olvidado su descuento.']},
    {k:'lead', t:['New hypothesis: the problem wasn’t what we told them, but when.','Nueva hipótesis: el problema no era qué les contábamos, sino cuándo.']},

    {k:'chap', n:['4 · Second bet','4 · Segunda apuesta'], t:['Remind them at the moment they decide','Recordarlo en el momento de decidir']},
    {k:'p', t:['The discount already showed under the result and in checkout, but many never reached checkout. I designed a modal right after the result, with a button to checkout with the discount applied. A modal because it barely touched the flow and could be removed quickly mid-season.',
               'El descuento ya aparecía bajo el resultado y en el checkout, pero muchos no llegaban al checkout. Diseñé una modal justo después del resultado, con un botón al checkout con el descuento aplicado. Una modal porque apenas tocaba el flujo y se podía quitar rápido en plena campaña.']},
    {k:'journey', mode:'t2', label:['Where experiment 2 acts','Dónde actúa el experimento 2'], steps:TD_STEPS,
      t2a:{tag:['Experiment 2A · Hot','Experimento 2A · Hot'], h:['Modal right after the result','Modal justo tras el resultado'], q:['“Did I have a discount?”','«¿Tenía un descuento?»']},
      t2b:{tag:['Experiment 2B · Cold','Experimento 2B · Cold'], h:['Email → back to the modal','Email → vuelve a la modal']},
      cap:['The friction was right before paying: they had forgotten their discount. 2A reminds them in the flow; 2B, for those who left, brings them back with an email.','La fricción estaba justo antes de pagar: habían olvidado su descuento. El 2A se lo recuerda en el flujo; el 2B, a quien se fue, le trae de vuelta con un email.']},
    {k:'segs', label:['Experiment 2: same reminder, two segments, 12 days at the same time','Experimento 2: el mismo recordatorio, dos segmentos, 12 días a la vez'],
      items:[{tag:'2A · Hot', tone:'mint', icon:'phone', h:['Still in the flow','Siguen en el flujo'],
              rows:[[['Where','Dónde'],['Inside the app','Dentro de la app']],[['What','Qué'],['The modal, right after their result','La modal, justo después del resultado']]],
              res:['Moved purchases: we tested which brand worked best ↓','Movió las compras: probamos qué marca funcionaba mejor ↓'], win:1},
             {tag:'2B · Cold', tone:'dot', icon:'mail', h:['Left without buying','Se fueron sin comprar'],
              rows:[[['Where','Dónde'],['Outside the app: they didn’t come back','Fuera de la app: no volvían']],[['What','Qué'],['An email 4 days later that brought them back to the modal','Un email a los 4 días que les llevaba de vuelta a la modal']]],
              res:['Barely opened. Our hypothesis: CRM and Marketing already sent plenty of follow-ups. We closed it.','Apenas se abría. Nuestra hipótesis: CRM y Marketing ya enviaban muchos seguimientos. Lo cerramos.']}],
      cap:['The reminder has to reach users where they already are: inside the flow, not in one more email.','El recordatorio tiene que llegar donde ya está el usuario: dentro del flujo, no en un email más.']},
    {k:'p', t:['One question remained: which brand should go first? My hypothesis was that another brand in the middle of a payment could feel like an ad. We tested it with around 5,000 users from 3 top partners.',
               'Quedaba una duda: ¿qué marca debía ir primero? Mi hipótesis era que otra marca en mitad de un pago podía parecer publicidad. Lo probamos con unos 5.000 usuarios de 3 partners top.']},
    {k:'quiz', q:['Which one do you think sold more?','¿Cuál crees que vendió más?'], sub:['Same discount, same moment. Only the brand that goes first changes.','Mismo descuento, mismo momento. Solo cambia qué marca va primero.'],
      opts:[{id:'a',mock:'a',h:['Partner brand','Marca del partner'],t:['The bank the user knows, front and centre.','El banco que el usuario conoce, en grande.']},
            {id:'b',mock:'b',h:['TaxDown brand','Marca TaxDown'],t:['Our brand first, the partner as reinforcement.','Nuestra marca primero, el partner como refuerzo.']}],
      win:'b', rows:[[['No modal','Sin modal'],14.5],[['Partner brand','Marca partner'],17],[['TaxDown brand','Marca TaxDown'],21.5,'mint']], unit:'%',
      ok:['Well spotted. TaxDown’s brand won by 4.5 points: inside a payment, our brand reads as part of the flow, not as an ad.','Bien visto. Ganó la marca TaxDown por 4,5 puntos: dentro de un pago, nuestra marca se lee como parte del flujo y no como publicidad.'],
      ko:['It seems logical, but TaxDown’s brand won by 4.5 points: another brand in the middle of a payment reads as an ad.','Parece lo lógico, pero ganó la marca TaxDown por 4,5 puntos: otra marca en mitad de un pago se lee como publicidad.'],
      img:'assets/taxdown-modals.webp', imgcap:['The two modals, with BBVA as the example. Purchase after seeing the result, statistically significant.','Las dos modales, con BBVA como ejemplo. Compra tras ver el resultado, estadísticamente significativo.']},

    {k:'chap', n:['5 · What changed','5 · Lo que cambió'], t:['Same discount, better timing','Mismo descuento, mejor momento']},
    {k:'p', t:['The season ended before we could roll it out, so the plan was to launch the TaxDown-brand modal in the next one and stop adapting each modal to each partner: a single piece, cheaper to maintain and converting more.',
               'La campaña acabó antes de poder desplegarlo, así que el plan era lanzar la modal con marca TaxDown en la siguiente y dejar de adaptar cada modal a cada partner: una sola pieza, más barata de mantener y que convertía más.']},
    {k:'next', h:['Next steps','Siguientes pasos'], t:[['Launch the TaxDown modal in the next season and test a strikethrough price with each user’s figures.','Lanzar la modal de TaxDown en la siguiente campaña y probar el precio tachado con las cifras de cada usuario.'],
                 ['Reuse the stepper as the base for one piece at each moment of the journey.','Reutilizar el stepper como base para una pieza en cada momento del journey.'],
                 ['Fix the bug the interviews surfaced: a referral code overrode the partner discount.','Arreglar el bug que salió en las entrevistas: un código referral pisaba el descuento del partner.']]},
    {k:'impact', from:[['Product','Producto'],'+7 pp',['purchase after the result (+48% relative)','compra tras el resultado (+48% relativo)']],
      to:[['Business','Negocio'],'≈ X €',['per season: partner users × average plan price','por campaña: usuarios de partner × precio medio del plan'],1]}
  ],
  ask:[
    {id:'impact', q:['What was the business impact?','¿Qué impacto tuvo en negocio?'], m:[['14.5% → 21.5%',['purchase after seeing the result, significant','compra tras ver el resultado, significativo']],['+5.3 pp',['connection with the tax agency, with the stepper','conexión con la AEAT con el stepper']],['~40%',['of revenue came through partners','de la facturación llegaba por partners']],['≈ X €',['estimated per season, conservative','estimado por campaña, criterio conservador'],1]]},
    {id:'role', q:['What was my role?','¿Cuál fue mi papel?'], list:[['I proposed testing inside the product instead of repeating the landing.','Propuse probar dentro del producto en lugar de repetir la landing.'],['I designed the stepper and the modals, and defined the brand hypothesis for the A/B/C.','Diseñé el stepper y las modales, y definí la hipótesis de marca del A/B/C.'],['I validated the stepper with users and internal teams before launch, because the authorisation is sensitive.','Validé el stepper con usuarios y equipos internos antes de lanzarlo, porque el apoderamiento es sensible.'],['I worked with the PM and 2 engineers, one focused on this experiment.','Trabajé con el PM y 2 ingenieros, uno con foco en este experimento.']]},
    {id:'discarded', q:['What did I rule out?','¿Qué descarté?'], dec:[[['Longer landing','Landing más larga'],'no',['An earlier experiment showed the short one converted better.','Un experimento anterior ya demostraba que la corta convertía mejor.']],[['Skippable stepper','Stepper que se puede saltar'],'no',['The authorisation was mandatory: skipping only delayed it.','El apoderamiento era obligatorio: saltarlo solo lo retrasaba.']],[['Cold email 4 days later','Email cold a los 4 días'],'testno',['Tested in parallel: users barely opened it, as CRM already sent many follow-ups.','Probado en paralelo: apenas se abría, porque CRM ya enviaba muchos seguimientos.']],[['Strikethrough price','Precio tachado'],'later',['It depended on each plan and discount: too big a change mid-season.','Dependía de cada plan y descuento: demasiado cambio en campaña.']],[['Modal with the partner brand','Modal con marca del partner'],'test',['The most intuitive option: the brand users already know.','La opción más intuitiva: la marca que el usuario conoce.']],[['Modal with the TaxDown brand','Modal con marca TaxDown'],'win',['Inside a payment, another brand feels like an ad.','En mitad de un pago, otra marca parece publicidad.']]]},
    {id:'wrong', q:['What went wrong?','¿Qué salió mal?'], list:[['The first experiment lifted connection but not purchases: we measured an intermediate step and assumed it would carry through.','El primer experimento mejoró la conexión pero no las compras: medimos un paso intermedio y asumimos que arrastraría al final.'],['The season ended before we could roll out the winning modal.','La campaña acabó antes de desplegar la modal ganadora.'],['The interviews surfaced a bug: a referral code overrode the partner discount.','Las entrevistas destaparon un bug: un código referral pisaba el descuento del partner.']]},
    {id:'learned', q:['What did I learn?','¿Qué aprendí?'], learn:[
      [['Chain your experiments','Encadenar experimentos'],['Each experiment answered one question, and its conclusion set the next hypothesis.','Cada experimento respondió una pregunta, y su conclusión marcó la siguiente hipótesis.']],
      [['Numbers say what, users say why','Los números dicen qué, los usuarios por qué'],['The survey turned a partial result into the hypothesis that worked.','La encuesta convirtió un resultado parcial en la hipótesis que funcionó.']],
      [['Timing beats volume','El momento gana al volumen'],['We didn’t need to show the discount more, just at the right moment.','No hacía falta enseñar más el descuento, solo en el momento justo.']]]},
    {id:'different', q:['What would I do differently today?','¿Qué haría distinto hoy?'], draft:1},
    {id:'inspired', q:['What inspired me?','¿En qué me inspiré?'], draft:1}
  ],
  reasons:{experimentation:['Two chained experiments mid-campaign, the second one shaped by a 96-person survey.','Dos experimentos encadenados en plena campaña, el segundo guiado por una encuesta a 96 personas.'],
           b2b:['Activation and conversion for users arriving through partners, around 40% of revenue.','Activación y conversión de usuarios que llegan desde partners, cerca del 40% de la facturación.']},
  notion:'https://app.notion.com/p/3fd9ce2bac838048a95dde886df4b785'
},
{
  id:'health', company:'Cobee', year:'2023', tone:'--peach', img:null, cover:{v:'+31%', t:['adoption in Spain','adopción en España']}, base:.3, recruiter:0,
  w:{complex:3, systems:2, zero:1},
  tags:['complex','b2c'],
  short:['Health Insurance','Seguro de Salud'],
  title:['One health insurance experience for three countries','Una experiencia de seguro de salud para tres países'],
  card:['Cobee’s most complex benefit, redesigned once and launched in Spain, Mexico and Portugal.','El beneficio más complejo de Cobee, rediseñado una vez y lanzado en España, México y Portugal.'],
  hl:{label:['The twist','El giro'],
      text:['Adoption grew 31% in Spain, but in Mexico it stayed at 1.7%. Research showed the real substitute was a medical service adopted 20× more. Now Cobee tests demand first.','La adopción creció un 31% en España, pero en México se quedó en el 1,7%. El research mostró que el sustituto real era un servicio médico adoptado 20 veces más. Desde entonces Cobee valida la demanda primero.']},
  challenge:['Health insurance was one of Cobee’s highest-value benefits and had the highest incident rate of any. Spain had a confusing, undocumented flow, Portugal an incomplete one, and Mexico nothing at all.',
             'El seguro de salud era de los beneficios de más valor de Cobee y el que más incidencias tenía. España tenía un flujo confuso y sin documentar, Portugal uno incompleto y México nada.'],
  facts:[[['My role','Mi rol'],['Product designer','Product designer']],[['Surfaces','Superficies'],['App, admin dashboard, backoffice (case focuses on the app)','App, dashboard de admin, backoffice (el caso se centra en la app)']],[['Markets','Mercados'],['Spain, Mexico, Portugal','España, México, Portugal']],[['Worked with','Con'],['CX, Operations, Engineering','CX, Operaciones, Ingeniería']]],
  nums:[{v:'+31%',t:['adoption growth in Spain in two years','crecimiento de adopción en España en dos años']},{v:'60K+',t:['active subscriptions','suscripciones activas']},{v:'+307%',t:['client growth, proven at scale','crecimiento de clientes, probado a escala']}],
  blocks:[
    {k:'h', t:['Context','Contexto']},
    {k:'p', t:['In 2023 Cobee wanted to strengthen this vertical globally, starting with Spain and expanding to Mexico and Portugal. The goal: one unified, scalable and profitable model.',
               'En 2023 Cobee quería reforzar este vertical a nivel global, empezando por España y ampliando a México y Portugal. El objetivo: un único modelo unificado, escalable y rentable.']},
    {k:'list', t:[['22% of active companies in Spain offered it.','El 22% de las empresas activas en España lo ofrecía.'],['37,000 employees were offered it; about 22,000 used it.','Se ofrecía a 37.000 empleados; lo usaban unos 22.000.'],['7.1% of recurring revenue came from health insurance.','El 7,1% de los ingresos recurrentes venía del seguro de salud.']]},
    {k:'h', t:['Hypotheses','Hipótesis']},
    {k:'table', head:[['Hypothesis','Hipótesis'],['Goal','Objetivo'],['Success metric','Métrica de éxito']], rows:[
      [['We’re not using its full profit potential','No aprovechamos todo su potencial de ingresos'],['Increase adoption and efficiency','Aumentar adopción y eficiencia'],['+ adoption and activation rate','+ tasa de adopción y activación']],
      [['The Spanish flow creates friction and cost','El flujo español genera fricción y coste'],['Reduce incidents and workload','Reducir incidencias y carga de trabajo'],['− CX tickets, − invoice mismatches','− tickets de CX, − descuadres de facturas']],
      [['Mexico needs a localised but consistent experience','México necesita una experiencia local pero coherente'],['Scalable, adaptable flows','Flujos escalables y adaptables'],['One UI across three countries','Una sola UI en tres países']]
    ]},
    {k:'h', t:['Finding the friction','Encontrar la fricción']},
    {k:'p', t:['A CX ticket analysis put hiring the insurance as the area with the most errors and doubts. None of the employee flows were documented, so I mapped them first and set five goals.',
               'Un análisis de tickets de CX señaló la contratación del seguro como la zona con más errores y dudas. Ningún flujo de empleado estaba documentado, así que primero los mapeé y fijé cinco objetivos.']},
    {k:'img', src:'assets/health-tickets.webp', max:760, cap:['30 CX tickets reviewed: payroll and hiring errors and doubts were the main pain points.','30 tickets de CX revisados: los errores de nómina y de contratación y las dudas eran los principales problemas.']},
    {k:'img', src:'assets/health-current.webp', cap:['The old flow, with the friction points marked.','El flujo anterior, con los puntos de fricción marcados.']},
    {k:'steps', items:[
      [['Simplify enrolment','Simplificar la contratación'],['Make plan selection clear and effortless.','Que elegir plan sea claro y sencillo.']],
      [['Improve family management','Mejorar la gestión de familiares'],['An intuitive flow for adding family members and covering them.','Un flujo intuitivo para añadir familiares y darles cobertura.']],
      [['Better error handling','Mejores errores'],['Clear, actionable guidance to prevent mistakes.','Indicaciones claras y accionables para evitar errores.']],
      [['Request tracking','Seguimiento de solicitudes'],['Real-time updates on each application.','Estado de cada solicitud en tiempo real.']],
      [['All benefit info in one place','Toda la información en un sitio'],['Easy access to every coverage detail.','Acceso fácil a todos los detalles de cobertura.']]
    ]},
    {k:'img', src:'assets/health-happyflow.webp', cap:['The main employee flow, documented for the first time: choose the benefit, request it, pick the plan, complete hiring and add relatives.','El flujo principal del empleado, documentado por primera vez: elegir el beneficio, solicitarlo, escoger modalidad, completar la contratación y añadir familiares.']},
    {k:'h', t:['Design process','Proceso de diseño']},
    {k:'p', t:['I ran iterative tests with employees, CX and Operations, and worked closely with engineering. The hardest part was prioritising alerts so the combinations didn’t explode. To keep every benefit consistent, I created a master document of all possible benefit statuses, starting with health insurance because it had the most variations. It became the reference for design and other departments.',
               'Hice tests iterativos con empleados, CX y Operaciones, y trabajé muy cerca de ingeniería. Lo más difícil fue priorizar las alertas para que las combinaciones no se dispararan. Para que todos los beneficios fueran coherentes, creé un documento maestro con todos los estados posibles, empezando por el seguro porque era el que más variantes tenía. Se convirtió en la referencia de diseño y de otros departamentos.']},
    {k:'ba', n:3, items:[['assets/health-hire-employee.mp4',['Hiring for yourself','Contratar para ti']],['assets/health-hire-family.mp4',['Hiring for a relative','Contratar para un familiar']],['assets/health-add-family.mp4',['Adding a new relative','Añadir un familiar nuevo']]],
      cap:['The final product: the three main employee tasks.','El producto final: las tres tareas principales del empleado.']},
    {k:'img', src:'assets/health-states.webp', cap:['The master document of benefit statuses, the shared reference for design and other teams.','El documento maestro de estados de los beneficios, la referencia común para diseño y otros equipos.']},
    {k:'h', t:['Results','Resultados']},
    {k:'table', head:[['Area','Área'],['Result','Resultado']], rows:[
      [['Rollout','Lanzamiento'],['Spain, Mexico and Portugal: Cobee’s first truly global benefit','España, México y Portugal: el primer beneficio realmente global de Cobee']],
      [['Scalability','Escalabilidad'],['Reused for life insurance and pension plans','Reutilizado para seguros de vida y planes de pensiones']],
      [['Experience','Experiencia'],['Zero negative NPS after launch','Cero NPS negativos tras el lanzamiento']],
      [['Operations','Operaciones'],['Significant reduction in manual workload','Reducción importante del trabajo manual']],
      [['Longevity','Longevidad'],['+307% client growth; in Portugal it led to a partnership with Sabseg, a top insurance broker','+307% de clientes; en Portugal llevó a un acuerdo con Sabseg, un gran broker de seguros']]
    ]},
    {k:'h', t:['A market truth','Una verdad de mercado']},
    {k:'p', t:['The rollout was smooth, but adoption in Mexico stayed at 1.7%. We validated local motivations and barriers and found it wasn’t a usability issue. In Mexico the functional substitute was Meeting Pros, a medical assistance service launched through the Custom Benefits system I also designed.',
               'El lanzamiento fue fluido, pero la adopción en México se quedó en el 1,7%. Validamos motivaciones y barreras locales y vimos que no era un problema de usabilidad. En México, el sustituto funcional era Meeting Pros, un servicio de asistencia médica lanzado con el sistema de Beneficios personalizados que también diseñé.']},
    {k:'abc', unit:'%', rows:[[['Mexican companies offering Meeting Pros','Empresas mexicanas con Meeting Pros'],34],[['Mexican companies offering health insurance','Empresas mexicanas con seguro de salud'],1.7]],
      cap:['Meeting Pros was adopted 20× more than health insurance in Mexico.','Meeting Pros se adoptó 20 veces más que el seguro de salud en México.']},
    {k:'learn', items:[
      [['Strong foundations make global scale possible','Unas buenas bases hacen posible escalar'],['The redesign adapted to completely different regulatory and operational contexts without being rebuilt.','El rediseño se adaptó a contextos regulatorios y operativos muy distintos sin reconstruirse.']],
      [['Scalability isn’t adoption','Escalar no es adoptar'],['This insight changed our global approach: test demand with fast Custom Benefits and only scale what proves adoption.','Este aprendizaje cambió el enfoque global: validar la demanda con Beneficios personalizados rápidos y escalar solo lo que demuestra adopción.']]
    ]}
  ],
  reasons:{complex:['The benefit with the most rules, states and incidents, made understandable.','El beneficio con más reglas, estados e incidencias, hecho comprensible.'],
           systems:['Its model was reused for life insurance and pensions, and a status system for all benefits.','Su modelo se reutilizó para vida y pensiones, y un sistema de estados para todos los beneficios.'],
           zero:['Built from scratch for Mexico, where the benefit didn’t exist.','Construido desde cero para México, donde el beneficio no existía.']},
  notion:'https://app.notion.com/p/1c59ce2bac83800da164f649ebf45cfd'
},
{
  id:'banners', company:'TaxDown', year:'2026', tone:'--butter', img:null, cover:{v:'1 → 72', t:['banner options per partner','opciones de banner por partner']}, base:.2, recruiter:0,
  w:{ai:3, b2b:3, zero:1, experimentation:1},
  tags:['internal','ai','b2b'],
  short:['Partner banner tool','Herramienta de banners'],
  title:['A banner tool I designed and built on my own with AI','Una herramienta de banners que diseñé y construí sola con IA'],
  card:['From one fixed template to 72 options per partner, exported in one ZIP. Shipped on Vercel.','De una plantilla fija a 72 opciones por partner, exportadas en un ZIP. Publicada en Vercel.'],
  hl:{label:['Why it’s interesting','Por qué es interesante'],
      text:['At a previous company, a similar tool needed a full-time engineer. With AI I designed and built it alone, from idea to a link the CRM team uses every week.','En otra empresa, una herramienta parecida necesitó un ingeniero a tiempo completo. Con IA la diseñé y construí sola, de la idea a un enlace que el equipo de CRM usa cada semana.']},
  challenge:['Partners were about 40% of TaxDown’s revenue and co-branded emails performed better than generic ones. But with 600+ partners, the CRM team could only make banners for about 25, by hand, with one fixed template and one size at a time.',
             'Los partners eran cerca del 40% de la facturación de TaxDown y los emails co-branded funcionaban mejor que los genéricos. Pero con más de 600 partners, el equipo de CRM solo podía hacer banners para unos 25, a mano, con una plantilla fija y un tamaño cada vez.'],
  facts:[[['My role','Mi rol'],['Design and build, solo','Diseño y desarrollo, sola']],[['Initiative','Iniciativa'],['One Person Squad: pick a problem, solve it alone','One Person Squad: elige un problema y resuélvelo sola']],[['Users','Usuarios'],['CRM team','Equipo de CRM']],[['Stack','Stack'],['Built with AI, deployed on Vercel','Construida con IA, desplegada en Vercel']]],
  nums:[{v:'9 × 8',t:['templates × sizes for email, web and app','plantillas × tamaños para email, web y app']},{v:'1 ZIP',t:['batch export instead of one PNG at a time','export en lote en vez de un PNG cada vez']},{v:'15.4%',t:['CTOR baseline to measure the impact','CTOR de partida para medir el impacto']}],
  blocks:[
    {k:'h', t:['The problem','El problema']},
    {k:'p', t:['During tax season the CRM team sent weekly emails to about 25 partners, each with its own banner: logo, colours and discount. The CRM manager had to set up, export and upload every banner by hand, one partner and one size at a time. Every new partner meant repeating the same work, so this could never reach hundreds of partners. The rest got a generic email.',
               'En campaña, el equipo de CRM enviaba emails semanales a unos 25 partners, cada uno con su banner: logo, colores y descuento. La responsable de CRM tenía que preparar, exportar y subir cada banner a mano, un partner y un tamaño cada vez. Cada partner nuevo suponía repetir el trabajo, así que nunca podría llegar a cientos. El resto recibía un email genérico.']},
    {k:'h', t:['What I built','Qué construí']},
    {k:'p', t:['Working side by side with the CRM manager showed me that exporting everything together mattered more than more editing options. So I focused on the two slowest parts of the job.',
               'Trabajar codo con codo con la responsable de CRM me mostró que exportar todo junto importaba más que tener más opciones de edición. Así que me centré en las dos partes más lentas del trabajo.']},
    {k:'steps', items:[
      [['Create with more flexibility','Crear con más flexibilidad'],['The single template became a tool with 9 templates and 8 sizes for email, web and app, with a live preview before exporting.','La plantilla única pasó a ser una herramienta con 9 plantillas y 8 tamaños para email, web y app, con previsualización antes de exportar.']],
      [['Set up new partners faster','Dar de alta partners más rápido'],['A colour palette generator: upload an image from the partner’s website and the tool suggests its brand colours, which can still be edited.','Un generador de paleta: subes una imagen de la web del partner y la herramienta sugiere sus colores de marca, que se pueden editar.']],
      [['Export everything at once','Exportar todo de golpe'],['Choose the banners and sizes and download them in one organised ZIP, ready to upload, instead of unnamed PNGs one by one.','Elegir banners y tamaños y descargarlos en un ZIP ordenado, listo para subir, en vez de PNGs sin nombre uno a uno.']],
      [['Ship it where people work','Llevarlo a donde trabaja la gente'],['Published on Vercel so the team uses it from a link, with nothing to install.','Publicada en Vercel para que el equipo la use desde un enlace, sin instalar nada.']]
    ]},
    {k:'img', src:'assets/banners-editor.webp', cap:['Template editor: CRM customises content, assets and layout without design support.','Editor de plantillas: CRM personaliza contenido, assets y layout sin ayuda de diseño.']},
    {k:'ba', n:2, items:[['assets/banners-inspo.webp',['Image from the partner’s website','Imagen de la web del partner']],['assets/banners-palette.webp',['Suggested palette','Paleta sugerida']]],
      cap:['Palette generator: the partner’s brand colours, extracted from a screenshot and still editable.','Generador de paleta: los colores de marca del partner, extraídos de una captura y editables.']},
    {k:'img', src:'assets/banners-preview.webp', max:560, cap:['Multi-format preview: each banner checked in app and web sizes before exporting.','Vista previa multiformato: cada banner revisado en tamaños de app y web antes de exportar.']},
    {k:'img', src:'assets/banners-export.webp', cap:['Batch export: choose banners and formats and download one organised ZIP.','Exportación en lote: eliges banners y formatos y descargas un ZIP ordenado.']},
    {k:'h', t:['What I left out, and why','Qué dejé fuera y por qué']},
    {k:'p', t:['Two ideas would have made it even more useful, but both needed engineering and shared infrastructure: saving partners and settings so each is set up once, and automatic delivery, publishing each banner at a fixed link so Customer.io shows every user their own partner’s banner. Instead of blocking a quick win, I shipped what I could build alone and shared the next step with Tech and Data, who validated it.',
               'Dos ideas la habrían hecho aún más útil, pero ambas necesitaban ingeniería e infraestructura compartida: guardar partners y ajustes para configurarlos una vez, y la entrega automática, publicando cada banner en un enlace fijo para que Customer.io muestre a cada usuario el de su partner. En vez de bloquear un quick win, lancé lo que podía construir sola y compartí el siguiente paso con Tech y Data, que lo validaron.']},
    {k:'img', src:'assets/banners-tobe.webp', cap:['The proposed next step: publish each banner at a URL so Customer.io personalises it per partner automatically.','El siguiente paso propuesto: publicar cada banner en una URL para que Customer.io lo personalice por partner automáticamente.']},
    {k:'h', t:['Before and after','Antes y después']},
    {k:'table', head:['',['Before','Antes'],['After','Después']], rows:[
      [['Creative options','Opciones creativas'],['1 fixed template','1 plantilla fija'],['9 templates × 8 sizes, with preview','9 plantillas × 8 tamaños, con preview']],
      [['Export','Exportación'],['One PNG at a time, no naming','Un PNG cada vez, sin nombre'],['Batch export in an organised ZIP','Export en lote en un ZIP ordenado']],
      [['New partner setup','Alta de partner'],['Colours and assets from scratch','Colores y assets desde cero'],['Palette extracted from a reference image','Paleta extraída de una imagen de referencia']]
    ], note:['Next step: compare click rate (CTOR) for the same partners before and after co-branded banners. Starting point: 15.4% in the 2026 pre-campaign.','Siguiente paso: comparar la tasa de clic (CTOR) de los mismos partners antes y después de los banners co-branded. Punto de partida: 15,4% en la precampaña de 2026.']},
    {k:'learn', items:[
      [['Designers can build and test','Las diseñadoras pueden construir y probar'],['AI let me go beyond defining a solution to building and testing it, while recognising when to bring in engineering.','La IA me permitió ir más allá de definir una solución: construirla y probarla, sabiendo cuándo hace falta ingeniería.']],
      [['Sit next to the person doing the work','Sentarse al lado de quien hace el trabajo'],['The most valuable feature (batch export) came from watching the real task, not from a feature list.','La funcionalidad más valiosa (export en lote) salió de observar la tarea real, no de una lista de funcionalidades.']]
    ]}
  ],
  reasons:{ai:['Designed and built solo with AI, from idea to a tool the CRM team uses from a link.','Diseñada y construida sola con IA, de la idea a una herramienta que CRM usa desde un enlace.'],
           b2b:['An internal tool that unblocks a manual partner-marketing process.','Una herramienta interna que desbloquea un proceso manual de marketing con partners.'],
           zero:['From nothing to a working product as a one-person squad.','De cero a un producto que funciona, como squad de una persona.'],
           experimentation:['Built to enable a co-branding test, with the baseline already defined.','Construida para habilitar un test de co-branding, con la línea base ya definida.']},
  notion:'https://app.notion.com/p/32e9ce2bac838031aaeef69f5752c4fc'
},
{
  id:'playtomic', company:'Playtomic', year:'2021', tone:'--lilac', img:null, cover:{v:'910K', t:['posts in 6 months','posts en 6 meses']}, base:.1, recruiter:0,
  w:{zero:3, experimentation:1, systems:1},
  tags:['feature','b2c'],
  short:['Social community','Comunidad social'],
  title:['Turning a booking app into a community','Convertir una app de reservas en una comunidad'],
  card:['The first social network for racket sports: feed, profiles, follows, notifications and shared match results.','La primera red social de deportes de raqueta: feed, perfiles, follows, notificaciones y resultados compartidos.'],
  hl:{label:['In numbers','En cifras'],
      text:['One of two designers for nine front-end developers. Eleven features in three months, and players created 910K posts in the first six months.','Una de dos diseñadoras para nueve desarrolladores front-end. Once funcionalidades en tres meses, y los jugadores crearon 910K posts en los primeros seis meses.']},
  challenge:['Playtomic wanted to move from a transactional booking app to a place where players connect, compete and come back. That meant designing a social layer from zero, inside an app millions already used to book courts.',
             'Playtomic quería pasar de ser una app transaccional de reservas a un lugar donde los jugadores se conectan, compiten y vuelven. Eso suponía diseñar una capa social desde cero, dentro de una app que millones ya usaban para reservar pistas.'],
  facts:[[['My role','Mi rol'],['Product designer, social features','Product designer, funcionalidades sociales']],[['Team','Equipo'],['2 designers, 9 front-end developers','2 diseñadoras, 9 desarrolladores front-end']],[['Surface','Superficie'],['Mobile app, B2C','App móvil, B2C']],[['When','Cuándo'],['January – July 2021','Enero – julio 2021']]],
  nums:[{v:'910K',t:['posts created in the first 6 months','posts creados en los primeros 6 meses']},{v:'130K',t:['unique users opening the feed each week','usuarios únicos que abrían el feed cada semana']},{v:'11',t:['features and improvements shipped in v1','funcionalidades y mejoras lanzadas en la v1']}],
  blocks:[
    {k:'h', t:['Research','Research']},
    {k:'p', t:['We benchmarked apps with similar approaches, like Strava, Relive, Freeletics, Peloton and Nike Run Club, to see trends and what Playtomic could bring that others didn’t. We also defined iconography with a Playtomic touch, and a new navigation: Feed, Play and Profile, with labels under each icon for accessibility.',
               'Hicimos benchmarking de apps con enfoques parecidos, como Strava, Relive, Freeletics, Peloton o Nike Run Club, para ver tendencias y qué podía aportar Playtomic que otras no. También definimos una iconografía con el toque de Playtomic y una navegación nueva: Feed, Play y Perfil, con etiqueta bajo cada icono por accesibilidad.']},
    {k:'h', t:['Two phases','Dos fases']},
    {k:'steps', items:[
      [['v0 · Dogfood, January – March','v0 · Dogfood, enero – marzo'],['The scaffolding, used internally first: a text-only feed, followers and following, and a social profile with posts and activity. Built on the getstream.io library to make development feasible, which limited what we could design.','El andamiaje, usado primero de forma interna: un feed solo de texto, seguidores y seguidos, y un perfil social con posts y actividad. Construido sobre la librería getstream.io para que el desarrollo fuera viable, lo que limitaba lo que podíamos diseñar.']],
      [['v1 · Rhyhorn, March – June','v1 · Rhyhorn, marzo – junio'],['Posts with match results and photos, a match counter, a notification centre, privacy settings and content reporting, better friend recommendations, sharing results outside the app and a home redesign.','Posts con resultados y fotos, contador de partidos, centro de notificaciones, ajustes de privacidad y reporte de contenido, mejores recomendaciones de amigos, compartir resultados fuera de la app y rediseño de la home.']],
      [['Test small, then expand','Testear en pequeño y ampliar'],['Released to 7,000 users in Mexico in May 2021, improved with their feedback, and launched in Europe in July.','Lanzado a 7.000 usuarios en México en mayo de 2021, mejorado con su feedback y lanzado en Europa en julio.']]
    ]},
    {k:'h', t:['Decisions worth telling','Decisiones que merece la pena contar']},
    {k:'list', t:[
      ['What to share and where: after a lot of discussion with stakeholders, PMs and design, the first rich post became sharing the result of a played match, from the match detail.','Qué compartir y dónde: tras mucha discusión con stakeholders, PMs y diseño, el primer post enriquecido fue compartir el resultado de un partido, desde el detalle del partido.'],
      ['Designing for the scope we had: the ideal post kept results visible while swiping photos; the shipped version reused the old result card to fit the timeline.','Diseñar para el alcance real: el post ideal mantenía el resultado visible al pasar fotos; la versión lanzada reutilizó la tarjeta de resultado antigua para llegar a tiempo.'],
      ['Notifications without actions: we designed them with CTAs, but shipped them without to reduce complexity, with privacy settings, deletion and a clear highlight for new ones.','Notificaciones sin acciones: las diseñamos con CTAs, pero se lanzaron sin ellas para reducir complejidad, con ajustes de privacidad, borrado y un destacado claro para las nuevas.'],
      ['Home clean-up: green alert bubbles were confusing, so we fixed the colour hierarchy, softened the background and raised body text from 12px to 14px.','Limpieza de la home: las burbujas verdes de alerta confundían, así que arreglamos la jerarquía de color, suavizamos el fondo y subimos el texto de 12px a 14px.'],
      ['Empty states with personality: a new feature means lots of empty screens, so we wrote friendly, consistent copy for all of them.','Estados vacíos con personalidad: una funcionalidad nueva significa muchas pantallas vacías, así que escribimos textos cercanos y coherentes para todas.']
    ]},
    {k:'h', t:['Keeping a growing team organised','Mantener ordenado un equipo que crecía']},
    {k:'p', t:['Every flow had five sources side by side: user story, mid-fi, hi-fi, the Zeplin link and post-development feedback, with a colour code for each. In parallel we moved from Sketch to Figma, rolled out a new brand and unified the design system across mobile and web.',
               'Cada flujo tenía cinco fuentes juntas: historia de usuario, mid-fi, hi-fi, el enlace a Zeplin y el feedback tras desarrollo, con un código de color para cada una. En paralelo pasamos de Sketch a Figma, lanzamos una nueva marca y unificamos el design system en móvil y web.']},
    {k:'h', t:['Results, six months after launch','Resultados, seis meses después']},
    {k:'list', t:[['910,000 posts created.','910.000 posts creados.'],['1,250 reactions a day on average.','1.250 reacciones al día de media.'],['About 130,000 unique users a week opened the feed.','Unos 130.000 usuarios únicos a la semana abrían el feed.'],['56% of users had more than 15 posts in their feed; the next goal was the 16% with an empty one, through suggestions.','El 56% de los usuarios tenía más de 15 posts en su feed; el siguiente objetivo era el 16% con el feed vacío, con sugerencias.']]},
    {k:'learn', items:[
      [['You can’t ship everything in v1','No se puede lanzar todo en la v1'],['In a big project, simplifying and prioritising is the work.','En un proyecto grande, simplificar y priorizar es el trabajo.']],
      [['Organisation scales a team','La organización escala un equipo'],['Colour codes, a design system, good practices and communication kept nine developers unblocked while the team kept growing.','Códigos de color, design system, buenas prácticas y comunicación mantuvieron a nueve desarrolladores sin bloqueos mientras el equipo crecía.']]
    ]}
  ],
  reasons:{zero:['A social product designed from zero inside an existing app.','Un producto social diseñado desde cero dentro de una app existente.'],
           experimentation:['Validated with 7,000 users in one market before scaling to Europe.','Validado con 7.000 usuarios en un mercado antes de llegar a Europa.'],
           systems:['Shipped alongside a rebrand and a unified design system.','Lanzado a la vez que una nueva marca y un design system unificado.']},
  notion:'https://app.notion.com/p/476c381d04d24af69b1cbeaa7e0c78a9'
}
];

/* Selected work cards: header label, headline metric, two-line title, short text and "Why open this case". */
const SELCARD = {
  discount:{kick:['Discounts','Descuentos'], m:'+65.6%', ml:['purchase success, 19.4% → 32.2%','compras con éxito, 19,4% → 32,2%'],
    eb:['Optimising the purchase journey','Optimizar el proceso de compra'], h:[['Three experiments','that improved conversion.'],['Tres experimentos','que mejoraron la conversión.']],
    p:['An opportunistic initiative of three experiments that **lifted completed purchases by 65.6%**.','Una iniciativa oportunista de tres experimentos que **aumentaron un 65,6% las compras completadas**.'],
    why:['See how I spotted an opportunity inside a migration task and turned it into experiments with impact.','Encontrarás cómo detecté una oportunidad dentro de una tarea de migración y la convertí en experimentos con impacto.']},
  taxdown:{kick:['Partner conversion','Conversión de partners'], m:'14.5 → 21.5%', ml:['purchase conversion','conversión a compra'],
    eb:['B2B growth · Tax season','Growth B2B · Campaña de la renta'], h:[['Same discount, better timing:','converting partner users'],['Mismo descuento, mejor momento:','convertir a usuarios de partners']],
    p:['→ Two chained experiments mid-season: the first one failed on purchases and taught us why\n→ Reminding users of their discount right before paying took **purchases from 14.5% to 21.5%**','→ Dos experimentos encadenados en plena campaña: el primero falló en compras y nos enseñó por qué\n→ Recordar el descuento justo antes de pagar llevó las **compras del 14,5% al 21,5%**'],
    why:['See how I learned that sometimes you have to keep experimenting to find the key that lifts conversion.','Encontrarás cómo aprendí que a veces hay que seguir experimentando para dar con la clave que aumenta la conversión.']},
  health:{kick:['Health insurance','Seguro de salud'], m:'+31%', ml:['adoption in Spain, two years after the redesign','de adopción en España, dos años después del rediseño'],
    eb:['One benefit, three markets','Un beneficio, tres mercados'], h:[['Buying health insurance','without getting lost in it.'],['Contratar un seguro de salud','sin perderse en su complejidad.']],
    p:['The redesign of Cobee’s first global benefit, considered its most complex, with a scalable structure that adapts to each market.','El rediseño del primer beneficio global de Cobee, considerado el más complejo, con una estructura escalable y adaptable a las particularidades de cada mercado.'],
    why:['See how I designed a simple, modular and scalable structure that became the model for other benefits, such as life insurance and pensions.','Encontrarás cómo diseñé una estructura simple, modular y escalable que se convirtió en el modelo para otros beneficios, como seguros de vida y pensiones.']},
  renewals:{kick:['Renewals','Renovaciones'], m:'89%', ml:['positive in-app feedback','de feedback positivo in-app'],
    eb:['Many scenarios, one clear experience','Múltiples escenarios, una experiencia clara'], h:[['Renewing health insurance','without passing the complexity on to users.'],['Renovar el seguro médico','sin trasladar la complejidad al usuario.']],
    p:['I redesigned renewals to handle family situations, plan changes and continuity of cover: **89% positive feedback and 50% fewer incidents**.','Rediseñé las renovaciones para resolver situaciones familiares, cambios de plan y continuidad de cobertura: **89% de feedback positivo y un 50% menos de incidencias**.'],
    why:['See how I mapped the renewal scenarios and defined the flows, states and alerts that reduced friction for users and teams during the busiest period of the year.','Encontrarás cómo mapeé los escenarios de renovación y definí los flujos, estados y alertas para reducir las fricciones de usuarios y equipos durante el periodo de mayor demanda.']},
  benefits:{kick:['Custom benefits','Beneficios a medida'], m:'414', ml:['unique benefits, launched in days instead of months','beneficios únicos, lanzados en días en vez de meses'],
    eb:['Validating interest before building','Validar interés antes de construir'], h:[['From a hypothesis to an endless','engine of custom benefits.'],['De una hipótesis a un motor infinito','de beneficios personalizables.']],
    p:['A low-code system that lets companies set up their own benefits, with **launches in days instead of months**.','Un sistema low-code que permite a las empresas configurar sus propios beneficios, con **lanzamientos en días en lugar de meses**.'],
    why:['See how I turned the need for custom benefits into a modular system that made it possible to launch new offers in days, validate demand and scale them without rebuilding each one from scratch.','Encontrarás cómo transformé la necesidad de crear beneficios a medida en un sistema modular que permitía lanzar nuevas propuestas en días, validar su demanda y ampliarlas sin reconstruir cada una desde cero.']},
  banners:{kick:['Partner banners','Banners de partners'], m:'1 → 72', ml:['banner options per partner, in one ZIP','opciones de banner por partner, en un ZIP'],
    eb:['A designer who builds','Una diseñadora que construye'], h:[['A banner tool I designed','and built on my own with AI.'],['Una herramienta de banners','que diseñé y construí sola con IA.']],
    p:['A tool I designed and built on my own with AI: **from 1 to 72 banner options per partner**, exported in one ZIP.','Una herramienta que diseñé y construí sola con IA: **de 1 a 72 opciones de banner por partner**, exportadas en un ZIP.'],
    why:['See how I went from idea to a tool the CRM team opens from a link, so they stopped exporting banners one PNG at a time.','Encontrarás cómo pasé de la idea a una herramienta que el equipo de CRM abre desde un enlace, y dejaron de exportar banners de uno en uno.']},
  playtomic:{kick:['Social community','Comunidad social'], m:'910K', ml:['posts in the first six months','posts en los seis primeros meses'],
    eb:['From bookings to community','De reservas a comunidad'], h:[['A booking app','that became a community.'],['Una app de reservas','que se convirtió en comunidad.']],
    p:['The first social network for racket sports, with feed, profiles and shared match results: **910K posts in its first six months**.','La primera red social de deportes de raqueta, con feed, perfiles y resultados compartidos: **910K posts en sus seis primeros meses**.'],
    why:['See how we turned a booking app into the first social network for racket sports, tested first with 7,000 players, then 910K posts in six months.','Encontrarás cómo convertimos una app de reservas en la primera red social de deportes de raqueta: probada primero con 7.000 jugadores, y luego 910K posts en seis meses.']}
};
