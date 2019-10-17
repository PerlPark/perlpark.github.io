function onScroll(e){
  if(document.getElementsByClassName('sticky').length > 0){
    let stickyHeader = document.getElementsByClassName('sticky')[0];
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var scrollTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    console.log(scrollTop);
    if(scrollTop >= 120){
      if(!stickyHeader.classList.contains("sticky--on")){
        stickyHeader.classList.add("sticky--on");
      }
    } else {
      stickyHeader.classList.remove("sticky--on");
    }
  }
}
if(typeof window !== 'undefined'){
  window.addEventListener('scroll', onScroll);
}