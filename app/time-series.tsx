import BackArrow from "@/components/Common/backArrow";
import { ipAddress } from "@/components/Common/ipAddress";
import axios from "axios";
import { useEffect, useState } from "react";
import { View,Text, StyleSheet } from "react-native"
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from "react-native-gifted-charts";

function TimeSeries(){
  const [timeData,setTimeData] = useState([])
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const calculateStepValue = (data:any) => {
    const maxValue = Math.max(...data); 
    const stepValue = Math.ceil(maxValue / 10); 
    return stepValue;
  };
    const data = [
        {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 13, label:'Jan'},
    
        {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 13, label:'Feb'},
    
        {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 13, label:'Mar'},
    
        {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 13, label:'Apr'},
    
        {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 13, label:'May'},
      ];

      async function GetTimeSeriesPrediction(){
        const response = await axios.get(`http://${ipAddress}:3000/forecast?city=Ampara`)
        console.log(response.data)
        const timeSeries = response.data
        const formattedData = timeSeries.map((value:number, index:number) => ({
          value,
          frontColor: '#006DFF',
          gradientColor: '#009FFF',
          spacing: 13,
          label: months[index],
        }));
        setTimeData(formattedData)
      }

      const maxDataValue = Math.max(...timeData.map((item:any) => item.value));
      const stepValue = calculateStepValue(timeData.map((item:any) => item.value));


      useEffect(() =>{
        GetTimeSeriesPrediction()
      },[])

    return(
        <View style={{paddingHorizontal:20,paddingVertical:50}}>
            <BackArrow/>
            <View style={styles.title}>
                <Text  style={{fontFamily:"Poppins-Bold",fontSize:20}}>Forecasting In Colombo</Text>
            </View>
            <View>
              {timeData .length>0 &&             
                <BarChart
                  data={timeData}
                  barWidth={20}
                  initialSpacing={10}
                  spacing={14}
                  barBorderRadius={4}
                  showGradient
                  yAxisThickness={0}
                  xAxisType={'dashed'}
                  xAxisColor={'lightgray'}
                  yAxisTextStyle={{color: 'lightgray'}}
                  stepValue={stepValue}
                  maxValue={maxDataValue}
                  noOfSections={6}
                  yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
                  labelWidth={40}
                  xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
                  showLine
                  />
              }
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
  title:{

    paddingVertical:15
  }
})



export default TimeSeries