import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Dimensions,
    Animated,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import ScheduleItem from './ScheduleItem';
import { deleteSchedule } from '../modules/schedules';

const ScheduleLayer = ({
    selectedDate,
    schedules,
    showListModal,
    setShowListModal,
    setShowAddModal,
    setSelectedSchedule,
}) => {
    const dispatch = useDispatch();
    const rowTranslateAnimatedValues = schedules.reduce((acc, cur) => ({ ...acc, [`${cur.key}`]: new Animated.Value(1) }), {});

    const showAddModal = (item) => {
        // 추가 버튼 누르면 리스트 modal 닫히고 추가 modal 오픈
        setSelectedSchedule(item);
        setShowListModal(false);
        setShowAddModal(true);
    };

    const onDeleteSchedule = swipeData => {
        const { key, value } = swipeData;
        if (
            value < -Dimensions.get('window').width &&
            !this.animationIsRunning
        ) {
            this.animationIsRunning = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
            }).start(() => {
                dispatch(deleteSchedule(selectedDate, key));
                this.animationIsRunning = false;
            });
        }
    };

    return (
        <Modal animationType="slide" transparent={true} visible={showListModal}>
            <Pressable style={styles.background}
                onPress={() => setShowListModal(false)}
            />
            <View style={styles.modalView}>
                <Text style={styles.dateText}>{selectedDate}</Text>
                {schedules.length === 0 ? (
                    <Text style={styles.emptyText}>
                        이 날의 일정이 없습니다.
                    </Text>
                ) : (
                    <SwipeListView
                        data={schedules}
                        renderItem={(data) => (
                            <TouchableOpacity onPress={() => showAddModal(data.item)}>
                                <View style={styles.rowFront}>
                                    <ScheduleItem title={data.item.title} />
                                </View>
                            </TouchableOpacity>
                        )}
                        renderHiddenItem={() => (
                            <View style={styles.rowBack}>
                                <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                                    <Text style={styles.backTextWhite}>Delete</Text>
                                </View>
                            </View>
                        )}
                        disableRightSwipe
                        rightOpenValue={-Dimensions.get('window').width}
                        previewRowKey={'0'}
                        previewOpenValue={-40}
                        previewOpenDelay={3000}
                        onSwipeValueChange={onDeleteSchedule}
                        useNativeDriver={false}
                    />
                )}
                <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.5}
                    onPress={() => showAddModal({})}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    dateText: {
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
    emptyText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fe5746',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 30,
    },
    modalView: {
        margin: 50,
        marginTop: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        // padding: 10,
        height: 400,
        width: 300,
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'absolute',
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        width: 250,
        backgroundColor: '#fff',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});

export default ScheduleLayer;
