import ColorBox from 'components/Accordion/ColorBox';
import Box from 'components/Box/Box';
import Accordion from 'components/template/Accordion';
import FloatingActionButton from 'components/template/FloatingActionButton/FloatingActionButton';
import { css } from 'styled-components';

const routineConfigData = [
    {
        id: 1,
        name: 'Sample Routine',
        color: '#F0FFF0',
        workoutSec: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
    },
    {
        id: 2,
        name: 'Sample Routine',
        color: '#F0FFF0',
        workoutSec: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
    },
    {
        id: 3,
        name: 'Sample Routine',
        color: '#F0FFF0',
        workoutSec: 30000,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
    },
];

const workoutConfigListData = [
    {
        id: '1',
        name: '벤치프레스',
        workoutImage: '샘플이미지',
        type: 'weight,rep,workoutSec',
        createdAt: new Date(),
        updatedAt: new Date(),
        setConfigList: [
            {
                id: '1',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '2',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '3',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
        ],
    },
    {
        id: '2',
        name: '벤치프레스',
        workoutImage: '샘플이미지',
        type: 'weight,rep,workoutSec',
        createdAt: new Date(),
        updatedAt: new Date(),
        setConfigList: [
            {
                id: '4',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '5',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '6',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
        ],
    },
    {
        id: '3',
        name: '벤치프레스',
        workoutImage: '샘플이미지',
        type: 'weight,rep,workoutSec',
        createdAt: new Date(),
        updatedAt: new Date(),
        setConfigList: [
            {
                id: '7',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '8',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
            {
                id: '9',
                order: 1,
                weight: 10,
                rep: 10,
                restSec: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                workoutConfigId: 1,
            },
        ],
    },
];

function App() {
    return (
        <div className="App">
            <Accordion>
                <Accordion.Motion>
                    <Accordion.Header>
                        <Accordion.Card>
                            <Accordion.ImageBox>아이콘</Accordion.ImageBox>
                            <Accordion.ColumnBox>
                                <Accordion.BoldText>이름</Accordion.BoldText>
                                <Accordion.NormalText>{5}종목</Accordion.NormalText>
                            </Accordion.ColumnBox>
                        </Accordion.Card>
                        <Accordion.Trigger>트리거</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion.BodyFooter>바디푸터</Accordion.BodyFooter>
                    </Accordion.Body>
                    <Accordion.DeleteButton />
                </Accordion.Motion>
            </Accordion>
            <FloatingActionButton onButtonClick={() => {}} />
            <ColorBox color={'#455A64'} backgroundColor={'#E6F5FD'} />
        </div>
    );
}

export default App;
