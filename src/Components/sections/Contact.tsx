
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaSpinner } from 'react-icons/fa';

// Validation Schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    
    // Simulate API call (or connect to EmailJS / Formspree here)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Submitted Data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          GET IN <span className="text-[#ff0055]">TOUCH</span>
        </motion.h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Have an opportunity, a question, or a project in mind? Let's connect and discuss.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Direct Contact Cards (2 cols on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-[#12131a] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black text-white mb-2">Let's Connect</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              I am actively seeking frontend / web developer roles. Feel free to reach out via email or connect on social platforms.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a 
                href="mailto:hosenuzzaman2018@gmail.com" 
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#08080a] border border-slate-800/80 hover:border-[#ff0055]/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-[#ff0055]/10 text-[#ff0055] group-hover:bg-[#ff0055] group-hover:text-white transition-colors">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white truncate">
                    hosenuzzaman2018@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href="https://linkedin.com/in/hosenuzzaman" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#08080a] border border-slate-800/80 hover:border-sky-500/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <FaLinkedin className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                    linkedin.com/in/hosenuzzaman
                  </p>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/shawon2911" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-[#08080a] border border-slate-800/80 hover:border-slate-500/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-slate-800 text-slate-200 group-hover:bg-white group-hover:text-black transition-colors">
                  <FaGithub className="text-lg" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">GitHub Code Repos</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                    github.com/shawon2911
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Form (3 cols on desktop) */}
        <div className="lg:col-span-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#12131a] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
          >
            {/* Success Overlay Banner */}
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm"
              >
                <FaCheckCircle className="text-xl shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="John Doe"
                    className={`w-full bg-[#08080a] border ${
                      errors.name ? 'border-red-500' : 'border-slate-800'
                    } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full bg-[#08080a] border ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[11px] mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Job Opportunity / Project Inquiry"
                  className={`w-full bg-[#08080a] border ${
                    errors.subject ? 'border-red-500' : 'border-slate-800'
                  } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Hi, I saw your portfolio and would love to discuss an opportunity..."
                  className={`w-full bg-[#08080a] border ${
                    errors.message ? 'border-red-500' : 'border-slate-800'
                  } rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#ff0055] transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[11px] mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#ff0055] hover:bg-[#e0004c] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(255,0,85,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
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
        </div>

      </div>

    </section>
  );
}