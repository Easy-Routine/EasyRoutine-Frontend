import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";

type WorkoutLibraryCreateFloatingActionButtonProps = {
    onButtonClick: (workoutLibraryId: string) => void;
};

const WorkoutLibraryCreateFloatingActionButton = ({
    onButtonClick,
}: WorkoutLibraryCreateFloatingActionButtonProps) => {
    const handleButtonClick = () => {
        // TODO: 워크아웃 라이브러리 생성 API 연결
        onButtonClick("2");
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default WorkoutLibraryCreateFloatingActionButton;
