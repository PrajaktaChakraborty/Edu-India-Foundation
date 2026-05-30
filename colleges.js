/* ------------------------------
   Medical Colleges & Fees Page
   Edu India Foundation
--------------------------------*/

/* ====== DATA ====== */
/* NOTE: Fees are strings as provided; numeric parsing happens later. */
const COLLEGE_DATA = [
  /* Uttar Pradesh + Uttarakhand */
  {name:"United Institute of Medical Sciences",location:"Prayagraj",fees:"₹11,90,401",state:"Uttar Pradesh"},
  {name:"Sri Rammurti Smarak Institute of Medical Sciences",location:"Bareilly",fees:"₹13,73,760",state:"Uttar Pradesh"},
  {name:"Heritage Institute of Medical Sciences",location:"Varanasi",fees:"₹13,21,492",state:"Uttar Pradesh"},
  {name:"Rama Medical College Hospital & Research Centre",location:"Hapur",fees:"₹13,09,968",state:"Uttar Pradesh"},
  {name:"Rama Medical College Hospital & Research Centre",location:"Kanpur",fees:"₹12,66,579",state:"Uttar Pradesh"},
  {name:"Rohilkhand Medical College & Hospital",location:"Bareilly",fees:"₹13,00,251",state:"Uttar Pradesh"},
  {name:"T.S. Mishra Medical College & Hospital",location:"Lucknow",fees:"₹12,99,199",state:"Uttar Pradesh"},
  {name:"Muzaffarnagar Medical College",location:"Muzaffarnagar",fees:"₹12,80,037",state:"Uttar Pradesh"},
  {name:"School of Medical Sciences, Sharda University",location:"Greater Noida",fees:"₹12,69,319",state:"Uttar Pradesh"},
  {name:"Rajshree Medical Research Institute",location:"Bareilly",fees:"₹12,28,406",state:"Uttar Pradesh"},
  {name:"K.D. Medical College Hospital & Research Centre",location:"Mathura",fees:"₹12,28,240",state:"Uttar Pradesh"},
  {name:"National Capital Region Institute of Medical Sciences",location:"Meerut",fees:"₹12,19,917",state:"Uttar Pradesh"},
  {name:"Varunarjun Medical College & Rohilkhand Hospital",location:"Sahjahanpur",fees:"₹12,10,000",state:"Uttar Pradesh"},
  {name:"Noida International Institute of Medical Sciences",location:"Gautam B Nagar",fees:"₹11,92,211",state:"Uttar Pradesh"},
  {name:"Subharti Medical College",location:"Meerut",fees:"₹11,85,133",state:"Uttar Pradesh"},
  {name:"Saraswati Institute of Medical Sciences",location:"Hapur",fees:"₹11,81,671",state:"Uttar Pradesh"},
  {name:"G S Medical College and Hospital",location:"Hapur",fees:"₹11,78,892",state:"Uttar Pradesh"},
  {name:"Krishan Mohan Medical College & Hospital",location:"Mathura",fees:"₹11,73,856",state:"Uttar Pradesh"},
  {name:"Hind Institute of Medical Sciences",location:"Barabanki",fees:"₹11,70,612",state:"Uttar Pradesh"},
  {name:"Saraswati Medical College Sciences",location:"Unnao",fees:"₹11,59,610",state:"Uttar Pradesh"},
  {name:"Mayo Institute of Medical",location:"Barabanki",fees:"₹11,21,162",state:"Uttar Pradesh"},
  {name:"Shri Venkateshwar Institute of Medical Sciences",location:"Amroha",fees:"₹11,10,508",state:"Uttar Pradesh"},
  {name:"Prasad Institute of Medical Sciences",location:"Lucknow",fees:"₹11,03,932",state:"Uttar Pradesh"},
  {name:"Hind Institute of Medical Sciences",location:"Lucknow",fees:"₹10,77,229",state:"Uttar Pradesh"},
  {name:"Himalayan Institute of Medical Sciences",location:"Uttarakhand",fees:"₹18,00,000",state:"Uttarakhand"},
  {name:"United Institute of Medical Sciences",location:"Uttarakhand",fees:"₹18,00,000",state:"Uttarakhand"},

  /* Karnataka */
  {name:"Sri Siddhartha Medical College", location:"Tumkur", fees:"₹12,00,867", state:"Karnataka"},
  {name:"K.S. Hegde Medical Academy", location:"Mangalore", fees:"₹15,73,710", state:"Karnataka"},
  {name:"Raja Rajeshwari Medical College", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Jawaharlal Nehru Medical College", location:"Belgaum", fees:"₹1,57,371", state:"Karnataka"},
  {name:"Adichunchanagiri Institute of Medical Science", location:"Mandaya", fees:"₹22,15,750", state:"Karnataka"},
  {name:"SDM College of Medical Science and Hospital", location:"Dharwad", fees:"₹20,15,750", state:"Karnataka"},
  {name:"Shri B M Patil Medical College, Hospital & Research Centre", location:"Bijapur", fees:"Not listed", state:"Karnataka"},
  {name:"Khaja Banda Nawaz Institute of Medical Science", location:"Gulbarga", fees:"₹16,30,715", state:"Karnataka"},
  {name:"Sri Siddhartha Medical College", location:"Tumkur", fees:"₹12,00,867", state:"Karnataka"},
  {name:"JSS Medical College", location:"Mysore", fees:"₹1,54,321", state:"Karnataka"},
  {name:"Kasturba Medical College", location:"Manipal", fees:"Not Updated Yet", state:"Karnataka"},
  {name:"Sri Devaraj Urs Medical College", location:"Kolar", fees:"Not Updated Yet", state:"Karnataka"},
  {name:"Shri Basaveswara Medical College and Hospital", location:"Chitradurga", fees:"₹12,00,867", state:"Karnataka"},
  {name:"S. N. Medical College & HSK Hospital & Research", location:"Bagalkot", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Dr. BR Ambedkar Medical College", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Mahadevappa Rampure Medical College", location:"Gulbarga", fees:"₹12,00,867", state:"Karnataka"},
  {name:"JJM Medical College", location:"Davangere", fees:"₹12,00,867", state:"Karnataka"},
  {name:"MS Ramaiah Medical College", location:"Bangalore", fees:"₹25,15,750", state:"Karnataka"},
  {name:"SS Institute of Medical Science & Research Centre", location:"Davangere", fees:"₹12,00,867", state:"Karnataka"},
  {name:"BGS Global Institute of Medical Science", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Shridevi Institute of Medical Science & Research Hospital", location:"Tumkur", fees:"₹12,00,867", state:"Karnataka"},
  {name:"MVJ Medical College and Research Hospital", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"AJ Institute of Medical Science & Research Center", location:"Mangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Vydehi Institute of Medical Science & Research Centre", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"Sapthagiri Institute of Medical Science & Research Center", location:"Bangalore", fees:"₹22,41,500", state:"Karnataka"},
  {name:"Srinivas Institute of Medical Research Center", location:"Mangalore", fees:"₹12,00,867", state:"Karnataka"},
  {name:"St. Johns Medical College", location:"Bangalore", fees:"₹8,11,285", state:"Karnataka"},
  {name:"The Oxford Medical College, Hospital & Research", location:"Bangalore", fees:"₹12,00,867", state:"Karnataka"},

  /* Tamil Nadu */
  {name:"Saveetha Medical College and Hospital", location:"Kanchipuram", fees:"₹24,75,000", state:"Tamil Nadu"},
  {name:"Sree Balaji Medical College and Hospital", location:"Chennai", fees:"₹24,75,000", state:"Tamil Nadu"},
  {name:"Chettinad Hospital and Research Institute", location:"Kanchipuram", fees:"₹24,50,000", state:"Tamil Nadu"},
  {name:"Sri Ramachandra Medical College and Research Institute", location:"Chennai", fees:"₹25,00,000", state:"Tamil Nadu"},
  {name:"ACS Medical College and Hospital", location:"Chennai", fees:"₹23,00,000", state:"Tamil Nadu"},
  {name:"SRM Medical College Hospital and Research Centre", location:"Kanchipuram", fees:"₹25,00,000", state:"Tamil Nadu"},
  {name:"Meenakshi Medical College and Research Institute", location:"Enathur", fees:"₹22,50,000", state:"Tamil Nadu"},
  {name:"Vinayaka Mission Kirupananda Varlyar Medical College", location:"Salem", fees:"₹20,00,000", state:"Tamil Nadu"},
  {name:"Shri Sathya Sai Medical College and Research Institute", location:"Kanchipuram", fees:"₹20,00,000", state:"Tamil Nadu"},
  {name:"Annaii Medical College (Rajalakshmi Medical College)", location:"Kanchipuram", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Annapoorna Medical College and Hospital", location:"Salem", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Chennai Medical College Hospital and Research Centre", location:"Trichy", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Christian Medical College", location:"Vellore", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Dhanalakshmi Srinivasan Medical College and Hospital", location:"Parambalur", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Karpaga Vinayaga Institute of Medical Science", location:"Maduranthagam", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Karpagam Faculty of Medical Science & Research", location:"Coimbatore", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Madha Medical College and Hospital", location:"Thandalam", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Melmaruvathur Adiparasakthi Institute", location:"Kanchipuram", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Ponnaiyah Ramajayam Institute of Medical Science", location:"Manamai-Nellur", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"PSG Institute of Medical Science", location:"Coimbatore", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Sree Moogambika Institute of Medical Science", location:"Kanyakumari", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Sri Muthukumaran Medical College", location:"Chennai", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Tagore Medical College", location:"Chennai", fees:"₹12,50,000", state:"Tamil Nadu"},
  {name:"Velammal Medical College Hospital & Research Institute", location:"Madurai", fees:"₹12,50,000", state:"Tamil Nadu"},

  /* Maharashtra */
  {name:"Padmashree Dr. D.Y. Patil Medical College", location:"Navi Mumbai", fees:"₹25,75,000", state:"Maharashtra"},
  {name:"Padmashree Dr. D.Y. Patil Medical College", location:"Pune", fees:"₹25,00,000", state:"Maharashtra"},
  {name:"Padmashree Dr. D.Y. Patil Medical College", location:"Kolhapur", fees:"₹20,60,000", state:"Maharashtra"},
  {name:"Krishna Institute of Medical Sciences", location:"Karad", fees:"₹20,87,000", state:"Maharashtra"},
  {name:"Jawaharlal Nehru Medical College (Meghe Datta)", location:"Wardha", fees:"₹20,50,000", state:"Maharashtra"},
  {name:"Mahatma Gandhi Missions Medical College", location:"Aurangabad", fees:"₹20,00,000", state:"Maharashtra"},
  {name:"Mahatma Gandhi Missions Medical College", location:"Navi Mumbai", fees:"₹20,00,000", state:"Maharashtra"},
  {name:"Bharati Vidyapeeth University Medical College & Hospital", location:"Sangli", fees:"₹19,98,150", state:"Maharashtra"},
  {name:"Bharati Vidyapeeth University Medical College & Hospital", location:"Pune", fees:"₹19,35,515", state:"Maharashtra"},
  {name:"Rural Medical College (PLIMS)", location:"Loni", fees:"₹14,50,000", state:"Maharashtra"},
  {name:"B.K.L Walawalkar Rural Medical College", location:"Ratnagiri", fees:"₹10,25,000", state:"Maharashtra"},
  {name:"Maharashtra Institute of Medical Education & Research", location:"Pune", fees:"₹9,25,000", state:"Maharashtra"},
  {name:"N. K. P. Salve Institute of Medical Sciences and Research Centre", location:"Nagpur", fees:"₹8,83,000", state:"Maharashtra"},
  {name:"Dr. Vithalrao Vikhe Patil Foundations Medical College", location:"Ahmed Nagar", fees:"₹8,15,000", state:"Maharashtra"},
  {name:"Institute of Medical Science and Research", location:"Satara", fees:"₹7,10,000", state:"Maharashtra"},
  {name:"Maharashtra Institute of Medical Sciences & Research", location:"Latur", fees:"₹7,00,000", state:"Maharashtra"},
  {name:"Terna Medical College", location:"Navi Mumbai", fees:"₹7,00,000", state:"Maharashtra"},
  {name:"Dr. Ulhas Patil Medical College & Hospital", location:"Jalgaon", fees:"₹5,13,637", state:"Maharashtra"},
  {name:"SMBT Institute of Medical Sciences Research Centre", location:"Nashik", fees:"₹2,95,454", state:"Maharashtra"},

  /* West Bengal */
  {name:"KPC Medical College & Hospital", location:"Kolkata", fees:"₹12,00,000", state:"West Bengal"},
  {name:"IQ City Medical College", location:"Burdwan", fees:"₹18,50,000", state:"West Bengal"},
  {name:"Sanaka Medical College", location:"Durgapur", fees:"₹21,88,000", state:"West Bengal"},
  {name:"Gouri Devi Medical College", location:"Durgapur", fees:"₹10,75,000", state:"West Bengal"},
  {name:"Sri Ramkrishna Institute of Medical Science", location:"Durgapur", fees:"₹21,88,000", state:"West Bengal"},
  {name:"Jagannath Gupta Medical College", location:"Kolkata", fees:"₹22,00,000", state:"West Bengal"},
  {name:"ICARE Institute of Medical College", location:"Midanpur", fees:"₹16,30,000", state:"West Bengal"},

  /* Madhya Pradesh */
  {name:"LN Medical College", location:"Bhopal", fees:"₹12,75,000", state:"Madhya Pradesh"},
  {name:"Index Medical College", location:"Indore", fees:"₹12,25,700", state:"Madhya Pradesh"},
  {name:"People's College of Medical Science", location:"Bhopal", fees:"₹12,15,000", state:"Madhya Pradesh"},
  {name:"Chirayu Medical College", location:"Bhopal", fees:"₹11,41,000", state:"Madhya Pradesh"},
  {name:"Amaltas Medical College", location:"Ujjain", fees:"₹9,65,000", state:"Madhya Pradesh"},
  {name:"Sri Aurobindo Institute of Medical Science", location:"Indore", fees:"₹9,28,000", state:"Madhya Pradesh"},
  {name:"RD Gardi Medical College", location:"Ujjain", fees:"₹8,33,000", state:"Madhya Pradesh"},

  /* Pondicherry */
  {name:"Mahatma Gandhi Medical & Research Institute", location:"Pondicherry", fees:"₹22,00,000", state:"Pondicherry"},
  {name:"Aarupadai Veedu Medical College", location:"Pondicherry", fees:"₹19,50,000", state:"Pondicherry"},
  {name:"Sri Lakshmi Narayana Institute of Medical Science", location:"Pondicherry", fees:"₹21,50,000", state:"Pondicherry"},
  {name:"Vinayaka Mission Medical College", location:"", fees:"₹20,00,000", state:"Pondicherry"},
  {name:"Sri Manakula Vinayagar Medical College & Hospital", location:"Pondicherry", fees:"₹18,00,000", state:"Pondicherry"},
  {name:"Sri Venkateswaraa Medical College, Hospital & Research", location:"Pondicherry", fees:"₹18,00,000", state:"Pondicherry"},
  {name:"Pondicherry Institute of Medical Science & Research", location:"Pondicherry", fees:"₹8,33,000", state:"Pondicherry"},

  /* North East */
  {name:"Sikkim Manipal Institute of Medical Sciences", location:"Sikkim", fees:"₹17,20,000", state:"North East"},
  {name:"Zoram Medical College (NRI Quota)", location:"", fees:"$20,000", state:"North East"},
  {name:"Shija Academy of Health Sciences", location:"Manipur", fees:"₹19,00,000", state:"North East"}
];

/* ====== ELEMENTS ====== */
const searchInput = document.getElementById('searchInput');
const stateSelect = document.getElementById('stateSelect');
const minFeeInput = document.getElementById('minFee');
const maxFeeInput = document.getElementById('maxFee');
const hideUnknownChk = document.getElementById('hideUnknown');
const sortSelect = document.getElementById('sortSelect');
const applyBtn = document.getElementById('applyFilters');
const resetBtn = document.getElementById('resetFilters');
const resultsCountEl = document.getElementById('resultsCount');
const gridEl = document.getElementById('collegesGrid');

/* ====== UTILITIES ====== */

/* Parse fee string -> number (₹). Returns NaN if not INR number. */
function parseFee(str) {
  if (!str) return NaN;
  if (str.includes('$')) return NaN; // foreign currency
  const digits = str.replace(/[^0-9]/g,'');
  return digits ? parseInt(digits,10) : NaN;
}

/* Format rupee with grouping */
function formatINR(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

/* Determine fee category for color coding */
function feeClass(num) {
  if (isNaN(num)) return 'fee-unknown';
  if (num <= 1000000) return 'fee-low';         // <= 10L
  if (num <= 2000000) return 'fee-mid';         // 10L-20L
  return 'fee-high';                            // >20L
}

/* ====== FILTER LOGIC ====== */
function getFilters() {
  return {
    text: searchInput.value.trim().toLowerCase(),
    state: stateSelect.value,
    min: minFeeInput.value ? parseInt(minFeeInput.value, 10) : null,
    max: maxFeeInput.value ? parseInt(maxFeeInput.value, 10) : null,
    hideUnknown: hideUnknownChk.checked,
    sort: sortSelect.value
  };
}

function applyFilters() {
  const f = getFilters();
  let rows = COLLEGE_DATA.slice();

  // text filter (name or location)
  if (f.text) {
    rows = rows.filter(c =>
      c.name.toLowerCase().includes(f.text) ||
      c.location.toLowerCase().includes(f.text)
    );
  }

  // state filter
  if (f.state) {
    rows = rows.filter(c => c.state === f.state);
  }

  // budget filter
  if (f.min !== null || f.max !== null) {
    rows = rows.filter(c => {
      const fee = parseFee(c.fees);
      if (isNaN(fee)) return false; // exclude unknown when budget is used
      if (f.min !== null && fee < f.min) return false;
      if (f.max !== null && fee > f.max) return false;
      return true;
    });
  } else if (f.hideUnknown) {
    rows = rows.filter(c => !isNaN(parseFee(c.fees)));
  }

  // sort
  rows = sortRows(rows, f.sort);

  renderRows(rows);
}

function sortRows(rows, mode) {
  const copy = rows.slice();
  switch (mode) {
    case 'fee-asc':
      copy.sort((a,b)=>parseFee(a.fees)-parseFee(b.fees));
      break;
    case 'fee-desc':
      copy.sort((a,b)=>parseFee(b.fees)-parseFee(a.fees));
      break;
    case 'name-asc':
      copy.sort((a,b)=>a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      copy.sort((a,b)=>b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return copy;
}

/* ====== RENDER ====== */
function renderRows(rows) {
  gridEl.innerHTML = '';
  rows.forEach((c, index) => {
    const feeNum = parseFee(c.fees);
    const feeClassName = feeClass(feeNum);
    const feeText = isNaN(feeNum) ? c.fees : `₹${formatINR(feeNum)}`;
    const loc = c.location ? c.location : '—';
    const card = document.createElement('div');
    card.className = 'college-card tilt-card reveal-on-scroll';
    // Cascading entrance stagger delay (limit to first 15 rows for top performance)
    card.style.transitionDelay = `${(index % 15) * 0.04}s`;
    card.innerHTML = `
      <div class="tilt-card-inner">
        <h2>${c.name}</h2>
        <p><strong>Location:</strong> ${loc}</p>
        <p><strong>State:</strong> ${c.state}</p>
        <p><strong>Annual Fees:</strong> <span class="${feeClassName}">${feeText}</span></p>
      </div>
    `;
    gridEl.appendChild(card);
  });

  updateResultsCount(rows.length);
  revealCardsOnScroll();
}

/* Results count text */
function updateResultsCount(n) {
  resultsCountEl.textContent = `Showing ${n} college${n===1?'':'s'}.`;
}

/* ====== STATE DROPDOWN POPULATE ====== */
function populateStates() {
  const states = Array.from(new Set(COLLEGE_DATA.map(c => c.state))).sort();
  states.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    stateSelect.appendChild(opt);
  });
}

/* ====== SCROLL REVEAL FOR CARDS ====== */
function revealCardsOnScroll() {
  if (window.observeAnimatedElements) {
    window.observeAnimatedElements();
  }
}

/* ====== RESET ====== */
function resetFilters() {
  searchInput.value = '';
  stateSelect.value = '';
  minFeeInput.value = '';
  maxFeeInput.value = '';
  hideUnknownChk.checked = false;
  sortSelect.value = 'none';
  applyFilters();
}

/* ====== BACK TO TOP ====== */
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  const toggleBackBtn = () => {
    if (window.scrollY > 300) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  };
  window.addEventListener('scroll', toggleBackBtn);
  backBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  toggleBackBtn();
}

/* ====== INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
  populateStates();

  applyBtn.addEventListener('click', e => {
    e.preventDefault();
    applyFilters();
  });

  resetBtn.addEventListener('click', e => {
    e.preventDefault();
    resetFilters();
  });

  // Live filter on typing (optional)
  searchInput.addEventListener('input', applyFilters);
  stateSelect.addEventListener('change', applyFilters);
  minFeeInput.addEventListener('change', applyFilters);
  maxFeeInput.addEventListener('change', applyFilters);
  hideUnknownChk.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);

  applyFilters(); // initial render
});
