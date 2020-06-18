import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
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
          const labels = result.map((item) => { return item.label });
          const values = result.map((item) => { return item.value });
          this.setState({
            isLoaded: true,
            data: {
              labels: labels,
              datasets: [
                {

                  label: this.props.title,
                  backgroundColor: '#03A9F4',
                  borderColor: '#03A9F4',
                  borderWidth: 1,
                  fill: true,
                  hoverBackgroundColor: '#03A9F4',
                  hoverBorderColor: '#03A9F4',
                  data: values,

                },
              ]
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
        <div className="Box-Graphic">
          <h2 className="Graphic-Title">{this.props.title}</h2>
          <Bar
            data={data}
           
          />
        </div>
      );
    }
  }
}
export default BarChart;