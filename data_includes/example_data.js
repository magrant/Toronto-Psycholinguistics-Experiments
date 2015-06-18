

var shuffleSequence = seq(/*"intro",*/ sepWith("sep", seq("story", rshuffle("s1", "s2"))), sepWith("sep", rshuffle("q1", "q2")));
var practiceItemTypes = ["practice"];


var defaults = [
    "Separator", {
        transfer: 1000, //wait for 1000ms
          //other options: "keypress", "click"
        normalMessage: "Please wait for the next sentence.", //message to be displayed
        errorMessage: "Wrong. Please wait for the next sentence." //message to be displayed in red
    },

    "Message", {
        //"html" option is obligatory
        hideProgressBar: false,
        transfer: "keypress"
    },

    "DashedSentence", {
        //"s" option is obligatory
        mode: "self-paced reading"
          //other option: "speeded acceptability"
    },

    "Question", {
        //"as" option is obligatory
        hasCorrect: true
    },

    "AcceptabilityJudgment", {
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        as: ["1", "2", "3", "4", "5", "6", "7"],
        //writing the "as" option here means that this is the default for
        //all AcceptabilityJudgment items
        presentAsScale: true, //presents the "as" option as a scale
        instructions: "Use number keys or click boxes to answer.", //instruction text
        leftComment: "(Bad)", //displayed on the left side of the scale
        rightComment: "(Good)" //displayed on the right side of the scale
    },

    "DashedAcceptabilityJudgment", {
        //combination of AcceptabilityJudgment and DashedSentence
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        hasCorrect: false
    },

    "Form", {
        //"html" option is obligatory
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    /*
    ===================
    SEPARATOR
    The pause needed between each item of the experiment
    ===================
    */

    //ends after timer (1000ms)
    ["sep", "Separator", {transfer: 1000, normalMessage: "Please wait for the next sentence."}],

    //ends when key is press
    ["sep", "Separator", {transfer: "keypress", normalMessage: "Please press any key to continue."}],


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */

    //name of controller
    ["intro",
      //type
      "Form",
      //obligatory option that includes a HTML file that is a questionnaire
      {html: { include: "example_intro.html" },
      //fields that need to have the right format when taking input from user
      validators: {
        //age has to be a number
        age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


    /*
    ===================
    TEXT
    Controllers that work with Text and Questions
    ===================
    */




    //text displayed word by word
    ["practice", "DashedSentence", {s: "This is a practice sentence before the experiment begins."}],

    //all text with MC question
    ["story", "Message", {html: "<center>This is a story you can see all at once!<br>Tanya and John were racing. She won.<br><b>Press any key to continue.</b></center>"},
                 "Question", {hasCorrect: false, randomOrder: false,
                              //if a question has a correct answer (hasCorrect: true), you would have to put
                              //that answer as the first element in the "as" option.
                              q: "How would you like to answer this question?",
                              as: ["Press 1 or click here for this answer.", //this would be the correct answer if hasCorrect:true
                                   "Press 2 or click here for this answer.",
                                   "Press 3 or click here for this answer."]}],


    //word by word text with fill in the blank question
    ["story", "DashedSentence", {s: "Remember the story?"},
     "Form", {html: 'Which player won the race: <input type="text" name="anything">'}],


     //all text with scaling question
     ["story", "AcceptabilityJudgment", {s:"From a scale of 1 to 9, how has your morning been?",
                                           as:["1","2","3","4","5","6","7","8","9"]}],



     // IMAGE + QUESTION
     ["story", "Message", {html:'<img src = "http://www.sjsu.edu/linguistics/pics/lld_wordle_660px.jpg" />', transfer: "keypress"},
              "Question", {q: "Whats under 'Language'?",
                            as: ["Knowledge", "Skill", "Math", "Research"]}],

     ["story", "Message", {html:'<img src = "http://www.sjsu.edu/linguistics/pics/lld_wordle_660px.jpg" /><br><p>WAIT</p>', transfer: 6000}],
     ["story", "Message", {html:'<img src = "http://www.sjsu.edu/linguistics/pics/lld_wordle_660px.jpg" /> <br><p>CLICK</p>', transfer: "click"}]

];