import { useMutation } from "@tanstack/react-query";
import { uploadImage } from "services";
const useUploadWorkoutLibraryImageMutation = () => {
    return useMutation({
        mutationFn: ({ formData }: { formData: FormData }) =>
            uploadImage(formData),

        onSuccess: (response) => {
            // console.log(response);
        },
        onSettled: () => {
            // workoutLibraryId를 여기서 사용할 수 있습니다.
            // queryClient.invalidateQueries({
            //     queryKey: [queryKey.getWorkoutLibraryOne, workoutLibraryId],
            // });
        },
    });
};

export default useUploadWorkoutLibraryImageMutation;
