<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Resume -sandhiya</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f4f4f4;
    }
    .resume {
      background: #fff;
      padding: 20px;
      max-width: 800px;
      margin: auto;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1, h2 {
      color: #333;
    }
    .section {
      margin-bottom: 20px;
    }
    #contactInfo {
      display: none;
      padding-top: 10px;
    }
    button {
      padding: 10px 15px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <div class="resume">
    <h1>sandhiya</h1>
    <p><strong>Frontend Developer | JavaScript Enthusiast</strong></p>

    <div class="section">
      <h2>Summary</h2>
      <p>Passionate web developer with 3+ years of experience in building responsive and interactive websites using JavaScript, HTML, and CSS.</p>
    </div>

    <div class="section">
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, GitHub</li>
      </ul>
    </div>

    <div class="section">
      <h2>Experience</h2>
      <p><strong>Web Developer</strong> at ABC Tech (2021 - Present)</p>
      <ul>
        <li>Built responsive web pages using HTML, CSS, and JavaScript</li>
        <li>Collaborated with designers to enhance UX</li>
      </ul>
    </div>

    <div class="section">
      <h2>Contact</h2>
      <button onclick="toggleContact()">Show Contact Info</button>
      <div id="contactInfo">
        <p>Email: ssandhiya8335@gmail.com</p>
        <p>Phone:9043057012 </p>
      </div>
    </div>
  </div>

  <!-- JavaScript Section -->
  <script>
    function toggleContact() {
      const contact = document.getElementById("contactInfo");
      if (contact.style.display === "none") {
        contact.style.display = "block";
      } else {
        contact.style.display = "none";
      }
    }
  </script>

</body>
</html>
