function listenToStory(e){try{var t,n,a={},o="",s=allstories[gCurrentStoryId],r=(s.cheadline,s.eheadline||""),d=s.ebody||"";s.cbody;"ch"===langmode||""===d||""===r?(t=s.cheadline,n=s.cbody,o="ch"):(t=s.eheadline,n=s.ebody,o="en"),a={title:t,text:n,language:o,eventCategory:"Listen To Story"},webkit.messageHandlers.listen.postMessage(a),ga("send","event","Listen To Story","Start",o+": "+t)}catch(e){}}function showListenButton(){window.isTextToSpeechEnabled=!0;var e=document.getElementById("menu-button-top-right");e.className=e.className.replace(" storyOnly",""),document.getElementById("audio-button-top-right").className="header-side right storyOnly"}function listenToSpeedRead(){var e,t,n={},a=document.getElementById("speedread-article");e=a.querySelector("b")?a.querySelector("b").innerHTML||"":"",t=a.innerHTML.replace(/<b>.*<\/b>/,"").replace(/[\(\（][0-9\s]+words[\)\）]/,""),n={title:e,text:t,language:"en",eventCategory:"Listen To Speedread"},webkit.messageHandlers.listen.postMessage(n),ga("send","event","Listen To Speedread","Start","en: "+e)}