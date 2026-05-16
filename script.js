
const { useState, useEffect, useRef } = React;

// ── ÍCONES INLINE SVG ──
const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
);
const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
);
const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ── LINKS ──
const scheduleLink = "https://wa.me/5551995603555?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Sr.%20Smith%20Barber%20Shop.";
const instagramLink = "https://instagram.com/sr.smith.camaqua";

// ── HERO SLIDES ──
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    title: "Mais que uma barbearia,",
    titleAccent: "uma experiência.",
    subtitle: "Imagem, presença e padrão elevado. Ambiente reservado, hora marcada. Venha descobrir o que é cuidado de verdade."
  },
  {
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    title: "Você imagina e",
    titleAccent: "nós criamos.",
    subtitle: "O objetivo dos nossos barbeiros experientes é transformar seu visual em uma obra-prima que capture seu próprio estilo."
  }
];

// ── SERVIÇOS ──
const services = [
  { name: "Corte De Cabelo Masculino", tag: "CORTE DE CABELO", price: "R$ 45", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop" },
  { name: "Barba com Toalha Quente", tag: "BARBA RASPADA", price: "R$ 40", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=600&auto=format&fit=crop" },
  { name: "Design de Sobrancelha", tag: "NAVALHA PRECISÃO", price: "R$ 20", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop" },
  { name: "Combo Corte + Barba", tag: "RECOMENDADO", price: "R$ 75", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop" },
  { name: "Limpeza de Pele Facial", tag: "ESTÉTICA", price: "R$ 60", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop" }
];

// ── PRODUTOS ──
const products = [
  { name: "Pomada Modeladora Premium", desc: "Fixação forte, brilho natural. Fórmula exclusiva Smith.", price: "R$ 59,90" },
  { name: "Óleo para Barba Gold", desc: "Hidratação profunda, aroma amadeirado sofisticado.", price: "R$ 49,90" },
  { name: "Shampoo Antiqueda Black", desc: "Fortalece os fios e estimula o crescimento capilar.", price: "R$ 44,90" },
];

// ── DEPOIMENTOS (NOVO) ──
const testimonials = [
  { name: "Lucas M.", text: "Melhor barbearia de Camaquã! Ambiente incrível e o corte ficou perfeito.", stars: 5 },
  { name: "Rafael S.", text: "Assino o Clube Smith há meses. Vale muito — corto quando quiser com padrão altíssimo.", stars: 5 },
  { name: "Thiago P.", text: "Fui pela primeira vez e já virei cliente fixo. Experiência diferente de qualquer outra.", stars: 5 },
];

// ── HOOK: ANIMAÇÃO AO ENTRAR NA TELA ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── COMPONENTE: CONTADOR ANIMADO ──
function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const num = parseInt(target);
    const duration = 1800;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs para animações de entrada
  const [heroRef, heroVisible] = useInView(0.1);
  const [aboutRef, aboutVisible] = useInView(0.1);
  const [servicesRef, servicesVisible] = useInView(0.1);
  const [clubeRef, clubeVisible] = useInView(0.1);
  const [productsRef, productsVisible] = useInView(0.1);
  const [testimonialsRef, testimonialsVisible] = useInView(0.1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextService = () => setActiveServiceSlide((prev) => (prev + 1 >= services.length - 2 ? 0 : prev + 1));
  const prevService = () => setActiveServiceSlide((prev) => (prev - 1 < 0 ? services.length - 3 : prev - 1));

  return (
    <div className="bg-[#161513] min-h-screen text-zinc-100 selection:bg-[#D4AF37] selection:text-black antialiased">

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease-in-out",
        background: scrolled ? "linear-gradient(to right, rgba(22,21,19,0.97), rgba(34,30,26,0.97))" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.25)" : "none",
        paddingTop: scrolled ? "14px" : "20px",
        paddingBottom: scrolled ? "14px" : "20px"
      }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="logo.jpg" alt="Logo" style={{
              height: 48, width: 48, borderRadius: "50%", objectFit: "cover",
              border: "2px solid #D4AF37",
              boxShadow: "0 0 14px rgba(212,175,55,0.35)"
            }} />
            <div>
              <span className="block font-black text-white text-sm tracking-tight uppercase leading-none">Sr. Smith</span>
              <span className="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">Barber Shop · Camaquã</span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {["Quem Somos", "Serviços", "Clube Smith", "Produtos"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="nav-link text-zinc-400 hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider transition duration-300">
                {item}
              </a>
            ))}
          </div>

          <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#D4AF37] text-black font-extrabold text-[11px] px-5 py-3 rounded uppercase tracking-wider hover:bg-white transition duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
            <WhatsappIcon /> Agendar
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#D4AF37] text-2xl bg-transparent border-0 cursor-pointer">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "rgba(22,21,19,0.98)", backdropFilter: "blur(20px)",
            padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
            borderBottom: "1px solid rgba(212,175,55,0.2)",
            animation: "fadeDown 0.3s ease"
          }}>
            {["Quem Somos", "Serviços", "Clube Smith", "Produtos"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-200 text-base font-semibold">
                {item}
              </a>
            ))}
            <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-bold text-center py-3 rounded uppercase text-xs tracking-wider">
              Agendar Horário
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-[#12110f] flex items-center">
        {heroSlides.map((slide, index) => (
          <div key={index} style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? "scale(1)" : "scale(1.04)",
            transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
            zIndex: 1,
          }}>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-[#161513]/85 to-[#161513]" />
          </div>
        ))}

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl" ref={heroRef} style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.9s ease, transform 0.9s ease"
          }}>
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" style={{ animation: "pulse 2s infinite" }}></div>
              <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Barbearia Premium · Camaquã, RS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight uppercase text-white">
              {heroSlides[currentSlide].title}{" "}
              <span className="text-[#D4AF37]">{heroSlides[currentSlide].titleAccent}</span>
            </h1>
            <p className="text-zinc-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-full uppercase text-xs tracking-wider shadow-[0_4px_25px_rgba(212,175,55,0.35)] hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
                <WhatsappIcon /> Agendar via WhatsApp →
              </a>
              <a href="#servicos"
                className="inline-flex items-center gap-2 border border-[#D4AF37]/40 text-[#D4AF37] font-bold px-8 py-4 rounded-full uppercase text-xs tracking-wider hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300">
                Ver Serviços ↓
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {heroSlides.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} style={{
              width: 10,
              height: currentSlide === idx ? 28 : 10,
              borderRadius: 99,
              background: currentSlide === idx ? "#D4AF37" : "rgba(255,255,255,0.3)",
              border: "none", cursor: "pointer",
              transition: "all 0.4s"
            }} />
          ))}
        </div>
      </section>

      {/* ── STATS BAR (NOVO) ── */}
      <div style={{
        background: "linear-gradient(135deg, #1e1b18, #231f1c)",
        borderTop: "1px solid rgba(212,175,55,0.15)",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
        padding: "32px 24px"
      }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "430", suffix: "+", label: "Cortes por mês" },
            { value: "8", suffix: "+ anos", label: "De experiência" },
            { value: "98", suffix: "%", label: "Clientes satisfeitos" },
            { value: "5", suffix: "★", label: "Avaliação média" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-black text-[#D4AF37]">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── QUEM SOMOS ── */}
      <section id="quem-somos" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div ref={aboutRef} className="grid md:grid-cols-2 gap-16 items-center" style={{
          opacity: aboutVisible ? 1 : 0,
          transform: aboutVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div className="relative">
            <div className="w-[90%] h-[460px] rounded-2xl overflow-hidden border border-[#3a322b] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
                alt="Nosso Trabalho" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="absolute bottom-[-15px] left-[-10px] bg-[#231f1c] border border-[#D4AF37] rounded-xl p-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.7)] min-w-[170px]">
              <div className="text-3xl font-black text-[#D4AF37] leading-none">
                <AnimatedCounter target="430" suffix="+" />
              </div>
              <div className="text-zinc-400 text-[10px] font-bold tracking-wider uppercase mt-2 leading-tight">Cortes de Cabelo<br/>por Mês</div>
            </div>
          </div>

          <div>
            <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4">— QUEM SOMOS</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6 text-white">Tradição forte com mente moderna.</h2>
            <p className="text-zinc-300 text-base leading-relaxed mb-4">
              Bem-vindo à Sr. Smith Barber Shop, localizada no coração de Camaquã — <strong className="text-zinc-100">R. Gen. Zéca Neto, 1163, Sala 13, Centro</strong>. Fundada com a missão de resgatar o atendimento de alto padrão focado no visual masculino.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-10">
              Aqui, cortar o cabelo e alinhar a barba não é rotina — é um ritual. Nossa equipe combina técnicas clássicas com as mais modernas do mercado para garantir que você saia com a melhor versão de si mesmo.
            </p>
            <div className="flex gap-10 items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#231f1c] flex items-center justify-center font-bold text-[#D4AF37] text-sm">98%</div>
                <span className="text-zinc-300 text-xs font-bold uppercase leading-tight">Clientes<br/>Fidelizados</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#231f1c] flex items-center justify-center font-bold text-[#D4AF37] text-sm">100%</div>
                <span className="text-zinc-300 text-xs font-bold uppercase leading-tight">Atendimento<br/>Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div ref={servicesRef} style={{
          opacity: servicesVisible ? 1 : 0,
          transform: servicesVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">— PACOTES EXCLUSIVOS</div>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Nossos Serviços</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={prevService} className="w-12 h-12 rounded-full border border-[#3a322b] bg-[#1e1c1a] flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300">
                <ChevronLeftIcon />
              </button>
              <button onClick={nextService} className="w-12 h-12 rounded-full border border-[#3a322b] bg-[#1e1c1a] flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300">
                <ChevronRightIcon />
              </button>
            </div>
          </div>

          <div className="overflow-hidden w-full">
            <div style={{
              display: "flex", gap: "24px",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${activeServiceSlide * 324}px)`
            }}>
              {services.map((s, i) => (
                <div key={i} className="min-w-[300px] max-w-[300px] group cursor-pointer gold-glow"
                  style={{ border: "1px solid #2c2621", borderRadius: 16, overflow: "hidden", transition: "all 0.35s ease" }}>
                  <div className="w-full h-[240px] overflow-hidden relative">
                    <img src={s.image} alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 bg-[#231f1c]/90 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] font-black text-sm px-3 py-1 rounded-md">
                      {s.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-zinc-100 group-hover:text-[#D4AF37] transition duration-300 leading-tight mb-1">{s.name}</h3>
                    <span className="text-[#D4AF37] text-[10px] font-black tracking-widest uppercase">{s.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-full uppercase text-xs tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
              <WhatsappIcon /> Agendar Agora
            </a>
          </div>
        </div>
      </section>

      {/* ── CLUBE SMITH ── */}
      <section id="clube-smith" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div ref={clubeRef} style={{
          opacity: clubeVisible ? 1 : 0,
          transform: clubeVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div className="bg-gradient-to-br from-[#231f1c] via-[#1e1b19] to-[#161513] border border-[#3a322b] rounded-3xl overflow-hidden grid md:grid-cols-2 relative group transition-all duration-500 hover:border-[#D4AF37]/50 shadow-2xl">
            <div style={{ position: "absolute", height: 3, top: 0, left: 0, right: 0, background: "linear-gradient(to right, transparent, #D4AF37, transparent)" }} />

            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-4">✦ Plano de Assinatura Exclusivo</div>
              <h2 className="text-4xl font-extrabold mb-4 text-white">Clube Smith</h2>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Pague uma vez e corte o cabelo <strong className="text-white">quantas vezes quiser</strong> no mês. O plano ideal para quem não abre mão do padrão.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {["Cortes ilimitados no mês", "Prioridade máxima na agenda", "Atendimento exclusivo", "Ambiente reservado garantido"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
              <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black font-bold px-6 py-3.5 rounded-lg uppercase text-xs tracking-wider text-center md:inline-block md:max-w-xs transition-all duration-300 hover:bg-white hover:scale-105 shadow-md">
                Quero Fazer Parte
              </a>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#3a322b] p-10 md:p-14 flex items-center justify-center bg-[#1a1816]/60">
              <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                <div className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">A partir de</div>
                <div className="flex items-start justify-center">
                  <span className="text-[#D4AF37] text-2xl font-bold mt-2 mr-1">R$</span>
                  <span className="text-5xl md:text-8xl font-black tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-500">74</span>
                  <div className="flex flex-col mt-2 ml-1">
                    <span className="text-[#D4AF37] text-xl font-black">,90</span>
                    <span className="text-zinc-400 text-sm">/mês</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUTOS ── */}
      <section id="produtos" className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div ref={productsRef} style={{
          opacity: productsVisible ? 1 : 0,
          transform: productsVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div className="mb-16">
            <div className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">— Vitrine</div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-white">Produtos Premium</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className="gold-glow bg-[#1e1b19] border border-[#2c2621] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:bg-[#231f1c] transform hover:-translate-y-2 shadow-lg">
                <div>
                  <h3 className="font-bold text-base mb-2 text-zinc-100 hover:text-[#D4AF37] transition duration-300">{p.name}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">{p.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-[#D4AF37] font-extrabold text-lg">{p.price}</span>
                  <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
                    className="text-xs bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-md font-bold hover:bg-[#D4AF37] hover:text-black transition duration-300">
                    Garantir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS (NOVO) ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div ref={testimonialsRef} style={{
          opacity: testimonialsVisible ? 1 : 0,
          transform: testimonialsVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}>
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-3">— O QUE DIZEM</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white">Nossos Clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="gold-glow bg-[#1e1b19] border border-[#2c2621] rounded-2xl p-8 transition-all duration-300 hover:bg-[#231f1c] transform hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="text-[#D4AF37] font-bold text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 px-6 max-w-6xl mx-auto border-t border-[#2c2621]">
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="logo.jpg" alt="Logo Sr. Smith" style={{
                height: 48, width: 48, borderRadius: "50%", objectFit: "cover",
                border: "2px solid #D4AF37"
              }} />
              <div>
                <span className="block font-black text-white text-sm uppercase leading-none">Sr. Smith</span>
                <span className="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">Barber Shop</span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6">
              Mais que uma barbearia, uma experiência. Imagem, presença e padrão elevado. Ambiente reservado, hora marcada.
            </p>
            <div className="flex gap-3">
              <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e1b19] border border-[#2c2621] rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition duration-300"
                title="WhatsApp">
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] text-xs font-bold tracking-wider uppercase mb-6 flex items-center gap-2">
              <ClockIcon /> Horário de Funcionamento
            </h4>
            <div className="space-y-3 text-xs text-zinc-300">
              <div><span className="block text-zinc-500">Segunda a Sexta</span><span className="font-semibold">09:00h às 20:00h</span></div>
              <div><span className="block text-zinc-500">Sábado</span><span className="font-semibold">09:00h às 18:00h</span></div>
              <div><span className="block text-zinc-500">Domingo</span><span className="text-zinc-500 font-semibold">Fechado</span></div>
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] text-xs font-bold tracking-wider uppercase mb-4 flex items-center gap-2">
              <MapPinIcon /> Onde Estamos
            </h4>
            <div className="w-full h-[160px] rounded-xl overflow-hidden border border-[#2c2621] mb-3 bg-[#111]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.1472851480113!2d-51.81236892361819!3d-30.854585311090518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a63c6d5b03517%3A0x6b8f3d1b74f07a4a!2sR.%20Gen.%20Z%C3%A9ca%20Neto%2C%201163%20-%20Centro%2C%20Camaqu%C3%A3%20-%20RS%2C%2096180-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
                width="100%" height="100%"
                style={{ border: 0, filter: "sepia(0.4) hue-rotate(15deg) invert(0.9) contrast(1.1)" }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <span className="text-zinc-500 text-[11px] block">R. Gen. Zéca Neto, 1163 - Sala 13 · Centro, Camaquã - RS</span>
            <a href={scheduleLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-[#1ebe5d] transition duration-300">
              <WhatsappIcon /> (51) 99560-3555
            </a>
          </div>

        </div>

        <div className="border-t border-[#2c2621] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-600 text-xs">
          <div>© {new Date().getFullYear()} Sr. Smith Barber Shop · Camaquã, RS · Contato exclusivo via WhatsApp.</div>
          <div>Ambiente reservado · Hora marcada</div>
        </div>
      </footer>

      {/* Estilos de animação globais */}
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
