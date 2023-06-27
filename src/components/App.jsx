import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};
