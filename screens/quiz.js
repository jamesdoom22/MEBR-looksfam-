//import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ResizeTextMode, Animated, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar, AutoSizeText, Modal, BackHandler, Alert } from "react-native";
import { dataFunc } from "../data/data_func";
import React from 'react';
import { useTimer } from "../android/hooks/useTimer";

export default function Quiz({ navigation, route }) {
    const { topic, subject, number } = route.params;
    const { pause, reset, running, seconds, start, stop } = useTimer();
    const [ques, setQues] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState({
        choices: ["A", "B", "C", "D"],
        correctAnswer: "A",
        question: "",
        subject: "",
        topic: "",
        type: ""
    })
    const [questions, setQuestions] = useState([])
    const [answerSelected, setanswerSelected] = useState(null)
    const [optionSelected, setOptionSelected] = useState(null);
    const [correctIndex, setCorrectIndex] = useState(null)
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(null);
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const [answersIndex, setAnswersIndex] = useState([])
    useEffect(() => {
        console.log("State log");
        let data = dataFunc(subject, topic, number);
        setActiveQuestion(data[0])
        setQuestions(data);
        start();
        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", backAction);
        }
    }, [])



    const validateAnswer = (selectedOption) => {
        Animated.timing(progress, {
            toValue: ques + 1,
            duration: 500,
            useNativeDriver: false
        }).start();

        console.log(activeQuestion.correctAnswer, selectedOption);
        setCurrentOptionSelected(selectedOption)
        setCorrectOption(activeQuestion.correctAnswer);

        //setOptionSelected(index);
        setIsOptionsDisabled(true);
        // let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        // setCurrentOptionSelected(selectedOption);
        // setCorrectOption(correct_option);
        // setIsOptionsDisabled(true);
        setAnswers(current => [...current, selectedOption]);
        if (activeQuestion.correctAnswer === selectedOption) {
            setScore(score + 1)
            setAnswersIndex(current => [...current, true]);
        } else {
            setAnswersIndex(current => [...current, false]);
        }
        ques == questions.length ? stop() : running ? pause() : start();
    }
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, questions.length],
        outputRange: ['0%', '100%']
    })
    const next = () => {

        setOptionSelected(null);
        setCorrectIndex(null);
        setIsOptionsDisabled(false);
        setCurrentOptionSelected(null)
        setCorrectOption(null);
        let index = ques + 1;
        setQues(index); setActiveQuestion(questions[index])
        start();
        if (ques < questions.length) {
            setIsOptionsDisabled(false);
        }
    }

    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => navigation.navigate('Topic', { topic: topic, subject: subject }) }
        ]);
        return true;
    };

    const secondsToHms = (time) => {
        time = Number(time);
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 3600 % 60);

        return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#252C4A',
            padding: 5,
            //paddingTop: StatusBar.currentHeight,
        }}>

            {/* <Text style={styles.buttonText}>Quiz Screen {topic}, {subject}, {number}</Text> */}
            <View style={{
                flex: 4,
                //backgroundColor: 'red',
                paddingBottom: 5
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        flex: 5,
                        width: '100%',
                        height: 15,
                        borderRadius: 20,
                        backgroundColor: '#00000020',
                        marginVertical: 5
                    }}>
                        <Animated.View style={[{
                            height: 15,
                            borderRadius: 20,
                            backgroundColor: '#3498db'
                        }, {
                            width: progressAnim
                        }]}>
                        </Animated.View>
                    </View>
                    <View style={{
                        flex: 1,
                        //backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            paddingHorizontal: 10,
                        }}>
                            {secondsToHms(seconds)}
                        </Text>
                    </View>
                </View>
                <Text
                    adjustsFontSizeToFit
                    style={styles.buttonText}>
                    {ques + 1}. {activeQuestion.question}
                </Text>
            </View>
            <View style={{ flex: 6 }}>
                <View style={{ flex: 5, justifyContent: 'space-evenly' }}>
                    {activeQuestion.choices.map((element, index) => (
                        <TouchableOpacity key={`${element}${index}`} disabled={isOptionsDisabled}
                            onPress={() => {
                                validateAnswer(element);
                            }}
                            style={{
                                borderWidth: 2,
                                borderColor: element == correctOption ? '#00FF00' + '40' : element == currentOptionSelected ? '#FF0000' + '40' : '#1E90FF' + '40',
                                backgroundColor: element == correctOption ? '#00FF00' + '20' : element == currentOptionSelected ? '#FF0000' + '20' : '#1E90FF' + '20',
                                borderRadius: 10,
                                height: '23%',
                                flexDirection: 'row',
                                paddingHorizontal: 2,
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Text adjustsFontSizeToFit style={styles.choiceText}> {element} </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={{ flex: 1 }}>
                {isOptionsDisabled &&
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View style={{ flexDirection: 'row-reverse', margin: 5 }}>
                            {ques + 1 === questions.length ?
                                <TouchableOpacity style={styles.buttonnext} onPress={() => {
                                    stop();
                                    navigation.navigate('Result', { score, num_ques: questions.length, time: seconds, answers, questions, answersIndex })
                                }}>
                                    <Text style={styles.nextText}>Go To Result</Text>
                                </TouchableOpacity> :
                                <TouchableOpacity style={styles.buttonnext} onPress={next}>
                                    <Text style={styles.nextText}>Next question</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        height: 60, borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
        marginVertical: 10,
        minWidth: '10%',
    },
    buttonnext: {
        borderWidth: 2, borderColor: '#1E90FF' + '90',
        height: 50, borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    buttonchoice: {
        borderWidth: 2, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        height: 60, borderRadius: 10,
        minWidth: '90%',
        minWidth: '15%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center', justifyContent: 'space-around',
        marginVertical: 10,
    },
    choiceText: {
        fontSize: 16
        ,
        fontWeight: '600',
        color: 'white',
        padding: 10,
    },
    nextText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'white',
    },
    nextButton: {
        borderWidth: 2, borderColor: '#1E90FF' + '40',
        backgroundColor: '#1E90FF' + '20',
        height: 60, borderRadius: 10,
        minWidth: '90%',
        minWidth: '15%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center', justifyContent: 'space-around',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 20,
        //margin: 5,
        fontWeight: '600',
        color: 'white',
    },


});

