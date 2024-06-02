import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

const InputFish = ({ fishes, setFishes, addFish, removeFish }) => {
    const [errors, setErrors] = useState([]);

    const setFishName = (index, text) => {
        const updatedFishes = [...fishes];
        updatedFishes[index].fishName = text;
        setFishes(updatedFishes);
    }

    const setFishLength = (index, text) => {
        const numericText = text.replace(/[^0-9]/g, '');
        const updatedFishes = [...fishes];
        updatedFishes[index].fishLength = numericText;
        setFishes(updatedFishes);

        const updatedErrors = [...errors];
        if (text !== numericText) {
            updatedErrors[index] = '숫자만 입력할 수 있습니다.';
        } else {
            updatedErrors[index] = null;
        }
        setErrors(updatedErrors);
    }

    return (
        <View style={styles.container}>
            {fishes && fishes.map((fish, index) => (
                <View key={index} style={styles.fishContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>종류 : </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='종류'
                            value={fish.fishName}
                            onChangeText={(text) => { setFishName(index, text) }}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>길이 : </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='길이'
                            value={fish.fishLength}
                            onChangeText={(text) => setFishLength(index, text)}
                            keyboardType='numeric'
                        />
                    </View>
                    {errors[index] && <Text style={styles.errorText}>{errors[index]}</Text>}
                    <Button title="삭제" onPress={() => removeFish(index)} />
                </View>
            ))}
            <Button title="추가" onPress={addFish} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    fishContainer: {
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    text: {
        fontSize: 20,
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});

export default InputFish;
