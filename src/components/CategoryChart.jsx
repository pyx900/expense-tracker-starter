function CategoryChart({ transactions }) {
  const categoryTotals = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const entries = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
  const max = entries.length > 0 ? entries[0][1] : 0;

  if (entries.length === 0) return null;

  const colors = {
    housing: '#6b8afd',
    food: '#f59e0b',
    utilities: '#3cc9a1',
    transport: '#a78bfa',
    entertainment: '#f472b6',
    salary: '#60a5fa',
    other: '#9ca0b0',
  };

  return (
    <div className="category-chart">
      <h2>Spending by Category</h2>
      <div className="chart-bars">
        {entries.map(([category, total], i) => (
          <div className="chart-row" key={category} style={{ animationDelay: `${0.06 * i}s` }}>
            <span className="chart-label">{category}</span>
            <div className="chart-track">
              <div
                className="chart-bar"
                style={{
                  width: `${(total / max) * 100}%`,
                  background: colors[category] || colors.other,
                }}
              />
            </div>
            <span className="chart-value">${total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryChart;
