let initialPoint;
    let finalPoint;
    document.addEventListener('touchstart', (event) => {
        // event.preventDefault();
        event.stopPropagation();
        initialPoint = event.changedTouches[0];
    });
    document.addEventListener('touchend', (event)=> {
    // event.preventDefault();
    event.stopPropagation();
    finalPoint=event.changedTouches[0];
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
    if (xAbs > yAbs) {
    if (finalPoint.pageX < initialPoint.pageX) {
        slideAll(slideIndex + 1, +widthOfSlide);
    /*СВАЙП ВЛЕВО*/}
    else {
        slideAll(slideIndex - 1, +`-${widthOfSlide}`);
    /*СВАЙП ВПРАВО*/}
    }
    else {
    if (finalPoint.pageY < initialPoint.pageY){
    /*СВАЙП ВВЕРХ*/}
    else{
    /*СВАЙП ВНИЗ*/}
    }
    }
    }); 