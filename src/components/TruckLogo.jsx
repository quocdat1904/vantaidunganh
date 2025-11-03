
import React from 'react';

const TruckLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 13.5C2.5 12.3954 3.39543 11.5 4.5 11.5H11.5V17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V13.5Z"
      stroke="#0066ff"
      strokeWidth="1.5"
    />
    <path
      d="M11.5 11.5H19.5C20.6046 11.5 21.5 12.3954 21.5 13.5V14.5C21.5 15.6046 20.6046 16.5 19.5 16.5H11.5V11.5Z"
      stroke="#0066ff"
      strokeWidth="1.5"
    />
    <path
      d="M13.5 11.5V6.5C13.5 5.39543 14.3954 4.5 15.5 4.5H19.5C20.6046 4.5 21.5 5.39543 21.5 6.5V11.5H13.5Z"
      stroke="#0066ff"
      strokeWidth="1.5"
    />
    <circle cx="6" cy="19" r="2" stroke="#0066ff" strokeWidth="1.5" />
    <circle cx="17" cy="19" r="2" stroke="#0066ff" strokeWidth="1.5" />
  </svg>
);

export default TruckLogo;
