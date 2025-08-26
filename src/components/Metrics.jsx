import KPI from "./KPI.jsx";

export default function Metrics() {
  return (
    <section id="metrics" className="mt-20">
      <h2 className="text-2xl font-semibold">Metrics & Achievements</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPI value="99.99%" label="Uptime" note="SLO-backed services" />
        <KPI value="-45%" label="Infra Cost" note="Spot + autoscaling" />
        <KPI value="10x" label="Deploy Frequency" note="Trunk-based" />
        <KPI value="<15 min" label="MTTR" note="Runbooks + alerts" />
      </div>
    </section>
  );
}
