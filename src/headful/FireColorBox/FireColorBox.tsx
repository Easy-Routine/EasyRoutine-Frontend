import {BackgroundColor, Color} from "types/enum";
import {ReactComponent as FireIcon} from "assets/image/fire.svg";
import styles from "./FireColorBox.module.scss";

const ColorMapper = {
    [Color.VIOLET]: BackgroundColor.VIOLET,
    [Color.ORANGE]: BackgroundColor.ORANGE,
    [Color.GREEN]: BackgroundColor.GREEN,
    [Color.BLUE]: BackgroundColor.BLUE,
    [Color.PINK]: BackgroundColor.PINK,
};

type FireColorBoxProps = {
    color: Color;
};

const FireColorBox = ({color}: FireColorBoxProps) => {
    return (
        <div
            className={styles.fireColorBox}
            style={{backgroundColor: ColorMapper[color]}}
        >
            <FireIcon style={{color}} />
        </div>
    );
};

export default FireColorBox;
