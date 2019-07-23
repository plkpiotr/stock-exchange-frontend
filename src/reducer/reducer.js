const initialState = {
  articles: [
    {
      id: 'a',
      title: 'Example article',
      description: 'Example description',
      link: 'https://github.com/plkpiotr/stock-exchange-backend',
      created: '08/08/2019',
      modified: '09/09/2019',
    },
    {
      id: 'b',
      title: 'Another article',
      description: 'Another description',
      link: 'https://github.com/plkpiotr/stock-exchange-frontend',
      created: '09/09/2019',
      modified: '10/10/2019',
    },
  ],
  notes: [
    {
      id: 'n',
      title: 'One note',
      description: 'One description',
      created: '06/06/2019',
      modified: '07/07/2019',
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
