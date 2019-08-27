import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

const Wrapper = styled.div`
  background-color: ${({ theme }) => (theme.quaternary)};
  min-width: 0;
  display: inline-block;
  width: 400px;
`;

const Chart = ({
  name, abbreviation, labels, data,
}) => (
  <Wrapper>
    <Bar
      redraw
      data={{
        labels,
        datasets: [{
          data,
          label: abbreviation,
          backgroundColor: 'rgba(255, 170 , 51, 0.7)',
          hoverBackgroundColor: 'hsl(35, 100%, 60%)',
          borderWidth: 0,
        }],
      }}
      options={{
        title: {
          display: true,
          text: `${name}`,
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
              },
            },
          ],
        },
      }}
    />
  </Wrapper>
);

Chart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  abbreviation: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Chart;
