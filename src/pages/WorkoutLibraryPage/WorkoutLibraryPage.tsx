import NavigateBottomBox from "components/NavigateBottomBox";
import {useLocation} from "react-router-dom";

const WorkoutLibraryPage = () => {
    const location = useLocation();
    return (
        <>
            WorkoutLibraryPage
            <NavigateBottomBox path={location.pathname} />
        </>
    );
};

export default WorkoutLibraryPage;
