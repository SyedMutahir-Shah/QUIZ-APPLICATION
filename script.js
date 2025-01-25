var questions = [
    {
      question: "What does HTML stand for?",
      option1: "Hyperlinks and Text Markup Language",
      option2: "Hypertext Markup Language",
      option3: "Home Tool Markup Language",
      correctOption: "Hypertext Markup Language",
    },
    {
      question: "What is the capital of France?",
      option1: "Berlin",
      option2: "Madrid",
      option3: "Paris",
      correctOption: "Paris",
    },
    {
      question: "Which programming language is known as the language of the web?",
      option1: "Python",
      option2: "JavaScript",
      option3: "Java",
      correctOption: "JavaScript",
    },
    {
        question: "What is the capital of France?",
        option1: "Berlin",
        option2: "Madrid",
        option3: "Paris",
        correctOption: "Paris",
      },
      {
        question: "Which programming language is known as the language of the web?",
        option1: "Python",
        option2: "JavaScript",
        option3: "Java",
        correctOption: "JavaScript",
      },
      {
        question: "Which company developed the Windows operating system?",
        option1: "Microsoft",
        option2: "Apple",
        option3: "Google",
        correctOption: "Microsoft",
      },
      {
        question: "Which planet is known as the Red Planet?",
        option1: "Venus",
        option2: "Mars",
        option3: "Jupiter",
        correctOption: "Mars",
      },
      {
        question: "What is the square root of 64?",
        option1: "6",
        option2: "8",
        option3: "10",
        correctOption: "8",
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        option1: "Oxygen",
        option2: "Osmium",
        option3: "Gold",
        correctOption: "Oxygen",
      },
      {
        question: "What is the capital of Pakistan?",
        option1: "Karachi",
        option2: "Islamabad",
        option3: "Lahore",
        correctOption: "Islamabad",
      }
  ];

  // DOM elements
  var getQuestion = document.getElementById("ques");
  var opt1 = document.getElementById("o1");
  var opt2 = document.getElementById("o2");
  var opt3 = document.getElementById("o3");
  var getBtn = document.getElementById("btn");
  var questionCounter = document.getElementById("questionCounter"); // Add this for counter

  // Quiz state variables
  var index = 0;
  var score = 0;

  // Function to load the current question
  function loadQuestion() {
    if (index < questions.length) {
      // Display the question and options
      getQuestion.innerText = questions[index].question;
      opt1.innerText = questions[index].option1;
      opt2.innerText = questions[index].option2;
      opt3.innerText = questions[index].option3;

      // Display the question number
      questionCounter.innerText = `Question ${index + 1} of ${questions.length}`; // Show counter
    }
  }

  // Function to handle the "Next" button click
  function nextQues() {
    // Get the selected radio button
    var selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
      // Get the associated label's text
      var userAnswer = document.querySelector(`label[for="${selectedOption.id}"]`).textContent.trim();

      // Check if the answer is correct
      if (userAnswer === questions[index].correctOption) {
        score++;
      }

      // Increment the question index
      index++;

      // If the quiz is complete
      if (index >= questions.length) {
        alert("Quiz Ended! Your correct answer count is: " + score +  " Out Of 10 Questions");
        getBtn.disabled = true; // Disable the "Next" button
        return;
      }

      // Load the next question
      loadQuestion();

      // Reset all radio buttons
      var getInps = document.getElementsByTagName("input");
      for (var i = 0; i < getInps.length; i++) {
        getInps[i].checked = false;
      }

      // Disable the button until a new option is selected
      getBtn.disabled = true;
    }
  }

  // Function to enable the "Next" button when an option is selected
  function agey() {
    getBtn.disabled = false;
  }

  // Initialize the first question
  loadQuestion();