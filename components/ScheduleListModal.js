import React, {useState} from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
} from 'react-native';
import ScheduleItem from './ScheduleItem';

const ScheduleLayer = ({
    schedules,
    showListModal,
    setShowListModal,
    setShowAddModal,
}) => {
    const onPress = () => {
        // 추가 버튼 누르면 리스트modal 닫히고 추가modal 오픈
        setShowListModal(false);
        setShowAddModal(true);
    };

    return (
        <Modal animationType="slide" transparent={true} visible={showListModal}>
            <View style={styles.modalView}>
                {schedules.length === 0 ? (
                    <Text style={styles.modalText}>
                        이 날의 일정이 없습니다.
                    </Text>
                ) : (
                    <FlatList
                        style={styles.list}
                        data={schedules}
                        renderItem={({item}) => (
                            <ScheduleItem id={item.id} text={item.title} />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                )}
                <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                    <View style={styles.addButton}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    empty: {},
    list: {},
    addButton: {},
    modalView: {
        margin: 20,
        marginTop: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        height: 400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ScheduleLayer;
