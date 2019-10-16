function onScroll(e){
  if(document.getElementsByClassName('sticky').length > 0){
    let stickyHeader = document.getElementsByClassName('sticky')[0];
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
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