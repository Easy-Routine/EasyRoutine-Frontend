import useRoutineHistoryExerciseVolumeByPeriodAllGetQuery from "hooks/server/useRoutineHistoryExerciseVolumeByPeriodAllGetQuery";
import {useState, useEffect, useMemo} from "react";
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
import {Period, Type} from "types/enum";
import {useRoutineHistoryChartGet} from "./RoutineHistoryChartGetProvider";
import moment from "moment";

type RoutineHistoryExerciseVolumeGraphProps = {};

const TypeMapper: Record<Type, string> = {
    [Type.WEIGHT]: "무게",
    [Type.TIME]: "시간",
    [Type.COUNT]: "횟수",
};

const RoutineHistoryExerciseVolumeGraph =
    ({}: RoutineHistoryExerciseVolumeGraphProps) => {
        const {exerciseId, period, type} = useRoutineHistoryChartGet();

        const {data: workoutRecordSumListByDate} =
            useRoutineHistoryExerciseVolumeByPeriodAllGetQuery({
                exerciseId,
                period,
                type: (type ?? Type.WEIGHT) as Type,
            });

        // ✅ 방어 처리: undefined일 경우 빈 배열로
        const data = workoutRecordSumListByDate ?? [];

        const {color, fontSize} = useTheme();
        const [activeTick, setActiveTick] = useState<string | null>(null);
        const [tickSize, setTickSize] = useState({
            width: 42,
            height: 22,
            font: fontSize.md,
        });

        const handleDotClick = (data: any) => {
            setActiveTick(data.payload.key);
        };

        // ✅ x축에 표시할 최대 5개의 날짜 인덱스 구하기
        const visibleTickIndexes = useMemo(() => {
            const maxTicks = 4;
            const len = data.length;
            if (len <= maxTicks) {
                return data.map((_, i) => i);
            }
            const step = Math.floor(len / (maxTicks - 1));
            const indexes = [];
            for (let i = 0; i < len; i += step) {
                indexes.push(i);
            }
            if (indexes[indexes.length - 1] !== len - 1) {
                indexes.push(len - 1); // 마지막 tick 보장
            }
            return indexes;
        }, [data]);

        const shouldShowDots = useMemo(() => {
            return data.length <= 5;
        }, [data.length]);

        const CustomTick = ({x, y, payload, index}: any) => {
            const isVisible = visibleTickIndexes.includes(index);
            const isActive = payload.value === activeTick;

            if (!isVisible) return null;

            const label = moment(payload.value).format("M월 D일");

            return (
                <g transform={`translate(${x},${y})`}>
                    {isActive && (
                        <rect
                            x={-tickSize.width / 2}
                            y={-tickSize.height / 2 - 5}
                            width={tickSize.width}
                            height={tickSize.height}
                            fill={color.primary}
                            rx={12.5}
                        />
                    )}
                    <text
                        width={20}
                        x={0}
                        y={20}
                        textAnchor="middle"
                        fill={isActive ? color.text.white : "#666"}
                        fontSize={tickSize.font}
                    >
                        {label}
                    </text>
                </g>
            );
        };

        const updateTickSize = () => {
            const width = window.innerWidth < 360 ? 30 : 42;
            const height = window.innerWidth < 360 ? 18 : 22;
            const font = window.innerWidth < 360 ? fontSize.xxs : fontSize.xs;
            setTickSize({width, height, font});
        };

        useEffect(() => {
            updateTickSize();
            window.addEventListener("resize", updateTickSize);
            return () => {
                window.removeEventListener("resize", updateTickSize);
            };
        }, []);

        return (
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    data={data}
                    margin={{top: 10, right: 20, left: 20, bottom: 10}}
                >
                    <CartesianGrid horizontal={false} stroke="#F4F4F4" />
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
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
                        dataKey="key"
                        axisLine={false}
                        tickLine={false}
                        tick={<CustomTick />}
                        interval={0} // 무시됨, 커스텀 tick에서 직접 조절
                    />
                    <YAxis width={0} display={"none"} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke={color.primary}
                        strokeWidth={3.5}
                        dot={
                            shouldShowDots ? (
                                <CustomDot onClick={handleDotClick} />
                            ) : (
                                false
                            )
                        }
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
            r={3}
            stroke={props.stroke}
            strokeWidth={5}
            fill={props.fill}
            onClick={() => onClick({cx, cy, value, onClick, payload})}
            style={{cursor: "pointer"}}
        />
    );
};

interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
    const {type} = useRoutineHistoryChartGet();

    if (active && payload && payload.length) {
        const value = payload[0].value;
        const date = moment(payload[0].payload.key).format("M월 D일");

        return (
            <div
                style={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    padding: "8px",
                }}
            >
                <p>{`날짜: ${date}`}</p>
                <p>{`${TypeMapper[type as Type]}: ${value}`}</p>
            </div>
        );
    }
    return null;
};

export default RoutineHistoryExerciseVolumeGraph;
