var currentQuestion = 0 
var correctAnswers = 0

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();
    //I learned this from the internet: The "DOMContentLoaded" event is fired by the browser when the initial HTML document has been fully parsed into the DOM tree, and all the initial HTML content is available for manipulation with JavaScript. I get what it means, but I would never have figured that out by myself.....
  
    const nextButton = document.getElementById("next-button");// here I am pulling the element of "next-button"
    nextButton.addEventListener("click", function() { //I am telling the browser yo bro I am here, when this happens I want you to do the following
      const selectedAnswer = document.querySelector("input[name=answer]:checked");
     
     
      if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
        //I dont know what I am doing but it works? I am saying that if the selected answer, oh by the way I am pulling in from query from document/ the input, wait I lost my train of thought BRB
      }
  
      if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {//if else statement)
        correctAnswers++;
        alert("Correct!"); // They made it clear not to use Alert but, how do i let a user know if they are right or wrong on a single page??  Question for my future self
      } else {  // Else statement speaks for itself
        alert("Incorrect.");
      }
  
      currentQuestion++; //now this plus plus sign  I got from the internet//I need to close tabs I am confusing myself
  
      if (currentQuestion == questions.length) {
        alert("End of quiz!");
        return;
      }
  
      displayQuestion();
    });
  });


function displayQuestion() {
  const questionContainer = document.getElementById("question-container");// I will am grabbing an ID / # and pulling on that data// will it work?? I have no idea
  questionContainer.innerHTML = "";// obvious no need to comment here

  const questionText = document.createElement("p");//I am creating a new HTML paragraph element (<p> tag) in the current document // ok I will just comment important stuff, not verbose
  questionText.innerHTML = questions[currentQuestion].question;
  questionContainer.appendChild(questionText);

  const answers = questions[currentQuestion].answers;

  for (const letter in answers) {
    const answerText = document.createElement("label");
    answerText.innerHTML = `
      <input type="radio" name="answer" value="${letter}">
      ${letter}: ${answers[letter]}
    `;
    questionContainer.appendChild(answerText);
  }
}

var questions = [
    {
      question: "What is the name of Kanyes kids?",
      answers: {
        a: "Paris",
        b: "Rome",
        c: "Madrid",
        d: "North West"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the tallest mammal in the world?",
      answers: {
        a: "Giraffe",
        b: "Elephant",
        c: "Whale",
        d: "Horse"
      },
      correctAnswer: "a"
    },

    {question: "What is the best baskestball player in the world",
      answers: {
        a: "Kareem Abdul-Jabbar",
        b: "Tim Duncan",
        c: "Shaquille O’Neal",
        d: "Larry Bird",
        e: "LeBron James"
      },
      correctAnswer: "e"
    },
   
  ];
  