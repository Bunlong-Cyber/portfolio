// Portfolio content corrections + interactions

function setContent() {
  // Keep the original visual design; correct only text/content and small UI hierarchy.
  const title = document.querySelector('title');
  if (title) title.textContent = 'Bo Bunlong — Cybersecurity Student | Purple Team Learner';

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', 'Portfolio of Bo Bunlong, a Cybersecurity student at CADT studying Telecommunications and Networking, with a long-term goal of Purple Team operations.');

  const status = document.querySelector('.nav-status');
  if (status) status.remove();
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.style.marginLeft = '24px';

  const roleLine = document.querySelector('.role-line');
  if (roleLine) roleLine.innerHTML = '<span class="role">Cybersecurity Student</span><span class="sep">/</span><span class="role p">Purple Team Learner</span>';

  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.innerHTML = 'Bo Bunlong<span class="cursor"></span><br><span class="accent">learning systems,</span><br>one challenge at a time.';

  const lede = document.querySelector('.hero .lede');
  if (lede) lede.textContent = 'Hi, I\'m Bo Bunlong — a Cybersecurity student at CADT. I\'m interested in both offensive and defensive security, with a long-term goal of working in Purple Team operations. I learn by doing: hands-on labs, security projects, networking practice, and continuous technical exploration.';

  const meta = document.querySelector('.hero-meta');
  if (meta) meta.innerHTML = '<div><b>Institution</b> — CADT</div><div><b>Stage</b> — Year 1 complete → Year 2</div><div><b>Track</b> — Telecommunications &amp; Networking · Cyber Security</div>';

  const consoleTitle = document.querySelector('.console-title');
  if (consoleTitle) consoleTitle.textContent = 'cyber-terminal — bash';

  const aboutCopy = document.querySelector('.about-copy');
  if (aboutCopy) {
    const paragraphs = aboutCopy.querySelectorAll(':scope > p');
    if (paragraphs[0]) paragraphs[0].innerHTML = 'I\'m a student at <strong>CADT (Cambodia Academy of Digital Technology)</strong>, completing Year 1 of my <strong>Bachelor of Telecommunications and Networking, specialized in Cyber Security</strong>, and preparing to start <strong>Year 2</strong>.';
    if (paragraphs[1]) paragraphs[1].innerHTML = 'I\'m interested in both offensive and defensive cybersecurity. I enjoy understanding how networks and systems work, how weaknesses can be found, and how security can be improved from both sides.';
    if (paragraphs[2]) paragraphs[2].innerHTML = 'Most of my learning happens through university study, self-learning, labs, and personal projects — turning theory into <strong>practical technical problem-solving</strong> while building toward a future Purple Team role.';
  }

  const idCard = document.querySelector('.id-card');
  if (idCard) idCard.innerHTML = '<div class="id-row"><span class="id-key">Name</span><span class="id-val">Bo Bunlong</span></div><div class="id-row"><span class="id-key">Institution</span><span class="id-val">CADT</span></div><div class="id-row"><span class="id-key">Program</span><span class="id-val">Telecommunications &amp; Networking</span></div><div class="id-row"><span class="id-key">Specialization</span><span class="id-val">Cyber Security</span></div><div class="id-row"><span class="id-key">Standing</span><span class="id-val">Year 1 Complete → Year 2</span></div><div class="id-row"><span class="id-key">Graduation</span><span class="id-val">2029</span></div><div class="id-row"><span class="id-key">Goal</span><span class="id-val green">PURPLE TEAM</span></div>';

  const goals = document.querySelector('#goals .goal-list');
  if (goals) goals.innerHTML = '<div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Gain IT Support / Cybersecurity internship experience</b><span>Build real-world technical experience and learn how security and IT teams operate.</span></div></div><div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Strengthen networking foundations</b><span>Continue through CCNA2 and CCNA3 while building practical networking skills.</span></div></div><div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Build offensive security foundations</b><span>Learn ethical security testing and understand how attackers identify weaknesses.</span></div></div><div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Build defensive security foundations</b><span>Learn monitoring, incident response, threat hunting, and practical security controls.</span></div></div><div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Develop practical security projects</b><span>Turn learning into hands-on projects, labs, CTF practice, and documentation.</span></div></div><div class="goal-item"><div class="goal-check">✓</div><div class="goal-text"><b>Grow into a Purple Team professional</b><span>Combine offensive and defensive perspectives to improve security continuously.</span></div></div>';

  const focus = document.querySelector('#interests .card-grid');
  if (focus) focus.innerHTML = `
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 7.2l3.6 8M17 7.2l-3.6 8M7 6h10" stroke-linecap="round"/></svg><h3>Network Security</h3><p>Understanding networks, protocols, traffic, and how connected systems can be secured and tested.</p></div>
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.8-3.8" stroke-linecap="round"/></svg><h3>Threat Hunting</h3><p>Learning to investigate suspicious activity and identify signs of compromise.</p></div>
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9.5 12l1.8 1.8L15 10" stroke-linecap="round" stroke-linejoin="round"/></svg><h3>Incident Response</h3><p>Building foundations for understanding, investigating, and responding to security incidents.</p></div>
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="10" width="16" height="9" rx="1.5"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg><h3>Blue Team Defense</h3><p>Learning defensive security concepts, monitoring, and practical security controls.</p></div>
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v20M4 7l8-4 8 4M4 17l8 4 8-4" stroke-linecap="round" stroke-linejoin="round"/></svg><h3>Purple Team Operations</h3><p>Combining offensive and defensive knowledge to improve security.</p></div>
    <div class="interest-card panel reveal in"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 4l6 6-10 10H4v-6L14 4z"/><path d="M13 5l6 6M7 17l-2-2" stroke-linecap="round"/></svg><h3>Offensive Security</h3><p>Learning ethical security testing and how attackers identify weaknesses.</p></div>`;

  const certs = document.querySelector('#certifications .cert-grid');
  if (certs) certs.innerHTML = '<div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">Introduction to Cybersecurity</h3><div class="cert-issuer">Cisco</div><div class="cert-date">Self-study · Completed</div></div><div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge done">Completed</span></div><h3 class="cert-name">CCNA1</h3><div class="cert-issuer">Cisco Networking Academy / University</div><div class="cert-date">Year 1 · Term 1</div></div><div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">In Progress</span></div><h3 class="cert-name">CCNA</h3><div class="cert-issuer">Cisco</div><div class="cert-date">CCNA1 completed · CCNA2 Year 2 Term 2 · CCNA3 Year 2 Term 3</div></div><div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge progress">Self-study</span></div><h3 class="cert-name">CompTIA Security+</h3><div class="cert-issuer">CompTIA</div><div class="cert-date">Studying with Professor Messer · SY0-701</div></div><div class="cert-card panel reveal in"><div class="cert-top"><span class="cert-badge planned">Planned</span></div><h3 class="cert-name">Certified Ethical Hacker (CEH)</h3><div class="cert-issuer">EC-Council</div><div class="cert-date">Not started</div></div>';

  const exp = document.querySelector('#experience .timeline');
  if (exp) exp.innerHTML = '<div class="tl-item"><div class="tl-dot"></div><h3>Seeking first internship</h3><p>I currently have no formal IT or cybersecurity work experience. I am seeking an IT Support or Cybersecurity internship to gain my first professional experience.</p></div>';

  const projects = document.querySelector('#projects .project-list');
  if (projects) projects.innerHTML = '<div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / Cybersecurity</div><h3>CyberMate</h3><div class="project-status">In progress</div></div><div class="project-body"><dl><dt>What it is</dt><dd>An AI-powered cybersecurity mentor platform designed to help learners study cybersecurity and get practical guidance.</dd><dt>My role</dt><dd>Personal project developed through AI-assisted / vibe coding while I design the product and learn the underlying technologies.</dd></dl></div></div><div class="project panel reveal in"><div class="project-head"><div class="project-tag">C / Game Development</div><h3>2D C Game</h3><div class="project-status">Completed</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A completed 2D game project built with C and the TIGR GUI library.</dd><dt>My role</dt><dd>Completed hands-on C programming project published on GitHub.</dd></dl></div></div><div class="project panel reveal in"><div class="project-head"><div class="project-tag">AI / CTF</div><h3>CTF Assistant</h3><div class="project-status">Completed · In use</div></div><div class="project-body"><dl><dt>What it is</dt><dd>A personal AI assistant for CTF learning and problem-solving.</dd><dt>My role</dt><dd>Built through AI-assisted / vibe coding. I use it regularly as a personal learning tool.</dd></dl></div></div><div class="project panel reveal in"><div class="project-head"><div class="project-tag">Future Lab</div><h3>Home Lab / SIEM</h3><div class="project-status">Planned</div></div><div class="project-body"><dl><dt>Status</dt><dd>Not built yet. Planned for future hands-on security practice.</dd></dl></div></div>';

  const lab = document.querySelector('#lab .lab-grid');
  if (lab) lab.innerHTML = '<div class="lab-diagram panel reveal in"><div class="host-box"><b>Current Environment</b>Kali Linux + Windows 11 dual-boot</div><div class="vm-stack"><div class="vm attacker"><b>Kali Linux</b><span>Daily-use security learning environment</span></div><div class="vm defender"><b>Home Lab</b><span>Planned — not built yet</span></div><div class="vm endpoint"><b>SIEM</b><span>Planned — not deployed yet</span></div></div></div><div class="lab-activities reveal in"><h4>Actual Practice</h4><div class="activity-row"><span class="activity-idx">01</span><span>Kali Linux used regularly for cybersecurity learning</span></div><div class="activity-row"><span class="activity-idx">02</span><span>Wireshark — currently learning</span></div><div class="activity-row"><span class="activity-idx">03</span><span>Nmap — currently learning</span></div><div class="activity-row"><span class="activity-idx">04</span><span>Aircrack-ng — completed one authorized Wi-Fi password-cracking experiment</span></div><div class="activity-row"><span class="activity-idx">05</span><span>Vulnerability scanning — learning through Nmap</span></div><div class="activity-row"><span class="activity-idx">06</span><span>TryHackMe — currently learning through course labs</span></div></div>';

  const ctf = document.querySelector('#ctf .ctf-grid');
  if (ctf) ctf.innerHTML = '<div class="ctf-card panel reveal in"><div class="ctf-name">TryHackMe</div><div class="ctf-stat ctf-meta">Course labs</div><p>Currently learning through guided cybersecurity labs.</p><a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener">Profile →</a></div><div class="ctf-card panel reveal in"><div class="ctf-name">Hack The Box</div><div class="ctf-stat ctf-meta">4–5 labs</div><p>Past labs were completed with AI assistance; these are not presented as independent achievements.</p><a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener">Profile →</a></div><div class="ctf-card panel reveal in"><div class="ctf-name">PicoCTF</div><div class="ctf-stat ctf-meta">None yet</div><p>Not started.</p></div>';

  const writeups = document.querySelector('#writeups .writeup-list');
  if (writeups) writeups.innerHTML = '<div class="writeup panel reveal in"><div class="writeup-date">Hands-on learning</div><h3>Wi-Fi password-cracking experiment</h3><p>Notes from an authorized Aircrack-ng learning experiment and what I learned from it.</p></div><div class="writeup panel reveal in"><div class="writeup-date">CTF practice</div><h3>Hack The Box lab notes</h3><p>Personal notes from previous labs completed with AI assistance.</p></div>';

  const achievements = document.querySelector('#achievements .timeline');
  if (achievements) achievements.innerHTML = '<div class="tl-item"><div class="tl-dot"></div><h3>Completed Year 1</h3><p>Completed Year 1 of the Telecommunications and Networking program, specialized in Cyber Security, at CADT.</p></div><div class="tl-item"><div class="tl-dot"></div><h3>Completed CCNA1</h3><p>Completed CCNA1 during Year 1 Term 1 at university.</p></div><div class="tl-item"><div class="tl-dot"></div><h3>Completed Cisco Introduction to Cybersecurity</h3><p>Finished the course through self-study.</p></div><div class="tl-item"><div class="tl-dot"></div><h3>Completed 2D C Game Project</h3><p>Finished a hands-on C programming project and published it on GitHub.</p></div><div class="tl-item"><div class="tl-dot"></div><h3>Started CyberMate</h3><p>Began building an AI-powered cybersecurity mentor as an ongoing personal project using AI-assisted development.</p></div><div class="tl-item"><div class="tl-dot"></div><h3>Started hands-on security learning</h3><p>Using Kali Linux regularly while learning Wireshark, Nmap, Aircrack-ng, and TryHackMe fundamentals.</p></div>';

  const contact = document.querySelector('#contact .contact-panel');
  if (contact) contact.innerHTML = '<div class="eyebrow">12 // Contact</div><h2>Open to IT Support &amp; Cybersecurity internships.</h2><p>If you\'re looking for a curious cybersecurity student who is serious about learning, building, and growing, I\'d be happy to connect.</p><div class="contact-links"><a href="mailto:lengbo777working@gmail.com">lengbo777working@gmail.com</a><a href="https://github.com/Bunlong-Cyber" target="_blank" rel="noopener">GitHub</a><a href="https://www.linkedin.com/in/bo-bunlong-752269333" target="_blank" rel="noopener">LinkedIn</a><a href="https://tryhackme.com/p/lengbo777" target="_blank" rel="noopener">TryHackMe</a><a href="https://profile.hackthebox.com/profile/019f217f-66cf-700c-90e4-c303f4262e74" target="_blank" rel="noopener">Hack The Box</a></div>';

  const style = document.createElement('style');
  style.textContent = '.ctf-card .ctf-meta{display:block!important;width:max-content!important;font-family:var(--mono)!important;font-size:10.5px!important;line-height:1.3!important;color:var(--text-low)!important;font-weight:400!important;margin:2px 0 14px!important;padding:0!important}.ctf-card .ctf-meta::before,.ctf-card .ctf-meta::after{display:none!important}.nav-links{margin-left:24px!important}.interest-card .icon{width:32px;height:32px}';
  document.head.appendChild(style);
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
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
    }), { threshold: 0.12 });
    observer.observe(el);
  });

  document.querySelectorAll('[data-fill]').forEach(el => {
    el.style.width = '0%';
    el.style.transition = 'width 1s cubic-bezier(.2,.8,.2,1)';
    if (!('IntersectionObserver' in window)) { el.style.width = el.dataset.fill + '%'; return; }
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { requestAnimationFrame(() => e.target.style.width = e.target.dataset.fill + '%'); observer.unobserve(e.target); }
    }), { threshold: 0.3 });
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
  const bootLines = [['$ whoami','fade'],['bo.bunlong // year_01_complete → year_02','ok'],['$ cat profile.txt','fade'],['institution : Cambodia Academy of Digital Technology (CADT)','info'],['program     : Telecommunications & Networking · Cyber Security','info'],['focus       : IT Support · Cybersecurity · Purple Team','info'],['$ status --check','fade'],['[OK] curiosity........... online','ok'],['[OK] hands_on_learning... active','ok'],['[..] expertise........... in_progress','warn']];
  const cursor = consoleBody.querySelector('.type-cursor');
  const typeLine = (el,text,speed=10)=>new Promise(resolve=>{let i=0;const span=document.createElement('span');el.appendChild(span);const interval=setInterval(()=>{span.textContent+=text[i++];if(i>=text.length){clearInterval(interval);resolve();}},speed);});
  (async()=>{for(const [text,cls] of bootLines){const row=document.createElement('div');row.className='line '+cls;if(cursor)consoleBody.insertBefore(row,cursor);else consoleBody.appendChild(row);await typeLine(row,text);await new Promise(r=>setTimeout(r,80));}})();
}

setContent();
initInteractions();
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
