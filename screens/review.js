import React, { useEffect } from 'react'
import { BackHandler, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Review({ navigation, route }) {
  const { questions, answers, answersIndex } = route.params;
  useEffect(() => {
    console.log("🚀 ~ file: review.js ~ line 5 ~ Review ~ route.params", route.params)

    function handleBackButton() {
      navigation.navigate('Home')
      return true;
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      backHandler.remove();
    }
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#252C4A',
      padding: 2,
    }}>
      <ScrollView style={{ padding: 8 }}>
        <View>
          {questions.map((question, index) => (
            <View key={index}
              style={{
                minHeight: 50,
                width: '100%',
                backgroundColor: '#1E90FF' + '10',
                //backgroundColor: 'grey',
                borderRadius: 10,
                borderLeftColor: answersIndex[index] ? '#90EE90'  : '#FF0000' + '90',
                borderLeftWidth: 10,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: 5,
                marginBottom: 10,
                flexDirection: 'column',
              }}>
              <View style={{
                width: '100%',
                borderBottomWidth: 1,
                borderBottomColor: 'white',
                paddingBottom: 5,
              }}>
                <Text style={styles.quesText}>{question.question}</Text>
              </View>
              <View style={{
                width: '100%',
                paddingTop: 5,
                justifyContent: 'space-between'
              }}>
                {questions[index].choices.map((choice, index2) => (
                  <View key={index2} style={{
                    minHeight: 30,
                    borderRadius: 10,
                    minWidth: '100%',
                    flexDirection: 'column',
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}>
                    <View style={{
                      backgroundColor: questions[index].correctAnswer == choice ? '#90EE90': !answersIndex[index] && (answers[index] == choice) ? '#FF0000' + '90' : '#C0C0C0',
                      borderRadius: 50,
                      height: 17,
                      width: 17,
                      marginRight: 10,
                    }}>
                    </View>
                    <Text style={{
                      flex: 1,
                      padding: 5,
                      color: 'white',
                    }}>
                      {choice}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
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
  quesText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    padding: 5,
  },
})
