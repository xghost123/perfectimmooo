import React, { useState } from 'react';
import {
  ArrowRight, Award, Bath, BedDouble, Check,
  Facebook, Home, Instagram, KeyRound, Linkedin, Mail,
  MapPin, Menu, MoveUpRight, Phone, ShieldCheck, Star,
  TrendingUp, Users, X,
} from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90',
  neighborhoods: [
    '/neighborhood-la-marsa.webp',
    '/neighborhood-sidi-bou-said.webp',
    '/neighborhood-gammarth.webp',
  ],
  clients: [
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
  ],
};

const listings = [
  { price: '3 850 000 TND', address: 'Villa Azur, Gammarth Supérieur', beds: 5, baths: 4, area: '520 m²', badge: 'Signature' },
  { price: '2 290 000 TND', address: 'Les Jardins de Carthage, Tunis', beds: 4, baths: 3, area: '360 m²', badge: 'Sélection' },
  { price: '1 780 000 TND', address: 'Résidence Marina, Sidi Bou Saïd', beds: 3, baths: 3, area: '245 m²', badge: 'Exclusivité' },
];

const neighborhoods = [
  { name: 'La Marsa', range: '1,2 M - 4,8 M TND', listings: 38, copy: 'Élégance côtière et art de vivre méditerranéen.' },
  { name: 'Sidi Bou Saïd', range: '1,8 M - 6,5 M TND', listings: 21, copy: 'Maisons emblématiques blanches et bleues dominant la mer.' },
  { name: 'Gammarth', range: '1,5 M - 7,2 M TND', listings: 46, copy: 'Villas privées, vues panoramiques et douceur balnéaire.' },
];

const testimonials = [
  { name: 'Sarra & Mehdi', type: 'Villa en bord de mer · Gammarth', quote: 'Perfect Immo a trouvé notre maison avant même sa mise sur le marché et a négocié 9 % sous le prix demandé. Chaque détail a été traité avec une attention remarquable.', result: 'Achat réalisé en 18 jours' },
  { name: 'Karim B.', type: 'Appartement d’investissement · Lac II', quote: 'Leur connaissance du marché a transformé un investissement complexe en une décision évidente. Le bien offre déjà un rendement annuel de 7,4 %.', result: '7,4 % de rendement locatif' },
  { name: 'Nadia H.', type: 'Maison familiale · La Marsa', quote: 'De la première visite privée à la signature finale, je me suis sentie accompagnée, informée et jamais pressée. Une équipe véritablement exceptionnelle.', result: 'Signature finalisée avec 6 jours d’avance' },
];

function Logo({ light = false }) {
  return (
    <a className={`logo ${light ? 'logo-light' : ''}`} href="#top" aria-label="Accueil Perfect Immo">
      <img src="/perfect-immo-logo.png" width="889" height="274" alt="Perfect Immo, agence immobilière" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, action }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
      {action && <a className="text-link" href="#listings">{action} <ArrowRight size={17} /></a>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2600);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell" id="top">
      {notice && <div className="toast"><Check size={17} /> {notice}</div>}
      <header className="nav-wrap">
        <nav className="nav container">
          <Logo light />
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollTo('listings')}>Nos biens</button>
            <button onClick={() => scrollTo('neighborhoods')}>Quartiers</button>
            <button onClick={() => scrollTo('expertise')}>Notre expertise</button>
            <button onClick={() => scrollTo('insights')}>Le marché</button>
            <button onClick={() => scrollTo('contact')}>Contact</button>
          </div>
          <div className="nav-actions">
            <button className="button button-gold desktop-cta" onClick={() => scrollTo('contact')}>Nous contacter</button>
            <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img className="hero-image" src={images.hero} alt="Villa contemporaine avec piscine sur la côte tunisienne" />
          <div className="hero-shade" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="container hero-content">
            <div className="hero-kicker"><span /> Agence immobilière en Tunisie</div>
            <h1>Des lieux d’exception.<br /><em>Parfaitement représentés.</em></h1>
            <p>Perfect Immo vous accompagne dans vos projets immobiliers les plus importants<br className="desktop-only" /> à Tunis, La Marsa, Gammarth et sur le littoral environnant.</p>
            <div className="hero-actions"><button className="button button-gold" onClick={() => scrollTo('listings')}>Découvrir notre sélection <ArrowRight size={17} /></button><button className="button button-outline" onClick={() => scrollTo('contact')}>Échanger avec un conseiller</button></div>
            <div className="hero-signature"><div><strong>25+</strong><span>Années d’expertise locale</span></div><div><strong>500+</strong><span>Clients accompagnés</span></div><div><strong>100%</strong><span>Service discret et personnalisé</span></div></div>
            <div className="hero-note"><span>01</span><div /><p>L’élégance immobilière<br />alliée à l’expertise locale</p></div>
          </div>
        </section>

        <section className="section listings-section" id="listings">
          <div className="container">
            <SectionHeading eyebrow="Un aperçu de notre portefeuille" title="Biens à la une" copy="Trois propriétés remarquables qui incarnent notre approche : des emplacements uniques, une architecture soignée et une valeur durable." />
            <div className="listing-grid">
              {listings.map((listing, index) => (
                <article className="listing-card" key={listing.address}>
                  <div className="listing-image-wrap">
                    <div className="listing-placeholder" aria-label={`Photo à venir pour ${listing.address}`}>
                      <Home size={35} />
                      <span>Photo à venir</span>
                    </div>
                    <span className={`badge ${listing.badge === 'Open House' ? 'open-house' : ''}`}>{listing.badge}</span>
                    <div className="card-index">0{index + 1}</div>
                  </div>
                  <div className="listing-body">
                    <div className="price-row"><h3>{listing.price}</h3></div>
                    <p className="address"><MapPin size={15} /> {listing.address}</p>
                    <div className="property-meta"><span><BedDouble size={16} /> {listing.beds} Chambres</span><span><Bath size={16} /> {listing.baths} Salles de bain</span><span><Home size={16} /> {listing.area}</span></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credibility-section" id="expertise">
          <div className="container credibility-grid">
            <div className="credibility-intro">
              <span className="eyebrow light">L’exigence Perfect Immo</span>
              <h2>Une expertise qui<br /><em>vous inspire confiance.</em></h2>
              <p>L’immobilier est avant tout une histoire personnelle. Depuis plus de deux décennies, nous associons une connaissance rigoureuse du marché à une approche profondément humaine.</p>
              <a className="button button-outline" href="#contact">Découvrir Perfect Immo <ArrowRight size={17} /></a>
            </div>
            <div className="stats-grid">
              {[
                { value: '25+', label: 'Années d’expérience', copy: 'Une présence de confiance en Tunisie depuis 1999.', icon: Award },
                { value: '2 Md+', label: 'TND de volume de ventes', copy: 'Une performance confirmée dans tous les cycles du marché.', icon: TrendingUp },
                { value: '500+', label: 'Familles satisfaites', copy: 'Des relations qui perdurent bien après la remise des clés.', icon: Users },
                { value: 'N°1', label: 'Agence du Grand Tunis', copy: 'Reconnue pour son service, sa discrétion et ses résultats.', icon: ShieldCheck },
              ].map((stat) => <div className="stat-card" key={stat.label}><stat.icon /><strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section neighborhoods-section" id="neighborhoods">
          <div className="container">
            <SectionHeading eyebrow="Trouvez votre adresse" title="Des quartiers d’exception" copy="Des villages côtiers chargés d’histoire aux quartiers urbains contemporains, découvrez le cadre qui vous ressemble." action="Découvrir les quartiers" />
            <div className="neighborhood-grid">
              {neighborhoods.map((place, index) => (
                <article className="neighborhood-card" key={place.name}>
                  <img src={images.neighborhoods[index]} alt={`Vue de ${place.name}`} />
                  <div className="neighborhood-overlay" />
                  <div className="neighborhood-count">{place.listings} biens</div>
                  <div className="neighborhood-copy"><span>0{index + 1}</span><h3>{place.name}</h3><p>{place.copy}</p><div><small>FOURCHETTE MOYENNE</small><strong>{place.range}</strong></div><button>Découvrir <MoveUpRight size={17} /></button></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <div className="testimonial-title"><span className="eyebrow light">Leurs histoires immobilières</span><h2>La confiance de clients<br /><em>qui attendent davantage.</em></h2></div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="stars">{[0,1,2,3,4].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <div className="client"><img src={images.clients[index]} alt={testimonial.name} /><div><strong>{testimonial.name}</strong><span>{testimonial.type}</span></div></div>
                  <div className="result"><Check size={15} /> {testimonial.result}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section insights-section" id="insights">
          <div className="container insights-grid">
            <div className="insights-copy"><span className="eyebrow">Baromètre du marché · Octobre</span><h2>Une vision claire<br /><em>d’un marché en mouvement.</em></h2><p>Nos conseillers suivent chaque évolution du Grand Tunis pour vous permettre d’acheter, vendre et investir en toute confiance.</p><a className="text-link" href="#contact">Recevoir l’étude complète <ArrowRight size={17} /></a></div>
            <div className="market-board">
              <div className="market-header"><span>GRAND TUNIS · RÉSIDENTIEL</span><span className="live"><i /> DONNÉES ACTUELLES</span></div>
              <div className="market-stats">
                <div><span>PRIX MOYEN</span><strong>1,48 M <small>TND</small></strong><em className="positive">↗ 4,8 % ce mois</em></div>
                <div><span>DÉLAI DE VENTE</span><strong>34 <small>JOURS</small></strong><em className="positive">↓ 6 jours ce mois</em></div>
                <div><span>BIENS DISPONIBLES</span><strong>284</strong><em>↗ 2,1 % ce mois</em></div>
              </div>
              <div className="chart-area"><div className="chart-label">ÉVOLUTION DES PRIX SUR 12 MOIS</div><svg viewBox="0 0 680 140" preserveAspectRatio="none" aria-label="Évolution des prix du marché"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9a962" stopOpacity=".4"/><stop offset="1" stopColor="#c9a962" stopOpacity="0"/></linearGradient></defs><path className="chart-fill" d="M0 115 C60 110,80 87,135 98 S220 103,270 69 S350 77,402 51 S480 67,530 34 S610 42,680 9 L680 140 L0 140 Z"/><path className="chart-line" d="M0 115 C60 110,80 87,135 98 S220 103,270 69 S350 77,402 51 S480 67,530 34 S610 42,680 9"/><circle cx="680" cy="9" r="5" /></svg><div className="months"><span>NOV</span><span>FÉV</span><span>MAI</span><span>AOÛT</span><span>OCT</span></div></div>
            </div>
          </div>
        </section>

        <section className="valuation-section" id="contact">
          <div className="valuation-image" />
          <div className="valuation-overlay" />
          <div className="container valuation-content">
            <div><span className="eyebrow light">Parlons de votre projet</span><h2>Une approche personnelle<br /><em>dès le premier échange.</em></h2><p>Achat, vente, location ou investissement : partagez-nous votre projet. Notre agence vous répondra personnellement et en toute confidentialité.</p><div className="value-points"><span><Check /> Expertise du marché local</span><span><Check /> Accompagnement confidentiel</span><span><Check /> Réponse sous 24 heures</span></div><div className="contact-direct"><a href="tel:+21628833283"><Phone /> +216 28 833 283</a><a href="tel:+21627980387"><Phone /> +216 27 980 387</a><a href="mailto:hello@perfectimmo.tn"><Mail /> hello@perfectimmo.tn</a></div></div>
            <form className="valuation-card contact-form" onSubmit={(event) => { event.preventDefault(); flash('Formulaire de démonstration : l’envoi sera activé prochainement.'); }}><div className="valuation-icon"><KeyRound /></div><span>CONTACTER PERFECT IMMO</span><h3>Parlez-nous de votre projet</h3><p>Complétez ce formulaire. Un membre de notre agence reviendra personnellement vers vous.</p><div className="form-row"><label><input required placeholder="Nom complet" aria-label="Nom complet" /></label><label><input required type="tel" placeholder="Numéro de téléphone" aria-label="Numéro de téléphone" /></label></div><label><input required type="email" placeholder="Adresse e-mail" aria-label="Adresse e-mail" /></label><label><select aria-label="Nature du projet" defaultValue=""><option value="" disabled>Nature de votre projet</option><option>Acheter un bien</option><option>Vendre un bien</option><option>Louer un bien</option><option>Faire estimer un bien</option><option>Autre demande</option></select></label><label><textarea required rows="4" placeholder="Comment pouvons-nous vous aider ?" aria-label="Message" /></label><button className="button button-gold" type="submit">Envoyer ma demande <ArrowRight size={18} /></button><small>Vos informations restent confidentielles et ne sont jamais partagées avec des tiers.</small></form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><Logo light /><p>L’immobilier tunisien d’exception, représenté avec attention, intelligence et discrétion.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="Facebook"><Facebook /></a><a href="#" aria-label="LinkedIn"><Linkedin /></a></div></div>
          <div className="footer-col"><h3>Découvrir</h3><a href="#listings">Biens à vendre</a><a href="#listings">Biens à louer</a><a href="#neighborhoods">Quartiers</a><a href="#insights">Le marché immobilier</a></div>
          <div className="footer-col"><h3>Notre agence</h3><a href="#expertise">Notre expertise</a><a href="#expertise">À propos de Perfect Immo</a><a href="#contact">Nous contacter</a><a href="#contact">Vendre avec nous</a></div>
          <div className="footer-col office"><h3>Notre agence</h3><div className="office-location"><strong>Centre Urbain Nord</strong><p><MapPin /> Centre Urbain Nord<br />1082 Tunis, Tunisie</p><a className="map-link" href="https://maps.google.com/?q=Centre+Urbain+Nord+Tunis" target="_blank" rel="noreferrer">Voir sur la carte <MoveUpRight size={15} /></a></div><a href="tel:+21628833283"><Phone /> +216 28 833 283</a><a href="tel:+21627980387"><Phone /> +216 27 980 387</a><a href="mailto:hello@perfectimmo.tn"><Mail /> hello@perfectimmo.tn</a></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 Perfect Immo. Tous droits réservés.</p><div><a href="#">Confidentialité</a><a href="#">Mentions légales</a><span className="equal-housing"><Home size={15} /> Égalité d’accès au logement</span></div><p className="disclaimer">Les informations immobilières sont réputées fiables mais ne sont pas garanties. Les dimensions et les prix sont indicatifs et susceptibles d’être modifiés. Perfect Immo est une agence immobilière tunisienne agréée. Photographies des quartiers : Selmaej, Mietek Ł et Citizen59 via Wikimedia Commons, CC BY-SA 3.0.</p></div>
      </footer>
    </div>
  );
}

export default App;
