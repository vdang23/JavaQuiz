// <!-- `
var startGame = document.querySelector("#start-button")
var timeEl = document.querySelector(".time");
var firstQSet = ["a) A true or false question","b) A star near Orion","c) Chewbacca's real name","d) all of the above"]
var secondQSet = ["a) A competitor of fruit loops", "b) A way to streamline repetitive code", "c) The same thing as a boolean", "d) all of the above"]
var thirdQSet = ["a) 10", "b)20", "c) an infinite number", "d) 1"]
var fourthQSet = ["a)Math.randomize","b)Math.randomnumber","c)Math","d)Math.random"]
var fifthQSet = ["a)||", "b)!", "c)*", "d)"]
var secondsLeft = 300
var currentQ = document.querySelector("#current-question")
var q1 = document.querySelector("#question1")
var q2 = document.querySelector("#question2")
var q3 = document.querySelector("#question3")
var q4 = document.querySelector("#question4")
var rightCount = document.querySelector("#correct-count")
function timer() {
    var timeDown = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds till end of game";
        if(secondsLeft === 0) {
            clearInterval(timeDown);
        }
    }, 1000);

}

right = 0


function playGame1() {
    startGame.textContent = "Start Quiz"
    currentQ.textContent = "What is a boolean?"
    q1.textContent = firstQSet[0]
    q2.textContent = firstQSet[1] 
    q3.textContent = firstQSet[2]
    q4.textContent = firstQSet[3]
    q1.addEventListener("click", function () {
        right++
        playGame2()
        rightCount.textContent = right + " questions right"
    })
    q2.addEventListener("click", function() {
        playGame2() 
    })
    q3.addEventListener("click", function() {
        playGame2() 
    })
    q4.addEventListener("click", function() {
        playGame2() 
    })


}

function playGame2() {
    currentQ.textContent = "What is a for loop?"
    q1.textContent = secondQSet[0]
    q2.textContent = secondQSet[1]
    q3.textContent = secondQSet[2]
    q4.textContent = secondQSet[3]
    q2.addEventListener("click", function () {
        right++
        playGame3()
        rightCount.textContent = right 
    })
   
    q1.addEventListener("click", function() {
        playGame3() 
    })
    q3.addEventListener("click", function() {
        playGame3() 
    })
    q4.addEventListener("click", function() {
        playGame3() 
    })
    q1.removeEventListener("click", function() {
    })

}
// function playGame2l() {
//     secondsLeft -= 15
//     currentQ.textContent = "What is a for loop?"
//     q1.textContent = secondQSet[0]
//     q2.textContent = secondQSet[1]
//     q3.textContent = secondQSet[2]
//     q4.textContent = secondQSet[3]
//     q2.addEventListener("click", function () {
//         right++
//         playGame3()
//         rightCount.textContent = right 
//     })
//     q1.addEventListener("click", function() {
//         playGame3l() 
//     })
//     q3.addEventListener("click", function() {
//         playGame3l() 
//     })
//     q4.addEventListener("click", function() {
//         playGame3l() 
//     })

// }

function playGame3() {
    currentQ.textContent = "How many variables can you create in javascript?"
    q1.textContent = thirdQSet[0]
    q2.textContent = thirdQSet[1]
    q3.textContent = thirdQSet[2]
    q4.textContent = thirdQSet[3]
    q3.addEventListener("click", function () {
        right++
        playGame4()
        rightCount.textContent = right 
    })
    q1.addEventListener("click", function() {
        playGame4() 
    })
    q2.addEventListener("click", function() {
        playGame4() 
    })
    q4.addEventListener("click", function() {
        playGame4() 
    })
}
// function playGame3l() {
//     secondsLeft -= 15
//     currentQ.textContent = "How many variables can you create in javascript?"
//     q1.textContent = thirdQSet[0]
//     q2.textContent = thirdQSet[1]
//     q3.textContent = thirdQSet[2]
//     q4.textContent = thirdQSet[3]
//     q3.addEventListener("click", function () {
//         right++
//         playGame4()
//         rightCount.textContent = right 
//     })
//     q1.addEventListener("click", function() {
//         playGame4l() 
//     })
//     q2.addEventListener("click", function() {
//         playGame4l() 
//     })
//     q4.addEventListener("click", function() {
//         playGame4l() 
//     })
// }

function playGame4() {
    currentQ.textContent = "How can you get a random number between 0 and 1?"
    q1.textContent = fourthQSet[0]
    q2.textContent = fourthQSet[1]
    q3.textContent = fourthQSet[2]
    q4.textContent = fourthQSet[3]
    q4.addEventListener("click", function () {
        right++
        playGame5()
        rightCount.textContent = right 
    })
    q1.addEventListener("click", function() {
        playGame5l() 
    })
    q2.addEventListener("click", function() {
        playGame5l() 
    })
    q3.addEventListener("click", function() {
        playGame5l() 
    })

}


// function playGame4l() {
//     secondsLeft -= 15
//     currentQ.textContent = "How many variables can you create in javascript?"
//     q1.textContent = fourthQSet[0]
//     q2.textContent = fourthQSet[1]
//     q3.textContent = fourthQSet[2]
//     q4.textContent = fourthQSet[3]
//     q4.addEventListener("click", function () {
//         right++
//         playGame5()
//         rightCount.textContent = right 
//     })
//     q1.addEventListener("click", function() {
//         playGame5l() 
//     })
//     q2.addEventListener("click", function() {
//         playGame5l() 
//     })
//     q3.addEventListener("click", function() {
//         playGame5l() 
//     })

// }
function playGame5() {
    currentQ.textContent = 'What is the symbol for an "or" statement?'
    q1.textContent = fifthQSet[0]
    q2.textContent = fifthQSet[1]
    q3.textContent = fifthQSet[2]
    q4.textContent = fifthQSet[3]
    q1.addEventListener("click", function () {
        right++
        endgame()
        rightCount.textContent = right 
    })
    q2.addEventListener("click", function() {
        endgame() 
    })
    q3.addEventListener("click", function() {
        endgame() 
    })
    q4.addEventListener("click", function() {
        endgame() 
    })

}

function endgame() {
    currentQ.textContent = ""
    q1.textContent = ""
    q2.textContent = ""
    q3.textContent = ""
    q4.textContent = ""
    
}






startGame.addEventListener("click", function(event) {
    event.preventDefault
    timer();
    // playGame1();
    playGame1();
})
// function playGame()


// GIVEN I am taking a code quiz
// WHEN I click the start button -->
// <!-- todo: create a start button --> 
// // THEN a timer starts and I am presented with a question
// // WHEN I answer a question
// // THEN I am presented with another question
// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// // WHEN the game is over
// // THEN I can save my initials and my score
// // <!-- 
// // !-- # 04 Web APIs: Code Quiz

    // playGame();

// // ## Your Task

// // At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

// // To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

// // This week’s coursework will equip you with all the skills you need to succeed in this assignment.

// // ## User Story

// ```
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```

// ## Mock-Up

// The following animation demonstrates the application functionality:

// ![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

// ## Grading Requirements

// This homework is graded based on the following criteria: 

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the preceding acceptance criteria.

// ### Deployment: 32%

// * Application deployed at live URL.

// * Application loads with no errors.

// * Application GitHub URL submitted.

// * GitHub repository contains application code.

// ### Application Quality: 15%

// * Application user experience is intuitive and easy to navigate.

// * Application user interface style is clean and polished.

// * Application resembles the mock-up functionality provided in the homework instructions.

// ### Repository Quality: 13%

// * Repository has a unique name.

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality readme file with description, screenshot, and link to deployed application. -->
//  -->
