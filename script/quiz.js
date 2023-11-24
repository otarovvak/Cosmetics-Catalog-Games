const enroll = document.querySelector('.enroll');
const formCourse = document.querySelector('.formCourse');
const onlineCourse = document.querySelector('.onlineCourse');

if (enroll) {
  enroll.addEventListener('click', function () {
    onlineCourse.style.display = 'none';
    formCourse.style.display = 'block';
  });
}

let currentStep = 1;

function ValidateStep1() {
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const res = document.querySelector('.result');

  if (name.value.trim() !== '' && surname.value.trim() !== '') {
    res.style.color = 'blue';
    res.innerText = 'Step 1: Information is valid.';
    return true;
  } else {
    res.style.color = 'red';
    res.innerText = 'Step 1: Please fill in all fields.';
    return false;
  }
}

function ValidateStep2() {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const res = document.querySelector('.result2');

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email.value) && phone.value.trim() !== '') {
    res.style.color = 'blue';
    res.innerText = 'Step 2: Information is valid.';
    return true;
  } else {
    res.style.color = 'red';
    res.innerText = 'Step 2: Please enter a valid email and phone number.';
    return false;
  }
}

function ValidateStep3() {
  const message = document.getElementById('message');
  const res = document.querySelector('.result3');

  if (message.value.trim() !== '') {
    res.style.color = 'blue';
    res.innerText = 'Step 3: Information is valid.';
    return true;
  } else {
    res.style.color = 'red';
    res.innerText = 'Step 3: Please enter your expectations for the course.';
    return false;
  }
}

function updateButtonState() {
  const nextButton = document.getElementById('nextButton');
  const submitButton = document.getElementById('submitButton');
  if (nextButton) {
    switch (currentStep) {
      case 1:
        nextButton.removeAttribute('disabled');
        submitButton.setAttribute('disabled', 'true');
        break;
      case 2:
        nextButton.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
        break;
      case 3:
        nextButton.setAttribute('disabled', 'true');
        submitButton.removeAttribute('disabled');
        break;
      default:
        break;
    }
  }
}

function nextStep() {
  let isValid = false;

  switch (currentStep) {
    case 1:
      isValid = ValidateStep1();
      break;
    case 2:
      isValid = ValidateStep2();
      break;
    case 3:
      isValid = ValidateStep3();
      break;
    default:
      break;
  }

  if (isValid && currentStep < 3) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep + 1}`).classList.add('active');
    document.querySelector('.step-indicator span.active').classList.remove('active');
    document.querySelector(`.step-indicator span:nth-child(${currentStep + 1})`).classList.add('active');
    currentStep++;
  }
  updateButtonState();
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep - 1}`).classList.add('active');
    document.querySelector('.step-indicator span.active').classList.remove('active');
    document.querySelector(`.step-indicator span:nth-child(${currentStep - 1})`).classList.add('active');
    currentStep--;
  }
  updateButtonState();
}

function submitForm() {
  let isValid = false;

  switch (currentStep) {
    case 1:
      isValid = ValidateStep1();
      break;
    case 2:
      isValid = ValidateStep2();
      break;
    case 3:
      isValid = ValidateStep3();
      break;
    default:
      break;
  }

  if (isValid) {
    formCourse.style.display = 'none';
    onlineCourse.style.display = 'flex';

    alert('Form submitted successfully! We will contact you soon.');
  }
  updateButtonState();
}

updateButtonState();

// Tooltip

window.onload = function () {
  const targets = document.querySelectorAll("#tooltip-button");
  const tooltips = document.querySelectorAll("#tooltip-text");
  targets.forEach((target, index) => {
    target.addEventListener('mouseover', () => {
      tooltips[index].style.display = 'block';
    });
    target.addEventListener('mouseleave', () => {
      tooltips[index].style.display = 'none';
    });
  });
};

const startQuiz = document.querySelector('.start-quiz');
if (startQuiz) {
  startQuiz.addEventListener('click', () => {
    startQuiz.style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
  });
}

const quizData = [
  {
    question: "What is the primary purpose of a primer in makeup?",
    options: [
      "To add color to the skin",
      "To create a smooth base for makeup application",
      "To remove makeup at the end of the day"
    ],
    answer: "To create a smooth base for makeup application",
  },
  {
    question: "Which ingredient is commonly found in moisturizers and helps to retain skin moisture?",
    options: [
      "Alcohol",
      "Hyaluronic acid",
      "Fragrance"
    ],
    answer: "Hyaluronic acid",
  },
  {
    question: "What is the purpose of setting spray in a makeup routine?",
    options: [
      "To cleanse the skin",
      "To set and prolong the wear of makeup",
      "To add shine to the face"
    ],
    answer: "To set and prolong the wear of makeup",
  },
  {
    question: "Which type of makeup brush is ideal for blending eyeshadow?",
    options: [
      "Angled brush",
      "Stippling brush",
      "Blending brush"
    ],
    answer: "Blending brush",
  },
  {
    question: "What does SPF stand for in the context of skincare?",
    options: [
      "Skin Protection Factor",
      "Sunburn Prevention Formula",
      "Sunscreen Protection Factor"
    ],
    answer: "Sunscreen Protection Factor",
  },
  {
    question: "Which skincare product is designed to exfoliate the skin and remove dead cells?",
    options: [
      "Moisturizer",
      "Toner",
      "Exfoliant"
    ],
    answer: "Exfoliant",
  },
  {
    question: "What is the main purpose of a BB cream?",
    options: [
      "To add volume to the eyelashes",
      "To provide light coverage and skincare benefits",
      "To define the eyebrows"
    ],
    answer: "To provide light coverage and skincare benefits",
  },
  {
    question: "What does the term 'double cleansing' refer to in skincare?",
    options: [
      "Using two layers of foundation",
      "Cleansing the face twice, first with an oil-based cleanser and then with a water-based cleanser",
      "Applying two coats of moisturizer"
    ],
    answer: "Cleansing the face twice, first with an oil-based cleanser and then with a water-based cleanser",
  },
  {
    question: "Which makeup product is commonly used to enhance the cheekbones?",
    options: [
      "Highlighter",
      "Lip liner",
      "Mascara"
    ],
    answer: "Highlighter",
  },
  {
    question: "What is the primary function of a toner in a skincare routine?",
    options: [
      "To add color to the skin",
      "To balance the skin's pH and remove any remaining traces of makeup or cleanser",
      "To curl the eyelashes"
    ],
    answer: "To balance the skin's pH and remove any remaining traces of makeup or cleanser",
  },
];

const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');
const submitButton = document.getElementById('submitButton');
const retryButton = document.getElementById('retryButton');

let currentQuestion = 0;
let score = 0;

function createHTMLElement(tag, className, textContent) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = textContent;
  return element;
}

function displayQuestion() {
  const { question, options } = quizData[currentQuestion];

  questionContainer.innerHTML = '';
  questionContainer.appendChild(createHTMLElement('div', 'question', question));

  const optionsElement = createHTMLElement('div', 'options', '');
  options.forEach(option => {
    const label = createHTMLElement('label', 'option', '');
    const radio = createHTMLElement('input', '', '');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = option;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));
    optionsElement.appendChild(label);
  });

  questionContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    selectedOption.checked = false;
    currentQuestion < quizData.length ? displayQuestion() : displayResult();
  }
}

function displayResult() {
  questionContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  questionContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);

displayQuestion();
