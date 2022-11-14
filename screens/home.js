//import { StatusBar } from "expo-status-bar";
import { StatusBar, Image, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { signInWithGoogle } from "../hooks/useAuth";
import { test } from "../data/test";
export default function Home({ navigation }) {

    const decode = () => {

        let arr = test.split('<flow htmlhint="questioncontainer">')
        //remove index 0
        arr.shift();
        //remove odd index that is duplicate
        for (var i = 0; i < arr.length; i++) {
            arr.splice(i + 1, 1);
        }

        let filterd = [];
        for (var i = 0; i < arr.length; i++) {
            let item = arr[i].substring(0, arr[i].indexOf('/response_lid'))
            let data = {
                choices: [],
                correctAnswer: "",
                question: "",
                topic: "NA",
            }
            let inner1 = item;
            let inner1Arr = inner1.split('<mattext texttype="text/html">');
            inner1Arr.shift();
            let question1 = inner1Arr[0].substring(0, inner1Arr[0].indexOf('</mattext>')).replace(/[\r\n]/gm, '');
            data.question = question1.replace('                                        ', ' ');

            let inner1Arr2 = inner1.split('<response_label');
            inner1Arr2.shift();
            for (var a = 0; a < inner1Arr2.length; a++) {
                let choice = inner1Arr2[a]
                let str = choice.substring(choice.indexOf('/html\">') + 7, choice.indexOf('</mattext>'))

                data.choices.push(str)
                if (choice.includes(`10`)) {

                    data.correctAnswer = str
                }

            }

            console.log(data, "")
            filterd.push(data)
        }
        console.log("🚀 ~ Number of questions: ", filterd.length)
    }

    //decode();

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
                flex: 10,
                alignItems: 'center',
                //backgroundColor: 'red',
            }}>
                {/* <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
                    <Text style={styles.buttonText}>Google Signin</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'Math' })}>
                    <Text style={styles.buttonText}>Math</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'MD' })}>
                    <Text style={styles.buttonText}>MD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'Pipe' })}>
                    <Text style={styles.buttonText}>Pipe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Subject', { subject: 'Redbook' })}>
                    <Text style={styles.buttonText}>Redbook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Topic', { subject: 'Constants', topic: '' })}>
                    <Text style={styles.buttonText}>Constants</Text>
                </TouchableOpacity>
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
        //underlayColor: 'white',
        borderWidth: 3, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        height: 50, borderRadius: 10,
        minWidth: '90%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 16,
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
