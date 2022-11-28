import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from '../state'

const Providers: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ConfigProvider>
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  )
}

export default Providers
