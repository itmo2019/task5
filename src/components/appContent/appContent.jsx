import React from 'react';

import LetterBox from '../letterBox/letterBox';

import './appContent.css';

class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addLetter: () => {}
    };
  }

  updateAddLetter = value => {
    this.setState({ addLetter: value });
  };

  render() {
    return (
      <main className="ApplicationContent">
        <nav className="ApplicationContent__Nav">
          <button className="ApplicationContent__Button" type="button">
            Написать
          </button>
          <div className="ApplicationContent__ButtonHolder">
            <button
              className="ApplicationContent__Button"
              type="button"
              onClick={this.state.addLetter}
            >
              Получить письмо
            </button>
          </div>
          <ul className="ApplicationContent__NavigationList">
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Входящие
              </a>
            </li>
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Отправленные
              </a>
            </li>
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Удалённые
              </a>
            </li>
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Спам
              </a>
            </li>
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Черновики, и беловики, и боровики, и прочие категории грибов и писем
              </a>
            </li>
            <li className="ApplicationContent__NavigationItem">
              <a
                className="ApplicationContent__NavigationItemLink"
                href="../../../public/index.html"
              >
                Создать папку, и мамку, и тётьку, и дядьку, любого человека можно создать
              </a>
            </li>
          </ul>
        </nav>
        <LetterBox updateAddLetter={this.updateAddLetter} />
      </main>
    );
  }
}

export default AppContent;
