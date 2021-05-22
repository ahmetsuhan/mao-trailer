import React from "react";

const Star = ({ filled }) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.93068 11.9893C7.34803 11.683 6.65197 11.683 6.06932 11.9893L5.29688 12.3954C3.82962 13.1668 2.11476 11.9208 2.39498 10.287L2.5425 9.42691C2.65378 8.77812 2.43868 8.11612 1.96731 7.65664L1.34239 7.0475C0.155355 5.89043 0.810376 3.87448 2.45082 3.63611L3.31443 3.51062C3.96585 3.41597 4.52898 3.00683 4.82031 2.41654L5.20653 1.63397C5.94016 0.147478 8.05984 0.147479 8.79347 1.63397L9.17969 2.41654C9.47102 3.00683 10.0341 3.41597 10.6856 3.51062L11.5492 3.63611C13.1896 3.87448 13.8446 5.89043 12.6576 7.0475L12.0327 7.65664C11.5613 8.11612 11.3462 8.77812 11.4575 9.42691L11.605 10.287C11.8852 11.9208 10.1704 13.1668 8.70312 12.3954L7.93068 11.9893Z"
        fill={filled ? "#D6182A" : "#ddd"}
      />
    </svg>
  );
};

export default React.memo(Star);