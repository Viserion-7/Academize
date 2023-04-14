import React from "react";
import Chart from "react-google-charts";

class DynamicChart extends React.Component {
  render() {
    const { data } = this.props;
    
    const chartData = [
      ["CGPA", "SGPA"],
      ...data.map(({ name, value }) => [name, value])
    ];

    return (
      <div style={{background:'linear-gradient(90deg, rgba(61,25,6,1) 0%, rgba(78,54,48,1) 69%, rgba(76,45,32,1) 93%)', maxWidth:'750px', width:'100%', display: "flex", justifyContent: "center", padding:'3px'}}>
        <Chart
          width={'100%'}
          height={"500px"}
          chartType="LineChart"
          loader={<div style={{color:'white'}}>Loading Chart</div>}
          data={chartData}
          options={{
            title: "SGPA Chart",
            backgroundColor: '#ffffff',
            legendTextStyle: { color: '#000000' },
            titleTextStyle: { color: '#000000' },
            colors:['black'],
            hAxis: {
              textStyle:{color: '#000000'},
            },
            vAxis: {
              textStyle:{color: '#000000'},
            }
          }}
          rootProps={{ "data-testid": "1" }}
          
          
        />
      </div>
    );
  }
}

export default DynamicChart;