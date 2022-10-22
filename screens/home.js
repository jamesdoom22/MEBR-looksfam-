//import { StatusBar } from "expo-status-bar";
import { StatusBar, Image, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES } from '../Constants';



export default function Home({ navigation }) {

    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            backgroundColor: '#252C4A',
            //backgroundColor: 'red',
            padding: 10,
        }}>
            <View style={{
                flex: 8,
                //backgroundColor: 'orange',

            }}>
                <Image style={styles.banner} source={require('./Home.png')} resizeMode="contain"></Image>
            </View>
            <View style={{
                flex: 5,
                alignItems: 'center',
                //backgroundColor: 'red',
            }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'Elements' })}>
                    <Text style={styles.buttonText}>Elements</Text>
                </TouchableOpacity>
                < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'Problems' })}>
                    <Text style={styles.buttonText}>Problems</Text>
                </TouchableOpacity >
                < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic', { subject: 'Constants', topic: '' })}>
                    <Text style={styles.buttonText}>Constants</Text>
                </TouchableOpacity >
            </View>
            <View style={{
                flex: 1,
                //backgroundColor: 'orange',
                justifyContent: 'flex-end',
            }}>
                <Text style={styles.powText}>Powered by: LooksFamDev</Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    buttonHL: {
        backgroundColor: 'white',
        color: 'black',
    },
    button: {
        underlayColor: 'white',
        borderWidth: 3, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        height: 60, borderRadius: 10,
        minWidth: '90%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    powText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
    },
    banner: {
        height: '100%',
        width: '100%',
    },
    textHead: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 20,
        alignItems: 'center'
    },

});
