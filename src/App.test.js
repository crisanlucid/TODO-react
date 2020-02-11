import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import App from './App';
import Todo from './Todo';

afterEach(cleanup);
const todos = [
  {text: 'Learn about React', isCompleted: false},
  {text: 'Meet friend for lunch', isCompleted: false},
];

describe('Todo', () => {
  it('finds titles', () => {
    const {getAllByTestId} = render(<App todos={todos} />);

    let elem = getAllByTestId('item')[0];
    expect(elem.innerHTML).toBe(
      'Learn about React<div><button>Complete</button><button>X</button></div>',
    );
    elem = getAllByTestId('item')[1];
    expect(elem.innerHTML).toBe(
      'Meet friend for lunch<div><button>Complete</button><button>X</button></div>',
    );
  });

  it('select todo', () => {
    const {getByText, getByTestId, container} = render(
      <Todo
        index={1}
        todo={todos}
        completeTodo={jest.fn()}
        removeTodo={jest.fn()}
      />,
    );

    fireEvent.click(getByText('Complete'));
    const elem = getByTestId('item');
    // expect(elem.getAttribute('style')).toBe('text-decoration: line-through;');
    console.log(elem.innerHTML);
  });
});
