import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Link, history, useModel } from 'umi';
import Footer from '@/components/Footer';
import { AuthControllerUserLogin } from '@/services/arus-boilerplate/auth';

import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
  }, 10);
};

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.UserLoginDto>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleSubmit = async (values: API.UserLoginDto) => {
    setSubmitting(true);
    try {
      const msg = await AuthControllerUserLogin({ ...values, type });
      if (msg.token) {
        message.success('Success!');
        localStorage.setItem('accessToken', msg.token.accessToken);
        setInitialState({
          ...initialState,
          currentUser: msg.user,
        });
        goto();
        return;
      }
      setUserLoginState(msg);
    } catch (error) {
      message.error('Login failed, please try again!');
    }
    setSubmitting(false);
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.png" />
              <span className={styles.title}>Arus Boilerplate</span>
            </Link>
          </div>
          <div className={styles.desc}>umi.js + ant-design-pro + nest.js</div>
        </div>

        <div className={styles.main}>
          <ProForm
            initialValues={{
              autoLogin: true,
            }}
            submitter={{
              searchConfig: {
                submitText: 'Login',
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              handleSubmit(values as API.LoginPayloadDto);
            }}
          >

            {status === 'error' && loginType === 'account' && (
              <LoginMessage
                content={status}
              />
            )}
            {type === 'account' && (
              <>
                <ProFormText
                  name="email"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder={"user@mail.com or admin@mail.com"}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your username",
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your password",
                    },
                  ]}
                />
              </>
            )}

          </ProForm>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
