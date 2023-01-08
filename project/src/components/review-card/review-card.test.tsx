import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ReviewCard from './review-card';
import {Review} from '../../types/review';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const initialEntries = ['/'];
    const comment = {id: 1, rating: 5, comment: 'ok', date: '2022-12-01', user: {id: 1, name: 'testUser'}} as Review;
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <ReviewCard comment={comment.comment} date={comment.date} id={comment.id} rating={comment.rating}
          user={comment.user}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('ok')).toBeInTheDocument();
    expect(screen.getByText('December 01, 2022')).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText('testUser')).toBeInTheDocument();
  });
});
