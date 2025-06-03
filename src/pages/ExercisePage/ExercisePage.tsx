import NavigateBottomBox from "components/NavigateBottomBox";
import Flex from "headful/Flex/Flex";
import LogoArea from "headful/LogoArea/LogoArea";
import Footer from "headful/PrivatePageTemplate/Footer/Footer";
import Header from "headful/PrivatePageTemplate/Header/Header";
import Main from "headful/PrivatePageTemplate/Main/Main";
import PrivatePageTemplate from "headful/PrivatePageTemplate/PrivatePageTemplate";
import SearchInput from "headful/SearchInput/SearchInput";
import {useLocation} from "react-router-dom";
import ExerciseAllProvider from "./components/ExerciseAllGetProvider";
import ExerciseFilterSearchInput from "./components/ExerciseFilterSearchInput";
import ExerciseFilterTabGroup from "./components/ExerciseFilterTabGroup";
import ExerciseUpdateModal from "./components/ExerciseUpdateModal";
import ExerciseUpdateModalContent from "./components/ExerciseUpdateModalContent";
import ExerciseUpdateProvider from "./components/ExerciseUpdateProvider";
import ExerciseUpdateModalTriggerList from "./components/ExerciseUpdateModalTriggerList";
import ExerciseUpdateModalTrigger from "./components/ExerciseUpdateModalTrigger";
import ExerciseCreateProvider from "./components/ExerciseCreateProvider";
import ExerciseCreateModal from "./components/ExerciseCreateModal";
import ExerciseCreateModalContent from "./components/ExerciseCreateModalContent";
import ExerciseCreateModalTrigger from "./components/ExerciseCreateModalTrigger";
import ExerciseAllGetProvider from "./components/ExerciseAllGetProvider";

const ExercisePage = () => {
    const location = useLocation();
    return (
        <PrivatePageTemplate>
            <Header>
                <LogoArea />
            </Header>
            <Main>
                <ExerciseAllGetProvider>
                    <Flex direction="column" gap={20}>
                        <ExerciseFilterSearchInput />
                        <ExerciseFilterTabGroup />
                        <ExerciseUpdateProvider>
                            <ExerciseUpdateModal>
                                <ExerciseUpdateModalContent />
                                <ExerciseUpdateModalTriggerList
                                    component={exercise => (
                                        <ExerciseUpdateModalTrigger
                                            exercise={exercise}
                                        />
                                    )}
                                />
                            </ExerciseUpdateModal>
                        </ExerciseUpdateProvider>
                    </Flex>
                </ExerciseAllGetProvider>

                <ExerciseCreateProvider>
                    <ExerciseCreateModal>
                        <ExerciseCreateModalContent />
                        <ExerciseCreateModalTrigger />
                    </ExerciseCreateModal>
                </ExerciseCreateProvider>
            </Main>
            <Footer>
                <NavigateBottomBox path={location.pathname} />
            </Footer>
        </PrivatePageTemplate>
    );
};

export default ExercisePage;
