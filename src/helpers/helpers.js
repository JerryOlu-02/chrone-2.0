import { v4 as uudid } from 'uuid';

export const timeLength = ['15 mins', '30 mins', '1 hour'];
export const time = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
];

export const eventBody = function (startDate, endDate) {
  const unique_id = uudid();
  return {
    summary: `Scheduled Strategy Session with Chrone Influitive Company`,
    description: 'More Insight on your marketing needs',
    start: {
      dateTime: startDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: endDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    attendees: [{ email: 'joshuaoluwole25@gmail.com' }],
    conferenceData: {
      createRequest: {
        requestId: unique_id,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
    sendNotifications: true,
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
  };
};

export const pricingPlans = [
  {
    plan: 'Starter',
    planDescription:
      'Helpful for businesses looking to enter the digital realm',
    planPrice: '$1000/mo',
    planPackages: [
      'Content Creation',
      'Outbound Advertisements',
      'SM Marketing',
      'Marketing Strategy',
    ],
  },
  {
    plan: 'Professional',
    planDescription:
      'Helpful for larger businesses or those that are looking to scale their business.',
    planPrice: '$3000/mo',
    planPackages: [
      'Plans from Starter',
      'Search Engine Optimization',
      'Email Marketing',
      'Media Management',
      'Website Design',
      'Website Development',
    ],
  },
  {
    plan: 'Enterprise',
    planDescription:
      'Specifically designed for large organizations with complex needs. ',
    planPrice: '$5000/mo',
    planPackages: [
      'Plans from Professional',
      'In-app Advertisements',
      'Leads Generation',
      'E-commerce Platform',
      'Prospecting',
      'Sequencing & Automations',
      'Collaboration and Outreach Marketing',
    ],
  },
];

export const featureItems = [
  {
    feature: 'Content Creation',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'Outbound Advertisements',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'SM Marketing',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'Marketing Strategy',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    feature: 'Search Engine Optimization',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'Email Marketing',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'Media Management',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'Website Design',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'Website Development',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'In-app Advertisment ',
    starter: true,
    professional: true,
    enterprise: false,
  },
  {
    feature: 'Leads Generation',
    starter: true,
    professional: false,
    enterprise: false,
  },
  {
    feature: 'E-commerce Platform',
    starter: true,
    professional: false,
    enterprise: false,
  },
  {
    feature: 'Prospecting',
    starter: true,
    professional: false,
    enterprise: false,
  },
  {
    feature: 'Sequencing & Automation',
    starter: true,
    professional: false,
    enterprise: false,
  },
  {
    feature: 'Collaboration & Outreach Marketing',
    starter: true,
    professional: false,
    enterprise: false,
  },
];

export const faqContent = [
  {
    faqHeader: 'What is Chrone Company?',
    faqAnswer:
      'Chrone is a B2B digital marketing agency that delivers on SEO, email marketing, content marketing and Facebook/Google Ads. We develop, strengthen and promote our client’s business by implementing innovative, data-driven strategies.',
  },
  {
    faqHeader: 'Why should I work with Chrone on my Digital Strategy?',
    faqAnswer:
      'We have a highly creative team with a track record of delivering effective, integrated campaigns focused on generating measurable results. And beyond results; we deliver relationships that matter every single day.',
  },
  {
    faqHeader: 'What do I need to do as a client as part of the process?',
    faqAnswer:
      'We will need your collaboration. We believe no one understands your business better than you. So we’re your partners throughout the process from ideation to execution.',
  },
  {
    faqHeader: 'Can you guarantee SEO results?',
    faqAnswer:
      'A ‘yes’ would have been a cheap answer to impress you, but relationship built on trust matters to us. We understand that Google is constantly updating their algorithm and there will always be fluctuations, which makes it difficult to guarantee SEO results. But you can be assured that we will help you navigate the increasingly complex and highly competitive search landscape which will increase organic leads, conversion and revenue.',
  },
  {
    faqHeader: 'How long does it take to rank #1 from SEO?',
    faqAnswer:
      'It takes months to see results and more months to grow results. We won’t fall into the ditch of emotionally satisfying you by selling rankings (output) to you, which is what most SEO firms do. Rankings matter, but what is ranking without leads generation and sales. Because we understand the dynamics of SEO today, we focus more on generating leads and sales, the (outcome) you want, and this takes time. So the question to ask is ‘how long will it take for SEO to start generating leads and sales?’',
  },
  {
    faqHeader: 'What social media platform should my business be active?',
    faqAnswer: `
    The platform(s) you choose depend(s) on your type of business, your target audience and where they choose to spend their time online. Here is clue: 
    Facebook remains one of the most popular platforms for businesses. It has proven to be a perfect place to create conversations with your customers, drive engagement and to target specific audiences.
    More popular with the younger demographic, Instagram offers a perfect place for your business to enhance your visibility, showcase your products or services and to establish your brand identity. 
    Twitter offers a unique way of connecting you to your audience by building a strong profile, consistently sharing contents relevant to business and using the right hashtags to help you reach a wider audience. 
    All business owners, especially B2B, should have a presence on LinkedIn with an active profile. While company pages help to highlight any news or blog articles, you should also get your employees on board and have them share relevant articles, company news, professional achievements and industry advice from their own profiles.`,
  },
  {
    faqHeader: 'How do you know what to post on social media?',
    faqAnswer:
      'The simple answers is, understand your audience. Understanding your audience help create relevant contents tailored to their needs.',
  },
];
