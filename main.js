//===========================How many total commits were made in all of Steve's events?

//creating a counter starting at 0
let totalCommit = 0;

//iterate through githubData
for(let i = 0; i < githubData.length; i++){

//if the literal string commits is in payload
  if('commits' in githubData[i].payload){

//the variable allCommits is being assigned the new length of the commits array with every iteration
    const allCommits = githubData[i].payload.commits.length
//With every iteration the value of commits is added to total commit
    totalCommit += allCommits
  }
}
//printing the total number of commits to the console
console.log(totalCommit)

/*============================Example solution========================*/
let totalCommits = 0;

githubData.forEach(steveEvent => {
  if(steveEvent.type === 'PushEvent'){
    totalCommits += steveEvent.payload.commits.length
  } 
})
console.log(totalCommits)
// 59 IS THE ANSWER

//=============================How many of each event type are there? (PullRequestEvent, PushEvent, etc)
let pushEvent = 0;
let deleteEvent = 0;
let issueCommentEvent = 0;
let createEvent = 0;
let pullRequestEvent =0;

for(let i = 0; i < githubData.length; i++){
  if(githubData[i].type === 'PushEvent'){
    pushEvent++
  }else if(githubData[i].type === 'DeleteEvent'){
    deleteEvent++
  }else if(githubData[i].type === 'IssueCommentEvent'){
    issueCommentEvent++
  }else if(githubData[i].type === 'CreateEvent'){
    createEvent++
  }else if(githubData[i].type === 'PullRequestEvent'){
    pullRequestEvent++
  }
  console.log(`${pushEvent} = 'PushEvent'`)
  console.log(`${deleteEvent} = 'DeleteEvent'`)
  console.log(`${issueCommentEvent} = 'IssueCommentEvent`)
  console.log(`${createEvent} = 'CreateEvent'`)
  console.log(`${pullRequestEvent} = 'PullRequestEvent'`)
}


/*======================================Example Solution======================================*/

let eventTypes = {
  PushEvent:0,
  DeleteEvent:0,
  IssueCommentEvent: 0,
  CreateEvent:0,
  PullRequestEvent:0
}

githubData.forEach(stevent =>{
  eventTypes[stevent.type] += 1;
})

console.log(eventTypes)
//=========================List all Github users who submitted a pull request that was approved by Steve.
let userNames = [];

for(let i = 0; i < githubData.length; i++){
  
  if('pull_request' in githubData[i].payload){
    const gitData = githubData[i].payload.pull_request.user.login
    if(gitData in userNames){
      console.log('already in there')
    }else{
      userNames.push(gitData)
    }
  }
}
console.log(userNames)

/*===================================Example solution====================================*/
let userNames = [];

githubData.forEach(stevent =>{
  if(stevent.type === "PullRequestEvent"){
    console.log(stevent.payload.pull_request.user.login)
    if(!userNames.includes(stevent.payload.pull_request.user.login)){
      userNames.push(stevent.payload.pull_request.user.login)
    }  
  } 
})


//==========================List all repositories on which Steve had an event, and show how many events were on each one.
let repoEvents = {
  "nashville-software-school/client-side-mastery":0,
  "nashville-software-school/bangazon-llc":0,
  "nss-day-cohort-27/brenda-snack-cake-store":0,
  "stevebrownlee/vps-setup":0
}
githubData.forEach(eventObj => {
 repoEvents[eventObj.repo.name] ++;
})
console.log(repoEvents)
//========================Which event had the most number of commits?

let eventCommits = {}

githubData.forEach(githubEvent =>{
  if(githubEvent.type === 'PushEvent'){
    eventCommits[githubEvent.id] =  githubEvent.payload.commits.length
  }
})
console.log('events and their commits', eventCommits)
//==================Which programming langugages were affected by Steve's events?


//TRIED BRACKET NOTATION- CAN'T FIGURE IT OUT YET
// let langEvents = {
//   python:0,
//   javascript:0
// }

// githubData.forEach(stevent =>{
//   if(stevent === "PullRequest"){
//     langEvents[stevent.payload.pull_request.head.repo.language]++;
//   } 
// })
// console.log(langEvents)


githubData.forEach(stevent =>{
  if(stevent.type === "PullRequestEvent"){
    console.log('language? ', stevent.payload.pull_request.head.repo.language)
  }  
  
})
//======================What programming language was the most affected by Steve's events?*/