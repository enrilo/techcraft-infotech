export default function HeroSchematic() {
  return (
    <svg viewBox="0 0 420 360" role="img" aria-labelledby="schematic-title" style={{ width: "100%", height: "auto", maxWidth: 420 }}>
      <title id="schematic-title">
        Diagram: Enrilo Tech at the root, connected to its product
        AcadTracker and to its custom web and mobile application work.
      </title>

      {/* connective lines */}
      <path d="M70 60 V 150 H 210" fill="none" stroke="rgba(237,239,234,0.35)" strokeWidth="1.5"/>
      <path d="M70 150 V 260 H 210" fill="none" stroke="rgba(237,239,234,0.35)" strokeWidth="1.5" />

      {/* root node: Enrilo Tech */}
      <rect x="10" y="30" width="120" height="60" fill="none" stroke="#B8863B" strokeWidth="1.5" />
      <text x="70" y="55" textAnchor="middle" fontFamily="IBM Plex Serif, serif" fontSize="13" fill="#EDEFEA">
        Enrilo
      </text>
      <text x="70" y="72" textAnchor="middle" fontFamily="IBM Plex Serif, serif" fontSize="13" fill="#EDEFEA">
        Tech
      </text>

      {/* product node: AcadTracker */}
      <rect x="210" y="120" width="150" height="60" fill="none" stroke="rgba(237,239,234,0.55)" strokeWidth="1.5" />
      <text x="285" y="147" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fill="#EDEFEA">
        AcadTracker
      </text>
      <text x="285" y="164" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="10" fill="rgba(237,239,234,0.6)" >
        CRM for education consultancies
      </text>

      {/* custom work node */}
      <rect x="210" y="230" width="150" height="60" fill="none" stroke="rgba(237,239,234,0.55)" strokeWidth="1.5" />
      <text x="285" y="257" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fill="#EDEFEA">
        Custom builds
      </text>
      <text x="285" y="274" textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="10" fill="rgba(237,239,234,0.6)">
        Web &amp; mobile applications
      </text>

      {/* registration marks */}
      <path d="M10 20 V10 H20" fill="none" stroke="#B8863B" strokeWidth="1.5" />
      <path d="M400 340 V350 H390" fill="none" stroke="#B8863B" strokeWidth="1.5"/>
    </svg>
  );
}
