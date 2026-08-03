'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaPhone,
  
  FaArrowUpRightFromSquare,
  FaPaperPlane,
  FaCircleCheck,
  FaSpinner,
  FaTriangleExclamation,
} from 'react-icons/fa6';
import { FaMapMarker } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// EmailJS config — env vars e rakhun (niche .env.local example dewa ache)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setHasError(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setHasError(true);
      setTimeout(() => setHasError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const connectLinks = [
    { label: 'GitHub', href: 'https://github.com/shawon2911', icon: FaGithub, hover: 'hover:border-slate-400/50' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/hosenuzzaman', icon: FaLinkedin, hover: 'hover:border-sky-500/50' },
    
  ];

  const infoCards = [
    { label: 'Email', value: 'hosenuzzaman2018@gmail.com', icon: FaEnvelope, href: 'mailto:hosenuzzaman2018@gmail.com' },
    
    { label: 'Location', value: 'Dhaka, Bangladesh', icon: FaMapMarker, href: undefined },
  ];

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-[#0b0b0f] border border-slate-800/80 rounded-3xl p-8 sm:p-12"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#ff0055]/10 blur-3xl rounded-full" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#ff0055] text-xs font-bold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase mb-4">
              Available For <br /> New Opportunities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Whether you have a backend engineering role, software engineering role, enterprise project or
              collaboration opportunity, I&apos;d be happy to hear from you.
            </p>

            <div className="space-y-4">
              {infoCards.map(({ label, value, icon: Icon, href }) => {
                const CardInner = (
                  <div className="flex items-center gap-4 p-4 mt-2 rounded-2xl bg-[#12131a] border border-slate-800/80 hover:border-[#ff0055]/40 transition-colors duration-300 group">
                    <div className="p-3 rounded-xl bg-[#ff0055]/10 text-[#ff0055] group-hover:bg-[#ff0055] group-hover:text-white transition-colors shrink-0">
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {CardInner}
                  </a>
                ) : (
                  <div key={label}>{CardInner}</div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-[#ff0055] text-xs font-bold tracking-[0.2em] uppercase mb-3">Connect</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {connectLinks.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-[#12131a] border border-slate-800/80 ${hover} transition-colors duration-300`}
                >
                  <span className="p-2 rounded-lg bg-[#ff0055]/10 text-[#ff0055]">
                    <Icon className="text-base" />
                  </span>
                  <span className="text-sm font-semibold text-slate-200">{label}</span>
                </a>
              ))}
            </div>

            <div className="rounded-2xl bg-[#12131a] border border-slate-800/80 p-6 sm:p-8">
              <p className="text-[#ff0055] text-xs font-bold tracking-[0.2em] uppercase mb-3">Ready To Collaborate?</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Let&apos;s build something impactful.</h3>
              <p className="text-slate-400 text-sm mb-6">
                The fastest way to reach me is via email. I usually respond within 24 hours.
              </p>
              <a
                href="mailto:hosenuzzaman2018@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#a80038] hover:bg-[#e0004c] text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(255,0,85,0.3)] transition-all duration-300"
              >
                Email Me <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#12131a] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden max-w-4xl mx-auto"
      >
        <h3 className="text-xl font-black text-white mb-2">Send a Message</h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
          Prefer to write it out? Drop me a message directly and I&apos;ll get back to you.
        </p>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm"
          >
            <FaCircleCheck className="text-xl shrink-0" />
            <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
          </motion.div>
        )}

        {hasError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm"
          >
            <FaTriangleExclamation className="text-xl shrink-0" />
            <span>Something went wrong. Please try again or email me directly.</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Your Name</label>
              <input
                {...register('name')}
                type="text"
                placeholder="Enter Your Name"
                className={`w-full bg-[#08080a] border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
              />
              {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Your Email</label>
              <input
                {...register('email')}
                type="email"
                placeholder="Enter Your Email"
                className={`w-full bg-[#08080a] border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
              />
              {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Subject</label>
            <input
              {...register('subject')}
              type="text"
              placeholder="Job Opportunity / Project Inquiry"
              className={`w-full bg-[#08080a] border ${errors.subject ? 'border-red-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
            />
            {errors.subject && <p className="text-red-400 text-[11px] mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Message</label>
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Hi, I saw your portfolio and would love to discuss an opportunity..."
              className={`w-full bg-[#08080a] border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors resize-none`}
            />
            {errors.message && <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#a80038] hover:bg-[#e0004c] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(255,0,85,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="animate-spin text-base" /> Sending Message...
              </>
            ) : (
              <>
                Send Message <FaPaperPlane className="text-xs" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}