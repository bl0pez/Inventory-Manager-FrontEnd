import { BrowserRouter } from 'react-router-dom';
import { AuthRouter } from './auth/router/AuthRouter';

export const InventoryApp = () => {
  return (
    <BrowserRouter>
      <AuthRouter />
    </BrowserRouter>
  )
}
