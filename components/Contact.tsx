"use client";
import { FormEvent, useState } from "react";

const EMAIL = "ashenwi910@gmail.com";

export default function Contact() {
  const [note, setNote] = useState("Opens your email app with the message pre-filled.");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name")), email = String(f.get("email")), msg = String(f.get("message"));
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${email})`)}`;
    setNote("Thanks! Your email app should open now.");
  }

  return (
    <section id="contact">
      <div className="w">
        <div className="card ct" style={{ transform: "none" }}>
          <div>
            <span className="ey">// contact</span>
            <h2>Let&apos;s Build Something Together.</h2>
            <p className="sub" style={{ margin: "14px 0 0" }}>Have a project, opportunity, or idea? I&apos;d love to hear about it.</p>
            <div className="cl">
              <a href={`mailto:${EMAIL}`}><b>Email</b>{EMAIL}</a>
              <a href="tel:+94702313088"><b>Phone</b>+94 70 231 3088</a>
              <div><b>Location</b>Colombo, Sri Lanka</div>
              <a href="https://github.com/ashen910" target="_blank" rel="noopener noreferrer"><b>GitHub</b>github.com/ashen910</a>
              <a href="https://linkedin.com/in/ashenwijenayake910/" target="_blank" rel="noopener noreferrer"><b>LinkedIn</b>linkedin.com/in/ashenwijenayake910</a>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Name" required />
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Email" required />
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" required />
            <button className="btn p mag" type="submit">Send Message</button>
            <small style={{ color: "var(--mu)" }}>{note}</small>
          </form>
        </div>
      </div>
    </section>
  );
}
