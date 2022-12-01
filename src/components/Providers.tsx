import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from '../state'

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    // antd-v5
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00a484',
          colorLink: '#52c41a',
          colorSuccess: '#52c41a',
        },
      }}
    >
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  )
}

export default Providers
