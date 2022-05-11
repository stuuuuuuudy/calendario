import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Keyboard,
    Pressable,
} from 'react-native';

const ScheduleLayer = ({ showAddModal, selectedSchedule, setShowAddModal, onSave }) => {
    // TODO: 오픈할때마다 selectedSchedule.title 세팅하도록...이때 하는게 아니고!
    const [text, setText] = useState(selectedSchedule.title || '');

    const close = () => {
        Keyboard.dismiss();
        setShowAddModal(false);
        setText('');
    }

    const onPressSave = () => {
        onSave({ ...selectedSchedule, title: text });
        close();
    };

    return (
        <Modal animationType="slide" transparent={true} visible={showAddModal}>
            <Pressable style={styles.background}
                onPress={close}
            />
            <View style={styles.modalView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => setShowAddModal(false)}>
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={onPressSave}>
                        <Text style={styles.saveButton}>V</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="일정 제목"
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={onPressSave}
                    returnKeyType="done"
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalView: {
        margin: 50,
        marginTop: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        height: 400,
        width: 300,
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
    input: {
        fontSize: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    closeButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        color: '#e9e9e9',
    },
    saveButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'flex-end',
        color: '#e9e9e9',
    },
});

export default ScheduleLayer;
