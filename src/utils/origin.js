export default (()=>{
    // eslint-disable-next-line
    if(window.location.href.indexOf("localhost")!=-1){
        return "online";
    }
    // eslint-disable-next-line
    if(window.location.href.indexOf("pre-")!=-1){
        return "pre";
    }
    return "online";
})();