import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>

      {/* This grid layout will allow us to easily add more charts later 
        (e.g., Response Rate, Channel Usage)
      */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Render the static chart component */}
        <AnalyticsChart />

        {/* Placeholder for a second chart */}
        {/* <Card> ... </Card> */}
      </div>
    </div>
  );
}