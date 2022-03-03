import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const App = () => {
    // TODO: 그냥은 뜨는데 horizontal 왜 안 되는가
    return (
        <SafeAreaView>
            <CalendarList
                horizontal={true}
                // Enable paging on horizontal, default = false
                pagingEnabled={true}
                // Set custom calendarWidth.
                calendarWidth={320}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // ...
});

export default App;
