import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as TrashIcon } from "assets/image/trash.svg";

const Container = styled(motion.div)`
    position: absolute;
    left: 100%;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 80px;
    background-color: ${(props) => props.theme.color.warning};
    opacity: 0.7;
    color: white;
    border-radius: ${(props) => props.theme.borderRadius.md};
    transition: transform 0.3s;
`;

type DeleteButtonProps = {
    opacity: number;
    onDeleteButtonClick?: () => void;
};
const DeleteButton = ({ opacity, onDeleteButtonClick }: DeleteButtonProps) => {
    return (
        <Container animate={{ opacity }} onClick={onDeleteButtonClick}>
            <TrashIcon />
        </Container>
    );
};

export default DeleteButton;
