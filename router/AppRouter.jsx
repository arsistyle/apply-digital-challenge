import { Route, Routes } from 'react-router-dom';
import { AllHits, FavHits } from '../views';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllHits />} />
        <Route path="/favorites" element={<FavHits />} />
        <Route path='/*' element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
