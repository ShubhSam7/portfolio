"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfoCard = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: "E-MAIL",
      value: "hello@shubh.dev",
      href: "mailto:hello@shubh.dev",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "ADDRESS",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative h-full"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-50" />

      {/* Main Card */}
      <div className="relative h-full bg-indigo-900/30 backdrop-blur-xl border-2 border-violet-500/40 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-violet-500/20 overflow-hidden">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

        {/* Content */}
        <div className="relative z-10 space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-grotesk"
            >
              Let's start a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                conversation
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 font-inter leading-relaxed"
            >
              Whether you have a project in mind or just want to chat about
              technology, I'm always open to new opportunities and
              collaborations.
            </motion.p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 pt-4">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                {/* Label */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wider">
                  <detail.icon className="w-4 h-4" />
                  {detail.label}
                </div>

                {/* Value */}
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="block text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all duration-300 font-inter"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-inter">
                    {detail.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Decorative Gradient Accent */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-violet-500/30 to-transparent rounded-tl-full blur-3xl opacity-40" />
        </div>
      </div>
    </motion.div>
  );
};
