"use client";

// Imports from Recharts for the chart
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

// Imports from ShadCN for the card styling
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Hard-coded mock data as per the plan
const MOCK_DATA = [
  { name: "Mon", sent: 12, received: 10 },
  { name: "Tue", sent: 8, received: 15 },
  { name: "Wed", sent: 20, received: 12 },
  { name: "Thu", sent: 15, received: 18 },
  { name: "Fri", sent: 22, received: 25 },
  { name: "Sat", sent: 30, received: 20 },
  { name: "Sun", sent: 18, received: 22 },
];

export function AnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message Volume</CardTitle>
        <CardDescription>
          Messages sent and received in the last 7 days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Responsive container is essential for chart scaling */}
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MOCK_DATA}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="sent"
                stroke="var(--color-primary)" // Uses CSS var from globals.css
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="received"
                stroke="var(--color-secondary)" // Uses CSS var from globals.css
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}