export default function Ticker() {
  const items = [
    'Aurora Health bid $45,000 on Helmet Logo • Portland Lumberjacks (NFL)',
    'Beacon Coffee bid $38,500 on Videoboard • Portland Pioneers (NBA)',
    'Solarix Energy bid $28,900 on Outfield Wall • Portland Beavers (MLB)',
    'Skyline Tech bid $27,300 on Jersey Patch • Las Vegas Outlaws (NBA)',
    'NovaCloud bid $16,200 on Pitch-Level • Las Vegas Scorpions (MLS)'
  ];
  return (
    <section className="ticker-wrap" aria-label="Recent Activity">
      <div className="t-title">RECENT ACTIVITY</div>
      <div className="t-viewport">
        <div className="t-track">
          {items.concat(items).map((txt, i) => (
            <span className="t-item" key={i}><span className="dot" /> {txt}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
