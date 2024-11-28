import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useThrowError from "hooks/client/useThrowError";
import useCreateWorkoutLibraryOneMutation from "hooks/server/useCreateWorkoutLibraryOneMutation";
import useToast from "hooks/useToast";
import { Category, Type } from "types/enum";

type WorkoutLibraryCreateFloatingActionButtonProps = {
    onButtonClick: (workoutLibraryId: string) => void;
};

const WorkoutLibraryCreateFloatingActionButton = ({
    onButtonClick,
}: WorkoutLibraryCreateFloatingActionButtonProps) => {
    const { showToast } = useToast();
    const { throwError } = useThrowError();

    const { mutateAsync: createWorkoutLibraryOneMutate } =
        useCreateWorkoutLibraryOneMutation();

    const handleButtonClick = async () => {
        // TODO: 워크아웃 라이브러리 생성 API 연결
        const userId = localStorage.getItem("userId");
        await throwError({
            fetchFn: async () =>
                await createWorkoutLibraryOneMutate({
                    name: "새 종목",
                    image: "",
                    category: Category.CHEST,
                    type: [Type.REP, Type.WEIGHT],
                    isEditable: true,
                    userId: userId,
                }),
            onSuccess: (response) => {
                showToast("운동 종목이 추가되었습니다.", "success");

                if (response) {
                    onButtonClick(response._id);
                }
            },
        });
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default WorkoutLibraryCreateFloatingActionButton;
