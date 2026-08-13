/* Portfolio behavior + content accuracy. Visual design stays in style.css. */

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
  { text: '[..] expertise........... in_progress', cls: 'warn' }
];

function typeLine(el, text, speed = 10) {
  return new Promise(resolve => {
    let i = 0;
    const span = document.createElement('span');
    el.appendChild(span);
    const timer = setInterval(() => {
      span.textContent += text[i++];
      if (i >= text.length) { clearInterval(timer); resolve(); }
    }, speed);
  });
}

async function bootSequence() {
  const body = document.getElementById('consoleBody');
  if (!body || body.dataset.booted) return;
  body.dataset.booted = '1';
  for (const line of bootLines) {
    const row = document.createElement('div');
    row.className = 'line ' + line.cls;
    body.insertBefore(row, body.lastElementChild);
    await typeLine(row, line.text);
    await new Promise(r => setTimeout(r, 90));
  }
}

function setContent() {
  document.title = 'Bo Bunlong — Cybersecurity Student | Purple Team Learner';
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', 'Portfolio of Bo Bunlong, a Telecommunications and Networking student at CADT specializing in Cyber Security.');

  const navStatus = document.querySelector('.nav-status');
  if (navStatus) navStatus.remove();

  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');
  if (nav && navLinks) navLinks.style.marginLeft = '28px';

  const hero = document.querySelector('#top');
  if (hero) {
    const role = hero.querySelector('.role-line');
    if (role) role.innerHTML = '<span class="role">Cybersecurity Student</span><span class="sep">/</span><span class="role p">Purple Team Learner</span>';
    const lede = hero.querySelector('.lede');
    if (lede) lede.textContent = "Hi, I'm Bo Bunlong — a Telecommunications and Networking student specializing in Cyber Security at CADT. I have completed Year 1 and am preparing to start Year 2. I'm currently seeking an IT Support or Cybersecurity internship while building practical skills through self-study, labs, and personal projects. I enjoy learning both offensive and defensive security, with a long-term goal of growing into Purple Team work.";
    const meta = hero.querySelector('.hero-meta');
    if (meta) meta.innerHTML = '<div><b>Institution</b> — CADT</div><div><b>Program</b> — Telecommunications &amp; Networking · Cyber Security</div><div><b>Stage</b> — Year 1 complete → Year 2</div>';
    const consoleTitle = hero.querySelector('.console-title');
    if (consoleTitle) consoleTitle.textContent = 'cyber-terminal — bash';
    const h1 = hero.querySelector('h1');
    if (h1) { const accent = h1.querySelector('.accent'); if (accent) accent.textContent = 'learning systems,'; }
  }

  const about = document.querySelector('#about');
  if (about) {
    const copy = about.querySelector('.about-copy');
    if (copy) copy.innerHTML = `
      <p>I'm a student at <strong>CADT (Cambodia Academy of Digital Technology)</strong> studying a <strong>Bachelor of Telecommunications and Networking, specialized in Cyber Security</strong>. I have completed Year 1 and am preparing to start Year 2, with an expected graduation in <strong>2029</strong>.</p>
      <p>I'm currently looking for an <strong>IT Support or Cybersecurity internship</strong> where I can turn my networking and security fundamentals into real workplace experience. I enjoy learning by doing and I'm still building my practical foundation.</p>
      <p>I'm interested in both sides of cybersecurity — understanding how systems can be attacked and how they can be protected. My long-term goal is to bring those perspectives together through <strong>Purple Team</strong> work.</p>
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

  const goals = document.querySelector('#goals .goal-list');
  if (goals) goals.innerHTML = `
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Secure an IT Support / Cybersecurity Internship</b><span>Gain real workplace experience and learn how technical teams solve problems in production environments.</span></div></div>
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Strengthen Networking Fundamentals</b><span>Continue the CCNA path through CCNA2 and CCNA3 while applying networking knowledge hands-on.</span></div></div>
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Build Practical Cybersecurity Skills</b><span>Progress from beginner labs into stronger understanding of enumeration, network security, monitoring, and defensive concepts.</span></div></div>
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Complete CompTIA Security+ Self-Study</b><span>Build a broad cybersecurity foundation using Professor Messer and hands-on practice.</span></div></div>
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Understand Both Attack and Defense</b><span>Learn attacker techniques responsibly so future defensive decisions are based on how attacks actually work.</span></div></div>
    <div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Grow into Purple Team Work</b><span>Long term, combine offensive and defensive perspectives to improve security validation and controls.</span></div></div>`;

  const focus = document.querySelector('#interests .card-grid');
  if (focus) {
    const cards = focus.querySelectorAll('.interest-card');
    if (cards[0]) { cards[0].querySelector('h3').textContent = 'Network Security'; cards[0].querySelector('p').textContent = 'Understanding traffic, protocols, and how networks reveal what is really happening.'; }
    if (cards[1]) { cards[1].querySelector('h3').textContent = 'Threat Hunting'; cards[1].querySelector('p').textContent = 'Proactively searching telemetry and activity for signals that rules alone may miss.'; }
    if (cards[2]) { cards[2].querySelector('h3').textContent = 'Incident Response'; cards[2].querySelector('p').textContent = 'Understanding how security incidents are analyzed, contained, and recovered from.'; }
    if (cards[3]) { cards[3].querySelector('h3').textContent = 'Blue Team Defense'; cards[3].querySelector('p').textContent = 'Learning hardening, monitoring, and defensive techniques to reduce attack impact.'; }
    if (cards[4]) { cards[4].querySelector('h3').textContent = 'Purple Team Operations'; cards[4].querySelector('p').textContent = 'Bridging offensive and defensive perspectives to improve security through continuous feedback.'; }
    if (cards[5]) { cards[5].querySelector('h3').textContent = 'Offensive Security'; cards[5].querySelector('p').textContent = 'Learning responsible reconnaissance, enumeration, and attack techniques to understand how systems can be tested.'; }
  }

  const skills = document.querySelector('#skills .skills-grid');
  if (skills) skills.innerHTML = `
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
      <div class="skill-row"><div class="skill-top"><span class="skill-name">Offensive Security Fundamentals</span><span class="skill-level learning">Learning</span></div><div class="skill-track"><div class="skill-fill" data-fill="25"></div></div></div>
    </div>`;

  const certs = document.querySelector('#certifications .cert-grid');
  if (certs) certs.innerHTML = `
    <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">Introduction to Cybersecurity</h3><div class="cert-issuer">Cisco</div><div class="cert-date">Self-study · Completed</div></div>
    <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">CCNA1</h3><div class="cert-issuer">Cisco Networking Academy / University</div><div class="cert-date">Year 1 · Term 1</div></div>
    <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">In Progress</span></div><h3 class="cert-name">CCNA</h3><div class="cert-issuer">Cisco</div><div class="cert-date">CCNA1 completed · CCNA2 planned Year 2 Term 2 · CCNA3 planned Year 2 Term 3</div></div>
    <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">Self-study</span></div><h3 class="cert-name">CompTIA Security+</h3><div class="cert-issuer">CompTIA</div><div class="cert-date">Studying with Professor Messer · SY0-701</div></div>
    <div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge planned">Planned</span></div><h3 class="cert-name">Certified Ethical Hacker (CEH)</h3><div class="cert-issuer">EC-Council</div><div class="cert-date">Not started</div></div>`;

  const exp = document.querySelector('#experience .timeline');
  if (exp) exp.innerHTML = '<div class="tl-item"><div class="tl-dot"></div><h3>No formal experience yet</h3><p>I am currently seeking my first IT Support or Cybersecurity internship. I am building practical experience through university study, self-learning, labs, and personal projects.</p></div>';

  const projects = document.querySelector('#projects .project-list');
  if (projects) projects.innerHTML = `
    <div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / Cybersecurity</div><h3>CyberMate</h3><div class="project-status">In progress</div></div><div class="project-body"><dl><dt>What it is</dt><dd>An AI-powered cybersecurity mentor platform designed to help learners study cybersecurity and get practical guidance.</dd><dt>My role</dt><dd>Personal project developed through AI-assisted / vibe coding while I design the product and learn the underlying technologies.</dd></dl></div></div>
    <div class="project panel reveal in"><div class="project-head"><div class="project-tag">C / Game Development</div><h3>2D C Game</h3><div class="project-status">Completed</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A completed 2D game project built with C and the TIGR GUI library.</dd><dt>My role</dt><dd>University/personal programming project. The project is published on GitHub.</dd></dl></div></div>
    <div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / CTF</div><h3>CTF Assistant</h3><div class="project-status">Completed · In use</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A personal AI assistant for CTF learning and problem-solving.</dd><dt>My role</dt><dd>Built with AI-assisted / vibe coding. I use it regularly as a personal learning tool.</dd></dl></div></div>
    <div class="project panel reveal in"><div class="project-head"><div class="project-tag">Future Lab</div><h3>Home Lab / SIEM</h3><div class="project-status">Planned</div></div><div class="project-body"><dl><dt>Status</dt><dd>Not built yet. Planned for future hands-on Blue Team and security monitoring practice.</dd></dl></div></div>`;

  const lab = document.querySelector('#lab .lab-grid');
  if (lab) lab.innerHTML = `
    <div class="lab-diagram panel reveal in"><div class="host-box"><b>Current Environment</b>Kali Linux + Windows 11 dual-boot</div><div class="vm-stack"><div class="vm attacker"><b>Kali Linux</b><span>Daily-use security learning environment</span></div><div class="vm defender"><b>Home Lab</b><span>Planned — not built yet</span></div><div class="vm endpoint"><b>SIEM</b><span>Planned — not deployed yet</span></div></div></div>
    <div class="lab-activities reveal in"><h4>Actual Practice</h4><div class="activity-row"><span class="activity-idx">01</span><span>Kali Linux used regularly for cybersecurity learning</span></div><div class="activity-row"><span class="activity-idx">02</span><span>Wireshark — currently learning</span></div><div class="activity-row"><span class="activity-idx">03</span><span>Nmap — currently learning</span></div><div class="activity-row"><span class="activity-idx">04</span><span>Aircrack-ng — completed one authorized Wi-Fi password-cracking experiment</span></div><div class="activity-row"><span class="activity-idx">05</span><span>Vulnerability scanning — learning through Nmap</span></div><div class="activity-row"><span class="activity-idx">06</span><span>TryHackMe — currently learning through course labs</span></div></div>`;

  const ctf = document.querySelector('#ctf .ctf-grid');
  if (ctf) ctf.innerHTML = `
    <div class="ctf-card panel reveal in"><div class="ctf-name">TryHackMe</div><div class="ctf-stat">Course labs</div><p>Currently learning through guided cybersecurity labs.</p><a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener">Profile →</a></div>
    <div class="ctf-card panel reveal in"><div class="ctf-name">Hack The Box</div><div class="ctf-stat">4–5 labs</div><p>Past labs were completed with AI assistance; these are not presented as independent achievements.</p><a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener">Profile →</a></div>
    <div class="ctf-card panel reveal in"><div class="ctf-name">PicoCTF</div><div class="ctf-stat">None yet</div><p>Not started.</p></div>`;

  const writeups = document.querySelector('#writeups .writeup-list');
  if (writeups) writeups.innerHTML = '<div class="writeup panel reveal in"><div class="writeup-date">Hands-on learning</div><h3>Wi-Fi password-cracking experiment</h3><p>Documenting an authorized Aircrack-ng learning experiment and what I learned from it.</p></div><div class="writeup panel reveal in"><div class="writeup-date">CTF practice</div><h3>Hack The Box lab notes</h3><p>Personal notes from previous labs completed with AI assistance.</p></div>';

  const achievements = document.querySelector('#achievements .timeline');
  if (achievements) achievements.innerHTML = `
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed Year 1</h3><p>Completed Year 1 of the Telecommunications and Networking program, specialized in Cyber Security, at CADT.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed CCNA1</h3><p>Completed CCNA1 during Year 1 Term 1 at university.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed Cisco Introduction to Cybersecurity</h3><p>Finished the course through self-study.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Completed 2D C Game Project</h3><p>Finished a hands-on C programming project and published it on GitHub.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Started CyberMate</h3><p>Began building an AI-powered cybersecurity mentor as an ongoing personal project using AI-assisted development.</p></div>
    <div class="tl-item"><div class="tl-dot"></div><h3>Started hands-on security learning</h3><p>Using Kali Linux regularly while learning Wireshark, Nmap, Aircrack-ng, and TryHackMe fundamentals.</p></div>`;

  const contact = document.querySelector('#contact .contact-panel');
  if (contact) contact.innerHTML = `
    <div class="eyebrow">12 // Contact</div>
    <h2>Open to IT Support &amp; Cybersecurity internships.</h2>
    <p>If you're looking for a curious cybersecurity student who is serious about learning, building, and growing, I'd be happy to connect.</p>
    <div class="contact-links">
      <a href="mailto:lengbo777working@gmail.com">lengbo777working@gmail.com</a>
      <a href="https://github.com/Bunlong-Cyber" target="_blank" rel="noopener">GitHub</a>
      <a href="https://www.linkedin.com/in/bo-bunlong-752269333" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener">TryHackMe</a>
      <a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener">Hack The Box</a>
    </div>`;
}

function initInteractions() {
  const consoleEl = document.querySelector('.console');
  if (consoleEl && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) { bootSequence(); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(consoleEl);
  } else bootSequence();

  document.querySelectorAll('.reveal').forEach(el => {
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    observer.observe(el);
  });

  document.querySelectorAll('[data-fill]').forEach(el => {
    el.style.width = '0%';
    el.style.transition = 'width 1s cubic-bezier(.2,.8,.2,1)';
    if (!('IntersectionObserver' in window)) { el.style.width = el.dataset.fill + '%'; return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { requestAnimationFrame(() => e.target.style.width = e.target.dataset.fill + '%'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
  });

  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (link) { links.forEach(a => a.style.color = ''); link.style.color = 'var(--green)'; }
    }), { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
  }
}

setContent();
initInteractions();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
