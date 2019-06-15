import React, { Component } from 'react';

import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footerText__textEndline"><a className="footerText__delLine footerText_unhighlight" href="#">&copy; 2001 - 2018, Яндекс</a></span>
        <span className="footerText__textEndline"><a className="footerText__delLine footerText_unhighlight" href="#">Реклама</a></span>
        <span className="footerText__textEndline"><a className="footerText__delLine footerText_unhighlight" href="#">Помощь и обратная связь</a></span>
      </div>
    );
  }
}
