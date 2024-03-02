import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>全建誉</h2>
        <p><a href="mailto:164174421@qq.com">164174421@QQ.COM</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>关于</h2>
      <p>嗨，我是全建誉。 我是2012年大专毕业，电子商务专业。此前，我曾担任<a href="http://www.kmdmall.com/" target="_blank" rel="noreferrer">客满多科技</a>的技术主管。
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">更多</Link> : <Link to="/about" className="button">关于我</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; 全建誉&apos;<Link to="/">resume.qjy.ink:2008</Link>.</p>
    </section>
  </section>
);

export default SideBar;
