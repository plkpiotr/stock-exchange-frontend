import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme.quaternary)};
  min-width: 0;
  display: inline-block;
  width: 550px;
  margin-right: 17px;
  margin-bottom: 24px;
  
  @media (max-width: 1366px) {
    width: 370px;
    margin-bottom: 11px;
  }
`;

const BarChart = ({
  name, abbreviation, data, labels,
}) => (
  <Wrapper>
    <Bar
      redraw
      data={{
        labels,
        datasets: [{
          data,
          label: abbreviation,
          backgroundColor: 'rgba(255, 170 , 51, 0.8)',
          hoverBackgroundColor: 'hsl(35, 100%, 60%)',
          borderWidth: 0,
        }],
      }}
      options={{
        title: {
          display: true,
          text: `${name}`,
          fontSize: 14,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                callback(label) {
                  return moment(label).format('L').substring(0, 5);
                },
                fontSize: 13,
              },
            },
          ],
          yAxes: [{
            ticks: {
              fontSize: 14,
            },
          }],
        },
      }}
    />
  </Wrapper>
);

BarChart.propTypes = {
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
  data: PropTypes.array,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BarChart.defaultProps = {
  data: [],
};

export default BarChart;
