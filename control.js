function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}


class Message{
    constructor(author,sendDate,messageText){
        this.author=author;
        this.sendDate=sendDate;
        this.messageText=messageText;
    }
    toHtml(){
        return `<p>[${this.sendDate}] [${this.author}]: [${this.messageText}]</b>`;
    }
}

class Messenger extends Message{
    constructor(){
        super();
        //this.ob=0;
        this.messages=[];
    }
    send(author,messageText){
        let d=Date();
        //let ob=new Message(author,d.substring(d.indexOf(':')-2,d.indexOf(':')+3),messageText);
        let ob=new Message(author,d.substring(d.indexOf(':')-2,d.indexOf(':')+3),messageText);
        //console.log(ob);
        this.messages.push(ob);  
    }
    show_history(){
        //console.log('works');
        for(let i=0;i<this.messages.length;i++){
            //console.log('works');
            //console.log(this.messages[i].sendDate+' '+this.messages[i].author+": "+this.messages[i].messageText);
            //console.log('works');
            //this.ob.toHtml();
        }
    }
}


//console.log(gettime());


let txtArea=document.querySelector('.history');
let d;
document.querySelector('.btn').addEventListener('click',function(){
    //let objs=[];
    //objs.push(objs[0].val);
    //objs.push(objs[1].val);
    let author=document.getElementById('i1').val;
    console.log(author);
    let message=document.getElementById('i2').val;
    let ob=new Messenger(author,message);
    ob.send(author,message);
    txtArea.innerHTML='';
    txtArea.innerHTML+=(ob.toHtml());
});