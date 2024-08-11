import Accordion from "components/template/Accordion";
import AccordionList from "components/template/Accordion/AccordionList";
import InputGroupList from "components/template/InputGroup/InputGroupList";
import ProgressForm from "components/template/ProgressForm/ProgressForm";
import React from "react";
import { useTheme } from "styled-components";
import { SetConfig } from "types/set-config";
import { WorkoutConfig } from "types/workout-config";
import { ReactComponent as MinusIcon } from "assets/image/minus.svg";
import { ReactComponent as PlusIcon } from "assets/image/plus2.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";

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
                                <SetProgressInputGroupList setConfigList={workoutConfig.setConfigList} type={workoutConfig.type} />

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

type SetProgressInputGroupListProps = {
    setConfigList: SetConfig[];
    type: string;
}

const SetProgressInputGroupList = ({setConfigList, type}: SetProgressInputGroupListProps) => {
    
    return (
        <InputGroupList<SetConfig>
            data={setConfigList}
            render={(setConfig) => (
                <SetProgressInputGroup setConfig={setConfig} type={type} />
            )}
        />
    )
}

type SetProgressInputGroupProps = {
    setConfig: SetConfig;
    type: string;
}

const SetProgressInputGroup = ({setConfig, type}:SetProgressInputGroupProps) => {

    const renderInputsByType = (type: string) => {
        const components: React.ReactNode[] = [];

        if (type.includes("weight")) {
            components.push(
                <ProgressForm.Input
                    key="weight"
                    value={setConfig.weight.toString()}
                    onInputChange={() => console.log("Weight input changed")}
                />
            );
        }

        if (type.includes("rep")) {
            components.push(
                <ProgressForm.Input
                    key="rep"
                    value={setConfig.rep.toString()}
                    onInputChange={() => console.log("Rep input changed")}
                />
            );
        }
        // workoutSec으로 교체 하기
        if (type.includes("workoutSec")) {
            components.push(
                <ProgressForm.Input
                    key="workoutSec"
                    value={setConfig.restSec.toString()}
                    onInputChange={() => console.log("Time input changed")}
                />
            );
        }

        return components;
    };

    return (
        <ProgressForm.InputGroup id={setConfig.id.toString()}>
            <ProgressForm.Input value={setConfig.order.toString()} onInputChange={() => console.log("hi")}/>
            {renderInputsByType(type)}
            <ProgressForm.Input value={setConfig.restSec.toString()} onInputChange={() => console.log("hi")}/>
        </ProgressForm.InputGroup>
    )
}