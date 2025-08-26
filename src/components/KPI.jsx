export default function KPI({ label, value, note }) {
  return (
    <div className="card p-5">
      <div className="text-2xl font-semibold text-cyan">{value}</div>
      <div className="text-white/80 mt-1">{label}</div>
      {note && <div className="text-white/60 text-sm mt-2">{note}</div>}
    </div>
  );
}
