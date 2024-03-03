import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1991-01-05T12:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: '当前年龄',
    value: <Age />,
  },
  {
    key: 'worker-age',
    label: '工龄',
    value: '12年',
  },
  {
    key: 'project-age',
    label: '开发工龄',
    value: '6年',
  },
  // {
  //   key: 'countries',
  //   label: 'Countries visited',
  //   value: 53,
  //   link:
  //     'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
  // },
  {
    key: 'location',
    label: '当前城市',
    value: '广州',
  },
];

export default data;
