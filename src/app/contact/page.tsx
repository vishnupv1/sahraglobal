"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");

    const serviceId = "service_dhba1xo";
    // Use explicit template id if env is not provided
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_f2cdjyd";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "-Wd7j_Rriar5kDGol";

    if (!templateId || !publicKey) {
      setStatus("Email service not configured. Please set EmailJS keys.");
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Variables to match your EmailJS template fields
          title: "New Inquiry",
          name,
          email,
          message,
          // Additional helpful fields
          from_name: name,
          from_email: email,
          phone,
          to_email: "admin@starwaylinkservices.com",
          subject: `New contact inquiry from ${name}`,
        },
        { publicKey }
      );
      setStatus("Thanks! We'll get back to you soon.");
      form.reset();
    } catch (err) {
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full px-3 pt-14 sm:pt-16 pb-0 sm:px-4 lg:px-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold sm:text-4xl">Contact Us</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 max-w-3xl text-muted-foreground">
        Reach out for a consultation. Our office is based in Dubai, UAE.
      </motion.p>

      <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2">
        <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Your name" required />
                <Input type="email" name="email" placeholder="Email" required />
              </div>
              <Input name="phone" placeholder="Phone (optional)" />
              <Textarea name="message" placeholder="How can we help?" rows={5} required />
              <Button type="submit" className="w-full" disabled={submitting}>{submitting ? "Sending..." : "Submit"}</Button>
              {status && <p className="text-sm text-green-600">{status}</p>}
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle>Our Office</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-4">
              <div>
                Sharjah Media City (Shams Free Zone)
                <br />
                Business park in Al Bataeh, United Arab Emirates
                <br />
                Phone: +971-XXX-XXXX
                <br />
                Email: admin@starwaylinkservices.com
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
                {/* <iframe
                  title="Starway Link Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.7818438207565!2d55.67872479069089!3d25.278288311314654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5929a229f1c75%3A0xb28ae30eb6bb813a!2sSharjah%20Media%20City%20(Shams%20Free%20Zone)!5e0!3m2!1sen!2sin!4v1758775639700!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                /> */}
                <iframe
                  title="Starwaylink Services LLC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.7818438207565!2d55.67872479069089!3d25.278288311314654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5929a229f1c75%3A0xb28ae30eb6bb813a!2sSharjah%20Media%20City%20(Shams%20Free%20Zone)!5e0!3m2!1sen!2sin!4v1758775639700!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  className="h-full w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


