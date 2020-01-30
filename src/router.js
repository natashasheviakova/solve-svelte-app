import Profiles from './pages/profiles';
import Transactions from './pages/transactions';
import QueryEngine from './pages/query-engine';
import AccessControl from './pages/access-control';

export default [
  {
    path: '/',
    name: 'Profiles',
    component: Profiles
  },
  {
    path: '/transactions',
    name: 'Transaction',
    component: Transactions
  },
  {
    path: '/query-engine',
    name: 'Query Engine',
    component: QueryEngine
  },
  {
    path: '/access-control',
    name: 'Access Control',
    component: AccessControl
  }
];
