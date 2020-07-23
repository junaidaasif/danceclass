document.getElementById("extra").addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("ex");
    if (x.innerHTML === "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae animi quam dolor sapiente ducimus, deserunt veritatis numquam quos modi, perspiciatis possimus enim dolorem! Voluptatem odit autem quos asperiores eligendi!") {
      x.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae animi quam dolor sapiente ducimus, deserunt veritatis numqu this is the best  dance academy of the world you never find this dance academy like that anywhere so get join throygh monsoon offer  modi, perspiciatis possimus enim dolorem! Voluptatem odit autem quos asperiores eligendi!";
    } else {
      x.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quae animi quam dolor sapiente ducimus, deserunt veritatis numquam quos modi, perspiciatis possimus enim dolorem! Voluptatem odit autem quos asperiores eligendi!";
    }
  }