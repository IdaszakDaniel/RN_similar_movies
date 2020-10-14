import loginComponent from './loginComponent'
import mockedLoginComponent from '../../../e2e/mocks/mockedLoginComponent'
import Config from 'react-native-config'

const env = Config.ENVIRONMENT || null

export default env === 'e2e' ? mockedLoginComponent : loginComponent
