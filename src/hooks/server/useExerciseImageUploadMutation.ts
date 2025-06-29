import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {uploadImage} from "services";
import {ImageUploadReq} from "types/exercise";
const useExerciseImageUploadMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: (imageUploadReq: ImageUploadReq) =>
            uploadImage(imageUploadReq),

        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
    });
};

export default useExerciseImageUploadMutation;
