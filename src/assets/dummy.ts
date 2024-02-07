import avatar from './avatar.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import card_img1 from './card_img1.png'
import card_img2 from './card_img2.png'
import card_img3 from './card_img3.png'
import expierence_img from './expierence.png'

export const homeData = {
  h1: 'Join the Game',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  button: 'Explore'
}
export const featuredData = {
  h1: 'Featured',
  card_h1: 'Martian Quest',
  card_p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore`,
  button: 'Play now',
  video_url: 'https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4'
}
export const awardData = {
  h1: 'Martian Quest Wins Mobile Game Awards',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  img_url: avatar
}

export const gamesData = {
  h1: 'More Games',
  cards: [
    {
      img: icon1,
      bg_img: card_img1,
      card_h1: 'The Unknown',
      card_type: 'Adventure',
      card_p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
      button: 'Play now',
      delay: 0.4
    },
    {
      img: icon2,
      bg_img: card_img2,
      card_h1: 'Dragons Lair',
      card_type: 'RPG',
      card_p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
      button: 'Play now',
      delay: 0.8
    },
    {
      img: icon3,
      bg_img: card_img3,
      card_h1: 'Atactic',
      card_type: 'Strategy',
      card_p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore",
      button: 'Play now',
      delay: 1.2
    },
  ]
}
export const aboutData = {
  h1: 'About us',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  button: 'Learn more'
}

export const experienceData = {
  h1: 'A Perfect Gaming Experience',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  button: 'Explore',
  img: expierence_img
}
export const workWithUs = {
  h1: 'Work with us',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt`,
  button: 'Open Positions',
}

export const subscribe = {
  h1: 'Subscribe',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt`,
}
export const footer = {
  h1: 'Gigaplay',
  p: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore`,
  contact: {
    h1: 'Contact',
    others: [
      'Info',
      "email@email.com",
      'Tel: 5555-5555'
    ]
  },
  quickMenu: {
    h1: 'Quick Menu',
    others: [
      'Games', 'Company', 'Careers', 'Contact'
    ]
  },
  socials: {
    h1: 'Socials',
    others: [
      'Facebook', 'Instagram', 'Twitter', 'Youtube'
    ]
  },
}

export const navbar = {
  logo: 'Web Games',
  links: [
    {
      url: '#home',
      text: 'Home'
    },
    {
      url: '#games',
      text: 'Games'
    },
    {
      url: '#experience',
      text: 'Experience'
    },
    {
      url: '#contact',
      text: 'Contact'
    },
  ]
}