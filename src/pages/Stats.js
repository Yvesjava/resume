import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="一些关于我的统计数据"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2><Link to="/stats">统计</Link></h2>
        </div>
      </header>
      <Personal />
      {/* <Site /> */}
    </article>
  </Main>
);

export default Stats;
