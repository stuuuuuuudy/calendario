import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ScheduleItem from './ScheduleItem';

function ScheduleLayer({schedules}) {
    const onPress = () => {
        // TODO: 추가 버튼 누르면 추가하는 레이어로 바뀌어야함..?
    };

    return (
        <View style={styles.layer}>
            {schedules.length === 0 ? (
                <View>
                    <Text style={styles.empty}>이 날의 일정이 없습니다.</Text>
                </View>
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
    );
}

const styles = StyleSheet.create({
    empty: {},
    layer: {},
    list: {},
    addButton: {},
});

export default ScheduleLayer;
