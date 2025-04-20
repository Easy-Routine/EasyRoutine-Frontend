import React from "react";
import RoutineConfigGetContainer from "./RoutineConfigGetContainer/RoutineConfigGetContainer";
import {useParams} from "react-router-dom";
import BottomBox from "headful/BottomBox/BottomBox";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import Header from "headful/PrivatePageTemplate/Header/Header";
import LogoArea from "headful/LogoArea/LogoArea";
import Main from "headful/PrivatePageTemplate/Main/Main";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";

const RoutineProgressPage = () => {
    const {routineConfigId} = useParams();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <RoutineConfigGetContainer
                    routineConfigId={routineConfigId as string}
                />
            </Main>
            <Footer>푸터</Footer>
        </PrivatePageTemplate>
    );
};

export default RoutineProgressPage;
