
function SignIn(){
    let u=document.getElementById('username').value
    let p=document.getElementById('pswd').value
    if(u==='' || p===''){
        alert('Enter all details')
    }
    else if(u==='abcd' && p==='efgh'){
        window.location.href='home.html';
    }else if(u.length>0 && p.length>0){
        window.alert('incorrect login details\nEnter Username : abcd \n Enter password: efgh');
    }
}

function LogOut(){
    window.location.href='index.html';
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("C").addEventListener("click", function() {
        document.getElementById("h").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("q").style.display = "none";
        document.getElementById("loading").style.display = "block";
        
        
        localStorage.setItem("quizType", "CQuiz"); 
        
        setTimeout(function() {
            window.location.href = "quizPage.html";
          }, 1200);
    });

    document.getElementById("CPP").addEventListener("click", function() {
        document.getElementById("h").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("q").style.display = "none";
        document.getElementById("loading").style.display = "block";
        
        
        localStorage.setItem("quizType", "CPPQuiz"); 
        
        setTimeout(function() {
            window.location.href = "quizPage.html";
          }, 1200);   
    });

    document.getElementById("Java").addEventListener("click", function() {
        document.getElementById("h").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("q").style.display = "none";
        document.getElementById("loading").style.display = "block";
        
        
        localStorage.setItem("quizType", "JavaQuiz"); 
        
        setTimeout(function() {
            window.location.href = "quizPage.html";
          }, 1200); 
    });

    document.getElementById("Python").addEventListener("click", function() {
        document.getElementById("h").style.display = "none";
        document.getElementById("t").style.display = "none";
        document.getElementById("q").style.display = "none";
        document.getElementById("loading").style.display = "block";
        
        
        localStorage.setItem("quizType", "PythonQuiz"); 
        
        setTimeout(function() {
            window.location.href = "quizPage.html";
          }, 1200);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("quizPage.html")) {
        const quizType = localStorage.getItem("quizType");
        if (quizType === "CQuiz") {
            CQuiz();
        }
        else if(quizType==="CPPQuiz"){
            CPPQuiz();
        }
        else if(quizType==="JavaQuiz"){
            JavaQuiz();
        }
        else if(quizType==="PythonQuiz"){
            PythonQuiz();
            
        }
    }
});

function CQuiz(){

      const questions = [
        {
            question: "Which of the following is a feature of the C programming language?",
            options: ["Object-oriented", "Platform-dependent", "Supports garbage collection", "Interpreted"],
            answer: "Platform-dependent"
        },
        {
            question: "What is the purpose of the `#include` directive in C?",
            options: ["To declare variables", "To include standard libraries", "To execute loops", "To define constants"],
            answer: "To include standard libraries"
        },
        {
            question: "Which keyword is used to define a constant in C?",
            options: ["constant", "const", "define", "static"],
            answer: "define"
        },
        {
            question: "Which data type is used to store a single character in C?",
            options: ["char", "string", "character", "int"],
            answer: "char"
        },
        {
            question: "Which function reads a formatted string in C?",
            options: ["scanf()", "printf()", "cin", "getchar()"],
            answer: "scanf()"
        },
        {
            question: "What is a pointer in C?",
            options: ["A variable storing another variable's address", "An operator for calculations", "A type of array", "A compiler directive"],
            answer: "A variable storing another variable's address"
        },
        {
            question: "What is the `return` statement's purpose in C?",
            options: ["To terminate a program", "To define a function", "To return a value from a function", "To start a loop"],
            answer: "To return a value from a function"
        },
        {
            question: "Which operator accesses the value at a memory address stored in a pointer?",
            options: ["&", "*", "->", "@"],
            answer: "*"
        },
        {
            question: "What is the role of a header file in C?",
            options: ["To store the main function", "To declare functions and macros", "To define variables", "To execute the program"],
            answer: "To declare functions and macros"
        },
        {
            question: "Which function finds the length of a string in C?",
            options: ["strlength()", "len()", "strsize()", "strlen()"],
            answer: "strlen()"
        }
    ];

    let set1 = new Set(Array.from({ length: 10 }, (_, i) => i));
    let set2 = new Set();
    while (set2.size < 5) {
        let randomIndex = Math.floor(Math.random() * set1.size);
        let randomQuestionIndex = Array.from(set1)[randomIndex];
        set2.add(randomQuestionIndex);
        set1.delete(randomQuestionIndex);
    }

    let selectedQuestions = Array.from(set2).map(index => questions[index]);

    let currentQuestionIndex = 0;
    let score = 0;``

    function loadQuestion() {
        if (currentQuestionIndex < selectedQuestions.length) {
            const questionObj = selectedQuestions[currentQuestionIndex];
            document.getElementById("Question").textContent = 'Q.'+'   '+questionObj.question;
            document.getElementById("option1").nextSibling.textContent = questionObj.options[0];
            document.getElementById("option2").nextSibling.textContent = questionObj.options[1];
            document.getElementById("option3").nextSibling.textContent = questionObj.options[2];
            document.getElementById("option4").nextSibling.textContent = questionObj.options[3];
        } else {

            document.getElementById("que").style.display = "none";
            document.getElementById("ans").style.display = "none";
            document.getElementById("Next").style.display = "none";
            document.getElementById('head').style.display="none";
            document.body.style.backgroundColor = "white";
            document.getElementById("loading").style.display = "block";

            localStorage.setItem("score", score);
            setTimeout(function() {
                window.location.href = "result.html";
              }, 1000);
        }
    }

    document.getElementById("next").addEventListener("click", function() {
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if (!selectedOption) {
            alert("Please select an option!");
            return;
        }

        const selectedAnswer = selectedOption.nextSibling.textContent;
        if (selectedAnswer === selectedQuestions[currentQuestionIndex].answer) {
            score++;
        }

        selectedOption.checked = false; // Reset selection
        currentQuestionIndex++;         // Increment question index
        setTimeout(loadQuestion(),1000);          // Load next question
    });

    loadQuestion(); // Load the first question


}

function CPPQuiz(){
    const cppQuestions = [
        {
            question: "Which of the following is the correct way to declare a variable in C++?",
            options: ["int 5x;", "int x;", "int: x;", "int = x;"],
            answer: "int x;"
        },
        {
            question: "Which of the following is used to print output in C++?",
            options: ["printf()", "cout", "echo", "System.out.println()"],
            answer: "cout"
        },
        {
            question: "Which symbol is used to end a statement in C++?",
            options: [".", ";", ":", ",", "->"],
            answer: ";"
        },
        {
            question: "Which of the following is a valid C++ data type?",
            options: ["string", "float", "boolean", "decimal"],
            answer: "float"
        },
        {
            question: "Which of the following is the correct syntax to define a constant in C++?",
            options: ["const int x = 10;", "constant int x = 10;", "int const x = 10;", "var int x = 10;"],
            answer: "const int x = 10;"
        },
        {
            question: "Which function is the entry point of a C++ program?",
            options: ["main()", "start()", "begin()", "execute()"],
            answer: "main()"
        },
        {
            question: "How do you include a header file in C++?",
            options: ["#include <iostream>", "#import <iostream>", "import iostream", "#include iostream"],
            answer: "#include <iostream>"
        },
        {
            question: "Which operator is used to access members of a structure in C++?",
            options: [".", "->", "::", "?"],
            answer: "."
        },
        {
            question: "What is the size of an integer in C++?",
            options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
            answer: "4 bytes"
        },
        {
            question: "Which of the following is used to comment a single line in C++?",
            options: ["//", "/* */", "#", "<--"],
            answer: "//"
        }
    ];
    
    
    let set1=new Set([1,2,3,4,5,6,7,8,9,0]);
    let set2=new Set();
    
    for(let i=0;i<5;i++){
        let randomIndex=Math.floor(Math.random()*set1.size);
        let randomNumber=Array.from(set1)[randomIndex];

        set2.add(randomNumber);
        set1.delete(randomNumber);
    }

    let selectedQuestions=[];
    for(let i=0;i<5;i++){
        selectedQuestions.push(cppQuestions[Array.from(set2)[i]]);
    }

    let currentIndex=0;
    let score=0;

    function loadQuestion(){
        if(currentIndex<selectedQuestions.length){
            const Question=selectedQuestions[currentIndex];
            document.getElementById('Question').textContent='Q .'+'   '+Question.question;
            document.getElementById("option1").nextSibling.textContent = Question.options[0];
            document.getElementById("option2").nextSibling.textContent = Question.options[1];
            document.getElementById("option3").nextSibling.textContent = Question.options[2];
            document.getElementById("option4").nextSibling.textContent = Question.options[3];

        }else{

            document.getElementById("que").style.display = "none";
            document.getElementById("ans").style.display = "none";
            document.getElementById("Next").style.display = "none";
            document.getElementById('head').style.display="none";
            document.body.style.backgroundColor = "white";
            document.getElementById("loading").style.display = "block";
            localStorage.setItem("score", score);
            setTimeout(function() {
                window.location.href = "result.html";
              }, 1000);
        }
    }

    document.getElementById('next').addEventListener('click',function(){
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if(!selectedOption){
            alert('please select an option');
            return
        }
        
        const selectedAnswer = selectedOption.nextSibling.textContent;
        if (selectedAnswer === selectedQuestions[currentIndex].answer) {
            score++;
        }

        selectedOption.checked = false;
        currentIndex++;         
        setTimeout(loadQuestion(),1000);  
    
    });

    loadQuestion();

}

function JavaQuiz(){
    const javaQuestions = [
        {
            question: "Which of the following is a characteristic feature of Java?",
            options: ["Platform-independent", "Case-sensitive", "Object-oriented", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the purpose of the 'main' method in Java?",
            options: ["It is used to store global variables", "It is the entry point of the Java program", "It helps in handling errors", "It is used to define constructors"],
            answer: "It is the entry point of the Java program"
        },
        {
            question: "What does JVM stand for in Java?",
            options: ["Java Virtual Machine", "Java Visual Machine", "Java Variable Memory", "Java Variable Model"],
            answer: "Java Virtual Machine"
        },
        {
            question: "Which of the following is NOT a feature of Java?",
            options: ["Automatic Garbage Collection", "Multithreading", "Low-level language", "Exception Handling"],
            answer: "Low-level language"
        },
        {
            question: "What is the use of 'final' keyword in Java?",
            options: ["It is used to define constants", "It is used for inheritance", "It is used for dynamic memory allocation", "None of the above"],
            answer: "It is used to define constants"
        },
        {
            question: "What is a class in Java?",
            options: ["A blueprint for creating objects", "A data type", "A function", "An instance of an object"],
            answer: "A blueprint for creating objects"
        },
        {
            question: "What is the meaning of 'overloading' in Java?",
            options: ["Using the same function name with different signatures", "Inheritance", "Changing the state of a variable", "None of the above"],
            answer: "Using the same function name with different signatures"
        },
        {
            question: "What is the default value of an instance variable in Java?",
            options: ["null", "0", "false", "undefined"],
            answer: "0"
        },
        {
            question: "What is a constructor in Java?",
            options: ["A method to initialize objects", "A method to destroy objects", "A method to print values", "A method to execute the main function"],
            answer: "A method to initialize objects"
        },
        {
            question: "Which of the following is NOT an access modifier in Java?",
            options: ["private", "protected", "public", "internal"],
            answer: "internal"
        }
    ];
    
    
    
    let set1=new Set([1,2,3,4,5,6,7,8,9,0]);
    let set2=new Set();
    
    for(let i=0;i<5;i++){
        let randomIndex=Math.floor(Math.random()*set1.size);
        let randomNumber=Array.from(set1)[randomIndex];

        set2.add(randomNumber);
        set1.delete(randomNumber);
    }

    let selectedQuestions=[];
    for(let i=0;i<5;i++){
        selectedQuestions.push(javaQuestions[Array.from(set2)[i]]);
    }

    let currentIndex=0;
    let score=0;

    function loadQuestion(){
        if(currentIndex<selectedQuestions.length){
            const Question=selectedQuestions[currentIndex];
            document.getElementById('Question').textContent='Q .'+'   '+Question.question;
            document.getElementById("option1").nextSibling.textContent = Question.options[0];
            document.getElementById("option2").nextSibling.textContent = Question.options[1];
            document.getElementById("option3").nextSibling.textContent = Question.options[2];
            document.getElementById("option4").nextSibling.textContent = Question.options[3];

        }else{

            document.getElementById("que").style.display = "none";
            document.getElementById("ans").style.display = "none";
            document.getElementById("Next").style.display = "none";
            document.getElementById('head').style.display="none";
            document.body.style.backgroundColor = "white";
            document.getElementById("loading").style.display = "block";
            localStorage.setItem("score", score);
            setTimeout(function() {
                window.location.href = "result.html";
              }, 1000);
        }
    }

    document.getElementById('next').addEventListener('click',function(){
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if(!selectedOption){
            alert('please select an option');
            return
        }
        
        const selectedAnswer = selectedOption.nextSibling.textContent;
        if (selectedAnswer === selectedQuestions[currentIndex].answer) {
            score++;
        }

        selectedOption.checked = false;
        currentIndex++;         
        setTimeout(loadQuestion(),1000); 
    
    });

    loadQuestion();
}

function PythonQuiz(){
    const pythonQuestions = [
        {
            question: "Which of the following is a key feature of Python?",
            options: ["Easy to learn", "Dynamic typing", "Interpreted language", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What does Python's 'self' refer to in a method?",
            options: ["An object reference", "The method itself", "The class", "The module"],
            answer: "An object reference"
        },
        {
            question: "Which of the following is used to create a function in Python?",
            options: ["def", "function", "func", "create"],
            answer: "def"
        },
        {
            question: "Which of the following is NOT a valid Python data type?",
            options: ["list", "tuple", "array", "dictionary"],
            answer: "array"
        },
        {
            question: "Which of the following is used to handle errors in Python?",
            options: ["try/except", "try/catch", "catch/finally", "handle/error"],
            answer: "try/except"
        },
        {
            question: "What is the use of 'import' in Python?",
            options: ["To include external libraries", "To define variables", "To create a new function", "To start a loop"],
            answer: "To include external libraries"
        },
        {
            question: "What is the purpose of the 'pass' statement in Python?",
            options: ["To terminate the program", "To skip the current loop iteration", "To define an empty function or class", "To exit from a function"],
            answer: "To define an empty function or class"
        },
        {
            question: "Which of the following is used to start a block of code in Python?",
            options: ["{", "()", ":", "/"],
            answer: ":"
        },
        {
            question: "What is the default return value of a function in Python if no return statement is used?",
            options: ["None", "0", "False", "undefined"],
            answer: "None"
        },
        {
            question: "What is a 'list' in Python?",
            options: ["An immutable sequence of values", "A mutable sequence of values", "A type of function", "A set of unique values"],
            answer: "A mutable sequence of values"
        }
    ];
     
    let set1=new Set([1,2,3,4,5,6,7,8,9,0]);
    let set2=new Set();
    
    for(let i=0;i<5;i++){
        let randomIndex=Math.floor(Math.random()*set1.size);
        let randomNumber=Array.from(set1)[randomIndex];

        set2.add(randomNumber);
        set1.delete(randomNumber);
    }

    let selectedQuestions=[];
    for(let i=0;i<5;i++){
        selectedQuestions.push(pythonQuestions[Array.from(set2)[i]]);
    }

    let currentIndex=0;
    let score=0;

    function loadQuestion(){
        if(currentIndex<selectedQuestions.length){
            const Question=selectedQuestions[currentIndex];
            document.getElementById('Question').textContent='Q .'+'   '+Question.question;
            document.getElementById("option1").nextSibling.textContent = Question.options[0];
            document.getElementById("option2").nextSibling.textContent = Question.options[1];
            document.getElementById("option3").nextSibling.textContent = Question.options[2];
            document.getElementById("option4").nextSibling.textContent = Question.options[3];

        }else{

            document.getElementById("que").style.display = "none";
            document.getElementById("ans").style.display = "none";
            document.getElementById("Next").style.display = "none";
            document.getElementById('head').style.display="none";
            document.body.style.backgroundColor = "white";
            document.getElementById("loading").style.display = "block";
            localStorage.setItem("score", score);
            setTimeout(function() {
                window.location.href = "result.html";
              }, 1000);
        }
    }

    document.getElementById('next').addEventListener('click',function(){
        const selectedOption = document.querySelector('input[name="question"]:checked');
        if(!selectedOption){
            alert('please select an option');
            return
        }
        
        const selectedAnswer = selectedOption.nextSibling.textContent;
        if (selectedAnswer === selectedQuestions[currentIndex].answer) {
            score++;
        }

        selectedOption.checked = false;
        currentIndex++;         
        setTimeout(loadQuestion(),1000); 
    
    });

    loadQuestion();
}

document.addEventListener("DOMContentLoaded", function() {
    const scoreDisplay = document.getElementById("score");
    if (scoreDisplay) {
        const score = localStorage.getItem("score");
        scoreDisplay.textContent = `${score}/5`;
    }
});
