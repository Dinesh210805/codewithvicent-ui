import React from 'react';
import { render, screen } from '@testing-library/react';
import Forum from './Forum';

describe('Forum', () => {
  test('renders the forum text', () => {
    render(<Forum />);
    const forumText = screen.getByText('forum');
    expect(forumText).toBeInTheDocument();
  });
});
