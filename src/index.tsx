import { NativeModules, Platform } from 'react-native'
type AndroidMetaDataType = {
  getKey(name: string): Promise<string>
}
let AndroidMetaData: AndroidMetaDataType = {
  getKey: () => new Promise((resolve) => resolve('IOS is not supported'))
}
if (Platform.OS === 'android') AndroidMetaData = NativeModules.AndroidMetaData
export default AndroidMetaData as AndroidMetaDataType
