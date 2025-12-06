// ============================================
// EWU UniGuide - Extended Knowledge Base
// ============================================

// Part 1-5: Static Knowledge Entries
const STATIC_KNOWLEDGE = [
    // --- Part 0: Greetings & Chit-Chat ---
    {
        keywords: ["hi", "hello", "hey", "greetings", "hola"],
        question: "Hello!",
        answer: "Hello! 👋 Welcome to EWU CSE Genie. How can I help you today?",
        category: "General",
        related: []
    },
    {
        keywords: ["good morning", "morning"],
        question: "Good Morning!",
        answer: "Good morning! ☀️ I hope you have a wonderful day. How can I assist you with the CSE department?",
        category: "General",
        related: []
    },
    {
        keywords: ["bye", "goodbye", "see you", "later", "tata"],
        question: "Goodbye!",
        answer: "Goodbye! 👋 Have a great day! Feel free to come back if you have more questions.",
        category: "General",
        related: []
    },
    {
        keywords: ["ekra", "who is ekra", "tell me about ekra", "do you know ekra", "about ekra"],
        question: "Who is Ekra?",
        answer: "Oh no!!! You don't know Ekra!!!! She is the most beautiful girl in the CSE department of EWU. She is such a lovely-hearted girl!! Wishing her all the good in this world.",
        category: "General",
    },
    {
        keywords: ["sad", "i am sad", "feeling sad", "i'm sad", "depressed", "unhappy", "feeling down", "feeling low", "stressed", "anxious", "upset", "not feeling good", "bad day", "tough day"],
        question: "I am sad",
        answer: "Hey, don't worry! Here's something to cheer you up! 😊<br><br><img src='images/cheer-up.png' alt='Cheer Up!' style='max-width: 100%; border-radius: 6px;'><br><br>Remember, tough times don't last, but tough people do! You've got this! 💪",
        category: "General",
        related: []
    },
    {
        keywords: ["developed", "developer", "created", "creator", "made", "built", "designed", "designer", "author", "who developed", "who created", "who made", "who built", "who designed", "developed this", "created this", "made this", "built this", "designed this", "developed chatbot", "created chatbot"],
        question: "Who developed this chatbot?",
        answer: "Designed by Sarfaraz Ahamed Shovon",
        category: "General",
        related: []
    },
    {
        keywords: ["who are you", "who r u", "who are u", "who u", "what are you", "introduce yourself", "your name", "u r who", "are you bot", "are you ai", "whats your name"],
        question: "Who are you?",
        answer: "I am the EWU CSE Genie 🧞‍♂️, an AI assistant developed to help you with information about the Computer Science & Engineering department at East West University.",
        category: "General",
        related: ["Who developed this chatbot?", "What can you help me with?"]
    },
    {
        keywords: ["what can you help", "help me with", "what can you do", "your capabilities", "what you do", "how can you help", "can you help"],
        question: "What can you help me with?",
        answer: "I can assist you with information regarding the CSE Department at East West University, including:<br><br>✅ <strong>Faculty Info:</strong> Profiles, contact details, and research areas.<br>✅ <strong>Academics:</strong> B.Sc. & M.Sc. courses, curriculum, and credits.<br>✅ <strong>Admissions:</strong> Requirements, deadlines, and process.<br>✅ <strong>Fees & Scholarships:</strong> Tuition costs and available waivers.<br>✅ <strong>Facilities:</strong> Labs, office location, and contacts.",
        category: "General",
        related: ["Who are you?", "How can I apply for admission?"]
    },

    // --- Admission & Application ---
    {
        keywords: ["admission deadline", "deadline", "admission date", "when admission", "apply deadline"],
        question: "What is the current admission deadline for undergraduate programs?",
        answer: "Admission deadlines vary by semester (Spring, Summer, Fall). Please check the official East West University website or contact the admissions office at 09666775577 for the latest dates.",
        category: "Admission",
        related: ["How can I apply for admission?", "What documents are needed for admission?"]
    },
    {
        keywords: ["apply", "admission", "how to apply", "apply for admission", "admission process", "application"],
        question: "How can I apply for admission?",
        answer: "You can apply online via the EWU Admission portal (<a href='http://admission.ewubd.edu/' target='_blank'>http://admission.ewubd.edu/</a>) or collect the application form physically from the Admission Office at the Aftabnagar campus.",
        category: "Admission",
        related: ["What documents are needed for admission?", "What is the admission deadline?"]
    },
    {
        keywords: ["documents", "admission documents", "required documents", "paperwork", "admission requirements"],
        question: "What documents are needed for the admission process?",
        answer: "Typically, you need:<br>• SSC & HSC (or O/A Level) Mark sheets & Certificates (Original + Photocopies)<br>• Passport-sized photographs<br>• NID or Birth Certificate<br>• Guardian's NID",
        category: "Admission",
        related: ["How can I apply for admission?", "Can international students apply?"]
    },
    {
        keywords: ["international", "foreign student", "international student", "abroad", "foreign admission"],
        question: "Can international students apply for admission?",
        answer: "Yes, international students are welcome to apply. EWU offers a 50% tuition fee waiver for eligible foreign students.",
        category: "Admission",
        related: ["How can I apply for admission?", "What is the tuition fee?"]
    },
    {
        keywords: ["credit transfer", "transfer credits", "transfer", "credit migration"],
        question: "Can I transfer my credits?",
        answer: "Yes, credit transfer is possible from other UGC-approved universities. It requires the approval of the Departmental Equivalence Committee and a minimum grade in the specific courses.",
        category: "Admission",
        related: ["How can I apply for admission?", "What are the total credits for B.Sc. CSE?"]
    },

    // --- Academic & Departments ---
    {
        keywords: ["how many courses", "total courses", "number of courses", "cse courses", "course count"],
        question: "How many courses are there in the CSE department?",
        answer: "The B.Sc. in CSE program consists of approximately 40+ courses (including Labs, General Education, Math, Science, and Major Electives) to meet the 140 credit requirement.",
        category: "Academic",
        related: ["What are the total credits for B.Sc. CSE?", "What is the course duration?"]
    },
    {
        keywords: ["course duration", "program duration", "how long", "years", "semesters", "total credits"],
        question: "Tell me about the CSE course duration and total credits.",
        answer: "The B.Sc. in CSE is a 4-year program consisting of 12 semesters. The total degree requirement is 140 credits.",
        category: "Academic",
        related: ["How many courses are there?", "What major areas are available?"]
    },
    {
        keywords: ["departments", "list of departments", "university departments", "faculties", "all departments"],
        question: "Can you show me the list of departments offered by the university?",
        answer: "EWU has multiple departments including:<br>• Computer Science & Engineering<br>• Electrical & Electronic Engineering (EEE)<br>• Electronics & Communications Engineering (ECE/ETE)<br>• Pharmacy<br>• Business Administration (BBA)<br>• English<br>• Economics<br>• Law<br>• Sociology<br>• Information Studies",
        category: "Academic",
        related: ["What is the B.Sc. in CSE program?", "Where is EWU located?"]
    },

    // --- Fees & Financial Aid (Additional) ---
    {
        keywords: ["current tuition", "cse tuition", "tuition fee cse", "computer science fee"],
        question: "What is the current tuition fee for Computer Science?",
        answer: "The current tuition fee for B.Sc. in CSE is Tk. 6,500 per credit. The total cost for 140 credits is approximately Tk. 10.03 Lakhs.",
        category: "Fees & Scholarships",
        related: ["Has there been a recent change in fees?", "Are there scholarship opportunities?"]
    },
    {
        keywords: ["fee change", "recent fee change", "fee update", "credit fee change"],
        question: "Has there been a recent change in the per credit fee for CSE courses?",
        answer: "The current fee is Tk. 6,500/credit. Fees are subject to review by the university administration. Please check the latest fee structure on the website for recent updates.",
        category: "Fees & Scholarships",
        related: ["What is the tuition fee for CSE?", "Are there scholarship opportunities?"]
    },
    {
        keywords: ["scholarship opportunities", "any scholarship", "scholarships available", "financial help"],
        question: "Are there any scholarship opportunities?",
        answer: "Yes, EWU offers:<br>• Merit Scholarship (Top achievers)<br>• Freedom Fighter Quota (100% waiver)<br>• Financial Aid (Need-based)<br>• Sibling/Spouse Benefit (50% waiver)<br>• Medha Lalon Fund",
        category: "Fees & Scholarships",
        related: ["What are the terms for merit scholarships?", "Is there a sibling discount?"]
    },
    {
        keywords: ["merit scholarship terms", "scholarship conditions", "maintain scholarship", "scholarship requirements"],
        question: "What are the terms and conditions for merit scholarships?",
        answer: "To maintain a Merit Scholarship, you typically need a CGPA of 3.50 or higher. Entry-level scholarships require a GPA of 5.00 in SSC & HSC (Golden GPA for 100% waiver).",
        category: "Fees & Scholarships",
        related: ["Are there scholarship opportunities?", "What CGPA is needed to keep Merit Scholarship?"]
    },

    // --- General Information & Facilities ---
    {
        keywords: ["why ewu", "why admit", "why choose ewu", "benefits of ewu", "reasons to join"],
        question: "Why should I get admitted into EWU?",
        answer: "• Permanent Certificate from the Government.<br>• IEB Accredited CSE Program.<br>• Top-tier faculty members.<br>• Excellent location (Aftabnagar) and Green Campus.<br>• Strong Alumni network in top tech giants (Google, Microsoft).",
        category: "General",
        related: ["Where is EWU located?", "Tell me about notable alumni"]
    },
    {
        keywords: ["location", "address", "where is ewu", "campus location", "university location"],
        question: "Where is East West University located?",
        answer: "EWU is located at A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212 (Near Rampura Bridge).",
        category: "General",
        related: ["What is the CSE office room number?", "Show me the campus"]
    },
    {
        keywords: ["campus", "campus photo", "show campus", "campus image", "campus picture", "ewu campus", "campus view", "university campus"],
        question: "Show me the campus",
        answer: "<strong>Welcome to East West University!</strong><br><br><img src='images/campus.jpg' alt='EWU Campus' style='max-width: 100%; border-radius: 6px; margin: 12px 0;'><br><br>Our beautiful campus at Aftabnagar features stunning red-brick architecture, open courtyards for events and exhibitions, and a vibrant academic environment. Established in 1996, EWU is one of Bangladesh's leading private universities.",
        category: "General",
        related: ["Where is EWU located?", "Is there a medical center?"]
    },
    {
        keywords: ["medical", "medical center", "health center", "clinic", "healthcare", "first aid"],
        question: "Is there any medical center in the university?",
        answer: "Yes, EWU has a Medical Center to provide basic healthcare and first aid to students, faculty, and staff.",
        category: "General",
        related: ["Where is EWU located?", "Is there a hostel facility?"]
    },
    {
        keywords: ["hostel", "dormitory", "accommodation", "dorm", "student housing", "mess"],
        question: "Does the university offer on-campus or affiliated dormitory/hostel accommodation?",
        answer: "East West University does not strictly offer on-campus dormitories, but there are many student messes and hostels available nearby in the Aftabnagar residential area.",
        category: "General",
        related: ["Where is EWU located?", "Is there a medical center?"]
    },
    {
        keywords: ["notable alumni", "famous alumni", "alumni", "where alumni work", "successful graduates"],
        question: "Can you tell me about some notable EWU alumni?",
        answer: "Our CSE alumni are working globally at Google, Microsoft, Amazon, Two Sigma, and locally at top telecom companies like Grameenphone and Robi. Many are also pursuing PhDs in the USA, Canada, and Europe.",
        category: "General",
        related: ["Why should I get admitted into EWU?", "What are the research areas?"]
    },

    // --- Contact & Identity ---
    {
        keywords: ["registrar", "registrar office", "contact registrar", "registrar email"],
        question: "How can I contact the registrar's office?",
        answer: "You can contact the Registrar's office via the university information desk at 09666775577 or email info@ewubd.edu. For CSE administrative issues, you can also contact the Assistant Registrar at habib27@ewubd.edu.",
        category: "General",
        related: ["What is the CSE helpdesk email?", "What is the Chairperson's email?"]
    },
    {
        keywords: ["helpdesk", "cse helpdesk", "helpdesk email", "student help", "cse email"],
        question: "Give me the email of the CSE department helpdesk.",
        answer: "The CSE Student Help Desk email is: helpdesk-cse@ewubd.edu",
        category: "General",
        related: ["How can I contact the registrar?", "What is the Chairperson's email?"]
    },
    {
        keywords: ["events", "happening", "seminars", "workshops", "contests", "this month"],
        question: "Are there any events happening this month?",
        answer: "Please check the Notice Board on the official website or the CSE Department office for the latest schedule of seminars, workshops, and contests.",
        category: "General",
        related: ["Does the robotics club hold workshops?", "Was there a seminar on Telecom?"]
    },

    // --- Part 1: General Department Information ---
    {
        keywords: ["chairperson", "who", "name", "head"],
        question: "Who is the Chairperson of CSE?",
        answer: "The Department Chairperson is Dr. Maheen Islam.",
        category: "General",
        related: ["What is the Chairperson's email?", "What is the Chairperson's phone number?"]
    },
    {
        keywords: ["chairperson", "email", "contact"],
        question: "What is the Chairperson's email?",
        answer: "You can reach Dr. Maheen Islam at maheen@ewubd.edu.",
        category: "General",
        related: ["Who is the Chairperson of CSE?", "What is the Chairperson's phone number?"]
    },
    {
        keywords: ["chairperson", "phone", "number"],
        question: "What is the Chairperson's phone number?",
        answer: "The number is 09666775577, Ext – 221.",
        category: "General",
        related: ["Who is the Chairperson of CSE?", "What is the Chairperson's email?"]
    },
    {
        keywords: ["department", "location", "address", "where"],
        question: "Where is the CSE department located?",
        answer: "It is located at A/2, Jahurul Islam Avenue, Jahurul Islam City, Aftabnagar, Dhaka-1212.",
        category: "General",
        related: ["What is the CSE office room number?", "When was the CSE department founded?"]
    },
    {
        keywords: ["office", "room", "contact"],
        question: "What is the CSE office room number?",
        answer: "The office is in Room No# 648. Extension: 395.",
        category: "General",
        related: ["Where is the CSE department located?", "Who is the contact for general admin?"]
    },
    {
        keywords: ["history", "founded", "established"],
        question: "When was the CSE department founded?",
        answer: "The CSE Department at EWU was founded in 1996.",
        category: "General",
        related: ["How many students are in the CSE department?", "What is the vision of the CSE department?"]
    },
    {
        keywords: ["students", "how many", "total"],
        question: "How many students are in the CSE department?",
        answer: "The department has about 1200 students.",
        category: "General",
        related: ["How many faculty members are there?", "Where do EWU CSE alumni work?"]
    },
    {
        keywords: ["faculty", "how many", "total"],
        question: "How many faculty members are there?",
        answer: "There are 59 faculty members (Faculty Members & Lecturers) in the department. This includes 25 PhD holders and 34 senior lecturers and lecturers.",
        category: "General",
        related: ["Who is the Chairperson of CSE?", "Show me the faculty list"]
    },
    {
        keywords: ["accreditation", "baete", "ieb"],
        question: "Is the CSE program accredited?",
        answer: "Yes, the B.Sc. in CSE program is accredited by BAETE (IEB).",
        category: "General",
        related: ["Can graduates become IEB members?", "What programs does the department offer?"]
    },
    {
        keywords: ["vision", "statement"],
        question: "What is the vision of the CSE department?",
        answer: "To be internationally renowned in CSE and exalt excellence in education, research, and industrial profession.",
        category: "General",
        related: ["What is the mission of the CSE department?", "What are the Program Educational Objectives?"]
    },
    {
        keywords: ["mission", "statement"],
        question: "What is the mission of the CSE department?",
        answer: "The mission includes advancing knowledge, sustaining an outstanding hub for teaching/research, and enhancing student quality for industrial requirements.",
        category: "General",
        related: ["What is the vision of the CSE department?", "What are the Program Educational Objectives?"]
    },
    {
        keywords: ["alumni", "work", "jobs", "career"],
        question: "Where do EWU CSE alumni work?",
        answer: "Alumni work at Google, Microsoft, NVIDIA, Two Sigma, Grameenphone, Robi, and various other local and global companies.",
        category: "General",
        related: ["Do alumni go abroad for higher studies?", "Is the CSE program accredited?"]
    },
    {
        keywords: ["alumni", "higher study", "abroad"],
        question: "Do alumni go abroad for higher studies?",
        answer: "Yes, over 100 students have completed post-grad studies in USA, UK, Canada, Germany, Australia, etc.",
        category: "General",
        related: ["Where do EWU CSE alumni work?", "What programs does the department offer?"]
    },
    {
        keywords: ["programs", "offered", "degrees"],
        question: "What programs does the department offer?",
        answer: "We offer B.S. in Computer Science and Engineering and M.Sc. in Computer Science and Engineering.",
        category: "General",
        related: ["What are the total credits for B.Sc. CSE?", "What are requirements for MS admission?"]
    },
    {
        keywords: ["certificate", "permanent", "ministry"],
        question: "Does EWU have a permanent certificate?",
        answer: "Yes, EWU is one of the few private universities with a Permanent Certificate from the Ministry of Education.",
        category: "General",
        related: ["Is the CSE program accredited?", "When was the CSE department founded?"]
    },
    {
        keywords: ["admin", "contact", "general"],
        question: "Who is the contact for general admin?",
        answer: "You can contact Dr. Mohammad Salah Uddin (uddin@ewubd.edu, Ext 395).",
        category: "General",
        related: ["Who is the Assistant Registrar?", "Who is the Senior Departmental Officer?"]
    },
    {
        keywords: ["registrar", "assistant", "contact"],
        question: "Who is the Assistant Registrar?",
        answer: "Sk. Habibur Rahman (Ext: 206, Email: habib27@ewubd.edu).",
        category: "General",
        related: ["Who is the contact for general admin?", "Who is the Senior Departmental Officer?"]
    },
    {
        keywords: ["departmental officer", "contact", "officer"],
        question: "Who is the Senior Departmental Officer?",
        answer: "Ahsan Ahmed (Ext: 219, Email: ahsan.ahmed@ewubd.edu).",
        category: "General",
        related: ["Who is the Assistant Registrar?", "Who is the contact for general admin?"]
    },
    {
        keywords: ["ieb", "membership"],
        question: "Can graduates become IEB members?",
        answer: "Yes, our CSE graduates are eligible to become members of IEB.",
        category: "General",
        related: ["Is the CSE program accredited?", "What are the Program Educational Objectives?"]
    },
    {
        keywords: ["peo", "objectives"],
        question: "What are the Program Educational Objectives?",
        answer: "Graduates will establish themselves as professionals, engage in lifelong learning, and contribute to sustainable development.",
        category: "General",
        related: ["What is the vision of the CSE department?", "Is the CSE program accredited?"]
    },
    {
        keywords: ["contact", "info", "contact info", "phone", "email", "address", "location", "department contact"],
        question: "Contact Info",
        answer: "<strong>East West University CSE Department:</strong><br><br><strong>Address:</strong> A/2, Jahurul Islam Avenue, Aftabnagar, Dhaka-1212<br><br><strong>Phone:</strong> 09666775577 (Extension: 206)<br><br><strong>General Email:</strong> cse@ewubd.edu<br><br><strong>Student Help Desk:</strong> helpdesk-cse@ewubd.edu<br><br><strong>Chairperson:</strong> Dr. Maheen Islam (maheen@ewubd.edu)<br><br><strong>Office Contact:</strong> Sk. Habibur Rahman (habib27@ewubd.edu)",
        category: "General",
        related: []
    },
    {
        keywords: ["faculty", "list", "show", "all faculty", "professors"],
        question: "Show me the faculty list",
        answer: "<strong>EWU CSE Faculty (Complete List)</strong><br><br>• Dr. Md. Mozammel Huq Azad Khan<br>• Dr. Shamim H Ripon<br>• Dr. Md. Nawab Yousuf Ali<br>• Dr. Ahmed Wasif Reza<br>• Dr. Taskeed Jabid<br>• Dr. Maheen Islam<br>• Dr. Mohammad Rezwanul Huq<br>• Dr. Anisur Rahman<br>• Dr. Anup Kumar Paul<br>• Dr. Sarwar Jahan<br>• Dr. Mohammad Salah Uddin<br>• Dr. Md Sawkat Ali<br>• Dr. Raihan Ul Islam<br>• Dr. Md Mostofa Kamal Rasel<br>• Dr. Mohammad Rifat Ahmmad Rashid<br>• Dr. Mohammad Manzurul Islam<br>• Dr. Md. Hasanul Ferdaus<br>• Dr. Hasan Mahmood Aminul Islam<br>• Dr. Md. Atiqur Rahman<br>• Dr. Md. Tauhid Bin Iqbal<br>• Dr. Tania Sultana<br>• Dr. Farhana Huq<br>• Dr. Nafis Sadeq<br>• Dr. Hosney Jahan<br>• Dr. Zubaer Ibna Mannan<br>• Sadia Nowrin<br>• Kowshika Sarker<br>• Muhit Islam Emon<br>• Yeasir Rayhan<br>• Mostofa Rafid Uddin<br>• Md. Mahir Ashhab<br>• Sadika Islam Sneha<br>• Md. Khalid Mahbub Khan<br>• Amit Mandal<br>• Nishat Tasnim Niloy<br>• Mahmuda Rawnak Jahan<br>• Ahmed Abdal Shafi Rasel<br>• Sadia Nur Amin<br>• Fouzia Risdin<br>• Md. Arman Hossain<br>• Puja Chakraborty<br>• Khairum Islam<br>• Nishat Tasnim<br>• Md. Ashraful Haider Chowdhury<br>• Md. Asif Khan Rifat<br>• Md Sabbir Hossain<br>• Yasin Sazid<br>• Rabea Khatun<br>• Shatabdi Roy Moon<br>• Sanzana Karim Lora<br>• Mahmudul Islam Rakib<br>• K. M. Safin Kamal<br>• Md. Adnan Morshed<br>• Asraf Ullah Rahat<br>• Antu Chowdhury<br>• Tahsin Tariq Banna<br>• Muhammed Yaseen Morshed Adib<br>• Nahid Hasan<br>• Syed Jamiul Alam<br><br>For more details about any faculty member, ask 'Who is [faculty name]?'",
        category: "Faculty",
        related: ["Who is the Chairperson of CSE?", "How many faculty members are there?"]
    },
    {
        keywords: ["salah uddin", "contact", "email", "office", "extension"],
        question: "How can I contact Dr. Mohammad Salah Uddin?",
        answer: "<strong>Dr. Mohammad Salah Uddin</strong><br>Email: uddin@ewubd.edu<br>Office: Room No# 648<br>Extension: 395",
        category: "Faculty",
        related: ["What is Dr. Mohammad Salah Uddin's research area?", "What is Dr. Mohammad Salah Uddin's academic background?"]
    },
    {
        keywords: ["salah uddin", "education", "academic", "background", "phd", "qualification"],
        question: "What is Dr. Mohammad Salah Uddin's academic background?",
        answer: "<strong>Dr. Mohammad Salah Uddin - Academic Background</strong><br>• Ph.D. in Engineering in Computer Science (Robotics) - Sapienza University of Rome, Italy (2017)<br>• B.Sc. in Computer Science and Engineering - East West University, Bangladesh (2012)",
        category: "Faculty",
        related: ["What is Dr. Mohammad Salah Uddin's research area?", "How can I contact Dr. Mohammad Salah Uddin?"]
    },
    {
        keywords: ["salah uddin", "research", "interests", "robotics", "iot"],
        question: "What is Dr. Mohammad Salah Uddin's research area?",
        answer: "<strong>Dr. Mohammad Salah Uddin - Research Interests</strong><br>• Heterogeneous Robotics Systems<br>• Task Planning/Allocation for Multi-Robotics Systems<br>• IoT-Robotics<br>• Sensors and Systems<br>• Embedded Systems<br>• Internet of Things<br>• Computer Vision<br><br>He is an IEEE Robotics and Automation Society member with professional IEEE membership.",
        category: "Faculty",
        related: ["What is Dr. Mohammad Salah Uddin's academic background?", "Tell me about Dr. Mohammad Salah Uddin's experience"]
    },
    {
        keywords: ["salah uddin", "experience", "career", "teaching", "professor"],
        question: "Tell me about Dr. Mohammad Salah Uddin's experience",
        answer: "<strong>Dr. Mohammad Salah Uddin - Experience</strong><br><br><strong>Teaching:</strong><br>• Associate Professor, East West University (Feb 2023 - Present)<br>• Assistant Professor, East West University (Jan 2018 - Jan 2023)<br>• Researcher, Sapienza University of Rome (Tradr - European Project)<br>• Delivered speech at Maker Faire Shenzhen 2018<br><br><strong>Previous Roles:</strong><br>• Research Associate, Sapienza University of Rome, Italy (May 2017 - Aug 2017)<br>• Lecturer, Central Women's University, Bangladesh (May 2013 - Sep 2013)<br>• IT Adviser & System Engineer roles (2004-2013)",
        category: "Faculty",
        related: ["What is Dr. Mohammad Salah Uddin's research area?", "How can I contact Dr. Mohammad Salah Uddin?"]
    },
    {
        keywords: ["mozammel", "huq azad khan", "mhakhan", "contact", "email"],
        question: "How can I contact Dr. Md. Mozammel Huq Azad Khan?",
        answer: "<strong>Dr. Md. Mozammel Huq Azad Khan</strong><br>Email: mhakhan@ewubd.edu<br>Office: Room 641<br>Extension: 216<br><br><strong>Research Focus:</strong> VLSI & Quantum Computing<br>• Reversible logic • Quantum logic • Multiple-valued logic • Evolutionary algorithms • Graph problems",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["shamim", "ripon", "dshr", "contact", "email"],
        question: "How can I contact Dr. Shamim H Ripon?",
        answer: "<strong>Dr. Shamim H Ripon</strong><br>Email: dshr@ewubd.edu<br>Office: Room 647<br>Extension: 262<br><br><strong>Research Focus:</strong> Software Engineering<br>• Model-driven engineering • Software product lines • Bioinformatics • Data analytics • Natural Language Processing (NLP)",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["nawab", "yousuf ali", "contact", "email"],
        question: "How can I contact Dr. Md. Nawab Yousuf Ali?",
        answer: "<strong>Dr. Md. Nawab Yousuf Ali</strong><br>Email: nawab@ewubd.edu<br>Office: Room 644<br>Extension: 104<br><br><strong>Research Focus:</strong> AI & IoT<br>• Natural Language Processing (NLP) • Universal Networking Language (UNL) • Machine learning • Internet of Things (IoT) • Embedded systems",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["ahmed wasif", "reza", "wasif", "contact", "email"],
        question: "How can I contact Dr. Ahmed Wasif Reza?",
        answer: "<strong>Dr. Ahmed Wasif Reza</strong><br>Email: wasif@ewubd.edu<br>Office: MBA Office (1st Floor)<br>Extension: 394<br><br><strong>Research Focus:</strong> Wireless & Biomedical<br>• Wireless communications • Biomedical image processing • Bioinformatics • Optimization • Artificial Intelligence",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["taskeed", "jabid", "contact", "email"],
        question: "How can I contact Dr. Taskeed Jabid?",
        answer: "<strong>Dr. Taskeed Jabid</strong><br>Email: taskeed@ewubd.edu<br>Office: Room 642<br>Extension: 258<br><br><strong>Research Focus:</strong> Computer Vision<br>• Image processing • Pattern recognition • Facial image analysis • Texture analysis • Bioinformatics",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["maheen", "islam", "chairperson", "contact", "email"],
        question: "How can I contact Dr. Maheen Islam?",
        answer: "<strong>Dr. Maheen Islam</strong><br>Email: maheen@ewubd.edu<br>Office: Room 628<br>Extension: 221<br><br><strong>Research Focus:</strong> Networking<br>• Wireless Sensor Networks (WSN) • Computer networks • Distributed computing • Machine learning applications in networks",
        category: "Faculty",
        related: ["Who is the Chairperson of CSE?", "Show me the faculty list"]
    },
    {
        keywords: ["rezwanul", "huq", "mrhuq", "contact", "email"],
        question: "How can I contact Dr. Mohammad Rezwanul Huq?",
        answer: "<strong>Dr. Mohammad Rezwanul Huq</strong><br>Email: mrhuq@ewubd.edu<br>Office: Room 629<br>Extension: 372<br><br><strong>Research Focus:</strong> Data Science<br>• Data mining • Bioinformatics • Big data analysis • Database systems",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["anisur", "rahman", "anis", "contact", "email"],
        question: "How can I contact Dr. Anisur Rahman?",
        answer: "<strong>Dr. Anisur Rahman</strong><br>Email: anis@ewubd.edu<br>Office: Room 629<br>Extension: 256<br><br><strong>Research Focus:</strong> Wireless Communications<br>• Wireless sensor networks • Underwater wireless communication • Signal propagation • Localization/tracking",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["anup", "kumar paul", "anuppaul", "contact", "email"],
        question: "How can I contact Dr. Anup Kumar Paul?",
        answer: "<strong>Dr. Anup Kumar Paul</strong><br>Email: anuppaul@ewubd.edu<br>Extension: 117<br>Office: Please check with the department<br><br><strong>Research Focus:</strong> Network Systems<br>• Wireless networks • Deep learning in networking • Transport protocols • Mobile computing",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["sarwar", "jahan", "sjahan", "contact", "email"],
        question: "How can I contact Dr. Sarwar Jahan?",
        answer: "<strong>Dr. Sarwar Jahan</strong><br>Email: sjahan@ewubd.edu<br>Extension: 165<br>Office: Please check with the department<br><br><strong>Research Focus:</strong> Machine Learning<br>• Artificial Intelligence • Pattern recognition • Data analysis",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["sawkat", "ali", "alim", "contact", "email"],
        question: "How can I contact Dr. Md Sawkat Ali?",
        answer: "<strong>Dr. Md Sawkat Ali</strong><br>Email: alim@ewubd.edu<br>Office: Room 627<br>Extension: 154<br><br><strong>Research Focus:</strong> Intelligent Systems<br>• Machine learning • Internet of Things (IoT) • Power electronics • Microgrids • Control theory",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["raihan", "ul islam", "raihan.islam", "contact", "email"],
        question: "How can I contact Dr. Raihan Ul Islam?",
        answer: "<strong>Dr. Raihan Ul Islam</strong><br>Email: raihan.islam@ewubd.edu<br>Office: Room 256<br>Extension: 411<br><br><strong>Research Focus:</strong> Software & Systems<br>• Software engineering • Formal methods • Internet of Things (IoT) • Machine learning",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["mostofa", "kamal rasel", "mostofa.kamal", "contact", "email"],
        question: "How can I contact Dr. Md Mostofa Kamal Rasel?",
        answer: "<strong>Dr. Md Mostofa Kamal Rasel</strong><br>Email: mostofa.kamal@ewubd.edu<br>Extension: 351<br>Office: Please check with the department<br><br><strong>Research Focus:</strong> Data Engineering<br>• Graph mining • Data compression • Recommendation systems • Database management • SQL optimization",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["rifat", "ahmmad rashid", "rifat.rashid", "contact", "email"],
        question: "How can I contact Dr. Mohammad Rifat Ahmmad Rashid?",
        answer: "<strong>Dr. Mohammad Rifat Ahmmad Rashid</strong><br>Email: rifat.rashid@ewubd.edu<br>Office: Room 646<br><br><strong>Research Focus:</strong> Emerging Tech<br>• Computer vision • Natural Language Processing (NLP) • Blockchain technology • Semantic Web",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["manzurul", "islam", "mohammad.islam", "contact", "email"],
        question: "How can I contact Dr. Mohammad Manzurul Islam?",
        answer: "<strong>Dr. Mohammad Manzurul Islam</strong><br>Email: mohammad.islam@ewubd.edu<br>Office: Room 443<br>Extension: 469<br><br><strong>Research Focus:</strong> Cybersecurity & AI<br>• Artificial Intelligence • Cloud computing • Network security • Internet of Things (IoT) • Blockchain",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["hasanul", "ferdaus", "hasanul.ferdaus", "contact", "email"],
        question: "How can I contact Dr. Md. Hasanul Ferdaus?",
        answer: "<strong>Dr. Md. Hasanul Ferdaus</strong><br>Email: hasanul.ferdaus@ewubd.edu<br>Office: Room 367<br>Extension: 512<br><br><strong>Research Focus:</strong> Cloud & Security<br>• Cloud computing • Cybersecurity • Blockchain • IoT • Artificial Intelligence",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["hasan mahmood", "aminul islam", "hasan.mahmood", "contact", "email"],
        question: "How can I contact Dr. Hasan Mahmood Aminul Islam?",
        answer: "<strong>Dr. Hasan Mahmood Aminul Islam</strong><br>Email: hasan.mahmood@ewubd.edu<br>Office: Room 257<br>Extension: 511<br><br><strong>Research Focus:</strong> Network Architecture<br>• Future internet architecture • Distributed systems • Data communication protocols • Embedded systems",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["atiqur", "rahman", "atiqur.rahman", "contact", "email"],
        question: "How can I contact Dr. Md. Atiqur Rahman?",
        answer: "<strong>Dr. Md. Atiqur Rahman</strong><br>Email: atiqur.rahman@ewubd.edu<br>Office: Room 260<br>Extension: 370<br><br><strong>Research Focus:</strong> AI & Imaging<br>• Machine learning • Deep learning • Image compression • Intelligent systems",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["tauhid", "bin iqbal", "tauhid.iqbal", "contact", "email"],
        question: "How can I contact Dr. Md. Tauhid Bin Iqbal?",
        answer: "<strong>Dr. Md. Tauhid Bin Iqbal</strong><br>Email: tauhid.iqbal@ewubd.edu<br>Office: Room 259<br><br><strong>Research Focus:</strong> Medical AI<br>• Medical artificial intelligence • Deep biometric analysis • Explainable AI (XAI) • Image processing",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["tania", "sultana", "tania.sultana", "contact", "email"],
        question: "How can I contact Dr. Tania Sultana?",
        answer: "<strong>Dr. Tania Sultana</strong><br>Email: tania.sultana@ewubd.edu<br>Office: Room 258<br><br><strong>Research Focus:</strong> Environmental Science<br>• Water Quality • Oceanography<br><br><em>Note: Affiliated with Faculty of Sciences</em>",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["farhana", "huq", "farhana.huq", "contact", "email"],
        question: "How can I contact Dr. Farhana Huq?",
        answer: "<strong>Dr. Farhana Huq</strong><br>Email: farhana.huq@ewubd.edu<br>Office: Please check with the department<br><br><strong>Research Focus:</strong> Mobile Computing<br>• Wireless communication • IoT for healthcare • Mobile crowdsourcing systems • Optimization",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["nafis", "sadeq", "nafis.sadeq", "contact", "email"],
        question: "How can I contact Dr. Nafis Sadeq?",
        answer: "<strong>Dr. Nafis Sadeq</strong><br>Email: nafis.sadeq@ewubd.edu<br>Office: Room AB1-703<br><br><strong>Research Focus:</strong> NLP & AI<br>• Natural Language Processing (NLP) • Recommender systems • Large Language Models (LLMs) • Conversational AI",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["hosney", "jahan", "hosney.jahan", "contact", "email"],
        question: "How can I contact Dr. Hosney Jahan?",
        answer: "<strong>Dr. Hosney Jahan</strong><br>Email: hosney.jahan@ewubd.edu<br>Office: Room 636<br>Extension: 429<br><br><strong>Research Focus:</strong> Software Quality<br>• Software testing • Machine learning • Deep learning • Formal methods",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },
    {
        keywords: ["zubaer", "ibna mannan", "zubaer.mannan", "contact", "email"],
        question: "How can I contact Dr. Zubaer Ibna Mannan?",
        answer: "<strong>Dr. Zubaer Ibna Mannan</strong><br>Email: zubaer.mannan@ewubd.edu<br>Office: Room AB1-703<br><br><strong>Research Focus:</strong> Neuromorphic Computing<br>• Memristive systems • Neuromorphic circuits • Machine learning • Bio-synaptic plasticity",
        category: "Faculty",
        related: ["Show me the faculty list", "Who is the Chairperson of CSE?"]
    },

    // --- Part 2: Undergraduate Curriculum & Courses ---
    {
        keywords: ["bsc", "b.sc", "program", "bachelor", "undergraduate", "cse", "about"],
        question: "What is the B.Sc. in CSE program?",
        answer: "B.Sc. in Computer Science & Engineering (CSE) at EWU is a 4-year undergraduate program that provides a strong foundation in programming, algorithms, data structures, databases, networking, and software engineering. It includes general education, math, science courses, and a capstone project. Students can choose specializations like AI, Data Science, or Software Engineering. The program is BAETE-accredited, offers merit scholarships, and prepares graduates for industry, research, or entrepreneurship.",
        category: "Undergraduate",
        related: ["What are the total credits for B.Sc. CSE?", "What major areas are available?"]
    },
    {
        keywords: ["credits", "total", "bsc", "b.sc", "requirement"],
        question: "What are the total credits for B.Sc. CSE?",
        answer: "The B.Sc. in Computer Science and Engineering (CSE) program at East West University requires a total of 140 credits to graduate.",
        category: "Undergraduate",
        related: ["How are credits distributed?", "What major areas are available?"]
    },
    {
        keywords: ["major", "areas", "specialization"],
        question: "What major areas are available?",
        answer: "1. Intelligent Systems & Data Science, 2. Software Engineering, 3. Communications & Networking, 4. Hardware Engineering.",
        category: "Undergraduate",
        related: ["What courses are in Intelligent Systems?", "What courses are in Software Engineering major?"]
    },
    {
        keywords: ["grading", "credits", "structure", "distribution", "distributed"],
        question: "How are credits distributed?",
        answer: "The 140-credit degree centers on 62 Core CSE and 6 Capstone credits. The remaining requirements include 26 credits in Math/Science, 18 in General Education, 20 for Major Tracks, and 8 for Non-Major electives.",
        category: "Undergraduate",
        related: ["What are the total credits for B.Sc. CSE?", "What is the Capstone Project?"]
    },
    {
        keywords: ["intelligent systems", "courses"],
        question: "What courses are in Intelligent Systems?",
        answer: "AI, Computer Graphics, Image Processing, Computer Vision, Machine Learning, Data Mining, etc.",
        category: "Undergraduate",
        related: ["What major areas are available?", "What is CSE366?"]
    },
    {
        keywords: ["software engineering", "courses", "major"],
        question: "What courses are in Software Engineering major?",
        answer: "Software Engineering, Testing/QA, Architecture, HCI, Web Programming, Mobile Programming.",
        category: "Undergraduate",
        related: ["What major areas are available?", "What is CSE412?"]
    },
    {
        keywords: ["networking", "courses", "major"],
        question: "What courses are in Networking major?",
        answer: "Data Communications, Wireless Networks, Cellular Networks, Network Security.",
        category: "Undergraduate",
        related: ["What major areas are available?", "What is CSE405?"]
    },
    {
        keywords: ["hardware", "courses", "major"],
        question: "What courses are in Hardware Engineering major?",
        answer: "Digital System Design, Microprocessors, IoT, VLSI Design, Robotics.",
        category: "Undergraduate",
        related: ["What major areas are available?", "What is CSE442?"]
    },
    {
        keywords: ["flow", "1st semester", "first semester"],
        question: "What courses are in the 1st semester?",
        answer: "ENG101, MAT101, CSE103, CSE106.",
        category: "Undergraduate",
        related: ["What is CSE103?", "What courses are in the 2nd semester?"]
    },
    {
        keywords: ["flow", "2nd semester", "second semester"],
        question: "What courses are in the 2nd semester?",
        answer: "ENG102, MAT102, CSE110, CHE109.",
        category: "Undergraduate",
        related: ["What courses are in the 1st semester?", "What courses are in the 3rd semester?"]
    },
    {
        keywords: ["flow", "3rd semester", "third semester"],
        question: "What courses are in the 3rd semester?",
        answer: "PHY109, MAT104, CSE207, CSE200.",
        category: "Undergraduate",
        related: ["What courses are in the 2nd semester?", "What courses are in the 4th semester?"]
    },
    {
        keywords: ["flow", "4th semester", "fourth semester"],
        question: "What courses are in the 4th semester?",
        answer: "PHY209, CSE209, STA102, CSE246.",
        category: "Undergraduate",
        related: ["What courses are in the 3rd semester?", "What is CSE246?"]
    },
    {
        keywords: ["non-major", "elective"],
        question: "What are non-major electives?",
        answer: "Courses like Numerical Methods, Theory of Computation, Cryptography, Compiler Design.",
        category: "Undergraduate",
        related: ["What major areas are available?", "What is CSE460?"]
    },

    // --- Part 3: Graduate (M.Sc.) Program ---
    {
        keywords: ["m.sc", "m.sc.", "ms", "m.s", "m.s.", "admission", "requirements"],
        question: "What are requirements for MS admission?",
        answer: "4-year Bachelor degree in CSE/CS/related field, Min CGPA 2.5, and HSC from Science group.",
        category: "Graduate",
        related: ["Is there an admission test for M.Sc.?", "What is the total cost for M.Sc.?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "ms", "tracks", "specialization", "study"],
        question: "What tracks are available for M.Sc.?",
        answer: "The MS in CSE offers four specialization tracks: Software Engineering, Data Science, Networking, and Systems Engineering. Additionally, you must choose between a Thesis Track (best for research) or a Project Track (best for industry application) to complete the degree.",
        category: "Graduate",
        related: ["How are credits divided in Thesis Track?", "How are credits divided in Project Track?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "program", "graduate", "masters", "about", "overview"],
        question: "What is the M.Sc. in CSE program?",
        answer: "The M.Sc. in CSE at East West University is a 33-credit, 1-year program offering specializations in Software Engineering, Data Science, Networking, and Systems. Designed for graduates with a minimum CGPA of 2.50 in related fields, the curriculum offers both Thesis and Project tracks with a total estimated cost of approximately 210,000 BDT.",
        category: "Graduate",
        related: ["What is the total cost for M.Sc.?", "What tracks are available for M.Sc.?"]
    },
    {
        keywords: ["duration", "length", "time", "years", "semesters", "limit"],
        question: "How long is the M.Sc. program?",
        answer: "3 semesters (one year) minimum, up to 5 years maximum.",
        category: "Graduate",
        related: ["What is the M.Sc. in CSE program?", "How many credits for M.Sc. degree?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "ms", "cost", "total", "fee"],
        question: "What is the total cost for M.Sc.?",
        answer: "The total estimated cost for the MS in CSE at East West University is approximately 209,000 - 240,000 BDT. This amount is calculated based on a standard 40-credit load and includes a one-time admission fee of 20,000 BDT, tuition fees of 4,500 BDT per credit (totaling 180,000 BDT), and 9,000 BDT for lab and student activity fees.",
        category: "Graduate",
        related: ["What is the per credit fee for M.Sc.?", "What is the admission fee for M.Sc.?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "ms", "credit", "fee", "tuition"],
        question: "What is the per credit fee for M.Sc.?",
        answer: "Tk. 4,500 per credit.",
        category: "Graduate",
        related: ["What is the total cost for M.Sc.?", "What is the admission fee for M.Sc.?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "ms", "admission fee", "cost"],
        question: "What is the admission fee for M.Sc.?",
        answer: "The Admission Fee for the MS in CSE at East West University is 20,000 BDT (non-refundable).",
        category: "Graduate",
        related: ["What is the total cost for M.Sc.?", "What is the per credit fee for M.Sc.?"]
    },
    {
        keywords: ["ms", "major areas"],
        question: "What majors are available in M.Sc.?",
        answer: "Data Science, Software Engineering, Networking, Systems Engineering.",
        category: "Graduate",
        related: ["What tracks are available for M.Sc.?", "Can I change my M.Sc. major?"]
    },
    {
        keywords: ["m.sc", "m.sc.", "ms", "m.s", "m.s.", "degree requirement", "credits"],
        question: "How many credits for M.Sc. degree?",
        answer: "At least 33 credits with minimum CGPA 2.5.",
        category: "Graduate",
        related: ["What tracks are available for M.Sc.?", "What is the total cost for M.Sc.?"]
    },
    {
        keywords: ["thesis track", "credits"],
        question: "How are credits divided in Thesis Track?",
        answer: "33 Total: 9 Compulsory, 6 Major Compulsory, 9 Elective, 9 Thesis.",
        category: "Graduate",
        related: ["How are credits divided in Project Track?", "How many credits is the Master Thesis?"]
    },
    {
        keywords: ["project track", "credits"],
        question: "How are credits divided in Project Track?",
        answer: "33 Total: 9 Compulsory, 6 Major Compulsory, 15 Elective, 3 Project.",
        category: "Graduate",
        related: ["How are credits divided in Thesis Track?", "How many credits is the Master Project?"]
    },
    {
        keywords: ["cse599", "master thesis"],
        question: "How many credits is the Master Thesis?",
        answer: "CSE599 Master Thesis is 9 credits.",
        category: "Graduate",
        related: ["How many credits is the Master Project?", "How are credits divided in Thesis Track?"]
    },
    {
        keywords: ["cse597", "master project"],
        question: "How many credits is the Master Project?",
        answer: "CSE597 Master Project is 3 credits.",
        category: "Graduate",
        related: ["How many credits is the Master Thesis?", "How are credits divided in Project Track?"]
    },
    {
        keywords: ["admission test", "m.sc", "ms"],
        question: "Is there an admission test for M.Sc.?",
        answer: "Yes, candidates must pass an admission test administered by the university.",
        category: "Graduate",
        related: ["What are requirements for M.Sc. admission?", "What is the admission fee for M.Sc.?"]
    },
    {
        keywords: ["change track", "m.sc", "ms"],
        question: "Can I change my M.Sc. track?",
        answer: "Yes, with permission from the Chairperson during the progress of the program.",
        category: "Graduate",
        related: ["Can I change my M.Sc. major?", "What tracks are available for M.Sc.?"]
    },
    {
        keywords: ["change major", "m.sc", "ms"],
        question: "Can I change my M.Sc. major?",
        answer: "Yes, before the start of the second semester with Chairperson permission.",
        category: "Graduate",
        related: ["Can I change my M.Sc. track?", "What majors are available in M.Sc.?"]
    },

    // --- Part 4: Fees & Scholarships ---
    {
        keywords: ["tuition", "bsc", "cost"],
        question: "What is the tuition for B.Sc.?",
        answer: "Tk. 6,500 per credit. Total approx Tk. 1,003,400 (140 credits).",
        category: "Fees & Scholarships",
        related: ["What is the admission fee for Undergraduate?", "What is the lab fee?"]
    },
    {
        keywords: ["admission fee", "bsc"],
        question: "What is the admission fee for Undergraduate?",
        answer: "Tk. 25,000 (Non-Refundable).",
        category: "Fees & Scholarships",
        related: ["What is the tuition for B.Sc.?", "How much is the application form?"]
    },
    {
        keywords: ["lab fee", "semester"],
        question: "What is the lab fee?",
        answer: "Tk. 4,000 per semester for CSE.",
        category: "Fees & Scholarships",
        related: ["What is the student activity fee?", "What is the tuition for B.Sc.?"]
    },
    {
        keywords: ["activity fee"],
        question: "What is the student activity fee?",
        answer: "Tk. 1,200 per semester.",
        category: "Fees & Scholarships",
        related: ["What is the lab fee?", "What is the tuition for B.Sc.?"]
    },
    {
        keywords: ["application form", "cost"],
        question: "How much is the application form?",
        answer: "Tk. 1,500.",
        category: "Fees & Scholarships",
        related: ["What is the admission fee for Undergraduate?", "What is the tuition for B.Sc.?"]
    },
    {
        keywords: ["scholarship", "types"],
        question: "What types of scholarships are available?",
        answer: "<strong>Merit Scholarship:</strong> Awarded for academic excellence.<br>• <em>Entry:</em> 50–100% waiver for GPA 5.00 (HSC/SSC) or high O/A Levels.<br>• <em>Ongoing:</em> Top 10% of students (CGPA 3.90+) get full tuition waivers.<br><br><strong>Freedom Fighter Scholarship:</strong> 100% tuition waiver for wards of Freedom Fighters (3% quota); requires maintaining a CGPA of 2.60.<br><br><strong>Financial Assistance:</strong> Need-based aid for students facing financial hardship. Requires maintaining a minimum CGPA of 2.60 (Undergraduate) or 2.80 (Graduate).<br><br><strong>Medha Lalon Fund:</strong> A scholarship fund for high achievers with a CGPA of 3.50–3.74. It typically awards ~45,000–51,000 BDT/year.<br><br><strong>Dean’s List:</strong><br>• <em>Honor:</em> Certificate awarded for maintaining a CGPA of 3.50+ with a full course load.<br>• <em>Scholarship:</em> A CGPA of 3.75–3.89 qualifies you for the Dean’s List Scholarship (partial waiver), while 3.90+ secures the full Merit Scholarship.<br><br><strong>Trustee’s Scholarship:</strong> Discretionary full or partial waivers awarded directly by members of the Board of Trustees.<br><br><strong>Sibling/Spouse Benefit:</strong> 50% waiver for the second sibling or spouse studying simultaneously (requires CGPA 2.60).",
        category: "Fees & Scholarships",
        related: ["What is the Freedom Fighter quota?", "Is there a sibling discount?"]
    },
    {
        keywords: ["merit scholarship", "criteria", "100%"],
        question: "Who gets 100% merit scholarship at entry?",
        answer: "Top admission scorers (75%+) or Golden GPA (A+ in all subjects including 4th) in SSC & HSC.",
        category: "Fees & Scholarships",
        related: ["What if I have GPA 5.00?", "What is the O/A Level scholarship?"]
    },
    {
        keywords: ["merit scholarship", "gpa 5"],
        question: "What if I have GPA 5.00?",
        answer: "Candidates with GPA 5.00 get 50% waiver for the first year.",
        category: "Fees & Scholarships",
        related: ["Who gets 100% merit scholarship at entry?", "What CGPA is needed to keep Merit Scholarship?"]
    },
    {
        keywords: ["scholarship", "o level", "a level"],
        question: "What is the O/A Level scholarship?",
        answer: "7 A's in O-level and 3 A's in A-level get 100% waiver.",
        category: "Fees & Scholarships",
        related: ["Who gets 100% merit scholarship at entry?", "What types of scholarships are available?"]
    },
    {
        keywords: ["freedom fighter", "quota"],
        question: "What is the Freedom Fighter quota?",
        answer: "3% admission quota and up to 100% tuition waiver.",
        category: "Fees & Scholarships",
        related: ["Is there a sibling discount?", "What types of scholarships are available?"]
    },
    {
        keywords: ["sibling", "waiver", "family"],
        question: "Is there a sibling discount?",
        answer: "Yes, 50% waiver for the second sibling/spouse studying simultaneously.",
        category: "Fees & Scholarships",
        related: ["Benefit for EWU employees?", "What types of scholarships are available?"]
    },
    {
        keywords: ["female", "scholarship"],
        question: "Are there scholarships for females?",
        answer: "Yes, the Medha Lalon Fund supports female students.",
        category: "Fees & Scholarships",
        related: ["How much is Medha Lalon Scholarship?", "Is there aid for poor students?"]
    },
    {
        keywords: ["financial aid", "poor"],
        question: "Is there aid for poor students?",
        answer: "Yes, Financial Assistance is available based on need-cum-merit (min CGPA 2.70 required).",
        category: "Fees & Scholarships",
        related: ["What is the District Scholarship?", "What types of scholarships are available?"]
    },
    {
        keywords: ["scholarship", "continuation", "cgpa"],
        question: "What CGPA is needed to keep Merit Scholarship?",
        answer: "Minimum CGPA of 3.50.",
        category: "Fees & Scholarships",
        related: ["What types of scholarships are available?", "How much is Dean's List Scholarship?"]
    },
    {
        keywords: ["district", "scholarship"],
        question: "What is the District Scholarship?",
        answer: "One poor/meritorious student from each district (GPA 5.00) gets Full Tuition + Lodging.",
        category: "Fees & Scholarships",
        related: ["Is there aid for poor students?", "What types of scholarships are available?"]
    },
    {
        keywords: ["ewu employee", "benefit"],
        question: "Benefit for EWU employees?",
        answer: "50% tuition waiver for children of EWU employees.",
        category: "Fees & Scholarships",
        related: ["Is there a sibling discount?", "What types of scholarships are available?"]
    },
    {
        keywords: ["medha lalon", "amount"],
        question: "How much is Medha Lalon Scholarship?",
        answer: "Tk. 45,000 to Tk. 51,000 per year depending on CGPA.",
        category: "Fees & Scholarships",
        related: ["Are there scholarships for females?", "How much is Dean's List Scholarship?"]
    },
    {
        keywords: ["dean's list", "amount"],
        question: "How much is Dean's List Scholarship?",
        answer: "Tk. 55,000 to Tk. 60,000 per year depending on CGPA.",
        category: "Fees & Scholarships",
        related: ["How much is Medha Lalon Scholarship?", "What CGPA is needed to keep Merit Scholarship?"]
    },
    {
        keywords: ["foreign student", "waiver"],
        question: "Do foreign students get a waiver?",
        answer: "Yes, foreign students receive a 50% tuition waiver.",
        category: "Fees & Scholarships",
        related: ["What types of scholarships are available?", "What is the tuition for B.Sc.?"]
    },
    {
        keywords: ["deferment fee"],
        question: "What is the deferment fee?",
        answer: "Tk. 7,000.",
        category: "Fees & Scholarships",
        related: ["What is the remedial course fee?", "What is the admission fee for Undergraduate?"]
    },
    {
        keywords: ["remedial course fee"],
        question: "What is the remedial course fee?",
        answer: "Tk. 5,500.",
        category: "Fees & Scholarships",
        related: ["What is the deferment fee?", "What is the admission fee for Undergraduate?"]
    },
    {
        keywords: ["document verification fee"],
        question: "Is there a document verification fee?",
        answer: "Yes, students pay for verification of previous academic documents if applicable.",
        category: "Fees & Scholarships",
        related: ["What is the admission fee for Undergraduate?", "How much is the application form?"]
    },

    // --- Part 5: Lab Facilities ---
    {
        keywords: ["labs", "list", "facilities"],
        question: "What labs does CSE have?",
        answer: "Electrical Circuits, Electronics, Switchgear, VLSI, Software Engineering, Digital Systems, Telecommunication, Networking, Physics.",
        category: "Lab Facilities",
        related: ["What is in the Software Engineering Lab?", "Who is the Lab Officer for AI Lab?"]
    },
    {
        keywords: ["electrical circuits lab", "equipment"],
        question: "What is in the Electrical Circuits Lab?",
        answer: "Lab-Volt systems, DC machines, transformers, induction motors, oscilloscopes.",
        category: "Lab Facilities",
        related: ["What is in the Electronics Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["electronics lab", "equipment"],
        question: "What is in the Electronics Lab?",
        answer: "Digital storage oscilloscopes, trainer boards, IC chips, MOSFETs, BJTs.",
        category: "Lab Facilities",
        related: ["What is in the Electrical Circuits Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["switchgear lab", "equipment"],
        question: "What is in the Switchgear Lab?",
        answer: "5 sets of ADVANTECH data acquisition cards, Siemens PLC (S7-1200).",
        category: "Lab Facilities",
        related: ["What is in the VLSI Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["vlsi lab", "software"],
        question: "What software is in the VLSI Lab?",
        answer: "ADS, MAGIC, HSPICE, ANSOFT, MATLAB, PSPICE.",
        category: "Lab Facilities",
        related: ["What hardware is in the VLSI Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["vlsi lab", "hardware"],
        question: "What hardware is in the VLSI Lab?",
        answer: "40+ dual core workstations and 2 servers.",
        category: "Lab Facilities",
        related: ["What software is in the VLSI Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["software engineering lab", "equipment"],
        question: "What is in the Software Engineering Lab?",
        answer: "HP Server, 30 Lenovo desktops, CISCO switches.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for SE Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["digital systems lab", "equipment"],
        question: "What is in the Digital Systems Lab?",
        answer: "Micro-controllers, FPGA hardware devices, interfacing adapters.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for Digital Systems Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["telecommunication lab", "equipment"],
        question: "What is in the Telecommunication Lab?",
        answer: "TIMS-301 system, microwave trainers, optical fiber trainers.",
        category: "Lab Facilities",
        related: ["What is in the Networking Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["networking lab", "equipment"],
        question: "What is in the Networking Lab?",
        answer: "High performance server, 20 work stations, routers, XDSL/VDSL/HDSL instruments.",
        category: "Lab Facilities",
        related: ["What is in the Telecommunication Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["pharmacy lab", "chemistry"],
        question: "Can CSE students use Pharmacy labs?",
        answer: "Yes, engineering students use them for chemistry courses.",
        category: "Lab Facilities",
        related: ["What labs does CSE have?", "What is in the Physics lab?"]
    },
    {
        keywords: ["physics lab", "dark room"],
        question: "Does the Physics lab have a dark room?",
        answer: "Yes, for carrying out optical experiments.",
        category: "Lab Facilities",
        related: ["What labs does CSE have?", "Can CSE students use Pharmacy labs?"]
    },
    {
        keywords: ["lab officer", "software engineering"],
        question: "Who is the Lab Officer for SE Lab?",
        answer: "Monirul Islam.",
        category: "Lab Facilities",
        related: ["What is in the Software Engineering Lab?", "Who is the Lab Officer for AI Lab?"]
    },
    {
        keywords: ["lab officer", "ai"],
        question: "Who is the Lab Officer for AI Lab?",
        answer: "Md. Ishtiak Chowdhury.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for Database Lab?", "Who is the Lab Officer for SE Lab?"]
    },
    {
        keywords: ["lab officer", "database"],
        question: "Who is the Lab Officer for Database Lab?",
        answer: "Md. Sohel Rana.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for AI Lab?", "Who is the Lab Officer for Digital Systems Lab?"]
    },
    {
        keywords: ["lab officer", "digital systems"],
        question: "Who is the Lab Officer for Digital Systems Lab?",
        answer: "Md. Shaif Anam.",
        category: "Lab Facilities",
        related: ["What is in the Digital Systems Lab?", "Who is the Lab Officer for Database Lab?"]
    },
    {
        keywords: ["lab officer", "big data"],
        question: "Who is the Lab Officer for Big Data Lab?",
        answer: "Md. Hasan Mahmud.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for Cyber Security Lab?", "Who is the Lab Officer for AI Lab?"]
    },
    {
        keywords: ["lab officer", "cyber security"],
        question: "Who is the Lab Officer for Cyber Security Lab?",
        answer: "Abu Sayem Arman.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for Big Data Lab?", "Who is the Lab Officer for VR Lab?"]
    },
    {
        keywords: ["lab officer", "vr"],
        question: "Who is the Lab Officer for VR Lab?",
        answer: "Abir Mridha.",
        category: "Lab Facilities",
        related: ["Who is the Lab Officer for Cyber Security Lab?", "What labs does CSE have?"]
    },
    {
        keywords: ["research areas", "topics"],
        question: "What are key research areas?",
        answer: "AI, Machine Learning, Healthcare, Data Analytics, IoT, Quantum Logic, Bioinformatics.",
        category: "Research",
        related: ["What healthcare research is happening?", "What IoT research is happening?"]
    },
    {
        keywords: ["research", "healthcare"],
        question: "What healthcare research is happening?",
        answer: "Detecting breast/pancreatic cancer, malaria, heart disease using Deep Learning/CNNs.",
        category: "Research",
        related: ["What are key research areas?", "What IoT research is happening?"]
    },
    {
        keywords: ["research", "iot"],
        question: "What IoT research is happening?",
        answer: "Microplastic detection, cropping pattern prediction, smart systems.",
        category: "Research",
        related: ["What are key research areas?", "What healthcare research is happening?"]
    },
    {
        keywords: ["publications", "journals"],
        question: "Where do faculty publish?",
        answer: "IEEE Access, IEEE Transactions on VLSI, Journal of Systems Architecture, etc.",
        category: "Research",
        related: ["Any recent best paper awards?", "What are key research areas?"]
    },
    {
        keywords: ["grants", "brain computer interface"],
        question: "Is there a BCI grant?",
        answer: "Yes, Prof. Dr. Shamim H. Ripon received a grant for a BCI Wheelchair project in 2025.",
        category: "Research",
        related: ["Any recent best paper awards?", "What are key research areas?"]
    },
    {
        keywords: ["awards", "best paper"],
        question: "Any recent best paper awards?",
        answer: "Yes, at ICDMIS 2025 (Dr. Ahmed Wasif Reza) and ICIDA 2024 (Students).",
        category: "Research",
        related: ["Where do faculty publish?", "Is there a BCI grant?"]
    },
    {
        keywords: ["robotics club", "workshop"],
        question: "Does the robotics club hold workshops?",
        answer: "Yes, e.g., 'Future Prospects in Cloud Computing' in May 2024.",
        category: "Student Life",
        related: ["Did CSE sign an MoU recently?", "When was the Summer 2025 programming contest?"]
    },
    {
        keywords: ["mou", "sustainability"],
        question: "Did CSE sign an MoU recently?",
        answer: "Yes, in July 2024 for a sustainable and eco-friendly campus.",
        category: "Student Life",
        related: ["Does the robotics club hold workshops?", "Was there a seminar on Telecom?"]
    },
    {
        keywords: ["seminar", "telecom"],
        question: "Was there a seminar on Telecom?",
        answer: "Yes, in March 2025 on 'Revolutionizing the Telecom Industry'.",
        category: "Student Life",
        related: ["Does the robotics club hold workshops?", "Did CSE sign an MoU recently?"]
    },
    {
        keywords: ["programming contest", "2025"],
        question: "When was the Summer 2025 programming contest?",
        answer: "August 8-9, 2025.",
        category: "Student Life",
        related: ["Does the robotics club hold workshops?", "Was there a seminar on Telecom?"]
    },
    {
        keywords: ["visiting fellow", "ahmed wasif reza"],
        question: "Is Dr. Ahmed Wasif Reza a visiting fellow?",
        answer: "Yes, appointed at University of Malaya in August 2025.",
        category: "Research",
        related: ["Any recent best paper awards?", "Who is Dr. Ahmed Wasif Reza?"]
    }
];

// Scholarship Donors List (Generated)
const SCHOLARSHIP_DONORS = [
    { name: "Sujat Ali Mazumder", sponsor: "Jalaluddin Ahmed" },
    { name: "Anjuman Ara Begum", sponsor: "Jalaluddin Ahmed" },
    { name: "S.M. Sahiruddin", sponsor: "S.M. Nousher Ali" },
    { name: "Rowshan Ara Begum", sponsor: "S.M. Nousher Ali" },
    { name: "Sofia Khatun", sponsor: "Farooque B. Chaudhury" },
    { name: "Lutful Bari Md. Munsur Chaudhury", sponsor: "Dr. Rafiqul Huda Chaudhury" },
    { name: "Sherifa Chowdhury", sponsor: "Syed Manzur Elahi" },
    { name: "M. Mahtabuddin", sponsor: "Prof. Dr. Mohammed Farashuddin" },
    { name: "Chamak Chand", sponsor: "Prof. Dr. Mohammed Farashuddin" },
    { name: "M. Sujat Ali", sponsor: "Mr. Mohammad Zahedul Haque" },
    { name: "Mujibur Rahman Lasker", sponsor: "Dr. Saidur Rahman Lasker" },
    { name: "Moulvi Muhammad Shamsher Ali", sponsor: "Dr. Muhammad Abdul Mannan" },
    { name: "Momena Khatun", sponsor: "Dr. Muhammad Abdul Mannan" },
    { name: "Abdul Kaher", sponsor: "Mr. M. A. Mumin" },
    { name: "Habiba Banu", sponsor: "Mr. M. A. Mumin" },
    { name: "Abdul Jabbar", sponsor: "Mrs. Razia Samad" },
    { name: "Abdus Samad", sponsor: "Mrs. Razia Samad" }
];

// Corporate Scholarships List (Generated)
const CORPORATE_SCHOLARSHIPS = [
    "Dutch-Bangla Bank", "Standard Chartered Bank", "Mercantile Bank",
    "Prime Bank", "Eastern Bank", "Mutual Trust Bank", "TM International"
];

// ============================================
// DATA GENERATORS (Force Multiplier)
// ============================================

// Faculty Data
const FACULTY_DATA = [
    // Professors
    { name: "Dr. Md. Mozammel Huq Azad Khan", designation: "Professor", keywords: ["mozammel huq"] },
    { name: "Dr. Shamim H Ripon", designation: "Professor", keywords: ["shamim h ripon"] },
    { name: "Dr. Md. Nawab Yousuf Ali", designation: "Professor", keywords: ["nawab yousuf ali"] },
    { name: "Dr. Ahmed Wasif Reza", designation: "Professor and Dean", keywords: ["ahmed wasif reza", "dean"] },
    { name: "Dr. Taskeed Jabid", designation: "Professor", keywords: ["taskeed jabid"] },

    // Associate Professors
    { name: "Dr. Maheen Islam", designation: "Chairperson and Associate Professor", keywords: ["maheen islam", "chairperson"] },
    { name: "Dr. Mohammad Rezwanul Huq", designation: "Associate Professor", keywords: ["rezwanul huq"] },
    { name: "Dr. Anisur Rahman", designation: "Associate Professor", keywords: ["anisur rahman"] },
    { name: "Dr. Anup Kumar Paul", designation: "Associate Professor and Proctor", keywords: ["anup kumar paul", "proctor"] },
    { name: "Dr. Sarwar Jahan", designation: "Associate Professor", keywords: ["sarwar jahan"] },
    { name: "Dr. Mohammad Salah Uddin", designation: "Associate Professor", keywords: ["salah uddin"] },
    { name: "Dr. Md Sawkat Ali", designation: "Associate Professor", keywords: ["sawkat ali"] },
    { name: "Dr. Raihan Ul Islam", designation: "Associate Professor", keywords: ["raihan ul islam"] },
    { name: "Dr. Md Mostofa Kamal Rasel", designation: "Associate Professor", keywords: ["mostofa kamal rasel"] },
    { name: "Dr. Mohammad Rifat Ahmmad Rashid", designation: "Associate Professor", keywords: ["rifat ahmmad rashid"] },

    // Assistant Professors
    { name: "Dr. Mohammad Manzurul Islam", designation: "Assistant Professor", keywords: ["manzurul islam"] },
    { name: "Dr. Md. Hasanul Ferdaus", designation: "Assistant Professor", keywords: ["hasanul ferdaus"] },
    { name: "Dr. Hasan Mahmood Aminul Islam", designation: "Assistant Professor", keywords: ["hasan mahmood aminul"] },
    { name: "Dr. Md. Atiqur Rahman", designation: "Assistant Professor", keywords: ["atiqur rahman"] },
    { name: "Dr. Md. Tauhid Bin Iqbal", designation: "Assistant Professor", keywords: ["tauhid bin iqbal"] },
    { name: "Dr. Tania Sultana", designation: "Assistant Professor", keywords: ["tania sultana"] },
    { name: "Dr. Farhana Huq", designation: "Assistant Professor", keywords: ["farhana huq"] },
    { name: "Dr. Nafis Sadeq", designation: "Assistant Professor", keywords: ["nafis sadeq"] },
    { name: "Dr. Hosney Jahan", designation: "Assistant Professor", keywords: ["hosney jahan"] },
    { name: "Dr. Zubaer Ibna Mannan", designation: "Assistant Professor", keywords: ["zubaer ibna mannan"] },

    // Senior Lecturers & Lecturers (Active)
    { name: "Rashedul Amin Tuhin", designation: "Senior Lecturer", keywords: ["rashedul amin tuhin"] },
    { name: "Tanni Mittra", designation: "Senior Lecturer", keywords: ["tanni mittra"] },
    { name: "M. Saddam Hossain Khan", designation: "Senior Lecturer", keywords: ["saddam hossain khan"] },
    { name: "Musharrat Khan", designation: "Senior Lecturer", keywords: ["musharrat khan"] },
    { name: "Mahamudul Hasan", designation: "Senior Lecturer", keywords: ["mahamudul hasan"] },
    { name: "Md. Mohsin Uddin", designation: "Senior Lecturer", keywords: ["mohsin uddin"] },
    { name: "Jesan Ahammed Ovi", designation: "Senior Lecturer", keywords: ["jesan ahammed ovi"] },
    { name: "Md Al-Imran", designation: "Senior Lecturer", keywords: ["al-imran"] },
    { name: "Md. Mahir Ashhab", designation: "Lecturer", keywords: ["mahir ashhab"] },
    { name: "Sadika Islam Sneha", designation: "Lecturer", keywords: ["sadika islam sneha"] },
    { name: "Md. Khalid Mahbub Khan", designation: "Lecturer", keywords: ["khalid mahbub khan"] },
    { name: "Amit Mandal", designation: "Lecturer", keywords: ["amit mandal"] },
    { name: "Nishat Tasnim Niloy", designation: "Lecturer", keywords: ["nishat tasnim niloy"] },
    { name: "Mahmuda Rawnak Jahan", designation: "Lecturer", keywords: ["mahmuda rawnak jahan"] },
    { name: "Ahmed Abdal Shafi Rasel", designation: "Lecturer", keywords: ["ahmed abdal shafi rasel"] },
    { name: "Sadia Nur Amin", designation: "Lecturer", keywords: ["sadia nur amin"] },
    { name: "Fouzia Risdin", designation: "Lecturer", keywords: ["fouzia risdin"] },
    { name: "Md. Arman Hossain", designation: "Lecturer", keywords: ["arman hossain"] },
    { name: "Puja Chakraborty", designation: "Lecturer", keywords: ["puja chakraborty"] },
    { name: "Khairum Islam", designation: "Lecturer", keywords: ["khairum islam"] },
    { name: "Nishat Tasnim", designation: "Lecturer", keywords: ["nishat tasnim"] },
    { name: "Md. Ashraful Haider Chowdhury", designation: "Lecturer", keywords: ["ashraful haider chowdhury"] },
    { name: "Md. Asif Khan Rifat", designation: "Lecturer", keywords: ["asif khan rifat"] },
    { name: "Md Sabbir Hossain", designation: "Lecturer", keywords: ["sabbir hossain"] },
    { name: "Yasin Sazid", designation: "Lecturer", keywords: ["yasin sazid"] },
    { name: "Rabea Khatun", designation: "Lecturer", keywords: ["rabea khatun"] },
    { name: "Shatabdi Roy Moon", designation: "Lecturer", keywords: ["shatabdi roy moon"] },
    { name: "Sanzana Karim Lora", designation: "Lecturer", keywords: ["sanzana karim lora"] },
    { name: "Mahmudul Islam Rakib", designation: "Lecturer", keywords: ["mahmudul islam rakib"] },
    { name: "K. M. Safin Kamal", designation: "Lecturer", keywords: ["safin kamal"] },
    { name: "Md. Adnan Morshed", designation: "Lecturer", keywords: ["adnan morshed"] },
    { name: "Asraf Ullah Rahat", designation: "Lecturer", keywords: ["asraf ullah rahat"] },
    { name: "Antu Chowdhury", designation: "Lecturer", keywords: ["antu chowdhury"] },
    { name: "Tahsin Tariq Banna", designation: "Lecturer", keywords: ["tahsin tariq banna"] },
    { name: "Muhammed Yaseen Morshed Adib", designation: "Lecturer", keywords: ["yaseen morshed adib"] },
    { name: "Nahid Hasan", designation: "Lecturer", keywords: ["nahid hasan"] },
    { name: "Syed Jamiul Alam", designation: "Lecturer", keywords: ["syed jamiul alam"] },

    // On Study Leave
    { name: "Md. Sarwar Kamal", designation: "Senior Lecturer", keywords: ["sarwar kamal"], status: "Study Leave" },
    { name: "Surajit Das Barman", designation: "Senior Lecturer", keywords: ["surajit das barman"], status: "Study Leave" },
    { name: "Amit Kumar Das", designation: "Senior Lecturer", keywords: ["amit kumar das"], status: "Study Leave" },
    { name: "Khan Mohammad Habibullah", designation: "Senior Lecturer", keywords: ["khan mohammad habibullah"], status: "Study Leave" },
    { name: "Sadia Nowrin", designation: "Lecturer", keywords: ["sadia nowrin"], status: "Study Leave" },
    { name: "Kowshika Sarker", designation: "Lecturer", keywords: ["kowshika sarker"], status: "Study Leave" },
    { name: "Muhit Islam Emon", designation: "Lecturer", keywords: ["muhit islam emon"], status: "Study Leave" },
    { name: "Yeasir Rayhan", designation: "Lecturer", keywords: ["yeasir rayhan"], status: "Study Leave" },
    { name: "Mostofa Rafid Uddin", designation: "Lecturer", keywords: ["mostofa rafid uddin"], status: "Study Leave" }
];

// Course Data
const COURSE_DATA = [
    // Undergraduate
    { code: "ENG101", title: "Basic English", credits: 3, prereq: "None" },
    { code: "ENG102", title: "Composition and Communication Skills", credits: 3, prereq: "ENG101" },
    { code: "MAT101", title: "Differential and Integral Calculus", credits: 3, prereq: "None" },
    { code: "MAT102", title: "Differential Equations and Special Functions", credits: 3, prereq: "MAT101" },
    { code: "MAT104", title: "Coordinate Geometry and Vector Analysis", credits: 3, prereq: "MAT101" },
    { code: "MAT205", title: "Linear Algebra and Complex Variable", credits: 3, prereq: "MAT102" },
    { code: "STA102", title: "Statistics and Probability", credits: 3, prereq: "MAT102" },
    { code: "PHY109", title: "Engineering Physics-I", credits: 4, prereq: "MAT102" },
    { code: "PHY209", title: "Engineering Physics-II", credits: 4, prereq: "PHY109" },
    { code: "CHE109", title: "Engineering Chemistry", credits: 4, prereq: "None" },
    { code: "CSE103", title: "Structured Programming", credits: 4.5, prereq: "None" },
    { code: "CSE106", title: "Discrete Mathematics", credits: 3, prereq: "CSE103" },
    { code: "CSE110", title: "Object Oriented Programming", credits: 4.5, prereq: "CSE106" },
    { code: "CSE200", title: "Engineering Drawing", credits: 1, prereq: "None" },
    { code: "CSE207", title: "Data Structures", credits: 4, prereq: "CSE110" },
    { code: "CSE209", title: "Electrical Circuits", credits: 4, prereq: "PHY109" },
    { code: "CSE225", title: "Numerical Methods", credits: 4, prereq: "CSE103" },
    { code: "CSE246", title: "Algorithms", credits: 4.5, prereq: "CSE207" },
    { code: "CSE251", title: "Electronic Circuits", credits: 4, prereq: "CSE209" },
    { code: "CSE302", title: "Database Systems", credits: 4.5, prereq: "CSE106" },
    { code: "CSE303", title: "Statistics for Data Science", credits: 4, prereq: "STA102" },
    { code: "CSE313", title: "Theory of Computation", credits: 3, prereq: "CSE106" },
    { code: "CSE325", title: "Operating Systems", credits: 4, prereq: "CSE207" },
    { code: "CSE345", title: "Digital Logic Design", credits: 4, prereq: "CSE251" },
    { code: "CSE347", title: "Information System Analysis and Design", credits: 4, prereq: "CSE302" },
    { code: "CSE350", title: "Data Communications", credits: 4, prereq: "CSE251" },
    { code: "CSE355", title: "Digital System Design", credits: 4, prereq: "CSE345" },
    { code: "CSE360", title: "Computer Architecture", credits: 3, prereq: "CSE325" },
    { code: "CSE366", title: "Artificial Intelligence", credits: 4, prereq: "CSE246" },
    { code: "CSE400", title: "Capstone Project", credits: 6, prereq: "105 Credits" },
    { code: "CSE405", title: "Computer Networks", credits: 4, prereq: "CSE246" },
    { code: "CSE407", title: "Green Computing", credits: 3, prereq: "CSE405" },
    { code: "CSE412", title: "Software Engineering", credits: 4, prereq: "CSE347" },
    { code: "CSE420", title: "Computer Graphics", credits: 4, prereq: "CSE246" },
    { code: "CSE422", title: "Simulation and Modeling", credits: 3, prereq: "STA102" },
    { code: "CSE423", title: "Software Architecture", credits: 3, prereq: "CSE412" },
    { code: "CSE425", title: "Numerical Methods", credits: 3, prereq: "CSE103" },
    { code: "CSE428", title: "Human-Computer Interaction", credits: 3, prereq: "CSE412" },
    { code: "CSE430", title: "Software Testing and Quality Assurance", credits: 4, prereq: "CSE412" },
    { code: "CSE432", title: "Digital Signal Processing", credits: 4, prereq: "CSE246" },
    { code: "CSE438", title: "Digital Image Processing", credits: 3, prereq: "CSE246" },
    { code: "CSE442", title: "Microprocessors and Microcontrollers", credits: 4, prereq: "CSE360" },
    { code: "CSE445", title: "Computer Vision", credits: 3, prereq: "CSE420" },
    { code: "CSE452", title: "Distributed Systems and Algorithms", credits: 3, prereq: "CSE405" },
    { code: "CSE457", title: "Cellular Networks", credits: 3, prereq: "CSE405" },
    { code: "CSE460", title: "Cryptography", credits: 3, prereq: "CSE246" },
    { code: "CSE471", title: "Compiler Design", credits: 4, prereq: "CSE246" },
    { code: "CSE475", title: "Machine Learning", credits: 3, prereq: "CSE366" },
    { code: "CSE477", title: "Data Mining", credits: 3, prereq: "CSE302" },
    { code: "CSE481", title: "Nature-Inspired Computing", credits: 3, prereq: "CSE366" },
    { code: "CSE486", title: "Bioinformatics Algorithms", credits: 3, prereq: "CSE246" },
    { code: "CSE487", title: "Cyber Security, Ethics and Law", credits: 3, prereq: "CSE405" },
    { code: "CSE488", title: "Big Data Analytics", credits: 3, prereq: "CSE302" },
    { code: "CSE489", title: "Mobile Programming", credits: 3, prereq: "CSE246" },
    { code: "CSE492", title: "Robotics", credits: 3, prereq: "CSE366" },
    { code: "CSE495", title: "IT Project Management and Entrepreneurship", credits: 3, prereq: "CSE412" },

    // Graduate
    { code: "CSE503", title: "Data Structures (Grad)", credits: "Non-credit", prereq: "None" },
    { code: "CSE504", title: "Algorithms (Grad)", credits: 3, prereq: "None" },
    { code: "CSE505", title: "Database Systems (Grad)", credits: 3, prereq: "None" },
    { code: "CSE506", title: "Artificial Intelligence (Grad)", credits: "Non-credit", prereq: "None" },
    { code: "CSE507", title: "Information System Analysis and Design (Grad)", credits: "Non-credit", prereq: "None" },
    { code: "CSE508", title: "Computer Networks (Grad)", credits: "Non-credit", prereq: "None" },
    { code: "CSE509", title: "Digital Logic Design (Grad)", credits: "Non-credit", prereq: "None" },
    { code: "CSE520", title: "Statistics for Data Science (Grad)", credits: 3, prereq: "None" },
    { code: "CSE521", title: "Machine Learning (Grad)", credits: 3, prereq: "None" },
    { code: "CSE522", title: "Data Mining (Grad)", credits: 3, prereq: "None" },
    { code: "CSE523", title: "Digital Image Processing (Grad)", credits: 3, prereq: "None" },
    { code: "CSE524", title: "Computer Vision (Grad)", credits: 3, prereq: "None" },
    { code: "CSE525", title: "Pattern Recognition (Grad)", credits: 3, prereq: "None" },
    { code: "CSE526", title: "Bioinformatics Algorithms (Grad)", credits: 3, prereq: "None" },
    { code: "CSE527", title: "Big Data Analytics (Grad)", credits: 3, prereq: "None" },
    { code: "CSE550", title: "Software Engineering (Grad)", credits: 3, prereq: "None" },
    { code: "CSE551", title: "Software Testing and QA (Grad)", credits: 3, prereq: "None" },
    { code: "CSE552", title: "Simulation and Modeling (Grad)", credits: 3, prereq: "None" },
    { code: "CSE553", title: "Software Architecture (Grad)", credits: 3, prereq: "None" },
    { code: "CSE554", title: "Human Computer Interactions (Grad)", credits: 3, prereq: "None" },
    { code: "CSE555", title: "Advanced Database System (Grad)", credits: 3, prereq: "None" },
    { code: "CSE556", title: "Web Programming (Grad)", credits: 3, prereq: "None" },
    { code: "CSE560", title: "Distributed Systems and Algorithms (Grad)", credits: 3, prereq: "None" },
    { code: "CSE561", title: "Advanced Network Services (Grad)", credits: 3, prereq: "None" },
    { code: "CSE562", title: "Wireless Networks (Grad)", credits: 3, prereq: "None" },
    { code: "CSE563", title: "Cellular Networks (Grad)", credits: 3, prereq: "None" },
    { code: "CSE564", title: "Network Security and Systems (Grad)", credits: 3, prereq: "None" },
    { code: "CSE565", title: "Mobile Programming (Grad)", credits: 3, prereq: "None" },
    { code: "CSE570", title: "Internet of Things (Grad)", credits: 3, prereq: "None" },
    { code: "CSE571", title: "Microprocessors and Microcontrollers (Grad)", credits: 3, prereq: "None" },
    { code: "CSE572", title: "ASIC Design Using FPGA (Grad)", credits: 3, prereq: "None" },
    { code: "CSE573", title: "VLSI Design (Grad)", credits: 3, prereq: "None" },
    { code: "CSE574", title: "Robotics (Grad)", credits: 3, prereq: "None" },
    { code: "CSE575", title: "Embedded Systems (Grad)", credits: 3, prereq: "None" },
    { code: "CSE596", title: "IT Project Management (Grad)", credits: 3, prereq: "None" },
    { code: "CSE597", title: "Master Project", credits: 3, prereq: "None" },
    { code: "CSE599", title: "Master Thesis", credits: 9, prereq: "None" }
];

// ============================================
// KNOWLEDGE BASE BUILDER
// ============================================

function buildExtendedKnowledgeBase() {
    let extendedKB = [...STATIC_KNOWLEDGE];

    // 1. Generate Faculty Entries (Force Multiplier)
    FACULTY_DATA.forEach(faculty => {
        // Q1: Who is [Name]?
        const relatedQuestions = [`Is ${faculty.name} active?`, "Show me the faculty list"];

        // Add contact info question for Dr. Mohammad Salah Uddin
        if (faculty.name.includes("Mohammad Salah Uddin")) {
            relatedQuestions.unshift(`How can I contact ${faculty.name}?`);
        }

        extendedKB.push({
            keywords: [...faculty.keywords, "who is"],
            question: `Who is ${faculty.name}?`,
            answer: `${faculty.name} is a ${faculty.designation} in the CSE Department.`,
            category: "Faculty",
            related: relatedQuestions
        });

        // Q2: Is [Name] active?
        const isActive = faculty.status !== "Study Leave";
        extendedKB.push({
            keywords: [...faculty.keywords, "active", "status", "leave"],
            question: `Is ${faculty.name} active?`,
            answer: isActive
                ? `Yes, ${faculty.name} is currently active.`
                : `No, ${faculty.name} is currently on Study Leave.`,
            category: "Faculty",
            related: [`Who is ${faculty.name}?`, "Show me the faculty list"]
        });
    });


    // 2. Generate Course Entries (Force Multiplier)
    COURSE_DATA.forEach(course => {
        const courseKeywords = [course.code.toLowerCase(), course.title.toLowerCase(), "course", "details"];

        // Q1: What is [Code]?
        extendedKB.push({
            keywords: courseKeywords,
            question: `What is ${course.code}?`,
            answer: `<strong>${course.code}: ${course.title}</strong><br>• Credits: ${course.credits}`,
            category: "Courses",
            related: [`What is the prerequisite of ${course.code}?`, `What are the total credits for B.Sc. CSE?`]
        });

        // Q2: Prerequisite of [Code]?
        extendedKB.push({
            keywords: [course.code.toLowerCase(), "prerequisite", "pre-req", "of"],
            question: `What is the prerequisite of ${course.code}?`,
            answer: `The prerequisite for ${course.code} (${course.title}) is: <strong>${course.prereq}</strong>.`,
            category: "Courses",
            related: [`What is ${course.code}?`, "How are credits distributed?"]
        });
    });

    // 3. Generate Scholarship Entries
    SCHOLARSHIP_DONORS.forEach(donor => {
        const donorKeywords = [
            donor.name.toLowerCase(),
            "scholarship",
            donor.sponsor.toLowerCase(),
            "donor"
        ];

        extendedKB.push({
            keywords: donorKeywords,
            question: `What is the ${donor.name} Scholarship?`,
            answer: `The <strong>${donor.name} Scholarship</strong> is sponsored by ${donor.sponsor}. The amount is typically Tk. 45,000/year.`,
            category: "Fees & Scholarships",
            related: ["What types of scholarships are available?", "How much is Medha Lalon Scholarship?"]
        });
    });

    // 4. Generate Corporate Scholarship Entries
    CORPORATE_SCHOLARSHIPS.forEach(corp => {
        extendedKB.push({
            keywords: [corp.toLowerCase(), "scholarship", "bank"],
            question: `Is there a ${corp} Scholarship?`,
            answer: `Yes, ${corp} offers scholarships to EWU students, typically around Tk. 45,000 per year.`,
            category: "Fees & Scholarships",
            related: ["What types of scholarships are available?", "What is the tuition for B.Sc.?"]
        });
    });

    return extendedKB;
}

// Export the built knowledge base
const EXTENDED_KNOWLEDGE_BASE = buildExtendedKnowledgeBase();
