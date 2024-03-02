import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="全建誉的个人网站. 精通java、php、mysql、vue。"
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">全建誉</Link></h2>
          <p>
            善良、有责任心、幽默、风趣
          </p>
        </div>
      </header>
      <p> 欢迎来到我的网站。 请随时阅读<Link to="/about">关于我</Link>的更多信息，或者您可以查看我的<Link to="/resume">简历</Link> {' '}、<Link to="/projects">项目</Link> {' '}、查看<Link to="/stats">网站统计数据</Link> {' '}或<Link to="/contact">与我联系</Link>。
      </p>
      {/* <p> 源码 <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
