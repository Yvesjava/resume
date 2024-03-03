const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['网站开发', '开发语言'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['工具', '开发语言'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['网站开发', '数据库'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['网站开发', '数据库'],
  },
  {
    title: 'Mysql',
    competency: 4,
    category: ['网站开发', '数据库'],
  },
  {
    title: 'Git/Svn',
    competency: 3,
    category: ['工具'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['工具'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['工具'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['网站开发', '开发语言'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['开发语言'],
  },
  {
    title: 'Golang',
    competency: 2,
    category: ['开发语言'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['开发语言'],
  },
  {
    title: 'PHP',
    competency: 5,
    category: ['开发语言'],
  },
  {
    title: 'Rust',
    competency: 2,
    category: ['开发语言'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
