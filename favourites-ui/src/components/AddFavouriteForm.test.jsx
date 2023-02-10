import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import AddFavouriteForm from './AddFavouriteForm';

test.skip('<AddFavouriteForm /> calls onSubmit', async () => {
  //under development
  const user = userEvent.setup()
  const createFavourite = jest.fn()
  const beverage = "coffee"

  render(<AddFavouriteForm onSubmit={createFavourite} beverage={beverage}/>)

  const input = screen.getByTestId('name')
  const sendButton = screen.getByText('Lähetä')

  await user.type(input, 'testing')
  await user.click(sendButton)

  await waitFor(() =>
    expect(createFavourite).toHaveBeenCalledWith({name: "testing"})
  );
})
