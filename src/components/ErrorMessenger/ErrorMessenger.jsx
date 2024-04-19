import clsx from "clsx";
import style from "./ErrorMessenger.module.css";

const ErrorMessege = () => {
  return (
    <div className={clsx(style.errorContainer)}>
      <p className={clsx(style.errorText)}>
        Unfortunately, the add-on is not working at the moment❗ Please try
        again later 😅
      </p>
    </div>
  );
};

export default ErrorMessege;
