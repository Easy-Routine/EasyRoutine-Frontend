import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useToast from "hooks/useToast";

type WorkoutLibraryCreateFloatingActionButtonProps = {
    onButtonClick: (workoutLibraryId: string) => void;
};

const WorkoutLibraryCreateFloatingActionButton = ({
    onButtonClick,
}: WorkoutLibraryCreateFloatingActionButtonProps) => {
    const { showToast } = useToast();

    const handleButtonClick = () => {
        // TODO: 워크아웃 라이브러리 생성 API 연결
        showToast("운동 종목이 추가되었습니다.");
        onButtonClick("2");
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default WorkoutLibraryCreateFloatingActionButton;
