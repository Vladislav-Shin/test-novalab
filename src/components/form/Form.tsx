import useService from '../../services/Services';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  PageHeader,
} from 'antd';
import { openNotification } from '../../utils';

import 'antd/dist/antd.css';
import './form.scss';

const FormRegistration: React.FC = () => {
  const { registrationUser, logInUser, process, setProcess } = useService();
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values: any) => {
    if (location.pathname === '/sign-in') {
      logInUser(values)
        .then(data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('idUser', data.id);
        })
        .then(() => setProcess('confirmed'))
        .then(() => navigate('/'))
        .catch(() => openNotification('error', 'Wrong email or password'));
    } else {
      registrationUser(values)
        .then(data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('idUser', data.id);
        })
        .then(() => setProcess('confirmed'))
        .then(() => navigate('/'))
        .catch(() => openNotification('error', 'Wrong email or password'));
    }
  };

  return (
    <div className="form">
      <div className="container">
        <div className="form__inner">
          <PageHeader
            className="site-page-header"
            title={location.pathname === '/sign-in' ? 'Log in' : 'Registration'}
          />
          <Form
            size="large"
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" loading={process === 'loading' ? true : false}>
                {location.pathname === '/sign-in' ? 'Log in' : 'Regist'}
              </Button>
              {location.pathname === '/sign-in' ? (
                <NavLink to="/registration">Or register now!</NavLink>
              ) : (
                <NavLink to="/sign-in">Or sign in now!</NavLink>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
};

export default FormRegistration;