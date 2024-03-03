import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};
const titleList = [
  { title: 'Education', label: '教育' },
  { title: 'Experience', label: '经验' },
  { title: 'Skills', label: '技能' },
  // { title: 'Courses', label: '课程' },
  // { title: 'References', label: '参考' },
];

const Resume = () => (
  <Main
    title="个人简历"
    description="全建誉的个人简历"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">个人简历</Link></h2>
          <div className="link-container">
            {/* {Object.keys(sections).map((sec) => ( */}
            {/*  <h4 key={sec}> */}
            {/*    <a href={`#${sec.toLowerCase()}`}>{sec}</a> */}
            {/*  </h4>))} */}
            {titleList.map((sec) => (
              <h4 key={sec.title}>
                <a href={`#${sec.title.toLowerCase()}`}>{sec.label}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
