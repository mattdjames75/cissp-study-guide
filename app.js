const domains = [
  {
    id: 1,
    title: "Security and Risk Management",
    weight: 16,
    color: "#1f7a5c",
    pages: "5-76",
    summary:
      "Governance, ethics, compliance, risk management, awareness, personnel security, risk frameworks, and assessment methods.",
    objectives: [
      "Think like a risk advisor: translate threats into business impact and defensible decisions.",
      "Connect governance artifacts to real accountability: policies, standards, baselines, procedures, and guidelines.",
      "Distinguish due care from due diligence and apply legal, regulatory, privacy, and ethical obligations.",
      "Use qualitative and quantitative risk analysis to select responses: avoid, transfer, mitigate, accept, or escalate."
    ],
    recognize: [
      "Management owns risk; security professionals advise, implement, measure, and report.",
      "Security awareness changes behavior; training builds skills; education builds deeper competence.",
      "Risk frameworks structure decision-making, but they do not remove the need for business context.",
      "Threat modeling and control assessments make risk visible before incidents prove it."
    ],
    topics: [
      ["Security Management Concepts", 5],
      ["Security Governance and Compliance", 21],
      ["Risk Management", 38],
      ["Risk Frameworks", 49],
      ["Risk Assessment", 62]
    ],
    concepts: [
      ["CIA Triad", "Confidentiality limits disclosure, integrity protects correctness, and availability keeps services usable."],
      ["Risk Formula", "Risk is commonly reasoned about as threat times vulnerability times impact, reduced by effective controls."],
      ["Policy Stack", "Policies state intent, standards define mandatory requirements, procedures describe exact steps."]
    ],
    cards: [
      ["What is the CISSP management mindset?", "Choose answers that protect people, meet business objectives, and reduce risk before reaching for technical fixes."],
      ["Due care vs. due diligence?", "Due care is doing what a reasonable organization should do. Due diligence is the investigation proving what care is needed."],
      ["What are the common risk responses?", "Avoid, transfer, mitigate, accept, and escalate."],
      ["What is the purpose of security governance?", "To align security direction, accountability, resources, and measurement with organizational objectives."]
    ],
    quiz: [
      {
        q: "A control is expensive but reduces a low-impact risk. What should guide the decision?",
        options: ["Business risk appetite and cost-benefit analysis", "The strongest available technology", "The newest regulatory framework", "The vendor's recommended bundle"],
        answer: 0,
        why: "CISSP questions usually favor business-aligned risk decisions over tool-first decisions."
      },
      {
        q: "Which document usually contains mandatory configuration requirements?",
        options: ["Standard", "Guideline", "Procedure", "Awareness poster"],
        answer: 0,
        why: "Standards are mandatory requirements; guidelines are recommended practices."
      }
    ],
    visual: "risk"
  },
  {
    id: 2,
    title: "Asset Security",
    weight: 10,
    color: "#2865ad",
    pages: "77-122",
    summary:
      "Classification, ownership, handling, retention, privacy, data lifecycle, system lifecycle, and protection of information assets.",
    objectives: [
      "Classify data and assets so protection levels match sensitivity and business value.",
      "Assign roles such as owner, custodian, controller, processor, and user.",
      "Protect data through its lifecycle: create, store, use, share, archive, and destroy.",
      "Apply handling, labeling, storage, retention, and destruction rules consistently."
    ],
    recognize: [
      "Owners decide classification and acceptable use; custodians implement safeguards.",
      "Privacy controls follow data subject rights, purpose limitation, and minimization.",
      "Data remanence matters when media are reused, transferred, or destroyed.",
      "The right control depends on state: data at rest, in transit, or in use."
    ],
    topics: [
      ["Asset Security", 77],
      ["Classifying Data And Assets", 79],
      ["Information and Asset Handling Requirements", 83],
      ["Data Roles And Responsibilities", 88],
      ["Managing The Data Lifecycle", 91],
      ["The Information System Lifecycle", 94],
      ["Data Security Controls", 100]
    ],
    concepts: [
      ["Classification", "Labels drive handling rules, access decisions, storage requirements, and destruction methods."],
      ["Lifecycle", "Security follows data from collection through final disposal."],
      ["Ownership", "Accountability starts with owners who define value, sensitivity, and acceptable risk."]
    ],
    cards: [
      ["Who determines data classification?", "The data owner."],
      ["What is data remanence?", "Residual data left after deletion or media clearing that may still be recoverable."],
      ["Data controller vs. processor?", "A controller decides why and how personal data is processed; a processor acts on the controller's instructions."],
      ["Why classify assets?", "To apply proportional controls and avoid overprotecting low-value assets or underprotecting sensitive assets."]
    ],
    quiz: [
      {
        q: "Who is typically accountable for deciding how sensitive a dataset is?",
        options: ["Data owner", "System administrator", "Security analyst", "External auditor"],
        answer: 0,
        why: "The owner classifies data and defines protection requirements."
      },
      {
        q: "Encryption of a database primarily protects data in which state?",
        options: ["At rest", "In use", "Destroyed", "Anonymized"],
        answer: 0,
        why: "Database encryption most directly protects stored data."
      }
    ],
    visual: "lifecycle"
  },
  {
    id: 3,
    title: "Security Architecture and Engineering",
    weight: 13,
    color: "#7159a6",
    pages: "123-250",
    summary:
      "Secure design principles, models, system architecture, cloud and virtualization, cryptography, attacks, and physical security.",
    objectives: [
      "Apply least privilege, defense in depth, secure defaults, fail-safe design, and separation of duties.",
      "Understand security models and how architecture enforces confidentiality, integrity, and availability.",
      "Select cryptographic controls based on the problem: confidentiality, integrity, authentication, nonrepudiation, or key exchange.",
      "Treat physical security as part of system design, not a facilities afterthought."
    ],
    recognize: [
      "Architecture reduces classes of failure before operations teams monitor them.",
      "Cryptography fails through weak implementation, poor key management, and bad use cases more often than broken algorithms.",
      "Cloud shifts some responsibilities to providers, but accountability remains shared.",
      "Physical controls follow deterrence, detection, delay, response, and recovery."
    ],
    topics: [
      ["Secure Design Principles", 123],
      ["Secure Architecture Design", 143],
      ["Virtualization and Cloud Computing", 174],
      ["Cryptographic Solutions", 192],
      ["Cryptanalytic Attacks", 215],
      ["Physical Security", 226]
    ],
    concepts: [
      ["Defense in Depth", "Layer independent controls so one failure does not become a full compromise."],
      ["Crypto Choice", "Hash for integrity, symmetric crypto for speed, asymmetric crypto for exchange and signatures."],
      ["Shared Responsibility", "Cloud providers secure the cloud; customers secure what they put in it."]
    ],
    cards: [
      ["What is fail-safe design?", "A system should move to a secure state when it fails."],
      ["Symmetric vs. asymmetric encryption?", "Symmetric uses one shared key and is fast. Asymmetric uses a public/private key pair and supports exchange and signatures."],
      ["What does hashing provide?", "Integrity verification, not confidentiality."],
      ["What is defense in depth?", "Multiple independent layers of control that reduce reliance on any single safeguard."]
    ],
    quiz: [
      {
        q: "Which mechanism best verifies a file has not changed?",
        options: ["Hash", "Symmetric encryption", "Load balancer", "Firewall rule"],
        answer: 0,
        why: "A hash detects changes by comparing message digests."
      },
      {
        q: "A door badge plus a guard plus CCTV is an example of what principle?",
        options: ["Defense in depth", "Single sign-on", "Data minimization", "Risk transfer"],
        answer: 0,
        why: "Multiple independent layers protect the same asset."
      }
    ],
    visual: "architecture"
  },
  {
    id: 4,
    title: "Communication and Network Security",
    weight: 13,
    color: "#c88719",
    pages: "251-356",
    summary:
      "Network components, protocols, architectures, secure design, attacks, secure communications, and wireless networking.",
    objectives: [
      "Segment networks by trust level and business function.",
      "Map controls to protocol layers and communication paths.",
      "Recognize common network attacks and the control patterns that reduce them.",
      "Secure wired, wireless, remote, and cloud-connected communications."
    ],
    recognize: [
      "Segmentation limits blast radius and supports monitoring.",
      "Availability requires redundancy, capacity planning, and resilient routing.",
      "Wireless security depends on strong authentication, encryption, and management-plane hardening.",
      "Secure communication protects confidentiality and integrity while preserving usability."
    ],
    topics: [
      ["Network Components", 251],
      ["Networking Concepts", 263],
      ["Network Architectures", 289],
      ["Secure Network Design", 298],
      ["Network Security and Attacks", 313],
      ["Secure Communications", 335],
      ["Wireless Networking Introduction", 347]
    ],
    concepts: [
      ["Zones", "Separate internet, DMZ, internal, restricted, and management networks by trust."],
      ["Protocol Layers", "Know where controls operate: link, network, transport, session, application."],
      ["Remote Access", "Authenticate strongly, encrypt traffic, and monitor unusual access patterns."]
    ],
    cards: [
      ["What is a DMZ?", "A semi-trusted network segment that exposes public services while isolating internal networks."],
      ["Why segment networks?", "To reduce attack movement, simplify monitoring, and enforce different trust levels."],
      ["What does TLS mainly protect?", "Confidentiality and integrity for data in transit."],
      ["What is network defense in depth?", "Layering controls such as filtering, segmentation, IDS/IPS, secure protocols, and monitoring."]
    ],
    quiz: [
      {
        q: "Where should a public web server usually live?",
        options: ["DMZ", "Domain controller subnet", "Backup vault", "Privileged admin network"],
        answer: 0,
        why: "A DMZ isolates public-facing services from sensitive internal networks."
      },
      {
        q: "Which control most directly limits lateral movement?",
        options: ["Network segmentation", "Longer passwords only", "More storage", "A public certificate"],
        answer: 0,
        why: "Segmentation constrains paths between systems."
      }
    ],
    visual: "network"
  },
  {
    id: 5,
    title: "Identity and Access Management",
    weight: 13,
    color: "#b84d43",
    pages: "357-405",
    summary:
      "Identity lifecycle, authentication mechanisms, federation, access control models, authorization, and accountability.",
    objectives: [
      "Manage identities from proofing and provisioning through review and deprovisioning.",
      "Compare authentication factors and choose stronger mechanisms for higher risk.",
      "Apply access control models such as DAC, MAC, RBAC, ABAC, and rule-based access.",
      "Use logging and review to preserve accountability."
    ],
    recognize: [
      "Identification claims identity; authentication proves it; authorization grants specific access.",
      "MFA is stronger when factors are independent.",
      "Privileged access requires tighter approval, monitoring, and periodic review.",
      "Federation expands trust boundaries and requires careful assurance."
    ],
    topics: [
      ["Identity Management Introduction", 357],
      ["Authentication Mechanisms", 368],
      ["Access and Authorization", 394]
    ],
    concepts: [
      ["AAA", "Authentication, authorization, and accounting build the access decision chain."],
      ["Least Privilege", "Grant only the permissions needed, only for the time needed."],
      ["Lifecycle", "Provision, change, review, and revoke access as roles change."]
    ],
    cards: [
      ["Identification vs. authentication?", "Identification is the identity claim; authentication proves the claim."],
      ["What are authentication factor categories?", "Something you know, have, are, do, or somewhere you are."],
      ["RBAC vs. ABAC?", "RBAC grants by role. ABAC evaluates attributes about users, resources, actions, and environment."],
      ["What is deprovisioning?", "Removing access when it is no longer needed, especially during transfer or termination."]
    ],
    quiz: [
      {
        q: "A user's department, device posture, and location are evaluated before access. Which model fits best?",
        options: ["ABAC", "DAC", "MAC", "Single-factor authentication"],
        answer: 0,
        why: "Attribute-based access control evaluates contextual attributes."
      },
      {
        q: "Which step proves an identity claim?",
        options: ["Authentication", "Identification", "Accounting", "Provisioning"],
        answer: 0,
        why: "Authentication validates the presented identity."
      }
    ],
    visual: "iam"
  },
  {
    id: 6,
    title: "Security Assessment and Testing",
    weight: 12,
    color: "#3f7f95",
    pages: "406-439",
    summary:
      "Assessment strategy, testing methods, audits, vulnerability assessment, penetration testing, reporting, and remediation validation.",
    objectives: [
      "Choose appropriate testing methods based on objective, authorization, scope, and risk.",
      "Differentiate vulnerability scanning, penetration testing, audits, and control assessments.",
      "Validate that controls operate as intended and that findings are remediated.",
      "Communicate results in terms leaders and technical teams can act on."
    ],
    recognize: [
      "Testing without scope and authorization can become an incident.",
      "A vulnerability scan finds likely weaknesses; a penetration test attempts to prove exploitability.",
      "Assessment value depends on remediation tracking, not just finding counts.",
      "Evidence quality matters for audit and compliance conclusions."
    ],
    topics: [
      ["Security Test and Assessment", 406],
      ["Conduct Security Testing", 417]
    ],
    concepts: [
      ["Scope", "Define systems, methods, timing, contacts, and rules of engagement."],
      ["Evidence", "Collect repeatable proof that supports findings and remediation decisions."],
      ["Retest", "Confirm that fixes work and did not create new exposure."]
    ],
    cards: [
      ["Vulnerability scan vs. penetration test?", "A scan identifies potential weaknesses; a penetration test attempts controlled exploitation."],
      ["What are rules of engagement?", "Documented boundaries and procedures for authorized testing."],
      ["Why retest?", "To verify remediation and detect regression."],
      ["What makes a finding useful?", "Clear impact, evidence, affected assets, severity, and actionable remediation."]
    ],
    quiz: [
      {
        q: "A team wants to prove whether a critical weakness is exploitable. What is most appropriate?",
        options: ["Authorized penetration test", "Policy review only", "Awareness training", "Asset inventory"],
        answer: 0,
        why: "Penetration testing attempts to validate exploitability under controlled scope."
      },
      {
        q: "What should happen after remediation?",
        options: ["Retesting", "Deleting all evidence", "Changing the scope retroactively", "Ignoring residual risk"],
        answer: 0,
        why: "Retesting verifies that the fix works."
      }
    ],
    visual: "testing"
  },
  {
    id: 7,
    title: "Security Operations",
    weight: 13,
    color: "#5f6c65",
    pages: "440-540",
    summary:
      "Detective and preventive measures, logging, monitoring, configuration management, incident response, business continuity, and disaster recovery.",
    objectives: [
      "Operate controls that prevent, detect, respond to, and recover from security events.",
      "Use logging and monitoring to support accountability, detection, and investigation.",
      "Manage configurations, changes, backups, and recovery capabilities.",
      "Coordinate incident response and continuity planning before stress arrives."
    ],
    recognize: [
      "Operations turns design intent into repeatable practice.",
      "Logging is useful only when time is synchronized, events are normalized, and alerts are tuned.",
      "Incident response follows preparation, detection, containment, eradication, recovery, and lessons learned.",
      "BCP keeps critical business functions running; DR restores technology services."
    ],
    topics: [
      ["Detective And Preventative Measures", 440],
      ["Logging and Monitoring", 461],
      ["Configuration Management", 487],
      ["Incident Management", 503],
      ["Business Continuity and Disaster Recovery", 520]
    ],
    concepts: [
      ["IR Lifecycle", "Prepare, detect, contain, eradicate, recover, and improve."],
      ["Change Control", "Document, approve, test, implement, and review changes."],
      ["Resilience", "Backups, redundancy, and tested recovery plans keep impact bounded."]
    ],
    cards: [
      ["BCP vs. DR?", "Business continuity sustains business functions; disaster recovery restores technology services."],
      ["Why synchronize time?", "Reliable timestamps support event correlation and investigations."],
      ["What is containment?", "Limiting incident spread while preserving evidence and business priorities."],
      ["What is configuration baseline?", "An approved known-good state used for consistency and drift detection."]
    ],
    quiz: [
      {
        q: "Which plan focuses most on restoring IT systems after a disruption?",
        options: ["Disaster recovery plan", "Code of ethics", "Data classification policy", "Procurement plan"],
        answer: 0,
        why: "DR restores technology services; BCP focuses on business continuity."
      },
      {
        q: "Why are lessons learned important after an incident?",
        options: ["They improve controls and response processes", "They replace evidence collection", "They remove legal obligations", "They eliminate the need for monitoring"],
        answer: 0,
        why: "Post-incident review turns experience into better prevention and response."
      }
    ],
    visual: "operations"
  },
  {
    id: 8,
    title: "Software Development Security",
    weight: 10,
    color: "#2f6f73",
    pages: "541-591",
    summary:
      "Secure SDLC, development methodologies, software controls, application security, testing, supply chain, and deployment considerations.",
    objectives: [
      "Integrate security into requirements, design, implementation, testing, deployment, and maintenance.",
      "Recognize common application weaknesses and their control patterns.",
      "Use code review, static analysis, dynamic testing, dependency checks, and threat modeling.",
      "Manage software supply chain risk through provenance, review, and patch discipline."
    ],
    recognize: [
      "Fixing design flaws early is cheaper than patching production defects.",
      "Input validation, output encoding, authentication, session management, and error handling are recurring themes.",
      "DevSecOps shifts security feedback earlier without removing governance.",
      "Third-party components inherit risk and need inventory, monitoring, and update processes."
    ],
    topics: [
      ["Software Development Security", 541],
      ["Application Security", 566]
    ],
    concepts: [
      ["Secure SDLC", "Security requirements, threat modeling, secure coding, testing, release controls, and maintenance."],
      ["App Controls", "Validate input, encode output, protect sessions, handle errors safely, and log security events."],
      ["Supply Chain", "Know dependencies, verify sources, track versions, and patch quickly."]
    ],
    cards: [
      ["What is threat modeling in software?", "A structured way to identify threats and design mitigations before or during development."],
      ["SAST vs. DAST?", "SAST analyzes code or binaries without running the app. DAST tests a running application."],
      ["Why maintain an SBOM?", "To know what software components exist so vulnerabilities and licensing issues can be tracked."],
      ["What is secure by default?", "A system ships with protective settings enabled without relying on users to harden it first."]
    ],
    quiz: [
      {
        q: "Which activity is best performed during design to find abuse cases early?",
        options: ["Threat modeling", "Production patching only", "Log rotation", "Media sanitization"],
        answer: 0,
        why: "Threat modeling identifies design-level risks before implementation hardens them into the product."
      },
      {
        q: "Which testing type examines source code without executing the application?",
        options: ["SAST", "DAST", "Failover test", "War dialing"],
        answer: 0,
        why: "Static application security testing inspects code or binaries at rest."
      }
    ],
    visual: "sdlc"
  }
];

const storageKey = "cissp-study-progress-v1";
let activeDomainId = 1;
let activeMode = "overview";
let cardIndex = 0;
let quizIndex = 0;
let answered = false;

const state = {
  completed: new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"))
};

const el = {
  nav: document.querySelector("#domainNav"),
  view: document.querySelector("#domainView"),
  search: document.querySelector("#searchInput"),
  complete: document.querySelector("#completeDomain"),
  reset: document.querySelector("#resetProgress"),
  completedCount: document.querySelector("#completedCount"),
  overallProgress: document.querySelector("#overallProgress"),
  activeModeLabel: document.querySelector("#activeModeLabel"),
  wheel: document.querySelector("#domainWheel")
};

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify([...state.completed]));
}

function activeDomain() {
  return domains.find((domain) => domain.id === activeDomainId) || domains[0];
}

function setDomainStyles(domain) {
  document.documentElement.style.setProperty("--domain-color", domain.color);
}

function renderNav(filter = "") {
  const query = filter.trim().toLowerCase();
  el.nav.innerHTML = "";
  domains
    .filter((domain) => {
      const haystack = [domain.title, domain.summary, ...domain.topics.map((topic) => topic[0])].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    })
    .forEach((domain) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = [
        "domain-tab",
        domain.id === activeDomainId ? "is-active" : "",
        state.completed.has(domain.id) ? "is-complete" : ""
      ].join(" ");
      button.style.setProperty("--domain-color", domain.color);
      button.innerHTML = `
        <span class="domain-number">${domain.id}</span>
        <span><strong>${domain.title}</strong><span>${domain.weight}% of exam</span></span>
        <span class="check-dot" aria-hidden="true"></span>
      `;
      button.addEventListener("click", () => {
        activeDomainId = domain.id;
        cardIndex = 0;
        quizIndex = 0;
        answered = false;
        render();
      });
      el.nav.append(button);
    });
}

function render() {
  const domain = activeDomain();
  setDomainStyles(domain);
  renderNav(el.search.value);
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === activeMode);
  });
  el.activeModeLabel.textContent = activeMode[0].toUpperCase() + activeMode.slice(1);
  el.complete.textContent = state.completed.has(domain.id) ? "Completed" : "Mark Complete";
  el.complete.classList.toggle("ghost-button", state.completed.has(domain.id));
  el.complete.classList.toggle("primary-button", !state.completed.has(domain.id));
  renderProgress();
  if (activeMode === "overview") renderOverview(domain);
  if (activeMode === "visuals") renderVisuals(domain);
  if (activeMode === "cards") renderCards(domain);
  if (activeMode === "quiz") renderQuiz(domain);
}

function renderProgress() {
  const complete = state.completed.size;
  const percent = Math.round((complete / domains.length) * 100);
  el.completedCount.textContent = `${complete}/${domains.length}`;
  el.overallProgress.textContent = `${percent}%`;
  drawWheel();
}

function renderOverview(domain) {
  const template = document.querySelector("#overviewTemplate").content.cloneNode(true);
  template.querySelector(".domain-kicker").textContent = `Domain ${domain.id} · pages ${domain.pages}`;
  template.querySelector("h2").textContent = domain.title;
  template.querySelector(".domain-summary").textContent = domain.summary;
  template.querySelector(".weight-card strong").textContent = `${domain.weight}%`;

  fillList(template.querySelector(".objective-list"), domain.objectives);
  fillList(template.querySelector(".recognition-list"), domain.recognize);

  const topicMap = template.querySelector(".topic-map");
  domain.topics.forEach(([topic, page]) => {
    const item = document.createElement("div");
    item.className = "topic-card";
    item.innerHTML = `<span class="page">p.${page}</span><span><strong>${topic}</strong><span>Review this chapter, then connect it to the domain objectives above.</span></span>`;
    topicMap.append(item);
  });

  el.view.replaceChildren(template);
}

function fillList(container, items) {
  items.forEach((text) => {
    const item = document.createElement("div");
    item.className = "pill-item";
    item.textContent = text;
    container.append(item);
  });
}

function renderVisuals(domain) {
  const template = document.querySelector("#visualTemplate").content.cloneNode(true);
  template.querySelector(".visual-stage").innerHTML = diagrams[domain.visual](domain);
  const strip = template.querySelector(".concept-strip");
  domain.concepts.forEach(([title, body]) => {
    const card = document.createElement("div");
    card.className = "concept-card";
    card.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
    strip.append(card);
  });
  el.view.replaceChildren(template);
}

function renderCards(domain) {
  const template = document.querySelector("#cardsTemplate").content.cloneNode(true);
  el.view.replaceChildren(template);
  updateCard(domain);
  document.querySelector(".flashcard").addEventListener("click", flipCard);
  document.querySelector(".flashcard").addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipCard();
    }
  });
  document.querySelector("#prevCard").addEventListener("click", () => {
    cardIndex = (cardIndex - 1 + domain.cards.length) % domain.cards.length;
    updateCard(domain);
  });
  document.querySelector("#nextCard").addEventListener("click", () => {
    cardIndex = (cardIndex + 1) % domain.cards.length;
    updateCard(domain);
  });
}

function flipCard() {
  document.querySelector(".flashcard").classList.toggle("is-flipped");
}

function updateCard(domain) {
  const card = domain.cards[cardIndex];
  const flash = document.querySelector(".flashcard");
  flash.classList.remove("is-flipped");
  document.querySelector(".flash-front").textContent = card[0];
  document.querySelector(".flash-back").textContent = card[1];
  document.querySelector("#cardCounter").textContent = `${cardIndex + 1} of ${domain.cards.length}`;
}

function renderQuiz(domain) {
  const template = document.querySelector("#quizTemplate").content.cloneNode(true);
  el.view.replaceChildren(template);
  updateQuestion(domain);
  document.querySelector("#nextQuestion").addEventListener("click", () => {
    quizIndex = (quizIndex + 1) % domain.quiz.length;
    answered = false;
    updateQuestion(domain);
  });
}

function updateQuestion(domain) {
  const question = domain.quiz[quizIndex];
  document.querySelector(".quiz-question").textContent = question.q;
  document.querySelector(".quiz-feedback").textContent = "";
  const options = document.querySelector(".quiz-options");
  options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;
    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      button.classList.add(index === question.answer ? "is-correct" : "is-wrong");
      [...options.children][question.answer].classList.add("is-correct");
      document.querySelector(".quiz-feedback").textContent = question.why;
    });
    options.append(button);
  });
}

const diagrams = {
  risk: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} risk diagram">
      <rect x="38" y="42" width="824" height="320" rx="8" fill="#ffffff" stroke="#dce3dd"/>
      <text x="66" y="88" class="diagram-label" font-size="28">Risk decision loop</text>
      <g transform="translate(98 138)">
        ${node("Identify", 0, 0, domain.color)}
        ${node("Assess", 180, 0, "#2865ad")}
        ${node("Respond", 360, 0, "#c88719")}
        ${node("Monitor", 540, 0, "#b84d43")}
        <path d="M120 42 H165 M300 42 H345 M480 42 H525" stroke="#5f6c65" stroke-width="4" marker-end="url(#arrow)"/>
        <path d="M605 98 C520 190 180 190 90 98" fill="none" stroke="#5f6c65" stroke-width="4" marker-end="url(#arrow)"/>
      </g>
      ${arrowDef()}
      <text x="66" y="338" class="diagram-muted" font-size="20">Governance defines accountability. Risk assessment informs what the organization should do next.</text>
    </svg>`,
  lifecycle: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} data lifecycle diagram">
      <rect x="42" y="44" width="816" height="322" rx="8" fill="#ffffff" stroke="#dce3dd"/>
      <text x="70" y="90" class="diagram-label" font-size="28">Data lifecycle controls</text>
      ${cycle(["Create", "Store", "Use", "Share", "Archive", "Destroy"], domain.color)}
      <text x="70" y="342" class="diagram-muted" font-size="20">Classify early, handle consistently, retain only as needed, and destroy defensibly.</text>
    </svg>`,
  architecture: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} layered architecture diagram">
      <rect x="64" y="56" width="772" height="68" rx="8" fill="${domain.color}" opacity=".95"/>
      <rect x="100" y="142" width="700" height="68" rx="8" fill="#2865ad" opacity=".92"/>
      <rect x="136" y="228" width="628" height="68" rx="8" fill="#1f7a5c" opacity=".92"/>
      <rect x="172" y="314" width="556" height="68" rx="8" fill="#c88719" opacity=".92"/>
      <text x="450" y="98" text-anchor="middle" fill="#fff" font-weight="800" font-size="24">Secure design principles</text>
      <text x="450" y="184" text-anchor="middle" fill="#fff" font-weight="800" font-size="24">System and cloud architecture</text>
      <text x="450" y="270" text-anchor="middle" fill="#fff" font-weight="800" font-size="24">Cryptographic protections</text>
      <text x="450" y="356" text-anchor="middle" fill="#fff" font-weight="800" font-size="24">Physical security</text>
    </svg>`,
  network: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} network zones diagram">
      <rect x="50" y="70" width="150" height="250" rx="8" fill="#f8fbf8" stroke="#dce3dd"/>
      <rect x="270" y="70" width="150" height="250" rx="8" fill="#fff8e8" stroke="#dce3dd"/>
      <rect x="490" y="70" width="150" height="250" rx="8" fill="#eef5fb" stroke="#dce3dd"/>
      <rect x="710" y="70" width="140" height="250" rx="8" fill="#f7f0ff" stroke="#dce3dd"/>
      ${zone("Internet", 125, 210, "#5f6c65")}
      ${zone("DMZ", 345, 210, domain.color)}
      ${zone("Internal", 565, 210, "#1f7a5c")}
      ${zone("Restricted", 780, 210, "#b84d43")}
      <path d="M202 195 H266 M422 195 H486 M642 195 H706" stroke="#17201b" stroke-width="4" marker-end="url(#arrow)"/>
      ${arrowDef()}
      <text x="50" y="370" class="diagram-muted" font-size="20">Move from lower to higher trust through explicit controls, inspection, and logging.</text>
    </svg>`,
  iam: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} IAM flow diagram">
      <rect x="48" y="82" width="804" height="236" rx="8" fill="#ffffff" stroke="#dce3dd"/>
      ${node("Identify", 80, 164, "#5f6c65")}
      ${node("Authenticate", 260, 164, domain.color)}
      ${node("Authorize", 470, 164, "#2865ad")}
      ${node("Account", 660, 164, "#1f7a5c")}
      <path d="M202 206 H250 M402 206 H460 M612 206 H650" stroke="#17201b" stroke-width="4" marker-end="url(#arrow)"/>
      ${arrowDef()}
      <text x="68" y="360" class="diagram-muted" font-size="20">Strong IAM links identity proof, authentication strength, permissions, and auditable activity.</text>
    </svg>`,
  testing: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} testing funnel diagram">
      <polygon points="120,70 780,70 680,170 220,170" fill="${domain.color}" opacity=".92"/>
      <polygon points="220,190 680,190 590,280 310,280" fill="#2865ad" opacity=".92"/>
      <polygon points="310,300 590,300 535,370 365,370" fill="#1f7a5c" opacity=".92"/>
      <text x="450" y="126" text-anchor="middle" fill="#fff" font-weight="800" font-size="25">Scope and rules of engagement</text>
      <text x="450" y="244" text-anchor="middle" fill="#fff" font-weight="800" font-size="25">Assess, scan, test, audit</text>
      <text x="450" y="345" text-anchor="middle" fill="#fff" font-weight="800" font-size="25">Remediate and retest</text>
    </svg>`,
  operations: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} incident response loop">
      ${cycle(["Prepare", "Detect", "Contain", "Eradicate", "Recover", "Improve"], domain.color)}
      <text x="70" y="360" class="diagram-muted" font-size="20">Operations is a loop: every incident and change should improve the baseline.</text>
    </svg>`,
  sdlc: (domain) => `
    <svg class="diagram" viewBox="0 0 900 430" role="img" aria-label="${domain.title} secure SDLC diagram">
      <rect x="55" y="96" width="790" height="204" rx="8" fill="#fff" stroke="#dce3dd"/>
      ${pipeline(["Requirements", "Design", "Code", "Test", "Release", "Maintain"], domain.color)}
      <text x="70" y="360" class="diagram-muted" font-size="20">Security belongs in each phase: requirements, threat models, reviews, tests, release gates, and patching.</text>
    </svg>`
};

function arrowDef() {
  return `<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#17201b"/></marker></defs>`;
}

function node(label, x, y, color) {
  return `<g transform="translate(${x} ${y})"><rect width="128" height="84" rx="8" fill="${color}"/><text x="64" y="50" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">${label}</text></g>`;
}

function zone(label, x, y, color) {
  return `<circle cx="${x}" cy="${y}" r="52" fill="${color}"/><text x="${x}" y="${y + 7}" text-anchor="middle" fill="#fff" font-size="19" font-weight="800">${label}</text>`;
}

function cycle(labels, color) {
  const centerX = 450;
  const centerY = 205;
  const radius = 126;
  return labels.map((label, index) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    return `<g><circle cx="${x}" cy="${y}" r="48" fill="${index % 2 ? "#2865ad" : color}"/><text x="${x}" y="${y + 7}" text-anchor="middle" fill="#fff" font-size="17" font-weight="800">${label}</text></g>`;
  }).join("") + `<circle cx="${centerX}" cy="${centerY}" r="58" fill="#fff" stroke="#dce3dd" stroke-width="4"/><text x="${centerX}" y="${centerY + 7}" text-anchor="middle" class="diagram-label" font-size="20">Control</text>`;
}

function pipeline(labels, color) {
  return labels.map((label, index) => {
    const x = 86 + index * 126;
    const fill = index % 2 ? "#2865ad" : color;
    return `<g><rect x="${x}" y="166" width="108" height="68" rx="8" fill="${fill}"/><text x="${x + 54}" y="206" text-anchor="middle" fill="#fff" font-size="15" font-weight="800">${label}</text></g>`;
  }).join("") + `<path d="M194 200 H210 M320 200 H336 M446 200 H462 M572 200 H588 M698 200 H714" stroke="#17201b" stroke-width="4" marker-end="url(#arrow)"/>${arrowDef()}`;
}

function drawWheel() {
  const canvas = el.wheel;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  const center = size / 2;
  const radius = 205;
  const total = domains.reduce((sum, domain) => sum + domain.weight, 0);
  let start = -Math.PI / 2;
  ctx.clearRect(0, 0, size, size);
  domains.forEach((domain) => {
    const slice = (domain.weight / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, start, start + slice);
    ctx.closePath();
    ctx.fillStyle = domain.color;
    ctx.globalAlpha = state.completed.has(domain.id) ? 1 : 0.45;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(255,255,255,.85)";
    ctx.lineWidth = 4;
    ctx.stroke();

    const mid = start + slice / 2;
    ctx.fillStyle = "#ffffff";
    ctx.font = "700 20px Inter, system-ui";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`D${domain.id}`, center + Math.cos(mid) * 150, center + Math.sin(mid) * 150);
    start += slice;
  });
  ctx.beginPath();
  ctx.arc(center, center, 72, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeMode = button.dataset.mode;
    cardIndex = 0;
    quizIndex = 0;
    answered = false;
    render();
  });
});

el.search.addEventListener("input", () => renderNav(el.search.value));

el.complete.addEventListener("click", () => {
  const domain = activeDomain();
  if (state.completed.has(domain.id)) {
    state.completed.delete(domain.id);
  } else {
    state.completed.add(domain.id);
  }
  saveProgress();
  render();
});

el.reset.addEventListener("click", () => {
  state.completed.clear();
  saveProgress();
  render();
});

render();
