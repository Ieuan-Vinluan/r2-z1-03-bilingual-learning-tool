import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function StandardFooter() {
  return (
    <footer>
      <div className="cright">
        
      </div>
      <div className="contact-info">
        <div>
          <a href=""><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </div>
      </div>
      <div className="sources">

      </div>
    </footer>
  )
}
