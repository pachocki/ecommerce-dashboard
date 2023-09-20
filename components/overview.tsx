"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface OverviewProps {
  data: any[];
}
const Overview: React.FC<OverviewProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400} >
      <BarChart data={data}>
        <XAxis
          dataKey="name"
      
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
         
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />

        <Bar dataKey="total" fill="#5dbb00"  radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Overview;
