import { notification } from 'antd';

export const openNotification = (type: string, description: string) => {
  if (type == 'error') {
    notification.error({
      message: <h3>Error</h3>,
      description: description
    });
  } else {
    notification.success({
      message: <h3>Success</h3>,
      description: description
    });
  }
};