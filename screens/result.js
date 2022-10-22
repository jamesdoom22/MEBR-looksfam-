import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Result({ navigation, route }) {
  const { score, num_ques, time, questions, answers, answersIndex } = route.params;
  const [myScore, setMyScore] = useState(score)

  const secondsToHms = (time) => {
    time = Number(time);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#252C4A',
      padding: 15,
    }}>
      <View style={{
        flex: 3,
        width: '100%',
        //paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'flex-end',
        //backgroundColor:'green',
      }}>
        <TouchableOpacity style={styles.buttonScore}>
          <View>
            <Text style={styles.correctText}>{myScore}</Text>
            <Text style={styles.correctText}>Correct</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonScore}>
          <Text style={styles.incorrectText}>{num_ques - myScore}</Text>
          <Text style={styles.incorrectText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        width: '100%',
        //backgroundColor: 'blue',
        alignItems: 'center',
        paddingVertical: 10,
      }}>
        <TouchableOpacity style={styles.buttonTime}>
          <Text style={styles.incorrectText}>Time: {secondsToHms(time)}</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 3,
        width: '100%',
        backgroundColor: '#1E90FF' + '10',
        borderRadius: 10,
        alignItems: 'center'
      }}>
        <Text style={styles.ratText}>Rating:</Text>
        <Text style={{
          color: (((myScore / num_ques) * 100) >= 70) ? '#00FF00' : '#D22B2B', fontSize: 70,
          fontWeight: '600',
        }}>{Math.floor((myScore / num_ques) * 100)}%</Text>
      </View>
      <View style={{ flex: 4, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Review', { answers, questions, answersIndex })}>
          <Text style={styles.buttonText}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 2, borderColor: '#1E90FF' + '40',
    backgroundColor: '#1E90FF' + '20',
    height: 60, borderRadius: 10,
    maxWidth: '50%',
    minWidth: '50%',
    flexDirection: 'column',
    paddingVertical: 10,
    alignItems: 'center', justifyContent: 'center',
    marginVertical: 5,
  },
  buttonScore: {
    backgroundColor: '#1E90FF' + '10',
    height: 80, borderRadius: 10,
    flexDirection: 'column',
    maxWidth: '49%',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  buttonTime: {
    backgroundColor: '#1E90FF' + '10',
    //backgroundColor:'red',
    height: 80, borderRadius: 10,
    flexDirection: 'column',
    minWidth: '100%',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  correctText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  incorrectText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  perText: {
    fontSize: 70,
    fontWeight: '600',
    color: '#00FF00',
  },
  ratText: {
    fontSize: 50,
    fontWeight: '600',
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});
