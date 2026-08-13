// ============================================================================
// Portfolio behavior + accurate content corrections
// Visual styling remains in style.css. This script reuses the existing CSS
// classes so the design is not redesigned.
// ============================================================================

const bootLines = [
  { text: '$ whoami', cls: 'fade' },
  { text: 'bo.bunlong // year_01_complete → year_02', cls: 'ok' },
  { text: '$ cat profile.txt', cls: 'fade' },
  { text: 'institution : Cambodia Academy of Digital Technology (CADT)', cls: 'info' },
  { text: 'program     : Telecommunications & Networking · Cyber Security', cls: 'info' },
  { text: 'focus       : IT Support · Cybersecurity · Purple Team', cls: 'info' },
  { text: '$ status --check', cls: 'fade' },
  { text: '[OK] curiosity........... online', cls: 'ok' },
  { text: '[OK] hands_on_learning... active', cls: 'ok' },
  { text: '[..] expertise........... in_progress', cls: 'warn' },
];

const consoleBody = document.getElementById('consoleBody');

function typeLine(el, text, speed = 14) {
  return new Promise((resolve) => {
    let i = 0;
    const span = document.createElement('span');
    el.appendChild(span);
    const interval = setInterval(() => {
      span.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function bootSequence() {
  if (!consoleBody) return;
  for (const line of bootLines) {
    const row = document.createElement('div');
    row.className = 'line ' + line.cls;
    consoleBody.insertBefore(row, consoleBody.lastElementChild);
    await typeLine(row, line.text, 10);
    await new Promise(r => setTimeout(r, 90));
  }
}

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bootSequence();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const heroConsole = document.querySelector('.console');
if (heroConsole) heroObserver.observe(heroConsole);

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

const fillEls = document.querySelectorAll('[data-fill]');
const fillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const value = target.getAttribute('data-fill');
      requestAnimationFrame(() => { target.style.width = value + '%'; });
      fillObserver.unobserve(target);
    }
  });
}, { threshold: 0.3 });
fillEls.forEach(el => {
  el.style.width = '0%';
  el.style.transition = 'width 1s cubic-bezier(.2,.8,.2,1)';
  fillObserver.observe(el);
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      link.style.color = 'var(--green)';
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

// ---------------------------------------------------------------------------
// Accurate portfolio content
// Reuses the existing visual classes from style.css.
// ---------------------------------------------------------------------------
function setContent() {
  const navStatus = document.querySelector('.nav-status');
  if (navStatus) navStatus.innerHTML = 'STATUS: YEAR_01_COMPLETE → YEAR_02 <span style="color:var(--green)">●</span>';

  const hero = document.querySelector('#top');
  if (hero) {
    const lede = hero.querySelector('.lede');
    if (lede) lede.textContent = "Hi, I'm Bo Bunlong — a Telecommunications and Networking student specializing in Cyber Security at CADT. I have completed Year 1 and am preparing to start Year 2. I'm currently seeking an IT Support or Cybersecurity internship while building practical skills through self-study, labs, and personal projects. My long-term goal is to grow into Purple Team work.";
    const meta = hero.querySelector('.hero-meta');
    if (meta) meta.innerHTML = `<div><b>Institution</b> — CADT</div><div><b>Program</b> — Telecommunications &amp; Networking · Cyber Security</div><div><b>Stage</b> — Year 1 complete → Year 2</div>`;
  }

  const about = document.querySelector('#about');
  if (about) {
    about.querySelector('.about-copy').innerHTML = `
      <p>I'm a student at <strong>CADT (Cambodia Academy of Digital Technology)</strong> studying a <strong>Bachelor of Telecommunications and Networking, specialized in Cyber Security</strong>. I have completed Year 1 and am preparing to start Year 2, with an expected graduation in <strong>2029</strong>.</p>
      <p>I'm currently looking for an <strong>IT Support or Cybersecurity internship</strong> where I can turn my networking and security fundamentals into real workplace experience. I enjoy learning by doing and I'm still building my practical foundation.</p>
      <p>I'm especially interested in how systems and networks work, how attacks happen, and how offensive and defensive knowledge can eventually come together in <strong>Purple Team</strong> operations.</p>
      <div class="id-card panel reveal in">
        <div class="id-row"><span class="id-key">Name</span><span class="id-val">Bo Bunlong</span></div>
        <div class="id-row"><span class="id-key">Institution</span><span class="id-val">CADT</span></div>
        <div class="id-row"><span class="id-key">Program</span><span class="id-val">Telecommunications &amp; Networking</span></div>
        <div class="id-row"><span class="id-key">Specialization</span><span class="id-val">Cyber Security</span></div>
        <div class="id-row"><span class="id-key">Standing</span><span class="id-val">Year 1 Complete → Year 2</span></div>
        <div class="id-row"><span class="id-key">Graduation</span><span class="id-val">2029</span></div>
        <div class="id-row"><span class="id-key">Status</span><span class="id-val green">SEEKING INTERNSHIP</span></div>
      </div>`;
  }

  const goals = document.querySelector('#goals');
  if (goals) {
    goals.querySelector('.goal-list').innerHTML = `
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Secure an IT Support / Cybersecurity Internship</b><span>Gain real workplace experience and learn how technical teams solve problems in production environments.</span></div></div>
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Strengthen Networking Fundamentals</b><span>Continue the CCNA path through CCNA2 and CCNA3 while applying networking knowledge hands-on.</span></div></div>
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Build Practical Cybersecurity Skills</b><span>Progress from beginner labs into stronger understanding of enumeration, network security, monitoring, and defensive concepts.</span></div></div>
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Complete CompTIA Security+ Self-Study</b><span>Build a broad cybersecurity foundation using Professor Messer and hands-on practice.</span></div></div>
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Understand Both Attack and Defense</b><span>Learn attacker techniques responsibly so future defensive decisions are based on how attacks actually work.</span></div></div>
      <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Grow into Purple Team Work</b><span>Long term, combine offensive and defensive perspectives to improve detection, validation, and security controls.</span></div></div>`;
  }

  const skills = document.querySelector('#skills');
  if (skills) {
    skills.querySelector('.skills-grid').innerHTML = `
      <div class="skill-group reveal in"><h4>Programming</h4>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">C</span><span class="skill-level beg">Beginner</span></div><div class="skill-track"><div class="skill-fill" data-fill="35"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Python</span><span class="skill-level beg">Beginner</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">HTML / CSS</span><span class="skill-level beg">Beginner</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">JavaScript / React</span><span class="skill-level beg">Beginner</span></div><div class="skill-track"><div class="skill-fill" data-fill="20"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Bash</span><span class="skill-level beg">Beginner</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
      </div>
      <div class="skill-group reveal in"><h4>Security Tools</h4>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Wireshark</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Nmap</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="30"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Aircrack-ng</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">John the Ripper</span><span class="skill-level beg">Not started</span></div><div class="skill-track"><div class="skill-fill" data-fill="0"></div></div></div>
      </div>
      <div class="skill-group reveal in"><h4>Operating Systems</h4>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Kali Linux</span><span class="skill-level int">Regular use</span></div><div class="skill-track"><div class="skill-fill" data-fill="60"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Windows</span><span class="skill-level int">Regular use</span></div><div class="skill-track"><div class="skill-fill" data-fill="55"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Linux Fundamentals</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="40"></div></div></div>
      </div>
      <div class="skill-group reveal in"><h4>Security Domains</h4>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Networking</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="45"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Cybersecurity Fundamentals</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="40"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">Vulnerability Scanning</span><span class="skill-level learning">In progress</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
        <div class="skill-row"><div class="skill-top"><span class="skill-name">SOC Concepts</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
      </div>`;
  }

  const certs = document.querySelector('#certifications');
  if (certs) {
    certs.querySelector('.cert-grid').innerHTML = `
      <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">Introduction to Cybersecurity</h3><div class="cert-issuer">Cisco</div><div class="cert-date">Self-study · Completed</div></div>
      <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">CCNA1</h3><div class="cert-issuer">Cisco Networking Academy / University</div><div class="cert-date">Year 1 · Term 1</div></div>
      <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">In Progress</span></div><h3 class="cert-name">CCNA</h3><div class="cert-issuer">Cisco</div><div class="cert-date">CCNA1 completed · CCNA2 planned Year 2 Term 2 · CCNA3 planned Year 2 Term 3</div></div>
      <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">Self-study</span></div><h3 class="cert-name">CompTIA Security+</h3><div class="cert-issuer">CompTIA</div><div class="cert-date">Studying with Professor Messer · SY0-701</div></div>
      <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge planned">Planned</span></div><h3 class="cert-name">Certified Ethical Hacker (CEH)</h3><div class="cert-issuer">EC-Council</div><div class="cert-date">Not started</div></div>`;
  }

  const exp = document.querySelector('#experience');
  if (exp) exp.querySelector('.timeline').innerHTML = `<div class="tl-item exp-empty"><div class="tl-dot"></div><h3>No formal experience yet</h3><p>I'm currently seeking my first IT Support or Cybersecurity internship. For now, I'm building practical experience through university study, self-learning, labs, and personal projects.</p></div>`;

  const projects = document.querySelector('#projects');
  if (projects) {
    projects.querySelector('.project-list').innerHTML = `
      <div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / Cybersecurity</div><h3>CyberMate</h3><div class="project-status">In progress</div></div><div class="project-body"><dl><dt>What it is</dt><dd>An AI-powered cybersecurity mentor platform designed to help learners study cybersecurity, work through security topics, and get practical guidance.</dd><dt>My role</dt><dd>Personal project developed with AI-assisted / vibe coding while I design the product and learn the underlying technologies.</dd><dt>Current focus</dt><dd>Building the platform architecture, AI mentor workflow, memory/RAG concepts, authentication, and security-minded design.</dd><dt>Note</dt><dd>This is an active learning project rather than professional production experience.</dd></dl></div></div>
      <div class="project panel reveal in"><div class="project-head"><div class="project-tag">C Programming</div><h3>2D C Game</h3><div class="project-status">Completed</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A completed 2D game project built as a university programming project using C.</dd><dt>Skills Learned</dt><dd class="skills"><span class="pill">C</span><span class="pill">Programming fundamentals</span><span class="pill">Game logic</span><span class="pill">GUI</span></dd><dt>My role</dt><dd>Built as a hands-on programming project and completed as part of my learning.</dd><dt>Repository</dt><dd><a href="https://github.com/Bunlong-Cyber/Project-Game" target="_blank" rel="noopener">View on GitHub →</a></dd></dl></div></div>
      <div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / CTF</div><h3>CTF Assistant</h3><div class="project-status">Completed · In daily use</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A personal AI-assisted CTF helper that I use when learning and working through cybersecurity challenges.</dd><dt>My role</dt><dd>Developed through vibe coding / AI assistance and integrated into my own workflow. I actively use it rather than presenting the AI-generated implementation as purely hand-coded work.</dd><dt>Skills / Concepts</dt><dd class="skills"><span class="pill">RAG</span><span class="pill">AI APIs</span><span class="pill">CTF workflow</span><span class="pill">Linux</span></dd><dt>Note</dt><dd>AI assistance was a major part of implementation; the project is presented honestly as an AI-assisted personal tool.</dd></dl></div></div>`;
  }

  const lab = document.querySelector('#lab');
  if (lab) {
    lab.querySelector('.lab-grid').innerHTML = `
      <div class="lab-diagram panel reveal in"><div class="host-box"><b>Current Environment</b>Kali Linux + Windows 11 dual-boot</div><div class="vm-stack"><div class="vm attacker"><b>Kali Linux</b><span>Daily-use security learning environment</span></div><div class="vm defender"><b>Home Lab</b><span>Planned — not built yet</span></div><div class="vm endpoint"><b>SIEM</b><span>Planned — not deployed yet</span></div></div></div>
      <div class="lab-activities reveal in"><h4>Actual Practice</h4><div class="activity-row"><span class="activity-idx">01</span><span>Kali Linux used regularly for cybersecurity learning</span></div><div class="activity-row"><span class="activity-idx">02</span><span>Wireshark — currently learning</span></div><div class="activity-row"><span class="activity-idx">03</span><span>Nmap — currently learning</span></div><div class="activity-row"><span class="activity-idx">04</span><span>Aircrack-ng — completed one authorized Wi-Fi password-cracking experiment</span></div><div class="activity-row"><span class="activity-idx">05</span><span>Vulnerability scanning — learning through Nmap</span></div><div class="activity-row"><span class="activity-idx">06</span><span>TryHackMe — currently learning through course labs</span></div></div>`;
  }

  const ctf = document.querySelector('#ctf');
  if (ctf) {
    ctf.querySelector('.ctf-grid').innerHTML = `
      <div class="ctf-card panel reveal in"><div class="ctf-top"><span class="ctf-plat">TryHackMe</span><span class="ctf-badge">Learning</span></div><div class="ctf-stat"><span>Completed</span><span>Course labs only</span></div><div class="ctf-stat"><span>Current status</span><span>Active learning</span></div><div class="ctf-track"><div class="ctf-fill" data-fill="15"></div></div><p class="ctf-note">Using TryHackMe as a learning environment and currently working through course labs.</p></div>
      <div class="ctf-card panel reveal in"><div class="ctf-top"><span class="ctf-plat">Hack The Box</span><span class="ctf-badge">AI-assisted</span></div><div class="ctf-stat"><span>Past labs</span><span>Approx. 4–5</span></div><div class="ctf-stat"><span>My contribution</span><span>Not independently solved</span></div><div class="ctf-track"><div class="ctf-fill" data-fill="5"></div></div><p class="ctf-note">These labs were completed entirely with AI assistance, so I do not present them as challenges I independently solved.</p></div>
      <div class="ctf-card panel reveal in"><div class="ctf-top"><span class="ctf-plat">PicoCTF</span><span class="ctf-badge">Not started</span></div><div class="ctf-stat"><span>Challenges solved</span><span>0</span></div><div class="ctf-stat"><span>Status</span><span>Not started</span></div><div class="ctf-track"><div class="ctf-fill" data-fill="0"></div></div><p class="ctf-note">Not part of my current learning activity yet.</p></div>`;
  }

  const writeups = document.querySelector('#writeups');
  if (writeups) writeups.querySelector('.blog-list').innerHTML = `
    <a class="blog-row" href="#"><span class="blog-num">001</span><div class="blog-info"><h3>Wi-Fi Security Experiment</h3><span>Hands-on Lab</span></div><span class="blog-arrow">→</span></a>
    <a class="blog-row" href="#"><span class="blog-num">002</span><div class="blog-info"><h3>Hack The Box Lab Notes</h3><span>AI-assisted Learning</span></div><span class="blog-arrow">→</span></a>
    <a class="blog-row" href="#"><span class="blog-num">003</span><div class="blog-info"><h3>More writeups coming as I learn</h3><span>Learning Log</span></div><span class="blog-arrow">→</span></a>`;

  const achievements = document.querySelector('#achievements');
  if (achievements) achievements.querySelector('.timeline').innerHTML = `
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed Year 1</h3><p>Completed the first year of the Telecommunications and Networking program, specialized in Cyber Security, at CADT.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed CCNA1</h3><p>Completed CCNA1 during Year 1 Term 1 at university.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed Cisco Introduction to Cybersecurity</h3><p>Finished the course through self-study.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed 2D C Game Project</h3><p>Finished a hands-on C programming project and published the project on GitHub.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Started CyberMate</h3><p>Began building an AI-powered cybersecurity mentor as an ongoing personal project using AI-assisted development.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Started hands-on security learning</h3><p>Using Kali Linux regularly while learning Wireshark, Nmap, Aircrack-ng, and TryHackMe fundamentals.</p></div>`;

  const contact = document.querySelector('#contact');
  if (contact) contact.querySelector('.contact-panel').innerHTML = `
    <div class="eyebrow">12 // Contact</div>
    <h2>Open to IT Support &amp; Cybersecurity internships.</h2>
    <p>I'm currently looking for my first internship where I can learn from experienced professionals, contribute where I can, and turn my networking and cybersecurity foundation into practical experience.</p>
    <div class="contact-links">
      <a href="mailto:lengbo777working@gmail.com" class="btn btn-primary">Email Me</a>
      <a href="https://www.linkedin.com/in/bo-bunlong-752269333" target="_blank" rel="noopener" class="btn btn-ghost">LinkedIn</a>
      <a href="https://github.com/Bunlong-Cyber" target="_blank" rel="noopener" class="btn btn-ghost">GitHub</a>
      <a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener" class="btn btn-ghost">TryHackMe</a>
      <a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener" class="btn btn-ghost">Hack The Box</a>
    </div>`;

  const footer = document.querySelector('footer .wrap');
  if (footer) footer.innerHTML = 'BO_BUNLONG.SEC <span class="sep">|</span> CADT — Cyber Security <span class="sep">|</span> © <span id="year"></span>';

  document.querySelectorAll('[data-fill]').forEach(el => {
    const value = el.getAttribute('data-fill');
    el.style.width = '0%';
    el.style.transition = 'width 1s cubic-bezier(.2,.8,.2,1)';
    requestAnimationFrame(() => { el.style.width = value + '%'; });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

setContent();
