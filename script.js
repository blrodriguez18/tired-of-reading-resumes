let currentStep = "start"; // Controls bot logic steps
const chatBody = document.querySelector(".chatbox-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector(".send-message");

// --- Bot logic ---
function getBotResponse(userInput) {
  userInput = userInput.toLowerCase();

  switch (currentStep) {
    case "start":
      currentStep = "learn?";
      return `<h4>Hello, my name is Bea. Would you like to learn more about me today?</h4>`;

    case "learn?":
      if (userInput.includes("yes")) {
        currentStep = "confirm";
        return `
          <h4>Let's get started. Pick a topic:</h4>
          <div class="bot-options">
            <button class="option-btn" data-choice="personal">Personal Info</button><br>
            <button class="option-btn" data-choice="academics">Academics</button><br>
            <button class="option-btn" data-choice="professional">Professional</button><br>
            <button class="option-btn" data-choice="clubs">Clubs</button><br>
            <button class="option-btn btn2" data-choice="done">I'm done</button>
          </div>`;
      } else if (userInput.includes("no")) {
        currentStep = "end";
        return `<h4>Okay, thanks for stopping by! Feel free to download my resume or view my portfolio in the "Links" section.</h4>`;
      } else {
        return `<h4>Please say either 'yes' or 'no'.</h4>`;
      }

    case "confirm":
      if (userInput.includes("personal")) {
        currentStep = "personal";
        return `<h4>Hello! I am from Manila, Philippines and am currently based in Los Angeles. &#x1f1f5;&#x1f1ed; &#x1f1fa;&#x1f1f8;</h4>
                <h4>My star sign is Sagittarius &#9808</h4>
                <h4>I love blueberry matcha lattes, driving on spacious freeways, and Uniqlo's Snoopy T-shirt collection. &#x1F375;</h4>
                <h4>Would you like to learn more about my skills and hobbies?</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="yes">Yes!</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("academics")) {
        currentStep = "academics";
        return `<h4>I am a rising senior at the University of Southern California (fight on!), majoring in Applied Math and minoring in Data Science. My current GPA is 3.92/4.0.</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="coursework">Coursework</button>
                  <button class="option-btn" data-choice="awards">Awards</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("professional")) {
        currentStep = "professional";
        return `<h4>I've worked in research and tech-focused internships related to data science. </h4>
                <h4>Click the buttons to learn more about my experiences:</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="Blue Shield of California">Blue Shield of California</button>
                  <button class="option-btn" data-choice="USC">USC</button>
                  <button class="option-btn" data-choice="Princess Cruises">Princess Cruises</button>
                  <button class="option-btn" data-choice="GoTyme">GoTyme</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("clubs")) {
        currentStep = "clubs";
        return `<h4>I'm involved in several academic, professional, and recreational clubs on campus.</h4>
                <h4>Click to learn more about my on-campus involvement:</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="AATP">AATP</button>
                  <button class="option-btn" data-choice="SASE">SASE</button>
                  <button class="option-btn" data-choice="DataSC">DataSC</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("done")) {
        currentStep = "end";
        return `<h4>Thanks for chatting! Refresh the page to start again. </h4>
                <h4>Feel free to download my resume or view my portfolio in the "Links" section.</h4>`
      } else {
        return `<h4>Please pick from the provided options.</h4>`;
      }

    case "personal":
      if (userInput.includes("yes")) {
        return `<h4>In my free time, I enjoy drawing/painting &#x1F3A8;, going to the gym &#x1f3cb;, watching Chinese dramas &#x1F4FA;, and exploring Trader Joe's cheeses &#x1f9c0;</h4>
                <h4>Aside from being proficient in coding languages and tools like Python, SQL, MATLAB, & Tableau, I am also fluent in English, Mandarin, and Tagalog.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("main")) {
        currentStep = "confirm";
        return `<h4>You're back at the main menu. Pick a topic.</h4>
          <div class="bot-options">
            <button class="option-btn" data-choice="personal">Personal Info</button><br>
            <button class="option-btn" data-choice="academics">Academics</button><br>
            <button class="option-btn" data-choice="professional">Professional</button><br>
            <button class="option-btn" data-choice="clubs">Clubs</button><br>
            <button class="option-btn btn2" data-choice="done">I'm done</button>
          </div>`;
      }

    case "academics":
      if (userInput.includes("coursework")) {
        return `<h4>My coursework in math includes higher level classes in </h4>
                    <li>combinatorics</li>
                    <li>probability and statistics</li> 
                    <li>math of machine learning</li>
                    <li>differential geometry</li> 
                <h4>Through these classes, I have built up skills in quantitative reasoning and computation.</h4>
                <p> </p>
                <h4>As for data science, I've taken classes in</h4>
                    <li>enterprise data analytics</li>
                    <li>data visualization</li>
                    <li>database querying and management</li<>
                    <li>machine learning and data mining</li>
                <h4>For more insight into my coding skills, please visit my website portfolio!</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-acad">Back</button>
                </div>`;
      } else if (userInput.includes("awards")) {
        return `<h4>I have consistently been on the Dean's List for every semester since Fall 2022.</h4>
                <h4>I have also been awarded multiple merit-based scholarships: </h4>
                <li>Sylas and Rose Marx Meyer Scholarship</li>
                <li>Jessie Ingram Endowed Scholarship</li>
                <li>Asia Pacific Alumni Association Scholarship</li>
                <li>Dornsife Contuining Student Scholarship</li>
                <li>SCion Student Scholarship</li>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-acad">Back</button>
                </div>`;
      } else if (userInput.includes("main-acad")) {
        currentStep = "academics";
        return `<h4>I am a senior at the University of Southern California (fight on!), majoring in Applied Math and minoring in Data Science. My current GPA is 3.92/4.0.</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="coursework">Coursework</button>
                  <button class="option-btn" data-choice="awards">Awards</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("main")) {
        currentStep = "confirm";
        return `<h4>You're back at the main menu. Pick a topic.</h4>
          <div class="bot-options">
            <button class="option-btn" data-choice="personal">Personal Info</button><br>
            <button class="option-btn" data-choice="academics">Academics</button><br>
            <button class="option-btn" data-choice="professional">Professional</button><br>
            <button class="option-btn" data-choice="clubs">Clubs</button><br>
            <button class="option-btn btn2" data-choice="done">I'm done</button>
          </div>`;
      } else {
        return `<h4>Please pick from the provided options.</h4>`;
      }

    case "professional":
      if (userInput.includes("gotyme")) {
        return `<h4>In the summer of 2023, I worked at GoTyme Bank. I was a Data Science Intern, and my main task was using machine learning clustering methods to segment customer profiles to improve the company's targeted marketing methods. </h4>
                <p></p>
                <h4>Using my technical data analysis, I communicated strategic marketing recommendations to senior company leaders. Two of my recommendations were approved and successfully passed to the marketing team for further development.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-prof">Back</button>
                </div>`;
      } else if (userInput.includes("princess cruises")) {
        return `<h4>I served as a Revenue Data Science Intern for Princess Cruises, Ltd. in the summer of 2024. Using Python and SQL, I developed a revenue forecasting model to automatically track and predict overall revenue from each cruise voyage.</h4>
                <p></p>
                <h4>By building a user-friendly and detailed data visualization dashboard, I was able to enhance the company's financial clarity, specifically about income sources and cost factors. </h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-prof">Back</button>
                </div>`;
      } else if (userInput.includes("blue shield of california")) {
        return `<h4>I worked as a Global Business Services Intern at Blue Shield of California last summer of 2025. My department works on guiding and expediting the outsourcing/third-party partnership process throughout the company.</h4>
                <p></p>
                <h4>To streamline this manual process, I am working on automating emails and cycle time tracking on MS Excel. I am also developing and testing a code script to automatically extract, compute, and export data from their chosen software to cut down on process inefficiencies.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-prof">Back</button>
                </div>`;
      } else if (userInput.includes("usc")) {
        return `<h4>In addition to my academics, I am an undergraduate researcher USC Atmospheric Composition & Earth Data Science Research Lab. In collaboration with PhD students, I am working on improving neural network accuracy and overall performance in solving numerical issues in atmospheric chemistry.</h4>
                <p></p>
                <h4>By leveraging my technical skills, we are experimenting with physically-informed mathematical solutions for applicable yet highly data-driven research. I presented my quantitative and analytical findings to diverse audiences at the AGU 2025 Fall Conference. </h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-prof">Back</button>
                </div>`;
      } else if (userInput.includes("main-prof")) {
        currentStep = "professional";
        return `<h4>I've worked in research and tech-focused internships related to data science. </h4>
                <h4>Click the buttons to learn more about my experiences:</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="Blue Shield of California">Blue Shield of California</button>
                  <button class="option-btn" data-choice="USC">USC</button>
                  <button class="option-btn" data-choice="Princess Cruises">Princess Cruises</button>
                  <button class="option-btn" data-choice="GoTyme">GoTyme</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("main")) {
        currentStep = "confirm";
        return `<h4>You're back at the main menu. Pick a topic.</h4>
          <div class="bot-options">
            <button class="option-btn" data-choice="personal">Personal Info</button><br>
            <button class="option-btn" data-choice="academics">Academics</button><br>
            <button class="option-btn" data-choice="professional">Professional</button><br>
            <button class="option-btn" data-choice="clubs">Clubs</button><br>
            <button class="option-btn btn2" data-choice="done">I'm done</button>
          </div>`;
      } else {
        return `<h4>Please pick from the provided options.</h4>`;
      }

    case "clubs":
      if (userInput.includes("aatp")) {
        return `<h4>As the president of the USC Asian American Tutorial Project (AATP), my role revolves around delegating responsibilities, planning and organizing logistics, and effectively leading my fellow board members to ensure smooth running of our volunteer programs.</h4>
                <p></p>
                <h4>As a tutor, my fellow volunteers and I go to the LA Chinatown Service Center weekly to design learning plans for the students we are assigned to. We help them accomplish their homework tasks and increase their productivity.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-clubs">Back</button>
                </div>`;
      } else if (userInput.includes("sase")) {
        return `<h4>I serve as the Director of External Affairs for the USC Society of Asian Scientists and Engineers. Being a professional and academic development club, my main goal is to connect fellow Trojans in STEM fields to professionals in both academia and industry.</h4>
                <p></p>
                <h4>To achieve this, I reach out to individuals and companies in order to organize events such as speaker panels, industry talks, and mentorship/workshop sessions.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-clubs">Back</button>
                </div>`;
      } else if (userInput.includes("datasc")) {
        return `<h4>DataSC is USC's premier data organization. In this club, I am one of the project leads, where I mentor a group of peers and guide them through various data science projects.</h4>                <p></p>
                <p></p>
                <h4>While improving their technical coding skills along with my own, I create structured weekly learning + goal outlines to increase collaboration and growth among the team.</h4>
                <div class="bot-options">
                  <button class="option-btn btn2" data-choice="main-clubs">Back</button>
                </div>`;
      } else if (userInput.includes("main-clubs")) {
        currentStep = "clubs";
        return `<h4>I'm involved in several academic, professional, and recreational clubs on campus.</h4>
                <h4>Click to learn more about my on-campus involvement:</h4>
                <div class="bot-options">
                  <button class="option-btn" data-choice="AATP">AATP</button>
                  <button class="option-btn" data-choice="SASE">SASE</button>
                  <button class="option-btn" data-choice="DataSC">DataSC</button>
                  <button class="option-btn btn2" data-choice="main">Main Menu</button>
                </div>`;
      } else if (userInput.includes("main")) {
        currentStep = "confirm";
        return `<h4>You're back at the main menu. Pick a topic.</h4>
          <div class="bot-options">
            <button class="option-btn" data-choice="personal">Personal Info</button><br>
            <button class="option-btn" data-choice="academics">Academics</button><br>
            <button class="option-btn" data-choice="professional">Professional</button><br>
            <button class="option-btn" data-choice="clubs">Clubs</button><br>
            <button class="option-btn btn2" data-choice="done">I'm done</button>
          </div>`;
      } else {
        return `<h4>Please pick from the provided options.</h4>`;
      }

    case "done":
      currentStep = "end";
      return `<h4>Okay, thanks for stopping by! Feel free to download my resume or view my portfolio in the "Links" section.</h4>`;

    default:
      return `<h4>The conversation has ended. Refresh to start again.</h4>`;
  }
}

// --- Render user message ---
function addUserMessage(text) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("message-wrapper", "user-wrapper");

  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("user-message");

  const messageContent = document.createElement("div");
  messageContent.classList.add("message-text");

  const h4 = document.createElement("h4");
  h4.textContent = text;

  messageContent.appendChild(h4);
  userMessageDiv.appendChild(messageContent);
  wrapper.appendChild(userMessageDiv);
  chatBody.appendChild(wrapper);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// --- Render bot message (supports HTML for buttons) ---
function addBotMessage(htmlText) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("bot-message-wrapper");

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("bot-icon");
  iconDiv.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>`;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("bot-message");
  messageDiv.innerHTML = htmlText;

  wrapper.appendChild(iconDiv);
  wrapper.appendChild(messageDiv);
  chatBody.appendChild(wrapper);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Add click listeners to buttons
  const buttons = messageDiv.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.dataset.choice;
      addUserMessage(choice);
      const dots = addThinkingDots();
      setTimeout(() => {
        dots.remove();
        const botReply = getBotResponse(choice);
        addBotMessage(botReply);
      }, 600);
    });
  });
}

// --- Thinking dots ---
function addThinkingDots() {
  const thinkingWrapper = document.createElement("div");
  thinkingWrapper.classList.add("bot-message-wrapper");

  const botIcon = document.createElement("div");
  botIcon.classList.add("bot-icon");
  botIcon.innerHTML = `<span class="material-symbols-outlined">smart_toy</span>`;

  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");

  const indicator = document.createElement("div");
  indicator.classList.add("thinking-indicator");

  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    indicator.appendChild(dot);
  }

  botMessage.appendChild(indicator);
  thinkingWrapper.appendChild(botIcon);
  thinkingWrapper.appendChild(botMessage);
  chatBody.appendChild(thinkingWrapper);
  chatBody.scrollTop = chatBody.scrollHeight;

  return thinkingWrapper;
}

// --- Handle message input ---
function handleOutgoingMessage(e) {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (!message) return;

  addUserMessage(message);
  messageInput.value = "";

  const dots = addThinkingDots();
  setTimeout(() => {
    dots.remove();
    const botReply = getBotResponse(message);

    if (Array.isArray(botReply)) {
    // Show each message one after the other
    botReply.forEach((msg, i) => {
      setTimeout(() => {
        addBotMessage(msg);
      }, i * 800); // 800ms delay between messages
    });
  } else {
    addBotMessage(botReply);
  }
}, 600);
}

// --- Start with greeting on load ---
window.addEventListener("DOMContentLoaded", () => {
  const initial = getBotResponse("");
  addBotMessage(initial);
});

// --- Event listeners ---
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleOutgoingMessage(e);
});
sendMessageButton.addEventListener("click", handleOutgoingMessage);
