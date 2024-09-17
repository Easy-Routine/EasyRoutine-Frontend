import { AccordionContext, AccordionContextType } from 'context/AccordionContext';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as TrashIcon } from 'assets/image/trash.svg';

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

const DeleteButton = () => {
    const { opacity } = useContext(AccordionContext) as AccordionContextType;
    return (
        <Container animate={{ opacity }}>
            <TrashIcon />
        </Container>
    );
};

export default DeleteButton;
