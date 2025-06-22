document.getElementById('interviewBtn').addEventListener('click', () => {
    document.getElementById('quizForm').style.display = 'block';
    document.getElementById('interviewBtn').style.display = 'none';
});

document.getElementById('quizForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
        q4: document.querySelector('input[name="q4"]:checked').value,
        q5: document.querySelector('input[name="q5"]:checked').value
    };

    let result = '';

    if (answers.q1 === 'machines' && answers.q2 === 'analytical' && answers.q4 === 'tech') {
        result = 'Engineer, Developer, or Data Scientist';
    } else if (answers.q1 === 'people' && answers.q3 === 'helping') {
        result = 'Teacher, Psychologist, Social Worker, or HR Professional';
    } else if (answers.q2 === 'creative' && answers.q4 === 'art') {
        result = 'Graphic Designer, Animator, Writer, or Musician';
    } else if (answers.q4 === 'business' && answers.q5 === 'leading') {
        result = 'Entrepreneur, Business Manager, or Marketing Head';
    } else if (answers.q1 === 'nature') {
        result = 'Environmentalist, Biologist, or Agricultural Scientist';
    } else if (answers.q3 === 'organizing') {
        result = 'Project Manager, Event Planner, or Operations Executive';
    } else if (answers.q4 === 'science' && answers.q2 === 'analytical') {
        result = 'Research Scientist, Lab Technician, or Pharmacist';
    } else {
        result = 'Freelancer, Consultant, or Multi-skilled Professional';
    }

    document.getElementById('result').innerHTML = `
        <div style="padding:10px; background:#f0f8ff; border-radius:10px;">
        <strong>Your ideal career path might be:</strong> ${result}
        <br><small>Explore these fields and grow your potential!</small>
        </div>`;
});
