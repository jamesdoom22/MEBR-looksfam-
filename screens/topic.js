
import { useEffect, useState } from "react";
import { StatusBar, Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";

export default function Topic({ navigation, route }) {
    const { topic, subject } = route.params;
    //console.log("🚀 ~ file: topic.js ~ line 7 ~ Topic ~ topic, subject", topic, subject)
    useEffect(() => {
        navigation.setOptions({ title: topic ? topic : subject })
    }, [])

    const [number, setNumber] = useState(10); // 10 20 50 100
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#252C4A',
            //marginTop: StatusBar.currentHeight, 
        }}>
            {/* <Text style={{ marginBottom: 10 }}>{subject} {topic}</Text> */}
            <View>
                <Text style={styles.text}>Number of questions:</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={number === 10 ? styles.buttonGrayActive : styles.buttonGray} onPress={() => setNumber(10)}>
                        <Text style={styles.text}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={number === 20 ? styles.buttonGrayActive : styles.buttonGray} onPress={() => setNumber(20)}>
                        <Text style={styles.text}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={number === 50 ? styles.buttonGrayActive : styles.buttonGray} onPress={() => setNumber(50)}>
                        <Text style={styles.text}>50</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={number === 100 ? styles.buttonGrayActive : styles.buttonGray} onPress={() => setNumber(100)}>
                        <Text style={styles.text}>100</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.buttontake} onPress={() => navigation.navigate('Quiz', { topic: topic, subject: subject, number: number })}>
                <Text style={styles.buttonText}>Take Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            {/* < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', {subject: subject})}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity > */}
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    row: {

        flexDirection: "row",
    },
    text: {
        color: 'white',
    },
    button: {
        borderWidth: 2, borderColor: '#1E90FF' + '80',
        backgroundColor: '#3498db' + '10',
        minWidth: '40%',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
        marginVertical: 10,
    },
    buttontake: {
        borderWidth: 2, borderColor: '#1E90FF' + '90',
        backgroundColor: '#3498db' + '10',
        minWidth: '40%',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50,
    },
    buttonGray: {
        borderWidth: 2, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        minWidth: '15%',
        marginVertical: 20,
        padding: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 15,
    },
    buttonGrayActive: {
        backgroundColor: '#00C851',
        borderWidth: 2, borderColor: '#00C851' + '90',
        minWidth: '15%',
        marginVertical: 20,
        padding: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
});
