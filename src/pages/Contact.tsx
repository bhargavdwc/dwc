import { useState } from "react";
import FAQ from "../components/home/FAQ";
import DotBackground from "../components/three/DotBackground";
import contactVideo from "../assets/contact-video.mp4";
import contact3dVisual from "../assets/ChatGPT_Image_Jun_25__2026__12_41_38_PM-removebg-preview.png";

const services = [
  "Lead Generation",
  "Lead Calling & Qualifying",
  "Quoting Support",
  "End-to-End Sales Pipeline",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
    setTilt({
      x: ((clientX - left) / width - 0.5) * 16,
      y: ((clientY - top) / height - 0.5) * -16,
    });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("contact-form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      formData.set("name", `${form.firstName} ${form.lastName}`.trim());
      formData.append("access_key", "a825aac6-7cd8-4618-b763-f274d1f0d081");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <main className="bg-black text-white">
      {/* ─── HERO SECTION ─── */}
      <section
        className="relative overflow-hidden bg-black no-splash min-h-screen lg:h-[100vh] flex items-center justify-center pt-28 pb-16 lg:pt-48 lg:pb-24 px-6 md:px-12"
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
      >
        {/* Background Elements */}
        <div className="absolute -top-[10%] -right-[15%] w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-400 rotate-[20deg] rounded-[70px] pointer-events-none z-0 shadow-2xl opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,94,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(13,94,246,0.025)_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none" />
        <DotBackground variant="float" opacity={0.1} />

        {isHovered && (
          <div
            className="absolute w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none z-0 transition-opacity duration-300"
            style={{
              left: `${mousePos.x - 250}px`,
              top: `${mousePos.y - 250}px`,
            }}
          />
        )}

        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan/5 rounded-full blur-[120px] md:blur-[160px] pointer-events-none" />
        <div
          className="absolute bottom-[10%] left-[5%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/6 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse"
          style={{ animationDuration: "8s" }}
        />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* LEFT: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:-mt-10 -mt-5 w-full relative z-20">
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.2em] uppercase text-blue-900 bg-white border border-cyan/25 rounded-full px-5 py-1.5 mb-7 shadow-[0_0_20px_rgba(4,185,202,0.15)] hover:shadow-[0_0_35px_rgba(4,185,202,0.3)] transition-shadow duration-300 cursor-default select-none"
            >
              Limited Onboarding for Solar Season
            </div>

            <h1
              data-aos="fade-up"
              className="font-display font-bold text-[clamp(2.4rem,4.5vw,4rem)] text-white tracking-tighter leading-[1.1] mb-5 max-w-[700px]"
            >
              Stop Chasing Solar Leads. Start{" "}
              <span className="gradient-text">Closing More Deals.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-body text-lg text-zinc-400 leading-relaxed mb-6 max-w-[600px]"
            >
              We help Australian solar companies generate qualified leads and
              turn them into customers — from the first call to the final sale.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex items-center gap-4 mb-10 text-sm font-mono text-zinc-300"
            >
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan" /> 1,300+ Leads in
                July
              </span>
              <span className="text-zinc-600">|</span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan" /> $24 Avg Cost
                Per Lead
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact-form-section"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 bg-brand-gradient text-dark font-display font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(4,185,202,0.3)] hover:shadow-[0_0_40px_rgba(4,185,202,0.55)] hover:-translate-y-0.5 transition-all duration-300 shimmer-btn"
              >
                Book a Strategy Call
                <svg
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: 3D Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative lg:-mt-16 -mt-8 w-full z-10">
            <div className="absolute w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] bg-cyan/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0" />
            <img
              src={contact3dVisual}
              alt="3D Iridescent Contact Visual"
              className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-[460px] xl:max-w-[550px] h-auto object-contain relative z-10 animate-float"
              style={{
                animationDuration: "8s",
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
                filter: isHovered
                  ? "drop-shadow(0 15px 30px rgba(13,94,246,0.3))"
                  : "drop-shadow(0 5px 15px rgba(13,94,246,0.1))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── TRUST / RESULTS SECTION ─── */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Real Campaigns. Real Leads.{" "}
              <span className="text-cyan">Real Sales Opportunities.</span>
            </h2>
            <p className="text-zinc-400">In July, our campaign generated:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "1,300+", label: "Solar Leads" },
              { stat: "$24", label: "Cost Per Lead" },
              { stat: "End-to-End", label: "Sales Support" },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-black/50 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2">
                  {item.stat}
                </div>
                <div className="text-cyan font-mono text-sm tracking-wider uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/70 text-xs mt-8 font-mono">
            * Results shown are from an actual campaign and may vary by
            business, market and campaign conditions.
          </p>
        </div>
      </section>

      {/* ─── THE PROBLEM & SOLUTION ─── */}
      <section className="py-14 relative overflow-hidden">
        {/* Background blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* The Problem */}
          <div data-aos="fade-right">
            <div className="inline-block font-mono text-xs text-rose-400 tracking-widest uppercase mb-4 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              The Problem
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Solar Season Is Here.
              <br />
              Are You Ready?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Solar demand is rising — but generating leads is only half the
              battle. You shouldn't have to:
            </p>
            <ul className="space-y-12 mb-8">
              {[
                "Constantly chase new leads",
                "Spend hours calling prospects",
                "Follow up with unresponsive enquiries",
                "Prepare quotes all day",
                "Let good opportunities go cold",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-4 border-l-2 border-rose-500 bg-rose-500/5 text-rose-200 font-medium">
              Your team should be focused on installations.
            </div>
          </div>

          {/* The Solution */}
          <div data-aos="fade-left">
            <div className="inline-block font-mono text-xs text-cyan tracking-widest uppercase mb-4 bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
              Your Solution
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              We Don't Just Generate Leads.
              <br />
              <span className="text-cyan">We Help You Close Them.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Our team supports your sales pipeline from lead generation to
              conversion.
            </p>

            <div className="space-y-0">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ),
                  title: "Lead Generation",
                  desc: "We build and manage campaigns designed to bring qualified solar enquiries into your pipeline.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  title: "Lead Calling",
                  desc: "We contact new leads and help move genuine prospects forward.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M12 11h4" />
                      <path d="M12 16h4" />
                      <path d="M8 11h.01" />
                      <path d="M8 16h.01" />
                    </svg>
                  ),
                  title: "Quoting",
                  desc: "We support the quotation process and help prospects understand their options.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                    </svg>
                  ),
                  title: "Follow-Up",
                  desc: "We follow up with prospects so potential customers don't simply disappear.",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Sales Support",
                  desc: "We help move qualified opportunities toward a closed deal.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-3 md:p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/10 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-0.5 md:mb-1 text-base md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-snug md:leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-8 bg-black border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              One Team. One Pipeline.
              <br />
              More Opportunities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-y-1/2 z-0" />

            {[
              {
                step: "01",
                title: "Generate",
                desc: "We run targeted campaigns to bring solar enquiries into your business.",
              },
              {
                step: "02",
                title: "Qualify",
                desc: "Leads are contacted and genuine opportunities are identified.",
              },
              {
                step: "03",
                title: "Quote & Follow Up",
                desc: "We help move prospects through the sales process.",
              },
              {
                step: "04",
                title: "Close",
                desc: "We work toward converting opportunities into customers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative z-10 bg-black border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:border-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-cyan/10 text-cyan flex items-center justify-center font-mono font-bold mb-6 ring-4 ring-black">
                  {item.step}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-cyan/5 via-cyan/10 to-cyan/5 border border-cyan/20">
            <p className="text-xl font-display font-semibold text-white">
              You focus on installations.
              <br className="md:hidden" />{" "}
              <span className="text-cyan">
                We focus on bringing you customers.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="py-14 relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Text */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan font-mono text-xs font-bold uppercase tracking-widest mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Who This Is For
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
              Built for Australian Solar Companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan">Ready to Scale.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              If you have the installation capacity but lack the consistent, high-quality lead flow to fill your calendar, we are your growth partner.
            </p>
          </div>

          {/* Right Checklist */}
          <div className="space-y-4" data-aos="fade-left">
            {[
              "You're an established solar installer",
              "You have capacity for more installations",
              "You want a consistent flow of new enquiries",
              "You want more than just a list of leads",
              "You're ready to scale your sales pipeline",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan/30 transition-all duration-300 group hover:-translate-x-2 hover:shadow-[0_10px_30px_rgba(4,185,202,0.15)] cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center shrink-0 border border-cyan/20 group-hover:scale-110 group-hover:bg-cyan/20 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-white text-lg font-medium group-hover:text-white transition-colors">
                  {item}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── URGENCY SECTION ─── */}
      <section className="py-14 bg-black border-y border-white/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center relative z-10">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-white/5 text-zinc-300 border border-white/10 font-mono text-xs tracking-widest font-bold px-4 py-2 rounded-full mb-8 uppercase">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Solar Season Has Started
          </div>
          
          <h2 data-aos="fade-up" data-aos-delay="100" className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 tracking-tight leading-[1.1] w-full mx-auto">
            Don't spend the season chasing leads while your competitors are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan">filling their calendars.</span>
          </h2>
          
          <p data-aos="fade-up" data-aos-delay="150" className="text-zinc-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            We're currently onboarding a limited number of Australian solar companies.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="200" className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-2.5 bg-rose-500/10 border border-rose-500/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.15)]">
              <div className="text-rose-500 animate-pulse">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-rose-50 font-mono text-sm tracking-wider font-bold uppercase">
                Only 5 Companies Being Onboarded
              </span>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="250">
            <a
              href="#contact-form-section"
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 bg-white text-black font-display font-bold px-10 py-2.5 text-lg rounded-full hover:-translate-y-1 transition-all duration-300 group"
            >
              Book Your Strategy Call
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / BOOKING SECTION ─── */}
      <section
        id="contact-form-section"
        className="bg-black px-6 md:px-12 relative overflow-hidden py-14"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header Info */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              data-aos="fade-up"
              className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 tracking-tight leading-[1.1]"
            >
              Let's Talk About Your{" "}
              <span className="text-cyan">Solar Growth</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              Tell us about your business, your current lead flow and your
              installation capacity. We'll show you how we can help build a
              stronger pipeline and support your sales process.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 px-6">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white text-sm">
                    30-Minute Strategy Call
                  </h3>
                  <p className="text-zinc-400 text-xs">
                    No obligation to commit.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                {[
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                    href: "https://in.linkedin.com/company/digitalwebconnection",
                    color:
                      "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]",
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    href: "https://www.instagram.com/digitalwebconnection/",
                    color:
                      "hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]",
                  },
                  {
                    name: "Facebook",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    ),
                    href: "https://www.facebook.com/p/Digitalwebconnection-100092036863467/",
                    color:
                      "hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]",
                  },
                  {
                    name: "Twitter/X",
                    icon: (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.436.119-.894.143-1.353.051.621 1.879 2.348 3.247 4.413 3.284-2.235 1.751-5.064 2.593-7.915 2.284 2.097 1.346 4.587 2.131 7.24 2.131 8.826 0 13.999-7.514 13.364-14.496.931-.673 1.74-1.515 2.378-2.457z" />
                      </svg>
                    ),
                    href: "https://x.com/Digiwebconnect",
                    color:
                      "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]",
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 ${s.color}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mt-12">
            {/* Left — Video */}
            <div
              data-aos="fade-right"
              className="w-full h-full min-h-[500px] lg:min-h-[650px] relative flex items-center justify-center"
            >
              <div className="absolute w-[200px] h-[200px] bg-cyan/20 rounded-full blur-[80px] pointer-events-none z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(13,94,246,0.15)] relative z-10">
                <div className="absolute inset-0 bg-cyan/5 pointer-events-none mix-blend-overlay z-10" />
                <video
                  src={contactVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div data-aos="fade-left" className="w-full h-full">
              <form
                onSubmit={handleSubmit}
                className="h-full flex flex-col justify-center contact-form-container bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-12 shadow-[0_0_50px_rgba(4,185,202,0.1)] relative z-10"
              >
                {/* Hidden Web3Forms honeypot to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" />
                <div className="grid gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative group">
                      <input
                        className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        required
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, firstName: e.target.value }))
                        }
                        id="first-name"
                      />
                      <label
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan"
                        htmlFor="first-name"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        required
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, lastName: e.target.value }))
                        }
                        id="last-name"
                      />
                      <label
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan"
                        htmlFor="last-name"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input
                      className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, email: e.target.value }))
                      }
                      id="contact-email-main"
                    />
                    <label
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan"
                      htmlFor="contact-email-main"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, company: e.target.value }))
                      }
                      id="company-name"
                    />
                    <label
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan"
                      htmlFor="company-name"
                    >
                      Your Company Name
                    </label>
                  </div>
                  <div className="relative group">
                    <select
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 appearance-none"
                      name="service"
                      value={form.service}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, service: e.target.value }))
                      }
                      id="service-select"
                    >
                      <option value="" className="text-dark bg-white">
                        Select an Interest
                      </option>
                      {services.map((s) => (
                        <option
                          key={s}
                          value={s}
                          className="text-dark bg-white"
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative group">
                    <textarea
                      className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-8 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent min-h-[120px] resize-y"
                      name="message"
                      placeholder="Details"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, message: e.target.value }))
                      }
                      id="project-message"
                    />
                    <label
                      className="absolute left-4 top-6 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan"
                      htmlFor="project-message"
                    >
                      Tell us about your lead flow and capacity
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={`w-full p-4 rounded-xl font-display font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-lg group
                    ${
                      status === "success"
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
                        : status === "error"
                          ? "bg-gradient-to-r from-red-500 to-rose-600 text-white"
                          : "bg-brand-gradient text-dark hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(4,185,202,0.4)]"
                    }`}
                  >
                    {status === "idle" && (
                      <>
                        Book Your Call
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                    {status === "loading" && (
                      <>
                        <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                        Sending...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Request Sent!
                      </>
                    )}
                    {status === "error" && (
                      <>
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Failed — Try Again
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
