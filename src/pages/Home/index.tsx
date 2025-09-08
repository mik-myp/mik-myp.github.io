import Hyperspeed, { HyperspeedProps } from '@/components/Hyperspeed';
import { useGlobalStore, useReactbitsStore } from '@/store';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Select, Space, Tour, TourProps } from 'antd';
import { useRef, useState } from 'react';
import {
  hyperspeedPresets,
  ReactbitsConfig,
  reactbitsConfigsMap
} from '@/utils/reactbitsConfig';

const Home = () => {
  const { background, backgroundConfig, changeBackgroundConfig } =
    useReactbitsStore();
  const { tourOpen, setTourOpen } = useGlobalStore();
  const [open, setOpen] = useState(false);

  const [initialBackGroundConfig, setInitialBackGroundConfig] = useState(() => {
    return backgroundConfig;
  });
  const configRef = useRef(null);

  const steps: TourProps['steps'] = [
    {
      title: '修改背景配置',
      description: '点击该按钮后可以修改当前背景配置',
      target: () => configRef.current
    }
  ];

  const bitsRender = () => {
    if (background === 'Hyperspeed') {
      return (
        <Hyperspeed
          effectOptions={
            hyperspeedPresets[
              initialBackGroundConfig.Hyperspeed
                .animationPreset as keyof typeof hyperspeedPresets
            ] as unknown as HyperspeedProps['effectOptions']
          }
        />
      );
    }
    return null;
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setInitialBackGroundConfig(backgroundConfig);
  };

  const onSubmit = () => {
    changeBackgroundConfig(initialBackGroundConfig);
    setOpen(false);
  };

  const renderFormItemComponent = (config: ReactbitsConfig) => {
    if (config.type === 'Select') {
      return <Select options={config.options} allowClear={false} />;
    }
    return null;
  };

  return (
    <>
      {bitsRender()}
      <div className='absolute top-5 right-5 text-white'>
        <Button
          ref={configRef}
          type='text'
          icon={<MenuOutlined />}
          onClick={showDrawer}
          className='text-white'
        />
      </div>
      {/* <div className='absolute top-0 right-0 flex items-center flex-col w-full h-full pointer-events-none'>
        <p className='text-white text-2xl mt-4 text-center font-bold'>
          点击并按住试试
        </p>
      </div> */}
      <Drawer
        destroyOnHidden
        title='修改背景配置'
        width={360}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80
          }
        }}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={onSubmit} type='primary'>
              确定
            </Button>
          </Space>
        }
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={
            backgroundConfig[background as keyof typeof backgroundConfig]
          }
          onValuesChange={(values) => {
            setInitialBackGroundConfig({
              ...initialBackGroundConfig,
              [background]: values
            });
          }}
        >
          {Object.entries(
            reactbitsConfigsMap[background as keyof typeof reactbitsConfigsMap]
          ).map(([nameKey, config]) => {
            return (
              <Form.Item name={nameKey} label={config.label} key={nameKey}>
                {renderFormItemComponent(config)}
              </Form.Item>
            );
          })}
        </Form>
      </Drawer>
      <Tour
        steps={steps}
        mask={false}
        open={tourOpen}
        onClose={() => {
          setTourOpen(false);
        }}
        onFinish={() => {
          setTourOpen(false);
        }}
      />
    </>
  );
};

export default Home;
