document.querySelector('.content').onmousemove = (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
      let speed = elm.getAttribute('data-speed');
  
      let x = (window.innerWidth - e.pageX * speed) / 90;
      let y = (window.innerHeight - e.pageY * speed) / 90;
  
      elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  
    });
  
  };
  
  
  document.querySelector('.content').onmouseleave = () =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{
  
        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
  
  };
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



const contentElement = document.querySelectorAll('.content');
contentElement.forEach((el) => observer.observe(el));