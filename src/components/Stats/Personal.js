import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <h3>一些关于我的统计</h3>
    <Table data={data} />
  </>
);

export default PersonalStats;
