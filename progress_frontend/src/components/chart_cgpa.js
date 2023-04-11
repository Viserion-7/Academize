import React from "react";
import Chart from "react-google-charts";

class DynamicChart extends React.Component {
  render() {
    const { data } = this.props;
    
    const chartData = [
      ["CGPA", "Score"],
      ...data.map(({ name, value }) => [name, value])
    ];

    return (
      <div style={{maxWidth:'900px', width:'100%', display: "flex", justifyContent: "center", padding:'5%'}}>
        <Chart
          width={'100%'}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "CGPA Chart",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export default DynamicChart;