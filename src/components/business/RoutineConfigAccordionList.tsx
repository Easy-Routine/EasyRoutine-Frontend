import Accordion from "components/box/Accordion/Accordion";
import RoutineConfigAccordion from "./RoutineConfigAccordion/RoutineConfigAccordion";
import { RoutineConfig } from "types/config";
import SeatedRowImage from "assets/image/seated-row.png";
import EmptyBoundary from "./EmptyBoundary";
import EmptyView from "components/content/EmptyView/EmptyView";

const RoutineConfigAccordionList = () => {
    const data: RoutineConfig[] = [
        {
            id: "1",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutConfigs: [
                {
                    id: "1",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
            ],
        },
        {
            id: "2",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutConfigs: [
                {
                    id: "1",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
            ],
        },
        {
            id: "3",
            name: "나의 가슴 루틴",
            color: "#f0fff0",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: "3",
            workoutConfigs: [
                {
                    id: "1",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "2",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
                {
                    id: "3",
                    name: "벤치프레스",
                    workoutImage: SeatedRowImage,
                    type: "weight, time",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    routineConfigId: "1",
                    setConfigs: [],
                },
            ],
        },
    ];
    return (
        <EmptyBoundary
            fallback={<EmptyView emptyText="현재 루틴이 없습니다." />}
            data={data}
        >
            <Accordion.List
                data={data}
                render={(item) => <RoutineConfigAccordion data={item} />}
            />
        </EmptyBoundary>
    );
};

export default RoutineConfigAccordionList;
