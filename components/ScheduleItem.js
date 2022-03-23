import {View, Text, StyleSheet} from 'react-native';

const ScheduleItem = title => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
});

export default ScheduleItem;
