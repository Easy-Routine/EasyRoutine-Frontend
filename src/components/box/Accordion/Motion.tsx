import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
    width: 100%;
    height: auto;
    padding: 10px 20px;
    box-sizing: border-box;
    cursor: grab;
    background-color: ${(props) => props.theme.color.background.box};
    border-radius: ${(props) => props.theme.borderRadius.md};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

type MotionProps = {
    x: number;
    onDragEnd: any;
    children: React.ReactNode;
};

const Motion = ({ x, onDragEnd, children }: MotionProps) => {
    return (
        <Container
            drag="x"
            dragConstraints={{ left: -65, right: 0 }}
            onDragEnd={onDragEnd}
            animate={{ x }}
        >
            {children}
        </Container>
    );
};

export default Motion;
