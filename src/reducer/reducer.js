import { LOGIN_SUCCESS } from '../actions/actions';

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
    {
      id: 'c',
      title: 'The third article',
      description: 'The third description',
      link: 'https://github.com/plkpiotr/stock-exchange-frontend',
      created: '09/09/2019',
      modified: '11/11/2019',
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
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.result.data.token,
      };
    default:
      return state;
  }
};

export default reducer;
