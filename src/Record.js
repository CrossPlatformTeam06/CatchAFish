import { View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InputDate from "./InputDate";
import InputPlace from './InputPlace';
import InputFish from './InputFish';

export default function Record(){

    return(<>
        <InputDate/>
        <InputPlace/>
        <InputFish/>
        <StatusBar style='auto'/>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flow',
        alignItems: 'center',
        flexDirection : 'row',
        margin : 20,
      }
})

