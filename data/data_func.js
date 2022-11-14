import { elements_math_questions, elements_md_questions, elements_pipe_questions, problems_math_questions, problems_md_questions, problems_pipe_questions, constants_questions } from './questions'

import { math_coaching_economics } from './decode/MATHEMATICS/math_coaching_economics';
import { math_coaching_laws } from './decode/MATHEMATICS/math_coaching_laws';
import { math_elements_coaching_phase_1 } from './decode/MATHEMATICS/math_elements_coaching_phase_1';
import { math_elements_coaching_phase_2 } from './decode/MATHEMATICS/math_elements_coaching_phase_2';
import { math_preboard_prime } from './decode/MATHEMATICS/math_preboard_prime';
import { final_mdsp_coaching_phase_1 } from './decode/MACHINE DESIGN/final_mdsp_coaching_phase_1';
import { final_mdsp_coaching_phase_2 } from './decode/MACHINE DESIGN/final_mdsp_coaching_phase_2';
import { final_mdsp_coaching_phase_3 } from './decode/MACHINE DESIGN/final_mdsp_coaching_phase_3';
import { md_elements_coaching } from './decode/MACHINE DESIGN/md_elements_coaching';
import { md_problems_coaching } from './decode/MACHINE DESIGN/md_problems_coaching';
import { algebra } from './decode/REDBOOK/algebra';
import { analytic_geometry } from './decode/REDBOOK/analytic_geometry';
import { calculus } from './decode/REDBOOK/calculus';
import { economics } from './decode/REDBOOK/economics';
import { physics } from './decode/REDBOOK/physics';

export const dataFunc = (subject, topic, number) => {
    console.log("🚀 ~ file: data_func.js ~ subject, topic, number", subject, topic, number)
    // var data = (subject === 'Elements' && topic === 'Mathematics, Engineering, Science and Law') ? elements_math_questions : (subject === 'Elements' && topic === 'Machine Design, Materials and Shop Practiced') ? elements_md_questions : (subject === 'Elements' && topic === 'Power and Industrial Plant Engineering') ? elements_pipe_questions : (subject === 'Problems' && topic === 'Mathematics, Engineering, Science and Law') ? problems_math_questions : (subject === 'Problems' && topic === 'Machine Design, Materials and Shop Practiced') ? problems_md_questions : (subject === 'Problems' && topic === 'Power and Industrial Plant Engineering') ? problems_pipe_questions : subject === 'Constants' ? constants_questions : [];
    var data = (subject === 'Math' && topic === 'Coaching Economics') ? math_coaching_economics : (subject === 'Math' && topic === 'Coaching Laws') ? math_coaching_laws : (subject === 'Math' && topic === 'Elements Coaching Phase 1') ? math_elements_coaching_phase_1 : (subject === 'Math' && topic === 'Elements Coaching Phase 2') ? math_elements_coaching_phase_2 : (subject === 'Math' && topic === 'Preboard Prime') ? math_preboard_prime : (subject === 'MD' && topic === 'MDSP Coaching Phase 1') ? final_mdsp_coaching_phase_1 : (subject === 'MD' && topic === 'MDSP Coaching Phase 2') ? final_mdsp_coaching_phase_2 : (subject === 'MD' && topic === 'MDSP Coaching Phase 3') ? final_mdsp_coaching_phase_3 : (subject === 'MD' && topic === 'Elements Coaching') ? md_elements_coaching : (subject === 'MD' && topic === 'Problems Coaching') ? md_problems_coaching : (subject === 'Redbook' && topic === 'Algebra') ? algebra : (subject === 'Redbook' && topic === 'Analytic Geometry') ? analytic_geometry : (subject === 'Redbook' && topic === 'Calculus') ? calculus : (subject === 'Redbook' && topic === 'Economics') ? economics : (subject === 'Redbook' && topic === 'Physics') ? physics : subject === 'Constants' ? constants_questions : [];
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
