import React from "react";
import Chart from "react-google-charts";

class DynamicChart extends React.Component {
  render() {
    const { data } = this.props;
    
    const chartData = [
      ["Marks", "Marks1"],
      ...data.map(({ name, value }) => [name, value])
    ];

    return (
      <div style={{background: '#22026b' ,maxWidth:'750px', width:'100%', display: "flex", justifyContent: "center", padding:'3px'}}>
        <Chart
          width={'100%'}
          height={"500px"} 
          chartType="LineChart"
          loader={<div style={{color:'white'}}>Loading Chart</div>}
          data={chartData}
          options={{
            title: "SGPA Chart",
            backgroundColor: '#4544a8',
            legendTextStyle: { color: '#FFF' },
            titleTextStyle: { color: '#FFF' },
            colors:['white'],
            hAxis: {
              textStyle:{color: '#FFF'},
            },
            vAxis: {
              textStyle:{color: '#FFF'},
            }
          }}
          rootProps={{ "data-testid": "1" }}
          
          
        />
      </div>
    );
  }
}

export default DynamicChart;