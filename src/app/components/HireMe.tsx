"use client";

import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

export default function HireMeCard() {
  const [email, setEmail] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Project Inquiry – UI/UX Design & Development"
    );
    const body = encodeURIComponent(
      `Hi Prabhanshu,\n\nI came across your portfolio and I’m interested in working with you.\nPlease get in touch with me.\n\nThanks,\n${email}`
    );

    window.location.href = `mailto:prabhanshuxarma@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-start gap-3 mb-4">
        <FaRegEnvelope className="text-xl mt-1 text-gray-500" />
        <div>
          <h3 className="font-semibold text-sm">Let&apos;s Work Together</h3>
          <p className="text-sm text-gray-600 mt-1">
            Want to start a project? Leave your email and I’ll get back to you
            soon.
          </p>
        </div>
      </div>

      <form onSubmit={handleSend} className="flex flex-col gap-3">
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"/>
        <textarea disabled rows={4} className="text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-3" defaultValue={`Hi Prabhanshu, I came across your portfolio and I’m interested in working with you. Please get in touch with me. Thanks.`}/>
        <button type="submit" className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800"> Send Email</button>
      </form>
    </div>
  );
}
