/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: '广州分乐信息科技有限公司',
    position: '高级JAVA',
    url: 'http://fenlekeji.com/',
    startDate: '2023-04-25',
    endDate: '2023-12-22',
    summary: '该企业主要是为银行提供营销活动，派发权益。合作对象有保险、石油、银行等国企',
    highlights: [
      '维护上游权益（石油、花费、微信立减金、支付宝红包、各平台VIP等权益）的订单生命周期',
      '分乐权益系统的日常维护、对接新的权益、常数据报表的导出',
      '对接第三方实物平台',
      '邮储银行、华夏银行、广发信用卡、云闪付APP内的活动（秒杀、抽奖等）开发、需对接行方的授权、登录、支付等',
    ],
  },
  {
    name: '广东客满多网络科技有限公司',
    position: '技术主管',
    url: 'http://www.kmdmall.com/',
    startDate: '2021-02-01',
    endDate: '2023-04-20',
    summary: '',
    highlights: [
      '技术团队的管理建设、工作安排、工作对接等等工作',
      '代码质量的管理，以及技术标准的制定与实施监督',
      '负责面试新的技术岗位',
      '维护标准商城的底层核心',
      '新项目的需求分析、方案制定、评估、对接',
    ],
  },
  {
    name: '广州市银河在线饰品有限公司',
    position: '中级',
    url: 'https://www.gets.com/',
    startDate: '2019-10-14',
    endDate: '2021-02-01',
    summary: '外贸公司，主要开发公司的自建平台商城，负责主要的5个网站的维护与新功能开发，例如新的支付方式对接，对接google广告，与国外的服务器同步数据等',
    highlights: [
      // '',
    ],
  },
  {
    name: '广州广脉信息科技有限公司',
    position: '初级',
    url: 'http://www.guangmaipower.com/',
    startDate: '2017-12-10',
    endDate: '2019-10-01',
    summary: '外包公司，开发了大量的公众号和小程序商城项目，负责实现甲方商业目的的业务系统的设计、开发和维护',
    highlights: [
      // '',
    ],
  },
];

export default work;
