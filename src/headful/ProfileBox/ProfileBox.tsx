import Flex from "headful/Flex/Flex";
import Image from "headful/Image/Image";
import Text from "headful/Text/Text";
import React from "react";

type ProfileBoxProps = {
    imageSrc: string;
    name: string;
};

const ProfileBox = ({imageSrc, name}: ProfileBoxProps) => {
    return (
        <Flex flexDirection="column" gap={20} alignItems="center">
            <Image src={imageSrc} width={100} height={100} borderRadius="50%" />
            <Text>{name}</Text>
        </Flex>
    );
};

export default ProfileBox;
