
export default class Video {
    constructor(parentID, src, width, height) {
        this.parentID = parentID;
        this.src = src;
        this.width = width;
        this.height = height;
        
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        let pos=this.src.lastIndexOf(".");
        let type=this.src.substr(pos+1);

        //console.log(type);
        const myVideo = myApp.innerHTML + `<div><video width=${this.width} height=${this.height} controls >        
        <source src=${this.src} type="video/${type}">
        Your browser does not support the video tag.
        </video> </div>`;

        myApp.innerHTML = myVideo; 
    }
}



