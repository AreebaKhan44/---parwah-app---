import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import { SelectList } from 'react-native-dropdown-select-list';



const PeriodTracker = () => {
    const [isopen, setIsOpen] = useState(null)
    const [currentvalue, setCurrentValue] = useState();
    const items = [
      { label: '28', value: 28 },
      { label: '29', value: 29 },
      { label: '30', value: 30 },
      { label: '31', value: 31 },
      { label: '32', value: 32 },
      { label: '33', value: 33 },
      { label: '34', value: 34 },
      { label: '35', value: 35 },
      { label: '36', value: 36 },
      { label: '37', value: 37 },
      { label: '38', value: 38 },
      { label: '39', value: 39 },
      { label: '40', value: 40 },
      { label: '41', value: 41 },
      { label: '42', value: 42 },
      { label: '43', value: 43 },
      { label: '44', value: 44 },
      { label: '45', value: 45 },

      <Text style={{color: 'purple',}}>label</Text>
     
  
    ]
    const [date, setDate] = useState('');
  
    const myarray = date.split("/")
    console.log(myarray)
    console.log(date)
    console.log(currentvalue)
    return (
      <View className="top-10 flex justify-center items-center my-2">
        
       
        <View className=" h-36">
          <SelectList
            className=""
            data={items}
            setSelected={(text) => setCurrentValue(text)}
            maxHeight={100}
            paddingBottom={3}
          />
          
          <Text style={{color: 'purple', fontWeight: 'bold',fontSize:22, justifyContent: 'center', alignItems: 'center', padding:10,}}>Your Period</Text>

          
        
        </View>



  
  
        <Calendar
          onDayPress={day => {
            setDate(day.dateString)
          }}
          markedDates={{
            [date]: { selected: true, disableTouchEvent: true, selectedDotColor: 'purple-400' }
          }} />
  
        <View className="flex flex-col gap-y-4 mt-5">
          <Card className="bg-purple-400 h-5  w-56 justify-center items-center"  >

            <Text className="text-center font-bold padding-Bottom:3">Next Period</Text>
            
            
            
            <Text>{moment(date).add(currentvalue-1, 'days').format('LLL')}</Text>
          </Card >
          <Card className="bg-purple-400 h-5 w-56 justify-center items-center ">
          
          <Text className="text-center font-bold">Approximate Ovulation Day</Text>
  
            <Text>          

            {moment(date).add(currentvalue-15, 'days').format('LLL')}
            </Text>
          </Card>
  
  
        </View>
  
  
        <StatusBar style="auto" />
      </View>
    )
}

export default PeriodTracker