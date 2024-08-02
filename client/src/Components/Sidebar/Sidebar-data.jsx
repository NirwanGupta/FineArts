import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {MdEmojiEvents} from 'react-icons/md';
import {GrWorkshop} from 'react-icons/gr';
import { AiFillInteraction } from "react-icons/ai";
import { GiTeamUpgrade } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/events',
    text: 'events',
    icon: <MdEmojiEvents />,
  },
  {
    id: 3,
    url: '/workshops',
    text: 'workshops',
    icon: <GrWorkshop />,
  },
  {
    id: 4,
    url: '/collaboration',
    text: 'collaboration',
    icon: <AiFillInteraction />,
  },
  {
    id: 5,
    url: '/sponsors',
    text: 'Our Sponsors',
    icon: <FaPiggyBank />,
  },
  {
    id: 6,
    url: '/ourAllies',
    text: 'our allies',
    icon: <GiTeamUpgrade />,
  },
  {
    id: 7,
    url: '/team',
    text: 'Developers Team',
    icon: <FaUserFriends />,
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.x.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/company/fine-arts-modelling-club/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.instagram.com/fineartsclub.nitkkr',
    icon: <FaInstagram />,
  },
  {
    id: 5,
    url: 'https://www.youtube.com',
    icon: <FaYoutube />,
  },
];
