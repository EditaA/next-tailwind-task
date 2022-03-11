const ChevronIcon = ({ classes, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.5em"
      height="1.5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      className={classes}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
      />
    </svg>
  );
};

export default ChevronIcon;
