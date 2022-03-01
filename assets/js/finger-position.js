window.onload = function() {
    let clickarea = document.getElementById("clickarea");
    clickarea.addEventListener('click', function(e) { 

        clickarea.onclick = userClicked;
        function userClicked(event) {
            //numberOfClicks++;
            // console.log(numberOfClicks);
            let x = event.clientX;
            let y = event.clientY;

            let middleFinger = document.createElement('img');
            let class_name = "image";
            middleFinger.setAttribute("class", class_name);
            middleFinger.setAttribute('src', 'assets/images/middle_finger.png');
            middleFinger.setAttribute('style', '');
            middleFinger.style.display = 'inline-block';
            middleFinger.style.position = 'absolute';
            middleFinger.style.width = 100 + 'px';
            middleFinger.style.height = 100 + 'px';
            middleFinger.style.left = x + 'px';
            middleFinger.style.top = (y-100) + 'px';

            document.getElementsByClassName("page")[0].appendChild(middleFinger);
        }
    }); 
}