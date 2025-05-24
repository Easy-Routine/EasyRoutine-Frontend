import {useMutation} from "@tanstack/react-query";
import useToast from "hooks/useToast";
import {uploadImage} from "services";
const useUploadExerciseImageMutation = () => {
    const {showToast} = useToast();
    return useMutation({
        mutationFn: ({formData}: {formData: FormData}) => uploadImage(formData),

        onError: error => {
            console.log(error);
            showToast(error.message, "error");
        },
    });
};

export default useUploadExerciseImageMutation;
