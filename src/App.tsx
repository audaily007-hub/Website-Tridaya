/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  MessageCircle, 
  ChevronRight, 
  Award, 
  Ship, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Menu, 
  X,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ArrowRight
} from 'lucide-react';
import { translations, Language } from './translations';

function LogoComponent({ scrolled, lightMode, showSlogan }: { scrolled?: boolean, lightMode?: boolean, showSlogan?: boolean }) {
  const isLight = lightMode || (scrolled === false);
  const logoSrc = "/img-content/logo-only.jpeg";
  
  if (showSlogan) {
    return (
      <div className="flex flex-col items-center text-center">
        <img 
          src={logoSrc} 
          alt="Tridaya Nusantara Global" 
          className="h-24 w-auto mb-4"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col items-center">
          <span className="font-display font-bold tracking-[0.05em] leading-none text-2xl text-white mb-2">
            TRIDAYA NUSANTARA
          </span>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold text-[11px] font-bold tracking-[0.4em] uppercase">
              • GLOBAL •
            </span>
          </div>
          <span className="text-gold/80 text-[10px] tracking-[0.2em] font-medium uppercase max-w-[280px]">
            Exporters of Indonesia's Finest Natural Materials
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-white p-1 shadow-sm overflow-hidden">
        <img 
          src={logoSrc} 
          alt="TNG Logo" 
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-[0.05em] leading-none transition-colors duration-500 text-lg ${isLight ? 'text-white' : 'text-navy'}`}>
          TRIDAYA NUSANTARA
        </span>
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-4 bg-gold" />
          <span className="text-gold text-[11px] font-bold tracking-[0.4em] uppercase">
            • GLOBAL •
          </span>
          <div className="h-[1px] w-4 bg-gold" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'EN' ? 'ID' : 'EN');
  };

  const whatsappNumber = "+6285952726415";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoComponent scrolled={scrolled} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm font-medium hover:text-gold transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>{t.nav.about}</a>
            <a href="#products" className={`text-sm font-medium hover:text-gold transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}>{t.nav.products}</a>
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                scrolled ? 'border-navy/20 text-navy hover:bg-navy/5' : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe size={14} />
              {lang}
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy font-bold text-sm px-6 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className={`p-2 rounded-full ${scrolled ? 'text-navy' : 'text-white'}`}>
              <Globe size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-full ${scrolled ? 'text-navy' : 'text-white'}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center italic">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-display">{t.nav.about}</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-display">{t.nav.products}</a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-gold text-navy px-10 py-4 rounded-full font-bold text-xl shadow-xl w-full text-center"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-navy">
        {/* Hero Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistic Terminal"
            className="w-full h-full object-cover opacity-30 scale-105 transition-transform duration-[20s] animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Quality Guaranteed
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-full shadow-2xl transition-all transform hover:-translate-y-1"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                {t.hero.cta}
              </a>
              <a 
                href="#products"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-full transition-colors"
              >
                {t.nav.products}
                <ChevronRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating WhatsApp FAB for mobile */}
        <div className="fixed bottom-8 right-8 z-50 md:hidden">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl animate-bounce"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold rounded-2xl flex flex-col items-center justify-center p-6 shadow-xl hidden lg:flex">
                <Award size={48} className="text-navy mb-2" />
                <span className="text-navy font-bold text-center leading-tight">{t.about.experience}</span>
              </div>
            </motion.div>

            <div>
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-8">{t.about.title}</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>{t.about.content1}</p>
                <p>{t.about.content2}</p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-gold">50+</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Global Destinations</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold text-gold">100%</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Quality Assured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Principle</span>
          <h2 className="text-4xl font-display font-bold text-navy">{t.values.title}</h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, ...t.values.accountability },
              { icon: Clock, ...t.values.experience },
              { icon: Ship, ...t.values.worldwide },
              { icon: Truck, ...t.values.flexibility }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-6 group-hover:bg-gold transition-colors group-hover:text-white">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-4">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Catalog</span>
          <h2 className="text-4xl font-display font-bold text-navy">{t.products.title}</h2>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {t.products.items.map((product, idx) => (
              <motion.div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200/60 cursor-pointer hover:shadow-xl transition-[box-shadow,border-color] duration-300 flex flex-col h-full"
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0 bg-slate-100">
                  <img 
                    src={product.image || `https://images.unsplash.com/photo-1544662241-ef17101bb0d0?auto=format&fit=crop&q=80&w=600&sig=${idx}`} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1544662241-ef17101bb0d0?auto=format&fit=crop&q=80&w=600&sig=${idx}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-navy/90 text-white font-medium text-xs py-2 px-4 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity scale-95 group-hover:scale-100 duration-300">
                      {lang === 'EN' ? 'View Specifications' : 'Lihat Spesifikasi'}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-display font-bold text-navy mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">{product.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider transition-all">
                    {lang === 'EN' ? 'Specification Sheet' : 'Lembar Spesifikasi'} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Terms Section */}
      <section className="py-24 premium-gradient text-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-center mb-16 text-gold">{t.exportTerms.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
                <Truck className="mx-auto mb-6 text-gold" size={32} />
                <h4 className="text-xl font-bold mb-4">Sample Logistics</h4>
                <p className="text-slate-300 text-sm">{t.exportTerms.logistics}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
                <Globe className="mx-auto mb-6 text-gold" size={32} />
                <h4 className="text-xl font-bold mb-4">International Trade</h4>
                <p className="text-slate-300 text-sm">{t.exportTerms.incoterms}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center">
                <ShieldCheck className="mx-auto mb-6 text-gold" size={32} />
                <h4 className="text-xl font-bold mb-4">Secure Payment</h4>
                <p className="text-slate-300 text-sm">{t.exportTerms.payment}</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-navy font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all transform hover:scale-105"
              >
                Request a Custom Quote
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="mb-8 flex justify-start">
                <LogoComponent showSlogan={true} />
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-8 italic">
                Bridging Indonesian excellence with the world since 2004. Your trusted partner in premium agricultural and handicraft exports.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gold hover:text-navy transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gold hover:text-navy transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gold hover:text-navy transition-all">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.98.53.73 1.43 1.06 2.3.93 1.06-.11 1.95-.91 2.15-1.95.03-3.65.02-7.3.03-10.95z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <MapPin className="text-gold" size={18} />
                Address
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Purbalingga, Central Java,<br />
                Indonesia, 53311
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                <Mail className="text-gold" size={18} />
                Contact
              </h4>
              <p className="text-slate-400 text-sm mb-2 flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                +62 859 5272 6415
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                inquiry@tridayaglobal.com
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              {t.footer.rights}
            </p>
            <div className="flex gap-8 text-slate-500 text-xs">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            />
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] md:h-[600px] flex flex-col md:flex-row"
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-md"
              >
                <X size={20} />
              </button>

              {/* Left Side: Product Image & Spotlight */}
              <div className="w-full md:w-5/12 relative aspect-[4/3] md:aspect-auto min-h-[250px] md:h-full bg-slate-100 flex-shrink-0">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover md:absolute md:inset-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1544662241-ef17101bb0d0?auto=format&fit=crop&q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-transparent via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 md:hidden">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{selectedProduct.name}</h3>
                  <p className="text-gold text-xs font-bold uppercase tracking-wider">{selectedProduct.desc}</p>
                </div>
              </div>

              {/* Right Side: Specifications & Bio */}
              <div className="w-full md:w-7/12 flex flex-col h-[50vh] md:h-full bg-white overflow-hidden">
                {/* Scrollable specs area */}
                <div className="overflow-y-auto flex-grow p-6 md:p-10">
                  <div className="hidden md:block mb-6">
                    <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                      Premium Commodity Spec Sheet
                    </span>
                    <h3 className="text-3xl font-display font-bold text-navy mb-2">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-slate-500 text-sm italic font-medium">
                      {selectedProduct.desc}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                      Description
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                      {selectedProduct.fullDesc || selectedProduct.desc}
                    </p>
                  </div>

                  {selectedProduct.specs && (
                    <div className="border-t border-slate-100 pt-6">
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-4">
                        Technical Specifications
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6">
                        {Object.entries(selectedProduct.specs).map(([key, val]: any) => (
                          <div key={key} className="flex flex-col border-b border-slate-200/50 pb-2 last:border-0 last:pb-0">
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              {key}
                            </span>
                            <span className="text-xs font-semibold text-navy mt-0.5">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sticky Action Footer */}
                <div className="p-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a 
                    href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                      lang === 'EN' 
                        ? `Hello CV Tridaya Nusantara Global, I am interested in inquiring about ${selectedProduct.name}. Could you please provide further details, current FOB pricing, and shipping schedule for this item? Thank you.`
                        : `Halo CV Tridaya Nusantara Global, saya tertarik untuk menanyakan detail produk ${selectedProduct.name}. Bisakah Anda memberikan penjelasan lebih lanjut, penawaran harga FOB terbaru, serta info jadwal pengapalan? Terima kasih.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3.5 rounded-full shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle size={18} />
                    {lang === 'EN' ? 'Send WhatsApp Inquiry' : 'Kirim Pertanyaan via WhatsApp'}
                  </a>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3.5 border border-slate-200 hover:bg-slate-50 text-slate-500 font-semibold text-sm rounded-full transition-colors"
                  >
                    {lang === 'EN' ? 'Close Specifications' : 'Tutup Spesifikasi'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
