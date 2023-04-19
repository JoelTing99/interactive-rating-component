let ratingItems = document.querySelectorAll("li");
let selectValue = 0;

ratingItems.forEach(element => {
    element.addEventListener("click", () => {
        ratingItems.forEach(element => {
            element.style.backgroundColor = "#262f36";
            element.style.color = "	#656d77";
        });
        element.style.backgroundColor = "#fb7617";
        element.style.color = "#fff";
        
        selectValue = element.value;
    });
    
    element.addEventListener("mouseover", () => {
        if (element.value !== selectValue)
        {
            element.style.backgroundColor = "#959eac";
            element.style.color = "#fff";
        }
    });

    element.addEventListener("mouseout", () => {
        if (element.value !== selectValue)
        {
            element.style.backgroundColor = "#262f36";
            element.style.color = "	#656d77";
        }
    });
});

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    document.querySelector(".rating-card").classList.add("hidden");
    document.querySelector(".thanks-card").classList.remove("hidden");

    document.querySelector("#rate").innerHTML = selectValue;
});

