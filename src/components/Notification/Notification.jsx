import { toast } from 'react-toastify';
import { Notice, Icon } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ status, children }) => {
  return (
    <Notice status={status}>
      <Icon widt="20px" height="20px">
        {status === 'error' && (
          <path
            fill="#ef5350"
            d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
          ></path>
        )}
        {status === 'warning' && (
          <path
            fill="#ff9800"
            d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
          ></path>
        )}
        {status === 'info' && (
          <path
            fill="#03a9f4"
            d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
          ></path>
        )}
      </Icon>
      {children}
    </Notice>
  );
};

Notification.propTypes = {
  status: PropTypes.string,
  children: PropTypes.node,
};

export const showError = text => toast.error(text);

export const showSuccess = text => toast.success(text);

export const showWarning = text => toast.warn(text);
