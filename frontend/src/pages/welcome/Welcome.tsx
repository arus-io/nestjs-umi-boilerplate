import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import styles from './Welcome.less';
import { useModel } from 'umi';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const intl = useIntl();
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <Card>
        <Alert
          message={`Welcome ${initialState.currentUser?.firstName} to the ARUS Boilerplate`}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />

        <Typography.Text
          style={{
            marginBottom: 12,
          }}
        >
          This is a test
        </Typography.Text>
      </Card>
    </PageContainer>
  );
};
