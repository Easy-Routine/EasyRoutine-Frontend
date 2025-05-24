import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useCreateExerciseOneMutation from "hooks/server/useCreateExerciseOneMutation";
import useToast from "hooks/useToast";
import {Category, Type} from "types/enum";

type ExerciseCreateFloatingActionButtonProps = {
    onButtonClick: (exerciseId: string) => void;
};

const ExerciseCreateFloatingActionButton = ({
    onButtonClick,
}: ExerciseCreateFloatingActionButtonProps) => {
    const {showToast} = useToast();

    const {mutateAsync: createExerciseOneMutate} =
        useCreateExerciseOneMutation();

    const handleButtonClick = async () => {
        // TODO: 워크아웃 라이브러리 생성 API 연결
        const userId = localStorage.getItem("userId");
        const response = await createExerciseOneMutate({
            name: "새 종목",
            image: "",
            category: Category.CHEST,
            type: [Type.REP, Type.WEIGHT],
            isEditable: true,
            userId: userId,
        });

        showToast("운동 종목이 추가되었습니다.", "success");

        if (response) {
            onButtonClick(response.id);
        }
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default ExerciseCreateFloatingActionButton;
