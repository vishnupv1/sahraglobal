"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Placeholder: here you can POST to an API route or service
    console.log("Contact form submitted", data);
    setStatus("Thanks! We'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="mx-auto w-full px-3 pt-14 pb-0 sm:px-4 lg:px-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold sm:text-4xl">Contact Us</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 max-w-3xl text-muted-foreground">
        Reach out for a consultation. Our office is based in Dubai, UAE.
      </motion.p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
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
              <Button type="submit" className="w-full">Submit</Button>
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
                Dubai, United Arab Emirates
                <br />
                Phone: +971-XXX-XXXX
                <br />
                Email: info@sahraglobal.ae
              </div>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
                <iframe
                  title="Starway Link Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115852.28787808252!2d55.0746772!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4346f3be9f0d%3A0x9f3f4f0f9f9f0f0f!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


