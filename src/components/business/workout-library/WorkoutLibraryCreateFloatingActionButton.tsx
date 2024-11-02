import FloatingActionButton from "components/content/FloatingActionButton/FloatingActionButton";
import useCreateWorkoutLibraryOneMutation from "hooks/server/useCreateWorkoutLibraryOneMutation";
import useToast from "hooks/useToast";
import { useRecoilValue } from "recoil";
import { userContextStore } from "store/userContextStore";
import { Category } from "type/Category";
import { Type } from "type/Type";

type WorkoutLibraryCreateFloatingActionButtonProps = {
    onButtonClick: (workoutLibraryId: string) => void;
};

const WorkoutLibraryCreateFloatingActionButton = ({
    onButtonClick,
}: WorkoutLibraryCreateFloatingActionButtonProps) => {
    const { showToast } = useToast();
    const { mutateAsync: createWorkoutLibraryOneMutate } =
        useCreateWorkoutLibraryOneMutation();
    const userContext = useRecoilValue(userContextStore);

    const handleButtonClick = async () => {
        // TODO: 워크아웃 라이브러리 생성 API 연결
        const newWorkoutLibraryOne = await createWorkoutLibraryOneMutate({
            name: "새 종목",
            image: "",
            category: Category.CHEST,
            type: [Type.REP, Type.WEIGHT],
            isEditable: true,
            userId: userContext.userId,
        });
        showToast("운동 종목이 추가되었습니다.", "success");

        if (newWorkoutLibraryOne) {
            onButtonClick(newWorkoutLibraryOne._id);
        }
    };

    return <FloatingActionButton onButtonClick={handleButtonClick} />;
};

export default WorkoutLibraryCreateFloatingActionButton;
