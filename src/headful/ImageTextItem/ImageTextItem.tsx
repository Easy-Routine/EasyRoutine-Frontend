import React, {useRef, useState, useCallback} from "react";
import styles from "./ImageTextItem.module.scss";
import ArrowRight from "assets/image/arrow.svg";

type ImageTextItemProps = {
    image: string;
    text: string;
    onItemClick: () => void; // 짧게 누를 때 호출
    onLongPress: () => void; // 오래 누를 때 호출
    longPressDuration?: number; // 롱-프레스 인식 시간 (ms 단위), 기본 500ms
};

const ImageTextItem: React.FC<ImageTextItemProps> = ({
    image,
    text,
    onItemClick,
    onLongPress,
    longPressDuration = 500,
}) => {
    // 타이머 ID를 저장할 Ref
    const timerRef = useRef<number | null>(null);
    // 롱-프레스가 이미 발생했는지 플래그
    const [longPressTriggered, setLongPressTriggered] = useState(false);

    // 타이머를 시작하는 함수
    const startPressTimer = useCallback(() => {
        // 혹시 이전 타이머 삭제
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
        }
        // longPressDuration 후에 onLongPress 실행
        timerRef.current = window.setTimeout(() => {
            setLongPressTriggered(true);
            onLongPress();
        }, longPressDuration);
    }, [longPressDuration, onLongPress]);

    // 타이머를 취소하는 함수
    const clearPressTimer = useCallback(() => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // 사용자가 손가락을 떼거나 마우스를 뗄 때 호출
    const handlePointerUp = useCallback(() => {
        clearPressTimer();
        // 만약 롱-프레스가 이미 트리거된 상태라면, onClick을 막고 플래그 리셋
        if (longPressTriggered) {
            setLongPressTriggered(false);
        }
    }, [clearPressTimer, longPressTriggered]);

    // 클릭(짧게 누른 후 눌렀다 뗌) 이벤트 핸들러
    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            // 롱-프레스가 방금 발생했다면, 이 클릭은 무시
            if (longPressTriggered) {
                e.preventDefault();
                return;
            }
            onItemClick();
        },
        [longPressTriggered, onItemClick],
    );

    return (
        <div
            className={styles.ImageTextItem}
            // 마우스/터치 시작 시 타이머 시작
            onMouseDown={startPressTimer}
            onTouchStart={startPressTimer}
            // 마우스/터치 해제, 또는 커서가 벗어날 때 타이머 취소
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchEnd={handlePointerUp}
            onTouchMove={handlePointerUp}
            // 클릭 처리: 짧게 눌렀을 때만 onItemClick 호출
            onClick={handleClick}
        >
            <div className={styles.ImageText}>
                <div className={styles.Image}>
                    <img src={image} alt="운동 이미지" />
                </div>
                <div className={styles.Text}>
                    <span>{text}</span>
                </div>
            </div>
            <div className={styles.Icon}>
                <img src={ArrowRight} alt="이동 버튼" />
            </div>
        </div>
    );
};

export default ImageTextItem;
