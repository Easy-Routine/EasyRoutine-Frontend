import React, { useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Dot,
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
    const { color, fontSize } = useTheme();
    const [activeTick, setActiveTick] = useState(null); // 클릭된 tick을 저장

    const handleDotClick = (data: any) => {
        console.log("Clicked data point:", data);
        setActiveTick(data.payload.month); // 클릭한 tick의 월을 상태로 설정
    };

    const CustomTick = ({ x, y, payload }: any) => {
        console.log(payload, payload.value, activeTick);
        const isActive = payload.value === activeTick; // 현재 tick이 활성화된 tick인지 확인
        const tickWidth = 42; // 배경의 너비
        const tickHeight = 22; // 배경의 높이

        return (
            <g transform={`translate(${x},${y})`}>
                {isActive && (
                    <rect
                        x={-tickWidth / 2}
                        y={-tickHeight / 2 - 5} // 배경을 올리기 위해 Y 좌표를 더 위로 설정
                        width={tickWidth}
                        height={tickHeight}
                        fill={color.primary} // 배경 색상
                        rx={12.5} // 모서리 둥글기
                    />
                )}
                <text
                    x={0}
                    y={0} // 텍스트의 Y 좌표는 그대로 유지
                    textAnchor="middle"
                    fill={isActive ? color.text.white : "#666"}
                    fontSize={fontSize.md} // 크기 조정
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{ top: 60, right: 40, left: 40, bottom: 20 }}
            >
                <CartesianGrid
                    horizontal={false}
                    stroke="#F4F4F4" // 연한 색상으로 설정
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#0066FF"
                            stopOpacity={0.2}
                        />
                        <stop
                            offset="95%"
                            stopColor="#0066FF"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomTick />} // 커스텀 tick 컴포넌트 사용
                />
                <YAxis width={0} display={"none"} />

                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={color.primary}
                    strokeWidth={5}
                    dot={<CustomDot onClick={handleDotClick} />}
                    activeDot={{ r: 0 }}
                    fillOpacity={1}
                    fill="url(#gradient)"
                />

                <Tooltip />
            </AreaChart>
        </ResponsiveContainer>
    );
};

const CustomDot = (props: any) => {
    const { cx, cy, value, onClick, payload } = props;

    return (
        <Dot
            cx={cx}
            cy={cy}
            r={4} // 점의 반지름
            stroke={props.stroke}
            strokeWidth={6}
            fill={props.fill}
            onClick={() => onClick({ cx, cy, value, onClick, payload })} // 클릭 시 데이터 포인트 정보 전달
            style={{ cursor: "pointer" }} // 포인터 커서 적용
        />
    );
};

export default Graph;
