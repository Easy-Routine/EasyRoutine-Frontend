import styles from "./RoutineListEmptyView.module.scss";

const RoutineListEmptyView = () => {
    return (
        <div className={styles.RoutineListEmptyView}>
            <div className={styles.Text}>
                <span>현재 루틴이 없습니다.</span>
                <span>
                    본인 만의 루틴이 있나요? <br /> 아래 버튼을 눌러 운동 루틴을
                    생성해보세요!
                </span>
            </div>
        </div>
    );
};

export default RoutineListEmptyView;
