import BackArrow from "@/components/Common/backArrow";
import { ipAddress } from "@/components/Common/ipAddress";
import { fetchData } from "@/components/Common/StorageOperations";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import { useEffect, useState } from "react";
import { View,Text, StyleSheet } from "react-native"
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from "react-native-gifted-charts";

function TimeSeries(){
  const [timeData,setTimeData] = useState([])
  const [city,setCity] = useState("")
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
        const currentMonthIndex = new Date().getMonth(); // Get current month index (0-based)
        const reorderedMonths = [...months.slice(currentMonthIndex + 1), ...months.slice(0, currentMonthIndex + 1)];

        const formattedData = toInt.map((value:number, index:number) => ({
          value,
          frontColor: '#006DFF',
          gradientColor: '#009FFF',
          spacing: 13,
          label: reorderedMonths[index], 
        }));

        setTimeData(formattedData)

      const transformedTimeData = timeData.map((item:any, index) => ({
        value: item.value, 
        ...(index % 2 === 0 ? { customDataPoint: dPoint } : { hideDataPoint: true }) 
      }));
        setCurrentData(transformedTimeData)

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
      useEffect(() => {
        async function fetchLocation() {
          const userCity = await fetchData("userDistrict");
          setCity(userCity);
        }
        fetchLocation();
      }, []);
      
      useEffect(() => {
        if (city) {
          GetTimeSeriesPrediction();
        }
      }, [city]);



    return(
        <View style={{paddingHorizontal:20,paddingVertical:20,backgroundColor:"#fff",height:"100%"}}>
            <BackArrow/>
            <View style={styles.title}>
                <Text  style={{fontFamily:"Poppins-Bold",fontSize:20}}>Forecasting In {city}</Text>
            </View>
            <View>
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
        </View>
    )
}

const styles  = StyleSheet.create({
  title:{
    paddingVertical:15
  },
  subCharts:{
    marginVertical:20,
  },
  lineChart:{
    width:"100%",
    borderWidth:1,
    borderColor:Colors.light.primary,
    borderRadius:20,
    height:230,
    marginVertical:10,
    justifyContent:"center",
    alignItems:"center"
  }
})



export default TimeSeries