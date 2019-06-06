import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Header } from '../header';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { LettersProvider } from '../letters-context';

import styles from './app.module.css';

export const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/inbox" />
    </Route>
    <Route path="*">
      <div className={styles.app}>
        <LettersProvider>
          <Header className={styles.header} />
          <Sidebar className={styles.sidebar} />
          <Content style={styles.content} />
        </LettersProvider>
      </div>
    </Route>
  </Switch>
);
