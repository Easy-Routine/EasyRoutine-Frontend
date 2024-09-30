import Accordion from "components/box/Accordion/Accordion";
import styled from "styled-components";
import { RoutineConfig, SetConfig, WorkoutConfig } from "types/config";
import RoutineProgressAccordion from "./WorkoutProgressAccordion";
import SeatedRowImage from "assets/image/seated-row.png";
import { useState } from "react";
import { RoutineRecord, SetRecord } from "types/recrod";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RoutineProgressListView = () => {
    const data: RoutineConfig = {
        id: "1",
        name: "월요일 루틴",
        color: "tomato",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        workoutConfigs: [
            {
                id: "1",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
            {
                id: "2",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
            {
                id: "3",
                name: "벤치프레스",
                workoutImage: SeatedRowImage,
                type: "weight,rep",
                createdAt: new Date(),
                updatedAt: new Date(),
                routineConfigId: "1",
                setConfigs: [
                    {
                        id: "1",
                        order: 1,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "2",
                        order: 2,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                    {
                        id: "3",
                        order: 3,
                        weight: 50,
                        rep: 10,
                        restSec: 10,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        workoutConfigId: "1",
                    },
                ],
            },
        ],
    };

    const [routineConfigState, setRoutineConfigState] = useState(data);

    const handleSetCreate = (
        workoutConfigId: string,
        setConfigs: SetConfig[]
    ) => {
        const newRoutineConfigState = structuredClone(routineConfigState);
        const selectedWorkoutConfig = newRoutineConfigState.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig.id === workoutConfigId
        );
        if (selectedWorkoutConfig) {
            selectedWorkoutConfig.setConfigs = setConfigs;
        }
        console.log(newRoutineConfigState);
        setRoutineConfigState(newRoutineConfigState);
    };

    const handleSetDelete = (
        workoutConfigId: string,
        setConfigs: SetConfig[]
    ) => {
        const newRoutineConfigState = structuredClone(routineConfigState);
        const selectedWorkoutConfig = newRoutineConfigState.workoutConfigs.find(
            (workoutConfig: WorkoutConfig) =>
                workoutConfig.id === workoutConfigId
        );
        if (selectedWorkoutConfig) {
            selectedWorkoutConfig.setConfigs = setConfigs;
        }
        console.log(newRoutineConfigState);
        setRoutineConfigState(newRoutineConfigState);
    };

    return (
        <Container>
            <Accordion.List<WorkoutConfig>
                data={routineConfigState.workoutConfigs}
                render={(item) => (
                    <RoutineProgressAccordion
                        data={item}
                        onSetCreate={handleSetCreate}
                        onSetDelete={handleSetDelete}
                    />
                )}
            />
        </Container>
    );
};

export default RoutineProgressListView;
