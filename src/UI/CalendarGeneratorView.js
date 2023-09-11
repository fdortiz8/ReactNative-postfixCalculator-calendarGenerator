import React, { useEffect, useState } from 'react';
// import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import CalendarGenerator from '../Logic/CalendarGenerator';

const CalendarGeneratorView = () => {
    const [date, changeDate] = React.useState('');
    const [calendarArray, setCalendarArray] = useState([]);

    function changeValue(val) {
        changeDate(val);
    }
    
    const generateCalendarArray = () => {
        try {
            const currentDate = new Date(date);
            const calendarArray = CalendarGenerator.generate(currentDate);
            return calendarArray;
        } catch (error) {
            console.error(error);
            return [];
        }
    };
    
    
    useEffect(() => {
        const updatedCalendarArray = generateCalendarArray();
        setCalendarArray(updatedCalendarArray);
    }, [date]);
    
    return (
        <View>
          <TextInput value={date} onChangeText={changeValue} />
          {calendarArray.map((week, index) => (
            <View key={index} style={styles.weekRow}>
              {week.map((day, index) => (
                <Text key={index} style={styles.dayCell}>
                  {day.toString()}
                </Text>
              ))}
            </View>
          ))}
        </View>
    );
};

const styles = StyleSheet.create({
    weekRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
    },
    dayCell: {
      flex: 1,
      textAlign: 'center',
    },
});
    

export default CalendarGeneratorView;
