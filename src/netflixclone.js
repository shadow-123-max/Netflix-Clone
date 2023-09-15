
function show1(p,q,r,s,t,u){
    u.classList.add("subdiv");   
    q.classList.add("subdiv");  
    r.classList.add("subdiv");   
    s.classList.add("subdiv");   
    t.classList.add("subdiv");   
    p.classList.toggle("subdiv");     
   document.getElementById("plus1").classList.toggle("rotat");
   for(let i=1; i<7;i++){
    if(i!=1){
   if(document.getElementById(`plus${i}`).classList.contains("rotat")){
   document.getElementById(`plus${i}`).classList.remove("rotat");
   }
}
   }
}
function show2(p,q,r,s,t,u){
    p.classList.add("subdiv");   
    u.classList.add("subdiv");   
    r.classList.add("subdiv");   
    s.classList.add("subdiv");   
    t.classList.add("subdiv");   
    q.classList.toggle("subdiv");    
    document.getElementById("plus2").classList.toggle("rotat");
    for(let i=1; i<7;i++){
        if(i!=2){
        if(document.getElementById(`plus${i}`).classList.contains("rotat")){
        document.getElementById(`plus${i}`).classList.remove("rotat");
        }
     }
    }
}
function show3(p,q,r,s,t,u){
    p.classList.add("subdiv");   
    q.classList.add("subdiv");   
    u.classList.add("subdiv");   
    s.classList.add("subdiv");   
    t.classList.add("subdiv");   
    r.classList.toggle("subdiv");  
    document.getElementById("plus3").classList.toggle("rotat")  ;  
     
    for(let i=1; i<7;i++){
        if(i!=3){
        if(document.getElementById(`plus${i}`).classList.contains("rotat")){
        document.getElementById(`plus${i}`).classList.remove("rotat");
        }
     }
}
}
function show4(p,q,r,s,t,u){
    p.classList.add("subdiv");   
    q.classList.add("subdiv");   
    r.classList.add("subdiv");   
    u.classList.add("subdiv");   
    t.classList.add("subdiv");   
    s.classList.toggle("subdiv");  
    document.getElementById("plus4").classList.toggle("rotat")  ;  
    for(let i=1; i<7;i++){
        if(i!=4){
        if(document.getElementById(`plus${i}`).classList.contains("rotat")){
        document.getElementById(`plus${i}`).classList.remove("rotat");
        }
     }
}
}
function show5(p,q,r,s,t,u){
    p.classList.add("subdiv");   
    q.classList.add("subdiv");   
    r.classList.add("subdiv");   
    s.classList.add("subdiv");   
    u.classList.add("subdiv");   
    t.classList.toggle("subdiv");   
    document.getElementById("plus5").classList.toggle("rotat") ;
    for(let i=1; i<7;i++){
        if(i!=5){
        if(document.getElementById(`plus${i}`).classList.contains("rotat")){
        document.getElementById(`plus${i}`).classList.remove("rotat");
        }
     }
}
}
function show6(p,q,r,s,t,u){
    p.classList.add("subdiv");   
    q.classList.add("subdiv");   
    r.classList.add("subdiv");   
    s.classList.add("subdiv");   
    t.classList.add("subdiv");   
    u.classList.toggle("subdiv");   
    document.getElementById("plus6").classList.toggle("rotat");
    for(let i=1; i<7;i++){
        if(i!=6){
        if(document.getElementById(`plus${i}`).classList.contains("rotat")){
        document.getElementById(`plus${i}`).classList.remove("rotat");
        }
     }
    }
}
