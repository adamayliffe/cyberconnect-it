var data= {
    chatinit:{
        title: ["Hello","I am Fred your chatbot", "How may I assist you today?"],
        options: ["hardware","Software","Networks"]
    },
    
    hardware: {
        title:["Please select category"],
        options:['Servers','Desktops','Laptops','Others'],
        url : {
            
        }
    },
    
    software: {
        title:["Please select category"],
        options:['Office365','Enquiry','Installations','Others'],
        url : {
        

        }
    },
    
     networks: {
        title:["Please select category"],
        options:['Failure','Switches','Firewalls','Others'],
        url : {
            
        }
    },
    
    failure: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["Alarm" , "Power Outage"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["tel:07487613849","tel:07487613849"]
        }
    },
    
    switches: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["Config" , "Outage" , "Switch Ports"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["tel:07487613849","tel:07487613849"]
        }
    },
    
    firewalls: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["Config" , "Internet" , "failover" , "High availability (HA)"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["tel:07487613849","tel:07487613849"]
        }
    },
    
    
    
    
    enquiry: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["New software"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["#","#","#","#","#"]
        }
    },
    
    installations: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["require admin privileges"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["#","#","#","#","#"]
        }
    },
    
    office365: {
    title: ["Thanks for your response","Here are some options for you to choose from"],
    options: ["New starter","Leaver","Other"],
    url: {
    more:"https://adamayliffe.github.io/cyberconnectit/",
    link:["#","#","#","#","#"]
        }
    },
    
    servers: {
        title: ["Thanks for your response","Here are some options for you to choose from"],
        options: ["fault","alarm","power issues","new"],
        url: {
            more:"https://adamayliffe.github.io/cyberconnectit/",
            link:["#","#","#","#","#"]
        }
    },
    
    desktops: {
        title: ["Thanks for your response","Here are some options for you to choose from"],
        options: ["new","fault","failure","error"],
        url: {
            more:"https://adamayliffe.github.io/cyberconnectit/",
            link:["#","#","#","#","#"]
        }
    },

    laptops: {
         title: ["Thanks for your response","Here are some options for you to choose from"],
        options: ["new","fault","failure","error"],
        url: {
            more:"https://adamayliffe.github.io/cyberconnectit/",
            link:["#","#","#","#","#"]
        }
    },
    others: {
       title: ["Thanks for your response","Here are some options for you to choose from"],
        options: ["Site Visit","Onboarding","Meeting"],
        url: {
            link:["#","#","#","#","#"]
        }
    },
    
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*750));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*750))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*750)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*750)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*750)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}