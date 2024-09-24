import {
    LineChart,
    Line,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styled, { useTheme } from "styled-components";

const data = [
    { month: "10월", value: 400 },
    { month: "11월", value: 300 },
    { month: "12월", value: 200 },
    { month: "1월", value: 278 },
    { month: "2월", value: 189 },
    { month: "3월", value: 400 },
    { month: "4월", value: 300 },
];

const Graph = () => {
    const { color } = useTheme();
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 60, right: 40, left: 40, bottom: 30 }} // 여백 설정
            >
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis width={0} stroke="none" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke={color.primary}
                    strokeWidth={5}
                    dot={{ stroke: color.primary, strokeWidth: 6, r: 8 }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Graph;
