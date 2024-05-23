import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function StandardFooter({ curScreen, setCurScreen }) {
  const linkClick = (dest) => {
    setCurScreen(dest);
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      <div className="contact-info">
        <h3>Contact us</h3>
        <br />
        <p>Aydan Ables<br /><strong>b2025aaables@pshs.edu.ph</strong></p> <br />
        <p>Gian Ong<br /><strong>b2025gjdong@pshs.edu.ph</strong></p> <br />
        <p>Ieuan Vinluan<br /><strong>b2025idrvinluan@pshs.edu.ph</strong></p>
      </div>
      <div className="footer-navigation">
        <h3>Links</h3>
        <br />
        <button type="button" onClick={() => {linkClick('home')}}>Home</button> <br /> <br />
        <button type="button" onClick={() => {linkClick('lesson1')}}>Kinematic Equations</button> <br /> <br />
        <button type="button" onClick={() => {linkClick('lesson3')}}>Free Fall</button>
      </div>
      <div className="other-links">
        <h3>Other links</h3>
        <br />
        <div className="github-repo">
          <a href="https://github.com/Ieuan-Vinluan/r2-z1-03-bilingual-learning-tool"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://github.com/Ieuan-Vinluan/r2-z1-03-bilingual-learning-tool">Github Repository</a>
        </div>
      </div>
      <div className="misc">
        <hr />
      </div>
    </footer>
  )
}
