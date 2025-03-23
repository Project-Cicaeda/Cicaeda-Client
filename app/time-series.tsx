import BackArrow from "@/components/Common/backArrow";
import { ipAddress } from "@/components/Common/ipAddress";
import axios from "axios";
import { useEffect, useState } from "react";
import { View,Text, StyleSheet } from "react-native"
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from "react-native-gifted-charts";

function TimeSeries(){
  const [timeData,setTimeData] = useState([])
  const [city,setCity] = useState("Colombo")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const calculateStepValue = (data:any) => {
    const maxValue = Math.max(...data); 
    const stepValue = Math.ceil(maxValue / 10); 
    return stepValue;
  };

  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: 'white',
          borderWidth: 3,
          borderRadius: 7,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
 
  const latestData = [
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 250,
      hideDataPoint: true,
    },
    {
      value: 320,
      customDataPoint: dPoint,
    },
    {
      value: 310,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 130,
      customDataPoint: dPoint,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      hideDataPoint: true,
    },
    {
      value: 270,
      customDataPoint: dPoint,
    },
    {
      value: 240,
      hideDataPoint: true,
    },
    {
      value: 120,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
    {
      value: 210,
      customDataPoint: dPoint,
    },
    {
      value: 20,
      hideDataPoint: true,
    },
    {
      value: 100,
      customDataPoint: dPoint,
    },
  ];

  const [currentData, setCurrentData] = useState(latestData);

      async function GetTimeSeriesPrediction(){
        const response = await axios.get(`${ipAddress}/forecast?city=${city}`)
        const timeSeries = response.data
        const toInt = timeSeries.map((value:number,index:number) => (
          Math.floor(value)
        ))
        const formattedData = toInt.map((value:number, index:number) => ({
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

      const getColorByIndex = (index:number) => {
        const colors = [
          "#FF6B81", 
          "#42A5F5", 
          "#FFD166", 
          "#4DD0E1", 
          "#A168F7", 
          "#FFA65E",
          "#7E7E7E",
          "#3CB371", 
          "#B5651D", 
          "#FFB6A1", 
          "#87CEFA", 
          "#98FB98", 
        ];
        return colors[index % colors.length]; 
      }
      const pieChartData = timeData.map((item:any, index) => ({
        value: item.value,
        color: getColorByIndex(index), 
        text: `${item.value}`,
      }));
    

      useEffect(() =>{
        GetTimeSeriesPrediction()
      },[])

    return(
        <View style={{paddingHorizontal:20,paddingVertical:20,backgroundColor:"#fff",height:"100%"}}>
            <BackArrow/>
            <View style={styles.title}>
                <Text  style={{fontFamily:"Poppins-Bold",fontSize:20}}>Forecasting In {city}</Text>
            </View>
            <View style={styles.barChart}>
              {timeData.length>0 &&             
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
            <View style={styles.subCharts}>
              <View style={styles.lineChart}>
              <LineChart
                    isAnimated
                    thickness={3}
                    color="#07BAD1"
                    animateOnDataChange
                    animationDuration={1000}
                    onDataChangeAnimationDuration={300}
                    areaChart
                    yAxisTextStyle={{display: 'none'}}
                    data={currentData}
                    startFillColor={'rgb(84,219,234)'}
                    endFillColor={'rgb(84,219,234)'}
                    startOpacity={0.4}
                    endOpacity={0.1}
                    spacing={7}
                    initialSpacing={0}
                    yAxisThickness={0}
                    xAxisThickness={0}
                  />
              </View>
              <View style={styles.lineChart}>
                <View  style={{marginLeft:5}}>
                    <PieChart
                      data={pieChartData}
                      radius={90}
                      donut
                      showText
                      showValuesAsLabels
                      showTextBackground
                      textBackgroundColor="#333"
                      textBackgroundRadius={11}
                      textColor="white"
                      textSize={7}
                      fontWeight="bold"
                      strokeWidth={2}
                      strokeColor="#333"
                      innerCircleBorderWidth={10}
                      innerCircleBorderColor="#333"
                      showGradient
                    />
                </View>
              </View>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
  title:{
    paddingVertical:15
  },
  subCharts:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    marginVertical:20
  },
  lineChart:{
    width:"50%",
    backgroundColor:"#e2e2e2",
    justifyContent:"center",
    // alignSelf:"center",
    borderRadius:20,
    height:230,
    marginRight:10
  }
})



export default TimeSeries