import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ScheduleItem = ({title}) => {
    return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
    text: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 16,
        color: '#212121',
        padding: 10,
        alignItems: 'left',
    },
});

export default ScheduleItem;
