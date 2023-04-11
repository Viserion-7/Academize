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
      <div style={{maxWidth:'900px', width:'100%', display: "flex", justifyContent: "center", padding:'3%'}}>
        <Chart
          width={'100%'}
          height={"300px"}
          chartType="LineChart"
          loader={<div style={{color:'white'}}>Loading Chart</div>}
          data={chartData}
          options={{
            title: "SGPA Chart",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default DynamicChart;