import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { sendContact } from "../api/portfolioApi";
import { Button } from "../components/Button";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      await sendContact(form);
      toast.success("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <Helmet>
        <title>Contact | Sanjay Purty</title>
      </Helmet>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="card space-y-4 p-6">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full rounded-xl bg-black/5 p-3 dark:bg-white/5" />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full rounded-xl bg-black/5 p-3 dark:bg-white/5" />
            <textarea name="message" value={form.message} onChange={onChange} rows="6" placeholder="Message" className="w-full rounded-xl bg-black/5 p-3 dark:bg-white/5" />
            <Button type="submit" disabled={sending}>{sending ? "Sending..." : "Submit"}</Button>
          </form>

          <div className="card space-y-4 p-6">
            <h3 className="text-xl font-semibold">Direct Contact</h3>
            <a
              href="mailto:rpurty582@gmail.com"
              className="flex items-center gap-3 rounded-xl bg-black/5 p-4 text-slate-700 transition hover:bg-black/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <span>Email: rpurty582@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-purty"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-black/5 p-4 text-slate-700 transition hover:bg-black/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <span>LinkedIn: Sanjay Purty</span>
            </a>
            <a
              href="https://github.com/sanjay-purty"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-black/5 p-4 text-slate-700 transition hover:bg-black/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <span>GitHub: Sanjay Purty</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
