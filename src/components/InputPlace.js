import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InputPlace({ place, setPlace }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>장소 : </Text>
            <TextInput
                style={styles.textInput}
                value={place}
                onChangeText={setPlace}
                placeholder='장소'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
    },
    textInput: {
        width: 250,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
