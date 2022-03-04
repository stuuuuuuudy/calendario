import React from 'react';
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
} from 'react-native-calendars';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

LocaleConfig.locales['ko'] = {
    monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],
    monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],
    dayNames: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
    ],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';

const App = () => {
    return (
        <SafeAreaView style={{height: 1000}}>
            <CalendarList
                style={{height: 700}}
                horizontal={true}
                monthFormat={'yyyy년 M월'}
                hideArrows={true}
                onDayPress={day => {
                    // TODO: 날짜 클릭 시, 할일 추가 레이어 생성
                }}
                onMonthChange={month => {
                    // TODO: 달을 바꾸면 데이터 로드
                }}
                dayComponent={({date, state}) => {
                    return (
                        <View style={{height: 100}}>
                            <Text
                                style={{
                                    // TODO: left 안 먹는 것 같은데? 일요일만 빨간색으로 하고 싶은데
                                    textAlign: 'left',
                                    color:
                                        state === 'disabled' ? 'gray' : 'black',
                                }}>
                                {date.day}
                            </Text>
                        </View>
                    );
                }}
                theme={{
                    backgroundColor: '#e9e9e9',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    monthTextColor: 'black',
                    // textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    // textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 16,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // ...
});

export default App;
