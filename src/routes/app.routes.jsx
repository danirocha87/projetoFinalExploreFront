import { Route, Routes } from 'react-router-dom';

import { CreateDish } from '../pages/CreateDish';
import { EditDish } from '../pages/EditDish';
import { Home } from '../pages/Home';
import { PreviewDish } from '../pages/PreviewDish';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createdish" element={<CreateDish />} />
      <Route path="/editdish/:id" element={<EditDish />} />
      <Route path="/previewdish/:id" element={<PreviewDish />} />
    </Routes>
  );
}
