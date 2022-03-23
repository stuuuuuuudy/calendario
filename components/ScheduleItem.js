import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const ScheduleItem = title => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ScheduleItem;
