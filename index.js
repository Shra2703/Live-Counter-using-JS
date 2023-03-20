let counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter) =>{
    // console.log(counter);
    counter.innerHTML = 0;

    const updateCounter = () =>{
       let targetCount = +counter.getAttribute('data-target');
        // console.log(typeof(targetCount));
        let startingCount = Number(counter.innerHTML);
        let incr = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML  = targetCount;
        }
    }

    updateCounter();
})