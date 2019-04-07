import React, { PureComponent } from 'react'

export class Footer extends PureComponent {
  render() {
    return (
      <footer style={styles.mailFooter}>
        <span style={styles.footerItem}>
          <a style={styles.footerItem__link} href="#help">
            Помощь и обратная связь
          </a>
        </span>
        <span style={styles.footerItem}>
          <a style={styles.footerItem__link} href="#ads">
            Реклама
          </a>
        </span>
        <span style={styles.footerItem}>
          <a style={styles.footerItem__link} href="https://yandex.ru">
            &copy; 2001-2018, Яндекс
          </a>
        </span>
      </footer>
    )
  }
}

const styles = {
  mailFooter: {
    position: 'relative',
    marginTop: '-5px',
    paddingTop: '5px',
    width: '100%',
    height: '30px',
    textAlign: 'right',
    borderTop: '1px solid #cccccc',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px 0 rgba(0, 0, 0, 0.34)',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
  },
  footerItem: {
    padding: '21px',
    fontSize: '12px',
    fontWeight: 400,
    color: '#9b9b9b',
  },
  footerItem__link: {
    outline: 'none',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'inherit',
  }
}
