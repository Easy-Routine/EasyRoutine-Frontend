import Accordion from "components/template/Accordion";
import { ReactComponent as FireIcon } from "assets/image/fire.svg";
import { ReactComponent as ArrowIcon } from "assets/image/arrow.svg";
import { RoutineConfig } from "types/routine-config";
import SeatedRowImage from "assets/image/seated-row.png";
import { WorkoutConfig } from "types/workout-config";
import SmallCard from "components/template/SmallCard/SmallCard";
import SmallCardList from "components/template/SmallCard/SmallCardList";
import AccordionList from "components/template/Accordion/AccordionList";

type RoutineConfigAccordionListProps = {
    routineConfigList: RoutineConfig[];
};

const RoutineConfigAccordionList = ({
    routineConfigList,
}: RoutineConfigAccordionListProps) => {
    return (
        <AccordionList<RoutineConfig>
            data={routineConfigList as RoutineConfig[]}
            render={(routineConfig) => (
                <RoutineConfigAccordion
                    key={routineConfig.id}
                    routineConfig={routineConfig}
                />
            )}
        />
    );
};

export default RoutineConfigAccordionList;

type RoutineConfigAccordionProps = {
    routineConfig: RoutineConfig;
};

const RoutineConfigAccordion = ({
    routineConfig,
}: RoutineConfigAccordionProps) => {
    const data = [{}, {}, {}, {}, {}];
    return (
        <Accordion>
            <Accordion.Motion>
                <Accordion.Header>
                    <Accordion.Card>
                        <Accordion.ImageBox>
                            <FireIcon />
                        </Accordion.ImageBox>
                        <Accordion.ColumnBox>
                            <Accordion.BoldText>
                                {routineConfig.name}
                            </Accordion.BoldText>
                            <Accordion.NormalText>{5}종목</Accordion.NormalText>
                        </Accordion.ColumnBox>
                    </Accordion.Card>
                    <Accordion.Trigger>
                        <ArrowIcon />
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Body>
                    <WorkoutConfigSmallCardList
                        workoutConfigList={data as WorkoutConfig[]}
                    />
                </Accordion.Body>
                <Accordion.DeleteButton />
            </Accordion.Motion>
        </Accordion>
    );
};
type WorkoutConfigSmallCardListProps = {
    workoutConfigList: WorkoutConfig[];
};

const WorkoutConfigSmallCardList = ({
    workoutConfigList,
}: WorkoutConfigSmallCardListProps) => {
    return (
        <SmallCardList<WorkoutConfig>
            data={workoutConfigList}
            render={(workoutConfig) => (
                <WorkoutConfigSmallCard
                    key={workoutConfig.id}
                    workoutConfig={workoutConfig}
                />
            )}
        />
    );
};

type WorkoutConfigSmallCardProps = {
    workoutConfig: WorkoutConfig;
};

const WorkoutConfigSmallCard = ({
    workoutConfig,
}: WorkoutConfigSmallCardProps) => {
    return (
        <SmallCard>
            <SmallCard.ImageBox>
                <img src={SeatedRowImage} alt="seated row" />
            </SmallCard.ImageBox>
            <SmallCard.ColumnBox>
                <SmallCard.BoldText>벤치프레스</SmallCard.BoldText>
                <SmallCard.NormalText>5세트</SmallCard.NormalText>
            </SmallCard.ColumnBox>
        </SmallCard>
    );
};
