const statsData = [
  { label: "No. of Projects Delivered", value: "900+" },
  { label: "Sq. Ft. Spaces Executed", value: "70+ Million" },
  { label: "Team Members", value: "5000+" },
  { label: "Pan India Office", value: "9+" },
  { label: "Years of Experience", value: "30+" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-label">{stat.label}</span>
              <h2 className="stat-value">{stat.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
