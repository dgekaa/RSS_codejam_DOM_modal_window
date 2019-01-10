

window.onload = ()=>{
				// ПОЯВЛЕНИЕ БЛОКА
	const task = document.querySelector('#task');
	setTimeout(()=>{
		task.style.opacity="1";
	},4000);
				// ЗАКРЫТИЕ БЛОКА 
	const cross = document.querySelector('.cross');
	cross.addEventListener("click",()=>{
		cross.style.color = "red";
		cross.style.transition = "0s color";
		task.style.display="none";
	});
				// LOCAL STORAGE
	if(localStorage.getItem("close")!==null){
		localStorage.getItem("close");
		task.style.display = "none";
	}		
	const check = document.querySelector('[name ="check"]');
	check.addEventListener("click",()=>{
		if(check.checked){
			localStorage.setItem("close", "check")
		}else{
			localStorage.removeItem("close");
		}
	});
					// ВСТАВКА СОДЕРЖИМОГО
	const str0 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
		  str1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.",
		  str2 = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web.",
		  str3 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
		  str4 = "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
		  str5 = "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
	const array = [str0,str1,str2,str3,str4,str5];
	document.querySelectorAll(".mySlides p").forEach((el,i)=>{
		el.innerHTML = array[i];
	});
					// НАЖАТИЕ КЛАВИШ <- | ->
	document.addEventListener("keydown",(e)=>{
		if(e.code === "ArrowRight"){
			plusSlides(1);
		}else if(e.code === "ArrowLeft"){
			plusSlides(-1);
		}
	});
					// ОТРАБОТКА СЛАЙДЕРА
	document.querySelector(".prev").addEventListener("click",()=>{
		plusSlides(-1);
	});				
	document.querySelector(".next").addEventListener("click",()=>{
		plusSlides(1);
	});	
	document.querySelectorAll(".dot").forEach((el,i)=>{
		el.addEventListener("click",()=>{
			currentSlide(i+1)
		});	
	});
}
	let index = 1;
	function plusSlides(n) {
		showSlides(index += n);
	}
	function currentSlide(n) {
		showSlides(index = n);
	}
	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");

		if(n>slides.length){
			index = 1;
		}
		if(n<1){
			index = slides.length;
		}
		for(i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}
		for(i=0; i<dots.length; i++){
			dots[i].className = dots[i].className.replace("active",""); 
		}
		slides[index-1].style.display = "block";
		dots[index-1].className += " active";
	}