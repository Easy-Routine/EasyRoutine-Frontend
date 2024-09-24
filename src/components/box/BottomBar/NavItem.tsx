import styled from "styled-components";

const Container = styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    gap: 10px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.color.primary : theme.color.gray.light};
`;

type NavItemProps = {
    children: React.ReactNode;
    value: string;
    selectedValue: string;
    onTabClick: (value: string) => void;
};

const NavItem = ({
    children,
    value,
    selectedValue,
    onTabClick,
}: NavItemProps) => {
    const isSelected = value === selectedValue;
    return (
        <Container isSelected={isSelected} onClick={() => onTabClick(value)}>
            {children}
        </Container>
    );
};

export default NavItem;
