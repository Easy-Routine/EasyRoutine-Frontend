import LabelBox from "components/box/LabelBox/LabelBox";
import Modal from "components/box/Modal/Modal";
import Button from "components/content/Button/Button";
import CheckBoxGroup from "components/content/CheckBoxGroup/CheckBoxGroup";
import ChipTab from "components/content/ChipTab/ChipTab";
import ImageInput from "components/content/ImageInput/ImageInput";
import UnderlineInput from "components/content/UnderlineInput/UnderlineInput";
import useCheckBox from "hooks/client/useCheckBox";
import useInput from "hooks/client/useInput";
import useTab from "hooks/client/useTab";
import useGetWorkoutLibraryOneQuery from "hooks/server/useGetWorkoutLibraryOneQuery";
import useUpdateWorkoutLibraryOneMutation from "hooks/server/useUpdateWorkoutLibraryOneMutation";
import useUploadWorkoutLibraryImageMutation from "hooks/server/useUploadWorkoutLibraryImageMutation";
import Lottie from "lottie-react";
import {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {Category, Type} from "types/enum";
import loadingAnimation from "assets/image/loading.json"; // JSON 파일 경로
import ToolTip from "components/content/ToolTip/ToolTip";
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const CheckBoxItem = styled.div`
    font-size: ${({theme}) => theme.fontSize.md};
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Flex = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

type WorkoutLibraryBottomSheetProps = {
    isOpen: boolean;
    onBackdropClick: () => void;
    onSubmitButtonClick: () => void;
    workoutLibraryId: string;
};

// const initialWorkoutLibraryOne: WorkoutLibrary = {
//     _id: "",
//     name: "",
//     image: "",
//     originImage: "",
//     category: "",
//     type: [],
//     isEditable: true,
//     createdAt: moment().toISOString(),
//     updatedAt: moment().toISOString(),
//     userId: "",
// };

const WorkoutLibraryDetailBottomSheet = ({
    isOpen,
    onBackdropClick,
    onSubmitButtonClick,
    workoutLibraryId,
}: WorkoutLibraryBottomSheetProps) => {
    // TODO: workoutLibraryId로 상세 데이터 가져오기

    const {data: workoutLibraryOneData} =
        useGetWorkoutLibraryOneQuery(workoutLibraryId);

    const workoutLibraryOne = workoutLibraryOneData!;

    const isDisabled = !workoutLibraryOne.isEditable;
    const {value: originImageInputValue, setValue: setOriginImageInputValue} =
        useInput(workoutLibraryOne.originImage);
    const [imageValue, setImageValue] = useState(workoutLibraryOne.image);

    const {
        value: underlineInputValue,
        setValue,
        handleInputChange: handleUnderlineInputChange,
    } = useInput(workoutLibraryOne.name);
    const {
        selectedValue: selectedCategory,
        setSelectedValue,
        handleTabClick: handleCategoryChipTabClick,
    } = useTab(workoutLibraryOne.category, isDisabled);
    const {selectedValues, setSelectedValues, handleCheckBoxClick} =
        useCheckBox(workoutLibraryOne.type, isDisabled);

    const {mutateAsync: updateWorkoutLibraryOneMutate} =
        useUpdateWorkoutLibraryOneMutation();

    const {
        mutateAsync: uploadWorkoutLibraryImageMutation,
        isPending: isUploadWorkoutLibraryImagePending,
    } = useUploadWorkoutLibraryImageMutation();

    useEffect(() => {
        setValue(workoutLibraryOne.name);
        setImageValue(workoutLibraryOne.image);
        setOriginImageInputValue(workoutLibraryOne.originImage);
        setSelectedValue(workoutLibraryOne.category);
        setSelectedValues(workoutLibraryOne.type);
    }, [
        workoutLibraryOne,
        setValue,
        setOriginImageInputValue,
        setSelectedValue,
        setSelectedValues,
    ]);

    const handleImageInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        // handleFileChange(e);
        // TODO: 이미지를 만들고 패스로 반환해주는 API 필요
        // API 통신후 받은 패스로 다시 한번 set해주는 과정이 필요
        // setImageInputValue()

        const file = e.target.files?.[0];
        const formData = new FormData();
        if (file) {
            formData.append("image", file);
            const response = await uploadWorkoutLibraryImageMutation({
                formData,
            });

            const data = response!.data;
            setOriginImageInputValue(data.original);
            console.log("썸넬", data.thumbnail);
            setImageValue(data.thumbnail);
        }
    };

    const handleWorkoutLibraryUpdateButtonClick = async () => {
        await updateWorkoutLibraryOneMutate({
            workoutLibraryId,
            updatedData: {
                image: imageValue,
                originImage: originImageInputValue,
                name: underlineInputValue,
                category: selectedCategory,
                type: selectedValues,
            },
        });
        onSubmitButtonClick();
    };

    return (
        <Modal>
            <Modal.Backdrop isOpen={isOpen} onBackdropClick={onBackdropClick} />
            <Modal.BottomSheet isOpen={isOpen}>
                <Container>
                    <LabelBox labelText="운동 이미지" gap="20px" align="center">
                        <ImageInput
                            value={originImageInputValue}
                            onInputChange={handleImageInputChange}
                            disabled={isDisabled}
                        />
                    </LabelBox>

                    <LabelBox labelText="운동 이름" gap="20px">
                        <UnderlineInput
                            value={underlineInputValue}
                            placeholder="운동 이름을 입력하세요."
                            onInputChange={handleUnderlineInputChange}
                            disabled={isDisabled}
                        />
                    </LabelBox>
                    <LabelBox labelText="운동 부위" gap="20px">
                        <ChipTab>
                            <ChipTab.Chip
                                value={Category.CHEST}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                가슴
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.BACK}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                등
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.SHOULDER}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                어깨
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.LEG}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                하체
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ARM}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                팔
                            </ChipTab.Chip>
                            <ChipTab.Chip
                                value={Category.ETC}
                                selectedValue={selectedCategory}
                                onTabClick={handleCategoryChipTabClick}
                            >
                                기타
                            </ChipTab.Chip>
                        </ChipTab>
                    </LabelBox>
                    <LabelBox
                        labelText={
                            <Flex>
                                <div>타입</div>
                                <ToolTip
                                    text="선택한 타입에 따라, 해당 운동 종목의 세부 설정 항목이 달라집니다."
                                    toolTipPosition="right"
                                />
                            </Flex>
                        }
                        gap="20px"
                    >
                        <CheckBoxGroup>
                            <CheckBoxGroup.Wrapper>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value={Type.WEIGHT}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    무게
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value={Type.REP}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    횟수
                                </CheckBoxItem>
                                <CheckBoxItem>
                                    <CheckBoxGroup.CheckBox
                                        value={Type.WORKOUT_SEC}
                                        selectedValues={selectedValues}
                                        onCheckBoxClick={handleCheckBoxClick}
                                    />
                                    시간
                                </CheckBoxItem>
                            </CheckBoxGroup.Wrapper>
                        </CheckBoxGroup>
                    </LabelBox>
                    <Button
                        disabled={
                            isDisabled || isUploadWorkoutLibraryImagePending
                        }
                        onClick={handleWorkoutLibraryUpdateButtonClick}
                    >
                        {isUploadWorkoutLibraryImagePending ? (
                            <Lottie
                                animationData={loadingAnimation}
                                loop={true}
                                style={{
                                    width: 35,
                                    height: 35,
                                    textAlign: "center",
                                }}
                            />
                        ) : (
                            "운동 수정하기"
                        )}
                    </Button>
                </Container>
            </Modal.BottomSheet>
        </Modal>
    );
};

export default WorkoutLibraryDetailBottomSheet;
