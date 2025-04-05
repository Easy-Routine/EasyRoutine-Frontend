import NavigateBottomBox from "components/NavigateBottomBox";
import {useLocation} from "react-router-dom";

const MyPage = () => {
    const location = useLocation();
    return (
        <>
            MyPage
            <NavigateBottomBox path={location.pathname} />
        </>
    );
};

export default MyPage;
