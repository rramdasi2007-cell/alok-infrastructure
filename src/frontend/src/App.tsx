import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdminDashboard from "./components/AdminDashboard";
import ClientsSection from "./components/ClientsSection";
import Contact from "./components/Contact";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import QuoteModal from "./components/QuoteModal";
import ServiceDetail from "./components/ServiceDetail";
import ServicesCards from "./components/ServicesCards";
import StatsBar from "./components/StatsBar";

const queryClient = new QueryClient();

export type ActiveSection =
  | "home"
  | "peb"
  | "steel"
  | "civil"
  | "about"
  | "contact"
  | "admin";

const SERVICE_LINKS: { label: string; section: ActiveSection }[] = [
  { label: "PEB Structures", section: "peb" },
  { label: "Steel Fabrication", section: "steel" },
  { label: "Civil Works & RCC", section: "civil" },
  { label: "About Us", section: "about" },
  { label: "Contact Us", section: "contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");
  const [adminToken, setAdminToken] = useState<string>(
    () => localStorage.getItem("adminToken") ?? "",
  );
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navigateTo = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoginSuccess = (token: string) => {
    setAdminToken(token);
    setActiveSection("admin");
  };

  const handleLogout = () => {
    setAdminToken("");
    setActiveSection("home");
  };

  if (activeSection === "admin") {
    return (
      <QueryClientProvider client={queryClient}>
        {adminToken ? (
          <AdminDashboard token={adminToken} onLogout={handleLogout} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-white">
        <Navbar
          activeSection={activeSection}
          navigateTo={navigateTo}
          isAdminLoggedIn={!!adminToken}
          onOpenQuote={() => setQuoteOpen(true)}
        />

        <main>
          {activeSection === "home" && (
            <>
              <Hero
                navigateTo={navigateTo}
                onOpenQuote={() => setQuoteOpen(true)}
              />
              <ServicesCards navigateTo={navigateTo} />
              <StatsBar />
              <ClientsSection />
            </>
          )}
          {activeSection === "about" && (
            <AboutContent navigateTo={navigateTo} />
          )}
          {(activeSection === "peb" ||
            activeSection === "steel" ||
            activeSection === "civil") && (
            <ServicePageLayout
              activeSection={activeSection}
              navigateTo={navigateTo}
            />
          )}
          {activeSection === "contact" && (
            <div className="max-w-7xl mx-auto px-4 py-8">
              <Contact />
            </div>
          )}
        </main>
        <Footer navigateTo={navigateTo} />
      </div>
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}

function SidebarNav({
  activeSection,
  navigateTo,
}: { activeSection: ActiveSection; navigateTo: (s: ActiveSection) => void }) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-navy text-white">
        <div className="bg-brand-orange px-4 py-3">
          <h3 className="font-bold text-white text-lg">Our Services</h3>
        </div>
        <ul>
          {SERVICE_LINKS.map((link) => (
            <li key={link.section}>
              <button
                type="button"
                data-ocid={`sidebar.${link.section}.link`}
                onClick={() => navigateTo(link.section)}
                className={`w-full text-left px-4 py-3 text-sm border-b border-navy-light transition-colors flex items-center gap-2 ${
                  activeSection === link.section
                    ? "bg-brand-orange text-white"
                    : "text-gray-200 hover:bg-brand-orange hover:text-white"
                }`}
              >
                <span className="text-brand-orange">›</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 bg-navy text-white p-4">
        <h4 className="font-semibold text-brand-orange mb-2">Quick Contact</h4>
        <p className="text-sm text-gray-300 mb-1">📞 +91 8208118583</p>
        <p className="text-sm text-gray-300 mb-1">📞 +91 8856940369</p>
        <p className="text-sm text-gray-300">✉ alokinfra@gmail.com</p>
      </div>
    </aside>
  );
}

function ServicePageLayout({
  activeSection,
  navigateTo,
}: {
  activeSection: ActiveSection;
  navigateTo: (s: ActiveSection) => void;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <SidebarNav activeSection={activeSection} navigateTo={navigateTo} />
        <div className="flex-1">
          <ServiceDetail service={activeSection as "peb" | "steel" | "civil"} />
        </div>
      </div>
    </div>
  );
}

function AboutContent({
  navigateTo,
}: { navigateTo: (s: ActiveSection) => void }) {
  const whyUs = [
    "Expert team with deep domain knowledge in industrial construction",
    "End-to-end turnkey project execution capabilities",
    "Strict quality control and safety compliance",
    "Timely delivery and cost-effective solutions",
    "Strong portfolio with prestigious industrial clients",
    "ISO-compliant manufacturing processes",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <SidebarNav activeSection="about" navigateTo={navigateTo} />
        <div className="flex-1">
          <div className="border border-gray-200">
            <div className="bg-navy px-4 py-3">
              <h2 className="text-xl font-bold text-white">
                About Alok Infrastructure
              </h2>
            </div>
            <div className="p-6 text-gray-700 space-y-4 text-sm leading-relaxed">
              <p>
                Alok Infrastructure is a leading Pre-Engineered Building and
                Infrastructure company based in Waluj MIDC, Chhatrapati
                Sambhajinagar (Aurangabad), Maharashtra. We specialize in
                delivering high-quality construction and fabrication solutions
                tailored to industrial needs.
              </p>
              <p>
                With years of experience in the field, we have successfully
                delivered projects for renowned clients including Cosmo Films
                Ltd., Suraj Blow Plast Pvt Ltd, Sangkaj Steel Ltd., Phoenix
                Engineering, Mayur Engineering and Automation, Varad Automation
                &amp; Robotics Pvt Ltd, and Focus Robotomation Pvt Ltd.
              </p>
              <p>
                Under the leadership of Director <strong>Datta Rajguru</strong>,
                our team of skilled engineers and technicians is committed to
                delivering projects on time, within budget, and to the highest
                quality standards.
              </p>
              <h3 className="font-bold text-navy text-base mt-4">
                Why Choose Us?
              </h3>
              <ul className="list-none space-y-2">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-orange font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
