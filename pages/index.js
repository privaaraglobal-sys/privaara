import Head from 'next/head'
import Script from 'next/script'

const bodyHtml = `
<!-- ===== CURSOR + GLOW ===== -->
<div class="glow" id="glow"></div>
<div class="cursor-ring" id="cring"></div>
<div class="cursor-dot" id="cdot"></div>

<!-- ===== PRELOADER ===== -->
<div id="loader">
  <img class="lmark" src="/logo-mark.png" alt="" />
  <div class="lbar"><span></span></div>
  <div class="lpct" id="lpct">CRAFTING THE EXPERIENCE</div>
</div>

<!-- ===== NAV ===== -->
<header class="nav" id="nav">
  <a class="nav-logo" href="#top" data-link>
    <img src="/logo-mark.png" alt="PRIVAARA emblem" />
    <span class="nm">PRIVAARA</span>
  </a>
  <nav class="nav-links">
    <a href="#about" data-link>Maison</a>
    <a href="#collections" data-link>Collections</a>
    <a href="#process" data-link>Craftsmanship</a>
    <a href="#industries" data-link>Industries</a>
    <a href="#global" data-link>Global</a>
  </nav>
  <a href="#contact" class="nav-cta" data-link>Request Catalogue</a>
  <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</header>

<div class="drawer" id="drawer">
  <a href="#about" data-link>Maison</a>
  <a href="#collections" data-link>Collections</a>
  <a href="#process" data-link>Craftsmanship</a>
  <a href="#industries" data-link>Industries</a>
  <a href="#global" data-link>Global</a>
  <a href="#contact" data-link>Request Catalogue</a>
  <span class="eyebrow">Own Your Aura</span>
</div>

<!-- ===== HERO ===== -->
<section class="hero" id="top">
  <div class="hero-silk" id="silk"></div>
  <div class="hero-vign"></div>
  <div class="hero-inner">
    <div class="hero-logo" data-hero-logo>
      <img src="/logo-full.png" alt="PRIVAARA — Luxury Surface Embellishment Atelier" />
      <span class="shimmer"></span>
    </div>
    <h1 aria-label="Luxury Surface Embellishments for Fashion Houses Worldwide">
      <span class="line"><i>Luxury Surface Embellishments</i></span>
      <span class="line"><i>for Fashion Houses Worldwide</i></span>
    </h1>
    <p class="lead hero-sub" data-hero-fade>Handcrafted embroidery, sequins, beadwork, pearls, appliqué and couture embellishments for designers, manufacturers and global buyers.</p>
    <div class="hero-cta-row" data-hero-fade>
      <a href="#contact" class="btn btn-gold magnetic" data-link><span class="bt">Request Catalogue</span></a>
      <a href="#collections" class="btn btn-ghost magnetic" data-link><span class="bt">Explore Collections</span></a>
    </div>
  </div>
  <div class="scroll-hint" data-hero-fade>
    <span class="sl">Scroll</span>
    <span class="sline"></span>
  </div>
</section>

<!-- ===== ABOUT PRIVAARA ===== -->
<section class="story" id="about">
  <div class="wrap story-grid">
    <figure class="story-fig r-up" data-fig>
      <img loading="lazy" src="https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=900&q=80" alt="Master artisan hand-embroidering gold thread onto couture fabric" />
      <span class="frame"></span>
      <span class="tag">The Atelier · Mumbai</span>
    </figure>
    <div class="story-body">
      <span class="eyebrow r-up">About Privaara</span>
      <h2 class="section-title r-up">A luxury house of <span class="serif-i">surface embellishment.</span></h2>
      <div data-stagger>
        <p class="lead">For over three decades, PRIVAARA has transformed bare cloth into couture surfaces for the world's most discerning fashion houses.</p>
        <p>Zardozi laid in real metal, pearls and crystals set by hand, sequins that move like light — every metre is worked entirely by master karigars, then held to an uncompromising global standard.</p>
      </div>
      <div class="story-sign r-up">
        <span class="stitch"></span>
        <span class="sg">Privaara</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== TRUST & CREDIBILITY ===== -->
<section class="trust" id="trust">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">Why Global Buyers Trust Us</span>
      <h2 class="section-title r-up">Credibility woven into every commission.</h2>
      <p class="section-sub r-up">A trusted B2B partner to fashion houses, manufacturers and exporters across the world.</p>
    </div>
    <div class="trust-grid" data-trust></div>
    <div class="trust-metrics" data-stagger>
      <div class="tm"><div class="tmv"><span data-count="30">0</span><span class="suf">+</span></div><div class="tml">Years of Expertise</div></div>
      <div class="tm"><div class="tmv"><span data-count="40">0</span><span class="suf">+</span></div><div class="tml">Countries Exported To</div></div>
      <div class="tm"><div class="tmv"><span data-count="500">0</span><span class="suf">+</span></div><div class="tml">Designs Created</div></div>
      <div class="tm"><div class="tmv"><span data-count="100">0</span><span class="suf">%</span></div><div class="tml">Handmade Excellence</div></div>
    </div>
  </div>
</section>

<!-- ===== WHY CHOOSE PRIVAARA ===== -->
<section class="why" id="why">
  <div class="wrap why-grid">
    <div class="why-fig story-fig r-up" data-fig style="aspect-ratio:4/5">
      <img loading="lazy" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80" alt="Close-up of luxury gold and crystal embellished couture fabric" />
      <span class="frame"></span>
      <span class="tag">Maison de Privaara</span>
    </div>
    <div>
      <span class="eyebrow r-up">Why Choose Privaara</span>
      <h2 class="section-title r-up" style="margin:16px 0 30px">Held to a couture standard.</h2>
      <div class="why-list" data-stagger>
        <div class="why-item"><span class="wn">01</span><div class="wbody"><div class="wt">Artisanal Craftsmanship</div><div class="wd">Every piece worked entirely by hand by master karigars.</div></div></div>
        <div class="why-item"><span class="wn">02</span><div class="wbody"><div class="wt">Custom Surface Development</div><div class="wd">Bespoke motifs developed from a single sketch or a single word.</div></div></div>
        <div class="why-item"><span class="wn">03</span><div class="wbody"><div class="wt">Premium Materials</div><div class="wd">Real metal, fine glass crystal and noble fibres, sourced without compromise.</div></div></div>
        <div class="why-item"><span class="wn">04</span><div class="wbody"><div class="wt">OEM &amp; Private Label</div><div class="wd">Discreet production and private-label solutions for houses and brands.</div></div></div>
        <div class="why-item"><span class="wn">05</span><div class="wbody"><div class="wt">Global Fashion Standards</div><div class="wd">Trusted across international runways and B2B supply chains.</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== PRODUCT CATEGORIES ===== -->
<section class="categories" id="collections">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">Our Collections</span>
      <h2 class="section-title r-up">Specialists in every surface.</h2>
      <p class="section-sub r-up">Ten disciplines of luxury embellishment, each mastered as its own craft.</p>
    </div>
    <div class="cat-grid" data-cat-grid></div>
    <div class="cat-cta r-up"><a href="#contact" class="btn btn-gold magnetic" data-link><span class="bt">Request Full Catalogue</span></a></div>
  </div>
</section>

<!-- ===== SIGNATURE CRAFTSMANSHIP (horizontal) ===== -->
<section class="runway" id="runway">
  <div class="rw-head">
    <span class="eyebrow r-up">Signature Craftsmanship</span>
    <h2 class="section-title r-up">The runway of the hand.</h2>
  </div>
  <div class="rw-track-outer">
    <div class="rw-track" id="rwTrack">
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">01</span><img loading="lazy" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=80" alt="Macro detail of hand embroidery in silk and metal thread" /></div>
        <div class="rw-meta"><span class="eyebrow">Heritage</span><h3>Hand Embroidery</h3><p>Couched, satin and chain stitches worked freehand, building dense relief and painterly tonal shifts no machine can imitate.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">02</span><img loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1100&q=80" alt="Intricate glass and pearl beadwork texture" /></div>
        <div class="rw-meta"><span class="eyebrow">Light</span><h3>Intricate Beading</h3><p>Glass, crystal and pearl set bead by bead into flowing motifs that catch and scatter light with every movement.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">03</span><img loading="lazy" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1100&q=80" alt="Traditional zardozi metal goldwork embroidery" /></div>
        <div class="rw-meta"><span class="eyebrow">Lineage</span><h3>Traditional Zardozi</h3><p>Real metallic threads laid over raised cotton padding — the regal goldwork of the courts, rendered with modern precision.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">04</span><img loading="lazy" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1100&q=80" alt="Sequins reflecting light across a couture surface" /></div>
        <div class="rw-meta"><span class="eyebrow">Radiance</span><h3>Sequins &amp; Shine</h3><p>Light-catching sequins and rhinestones laid in flowing fields for photographic depth and couture brilliance.</p></div>
      </article>
    </div>
  </div>
  <div class="rw-prog"><span id="rwProg"></span></div>
</section>

<!-- ===== CRAFTSMANSHIP PROCESS ===== -->
<section class="process" id="process">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">The Process</span>
      <h2 class="section-title r-up">From concept to global dispatch.</h2>
    </div>
    <div class="pline" id="pline" data-stagger>
      <div class="pstep"><div class="pdot"></div><div class="pn">01</div><div class="pt">Design Development</div><div class="pdesc">We interpret your brief into motifs, palettes and material direction.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">02</div><div class="pt">Sampling</div><div class="pdesc">Swatches are worked and refined until the hand and finish are exact.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">03</div><div class="pt">Hand Embellishment</div><div class="pdesc">Karigars build the surface stitch by deliberate stitch, bead by bead.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">04</div><div class="pt">Quality Inspection</div><div class="pdesc">Every metre inspected thread by thread against couture standards.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">05</div><div class="pt">Global Dispatch</div><div class="pdesc">Packed, archived and shipped to buyers across the world.</div></div>
    </div>
  </div>
</section>

<!-- ===== INDUSTRIES WE SERVE ===== -->
<section class="industries" id="industries">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">Industries We Serve</span>
      <h2 class="section-title r-up">Trusted across the fashion world.</h2>
      <p class="section-sub r-up">From single bespoke metres to full production runs, we supply the houses that define luxury.</p>
    </div>
    <div class="ind-grid" data-industries></div>
  </div>
</section>

<!-- ===== GLOBAL EXPORT PRESENCE ===== -->
<section class="global" id="global">
  <div class="wrap global-grid">
    <div class="global-fig r-up" data-fig>
      <img loading="lazy" src="https://images.unsplash.com/photo-1561526116-e2460f4d40a8?auto=format&fit=crop&w=900&q=80" alt="Luxury embellished fabric prepared for international export" />
      <span class="frame"></span>
      <span class="tag">Worldwide B2B Supply</span>
    </div>
    <div class="global-body">
      <span class="eyebrow r-up">Global Export Presence</span>
      <h2 class="section-title r-up">Supplying luxury, worldwide.</h2>
      <p class="lead r-up">A global export network delivering couture embellishment to designers, manufacturers and wholesalers across four continents.</p>
      <div class="reg-list" data-stagger>
        <span class="reg">United States</span>
        <span class="reg">United Kingdom</span>
        <span class="reg">France</span>
        <span class="reg">Italy</span>
        <span class="reg">UAE &amp; Middle East</span>
        <span class="reg">Canada</span>
        <span class="reg">Australia</span>
        <span class="reg">Southeast Asia</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="testi" id="testi">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">In Their Words</span>
      <h2 class="section-title r-up">The houses we dress.</h2>
    </div>
    <div class="testi-stage" id="testiStage">
      <article class="tcard active">
        <p class="q">Privaara understands light the way a jeweller does. The zardozi they laid for our bridal line moved like liquid gold down the runway.</p>
        <div class="who"><div class="wn">Aanya Mehrotra</div><div class="wr">Creative Director · Maison Mehrotra</div></div>
      </article>
      <article class="tcard">
        <p class="q">We sent a single watercolour. What came back was a fabric that felt painted by hand and embroidered by memory. Extraordinary discipline.</p>
        <div class="who"><div class="wn">Léa Dufort</div><div class="wr">Head of Couture · Atelier Dufort, Paris</div></div>
      </article>
      <article class="tcard">
        <p class="q">Ten thousand beads, not one out of place. Privaara is the only atelier I trust with the pieces that have to be flawless.</p>
        <div class="who"><div class="wn">Rohan Kapadia</div><div class="wr">Founder · Kapadia Bridal</div></div>
      </article>
    </div>
    <div class="tdots" id="tdots"></div>
  </div>
</section>

<!-- ===== CONTACT CTA ===== -->
<section class="final" id="contact">
  <div class="wrap">
    <span class="eyebrow r-up">Commission</span>
    <h2 class="r-up">Let's create something <span class="serif-i">extraordinary.</span></h2>
    <p class="lead r-up">From a single bespoke metre to an entire couture collection — request our catalogue or book a consultation with the atelier.</p>
    <div class="hero-cta-row r-up" style="margin-top:0">
      <a href="mailto:atelier@privaara.com?subject=Catalogue%20Request" class="btn btn-gold magnetic"><span class="bt">Request Catalogue</span></a>
      <a href="mailto:atelier@privaara.com?subject=Consultation" class="btn btn-ghost magnetic"><span class="bt">Book a Consultation</span></a>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <img src="/logo-full.png" alt="PRIVAARA" />
        <p>A luxury surface embellishment house crafting handmade couture fabrics for fashion designers, manufacturers and global buyers.</p>
        <a href="#contact" class="btn btn-gold magnetic foot-quick" data-link><span class="bt">Quick Enquiry</span></a>
      </div>
      <div class="foot-col">
        <h4>Company</h4>
        <a href="#about" data-link>About Us</a>
        <a href="#collections" data-link>Collections</a>
        <a href="#process" data-link>Craftsmanship</a>
        <a href="#industries" data-link>Industries</a>
        <a href="#contact" data-link>Contact</a>
      </div>
      <div class="foot-col">
        <h4>Export Markets</h4>
        <a href="#global" data-link>United States</a>
        <a href="#global" data-link>United Kingdom</a>
        <a href="#global" data-link>Europe</a>
        <a href="#global" data-link>Middle East</a>
        <a href="#global" data-link>Asia Pacific</a>
      </div>
      <div class="foot-col">
        <h4>Contact</h4>
        <p>atelier@privaara.com</p>
        <p>+91 22 0000 0000</p>
        <p>Kala Ghoda, Mumbai 400001</p>
        <div class="news">
          <input type="email" placeholder="Your email" aria-label="Email" id="newsEmail" />
          <button id="newsBtn">Join</button>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <p>© 2026 PRIVAARA · Own Your Aura</p>
      <div class="foot-social">
        <a href="#" data-link>Instagram</a>
        <a href="#" data-link>Pinterest</a>
        <a href="#" data-link>LinkedIn</a>
      </div>
      <div class="foot-legal">
        <a href="#" data-link>Privacy Policy</a>
        <a href="#" data-link>Terms &amp; Conditions</a>
      </div>
    </div>
  </div>
</footer>
`;

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PRIVAARA — Luxury Surface Embellishment Atelier | Embroidery, Zardozi, Beadwork & Couture Fabrics</title>
        <meta name="description" content="PRIVAARA is a luxury surface embellishment house supplying handcrafted embroidery, zardozi, beadwork, pearls, sequins, crystal work and couture fabrics to fashion designers, couture houses and global B2B buyers. 30+ years of craftsmanship, exported to 40+ countries." />
        <meta name="keywords" content="surface embellishment, luxury embroidery, zardozi, beadwork, sequins, couture fabrics, bridal fabrics, hand embroidery, textile export, B2B fabric supplier, private label embellishment" />
        <meta name="theme-color" content="#0B1D3A" />
        <link rel="canonical" href="https://privaara.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PRIVAARA — Luxury Surface Embellishments for Fashion Houses Worldwide" />
        <meta property="og:description" content="Handcrafted embroidery, sequins, beadwork, pearls and couture embellishments for designers, manufacturers and global buyers." />
        <meta property="og:image" content="/logo-full.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRIVAARA — Luxury Surface Embellishment Atelier" />
        <meta name="twitter:description" content="Handcrafted couture embellishment for fashion houses and global B2B buyers." />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  )
}
