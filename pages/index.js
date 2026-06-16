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
    <a href="#story" data-link>Maison</a>
    <a href="#services" data-link>Atelier</a>
    <a href="#runway" data-link>Craft</a>
    <a href="#gallery" data-link>Gallery</a>
    <a href="#process" data-link>Process</a>
  </nav>
  <a href="#contact" class="nav-cta" data-link>Commission</a>
  <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</header>

<div class="drawer" id="drawer">
  <a href="#story" data-link>Maison</a>
  <a href="#services" data-link>Atelier</a>
  <a href="#runway" data-link>Craft</a>
  <a href="#gallery" data-link>Gallery</a>
  <a href="#process" data-link>Process</a>
  <a href="#contact" data-link>Commission</a>
  <span class="eyebrow">Own Your Aura</span>
</div>

<!-- ===== HERO ===== -->
<section class="hero" id="top">
  <div class="hero-silk" id="silk"></div>
  <div class="hero-vign"></div>
  <div class="hero-inner">
    <div class="hero-logo" data-hero-logo>
      <img src="/logo-full.png" alt="PRIVAARA — Own Your Aura" />
      <span class="shimmer"></span>
    </div>
    <h1 aria-label="Crafting Luxury Into Every Thread">
      <span class="line"><i>Crafting Luxury</i></span>
      <span class="line"><i>Into Every Thread</i></span>
    </h1>
    <p class="lead hero-sub" data-hero-fade>Masters of surface embellishment and textile artistry — where heritage handwork meets contemporary couture.</p>
    <div class="hero-cta-row" data-hero-fade>
      <a href="#services" class="btn btn-gold magnetic" data-link><span class="bt">Explore the Atelier</span></a>
      <a href="#runway" class="btn btn-ghost magnetic" data-link><span class="bt">Our Craftsmanship</span></a>
    </div>
  </div>
  <div class="scroll-hint" data-hero-fade>
    <span class="sl">Scroll</span>
    <span class="sline"></span>
  </div>
</section>

<!-- ===== STORY ===== -->
<section class="story" id="story">
  <div class="wrap story-grid">
    <figure class="story-fig r-up" data-fig>
      <img loading="lazy" src="https://images.unsplash.com/photo-1583846783214-7229a91b20ed?auto=format&fit=crop&w=900&q=80" alt="Hands working fine gold embroidery on fabric" />
      <span class="frame"></span>
      <span class="tag">The Atelier · Mumbai</span>
    </figure>
    <div class="story-body">
      <span class="eyebrow r-up">The Maison</span>
      <h2 class="section-title r-up">Every embellishment <span class="serif-i">tells a story.</span></h2>
      <div data-stagger>
        <p class="lead">PRIVAARA is a house devoted to the slow art of surface embellishment. Each commission begins as bare cloth and is transformed, stitch by stitch, into a surface that holds light, movement and meaning.</p>
        <p>Our karigars carry techniques passed through generations — zardozi laid in real metal, kardana set by hand, beadwork counted bead by bead. We pair that lineage with a modern eye for proportion, restraint and finish, so that every metre we touch feels both timeless and entirely of its moment.</p>
      </div>
      <div class="story-sign r-up">
        <span class="stitch"></span>
        <span class="sg">Privaara</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="services" id="services">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">The Atelier</span>
      <h2 class="section-title r-up">Eight disciplines, one obsession.</h2>
    </div>
    <div class="svc-grid" data-svc-grid></div>
  </div>
</section>

<!-- ===== RUNWAY (horizontal) ===== -->
<section class="runway" id="runway">
  <div class="rw-head">
    <span class="eyebrow r-up">Signature Craftsmanship</span>
    <h2 class="section-title r-up">The runway of the hand.</h2>
  </div>
  <div class="rw-track-outer">
    <div class="rw-track" id="rwTrack">
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">01</span><img loading="lazy" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=80" alt="Hand embroidery detail" /></div>
        <div class="rw-meta"><span class="eyebrow">Heritage</span><h3>Hand Embroidery</h3><p>Couched, satin and chain stitches worked freehand, building dense relief and painterly tonal shifts no machine can imitate.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">02</span><img loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1100&q=80" alt="Intricate beadwork" /></div>
        <div class="rw-meta"><span class="eyebrow">Light</span><h3>Intricate Beading</h3><p>Glass, crystal and pearl set bead by bead into flowing motifs that catch and scatter light with every movement.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">03</span><img loading="lazy" src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1100&q=80" alt="Zardozi metal embroidery" /></div>
        <div class="rw-meta"><span class="eyebrow">Lineage</span><h3>Traditional Zardozi</h3><p>Real metallic threads laid over raised cotton padding — the regal goldwork of the courts, rendered with modern precision.</p></div>
      </article>
      <article class="rw-panel">
        <div class="rw-fig"><span class="rn">04</span><img loading="lazy" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1100&q=80" alt="Modern digital textile printing" /></div>
        <div class="rw-meta"><span class="eyebrow">Future</span><h3>Modern Digital Printing</h3><p>Archival pigment printing for photographic depth and limitless palettes — heritage craft answered in a contemporary voice.</p></div>
      </article>
    </div>
  </div>
  <div class="rw-prog"><span id="rwProg"></span></div>
</section>

<!-- ===== STATS ===== -->
<section class="stats" id="stats">
  <div class="wrap">
    <div class="stats-grid" data-stagger>
      <div class="stat"><div class="sv"><span data-count="20">0</span><span class="suf">+</span></div><div class="sl">Years of Craftsmanship</div></div>
      <div class="stat"><div class="sv"><span data-count="500">0</span><span class="suf">+</span></div><div class="sl">Designs Created</div></div>
      <div class="stat"><div class="sv"><span data-count="1000">0</span><span class="suf">+</span></div><div class="sl">Fabric Concepts</div></div>
      <div class="stat"><div class="sv"><span data-count="100">0</span><span class="suf">%</span></div><div class="sl">Handmade Excellence</div></div>
    </div>
  </div>
</section>

<!-- ===== WHY ===== -->
<section class="why" id="why">
  <div class="wrap why-grid">
    <div class="why-fig story-fig r-up" data-fig style="aspect-ratio:4/5">
      <img loading="lazy" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80" alt="Detail of luxury embellished couture fabric" />
      <span class="frame"></span>
      <span class="tag">Maison de Privaara</span>
    </div>
    <div>
      <span class="eyebrow r-up">Why Privaara</span>
      <h2 class="section-title r-up" style="margin:16px 0 30px">Held to a couture standard.</h2>
      <div class="why-list" data-stagger>
        <div class="why-item"><span class="wn">01</span><div class="wbody"><div class="wt">Artisanal Craftsmanship</div><div class="wd">Every piece is worked entirely by hand by master karigars.</div></div></div>
        <div class="why-item"><span class="wn">02</span><div class="wbody"><div class="wt">Precision Detailing</div><div class="wd">Tolerances measured in millimetres; finishes inspected thread by thread.</div></div></div>
        <div class="why-item"><span class="wn">03</span><div class="wbody"><div class="wt">Premium Materials</div><div class="wd">Real metal, fine glass crystal and noble fibres, sourced without compromise.</div></div></div>
        <div class="why-item"><span class="wn">04</span><div class="wbody"><div class="wt">Custom Design Capability</div><div class="wd">Bespoke motifs developed from a single sketch or a single word.</div></div></div>
        <div class="why-item"><span class="wn">05</span><div class="wbody"><div class="wt">Global Fashion Standards</div><div class="wd">Trusted by houses and ateliers across international runways.</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ===== GALLERY ===== -->
<section class="gallery" id="gallery">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">The Gallery</span>
      <h2 class="section-title r-up">An archive of surfaces.</h2>
    </div>
    <div class="masonry" data-masonry></div>
  </div>
</section>

<!-- ===== PROCESS ===== -->
<section class="process" id="process">
  <div class="wrap">
    <div class="head">
      <span class="eyebrow r-up">The Process</span>
      <h2 class="section-title r-up">From concept to couture.</h2>
    </div>
    <div class="pline" id="pline" data-stagger>
      <div class="pstep"><div class="pdot"></div><div class="pn">01</div><div class="pt">Concept</div><div class="pdesc">We listen, sketch and define the aura the cloth must carry.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">02</div><div class="pt">Design</div><div class="pdesc">Motifs are drawn, palettes set and materials selected.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">03</div><div class="pt">Sampling</div><div class="pdesc">Swatches are worked and refined until the hand is right.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">04</div><div class="pt">Hand Crafting</div><div class="pdesc">Karigars build the surface stitch by deliberate stitch.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">05</div><div class="pt">Finishing</div><div class="pdesc">Edges cleaned, weights balanced, every bead secured.</div></div>
      <div class="pstep"><div class="pdot"></div><div class="pn">06</div><div class="pt">Delivery</div><div class="pdesc">The finished metre is presented, archived and dispatched.</div></div>
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

<!-- ===== FINAL CTA ===== -->
<section class="final" id="contact">
  <div class="wrap">
    <span class="eyebrow r-up">Commission</span>
    <h2 class="r-up">Let's create something <span class="serif-i">extraordinary.</span></h2>
    <p class="lead r-up">From a single bespoke metre to an entire couture collection — begin a conversation with the atelier.</p>
    <div class="r-up"><a href="mailto:atelier@privaara.com" class="btn btn-gold magnetic"><span class="bt">Begin Your Journey</span></a></div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="wrap">
    <div class="foot-top">
      <div class="foot-brand">
        <img src="/logo-full.png" alt="PRIVAARA" />
        <p>A couture atelier of surface embellishment and textile artistry. Own your aura.</p>
      </div>
      <div class="foot-col">
        <h4>Atelier</h4>
        <a href="#services" data-link>Embroidery</a>
        <a href="#services" data-link>Zardozi</a>
        <a href="#services" data-link>Beading</a>
        <a href="#runway" data-link>Craftsmanship</a>
      </div>
      <div class="foot-col">
        <h4>Maison</h4>
        <a href="#story" data-link>Our Story</a>
        <a href="#why" data-link>Why Privaara</a>
        <a href="#gallery" data-link>Gallery</a>
        <a href="#process" data-link>Process</a>
      </div>
      <div class="foot-col">
        <h4>The Newsletter</h4>
        <p style="margin-bottom:4px">Receive seasonal lookbooks and atelier notes.</p>
        <div class="news">
          <input type="email" placeholder="Your email" aria-label="Email" id="newsEmail" />
          <button id="newsBtn">Join</button>
        </div>
        <p style="margin-top:24px">atelier@privaara.com<br/>Kala Ghoda, Mumbai 400001</p>
      </div>
    </div>
    <div class="foot-bottom">
      <p>© 2026 PRIVAARA · Own Your Aura</p>
      <div class="foot-social">
        <a href="#" data-link>Instagram</a>
        <a href="#" data-link>Pinterest</a>
        <a href="#" data-link>LinkedIn</a>
      </div>
      <p>Crafted in India</p>
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
        <title>PRIVAARA — Own Your Aura | Luxury Surface Embellishment & Textile Artistry</title>
        <meta name="description" content="PRIVAARA is a couture atelier of surface embellishment — hand embroidery, zardozi, beading, kardana, sequence and fine printing. We craft luxury into every thread." />
        <meta name="theme-color" content="#04153D" />
        <meta property="og:title" content="PRIVAARA — Own Your Aura" />
        <meta property="og:description" content="Masters of surface embellishment and textile artistry." />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  )
}
