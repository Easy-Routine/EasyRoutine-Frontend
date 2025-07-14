import BasicInput from "headful/BasicInput/BasicInput";
import Flex from "headful/Flex/Flex";
import Label from "headful/Label/Label";
import Text from "headful/Text/Text";
import {ChangeEventHandler} from "react";
import {useExerciseCreate} from "./ExerciseCreateProvider";
import ChipTabGroup from "headful/ChipTabGroup/ChipTabGroup";
import {Category, Type} from "types/enum";
import {TabValue} from "headless/TabGroup/TabGroup";
import CheckSet from "headful/CheckSet/CheckSet";
import BasicButton from "headful/BasicButton/BasicButton";
import {useModal} from "headless/Modal/Modal";
import useExerciseCreateMutation from "hooks/server/useExerciseCreateMutation";
import ImageInput from "headful/ImageInput/ImageInput";
import useExerciseImageUploadMutation from "hooks/server/useExerciseImageUploadMutation";
import {uploadImage} from "services";
import {useBottomSheet} from "headless/BottomSheet/BottomSheet";

const ExerciseCreateModalContent = () => {
    const {close} = useBottomSheet();
    const {
        imageUrl,
        setImageUrl,
        name,
        setName,
        category,
        setCategory,
        types,
        setTypes,
    } = useExerciseCreate();

    const {mutateAsync: createExerciseMutate} = useExerciseCreateMutation();

    const handleimageUrlChange = async (value: File) => {
        if (value) {
            const data = await uploadImage({image: value});

            // const previewUrl = URL.createObjectURL(value);
            setImageUrl(data.result);
        }
    };

    const handleCategoryChange = (value: TabValue) => {
        setCategory(value as Category);
    };

    const handleNameChange: ChangeEventHandler<HTMLInputElement> = e => {
        setName(e.target.value);
    };

    const handleTypesChange = (value: string[]) => {
        setTypes(value as Type[]);
    };

    const handleCreateButtonClick = async () => {
        createExerciseMutate({name, category, types, imageUrl});
        setName("");
        setCategory(Category.CHEST);
        setTypes([]);
        setImageUrl("");
        close();
    };

    return (
        <Flex direction="column" gap={12} padding={20} height="100%">
            <Text size={14} weight="500" align="center">
                새 운동 이미지
            </Text>
            <Flex justify="center">
                <ImageInput
                    value={imageUrl}
                    onInputChange={handleimageUrlChange}
                />
            </Flex>
            <Label text="운동 부위">
                <ChipTabGroup defaultValue={category}>
                    <ChipTabGroup.Item
                        value={Category.CHEST}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        가슴
                    </ChipTabGroup.Item>
                    <ChipTabGroup.Item
                        value={Category.BACK}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        등
                    </ChipTabGroup.Item>
                    <ChipTabGroup.Item
                        value={Category.SHOULDER}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        어깨
                    </ChipTabGroup.Item>
                    <ChipTabGroup.Item
                        value={Category.LEG}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        하체
                    </ChipTabGroup.Item>
                    <ChipTabGroup.Item
                        value={Category.ARM}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        팔
                    </ChipTabGroup.Item>
                    <ChipTabGroup.Item
                        value={Category.ETC}
                        onTabGroupItemClick={handleCategoryChange}
                    >
                        기타
                    </ChipTabGroup.Item>
                </ChipTabGroup>
            </Label>

            <Label text="운동 이름" required>
                <BasicInput value={name} onChange={handleNameChange} />
            </Label>

            <Label text="타입" required>
                <CheckSet>
                    <CheckSet.Item
                        value={Type.WEIGHT}
                        onCheckboxGroupItemClick={handleTypesChange}
                    >
                        무게
                    </CheckSet.Item>
                    <CheckSet.Item
                        value={Type.COUNT}
                        onCheckboxGroupItemClick={handleTypesChange}
                    >
                        횟수
                    </CheckSet.Item>
                    <CheckSet.Item
                        value={Type.TIME}
                        onCheckboxGroupItemClick={handleTypesChange}
                    >
                        시간
                    </CheckSet.Item>
                </CheckSet>
            </Label>
            <BasicButton onClick={handleCreateButtonClick}>
                추가하기
            </BasicButton>
        </Flex>
    );
};

export default ExerciseCreateModalContent;
