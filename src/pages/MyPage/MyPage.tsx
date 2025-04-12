import NavigateBottomBox from "components/NavigateBottomBox";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import {useLocation} from "react-router-dom";

const MyPage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                헤더
            </Header>
            <Main>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                <div>메인</div>
                

            </Main>
            <Footer>
                {/* 푸터 */}
                <NavigateBottomBox path={location.pathname} />
            </Footer>
            
        </PrivatePageTemplate>
    );
};

export default MyPage;
