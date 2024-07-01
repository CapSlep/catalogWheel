const { questions, check } = window.__config;

const loaderInit = () => {
  const questionsEl = document.querySelector("#questions");
  // console.log('questions0', questionsEl)
  questionsEl.innerHTML = "";
  // console.log('questions1', questionsEl)

  const loaderEl = document.createElement("div");
  loaderEl.classList.add("pt-3");
  loaderEl.classList.add("mt-2");
  loaderEl.classList.add("text-center");

  const headerEl = document.createElement("b");
  headerEl.innerText = check.title;
  headerEl.classList.add("mt-2");
  headerEl.style.fontSize = "17px";

  const checksEl = document.createElement("div");
  checksEl.classList.add("preload__content");
  checksEl.style.textAlign="center";
  
  const addElem = (ind) => {
    const c = check.arr.length;

    setTimeout(() => {
      if (ind < c) {
        const el = document.createElement("div");
        
        el.style.fontSize = "15px";
        el.style.fontWeight = "500";
        el.innerText = check.arr[ind];
       

        checksEl.appendChild(el);

        addElem(ind + 1);
      } else {
        enableLoader();
        closeMain();
        openGame();
        setTimeout(() => {
          startGame();
          disableLoader();
        }, 2680);
      }
    }, 2e3);
  };

  const spinnerEl = document.createElement("div");
  spinnerEl.classList.add("spinner__");
  spinnerEl.classList.add("mt-2");

  loaderEl.appendChild(headerEl);
  loaderEl.appendChild(spinnerEl);
  loaderEl.appendChild(checksEl);
  questionsEl.appendChild(loaderEl);

  addElem(0);
};

const questionsInit = () => {
  const questionsEl = document.querySelector("#questions");

  if (window.innerWidth <= 768) {
    const hr2 = document.createElement("hr");
    hr2.classList.add("hr", "mt-2");
    questionsEl.appendChild(hr2);
  }

  const quizInit = () => {
    const ulEl = document.createElement("ul");
    ulEl.classList.add("quiz");

    questions.arr.forEach((q, ind) => {
      const liEl = document.createElement("li");
      liEl.setAttribute("id", `question-${ind}`);
      liEl.classList.add("quiz__item");
      liEl.setAttribute(
        "style",
        "opacity: 1; display: none; transition: all 1s ease 0s;"
      );
      const pEl = document.createElement("p");
      pEl.classList.add("quiz__question");
      const strongEl = document.createElement("strong");
      strongEl.innerText = questions._of
        .replace("{1}", ind + 1)
        .replace("{2}", questions.arr.length);
      const qEl = document.createTextNode(q.q);

      pEl.appendChild(strongEl);
      pEl.appendChild(qEl);

      const buttonsDivEl = document.createElement("div");

      q.a.forEach((ans) => {
        const buttonEl = document.createElement("button");
        buttonEl.classList.add("quiz__answer");
        buttonEl.innerText = ans;
        buttonEl.style.backgroundColor = "#ffbc0d";
        buttonEl.style.color = "black";
        buttonEl.style.borderRadius = "10px";
        buttonEl.style.fontSize="16px"


        buttonEl.addEventListener("click", () => {
          liEl.style.display = "none";
          const nextEl = document.querySelector(`#question-${ind + 1}`);
          if (nextEl != null) {
            nextEl.style.display = "block";
          } else {
            loaderInit();
          }
        });

        buttonsDivEl.appendChild(buttonEl);
      });

      if (ind === 0) {
        liEl.style.display = "block";
      }

      liEl.appendChild(pEl);
      liEl.appendChild(buttonsDivEl);
      ulEl.appendChild(liEl);
    });

    questionsEl.appendChild(ulEl);
  };

  quizInit();
};
