import ProgressProvider from 'context/ProgressContext';
import { useEffect, useRef, useState } from 'react';
import ProgressAccordion from './ProgressAccordion';
import Button from './ProgressButton';
import Input from './Input';
import { WorkoutConfig } from 'types/workout-config';
import ProgressLine from './ProgressLine';
import ProgressLineList from './ProgressLineList';

function* createIterator(workoutConfigList: WorkoutConfig[]) {
    for (const workoutConfig of workoutConfigList) {
        //     for (const setConfig of workoutConfig.setConfigList) {
        //         yield { accordionId: workoutConfig.id, inputId: setConfig.id };
        //     }
    }
}

// 버튼을 누를때마다, 아코디언 1번 인풋 3번
// 인풋 이터레이터가 done이면, 아코디언 이터레이터를 next() 한다.
// 인풋 이터레이터는 각 세트테이블
// [
// {
//setConfigList: [
// {}, {}, {}
// ],
// },
//]
type ProgressFormProps = {
    children: React.ReactNode;
    data: any;
};

const ProgressForm = ({ children, data }: ProgressFormProps) => {
    const [currentItem, setCurrentItem] = useState('');
    const [currentInput, setCurrentInput] = useState('');
    const [model, setModel] = useState<any[]>([]);
    const iteratorRef = useRef<Generator<any, void, unknown>>();
    const [completedInputs, setCompletedInputs] = useState<string[]>([]);

    useEffect(() => {
        if (data) {
            console.log('데이터 실행');
            setModel(data);
            iteratorRef.current = createIterator(data);
        }
    }, [data]);

    return (
        <ProgressProvider
            value={{
                currentItem,
                setCurrentItem,
                currentInput,
                setCurrentInput,
                model,
                iteratorRef,
                completedInputs,
                setCompletedInputs,
            }}
        >
            {children}
        </ProgressProvider>
    );
};
export default ProgressForm;

ProgressForm.Accordion = ProgressAccordion;
ProgressForm.Button = Button;
ProgressForm.ProgressLine = ProgressLine;
ProgressForm.Input = Input;
ProgressForm.ProgressLineList = ProgressLineList;
