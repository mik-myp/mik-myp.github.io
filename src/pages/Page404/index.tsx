import { useNavigate } from 'react-router';
import { Button, Result } from 'antd';

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Result
      status='404'
      title='404'
      subTitle='页面不存在'
      extra={
        <Button type='primary' onClick={handleGoBack}>
          返回首页
        </Button>
      }
    />
  );
};

export default Page404;
