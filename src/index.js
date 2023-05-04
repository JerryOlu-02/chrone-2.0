import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabaseKey = process.env.REACT_APP_SUPABASE_PRIVATE_KEY;

const supabase = createClient(
  'https://csjklqqvdrjnqlkxkkmd.supabase.co',
  supabaseKey
);

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <SessionContextProvider supabaseClient={supabase}>
    <Provider store={store}>
      <App />
    </Provider>
  </SessionContextProvider>
);
