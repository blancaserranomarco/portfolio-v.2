// Vercel serverless function: POST /api/event
// Anonymous count of which "Ask me" question is opened in each case. No cookies, no personal data.
// Saves one row in the Notion database "Preguntas más abiertas" (inside "Porfolio, feedback").
// Uses the same NOTION_TOKEN as /api/feedback. NOTION_EVENTS_DB can override the database id.

const DB = process.env.NOTION_EVENTS_DB || '2b566a648dd040988a09b9a8a99ada49';
const CASES = {
  taxdown: 'TaxDown · Conversión B2B', banners: 'TaxDown · Banners', discount: 'Cobee · Descuentos',
  benefits: 'Cobee · Beneficios', renewals: 'Cobee · Renovaciones', health: 'Cobee · Salud', playtomic: 'Playtomic · Social',
};
const QUESTIONS = {
  impact: 'Impacto en negocio', role: 'Mi papel', discarded: 'Qué descarté',
  wrong: 'Qué salió mal', learned: 'Qué aprendí', different: 'Qué haría distinto', inspired: 'En qué me inspiré',
};
const FOCUS = { all: 'Todo', growth: 'Growth', systems: 'Sistemas', build: 'Construir desde cero' };

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};
  const caso = CASES[body.c], pregunta = QUESTIONS[body.q];
  if (!caso || !pregunta) return res.status(400).json({ ok: false }); // only known values are stored
  const idioma = body.lang === 'en' ? 'EN' : 'ES';
  const foco = FOCUS[body.focus] || 'Todo';

  const r = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.NOTION_TOKEN}`, 'Notion-Version': '2022-06-28', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      parent: { database_id: DB },
      properties: {
        'Evento': { title: [{ text: { content: `${caso} · ${pregunta}` } }] },
        'Caso': { select: { name: caso } },
        'Pregunta': { select: { name: pregunta } },
        'Idioma': { select: { name: idioma } },
        'Foco': { select: { name: foco } },
        'Fecha': { date: { start: new Date().toISOString() } },
      },
    }),
  });
  if (!r.ok) { console.error('Notion error', r.status, await r.text()); return res.status(502).json({ ok: false }); }
  return res.status(200).json({ ok: true });
}
