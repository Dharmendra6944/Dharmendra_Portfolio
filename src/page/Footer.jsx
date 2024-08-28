import React from 'react'

import { Bio } from '../data/Bio';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const footerContainer = "overflow-hidden bg-gray-950 text-cyan-600";
const footerWrapper = "flex flex-col justify-center items-center gap-5 p-4";
const logo = "mt-5 md:mt-7 text-3xl font-semibold text-amber-600";
const socialMediaWrapper = "flex justify-center items-center gap-1";
const socialMediaIcon = "ml-4 md:mx-5 hover:text-cyan-400 text-2xl";
const copyright = "mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerContainer}>
      <div className={footerWrapper}>
        <div className={logo}>{Bio.name}</div>
        <div className={socialMediaWrapper}>
          {Bio.github && <a className={socialMediaIcon} href={Bio.github} target='_blank' rel='noopener noreferrer'><FaGithub /></a>}
          {Bio.linkedin && <a className={socialMediaIcon} href={Bio.linkedin} target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>}
          {Bio.youtube && <a className={socialMediaIcon} href={Bio.youtube} target='_blank' rel='noopener noreferrer'><FaYoutube /></a>}
          {Bio.twitter && <a className={socialMediaIcon} href={Bio.twitter} target='_blank' rel='noopener noreferrer'><FaTwitter /></a>}
          {Bio.facebook && <a className={socialMediaIcon} href={Bio.facebook} target='_blank' rel='noopener noreferrer'><FaFacebook /></a>}
          {Bio.instagram && <a className={socialMediaIcon} href={Bio.instagram} target='_blank' rel='noopener noreferrer'><FaInstagram /></a>}
        </div>
        <div className={copyright}>
          <span>&copy; {currentYear}</span>
          <span>reserved.</span>
          <span>A Family of Love & Care.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// import { Bio } from '../data/Bio';
// import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

// const footerContainer = "overflow-hidden bg-gray-950 text-cyan-600";
// const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
// const logo = `mt-5 md:mt-7 text-3xl font-semibold text-amber-600 `;
// const socialMediaWrapper = `flex justify-center items-center gap-1`;
// const socialMediaIcon = `ml-4 md:mx-5 hover:text-cyan-400 text-2xl`;
// const copyright = ` mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

// // Reserved some catagry to add
// function Footer() {
//   return (
//     <footer className={footerContainer}>
//       <div className={footerWrapper}>
//         <div className={logo}> {Bio.name}</div>
//         <div className={socialMediaWrapper}>
//           <a className={socialMediaIcon} href={Bio.github} target='_blank'><FaGithub /></a>
//           <a className={socialMediaIcon} href={Bio.linkedin} target='_blank'><FaLinkedin /></a>
//           <a className={socialMediaIcon} href={Bio.youtube} target='_blank'><FaYoutube /></a>
//           <a className={socialMediaIcon} href={Bio.twitter} target='_blank'><FaTwitter /></a>
//           <a className={socialMediaIcon} href={Bio.facebook} target='_blank'><FaFacebook /></a>
//           <a className={socialMediaIcon} href={Bio.instagram} target='_blank'><FaInstagram /></a>
//         </div>
//         <div className={copyright}>
//           <span>&copy; 2027 </span>
//           <span>All rights reserved.</span>
//           <span>A Family of Love & Affection. </span>
//         </div>
//       </div>
//     </footer >
//   )
// }

// export default Footer