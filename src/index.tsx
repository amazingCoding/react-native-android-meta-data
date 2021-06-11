import { NativeModules } from 'react-native';

type AndroidMetaDataType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AndroidMetaData } = NativeModules;

export default AndroidMetaData as AndroidMetaDataType;
