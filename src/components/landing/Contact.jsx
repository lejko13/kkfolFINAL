import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import SectionLabel from './SectionLabel';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    toast.success(t.contact.success);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setSending(false);
  };

  const inputStyle = {
    background: 'rgba(38,39,44,0.8)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#fff',
    borderRadius: '12px',
  };

  const focusStyle = 'focus:outline-none focus:ring-1 focus:ring-[#CC0100] focus:border-[#CC0100]';

  return (
    <section id="contact" className="relative py-24 lg:py-32" style={{ background: '#26272C' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(204,1,0,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label={t.contact.badge}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-6 sm:p-8 lg:p-10 space-y-5"
              style={{ background: 'rgba(26,27,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.contact.name}
                  </label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className={`w-full h-12 px-4 text-sm placeholder-white/20 ${focusStyle} transition-all`}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    required
                    className={`w-full h-12 px-4 text-sm placeholder-white/20 ${focusStyle} transition-all`}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.contact.phone}
                  </label>
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder={t.contact.phonePlaceholder}
                    className={`w-full h-12 px-4 text-sm placeholder-white/20 ${focusStyle} transition-all`}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.contact.service}
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className={`w-full h-12 px-4 text-sm ${focusStyle} transition-all appearance-none`}
                    style={{ ...inputStyle, color: form.service ? '#fff' : 'rgba(255,255,255,0.2)' }}
                  >
                    <option value="" disabled style={{ color: '#888' }}>{t.contact.servicePlaceholder}</option>
                    {t.contact.services.map(s => (
                      <option key={s.value} value={s.value} style={{ background: '#26272C', color: '#fff' }}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {t.contact.message}
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className={`w-full px-4 py-3 text-sm placeholder-white/20 ${focusStyle} transition-all resize-none`}
                  style={inputStyle}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full h-14 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(204,1,0,0.4), 0 8px 24px rgba(204,1,0,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
                style={{ background: '#CC0100' }}
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {t.contact.send}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {([
              {
                Icon: Phone,
                title: t.contact.callUs,
                content: (
                  <>
                    <a href="tel:+421919032522" className="text-sm hover:text-[#CC0100] transition-colors block" style={{ color: 'rgba(255,255,255,0.5)' }}>+421 919 032 522</a>
                    <a href="tel:+421919032523" className="text-sm hover:text-[#CC0100] transition-colors block mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>+421 919 032 523</a>
                  </>
                ),
              },
              {
                Icon: Mail,
                title: t.contact.writeUs,
                content: (
                  <>
                    <a href="mailto:info@kkfol.sk" className="text-sm hover:text-[#CC0100] transition-colors block" style={{ color: 'rgba(255,255,255,0.5)' }}>info@kkfol.sk</a>
                    <a href="mailto:grafik@kkfol.sk" className="text-sm hover:text-[#CC0100] transition-colors block mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>grafik@kkfol.sk</a>
                  </>
                ),
              },
              {
                Icon: MapPin,
                title: t.contact.visitUs,
                content: (
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Nižná brána 27<br />060 01 Kežmarok
                  </p>
                ),
              },
            ]).map(({ Icon, title, content }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: 'rgba(26,27,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(204,1,0,0.1)' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#CC0100' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{title}</div>
                  {content}
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/421919032522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'rgba(37, 211, 102, 0.06)',
                border: '1px solid rgba(37, 211, 102, 0.15)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(37, 211, 102, 0.12)' }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: '#25D366' }} />
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-0.5">WhatsApp</div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.contact.whatsapp}</span>
              </div>
            </a>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{ minHeight: '180px', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.0!2d20.4287!3d49.1355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKe%C5%BEmarok!5e0!3m2!1ssk!2ssk!4v1700000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '180px',
                  filter: 'invert(90%) hue-rotate(180deg) saturate(0.2) brightness(0.85)',
                }}
                allowFullScreen=""
                loading="lazy"
                title="KKFOL"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}