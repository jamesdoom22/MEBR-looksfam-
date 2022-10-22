import { elements_math_questions, elements_md_questions, elements_pipe_questions, problems_math_questions, problems_md_questions, problems_pipe_questions, constants_questions } from './questions'

export const dataFunc = (subject, topic, number) => {
    console.log("🚀 ~ file: data_func.js ~ subject, topic, number", subject, topic, number)
    var data = (subject === 'Elements' && topic === 'Mathematics, Engineering, Science and Law') ? elements_math_questions : (subject === 'Elements' && topic === 'Machine Design, Materials and Shop Practiced') ? elements_md_questions : (subject === 'Elements' && topic === 'Power and Industrial Plant Engineering') ? elements_pipe_questions : (subject === 'Problems' && topic === 'Mathematics, Engineering, Science and Law') ? problems_math_questions : (subject === 'Problems' && topic === 'Machine Design, Materials and Shop Practiced') ? problems_md_questions : (subject === 'Problems' && topic === 'Power and Industrial Plant Engineering') ? problems_pipe_questions : subject === 'Constants' ? constants_questions : [];
    console.log("🚀 ~ file: data_func.js ~ line 6 ~ dataFunc ~ data", data.length)
    var questions = [];
    let number_ques = (data.length < number) ? data.length : number;
    while (questions.length < number_ques) {
        var numberRandom = Math.floor(Math.random() * data.length);
        if (!questions.some((elem) => elem.question === data[numberRandom].question)) {
            questions.push(data[numberRandom]);
        }
    }

    return questions;

};
