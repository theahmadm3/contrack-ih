import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SocialLinks from '../components/SocialLinks.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Aisha Bello' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'aisha@company.com' },
  { name: 'business', label: 'Business', type: 'text', placeholder: 'Acme Corp.' },
];

const SERVICES = [
  'Software Development',
  'SaaS Platform',
  'Cybersecurity & Audits',
  'IT Consultancy',
  'Training & Mentorship',
  'Co-Development',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    service: SERVICES[0],
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your backend / form service (Formspree, Resend, etc.)
    console.log('Form submitted:', form);
    alert('Thanks — we will be in touch within one business day.');
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="mono-font text-[11px] tracking-[0.2em] text-navy-pale uppercase">
              [ 06 / Get In Touch ]
            </span>
            <h2 className="display-font font-light text-5xl lg:text-8xl leading-[0.92] tracking-tight mt-6 mb-10">
              Let's build secure tech, <span className="italic text-navy-pale">together</span>.
            </h2>
            <p className="text-lg text-navy-pale/85 leading-relaxed max-w-xl mb-10">
              Tell us where you're stuck. We'll respond within one business day with next steps —
              and an honest read on whether we're the right fit.
            </p>
            <div className="space-y-4 mono-font text-sm">
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">EMAIL</span>
                <span>hello@contrack-ih.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">WHATSAPP</span>
                <span>+234 (0) ··· ····</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-navy-pale/60 text-[10px] tracking-wider w-16">LOCATION</span>
                <span>Abuja, Nigeria — Remote-first</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 pt-10 border-t border-white/10">
              <span className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase block mb-4">
                Or follow along
              </span>
              <SocialLinks variant="compact" tone="light" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-5">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/40"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="service"
                  className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none text-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s} className="bg-navy">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mono-font text-[10px] tracking-[0.2em] text-navy-pale/70 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about the project..."
                  className="w-full bg-transparent border-b border-white/30 py-3 focus:border-white outline-none transition-colors text-white placeholder:text-white/40 resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-navy py-4 text-sm font-semibold tracking-wider mt-6 flex items-center justify-center gap-3 hover:bg-navy-pale transition-colors"
              >
                SEND ENQUIRY <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
