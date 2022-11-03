var questions = document.getElementsByClassName("faq_content-question");
var i;

for (i = 0; i < questions.length; i++) {
    console.log(questions)
    questions[i].addEventListener("click", function() {
        if(this.classList.contains("selected_question")){
            this.classList.remove("selected_question");
            var panel = this.nextElementSibling;
            panel.classList.remove("show_response");
        }else{
            var questions2 = document.getElementsByClassName("selected_question");
            var responses2 = document.getElementsByClassName("show_response");
            if(questions2.length != 0 && responses2.length != 0){
                let a;
                for (a = 0; a < questions2.length; a++) {
                    questions2[a].classList.remove("selected_question");
                }
                let b;
                for (b = 0; b < responses2.length; b++) {
                    responses2[b].classList.remove("show_response");
                }
            }
            this.classList.add("selected_question");
            var panel = this.nextElementSibling;
            panel.classList.add("show_response");
        }
        

        // this.classList.toggle("active");
        // if (panel.style.display === "block") {
        // panel.style.display = "none";
        // } else {
        // panel.style.display = "block";
        // }
  });
}