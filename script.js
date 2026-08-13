// ============================================================================
// Portfolio behavior + content corrections
// ============================================================================

function setContent() {
  const focus = document.querySelector('#interests .interest-grid');
  if (focus) focus.innerHTML = `
    <div class="interest-card panel reveal in"><div class="interest-icon">🌐</div><h3>Network Security</h3><p>Learning how networks, protocols, traffic, and connected systems can be secured and tested.</p></div>
    <div class="interest-card panel reveal in"><div class="interest-icon">🛡️</div><h3>Threat Hunting</h3><p>Learning to investigate suspicious activity and identify signs of compromise.</p></div>
    <div class="interest-card panel reveal in"><div class="interest-icon">🚨</div><h3>Incident Response</h3><p>Building foundations for understanding, investigating, and responding to security incidents.</p></div>
    <div class="interest-card panel reveal in"><div class="interest-icon">🔵</div><h3>Blue Team Defense</h3><p>Learning defensive security concepts, monitoring, and practical security controls.</p></div>
    <div class="interest-card panel reveal in"><div class="interest-icon">🟣</div><h3>Purple Team Operations</h3><p>Long-term goal: combining offensive and defensive knowledge to improve security.</p></div>
    <div class="interest-card panel reveal in"><div class="interest-icon">⚔️</div><h3>Offensive Security</h3><p>Learning ethical security testing and how attackers identify weaknesses.</p></div>`;

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
    <div class="project panel reveal in"><div class="project-head"><div class="project-tag">Future Lab</div><h3>Home Lab / SIEM</h3><div class="project-status">Planned</div></div><div class="project-body"><dl><dt>Status</dt><dd>Not built yet. Planned for future hands-on security practice.</dd></dl></div></div>`;

  const lab = document.querySelector('#lab .lab-grid');
  if (lab) lab.innerHTML = `
    <div class="lab-diagram panel reveal in"><div class="host-box"><b>Current Environment</b>Kali Linux + Windows 11 dual-boot</div><div class="vm-stack"><div class="vm attacker"><b>Kali Linux</b><span>Daily-use security learning environment</span></div><div class="vm defender"><b>Home Lab</b><span>Planned — not built yet</span></div><div class="vm endpoint"><b>SIEM</b><span>Planned — not deployed yet</span></div></div></div>
    <div class="lab-activities reveal in"><h4>Actual Practice</h4><div class="activity-row"><span class="activity-idx">01</span><span>Kali Linux used regularly for cybersecurity learning</span></div><div class="activity-row"><span class="activity-idx">02</span><span>Wireshark — currently learning</span></div><div class="activity-row"><span class="activity-idx">03</span><span>Nmap — currently learning</span></div><div class="activity-row"><span class="activity-idx">04</span><span>Aircrack-ng — completed one authorized Wi-Fi password-cracking experiment</span></div><div class="activity-row"><span class="activity-idx">05</span><span>Vulnerability scanning — learning through Nmap</span></div><div class="activity-row"><span class="activity-idx">06</span><span>TryHackMe — currently learning through course labs</span></div></div>`;

  const ctf = document.querySelector('#ctf .ctf-grid');
  if (ctf) ctf.innerHTML = `
    <div class="ctf-card panel reveal in"><div class="ctf-name">TryHackMe</div><div class="ctf-stat ctf-meta">Course labs</div><p>Currently learning through guided cybersecurity labs.</p><a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener">Profile →</a></div>
    <div class="ctf-card panel reveal in"><div class="ctf-name">Hack The Box</div><div class="ctf-stat ctf-meta">4–5 labs</div><p>Past labs were completed with AI assistance; these are not presented as independent achievements.</p><a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener">Profile →</a></div>
    <div class="ctf-card panel reveal in"><div class="ctf-name">PicoCTF</div><div class="ctf-stat ctf-meta">None yet</div><p>Not started.</p></div>`;

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

function bootSequence() {
  const consoleBody = document.getElementById('consoleBody');
  if (!consoleBody || consoleBody.dataset.booted) return;
  consoleBody.dataset.booted = 'true';
  const bootLines = [
    ['$ whoami', 'fade'],
    ['bo.bunlong // year_01_complete → year_02', 'ok'],
    ['$ cat profile.txt', 'fade'],
    ['institution : Cambodia Academy of Digital Technology (CADT)', 'info'],
    ['program     : Telecommunications & Networking · Cyber Security', 'info'],
    ['focus       : IT Support · Cybersecurity · Purple Team', 'info'],
    ['$ status --check', 'fade'],
    ['[OK] curiosity........... online', 'ok'],
    ['[OK] hands_on_learning... active', 'ok'],
    ['[..] expertise........... in_progress', 'warn']
  ];
  const cursor = consoleBody.querySelector('.type-cursor');
  const typeLine = (el, text, speed = 10) => new Promise(resolve => {
    let i = 0; const span = document.createElement('span'); el.appendChild(span);
    const interval = setInterval(() => { span.textContent += text[i++]; if (i >= text.length) { clearInterval(interval); resolve(); } }, speed);
  });
  (async () => {
    for (const [text, cls] of bootLines) {
      const row = document.createElement('div'); row.className = 'line ' + cls;
      if (cursor) consoleBody.insertBefore(row, cursor); else consoleBody.appendChild(row);
      await typeLine(row, text); await new Promise(r => setTimeout(r, 80));
    }
  })();
}

setContent();
initInteractions();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
