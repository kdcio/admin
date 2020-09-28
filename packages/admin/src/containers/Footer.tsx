import * as React from 'react';
import { CFooter } from '@coreui/react';

const Footer: React.FC = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://www.kdcsoftware.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          KDC CMS
        </a>
        <span className="ml-1">&copy; 2020 KDC Labs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://github.com/kdcsoftware/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          KDC Admin
        </a>
      </div>
    </CFooter>
  );
};

export default Footer;
