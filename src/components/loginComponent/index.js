import loginComponent from './loginComponent'
import mockedLoginComponent from '../../../e2e/mocks/mockedLoginComponent'
import Config from 'react-native-config'

export default Config.ENVIRONMENT === 'e2e'
  ? mockedLoginComponent
  : loginComponent
