// Source of truth: "Online Registration system" (Ngagdra Dokram committee, 2026).
// Copy is reproduced as supplied. The names of the institute and the group are set in their
// official forms ("Ngagdra Dorji Choegar", "Ngagdra Dokram"); the document itself asks for
// 'the name "Ngagdra Dokram"'. Editor placeholders ("Video Link: ….") are left out.

export const dokram = {
  name: "Ngagdra Dokram",
  monthly: "Nu. 150 per month",
  lead: "Each member voluntarily contributes Nu. 150 per month towards supporting the monastery’s daily operations.",
  background: [
    "At present, Ngagdra Dorji Choegar has approximately 50 monks, including teachers. However, the institute does not receive regular external funding to meet its day-to-day operational requirements. In recognition of the importance of sustaining the institute and its religious activities, the local community has formed a voluntary support group known as “Ngagdra Dokram.”",
    "Ngagdra Dokram currently has approximately 230 members in its Telegram group. Each member voluntarily contributes Nu. 150 per month towards supporting the monastery’s daily operations. The contributions are used to meet essential expenses, including food, basic supplies, maintenance, religious activities, and other necessary operational requirements of Ngagdra Dorji Choegar.",
  ],
  committee: {
    intro: "The group is managed by a committee consisting of:",
    roles: ["President", "Secretary", "Finance Officer", "Cashier", "Internal Auditor", "Event Coordinator", "Callers/Collection Coordinators"],
  },
  benefits: {
    title: "Benefits for Members",
    items: [
      { title: "Daily Lungta Recitation", body: "Daily recitation of Lungta by the Ngagdra monks for the well-being and prosperity of members." },
      { title: "Annual Butter Lamp Offering", body: "Butter lamps are offered at Ngagdra at the beginning of each year for the well-being of members and all sentient beings." },
      { title: "Prayers for the Deceased", body: "Ngoe Melam prayers are performed by Ngagdra Dorji Choegar in the event of the death of a member or their immediate family member." },
      { title: "Rimdro", body: "Rimdro prayers and religious rituals are performed by the Ngagdra monks for the benefit and well-being of members from time to time." },
    ],
  },
  mbob: {
    title: "How to Set Up Automatic Monthly or Yearly Donations Through mBoB",
    intro: "You can set up your donation as a Scheduled Payment, similar to a Standing Instruction (SI). Once set up, the amount will be automatically deducted from your account according to the schedule.",
    steps: [
      {
        title: "Step 1: Add the Beneficiary",
        items: [
          "Open the mBoB App.",
          "Under Quick Send Money, click the + (plus) sign.",
          "From the Add Beneficiary dropdown, select Bank of Bhutan.",
          "Enter the beneficiary’s account number and submit.",
          "The beneficiary will then be added under Quick Send Money.",
        ],
      },
      {
        title: "Step 2: Set Up the Scheduled Donation",
        items: [
          "Go to Account.",
          "Select Schedule Payment.",
          "Click Add Schedule Payment.",
          "Enter the Beneficiary Name.",
          "Enter a description, such as “Monthly Donation – January” or “Annual Donation.”",
          "Under Payment Frequency, select Monthly, Yearly, or the required frequency.",
          "Enter the donation amount.",
          "Enter the start date.",
          "Enter the end date.",
          "Select the time when the payment should be deducted.",
          "Review the details and click Submit.",
          "Enter your mBoB PIN and confirm the payment.",
        ],
      },
      {
        title: "Step 3: Automatic Donation",
        text: [
          "Once the scheduled payment is successfully set up, mBoB will automatically deduct the specified amount from your account on the scheduled date and transfer it to the beneficiary.",
          "This means you do not need to make the donation manually every month or year.",
        ],
      },
    ],
  },
  declaration: "I voluntarily agree to become a member of Ngagdra Dokram",
  thanks: "Thank you for registering with Ngagdra Dokram",
  contacts: {
    address: "Ngagdra Dokram, Kurizampa, Mongar, Bhutan.",
    phones: ["+975 17613154", "+975 77613154"],
    secretary: { name: "Secretary Mr. Karma Wangchuk", whatsapp: "+61 410 234 009" },
    email: "ngagdradokram@gmail.com",
    telegram: "https://t.me/+Bfx_SNQ9P6o0ZGM1",
  },
};

/** Preferred method of monthly contribution, as listed on the registration form. */
export const contributionMethods = [
  { value: "mbob", label: "Bank Transfer (mBOB)" },
  { value: "mobile_banking", label: "Mobile Banking" },
  { value: "cash", label: "Cash" },
  { value: "other", label: "Other" },
] as const;

/** What a donation is for. Labels follow the programme names in the committee's document. */
export const donationPurposes = [
  { value: "general", label: "General offering" },
  { value: "membership", label: "Monthly membership contribution" },
  { value: "meals", label: "Sponsor a day’s meals" },
  { value: "sponsor_monk", label: "Sponsor a monk" },
  { value: "project", label: "Adopt a project" },
  { value: "occasion", label: "Birthday or anniversary offering" },
  { value: "butter_lamp", label: "Butter lamp offering" },
] as const;
