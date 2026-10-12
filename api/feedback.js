// Vercel serverless function: POST /api/feedback
// Saves each feedback in the Notion database "Feedback del portfolio" and emails Blanca.
// Environment variables (Vercel > Project > Settings > Environment Variables):
//   NOTION_TOKEN        Internal integration secret (the database must be shared with the integration)
//   NOTION_DATABASE_ID  d2d2c8acb0ee4e28bf873f3ed5510939
//   RESEND_API_KEY      (optional) to send the email notification through Resend
//   FEEDBACK_TO         (optional) address that receives the email
//   FEEDBACK_FROM       (optional) verified sender, defaults to Resend's test sender

const clean = (v, max) => String(v || '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};
  if (body.website) return res.status(200).json({ ok: true }); // honeypot: silently ignore bots

  const rating = body.rating === 'Negativo' ? 'Negativo' : 'Positivo';
  const name = clean(body.name, 60) || 'Anónimo';
  const comment = clean(body.comment, 1500);
  const date = new Date().toISOString();
  const extra = [body.lang && `Idioma: ${clean(body.lang, 5)}`, body.focus && `Interés: ${clean(body.focus, 20)}`].filter(Boolean).join(' · ');

  const notion = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        'Usuario': { title: [{ text: { content: name } }] },
        'Fecha': { date: { start: date } },
        'Valoración': { select: { name: rating } },
        'Comentario': { rich_text: comment ? [{ text: { content: comment } }] : [] },
      },
      children: extra ? [{ object: 'block', type: 'paragraph', paragraph: { rich_text: [{ text: { content: extra } }] } }] : [],
    }),
  });
  if (!notion.ok) {
    console.error('Notion error', notion.status, await notion.text());
    return res.status(502).json({ ok: false });
  }

  if (process.env.RESEND_API_KEY && process.env.FEEDBACK_TO) {
    const icon = rating === 'Positivo' ? '👍' : '👎';
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.FEEDBACK_FROM || 'Portfolio <onboarding@resend.dev>',
        to: [process.env.FEEDBACK_TO],
        subject: `${icon} Nuevo feedback del portfolio · ${name}`,
        text: `${icon} ${rating}\nDe: ${name}\nFecha: ${date}\n${extra ? extra + '\n' : ''}\n${comment || '(sin comentario)'}`,
      }),
    }).catch(err => console.error('Email error', err));
  }

  return res.status(200).json({ ok: true });
}
