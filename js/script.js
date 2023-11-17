let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav div span a');
windows.onscroll = () =>{
    sections.forEach(section => {
        let top = windows.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav div span a [href*=' + id + ']').classList.add('active');
            });
        }
    })
}
