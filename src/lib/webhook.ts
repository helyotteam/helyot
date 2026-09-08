export interface LeadPayload {
  type: 'contact' | 'booking' | 'career' | 'calculator';
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  service?: string;
  date?: string;
  time?: string;
  jobId?: string;
  estimate?: string;
  source?: string;
}

export async function sendLead(payload: LeadPayload): Promise<boolean> {
  try {
    const res = await fetch('/.netlify/functions/send-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
