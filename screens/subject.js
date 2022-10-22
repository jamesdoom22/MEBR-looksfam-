
import { useEffect } from "react";
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";


export default function Subject({ navigation, route }) {
    const { subject } = route.params;
    useEffect(() => {
        navigation.setOptions({ title: subject })
    }, [])
    
    return (
        <SafeAreaView style={{ 
            flex: 1, 
            flexDirection: 'column',
            padding: 5, 
            alignItems: 'center', 
            backgroundColor: '#252C4A', 
            justifyContent: 'center',
            }}>
            <View style={{
                flex: 4, 
                //backgroundColor: 'red', 
                height: '100%', 
                width: '100%'}}>
            <Image
                style={styles.banner}
                source={require('./Subjects.png')} resizeMode="contain"></Image>
            </View>
            <View style={{
                flex: 1, 
                //backgroundColor: 'green', 
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                }}>
                <Text style={styles.subText}>{subject}</Text>
            </View>
            <View style={{
                flex: 5, 
                //backgroundColor: 'blue'
                }}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic', { topic: 'Mathematics, Engineering, Science and Law', subject: subject })}>
                <Text style={styles.buttonText}>Mathematics, Engineering, Sciences, Law</Text>
            </TouchableOpacity>
            < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic', { topic: 'Machine Design, Materials and Shop Practiced', subject: subject })}>
                <Text style={styles.buttonText}>Machine Design, Materials, Shop Practice</Text>
            </TouchableOpacity >
            < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic', { topic: 'Power and Industrial Plant Engineering', subject: subject })}>
                <Text style={styles.buttonText}>Power and Industrial Plant Engineering</Text>
            </TouchableOpacity >
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2, borderColor: '#1E90FF'+'40',
        backgroundColor: '#1E90FF'+'20',
        height: 60, borderRadius: 10,
        minWidth: '100%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center', justifyContent: 'space-around',
        marginVertical: 5,
    },
    banner: {
        maxHeight: '100%',
        maxWidth: '100%',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    subText: {
        fontSize: 25,
        color: 'white',
    },
});
