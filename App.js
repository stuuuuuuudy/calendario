import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Calendar,
    LocaleConfig,
} from 'react-native-calendars';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import ScheduleListModal from './components/ScheduleListModal';
import ScheduleAddModal from './components/ScheduleAddModal';
import { addSchedule, modifySchedule } from './modules/schedules';

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

// TODO: 클릭 시, 빨간색 딜리트 스타일 나오는 것
// TODO: 추가 레이어 눌렀을 때 날씨 가져올 수 있으면 가져오기

const App = () => {
    const dispatch = useDispatch();
    const { schedules, markedDates } = (useSelector(state => state)).schedules;
    const [showListModal, setShowListModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSchedule, setSelectedSchedule] = useState({});

    const onSave = item => {
        if (item.key) {
            dispatch(modifySchedule(selectedDate, item));
        } else {
            dispatch(addSchedule(selectedDate, item.title));
        }
    }

    // onPress 함수 관련 : https://intrepidgeeks.com/tutorial/event-function-error-in-react-reactnative-automatic-execution
    const openListModal = date => {
        // 날짜 클릭 시, 리스트 modal 오픈
        setSelectedDate(date.dateString);
        setShowListModal(true);
    };

    return (
        <SafeAreaView style={styles.centeredView}>
            <ScheduleListModal
                selectedDate={selectedDate}
                schedules={schedules[selectedDate] || []}
                showListModal={showListModal}
                setShowListModal={setShowListModal}
                setShowAddModal={setShowAddModal}
                setSelectedSchedule={setSelectedSchedule}
            />
            <ScheduleAddModal
                showAddModal={showAddModal}
                selectedSchedule={selectedSchedule}
                setShowAddModal={setShowAddModal}
                onSave={onSave}
            />
            <Calendar
                style={{ height: 1000 }}
                monthFormat="yyyy년 M월"
                markedDates={markedDates}
                enableSwipeMonths={true}
                onDayPress={day => openListModal(day)}
                onMonthChange={month => {
                    // TODO: 달을 바꾸면 데이터 로드
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
        // height: 1000,
    },
    dayComponent: {
        height: 100,
    },
});

export default App;
