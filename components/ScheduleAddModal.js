import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
} from 'react-native';

const ScheduleLayer = ({showAddModal, setShowAddModal, onSave}) => {
    const [text, setText] = useState('');
    const onClose = () => {
        setShowAddModal(false);
    };
    const onPressSave = () => {
        onSave(text);
        setText('');
        Keyboard.dismiss();
        setShowAddModal(false);
    };

    return (
        <Modal animationType="slide" transparent={true} visible={showAddModal}>
            <View style={styles.modalView}>
                <TextInput
                    placeholder="일정 제목"
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={onPressSave}
                    returnKeyType="done"
                />
                <TouchableOpacity activeOpacity={0.5} onPress={onClose}>
                    <View style={styles.addButton}>
                        <Text>닫기</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={onPressSave}>
                    <View style={styles.buttonStyle}>
                        <Text>저장</Text>
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
