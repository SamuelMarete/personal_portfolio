const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }

    });
});



const p1Element = document.querySelectorAll('.p1');
p1Element.forEach((el) => observer.observe(el));