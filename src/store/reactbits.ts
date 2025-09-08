import { createStore } from './createStore';
import { hyperspeedPresets } from '@/utils/reactbitsConfig';
/**
 * 1. Reactbits的background有多个值，用一个Map进行管理，切换时如果在Map中存在，就切换到该值，否则不切换
 * 2. 不同的background有它自己的配置项，目前常见的配置项组件有Select，Slider，Switch，通过backgroundMap进行管理
 *    {
 *      Hyperspeed: {
 *        animationPreset: {
 *           value: '预设1',
 *           type: 'Select',
 *           options: [{ label: '预设1', value: {.....} }, { label: '预设2', value: {.....} }]
 *        }
 *      }
 *    }
 *
 */
/**
 * Reactbits 状态接口
 */
type ReactbitsBackground = 'Hyperspeed';

export interface ReactbitsState {
  background: ReactbitsBackground;
  setBackground: (background: ReactbitsBackground) => void;
  backgroundConfig: {
    Hyperspeed: {
      animationPreset: keyof typeof hyperspeedPresets;
    };
  };
  changeBackgroundConfig: (config: {
    Hyperspeed: {
      animationPreset: keyof typeof hyperspeedPresets;
    };
  }) => void;
}

/**
 * Reactbits 状态store
 */
export const useReactbitsStore = createStore<ReactbitsState>(
  (set, get) => ({
    // 初始状态
    background: 'Hyperspeed',
    backgroundConfig: {
      Hyperspeed: {
        animationPreset: 'one'
      }
    },
    // 设置背景
    setBackground: (background: ReactbitsBackground) => {
      set({
        background
      });
    },
    changeBackgroundConfig(config: ReactbitsState['backgroundConfig']) {
      console.log('🌍 ~ changeBackgroundConfig ~ config:', config);
      const currentBackground = get().background;
      const currentBackgroundConfig = get().backgroundConfig;
      set({
        backgroundConfig: {
          ...currentBackgroundConfig,
          [currentBackground]: {
            ...(currentBackgroundConfig[currentBackground] || {}),
            ...(config[currentBackground] || {})
          }
        }
      });
    }
  }),
  'reactbits'
);
