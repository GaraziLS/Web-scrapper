const allTopics = document.querySelectorAll('.topics')

allTopics // returns a node list

{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {}
}

copy(allTopics)

const arrtopicssample = Array.prototype.slice.call(allTopics); // converts nodelist to an array

arrtopicssample // returns array

[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

arrtopicssample[0] // access the first div

arrtopicssample[0].textContent // returns content

GAME DEVELOPMENT COMPANIESBLOCKCHAIN GAME DEVELOPMENTBC GAME CLONE SCRIPTBETFURY CLONE SCRIPT

const sampleTopicList = arrtopicssample.map(e => e.textContent) // loops through each div using map

copy(sampleTopicList)

/*
[
  "RUBY ON RAILS",
  "VIM",
  "VIM",
  "VIM",
  "VIMCTAGS",
  "VIMTUTORIAL",
  "LINUXZSHELL",
  "VIMWINDOWS",
  "TMUXVIMPATHOGEN",
  "LINUXUNIX",
  "RUBY ON RAILSAWS",
  "CODINGRUBY ON RAILSTUTORIALJQUERYJAVASCRIPT",
  "RUBY ON RAILSROUTING",
  "MACHINE LEARNING",
  "RUBY ON RAILS",
  "RUBY ON RAILSBOOTSTRAPBUG FIXES",
  "TUTORIALMACHINE LEARNING",
  "AWSTUTORIALLEXCHAT BOTMACHINE LEARNING",
  "RUBY ON RAILSACTIONCABLE",
  "JWTRUBY ON RAILS"
]
*/