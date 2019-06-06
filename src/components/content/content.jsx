import React from 'react';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

import { ActionsBox } from '../actions-box';
import { Footer } from '../footer';
import { Letters } from '../letters';

import styles from './content.module.css';
import { LetterWindow } from '../letter-window';

export const Content = ({ className }) => {
  return (
    <main className={classNames(styles.main, className)}>
      <Switch>
        <Route path="/inbox">
          <ActionsBox className={styles.actions} />
          <Letters className={styles.content} />
        </Route>
        <Route
          path="/message/:id"
          render={({ match }) => (
            <>
              <ActionsBox disabled className={styles.actions} />
              <LetterWindow className={styles.content} id={match.params.id} />
            </>
          )}
        />
      </Switch>
      <Footer className={styles.footer} />
    </main>
  );
};
