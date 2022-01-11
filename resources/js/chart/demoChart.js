const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Lead Generation Team-1',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }, {
      label: 'Lead Generation Team-2',
      backgroundColor: 'rgb(84, 140, 255)',
      borderColor: 'rgb(84, 140, 255)',
      data: [0, 14, 27, 32, 38, 43, 45],

    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
      document.getElementById('myChart'),
      config
  )