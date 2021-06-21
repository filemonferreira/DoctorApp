import React from 'react';
import { useAuth } from '../hooks/auth';

import { AppRoutesProfile } from './app.routes.profile';
import { Auth } from './auth';

export function AuthRoutes() {
  const { user } = useAuth();


  return (
   <>
      { user.id ? <AppRoutesProfile /> : <Auth />}
   </>
  );
}