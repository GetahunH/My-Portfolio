const pdfButton=document.getElementById('pdfButtn');
const pdfViewer=document.getElementById('pdfViewer');

pdfButton.addEventListener('click',
  function(){
    window.open('GHMyCv.PDF');
  }
);

//scroll animation
const sr=ScrollReveal({
    distance:'45px',
    duration:4700,
    reset:true
})
sr.reveal('.hero',{delay:350,origin:'left'})
sr.reveal('.home-image',{delay:350,origin:'right'})

sr.reveal('.Skills,.about,.contact,.footer',{delay:250,origin:'bottom'})



