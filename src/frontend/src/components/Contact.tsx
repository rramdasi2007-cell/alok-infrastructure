import { Clock, Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918208118583",
    hoverColor: "hover:bg-[#1ebe5d]",
    bg: "bg-[#25D366]",
    icon: (
      <svg
        role="img"
        aria-label="WhatsApp"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    hoverColor: "hover:bg-[#cc0000]",
    bg: "bg-[#FF0000]",
    icon: (
      <svg
        role="img"
        aria-label="YouTube"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    hoverColor: "hover:opacity-90",
    bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    icon: (
      <svg
        role="img"
        aria-label="Instagram"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    hoverColor: "hover:bg-[#0d65d9]",
    bg: "bg-[#1877F2]",
    icon: (
      <svg
        role="img"
        aria-label="Facebook"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      {/* Hero Banner Strip */}
      <div className="relative bg-gradient-to-r from-navy via-[#0f2645] to-navy overflow-hidden rounded-md mb-8 px-6 py-8">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.04) 20px, rgba(255,255,255,0.04) 40px)",
          }}
        />
        <div className="relative z-10">
          <p className="text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">
            Contact Alok Infrastructure
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            We&rsquo;d love to hear from you.{" "}
            <span className="relative inline-block">
              Let&rsquo;s build something great together.
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-brand-orange rounded-full" />
            </span>
          </h2>
          <p className="text-gray-300 text-sm mt-3 max-w-xl">
            Reach out for project inquiries, site visits, or any information
            about our fabrication and civil construction services.
          </p>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="bg-navy rounded-md p-8 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Address */}
        <div className="flex gap-3 items-start">
          <div className="w-9 h-9 bg-brand-orange/20 border border-brand-orange/40 rounded flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wide">
              Address
            </p>
            <p className="text-gray-300 text-sm mt-0.5 leading-relaxed">
              Sai Udyog Nagari, Waluj MIDC,
              <br />
              Chhatrapati Sambhajinagar,
              <br />
              Maharashtra
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-3 items-start">
          <div className="w-9 h-9 bg-brand-orange/20 border border-brand-orange/40 rounded flex items-center justify-center flex-shrink-0">
            <Phone className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wide">
              Phone
            </p>
            <a
              href="tel:+918208118583"
              className="text-gray-300 text-sm hover:text-brand-orange transition-colors block mt-0.5"
            >
              +91 8208118583
            </a>
            <a
              href="tel:+918856940369"
              className="text-gray-300 text-sm hover:text-brand-orange transition-colors block"
            >
              +91 8856940369
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-3 items-start">
          <div className="w-9 h-9 bg-brand-orange/20 border border-brand-orange/40 rounded flex items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wide">
              Email
            </p>
            <a
              href="mailto:alokinfra@gmail.com"
              className="text-gray-300 text-sm hover:text-brand-orange transition-colors mt-0.5 block"
            >
              alokinfra@gmail.com
            </a>
          </div>
        </div>

        {/* Director */}
        <div className="flex gap-3 items-start">
          <div className="w-9 h-9 bg-brand-orange/20 border border-brand-orange/40 rounded flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wide">
              Director
            </p>
            <p className="text-gray-300 text-sm mt-0.5">Datta Rajguru</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex gap-3 items-start">
          <div className="w-9 h-9 bg-brand-orange/20 border border-brand-orange/40 rounded flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-brand-orange" />
          </div>
          <div>
            <p className="font-semibold text-sm text-white/80 uppercase tracking-wide">
              Business Hours
            </p>
            <p className="text-gray-300 text-sm mt-0.5">
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
            <p className="text-gray-400 text-sm">Sunday: Closed</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex items-center">
          <a
            href="https://wa.me/918208118583"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors text-white text-sm font-semibold px-6 py-2.5 rounded justify-center w-full"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 bg-white/5 border border-white/10 rounded-md p-6">
        <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4 text-center">
          Follow Us
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${s.bg} ${s.hoverColor} transition-opacity text-white text-sm font-semibold px-5 py-2.5 rounded`}
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
