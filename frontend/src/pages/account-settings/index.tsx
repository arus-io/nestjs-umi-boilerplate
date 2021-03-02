import React from 'react';
import ProForm, { ProFormText } from '@ant-design/pro-form';import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useModel } from 'umi';

export default (): React.ReactNode => {
  const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <ProForm initialValues={initialState?.currentUser}
               onFinish={async (values) => {
        console.log(values);
      }}>
        <ProFormText name="firstName" label="First Name" required />
        <ProFormText name="lastName" label="Last Name" required/>
        <ProFormText name="email" label="Email" required />
      </ProForm>
    </PageContainer>
  );
};
