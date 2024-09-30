import Accordion from "components/box/Accordion/Accordion";
import RoutineConfigAccordion from "./RoutineConfigAccordion/RoutineConfigAccordion";
import { RoutineConfig } from "types/config";
import SeatedRowImage from "assets/image/seated-row.png";

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
        <Accordion.List
            data={data}
            render={(item) => <RoutineConfigAccordion data={item} />}
        />
    );
};

export default RoutineConfigAccordionList;
