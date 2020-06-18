import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


class PieChart extends Component {
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
                  label: 'My First dataset',
                  backgroundColor: [
                    '#ABE1FA',
                    '#32B88B',
                    '#2C82BE'
                  ],
                  hoverBackgroundColor: [
                    '#ABE1FA',
                    '#32B88B',
                    '#2C82BE'
                  ],
                  data: values,
                  usePointStyle: true,
                  responsive: true,
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
          <Pie
            data={data}
          />
        </div>
      );
    }
  }
}
export default PieChart;