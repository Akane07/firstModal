document.querySelector('.beginButton').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('hidden');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.container').classList.add('hidden');
});

document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target == document.querySelector('.container')) {
        document.querySelector('.container').classList.add('hidden');
    }
});


let result = {
    fullName: '',
    age: '',
    experience: '',
    knowledge: '',
    salary: '',
};
const translate = {
    fullName: 'Ф.И.О.',
    age: 'Возраст',
    experience: 'Опыт работы',
    knowledge: 'Стек знаний',
    salary: 'Зарплатные ожидания',
}

document.querySelector('.submitButton button').addEventListener('click', () => {
    saveResult();
    document.querySelector('.result').classList.remove('hidden');
    showResult();
    document.querySelector('.container').classList.add('hidden');
});

function saveResult() {
    result.fullName = document.querySelector('[name="fullname"]').value;
    result.age = document.querySelector('[name="age"]').value;
    result.experience = document.querySelector('[name="experience"]').value;
    result.knowledge = document.querySelector('[name="knowledge"]').value;
    result.salary = document.querySelector('[name="salary"]').value;

    document.querySelector('[name="fullname"]').value = '';
    document.querySelector('[name="age"]').value = '';
    document.querySelector('[name="experience"]').value = '';
    document.querySelector('[name="knowledge"]').value = '';
    document.querySelector('[name="salary"]').value = '';
}

function showResult() {
    const resultText = document.querySelector('.result_in_text');
    const resultJson = document.querySelector('.result_in_json');

    resultText.innerHTML = '';
    resultJson.innerHTML = '';

    for (const key in result) {
        const p = document.createElement('p');
        p.innerText = `${translate[key]}: ${result[key]}`;
        resultText.append(p);
    }

    resultJson.innerText = JSON.stringify(result);
}