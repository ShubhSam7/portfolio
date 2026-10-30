"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle, Send } from "lucide-react";
import { composeContactDraft, contactEmail } from "@/lib/portfolio";

const emailConfig = {
  service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};
const deliveryConfigured = Boolean(emailConfig.service && emailConfig.template && emailConfig.key);

export function MessageBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "draft" | "error">("idle");
  const draftUrl = composeContactDraft(name, email, message);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) {
      event.currentTarget.querySelector("textarea")?.focus();
      return;
    }
    if (!deliveryConfigured) {
      window.location.href = draftUrl;
      setStatus("draft");
      return;
    }
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(emailConfig.service!, emailConfig.template!, {
        from_name: name.trim() || "Portfolio visitor",
        reply_to: email.trim(),
        subject: `A hello from ${name.trim() || "your portfolio"}`,
        message: message.trim(),
        to_email: contactEmail,
      }, { publicKey: emailConfig.key! });
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="message-form" onSubmit={submit}>
      <div className="message-form-heading"><span>A LITTLE NOTE GOES A LONG WAY</span><h3>What’s on your mind?</h3></div>
      <div className="message-fields">
        <div><label htmlFor="sender-name">Your name <span>(optional)</span></label><input id="sender-name" name="name" autoComplete="name" placeholder="What should I call you?" value={name} onChange={event => setName(event.target.value)} maxLength={100} disabled={status === "sending"} /></div>
        <div><label htmlFor="sender-email">Your email {!deliveryConfigured && <span>(optional)</span>}</label><input id="sender-email" name="email" type="email" autoComplete="email" placeholder="So I can say hello back" value={email} onChange={event => setEmail(event.target.value)} required={deliveryConfigured} maxLength={254} disabled={status === "sending"} /></div>
      </div>
      <label htmlFor="sender-message">Your thought, idea, or hello</label>
      <textarea id="sender-message" name="message" placeholder="Hey Shubh, I was thinking…" rows={5} value={message} onChange={event => { setMessage(event.target.value); if (status !== "sending") setStatus("idle"); }} required maxLength={4000} disabled={status === "sending"} />
      <div className="message-submit-row">
        <p>{deliveryConfigured ? "Straight to my inbox. I’ll reply to the email you leave." : "Opens your email app with this note ready to send."}</p>
        <button className="hello-button" type="submit" disabled={status === "sending" || !message.trim()}>
          {status === "sending" ? <><LoaderCircle className="spinner" size={16} /> Sending…</> : deliveryConfigured ? <>Send message <Send size={16} /></> : <>Continue in email <ArrowUpRight size={16} /></>}
        </button>
      </div>
      <div className="message-status" role="status">
        {status === "sent" && <p><Check size={16} /> Your note’s in my inbox. Thanks for saying hello!</p>}
        {status === "draft" && <p>Your email draft is ready. If nothing opened, <a href={draftUrl}>try opening it again</a> or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>}
        {status === "error" && <p>That didn’t go through. Your note is still here—<a href={draftUrl}>send it through your email app</a> instead.</p>}
      </div>
    </form>
  );
}
