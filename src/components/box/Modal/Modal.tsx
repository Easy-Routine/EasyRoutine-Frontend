import Trigger from "./Trigger";
import Backdrop from "./Backdrop";
import Content from "./Content";
import Close from "./Close";
import Portal from "./Portal";
import Title from "./Title";
import Description from "./Description";
import Wrapper from "./Wrapper";
import BottomSheet from "./BottomSheet";
import styled from "styled-components";

type ModalProps = {
    children: React.ReactNode;
};

const Container = styled.div``;

const Modal = ({ children }: ModalProps) => {
    return (
        <Container onContextMenu={(e) => e.preventDefault()}>
            {children}
        </Container>
    );
};
export default Modal;

Modal.Trigger = Trigger;
Modal.Backdrop = Backdrop;
Modal.Close = Close;
Modal.Content = Content;
Modal.Portal = Portal;
Modal.Title = Title;
Modal.Description = Description;
Modal.Wrapper = Wrapper;
Modal.BottomSheet = BottomSheet;
