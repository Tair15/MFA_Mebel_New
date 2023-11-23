let questions = [
    {
      id:1,
      question: "Как зовут нашего главного исполнительного директора?",
      answer:"Асет Тургамбаевич",
      option: [
        "Асет Тургамбаевич",
        "Мадияр Жанжигитов",
        "Сания Женискыз",
        "Адильхан Ислямбек",
      ]
    },
    {
      id:2,
      question: "Сколько лет существует MFA mebel",
      answer:"12 лет",
      option: [
        "12 лет",
        "11 лет",
        "6 лет",
        "9 лет",
        "10 лет",
      ]
    },
    {
      id:3,
      question: "Должность Мадияра Жанжигитова",
      answer:"Продакт менеджер",
      option: [
        "Продакт менеджер",
        "Бухгалтер",
        "Айтишник",
        "Дизайн менеджер",
      ]
    },
    {
      id: 4,
      question: "С чего начинается разработка дизайн-проекта?",
      answer: "Разработка дизайн-проекта обычно начинается с изучения задачи и требований клиента",
      options: [
        "Разработка дизайн-проекта обычно начинается с изучения задачи и требований клиента",
        "Выбор цветовой гаммы",
        "Проектирование мебели",
        "Работа с графическими программами",
        "Анализ конкурентов",
      ]
    },
    {
      id:5,
      question: "Какой наш адрес?",
      answer:"Куйши Дина 25",
      option: [
        "Петрова 19",
        "Мангилик Ел 39",
        "Куйши Дина 25",
        "Байтурсынова 12",
      ]
    },
    {
      id:6,
      question: "Основные наши направления",
      answer:"qwe",
      option: [
        "Дизайн Ремонт Демонтаж",
        "Мебель Дизайн Ремонт",
        "Подготовка к школе",
        "Клининг сервис",
      ]
    },
    {
      id:7,
      question: "Как называется наша компания",
      answer:"MFA Mebel",
      option: [
        "Sylu",
        "StroyD",
        "Ovon",
        "MFA Mebel",
      ]
    },
    {
      id:8,
      question: "Сколько фотографий на главной страничке?",
      answer:"4",
      option: [
        "2",
        "3",
        "4",
        "5",
        "6",
      ]
    },
    {
      id:9,
      question: "Сколько шагов нужно для заключения сделки",
      answer:"6",
      option: [
        "2",
        "6",
        "9",
        "11",
        "3",
      ]
    },
    {
      id:10,
      question: "Лучшая фирма в своем наравлении",
      answer:"MFA Mebel",
      option: [
        "MFA Mebel",
        "Ovon",
        "Sylu",
        "Wokaks",
      ]
    },
  ]
  

  
  let question_count = 0;
  let points = 0;

  window.onload = function () {
    show(question_count);
  };

  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].option;

    question.innerHTML = `<h2>Вопрос №${count + 1}. ${questions[count].question}</h2>
      <ul class="option_group">
        <li class="option" onclick="selectOption(this)">${first}</li>
        <li class="option" onclick="selectOption(this)">${second}</li>
        <li class="option" onclick="selectOption(this)">${third}</li>
        <li class="option" onclick="selectOption(this)">${fourth}</li>
      </ul>`;
    toggleActive();
  }

  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].classList.remove("active");
    }
  }

  function selectOption(option) {
    toggleActive();
    option.classList.add("active");
  }

  function next() {
    let selectedOption = document.querySelector("li.option.active");
  
    if (!selectedOption) {
      alert("Обязательно выберите один из вариантов ответов");
      return; 
    }
  
    if (question_count === questions.length - 1) {
      sessionStorage.setItem("points", points);
      location.href = "quizFinal.html";
    }
  
    let user_answer = selectedOption.innerHTML;
  
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
  
    console.log(points);
    question_count++;
    show(question_count);
  }
  