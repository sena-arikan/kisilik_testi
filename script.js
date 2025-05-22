const quizData = [
  {
    question: "Hangi ortamda kendini en rahat hissedersin?",
    options: [
      { text: "Sahne ışıkları altında", character: "Bloom" },
      { text: "Müzik dolu bir yerde", character: "Musa" },
      { text: "Doğada, bitkilerle", character: "Flora" },
      { text: "Teknolojiyle dolu bir odada", character: "Tecna" },
      { text: "Güneşli bir plajda", character: "Stella" },
      { text: "Hareketli bir spor salonunda", character: "Aisha" },
    ],
  },
  {
    question: "Favori renklerin hangileri?",
    options: [
      { text: "Kırmızı ve turuncu", character: "Bloom" },
      { text: "Mor ve mavi", character: "Musa" },
      { text: "Yeşil ve kahverengi", character: "Flora" },
      { text: "Gri ve metalik", character: "Tecna" },
      { text: "Sarı ve altın", character: "Stella" },
      { text: "Mavi ve turkuaz", character: "Aisha" },
    ],
  },
  {
    question: "Bir problemle karşılaştığında nasıl davranırsın?",
    options: [
      { text: "Cesurca mücadele ederim", character: "Bloom" },
      { text: "Duygusal ve yaratıcı çözümler ararım", character: "Musa" },
      { text: "Sakin ve sabırlı kalırım", character: "Flora" },
      { text: "Mantıklı ve analitik düşünürüm", character: "Tecna" },
      { text: "Pozitif enerjimle etrafı etkilerim", character: "Stella" },
      { text: "Hızlı ve kararlı hareket ederim", character: "Aisha" },
    ],
  },
  {
    question: "Boş zamanlarını nasıl değerlendirirsin?",
    options: [
      { text: "Macera dolu etkinlikler", character: "Bloom" },
      { text: "Müzik dinlemek ya da yapmak", character: "Musa" },
      { text: "Bahçe işleri ve doğa yürüyüşü", character: "Flora" },
      { text: "Teknoloji ve oyunlar", character: "Tecna" },
      { text: "Alışveriş ve moda", character: "Stella" },
      { text: "Spor ve dans", character: "Aisha" },
    ],
  },
  {
    question: "Hangi özelliğin seni en iyi tanımlar?",
    options: [
      { text: "Liderlik", character: "Bloom" },
      { text: "Sanatsal yaratıcılık", character: "Musa" },
      { text: "Doğaya düşkünlük", character: "Flora" },
      { text: "Zeka ve mantık", character: "Tecna" },
      { text: "Neşeli ve enerjik", character: "Stella" },
      { text: "Güçlü ve kararlı", character: "Aisha" },
    ],
  },
  {
    question: "Hangi element seni daha çok temsil eder?",
    options: [
      { text: "Ateş", character: "Bloom" },
      { text: "Ses ve müzik", character: "Musa" },
      { text: "Toprak ve bitkiler", character: "Flora" },
      { text: "Teknoloji ve elektronik", character: "Tecna" },
      { text: "Güneş ışığı", character: "Stella" },
      { text: "Su ve hareket", character: "Aisha" },
    ],
  },
  {
    question: "Arkadaşların seni nasıl tanımlar?",
    options: [
      { text: "Cesur ve koruyucu", character: "Bloom" },
      { text: "Duygusal ve eğlenceli", character: "Musa" },
      { text: "Nazik ve anlayışlı", character: "Flora" },
      { text: "Mantıklı ve güvenilir", character: "Tecna" },
      { text: "Parlak ve modaya uygun", character: "Stella" },
      { text: "Enerjik ve hareketli", character: "Aisha" },
    ],
  },
  {
    question: "Hayalindeki tatil nasıl olur?",
    options: [
      { text: "Macera dolu dağ tırmanışı", character: "Bloom" },
      { text: "Müzikli ve huzurlu plaj", character: "Musa" },
      { text: "Doğa ile iç içe sakin bir orman", character: "Flora" },
      { text: "Modern şehir ve teknoloji turu", character: "Tecna" },
      { text: "Güneşli ada ve alışveriş", character: "Stella" },
      { text: "Spor aktiviteleri ve su sporları", character: "Aisha" },
    ],
  },
  {
    question: "En çok hangi aktivite seni mutlu eder?",
    options: [
      { text: "Yeni liderlik fırsatları", character: "Bloom" },
      { text: "Müzik yapmak ve dinlemek", character: "Musa" },
      { text: "Bahçede vakit geçirmek", character: "Flora" },
      { text: "Teknolojik aletlerle uğraşmak", character: "Tecna" },
      { text: "Moda ve tasarım", character: "Stella" },
      { text: "Spor yapmak ve dans etmek", character: "Aisha" },
    ],
  },
  {
    question: "Kendini nasıl ifade edersin?",
    options: [
      { text: "Cesur ve kararlı", character: "Bloom" },
      { text: "Duygusal ve yaratıcı", character: "Musa" },
      { text: "Nazik ve huzurlu", character: "Flora" },
      { text: "Mantıklı ve zeki", character: "Tecna" },
      { text: "Neşeli ve parlak", character: "Stella" },
      { text: "Enerjik ve dinamik", character: "Aisha" },
    ],
  },
];

const characters = {
  Bloom: {
    name: "Bloom",
    description:
      "Ateş elementine sahip, cesur ve lider ruhlu Winx Perisi.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vhSBz8urLPSNlQpTiv/giphy.gif",
  },
  Musa: {
    name: "Musa",
    description:
      "Müziğe aşık, yaratıcı ve duygusal peri.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/avuBzCBIMRq1kKMgp8/giphy.gif",
  },
  Flora: {
    name: "Flora",
    description:
      "Doğayı seven, bitkilerle iletişim kurabilen nazik ve huzurlu peri.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fEWvNJWXoaOLtvY6RH/giphy.gif",
  },
  Tecna: {
    name: "Tecna",
    description:
      "Teknoloji ve mantıkla donanmış, zeki ve analitik Winx Perisi.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WPDONTfuoJDVE5z7Ht/giphy.gif",
  },
  Stella: {
    name: "Stella",
    description:
      "Güneş ışığı ve modanın perisi, parlak ve enerjik bir kişilik.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gvTITk4aovjVP6gUt6/giphy.gif",
  },
  Aisha: {
    name: "Aisha",
    description:
      "Su ve hareket elementlerine sahip güçlü ve dinamik peri.",
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Q1am1qNnpnbjZqYW1qdTkzaWVtenZmM2RpZTBmanJwNm90cXdweCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pxYwCGM8iZeZB6UmFt/giphy.gif",
  },
};

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const resultDiv = document.getElementById("result");
const resultName = document.getElementById("result-name");
const resultDesc = document.getElementById("result-desc");
const resultImg = document.getElementById("result-img");

let currentQuestion = 0;
let scores = {
  Bloom: 0,
  Musa: 0,
  Flora: 0,
  Tecna: 0,
  Stella: 0,
  Aisha: 0,
};

function loadQuestion() {
  quizContainer.innerHTML = "";

  if (currentQuestion >= quizData.length) {
    showResult();
    return;
  }

  const q = quizData[currentQuestion];
  const questionEl = document.createElement("div");
  questionEl.classList.add("question");
  questionEl.textContent = q.question;

  const optionsEl = document.createElement("div");
  optionsEl.classList.add("options");

  q.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = opt.character;
    input.id = `option${idx}`;
    label.htmlFor = input.id;

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt.text));

    optionsEl.appendChild(label);
  });

  quizContainer.appendChild(questionEl);
  quizContainer.appendChild(optionsEl);
}

function showResult() {
  // En yüksek puan alan karakteri bul
  let winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  const character = characters[winner];
  resultName.textContent = character.name;
  resultDesc.textContent = character.description;
  resultImg.src = character.image;

  quizContainer.classList.add("hidden");
  nextButton.classList.add("hidden");
  resultDiv.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Lütfen bir seçenek seçin!");
    return;
  }

  scores[selected.value]++;
  currentQuestion++;
  loadQuestion();
});

document.getElementById("restart-button").addEventListener("click", () => {
  currentQuestion = 0;
  for (let key in scores) scores[key] = 0;

  resultDiv.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  loadQuestion();
});

window.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
