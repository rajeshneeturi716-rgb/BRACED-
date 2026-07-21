// BRACED Startup Website Interactive Logic
document.addEventListener('DOMContentLoaded', () => {

  // 1. Pricing Toggle (Monthly vs Annual)
  const billingToggle = document.getElementById('billing-toggle');
  const priceShield = document.getElementById('price-shield');
  const priceShieldPlus = document.getElementById('price-shield-plus');
  const labelMonthly = document.getElementById('label-monthly');
  const labelAnnual = document.getElementById('label-annual');

  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      if (billingToggle.checked) {
        // Annual Billing
        priceShield.innerHTML = '$49 <span>/ year</span>';
        priceShieldPlus.innerHTML = '$89 <span>/ year</span>';
        labelAnnual.classList.add('active');
        labelMonthly.classList.remove('active');
      } else {
        // Monthly Billing
        priceShield.innerHTML = '$4.99 <span>/ month</span>';
        priceShieldPlus.innerHTML = '$8.99 <span>/ month</span>';
        labelMonthly.classList.add('active');
        labelAnnual.classList.remove('active');
      }
    });
  }

  // 2. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQs
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));
      
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. Modal Manager Logic
  const setupModal = (triggerIds, modalId, closeId) => {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    triggerIds.forEach(id => {
      const trigger = document.getElementById(id);
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.add('active');
        });
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  };

  // Bind Modals
  setupModal(['btn-open-scanner', 'link-open-scanner-footer'], 'modal-scanner', 'close-scanner');
  setupModal(['btn-retailer-hero', 'link-retailer-footer'], 'modal-retailer', 'close-retailer');
  setupModal(['btn-terms-nav', 'link-terms-footer'], 'modal-terms', 'close-terms');
  setupModal(['btn-open-portal', 'link-open-portal-footer'], 'modal-portal', 'close-portal');

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    }
  });

  // 4. AI TrustScan™ Interactive Simulation Sequence
  const dropzone = document.getElementById('dropzone');
  const btnRunScan = document.getElementById('btn-run-scan');
  const btnResetScan = document.getElementById('btn-reset-scan');
  const scanTitle = document.getElementById('scan-status-title');
  const scanDesc = document.getElementById('scan-status-desc');
  const scanProgress = document.getElementById('scan-progress-text');

  let isScanning = false;

  if (btnRunScan && dropzone) {
    btnRunScan.addEventListener('click', () => {
      if (isScanning) return;
      isScanning = true;
      dropzone.classList.add('scanning');

      const steps = [
        "Initializing Computer Vision Neural Net...",
        "Scanning Display Matrix & Pixel Uniformity...",
        "Evaluating Camera Lens Clarity & Focus...",
        "Checking IMEI Integrity & Chassis Geometry...",
        "Finalizing Verification Certificate..."
      ];

      let currentStep = 0;
      scanProgress.style.color = "#a855f7";
      
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          scanProgress.innerText = `[AI Processing] ${steps[currentStep]}`;
          currentStep++;
        } else {
          clearInterval(interval);
          dropzone.classList.remove('scanning');
          isScanning = false;

          // Completion state
          scanTitle.innerHTML = `<span style="color: var(--accent-emerald);"><i class="fa-solid fa-circle-check"></i> AI Inspection PASSED</span>`;
          scanDesc.innerText = "Device integrity verified 100%. Instant policy activation approved!";
          scanProgress.innerText = "Status: PASSED • Certificate #BRACED-AI-8942";
          scanProgress.style.color = "#10b981";
        }
      }, 900);
    });
  }

  if (btnResetScan && dropzone) {
    btnResetScan.addEventListener('click', () => {
      dropzone.classList.remove('scanning');
      isScanning = false;
      scanTitle.innerText = "Click or Drop Photo of Smartphone";
      scanDesc.innerText = "Simulates AI damage assessment for Display, Camera, and Body.";
      scanProgress.innerText = "Status: Ready for Inspection";
      scanProgress.style.color = "var(--accent-purple)";
    });
  }

  // 5. Customer Portal Claim Wizard Controls
  const btnFileClaimPortal = document.getElementById('btn-file-claim-portal');
  const claimSubmissionBox = document.getElementById('claim-submission-box');
  const claimWizardForm = document.getElementById('claim-wizard-form');

  if (btnFileClaimPortal && claimSubmissionBox) {
    btnFileClaimPortal.addEventListener('click', () => {
      const isVisible = claimSubmissionBox.style.display === 'block';
      claimSubmissionBox.style.display = isVisible ? 'none' : 'block';
    });
  }

  if (claimWizardForm) {
    claimWizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('AI Claim Validation Successful!\n\nClaim Ticket: #CLM-889021\nAssigned Service Center: Apple Authorized Service Partner #402\nStatus: Pre-Approved for Repair.');
      claimSubmissionBox.style.display = 'none';
      claimWizardForm.reset();
    });
  }

  // 6. Contact & Retailer Form Submissions
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting BRACED Support! Our team will respond to your email within 2 business hours.');
      contactForm.reset();
    });
  }

  const retailerForm = document.getElementById('retailer-form');
  if (retailerForm) {
    retailerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for applying to the BRACED Retailer Partner Program! A representative will reach out to set up your partner account.');
      document.getElementById('modal-retailer').classList.remove('active');
      retailerForm.reset();
    });
  }

  // 7. Plan Select buttons
  document.querySelectorAll('.btn-plan-select').forEach(btn => {
    btn.addEventListener('click', () => {
      const planName = btn.getAttribute('data-plan');
      alert(`You selected ${planName}! Launching AI TrustScan™ verification process...`);
      document.getElementById('modal-scanner').classList.add('active');
    });
  });

});
