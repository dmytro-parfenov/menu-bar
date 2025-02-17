import { FC } from 'react';
import { appMenuBar } from './app-menu-bar/app-menu-bar';

export const App: FC = () => {
  return (<appMenuBar.component {...appMenuBar.properties}/>)
}
