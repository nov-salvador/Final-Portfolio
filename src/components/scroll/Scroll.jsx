import "./scroll.css"
function Scroll() {
  window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector(".scroll");
    if(window.scrollY >= 560){
      scrollBtn.classList.add("show-scroll")
    }
    else{
      scrollBtn.classList.remove("show-scroll")
    }
  })

  return (
    <a 
      href="" 
      className="scroll"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <i className="uil uil-arrow-circle-up scroll-icon"></i>
    </a>
  )
}

export default Scroll