const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target =  parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);            

        }else {
            count.innerText = target;

        }

        console.log(count);
    }

    updateCount();
});