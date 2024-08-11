import Accordion from "components/template/Accordion";
import AccordionList from "components/template/Accordion/AccordionList";
import ProgressForm from "components/template/ProgressForm/ProgressForm";
import React from "react";
import { useTheme } from "styled-components";
import { SetConfig } from "types/set-config";
import { WorkoutConfig } from "types/workout-config";
import { ReactComponent as MinusIcon } from "assets/image/minus.svg";
import { ReactComponent as PlusIcon } from "assets/image/plus2.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import Column from "components/template/Table/Column";
import Input from "components/template/Table/Input";
import Table from "components/template/Table/Table";

type WorkoutProgressFormProps = {
    workoutConfigList: WorkoutConfig[],
}


const WorkoutProgressForm = ({workoutConfigList}:WorkoutProgressFormProps) => {
    const theme = useTheme();

    return (
        <ProgressForm data={workoutConfigList}>
            <AccordionList<WorkoutConfig>
                data={workoutConfigList}
                render={(workoutConfig) => (
                    <ProgressForm.Accordion id={workoutConfig.id}>
                        <Accordion.Motion>
                            <Accordion.Header>
                                <Accordion.Card>
                                    <Accordion.ImageBox></Accordion.ImageBox>
                                    <Accordion.ColumnBox>
                                        <Accordion.BoldText>
                                            {workoutConfig.name}
                                        </Accordion.BoldText>
                                        <Accordion.NormalText>
                                            {5}종목
                                        </Accordion.NormalText>
                                    </Accordion.ColumnBox>
                                </Accordion.Card>
                                <Accordion.Trigger>
                                    <ArrowIcon />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Body>
                                <SetProgressTable setConfigList={workoutConfig.setConfigList} type={workoutConfig.type} />
                                <Accordion.BodyFooter>
                                <Accordion.IconText color={theme.color.gray.dark}>
                                    <MinusIcon />
                                    <div>세트 삭제</div>
                                </Accordion.IconText>
                                <Accordion.IconText color={theme.color.primary}>
                                    <PlusIcon />
                                    <div>세트 추가</div>
                                </Accordion.IconText>
                                </Accordion.BodyFooter>
                            </Accordion.Body>
                            <Accordion.DeleteButton />
                        </Accordion.Motion>
                    </ProgressForm.Accordion>
                )}
            />
            <ProgressForm.Button />
        </ProgressForm>
    );
};

export default WorkoutProgressForm;

type SetProgressRowProps = {
    setConfigList: SetConfig[];
    type: string;
}

const SetProgressTable = ({setConfigList, type}: SetProgressRowProps) => {
    const renderColumnsByType = (type: string) => {
        const components: React.ReactNode[] = [];

        if (type.includes("weight")) {
            components.push(
                <SetProgressColumn label={"무게"} setConfigList={setConfigList} name="weight" />
            );
        }

        if (type.includes("rep")) {
            components.push(
                <SetProgressColumn label={"횟수"} setConfigList={setConfigList} name="rep" />
            );
        }
        // workoutSec으로 교체 하기
        if (type.includes("workoutSec")) {
            components.push(
                <SetProgressColumn label={"운동시간"} setConfigList={setConfigList} name="workoutSec" />
            );
        }

        return components;
    };


    return (
        <Table>
            <SetProgressColumn label={"순서"} setConfigList={setConfigList} name="order" />
            {renderColumnsByType(type)}
            <SetProgressColumn label={"휴식"} setConfigList={setConfigList} name="restSec" />
        </Table>
    )
}

type SetProgressColumnProps = {
    label: string;
    setConfigList: SetConfig[];
    name: string;
}

const SetProgressColumn = ({label, setConfigList, name}:SetProgressColumnProps) => {
    return (
        <Table.Column<SetConfig> label={label} data={setConfigList} render={(routineConfig) => (
            <Table.Input
                key={routineConfig.id}
                value={(routineConfig[name as keyof SetConfig])?.toString()} 
                onInputChange={() =>  console.log("ㅎㅇ")}
        />
        )} />
    )
}

