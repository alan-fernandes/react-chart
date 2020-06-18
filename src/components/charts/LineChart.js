import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {
      },
      label: {}
    };
  }
  componentDidMount() {
    this.setState({
      isLoaded: true,
      data: {}
    });



    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          let datasets = [];
          let labels =[];
          let colors = ["#303F9F","#BF3FFF"];
          let count = 0;
          for (let [key, value] of Object.entries(result)) {
            
            let color = count % 2 === 0 ? colors[0] :colors[1]
            let data = value.map((item) => { return item.value; })
            labels = value.map((item) => { return item.label; })
            let item = {
              data,
              label: key,
              backgroundColor: 'rgba(52, 52, 52, 0.1)',
              borderColor: color,
              fill:false
            }
            datasets.push(item);
            count++;
          }
          this.setState({
             isLoaded: true,
             data: {
               labels: labels,
               datasets: datasets
             },
             options: {
              title: {
                display: true,
                text: this.props.title
              },
            }
           });
           
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Box-Grafic">
            <h2 className="Grafic-Title">{this.props.title}</h2>
          <Line
            data={data}
          />
        </div>
      );
    }
  }
}
export default LineChart;