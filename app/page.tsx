import LogoSW from '@/components/LogoSW';
import AssetScene from '@/components/AssetScene';
import Ticker from '@/components/Ticker';
import { listings } from '@/lib/data';

export default function Page() {
  const featured = listings.slice(0, 3);
  const grid = listings;

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <LogoSW size={48} />
            <div className="title">SPONSORWINS</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div>
            <h1>Bid. Win. Sponsor the Game.</h1>
            <p>Season-long packages, single-game features, and arena takeovers across NFL, NBA, NHL, MLB, and MLS.</p>
            <a className="cta" href="#">Create a Verified Account to Bid</a>
            <div className="pills" style={{marginTop:18}}>
              <span className="pill">NFL</span>
              <span className="pill">NBA</span>
              <span className="pill">NHL</span>
              <span className="pill">MLB</span>
              <span className="pill">MLS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Row */}
      <main className="wrap">
        <section className="section" aria-label="Live Auctions">
          <h2>Live Auctions</h2>
          <div className="row">
            {featured.map(item => (
              <article className="card" key={item.team + item.asset}>
                <div className="media">
                  <AssetScene asset={item.asset} team={item.team} />
                </div>
                <div className="meta">
                  <div className="asset">{item.asset}</div>
                  <div className="team"><span className="crest">{item.team.split(' ').map(w=>w[0]).slice(0,2).join('')}</span> {item.team}</div>
                  <div className="note">{item.stadium} • {item.league} • Reserve ${item.price.toLocaleString()}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Listings Grid */}
        <section className="grid" aria-label="Listings">
          <div className="grid-head">
            <strong>Featured Sponsorships</strong>
            <span className="pill" style={{borderRadius:10}}>Shuffle</span>
          </div>
          <div className="grid-body">
            {grid.map(item => (
              <article className="card bigcard" key={item.team + item.asset + 'grid'}>
                <div className="thumb media">
                  <AssetScene asset={item.asset} team={item.team} />
                </div>
                <div className="meta">
                  <div className="asset">{item.asset}</div>
                  <div style={{opacity:.9}}>{item.team}</div>
                  <div style={{opacity:.75}}>{item.stadium} • {item.league}</div>
                  <div style={{fontWeight:900, marginTop:6}}>${item.price.toLocaleString()}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Ticker />

      <footer className="wrap" style={{textAlign:'center', color:'#9fb0cc'}}>
        © 2025 SponsorWins — Staging Prototype
      </footer>
    </>
  );
}
