import { useNavigate } from 'react-router';
import { Button, Result } from 'antd';

const Page403 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Result
      status='403'
      title='403'
      subTitle='您没有权限访问此页面'
      extra={
        <Button type='primary' onClick={handleGoBack}>
          返回首页
        </Button>
      }
    />
  );
};

export default Page403;
