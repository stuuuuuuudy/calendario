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
                    <Text style={styles.emptyText}>
                        이 날의 일정이 없습니다.
                    </Text>
                ) : (
                    <FlatList
                        style={styles.list}
                        data={schedules}
                        renderItem={({item}) => (
                            <ScheduleItem title={item.title} />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                )}
                <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.5}
                    onPress={() => onPress}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    emptyText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    list: {},
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
