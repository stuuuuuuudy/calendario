import React, {useState} from 'react';
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
    TouchableOpacity,
} from 'react-native';
import ScheduleListModal from './components/ScheduleListModal';
import ScheduleAddModal from './components/ScheduleAddModal';

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
    const [schedules, setSchedules] = useState({
        '2022-03-11': [
            {id: 1, title: '할 일 1'},
            {id: 2, title: '할 일 2'},
            {id: 3, title: '할 일 3'},
        ],
    });
    const [showListModal, setShowListModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const onSave = text => {
        const tmpSchedule = schedules[selectedDate] || [];
        const nextId =
            tmpSchedule.length > 0
                ? Math.max(...tmpSchedule.map(v => v.id)) + 1
                : 1;
        const schedule = {title: text, id: nextId};
        setSchedules({
            ...schedules,
            selectedDate: tmpSchedule.concat(schedule),
        });
    };

    const onDayPress2 = date => {
        console.log('date=>', date);
        // 날짜 클릭 시, 리스트modal 오픈
        // setSelectedDate(date.dateString);
        // setShowListModal(true);
    };

    return (
        <SafeAreaView style={styles.centeredView}>
            <ScheduleListModal
                schedules={schedules[selectedDate] || []}
                showListModal={showListModal}
                setShowListModal={setShowListModal}
                setShowAddModal={setShowAddModal}
            />
            <ScheduleAddModal
                showAddModal={showAddModal}
                setShowAddModal={setShowAddModal}
                onSave={onSave}
            />
            <CalendarList
                style={{height: 700}}
                horizontal={true}
                monthFormat="yyyy년 M월"
                hideArrows={true}
                onMonthChange={month => {
                    // TODO: 달을 바꾸면 데이터 로드
                }}
                dayComponent={({date}) => {
                    return (
                        <TouchableOpacity
                            style={styles.dayComponent}
                            onPress={onDayPress2(date)}>
                            <Text
                                style={{
                                    // TODO: left 안 먹는 것 같은데
                                    textAlign: 'left',
                                    color:
                                        new Date(date.dateString).getDay() === 0
                                            ? 'red'
                                            : 'black',
                                }}>
                                {date.day}
                            </Text>
                        </TouchableOpacity>
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
                    'stylesheet.calendar.header': {
                        dayTextAtIndex0: {
                            color: 'red',
                        },
                    },
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 1000,
    },
    dayComponent: {
        height: 100,
        backgroundColor: 'gold',
    },
});

export default App;
