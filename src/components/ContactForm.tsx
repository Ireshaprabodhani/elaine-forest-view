"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { contactPage, whatsappLink } from "@/data/site";

export default function ContactForm() {
  const topics = contactPage.enquiryTopics.length ? contactPage.enquiryTopics : ["General"];
  const [form, setForm] = useState({ name: "", phone: "", topic: topics[0], date: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello Elaine Forest View, I have an enquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `About: ${form.topic}`,
      form.date && `Date: ${form.date}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const field = "w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15";
  const label = "mb-1.5 block text-[13px] font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-sand bg-white p-6 lg:p-8">
      <h2 className="font-display text-[24px] font-semibold">{contactPage.formTitle}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" required value={form.name} onChange={set("name")} className={field} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone number</label>
          <input id="phone" type="tel" required value={form.phone} onChange={set("phone")} className={field} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="topic" className={label}>Enquiry about</label>
          <select id="topic" value={form.topic} onChange={set("topic")} className={field}>
            {topics.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>Date</label>
          <input id="date" type="date" value={form.date} onChange={set("date")} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Message</label>
          <textarea id="message" rows={4} value={form.message} onChange={set("message")} className={field} />
        </div>
      </div>
      <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-[22px] py-[14px] text-[15px] font-semibold text-white hover:bg-maroon-dark">
        <WhatsAppIcon /> Send enquiry
      </button>
      <p className="mt-3 text-center text-[13px] text-muted">{contactPage.formNote}</p>
    </form>
  );
}
