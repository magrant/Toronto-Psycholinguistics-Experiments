var shuffleSequence = sepWith("sep", not("sep"));
var centerItems = true;

var defaults = [
  "Question", {
    as: ["People fighting", "Elephant", "Bunny", "Bear"]
  }, //the deault options can
  //be changed to any other options you would like to present
  "DashedSentence", {
    mode: "speeded acceptability",
    wordTime: 1000
  }
  // "AcceptabilityJudgment", {
  //   as: ["1", "2", "3", "4", "5", "6", "7"],
  //   presentAsScale: true,
  //   instructions: "Use number keys or click boxes to answer.",
  //   leftComment: "(Bad)",
  //   rightComment: "(Good)",
  //   //only two audio options available so far
  //   audioMessage: {
  //     html: "<u>Click here to play audio</u>"
  //   },
  //   audioTrigger: "click"
  // } //do not change this
  //click, we do have another option at this point of time
];

var items = [
  // Change the transfer to the number of milliseconds you want in between questions
  // and change your normalMessage according to what you want the client
  // to see while this break
  ["sep", "Separator", {
    transfer: 1000,
    normalMessage: "Please wait for the next item."
  }],
  //The following are text followed by questions
  //You can create more instances of these by just adding more such arrays
  ["q1", "DashedSentence", {
      s: "Watch a few videos"
    },
    "Question", {
      q: "Your Question/Message here",
      as: ['your choices', 'options to give']
    }
  ],

  //Video type 1, display everything and keypress to continue
  //participant can loop over as many times as they want
  //transfer over to question with keypress
  //the html file must be in chunk_includes
  ["q2", "Message", {
    html: {
      include: "video_display.html"
    },
    transfer: 'keypress'
  }],

  ["q1", "Question", {
    q: 'What did you see?'
  }],

  ['q2', "Message", {
    html: "<p>In the next few slides, you will watch a video, and press any key to continue, you only get to watch it once. So make sure you are ready before continuing</p>",
    transfer: 'keypress'
  }],

  //Video type 2, disable any sort of clicking to pause/play/mute video
  //useful for making sure participant actually listens or that
  //only one time listening experiments
  //if you want to make sure the participant watches the entire video, /
  //just set transer to duration of video in milliseconds (look at comments in video_nodisplay.html)
  ["q2", "Message", {
    html: {
      include: "video_nodisplay.html"
    },
    transfer: 'keypress'
  }],

  ["q1", "Question", {
    q: 'What did you see?'
  }],

  //Youtube example, 'disable' clicking, no 'real' way of getting around it
  //just a simple slick trick
  ["q2", "Message", {
    html: {
      include: "youtube.html"
    },
    transfer: 'keypress'
  }],

  ["q1", "Question", {
    q: 'What did you see?'
  }]

];
