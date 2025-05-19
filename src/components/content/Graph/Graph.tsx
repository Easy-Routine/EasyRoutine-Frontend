import usegetExerciseSumAllQuery from "hooks/server/usegetExerciseSumAllQuery";
import {useState, useEffect} from "react";
import {TooltipProps} from "recharts";
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
import {useTheme} from "styled-components";
import {Period} from "types/enum";

type GraphProps = {
    onDotClick: (data: any) => void; // dot click event handler
    // data: any[];
    lineKey: string;
    areaKey: string;
    workoutLibraryId: string;
    selectedValue: string;
};

const Graph = ({
    onDotClick,
    // data,
    lineKey,
    areaKey,
    workoutLibraryId,
    selectedValue,
}: GraphProps) => {
    const {data: workoutRecordSumListByDate} = usegetExerciseSumAllQuery({
        workoutLibraryId,
        period: selectedValue as Period,
    });

    const data = workoutRecordSumListByDate!;

    const {color, fontSize} = useTheme();
    const [activeTick, setActiveTick] = useState(null); // 클릭된 tick을 저장
    const [tickSize, setTickSize] = useState({
        width: 42,
        height: 22,
        font: fontSize.md,
    }); // 커스텀 tick의 크기 상태

    const handleDotClick = (data: any) => {
        onDotClick(data);
        setActiveTick(data.payload.month); // 클릭한 tick의 월을 상태로 설정
    };

    const CustomTick = ({x, y, payload}: any) => {
        const isActive = payload.value === activeTick; // 현재 tick이 활성화된 tick인지 확인

        return (
            <g transform={`translate(${x},${y})`}>
                {isActive && (
                    <rect
                        x={-tickSize.width / 2}
                        y={-tickSize.height / 2 - 5} // 배경을 올리기 위해 Y 좌표를 더 위로 설정
                        width={tickSize.width}
                        height={tickSize.height}
                        fill={color.primary} // 배경 색상
                        rx={12.5} // 모서리 둥글기
                    />
                )}
                <text
                    width={20}
                    x={0}
                    y={20} // 텍스트의 Y 좌표는 그대로 유지
                    textAnchor="middle"
                    fill={isActive ? color.text.white : "#666"}
                    size={tickSize.font} // 크기 조정
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    // 뷰포트 크기에 따라 tick 크기 조정
    const updateTickSize = () => {
        const width = window.innerWidth < 360 ? 30 : 42; // 화면 크기에 따라 너비 조정
        const height = window.innerWidth < 360 ? 18 : 22; // 화면 크기에 따라 높이 조정
        const font = window.innerWidth < 360 ? fontSize.xxs : fontSize.xs;
        setTickSize({width, height, font});
    };

    useEffect(() => {
        updateTickSize(); // 초기 크기 설정
        window.addEventListener("resize", updateTickSize); // 리사이즈 이벤트 리스너 추가
        return () => {
            window.removeEventListener("resize", updateTickSize); // 리스너 제거
        };
    }, []);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                data={data}
                margin={{top: 60, right: 40, left: 40, bottom: 20}}
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
                    dataKey={lineKey}
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomTick />} // 커스텀 tick 컴포넌트 사용
                    interval={1} // 모든 tick 표시
                />
                <YAxis width={0} display={"none"} />

                <Area
                    type="monotone"
                    dataKey={areaKey}
                    stroke={color.primary}
                    strokeWidth={3.5}
                    dot={<CustomDot onClick={handleDotClick} />}
                    activeDot={{r: 7.5}}
                    fillOpacity={3}
                    fill="url(#gradient)"
                />

                <Tooltip content={CustomTooltip} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

const CustomDot = (props: any) => {
    const {cx, cy, value, onClick, payload} = props;

    return (
        <Dot
            cx={cx}
            cy={cy}
            r={3} // 점의 반지름
            stroke={props.stroke}
            strokeWidth={5}
            fill={props.fill}
            onClick={() => onClick({cx, cy, value, onClick, payload})} // 클릭 시 데이터 포인트 정보 전달
            style={{cursor: "pointer"}} // 포인터 커서 적용
        />
    );
};

interface CustomTooltipProps extends TooltipProps<number, string> {
    // 특정 데이터 타입에 맞게 수정할 수 있습니다.
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
    if (active && payload && payload.length) {
        const value = payload[0].value; // 원하는 데이터 값을 가져옵니다.
        const date = payload[0].payload.key; // 날짜 데이터를 가져옵니다.

        return (
            <div>
                <p>{`날짜: ${date}`}</p>
                <p>{`볼륨: ${value}`}</p>
            </div>
        );
    }

    return null;
};

export default Graph;
