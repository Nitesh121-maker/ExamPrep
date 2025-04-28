// Sample paper data
const papers = {
  paper1: {
    title: "AIIMS NORCET Paper 1",
    duration: 90,
    questions: generateQuestions("AIIMS NORCET Paper 1", 100),
  },
  paper2: {
    title: "AIIMS NORCET Paper 2",
    duration: 90,
    questions: generateQuestions("AIIMS NORCET Paper 2", 100),
  },
  paper3: {
    title: "AIIMS NORCET Paper 3",
    duration: 90,
    questions: generateQuestions("AIIMS NORCET Paper 3", 100),
  },
  // paper4: {
  //   title: "Chemistry",
  //   duration: 90,
  //   questions: generateQuestions("Chemistry", 100),
  // },
  // paper6: {
  //   title: "Biology",
  //   duration: 90,
  //   questions: generateQuestions("Biology", 100),
  // },
  // paper7: {
  //   title: "Computer Science",
  //   duration: 90,
  //   questions: generateQuestions("Computer Science", 100),
  // },
  // paper8: {
  //   title: "Economics",
  //   duration: 90,
  //   questions: generateQuestions("Economics", 100),
  // },
  // paper9: {
  //   title: "Geography",
  //   duration: 90,
  //   questions: generateQuestions("Geography", 100),
  // },
  // paper10: {
  //   title: "History",
  //   duration: 90,
  //   questions: generateQuestions("History", 100),
  // },
}

// Helper function to generate sample questions
function generateQuestions(subject: string, count: number) {
  const questions = []

  // Sample question templates for different subjects
  const templates: Record<string, any[]> = {
    "AIIMS NORCET Paper 1": [
      {
        "question": "What is the primary function of red blood cells in the human body?",
        "options": ["A. Carry oxygen", "B. Fight infections", "C. Clot blood", "D. Regulate body temperature"],
        "answer": "A. Carry oxygen",
        "explanation": "Red blood cells primarily carry oxygen from the lungs to the body’s tissues and return carbon dioxide back to the lungs to be exhaled."
      },
      {
        "question": "Which of the following is a common symptom of hypoglycemia?",
        "options": ["A. Increased thirst", "B. Shivering", "C. Abdominal pain", "D. Dizziness"],
        "answer": "B. Shivering",
        "explanation": "Shivering is a common symptom of hypoglycemia (low blood sugar) due to the body’s response to lack of energy. Other symptoms can include dizziness and confusion."
      },
      {
        "question": "What is the normal range for body temperature in Celsius?",
        "options": ["A. 35-36°C", "B. 36-37°C", "C. 37-38°C", "D. 38-39°C"],
        "answer": "B. 36-37°C",
        "explanation": "The normal range for body temperature in adults is generally considered to be between 36°C and 37°C, depending on the individual and the time of day."
      },
      {
        "question": "Which vitamin is essential for the absorption of calcium in the human body?",
        "options": ["A. Vitamin A", "B. Vitamin B12", "C. Vitamin C", "D. Vitamin D"],
        "answer": "D. Vitamin D",
        "explanation": "Vitamin D is essential for the absorption of calcium from the digestive tract. It also plays a crucial role in bone health and immune function."
      },
      {
        "question": "What is the primary cause of peptic ulcers?",
        "options": ["A. High sugar intake", "B. Stress", "C. Helicobacter pylori infection", "D. Lack of sleep"],
        "answer": "C. Helicobacter pylori infection",
        "explanation": "Peptic ulcers are most commonly caused by an infection with Helicobacter pylori bacteria or the prolonged use of nonsteroidal anti-inflammatory drugs (NSAIDs)."
      },
      {
        "question": "Which of the following is a common complication of uncontrolled diabetes?",
        "options": ["A. Heart disease", "B. Kidney failure", "C. Stroke", "D. All of the above"],
        "answer": "D. All of the above",
        "explanation": "Uncontrolled diabetes can lead to multiple complications including heart disease, kidney failure, stroke, and nerve damage."
      },
      {
        "question": "What is the function of insulin in the human body?",
        "options": ["A. To digest food", "B. To regulate blood sugar levels", "C. To produce red blood cells", "D. To carry oxygen to tissues"],
        "answer": "B. To regulate blood sugar levels",
        "explanation": "Insulin is a hormone produced by the pancreas that helps regulate blood sugar levels by allowing cells to take in glucose for energy."
      },
      {
        "question": "Which organ is primarily responsible for filtering blood in the human body?",
        "options": ["A. Heart", "B. Liver", "C. Kidneys", "D. Lungs"],
        "answer": "C. Kidneys",
        "explanation": "The kidneys are primarily responsible for filtering waste products and excess fluids from the blood, which are then excreted as urine."
      },
      {
        "question": "What is the primary function of the respiratory system?",
        "options": ["A. To digest food", "B. To regulate body temperature", "C. To exchange gases", "D. To produce blood cells"],
        "answer": "C. To exchange gases",
        "explanation": "The respiratory system is responsible for the exchange of gases, particularly oxygen and carbon dioxide, between the body and the environment."
      },
      {
        "question": "What is the normal range for blood pressure in adults?",
        "options": ["A. 90/60 mmHg to 120/80 mmHg", "B. 110/70 mmHg to 130/85 mmHg", "C. 140/90 mmHg to 160/100 mmHg", "D. 100/60 mmHg to 120/90 mmHg"],
        "answer": "A. 90/60 mmHg to 120/80 mmHg",
        "explanation": "Normal blood pressure is typically considered to be between 90/60 mmHg and 120/80 mmHg. Higher levels may indicate hypertension."
      },{
        "question": "Which of the following is a common symptom of a stroke?",
        "options": ["A. Numbness on one side of the body", "B. Fever", "C. Excessive thirst", "D. Hair loss"],
        "answer": "A. Numbness on one side of the body",
        "explanation": "A stroke often causes numbness or weakness, typically on one side of the body, along with other symptoms such as difficulty speaking, confusion, and loss of balance."
      },
      {
        "question": "What is the most common type of anemia in the world?",
        "options": ["A. Iron-deficiency anemia", "B. Pernicious anemia", "C. Sickle cell anemia", "D. Aplastic anemia"],
        "answer": "A. Iron-deficiency anemia",
        "explanation": "Iron-deficiency anemia is the most common type of anemia worldwide, often caused by insufficient iron in the diet or poor absorption of iron."
      },
      {
        "question": "Which of the following is a function of the lymphatic system?",
        "options": ["A. Digestion of food", "B. Transport of oxygen", "C. Removal of waste products", "D. Regulation of blood pressure"],
        "answer": "C. Removal of waste products",
        "explanation": "The lymphatic system helps remove waste products, toxins, and excess fluids from tissues, playing a key role in immune function and maintaining fluid balance."
      },
      {
        "question": "What is the name of the hormone responsible for regulating metabolism?",
        "options": ["A. Insulin", "B. Thyroxine", "C. Cortisol", "D. Estrogen"],
        "answer": "B. Thyroxine",
        "explanation": "Thyroxine, produced by the thyroid gland, is responsible for regulating metabolism, including the rate at which the body uses energy."
      },
      {
        "question": "Which part of the brain controls voluntary muscle movements?",
        "options": ["A. Cerebellum", "B. Medulla oblongata", "C. Cerebrum", "D. Hippocampus"],
        "answer": "C. Cerebrum",
        "explanation": "The cerebrum, particularly the motor cortex, is responsible for controlling voluntary muscle movements, including those related to movement, speech, and sensory perception."
      },
      {
        "question": "What is the primary function of the digestive system?",
        "options": ["A. Absorb oxygen", "B. Filter toxins", "C. Break down and absorb food", "D. Regulate body temperature"],
        "answer": "C. Break down and absorb food",
        "explanation": "The primary function of the digestive system is to break down food into nutrients and absorb them into the bloodstream, providing energy and building blocks for the body."
      },
      {
        "question": "Which of the following is a key function of the liver?",
        "options": ["A. Produce insulin", "B. Store bile", "C. Filter toxins", "D. Regulate heart rate"],
        "answer": "C. Filter toxins",
        "explanation": "The liver plays a key role in filtering toxins from the bloodstream, producing bile, and metabolizing nutrients and medications."
      },
      {
        "question": "What is the main function of white blood cells?",
        "options": ["A. Carry oxygen", "B. Fight infections", "C. Regulate blood sugar", "D. Help blood clot"],
        "answer": "B. Fight infections",
        "explanation": "White blood cells, or leukocytes, are key players in the immune system and work to fight infections and protect the body from harmful pathogens."
      },
      {
        "question": "Which part of the eye is responsible for focusing light onto the retina?",
        "options": ["A. Cornea", "B. Lens", "C. Retina", "D. Pupil"],
        "answer": "B. Lens",
        "explanation": "The lens of the eye focuses light onto the retina, allowing the eye to create clear images. It works in conjunction with the cornea."
      },
      {
        "question": "Which condition is caused by a deficiency of vitamin C?",
        "options": ["A. Rickets", "B. Scurvy", "C. Beriberi", "D. Pellagra"],
        "answer": "B. Scurvy",
        "explanation": "Scurvy is caused by a deficiency in vitamin C, leading to symptoms like bleeding gums, fatigue, and joint pain. Vitamin C is essential for collagen synthesis."
      },{
        "question": "Which of the following is responsible for transporting oxygen in the blood?",
        "options": ["A. Plasma", "B. White blood cells", "C. Platelets", "D. Hemoglobin"],
        "answer": "D. Hemoglobin",
        "explanation": "Hemoglobin is a protein found in red blood cells that binds to oxygen in the lungs and carries it to tissues throughout the body."
      },
      {
        "question": "What is the primary function of the skeletal system?",
        "options": ["A. Regulate temperature", "B. Support and protect organs", "C. Produce blood cells", "D. Digest food"],
        "answer": "B. Support and protect organs",
        "explanation": "The skeletal system provides structure, support, and protection for the body’s organs, as well as stores minerals and produces blood cells in the bone marrow."
      },
      {
        "question": "Which organ is responsible for producing insulin?",
        "options": ["A. Pancreas", "B. Liver", "C. Kidneys", "D. Stomach"],
        "answer": "A. Pancreas",
        "explanation": "The pancreas produces insulin, a hormone that helps regulate blood sugar levels by facilitating the absorption of glucose into cells."
      },
      {
        "question": "Which vitamin is primarily obtained from sunlight?",
        "options": ["A. Vitamin A", "B. Vitamin B12", "C. Vitamin C", "D. Vitamin D"],
        "answer": "D. Vitamin D",
        "explanation": "Vitamin D is synthesized by the body when the skin is exposed to sunlight, and it is essential for calcium absorption and bone health."
      },
      {
        "question": "Which disease is caused by a deficiency of vitamin D?",
        "options": ["A. Scurvy", "B. Rickets", "C. Pellagra", "D. Beriberi"],
        "answer": "B. Rickets",
        "explanation": "Rickets is caused by a deficiency of vitamin D, leading to weakened bones and skeletal deformities in children."
      },
      {
        "question": "What is the name of the protein responsible for blood clotting?",
        "options": ["A. Albumin", "B. Hemoglobin", "C. Fibrin", "D. Insulin"],
        "answer": "C. Fibrin",
        "explanation": "Fibrin is a protein involved in blood clotting, forming a mesh to help stop bleeding and promote healing at the site of injury."
      },
      {
        "question": "Which part of the brain is responsible for regulating basic body functions like heart rate and breathing?",
        "options": ["A. Cerebellum", "B. Medulla oblongata", "C. Cerebrum", "D. Hippocampus"],
        "answer": "B. Medulla oblongata",
        "explanation": "The medulla oblongata controls vital functions such as heart rate, breathing, and blood pressure, and is located in the brainstem."
      },
      {
        "question": "What is the main function of the kidneys?",
        "options": ["A. Produce hormones", "B. Filter blood", "C. Absorb nutrients", "D. Regulate temperature"],
        "answer": "B. Filter blood",
        "explanation": "The kidneys filter waste products and excess fluid from the blood, regulating electrolyte balance and maintaining fluid balance."
      },
      {
        "question": "Which of the following hormones is involved in regulating the body’s stress response?",
        "options": ["A. Insulin", "B. Cortisol", "C. Estrogen", "D. Adrenaline"],
        "answer": "B. Cortisol",
        "explanation": "Cortisol is a hormone produced by the adrenal glands in response to stress. It helps regulate metabolism and the body’s response to stress."
      },
      {
        "question": "Which type of blood vessel carries oxygenated blood from the heart to the rest of the body?",
        "options": ["A. Veins", "B. Arteries", "C. Capillaries", "D. Lymph vessels"],
        "answer": "B. Arteries",
        "explanation": "Arteries carry oxygenated blood away from the heart to the body’s tissues, except for the pulmonary arteries which carry deoxygenated blood to the lungs."
      },  {
        "question": "Which of the following is a function of the large intestine?",
        "options": ["A. Absorption of nutrients", "B. Detoxification", "C. Water and electrolyte absorption", "D. Production of bile"],
        "answer": "C. Water and electrolyte absorption",
        "explanation": "The large intestine absorbs water and electrolytes from indigestible food matter, forming solid waste (feces) to be excreted."
      },
      {
        "question": "What is the term for a high concentration of sugar in the blood?",
        "options": ["A. Hypoglycemia", "B. Hyperglycemia", "C. Anemia", "D. Hyperthyroidism"],
        "answer": "B. Hyperglycemia",
        "explanation": "Hyperglycemia refers to high levels of glucose in the blood, often seen in individuals with diabetes or poor insulin regulation."
      },
      {
        "question": "Which of the following structures is responsible for filtering the blood in the kidneys?",
        "options": ["A. Nephron", "B. Glomerulus", "C. Renal cortex", "D. Ureter"],
        "answer": "A. Nephron",
        "explanation": "The nephron is the functional unit of the kidney responsible for filtering blood, reabsorbing necessary substances, and excreting waste as urine."
      },
      {
        "question": "What is the primary function of the circulatory system?",
        "options": ["A. Carry oxygen and nutrients", "B. Produce hormones", "C. Absorb nutrients", "D. Protect the body from infections"],
        "answer": "A. Carry oxygen and nutrients",
        "explanation": "The circulatory system transports oxygen, nutrients, and hormones to cells throughout the body and removes waste products like carbon dioxide."
      },
      {
        "question": "Which type of muscle tissue is responsible for voluntary movements?",
        "options": ["A. Skeletal muscle", "B. Cardiac muscle", "C. Smooth muscle", "D. Epithelial tissue"],
        "answer": "A. Skeletal muscle",
        "explanation": "Skeletal muscle is responsible for voluntary movements of the body, including walking, lifting, and other conscious movements."
      },
      {
        "question": "Which of the following structures is responsible for the production of sperm?",
        "options": ["A. Testes", "B. Prostate", "C. Seminal vesicles", "D. Urethra"],
        "answer": "A. Testes",
        "explanation": "The testes are the male reproductive organs responsible for producing sperm and testosterone."
      },
      {
        "question": "What is the primary role of platelets in the blood?",
        "options": ["A. Carry oxygen", "B. Fight infection", "C. Aid in blood clotting", "D. Transport nutrients"],
        "answer": "C. Aid in blood clotting",
        "explanation": "Platelets, also known as thrombocytes, play a crucial role in blood clotting by aggregating at the site of an injury and forming a clot to stop bleeding."
      },
      {
        "question": "Which of the following glands is responsible for regulating metabolism?",
        "options": ["A. Thyroid gland", "B. Pituitary gland", "C. Adrenal glands", "D. Pineal gland"],
        "answer": "A. Thyroid gland",
        "explanation": "The thyroid gland produces hormones such as thyroxine, which regulate the body’s metabolism, energy production, and growth."
      },
      {
        "question": "What is the term used for the body's ability to maintain a stable internal environment?",
        "options": ["A. Homeostasis", "B. Metabolism", "C. Respiration", "D. Digestion"],
        "answer": "A. Homeostasis",
        "explanation": "Homeostasis refers to the body’s ability to maintain stable internal conditions, such as body temperature, pH, and fluid balance, despite external changes."
      },
      {
        "question": "Which part of the brain is responsible for memory formation?",
        "options": ["A. Medulla oblongata", "B. Hippocampus", "C. Cerebellum", "D. Pons"],
        "answer": "B. Hippocampus",
        "explanation": "The hippocampus is a critical region of the brain involved in the formation of new memories and spatial navigation."
      },
        {
          "question": "What is the function of the myelin sheath?",
          "options": ["A. Protects neurons", "B. Transmits electrical impulses faster", "C. Produces neurotransmitters", "D. Stores genetic information"],
          "answer": "B. Transmits electrical impulses faster",
          "explanation": "The myelin sheath is a fatty layer that covers nerve fibers and helps speed up the transmission of electrical impulses along neurons."
        },
        {
          "question": "Which of the following is a characteristic of type 1 diabetes?",
          "options": ["A. Insulin resistance", "B. Insulin deficiency", "C. Excessive thirst", "D. High blood pressure"],
          "answer": "B. Insulin deficiency",
          "explanation": "Type 1 diabetes is characterized by an autoimmune response that destroys the insulin-producing cells in the pancreas, leading to insulin deficiency."
        },
        {
          "question": "What type of joint is the knee?",
          "options": ["A. Hinge joint", "B. Ball-and-socket joint", "C. Pivot joint", "D. Saddle joint"],
          "answer": "A. Hinge joint",
          "explanation": "The knee is a hinge joint that allows for flexion and extension, as well as limited rotation, typically involved in walking, running, and jumping."
        },
        {
          "question": "Which of the following is a major function of the digestive system?",
          "options": ["A. Production of red blood cells", "B. Conversion of food into nutrients", "C. Regulation of body temperature", "D. Filtration of blood"],
          "answer": "B. Conversion of food into nutrients",
          "explanation": "The digestive system breaks down food into smaller molecules that the body can absorb as nutrients for energy and growth."
        },
        {
          "question": "Which of the following organs is primarily responsible for detoxifying the blood?",
          "options": ["A. Kidney", "B. Heart", "C. Liver", "D. Lung"],
          "answer": "C. Liver",
          "explanation": "The liver detoxifies harmful substances in the blood, processes nutrients, and plays a central role in metabolic functions."
        },
        {
          "question": "Which of the following is the largest part of the human brain?",
          "options": ["A. Cerebellum", "B. Brainstem", "C. Cerebrum", "D. Hippocampus"],
          "answer": "C. Cerebrum",
          "explanation": "The cerebrum is the largest part of the human brain, responsible for higher brain functions such as thought, memory, voluntary movement, and sensory processing."
        },
        {
          "question": "What is the primary function of the respiratory system?",
          "options": ["A. Pump blood throughout the body", "B. Exchange gases between the blood and the air", "C. Digestion of food", "D. Synthesis of proteins"],
          "answer": "B. Exchange gases between the blood and the air",
          "explanation": "The respiratory system is responsible for taking in oxygen from the air and expelling carbon dioxide, maintaining gas exchange for cellular respiration."
        },
        {
          "question": "Which of the following is responsible for transporting oxygen from the lungs to the tissues?",
          "options": ["A. Platelets", "B. White blood cells", "C. Red blood cells", "D. Plasma"],
          "answer": "C. Red blood cells",
          "explanation": "Red blood cells contain hemoglobin, which binds to oxygen in the lungs and carries it to tissues throughout the body."
        },
        {
          "question": "What is the main role of the pancreas in the digestive system?",
          "options": ["A. Secretes digestive enzymes", "B. Absorbs nutrients", "C. Stores bile", "D. Breaks down food physically"],
          "answer": "A. Secretes digestive enzymes",
          "explanation": "The pancreas produces digestive enzymes that break down proteins, fats, and carbohydrates, and it also secretes insulin to regulate blood sugar levels."
        },
        {
          "question": "Which of the following is a function of the skin?",
          "options": ["A. Secreting insulin", "B. Absorbing nutrients", "C. Protecting internal organs", "D. Producing red blood cells"],
          "answer": "C. Protecting internal organs",
          "explanation": "The skin acts as a protective barrier against harmful pathogens, UV radiation, and dehydration, while also helping with temperature regulation."
        },  {
          "question": "Which of the following is the smallest unit of life?",
          "options": ["A. Atom", "B. Molecule", "C. Cell", "D. Organ"],
          "answer": "C. Cell",
          "explanation": "The cell is the basic unit of life, capable of performing all the functions necessary for life, including metabolism, growth, and reproduction."
        },
        {
          "question": "What is the primary function of the lymphatic system?",
          "options": ["A. Transport oxygen", "B. Regulate body temperature", "C. Protect the body from infection", "D. Digest food"],
          "answer": "C. Protect the body from infection",
          "explanation": "The lymphatic system is responsible for defending the body against infections and removing waste products and excess fluids from tissues."
        },
        {
          "question": "Which of the following substances helps in the absorption of fat-soluble vitamins?",
          "options": ["A. Water", "B. Proteins", "C. Fats", "D. Carbohydrates"],
          "answer": "C. Fats",
          "explanation": "Fats help in the absorption of fat-soluble vitamins (A, D, E, and K) by enabling their solubility in the digestive tract."
        },
        {
          "question": "What is the name of the process by which plants make their own food using sunlight?",
          "options": ["A. Respiration", "B. Photosynthesis", "C. Digestion", "D. Fermentation"],
          "answer": "B. Photosynthesis",
          "explanation": "Photosynthesis is the process by which plants use sunlight, carbon dioxide, and water to produce glucose and oxygen."
        },
        {
          "question": "Which hormone is responsible for regulating blood calcium levels?",
          "options": ["A. Insulin", "B. Adrenaline", "C. Parathyroid hormone", "D. Thyroxine"],
          "answer": "C. Parathyroid hormone",
          "explanation": "Parathyroid hormone regulates blood calcium levels by promoting the release of calcium from bones and enhancing calcium absorption in the intestines."
        },
        {
          "question": "Which of the following organs produces bile?",
          "options": ["A. Gallbladder", "B. Liver", "C. Kidney", "D. Pancreas"],
          "answer": "B. Liver",
          "explanation": "The liver produces bile, which is essential for the digestion and absorption of fats in the small intestine."
        },
        {
          "question": "What is the primary role of white blood cells?",
          "options": ["A. Carry oxygen", "B. Aid in blood clotting", "C. Fight infection", "D. Regulate body temperature"],
          "answer": "C. Fight infection",
          "explanation": "White blood cells are key components of the immune system and help defend the body against pathogens like bacteria, viruses, and fungi."
        },
        {
          "question": "What is the term for the process by which water moves across a semi-permeable membrane?",
          "options": ["A. Diffusion", "B. Osmosis", "C. Active transport", "D. Filtration"],
          "answer": "B. Osmosis",
          "explanation": "Osmosis is the movement of water molecules from an area of low solute concentration to an area of high solute concentration through a semi-permeable membrane."
        },
        {
          "question": "Which part of the eye is responsible for focusing light onto the retina?",
          "options": ["A. Cornea", "B. Lens", "C. Retina", "D. Iris"],
          "answer": "B. Lens",
          "explanation": "The lens focuses light onto the retina, where the light is converted into electrical signals that are sent to the brain."
        },
        {
          "question": "What is the function of the small intestine in digestion?",
          "options": ["A. Absorb water", "B. Store bile", "C. Absorb nutrients from digested food", "D. Produce digestive enzymes"],
          "answer": "C. Absorb nutrients from digested food",
          "explanation": "The small intestine is responsible for absorbing nutrients from digested food into the bloodstream. It is the primary site for digestion and nutrient absorption."
        },{
          "question": "Which blood group is known as the universal donor?",
          "options": ["A. AB+", "B. O-", "C. A+", "D. B-"],
          "answer": "B. O-",
          "explanation": "People with O negative blood are considered universal donors because their blood can be given to individuals of any blood type."
        },
        {
          "question": "Which vitamin is essential for blood clotting?",
          "options": ["A. Vitamin A", "B. Vitamin C", "C. Vitamin K", "D. Vitamin D"],
          "answer": "C. Vitamin K",
          "explanation": "Vitamin K is crucial for the synthesis of proteins required for blood clotting, preventing excessive bleeding."
        },
        {
          "question": "Which organ is responsible for filtering blood in the human body?",
          "options": ["A. Heart", "B. Lungs", "C. Liver", "D. Kidneys"],
          "answer": "D. Kidneys",
          "explanation": "The kidneys filter waste products and excess fluids from the blood, which are then excreted as urine."
        },
        {
          "question": "Which part of the brain controls balance and coordination?",
          "options": ["A. Cerebrum", "B. Cerebellum", "C. Brainstem", "D. Hypothalamus"],
          "answer": "B. Cerebellum",
          "explanation": "The cerebellum, located at the back of the brain, regulates motor movements, balance, posture, and coordination."
        },
        {
          "question": "Which gas is exchanged for oxygen in the lungs during respiration?",
          "options": ["A. Carbon dioxide", "B. Nitrogen", "C. Helium", "D. Hydrogen"],
          "answer": "A. Carbon dioxide",
          "explanation": "Carbon dioxide, a waste product of cellular respiration, is exchanged for oxygen in the alveoli of the lungs."
        },
        {
          "question": "Which is the largest artery in the human body?",
          "options": ["A. Pulmonary artery", "B. Aorta", "C. Carotid artery", "D. Femoral artery"],
          "answer": "B. Aorta",
          "explanation": "The aorta is the largest artery, carrying oxygen-rich blood from the heart to the rest of the body."
        },
        {
          "question": "Which of the following diseases is caused by a virus?",
          "options": ["A. Tuberculosis", "B. Typhoid", "C. Hepatitis B", "D. Malaria"],
          "answer": "C. Hepatitis B",
          "explanation": "Hepatitis B is a viral infection that affects the liver, causing inflammation and potentially serious liver damage."
        },
        {
          "question": "Which electrolyte imbalance is associated with muscle cramps and cardiac arrhythmias?",
          "options": ["A. Hypokalemia", "B. Hypercalcemia", "C. Hypernatremia", "D. Hypoglycemia"],
          "answer": "A. Hypokalemia",
          "explanation": "Hypokalemia (low potassium levels) can lead to muscle weakness, cramps, and dangerous cardiac arrhythmias."
        },
        {
          "question": "Which organelle is known as the powerhouse of the cell?",
          "options": ["A. Nucleus", "B. Mitochondria", "C. Ribosome", "D. Endoplasmic reticulum"],
          "answer": "B. Mitochondria",
          "explanation": "Mitochondria produce the energy currency of the cell (ATP) through respiration, earning the nickname 'powerhouse of the cell.'"
        },
        {
          "question": "Which of the following is an example of passive immunity?",
          "options": ["A. Vaccination", "B. Recovery from an infection", "C. Antibody transfer from mother to baby", "D. Exposure to a pathogen"],
          "answer": "C. Antibody transfer from mother to baby",
          "explanation": "Passive immunity occurs when antibodies are transferred from one individual to another, such as from a mother to her baby through the placenta or breast milk."
        }, {
          "question": "Which structure in the nephron is primarily responsible for filtration of blood?",
          "options": ["A. Loop of Henle", "B. Proximal tubule", "C. Glomerulus", "D. Collecting duct"],
          "answer": "D. Collecting duct",
          "explanation": "The glomerulus is a network of capillaries located at the beginning of the nephron where blood filtration occurs."
        },
        {
          "question": "What is the normal pH range of blood in a healthy human?",
          "options": ["A. 6.8–7.0", "B. 7.35–7.45", "C. 7.5–8.0", "D. 6.0–6.5"],
          "answer": "B. 7.35–7.45",
          "explanation": "Normal blood pH is tightly regulated between 7.35 and 7.45 to maintain homeostasis and proper cellular function."
        },
        {
          "question": "Which vaccine is given at birth as part of India's Universal Immunization Program?",
          "options": ["A. DPT", "B. OPV", "C. BCG", "D. Hepatitis A"],
          "answer": "C. BCG",
          "explanation": "BCG vaccine, which protects against tuberculosis, is administered at birth under India's Universal Immunization Program."
        },
        {
          "question": "Which electrolyte is crucial for nerve impulse conduction and muscle contraction?",
          "options": ["A. Sodium", "B. Chloride", "C. Magnesium", "D. Iron"],
          "answer": "A. Sodium",
          "explanation": "Sodium ions are essential for generating action potentials in neurons and muscle fibers, allowing nerve impulse transmission and muscle contraction."
        },
        {
          "question": "What is the primary function of hemoglobin?",
          "options": ["A. Fight infection", "B. Carry oxygen", "C. Regulate temperature", "D. Help in digestion"],
          "answer": "B. Carry oxygen",
          "explanation": "Hemoglobin, found in red blood cells, binds oxygen in the lungs and transports it to tissues throughout the body."
        },
        {
          "question": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
          "options": ["A. Aorta", "B. Pulmonary vein", "C. Pulmonary artery", "D. Vena cava"],
          "answer": "C. Pulmonary artery",
          "explanation": "The pulmonary artery is the only artery that carries deoxygenated blood, transporting it from the right ventricle to the lungs for oxygenation."
        },
        {
          "question": "Which vitamin deficiency causes rickets in children?",
          "options": ["A. Vitamin A", "B. Vitamin D", "C. Vitamin E", "D. Vitamin K"],
          "answer": "B. Vitamin D",
          "explanation": "Vitamin D deficiency results in poor calcium absorption, leading to rickets, characterized by soft, weak bones in children."
        },
        {
          "question": "Which phase of wound healing involves new tissue formation?",
          "options": ["A. Hemostasis", "B. Inflammatory phase", "C. Proliferative phase", "D. Remodeling phase"],
          "answer": "C. Proliferative phase",
          "explanation": "During the proliferative phase of wound healing, new blood vessels form and tissue regeneration occurs to replace damaged tissue."
        },
        {
          "question": "Which type of immunity results from the vaccination process?",
          "options": ["A. Passive natural immunity", "B. Active artificial immunity", "C. Passive artificial immunity", "D. Active natural immunity"],
          "answer": "B. Active artificial immunity",
          "explanation": "Vaccination stimulates the body's immune system to produce its own antibodies, leading to active artificial immunity."
        },
        {
          "question": "Which electrolyte disturbance is commonly seen in a patient with diarrhea?",
          "options": ["A. Hyperkalemia", "B. Hypokalemia", "C. Hypercalcemia", "D. Hyponatremia"],
          "answer": "B. Hypokalemia",
          "explanation": "Diarrhea causes a significant loss of potassium through stool, leading to hypokalemia (low potassium levels)."
        },  {
          "question": "Which hormone regulates the sleep-wake cycle in humans?",
          "options": ["A. Cortisol", "B. Melatonin", "C. Adrenaline", "D. Insulin"],
          "answer": "B. Melatonin",
          "explanation": "Melatonin, secreted by the pineal gland, regulates the circadian rhythm and helps control the sleep-wake cycle."
        },
        {
          "question": "Which type of white blood cells are primarily responsible for producing antibodies?",
          "options": ["A. Monocytes", "B. Neutrophils", "C. B lymphocytes", "D. T lymphocytes"],
          "answer": "C. B lymphocytes",
          "explanation": "B lymphocytes (B cells) produce antibodies that are specific to antigens encountered by the immune system."
        },
        {
          "question": "Which is the main mineral stored in bones?",
          "options": ["A. Sodium", "B. Potassium", "C. Calcium", "D. Iron"],
          "answer": "C. Calcium",
          "explanation": "Calcium is the major mineral stored in bones, essential for bone strength and various cellular processes."
        },
        {
          "question": "Which microorganism is responsible for causing tuberculosis?",
          "options": ["A. Streptococcus", "B. Mycobacterium tuberculosis", "C. Escherichia coli", "D. Staphylococcus aureus"],
          "answer": "B. Mycobacterium tuberculosis",
          "explanation": "Mycobacterium tuberculosis is the bacterium responsible for causing tuberculosis, a serious infectious disease primarily affecting the lungs."
        },
        {
          "question": "Which cranial nerve is responsible for the sense of smell?",
          "options": ["A. Optic nerve", "B. Olfactory nerve", "C. Vagus nerve", "D. Trigeminal nerve"],
          "answer": "B. Olfactory nerve",
          "explanation": "The olfactory nerve (cranial nerve I) is responsible for detecting odors and transmitting the sense of smell to the brain."
        },
        {
          "question": "Which process describes the engulfing of large particles by a cell?",
          "options": ["A. Diffusion", "B. Osmosis", "C. Phagocytosis", "D. Pinocytosis"],
          "answer": "C. Phagocytosis",
          "explanation": "Phagocytosis is a cellular process where cells engulf large particles, such as bacteria or dead cells, for digestion."
        },
        {
          "question": "Which blood component is primarily involved in clotting?",
          "options": ["A. Red blood cells", "B. White blood cells", "C. Plasma", "D. Platelets"],
          "answer": "D. Platelets",
          "explanation": "Platelets, also known as thrombocytes, are blood components that gather at the site of a blood vessel injury to form a clot and stop bleeding."
        },
        {
          "question": "Which is the correct order of the layers of the heart wall from outermost to innermost?",
          "options": ["A. Myocardium, Endocardium, Epicardium", "B. Endocardium, Epicardium, Myocardium", "C. Epicardium, Myocardium, Endocardium", "D. Pericardium, Endocardium, Myocardium"],
          "answer": "C. Epicardium, Myocardium, Endocardium",
          "explanation": "The correct order of the heart wall layers from outermost to innermost is: Epicardium (outer layer), Myocardium (muscle layer), and Endocardium (inner layer)."
        },
        {
          "question": "What is the normal range of adult respiratory rate per minute?",
          "options": ["A. 8–12", "B. 12–20", "C. 20–28", "D. 28–36"],
          "answer": "B. 12–20",
          "explanation": "The normal respiratory rate for a healthy adult at rest is between 12 to 20 breaths per minute."
        },
        {
          "question": "Which enzyme is responsible for breaking down starch into sugars in the mouth?",
          "options": ["A. Pepsin", "B. Amylase", "C. Lipase", "D. Trypsin"],
          "answer": "B. Amylase",
          "explanation": "Amylase, secreted by the salivary glands, initiates the breakdown of starch into simpler sugars in the mouth."
        },  {
          "question": "Which organ is primarily responsible for detoxifying chemicals and metabolizing drugs?",
          "options": ["A. Kidney", "B. Liver", "C. Spleen", "D. Pancreas"],
          "answer": "B. Liver",
          "explanation": "The liver detoxifies harmful substances and metabolizes drugs to make them easier for the body to eliminate."
        },
        {
          "question": "What is the universal donor blood group?",
          "options": ["A. AB+", "B. O+", "C. O-", "D. AB-"],
          "answer": "C. O-",
          "explanation": "O-negative blood type is considered the universal donor because it can be transfused to patients of any blood group."
        },
        {
          "question": "Which gland secretes growth hormone?",
          "options": ["A. Thyroid gland", "B. Pituitary gland", "C. Adrenal gland", "D. Pineal gland"],
          "answer": "B. Pituitary gland",
          "explanation": "The pituitary gland, often called the 'master gland,' secretes growth hormone, which stimulates growth, cell reproduction, and regeneration."
        },
        {
          "question": "Which part of the brain is responsible for maintaining balance and coordination?",
          "options": ["A. Cerebrum", "B. Cerebellum", "C. Medulla oblongata", "D. Thalamus"],
          "answer": "B. Cerebellum",
          "explanation": "The cerebellum is responsible for balance, posture, and coordination of voluntary movements."
        },
        {
          "question": "What is the normal hemoglobin level range for adult males?",
          "options": ["A. 10–12 g/dL", "B. 12–14 g/dL", "C. 13–17 g/dL", "D. 18–20 g/dL"],
          "answer": "C. 13–17 g/dL",
          "explanation": "The normal hemoglobin level for adult males ranges between 13 and 17 grams per deciliter (g/dL)."
        },
        {
          "question": "Which artery supplies oxygenated blood to the heart muscle itself?",
          "options": ["A. Carotid artery", "B. Pulmonary artery", "C. Coronary artery", "D. Aorta"],
          "answer": "C. Coronary artery",
          "explanation": "The coronary arteries supply oxygen-rich blood directly to the heart muscle."
        },
        {
          "question": "Which organ produces insulin?",
          "options": ["A. Liver", "B. Pancreas", "C. Kidney", "D. Spleen"],
          "answer": "B. Pancreas",
          "explanation": "The pancreas produces insulin, a hormone that helps regulate blood glucose levels."
        },
        {
          "question": "Which vitamin enhances iron absorption in the body?",
          "options": ["A. Vitamin A", "B. Vitamin C", "C. Vitamin D", "D. Vitamin K"],
          "answer": "B. Vitamin C",
          "explanation": "Vitamin C enhances the absorption of non-heme iron from plant-based foods, aiding in better iron uptake."
        },
        {
          "question": "What is the main cause of myocardial infarction?",
          "options": ["A. Infection", "B. Blood clot", "C. Dehydration", "D. Hypertension"],
          "answer": "B. Blood clot",
          "explanation": "A myocardial infarction (heart attack) occurs when a blood clot blocks a coronary artery, restricting blood flow to heart tissue."
        },
        {
          "question": "Which of the following is a fat-soluble vitamin?",
          "options": ["A. Vitamin B1", "B. Vitamin B12", "C. Vitamin C", "D. Vitamin D"],
          "answer": "D. Vitamin D",
          "explanation": "Vitamin D is a fat-soluble vitamin essential for calcium absorption and bone health."
        }

    ]
    ,
    "AIIMS NORCET Paper 2": [
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)?",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest?",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy?",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis?",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose?",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 1)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 1)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 1)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 1)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 1)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 2)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 2)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 2)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 2)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 2)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 3)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 3)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 3)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 3)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 3)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 4)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 4)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 4)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 4)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 4)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 5)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 5)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 5)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 5)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 5)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 6)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 6)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 6)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 6)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 6)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 7)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 7)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 7)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 7)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 7)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 8)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 8)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 8)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 8)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 8)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 9)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 9)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 9)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 9)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 9)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 10)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 10)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 10)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 10)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 10)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 11)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 11)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 11)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 11)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 11)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 12)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 12)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 12)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 12)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 12)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 13)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 13)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 13)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 13)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 13)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 14)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 14)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 14)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 14)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 14)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 15)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 15)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 15)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 15)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 15)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 16)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 16)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 16)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 16)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 16)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 17)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 17)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 17)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 17)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },
      {
        "question": "Which drug is used to reverse opioid overdose? (Variant 17)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 18)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 18)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 18)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 18)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },{
        "question": "Which drug is used to reverse opioid overdose? (Variant 18)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)? (Variant 19)",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most likely to cause cardiac arrest? (Variant 19)",
        "options": [
          "Hyperkalemia",
          "Hypocalcemia",
          "Hypokalemia",
          "Hypernatremia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Hyperkalemia can cause severe cardiac arrhythmias leading to cardiac arrest."
      },
      {
        "question": "Which vaccine is contraindicated during pregnancy? (Variant 19)",
        "options": [
          "Influenza vaccine",
          "Tdap vaccine",
          "MMR vaccine",
          "Hepatitis B vaccine"
        ],
        "answer": "MMR vaccine",
        "explanation": "The MMR vaccine is live-attenuated and contraindicated during pregnancy."
      },
      {
        "question": "Which isolation precaution is required for a patient with tuberculosis? (Variant 19)",
        "options": [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        "answer": "Airborne precautions",
        "explanation": "Tuberculosis requires airborne precautions to prevent transmission of Mycobacterium tuberculosis."
      },{
        "question": "Which drug is used to reverse opioid overdose? (Variant 19)",
        "options": [
          "Flumazenil",
          "Naloxone",
          "Atropine",
          "Protamine sulfate"
        ],
        "answer": "Naloxone",
        "explanation": "Naloxone is an opioid antagonist used to reverse opioid toxicity."
      },
    ],
    "AIIMS NORCET Paper 3": [
      {
        "question": "A nurse is assessing a patient with pneumonia. Which finding is most concerning?",
        "options": [
          "Fever",
          "Productive cough",
          "Oxygen saturation 88%",
          "Fatigue"
        ],
        "answer": "Oxygen saturation 88%",
        "explanation": "SpO2 below 90% indicates hypoxemia requiring urgent intervention."
      },
      {
        "question": "Which lab value indicates effective warfarin therapy?",
        "options": [
          "INR of 1.0",
          "INR of 2.5",
          "INR of 4.5",
          "INR of 6.0"
        ],
        "answer": "INR of 2.5",
        "explanation": "Therapeutic INR for most indications is between 2.0 and 3.0."
      },
      {
        "question": "A patient develops urticaria and wheezing after antibiotic administration. What is the nurse\u2019s first action?",
        "options": [
          "Administer corticosteroids",
          "Stop the antibiotic infusion",
          "Start antihistamines",
          "Continue slow infusion"
        ],
        "answer": "Stop the antibiotic infusion",
        "explanation": "Immediate cessation of the triggering agent is the first step in managing allergic reactions."
      },
      {
        "question": "Which medication is a beta-blocker?",
        "options": [
          "Lisinopril",
          "Metoprolol",
          "Amlodipine",
          "Losartan"
        ],
        "answer": "Metoprolol",
        "explanation": "Metoprolol is a beta-adrenergic blocker used for hypertension and heart conditions."
      },
      {
        "question": "Which assessment finding suggests hypocalcemia?",
        "options": [
          "Bradycardia",
          "Muscle twitching",
          "Flushing",
          "Hypertension"
        ],
        "answer": "Muscle twitching",
        "explanation": "Muscle twitching or tetany are signs of low serum calcium levels."
      },
      {
        "question": "What is the normal serum potassium level?",
        "options": [
          "3.5-5.0 mEq/L",
          "2.5-3.5 mEq/L",
          "5.5-6.5 mEq/L",
          "1.5-2.5 mEq/L"
        ],
        "answer": "3.5-5.0 mEq/L",
        "explanation": "Normal potassium levels are between 3.5 to 5.0 mEq/L."
      },
      {
        "question": "Which position is recommended for a patient experiencing hypotension?",
        "options": [
          "Fowler's position",
          "Trendelenburg position",
          "Lateral position",
          "Prone position"
        ],
        "answer": "Trendelenburg position",
        "explanation": "Trendelenburg position helps improve venous return to the heart in hypotension."
      },
      {
        "question": "A patient receiving chemotherapy reports mouth ulcers. Which term describes this condition?",
        "options": [
          "Gingivitis",
          "Mucositis",
          "Glossitis",
          "Stomatitis"
        ],
        "answer": "Stomatitis",
        "explanation": "Stomatitis is inflammation of the oral mucosa often seen in chemotherapy."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "What does BMI stand for?",
        "options": [
          "Body Mass Indicator",
          "Body Mass Index",
          "Body Measure Index",
          "Body Measurement Indicator"
        ],
        "answer": "Body Mass Index",
        "explanation": "BMI stands for Body Mass Index, a measure of body fat."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "Which position is recommended for a patient experiencing hypotension?",
        "options": [
          "Fowler's position",
          "Trendelenburg position",
          "Lateral position",
          "Prone position"
        ],
        "answer": "Trendelenburg position",
        "explanation": "Trendelenburg position helps improve venous return to the heart in hypotension."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "What type of isolation precaution is required for a patient with tuberculosis?",
        "options": [
          "Contact precaution",
          "Droplet precaution",
          "Airborne precaution",
          "Protective precaution"
        ],
        "answer": "Airborne precaution",
        "explanation": "TB requires airborne precautions with an N95 mask."
      },
      {
        "question": "Which organ is responsible for insulin production?",
        "options": [
          "Liver",
          "Pancreas",
          "Kidney",
          "Stomach"
        ],
        "answer": "Pancreas",
        "explanation": "Pancreas produces insulin in the beta cells of islets of Langerhans."
      },
      {
        "question": "A postoperative patient has a blood pressure of 80/50 mmHg and heart rate of 130 bpm. Which fluid is the most appropriate to administer initially?",
        "options": [
          "Normal saline",
          "5% dextrose",
          "0.45% saline",
          "Albumin"
        ],
        "answer": "Normal saline",
        "explanation": "Normal saline is the fluid of choice for volume resuscitation in hypotension."
      },
      {
        "question": "What is the primary purpose of using an incentive spirometer post-operatively?",
        "options": [
          "Reduce pain",
          "Prevent pneumonia",
          "Promote circulation",
          "Manage bleeding"
        ],
        "answer": "Prevent pneumonia",
        "explanation": "Incentive spirometers help prevent lung complications like pneumonia by encouraging deep breathing."
      },
      {
        "question": "Which vaccine is given at birth as per the Universal Immunization Programme (UIP)?",
        "options": [
          "Hepatitis B",
          "DPT",
          "MMR",
          "Typhoid"
        ],
        "answer": "Hepatitis B",
        "explanation": "Hepatitis B vaccine is administered at birth under UIP."
      },
      {
        "question": "Which vein is commonly used for IV cannulation in adults?",
        "options": [
          "Cephalic vein",
          "Basilic vein",
          "Femoral vein",
          "Jugular vein"
        ],
        "answer": "Cephalic vein",
        "explanation": "Cephalic vein is superficial and easily accessible for IV cannulation."
      },
      {
        "question": "What is the normal pH range of blood?",
        "options": [
          "7.0-7.2",
          "7.35-7.45",
          "7.5-7.6",
          "6.8-7.0"
        ],
        "answer": "7.35-7.45",
        "explanation": "Normal blood pH is tightly regulated between 7.35 and 7.45."
      },
      {
        "question": "What is the term for absence of urine production?",
        "options": [
          "Dysuria",
          "Anuria",
          "Polyuria",
          "Oliguria"
        ],
        "answer": "Anuria",
        "explanation": "Anuria means complete absence or very minimal urine output (<100 mL/day)."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "What is the term for absence of urine production?",
        "options": [
          "Dysuria",
          "Anuria",
          "Polyuria",
          "Oliguria"
        ],
        "answer": "Anuria",
        "explanation": "Anuria means complete absence or very minimal urine output (<100 mL/day)."
      },
      {
        "question": "Which position is recommended for a patient experiencing hypotension?",
        "options": [
          "Fowler's position",
          "Trendelenburg position",
          "Lateral position",
          "Prone position"
        ],
        "answer": "Trendelenburg position",
        "explanation": "Trendelenburg position helps improve venous return to the heart in hypotension."
      },
      {
        "question": "Which organ is responsible for insulin production?",
        "options": [
          "Liver",
          "Pancreas",
          "Kidney",
          "Stomach"
        ],
        "answer": "Pancreas",
        "explanation": "Pancreas produces insulin in the beta cells of islets of Langerhans."
      },
      {
        "question": "What is the antidote for Heparin overdose?",
        "options": [
          "Protamine sulfate",
          "Vitamin K",
          "Atropine",
          "Naloxone"
        ],
        "answer": "Protamine sulfate",
        "explanation": "Protamine sulfate neutralizes the anticoagulant effect of heparin."
      },
      {
        "question": "What does BMI stand for?",
        "options": [
          "Body Mass Indicator",
          "Body Mass Index",
          "Body Measure Index",
          "Body Measurement Indicator"
        ],
        "answer": "Body Mass Index",
        "explanation": "BMI stands for Body Mass Index, a measure of body fat."
      },
      {
        "question": "What is the antidote for Heparin overdose?",
        "options": [
          "Protamine sulfate",
          "Vitamin K",
          "Atropine",
          "Naloxone"
        ],
        "answer": "Protamine sulfate",
        "explanation": "Protamine sulfate neutralizes the anticoagulant effect of heparin."
      },
      {
        "question": "A patient receiving chemotherapy reports mouth ulcers. Which term describes this condition?",
        "options": [
          "Gingivitis",
          "Mucositis",
          "Glossitis",
          "Stomatitis"
        ],
        "answer": "Stomatitis",
        "explanation": "Stomatitis is inflammation of the oral mucosa often seen in chemotherapy."
      },
      {
        "question": "Which sign indicates early hypoxia in a patient?",
        "options": [
          "Cyanosis",
          "Restlessness",
          "Bradycardia",
          "Hypotension"
        ],
        "answer": "Restlessness",
        "explanation": "Restlessness is an early sign of hypoxia due to inadequate oxygen delivery to the brain."
      },
      {
        "question": "What is the term for absence of urine production?",
        "options": [
          "Dysuria",
          "Anuria",
          "Polyuria",
          "Oliguria"
        ],
        "answer": "Anuria",
        "explanation": "Anuria means complete absence or very minimal urine output (<100 mL/day)."
      },
      {
        "question": "Which cranial nerve is responsible for the sense of smell?",
        "options": [
          "Optic nerve",
          "Olfactory nerve",
          "Facial nerve",
          "Trigeminal nerve"
        ],
        "answer": "Olfactory nerve",
        "explanation": "The olfactory nerve (cranial nerve I) is responsible for smell."
      },
      {
        "question": "Which electrolyte imbalance is most commonly associated with diarrhea?",
        "options": [
          "Hyperkalemia",
          "Hypokalemia",
          "Hypernatremia",
          "Hyponatremia"
        ],
        "answer": "Hypokalemia",
        "explanation": "Diarrhea leads to significant potassium loss, resulting in hypokalemia."
      },
      {
        "question": "A nurse is assessing a patient with pneumonia. Which finding is most concerning?",
        "options": [
          "Fever",
          "Productive cough",
          "Oxygen saturation 88%",
          "Fatigue"
        ],
        "answer": "Oxygen saturation 88%",
        "explanation": "SpO2 below 90% indicates hypoxemia requiring urgent intervention."
      },
      {
        "question": "Which vein is commonly used for IV cannulation in adults?",
        "options": [
          "Cephalic vein",
          "Basilic vein",
          "Femoral vein",
          "Jugular vein"
        ],
        "answer": "Cephalic vein",
        "explanation": "Cephalic vein is superficial and easily accessible for IV cannulation."
      },
      {
        "question": "What is the normal pH range of blood?",
        "options": [
          "7.0-7.2",
          "7.35-7.45",
          "7.5-7.6",
          "6.8-7.0"
        ],
        "answer": "7.35-7.45",
        "explanation": "Normal blood pH is tightly regulated between 7.35 and 7.45."
      },
      {
        "question": "A patient develops urticaria and wheezing after antibiotic administration. What is the nurse\u2019s first action?",
        "options": [
          "Administer corticosteroids",
          "Stop the antibiotic infusion",
          "Start antihistamines",
          "Continue slow infusion"
        ],
        "answer": "Stop the antibiotic infusion",
        "explanation": "Immediate cessation of the triggering agent is the first step in managing allergic reactions."
      },
      {
        "question": "A patient with COPD is receiving oxygen therapy. Which oxygen delivery device is most appropriate to maintain precise oxygen concentration?",
        "options": [
          "Nasal cannula",
          "Simple mask",
          "Venturi mask",
          "Non-rebreather mask"
        ],
        "answer": "Venturi mask",
        "explanation": "Venturi masks provide controlled, precise oxygen concentrations ideal for COPD patients."
      },
      {
        "question": "Which vaccine is given at birth as per the Universal Immunization Programme (UIP)?",
        "options": [
          "Hepatitis B",
          "DPT",
          "MMR",
          "Typhoid"
        ],
        "answer": "Hepatitis B",
        "explanation": "Hepatitis B vaccine is administered at birth under UIP."
      },
      {
        "question": "Which vitamin is essential for blood clotting?",
        "options": [
          "Vitamin A",
          "Vitamin D",
          "Vitamin K",
          "Vitamin C"
        ],
        "answer": "Vitamin K",
        "explanation": "Vitamin K is necessary for synthesis of clotting factors."
      },
      {
        "question": "A patient with COPD is receiving oxygen therapy. Which oxygen delivery device is most appropriate to maintain precise oxygen concentration?",
        "options": [
          "Nasal cannula",
          "Simple mask",
          "Venturi mask",
          "Non-rebreather mask"
        ],
        "answer": "Venturi mask",
        "explanation": "Venturi masks provide controlled, precise oxygen concentrations ideal for COPD patients."
      },
      {
        "question": "Which vein is commonly used for IV cannulation in adults?",
        "options": [
          "Cephalic vein",
          "Basilic vein",
          "Femoral vein",
          "Jugular vein"
        ],
        "answer": "Cephalic vein",
        "explanation": "Cephalic vein is superficial and easily accessible for IV cannulation."
      },
      {
        "question": "What is the most reliable method for confirming endotracheal tube placement?",
        "options": [
          "Chest X-ray",
          "Auscultation of chest",
          "End-tidal CO2 detector",
          "Observation of chest rise"
        ],
        "answer": "End-tidal CO2 detector",
        "explanation": "Monitoring end-tidal CO2 is the most reliable method to confirm tube placement."
      },
      {
        "question": "What is the term for absence of urine production?",
        "options": [
          "Dysuria",
          "Anuria",
          "Polyuria",
          "Oliguria"
        ],
        "answer": "Anuria",
        "explanation": "Anuria means complete absence or very minimal urine output (<100 mL/day)."
      },
      {
        "question": "A patient develops urticaria and wheezing after antibiotic administration. What is the nurse\u2019s first action?",
        "options": [
          "Administer corticosteroids",
          "Stop the antibiotic infusion",
          "Start antihistamines",
          "Continue slow infusion"
        ],
        "answer": "Stop the antibiotic infusion",
        "explanation": "Immediate cessation of the triggering agent is the first step in managing allergic reactions."
      },
      {
        "question": "Which vaccine is given at birth as per the Universal Immunization Programme (UIP)?",
        "options": [
          "Hepatitis B",
          "DPT",
          "MMR",
          "Typhoid"
        ],
        "answer": "Hepatitis B",
        "explanation": "Hepatitis B vaccine is administered at birth under UIP."
      },
      {
        "question": "Which electrolyte imbalance is most commonly associated with diarrhea?",
        "options": [
          "Hyperkalemia",
          "Hypokalemia",
          "Hypernatremia",
          "Hyponatremia"
        ],
        "answer": "Hypokalemia",
        "explanation": "Diarrhea leads to significant potassium loss, resulting in hypokalemia."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "What is the antidote for Heparin overdose?",
        "options": [
          "Protamine sulfate",
          "Vitamin K",
          "Atropine",
          "Naloxone"
        ],
        "answer": "Protamine sulfate",
        "explanation": "Protamine sulfate neutralizes the anticoagulant effect of heparin."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)?",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which electrolyte imbalance is most commonly associated with diarrhea?",
        "options": [
          "Hyperkalemia",
          "Hypokalemia",
          "Hypernatremia",
          "Hyponatremia"
        ],
        "answer": "Hypokalemia",
        "explanation": "Diarrhea leads to significant potassium loss, resulting in hypokalemia."
      },
      {
        "question": "What is the antidote for Heparin overdose?",
        "options": [
          "Protamine sulfate",
          "Vitamin K",
          "Atropine",
          "Naloxone"
        ],
        "answer": "Protamine sulfate",
        "explanation": "Protamine sulfate neutralizes the anticoagulant effect of heparin."
      },
      {
        "question": "Which sign indicates early hypoxia in a patient?",
        "options": [
          "Cyanosis",
          "Restlessness",
          "Bradycardia",
          "Hypotension"
        ],
        "answer": "Restlessness",
        "explanation": "Restlessness is an early sign of hypoxia due to inadequate oxygen delivery to the brain."
      },
      {
        "question": "What does BMI stand for?",
        "options": [
          "Body Mass Indicator",
          "Body Mass Index",
          "Body Measure Index",
          "Body Measurement Indicator"
        ],
        "answer": "Body Mass Index",
        "explanation": "BMI stands for Body Mass Index, a measure of body fat."
      },
      {
        "question": "Which sign indicates early hypoxia in a patient?",
        "options": [
          "Cyanosis",
          "Restlessness",
          "Bradycardia",
          "Hypotension"
        ],
        "answer": "Restlessness",
        "explanation": "Restlessness is an early sign of hypoxia due to inadequate oxygen delivery to the brain."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "Which medication is a beta-blocker?",
        "options": [
          "Lisinopril",
          "Metoprolol",
          "Amlodipine",
          "Losartan"
        ],
        "answer": "Metoprolol",
        "explanation": "Metoprolol is a beta-adrenergic blocker used for hypertension and heart conditions."
      },
      {
        "question": "Which lab value indicates effective warfarin therapy?",
        "options": [
          "INR of 1.0",
          "INR of 2.5",
          "INR of 4.5",
          "INR of 6.0"
        ],
        "answer": "INR of 2.5",
        "explanation": "Therapeutic INR for most indications is between 2.0 and 3.0."
      },
      {
        "question": "Which assessment finding suggests hypocalcemia?",
        "options": [
          "Bradycardia",
          "Muscle twitching",
          "Flushing",
          "Hypertension"
        ],
        "answer": "Muscle twitching",
        "explanation": "Muscle twitching or tetany are signs of low serum calcium levels."
      },
      {
        "question": "What type of isolation precaution is required for a patient with tuberculosis?",
        "options": [
          "Contact precaution",
          "Droplet precaution",
          "Airborne precaution",
          "Protective precaution"
        ],
        "answer": "Airborne precaution",
        "explanation": "TB requires airborne precautions with an N95 mask."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "Which vaccine is given at birth as per the Universal Immunization Programme (UIP)?",
        "options": [
          "Hepatitis B",
          "DPT",
          "MMR",
          "Typhoid"
        ],
        "answer": "Hepatitis B",
        "explanation": "Hepatitis B vaccine is administered at birth under UIP."
      },
      {
        "question": "What is the term for absence of urine production?",
        "options": [
          "Dysuria",
          "Anuria",
          "Polyuria",
          "Oliguria"
        ],
        "answer": "Anuria",
        "explanation": "Anuria means complete absence or very minimal urine output (<100 mL/day)."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "A patient receiving chemotherapy reports mouth ulcers. Which term describes this condition?",
        "options": [
          "Gingivitis",
          "Mucositis",
          "Glossitis",
          "Stomatitis"
        ],
        "answer": "Stomatitis",
        "explanation": "Stomatitis is inflammation of the oral mucosa often seen in chemotherapy."
      },
      {
        "question": "Which assessment finding suggests hypocalcemia?",
        "options": [
          "Bradycardia",
          "Muscle twitching",
          "Flushing",
          "Hypertension"
        ],
        "answer": "Muscle twitching",
        "explanation": "Muscle twitching or tetany are signs of low serum calcium levels."
      },
      {
        "question": "What is the most reliable method for confirming endotracheal tube placement?",
        "options": [
          "Chest X-ray",
          "Auscultation of chest",
          "End-tidal CO2 detector",
          "Observation of chest rise"
        ],
        "answer": "End-tidal CO2 detector",
        "explanation": "Monitoring end-tidal CO2 is the most reliable method to confirm tube placement."
      },
      {
        "question": "A patient receiving chemotherapy reports mouth ulcers. Which term describes this condition?",
        "options": [
          "Gingivitis",
          "Mucositis",
          "Glossitis",
          "Stomatitis"
        ],
        "answer": "Stomatitis",
        "explanation": "Stomatitis is inflammation of the oral mucosa often seen in chemotherapy."
      },
      {
        "question": "Which medication is a beta-blocker?",
        "options": [
          "Lisinopril",
          "Metoprolol",
          "Amlodipine",
          "Losartan"
        ],
        "answer": "Metoprolol",
        "explanation": "Metoprolol is a beta-adrenergic blocker used for hypertension and heart conditions."
      },
      {
        "question": "What is the most reliable method for confirming endotracheal tube placement?",
        "options": [
          "Chest X-ray",
          "Auscultation of chest",
          "End-tidal CO2 detector",
          "Observation of chest rise"
        ],
        "answer": "End-tidal CO2 detector",
        "explanation": "Monitoring end-tidal CO2 is the most reliable method to confirm tube placement."
      },
      {
        "question": "Which instrument is used to measure blood pressure?",
        "options": [
          "Thermometer",
          "Sphygmomanometer",
          "Stethoscope",
          "Pulse oximeter"
        ],
        "answer": "Sphygmomanometer",
        "explanation": "Sphygmomanometer measures arterial blood pressure."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "A 65-year-old man presents with sudden chest pain radiating to the left arm. What is the first action the nurse should take?",
        "options": [
          "Start IV fluids",
          "Administer oxygen",
          "Give aspirin",
          "Call for ECG"
        ],
        "answer": "Administer oxygen",
        "explanation": "Immediate oxygen administration helps prevent myocardial tissue damage in suspected MI."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)?",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)?",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "A patient develops urticaria and wheezing after antibiotic administration. What is the nurse\u2019s first action?",
        "options": [
          "Administer corticosteroids",
          "Stop the antibiotic infusion",
          "Start antihistamines",
          "Continue slow infusion"
        ],
        "answer": "Stop the antibiotic infusion",
        "explanation": "Immediate cessation of the triggering agent is the first step in managing allergic reactions."
      },
      {
        "question": "Which lab value indicates effective warfarin therapy?",
        "options": [
          "INR of 1.0",
          "INR of 2.5",
          "INR of 4.5",
          "INR of 6.0"
        ],
        "answer": "INR of 2.5",
        "explanation": "Therapeutic INR for most indications is between 2.0 and 3.0."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "What type of isolation precaution is required for a patient with tuberculosis?",
        "options": [
          "Contact precaution",
          "Droplet precaution",
          "Airborne precaution",
          "Protective precaution"
        ],
        "answer": "Airborne precaution",
        "explanation": "TB requires airborne precautions with an N95 mask."
      },
      {
        "question": "What is the normal range of respiratory rate for a healthy adult?",
        "options": [
          "8-12 breaths/min",
          "12-20 breaths/min",
          "20-28 breaths/min",
          "28-36 breaths/min"
        ],
        "answer": "12-20 breaths/min",
        "explanation": "The normal adult respiratory rate is between 12-20 breaths per minute."
      },
      {
        "question": "A patient with COPD is receiving oxygen therapy. Which oxygen delivery device is most appropriate to maintain precise oxygen concentration?",
        "options": [
          "Nasal cannula",
          "Simple mask",
          "Venturi mask",
          "Non-rebreather mask"
        ],
        "answer": "Venturi mask",
        "explanation": "Venturi masks provide controlled, precise oxygen concentrations ideal for COPD patients."
      },
      {
        "question": "Which cranial nerve is responsible for the sense of smell?",
        "options": [
          "Optic nerve",
          "Olfactory nerve",
          "Facial nerve",
          "Trigeminal nerve"
        ],
        "answer": "Olfactory nerve",
        "explanation": "The olfactory nerve (cranial nerve I) is responsible for smell."
      },
      {
        "question": "Which vein is commonly used for IV cannulation in adults?",
        "options": [
          "Cephalic vein",
          "Basilic vein",
          "Femoral vein",
          "Jugular vein"
        ],
        "answer": "Cephalic vein",
        "explanation": "Cephalic vein is superficial and easily accessible for IV cannulation."
      },
      {
        "question": "What is the normal serum potassium level?",
        "options": [
          "3.5-5.0 mEq/L",
          "2.5-3.5 mEq/L",
          "5.5-6.5 mEq/L",
          "1.5-2.5 mEq/L"
        ],
        "answer": "3.5-5.0 mEq/L",
        "explanation": "Normal potassium levels are between 3.5 to 5.0 mEq/L."
      },
      {
        "question": "Which instrument is used to measure blood pressure?",
        "options": [
          "Thermometer",
          "Sphygmomanometer",
          "Stethoscope",
          "Pulse oximeter"
        ],
        "answer": "Sphygmomanometer",
        "explanation": "Sphygmomanometer measures arterial blood pressure."
      },
      {
        "question": "Which instrument is used to measure blood pressure?",
        "options": [
          "Thermometer",
          "Sphygmomanometer",
          "Stethoscope",
          "Pulse oximeter"
        ],
        "answer": "Sphygmomanometer",
        "explanation": "Sphygmomanometer measures arterial blood pressure."
      },
      {
        "question": "Which lab value indicates effective warfarin therapy?",
        "options": [
          "INR of 1.0",
          "INR of 2.5",
          "INR of 4.5",
          "INR of 6.0"
        ],
        "answer": "INR of 2.5",
        "explanation": "Therapeutic INR for most indications is between 2.0 and 3.0."
      },
      {
        "question": "What is the normal pH range of blood?",
        "options": [
          "7.0-7.2",
          "7.35-7.45",
          "7.5-7.6",
          "6.8-7.0"
        ],
        "answer": "7.35-7.45",
        "explanation": "Normal blood pH is tightly regulated between 7.35 and 7.45."
      },
      {
        "question": "What is the correct sequence for cardiopulmonary resuscitation (CPR)?",
        "options": [
          "Airway, Breathing, Circulation",
          "Circulation, Airway, Breathing",
          "Breathing, Airway, Circulation",
          "Airway, Circulation, Breathing"
        ],
        "answer": "Circulation, Airway, Breathing",
        "explanation": "In Basic Life Support (BLS), the sequence is Circulation, Airway, Breathing (CAB)."
      },
      {
        "question": "Which sign indicates early hypoxia in a patient?",
        "options": [
          "Cyanosis",
          "Restlessness",
          "Bradycardia",
          "Hypotension"
        ],
        "answer": "Restlessness",
        "explanation": "Restlessness is an early sign of hypoxia due to inadequate oxygen delivery to the brain."
      },
      {
        "question": "Which vitamin is essential for blood clotting?",
        "options": [
          "Vitamin A",
          "Vitamin D",
          "Vitamin K",
          "Vitamin C"
        ],
        "answer": "Vitamin K",
        "explanation": "Vitamin K is necessary for synthesis of clotting factors."
      },
      {
        "question": "Which electrolyte imbalance is most commonly associated with diarrhea?",
        "options": [
          "Hyperkalemia",
          "Hypokalemia",
          "Hypernatremia",
          "Hyponatremia"
        ],
        "answer": "Hypokalemia",
        "explanation": "Diarrhea leads to significant potassium loss, resulting in hypokalemia."
      },
      {
        "question": "A nurse is assessing a patient with pneumonia. Which finding is most concerning?",
        "options": [
          "Fever",
          "Productive cough",
          "Oxygen saturation 88%",
          "Fatigue"
        ],
        "answer": "Oxygen saturation 88%",
        "explanation": "SpO2 below 90% indicates hypoxemia requiring urgent intervention."
      },
      {
        "question": "Which assessment finding suggests hypocalcemia?",
        "options": [
          "Bradycardia",
          "Muscle twitching",
          "Flushing",
          "Hypertension"
        ],
        "answer": "Muscle twitching",
        "explanation": "Muscle twitching or tetany are signs of low serum calcium levels."
      },
      {
        "question": "A diabetic patient is unconscious with blood glucose 40 mg/dL. What is the priority nursing action?",
        "options": [
          "Start an insulin drip",
          "Administer IV dextrose",
          "Give oral glucose",
          "Call the physician"
        ],
        "answer": "Administer IV dextrose",
        "explanation": "Unconscious hypoglycemic patients require immediate IV dextrose administration."
      },
      {
        "question": "Which organ is responsible for insulin production?",
        "options": [
          "Liver",
          "Pancreas",
          "Kidney",
          "Stomach"
        ],
        "answer": "Pancreas",
        "explanation": "Pancreas produces insulin in the beta cells of islets of Langerhans."
      },
      {
        "question": "Which cranial nerve is responsible for the sense of smell?",
        "options": [
          "Optic nerve",
          "Olfactory nerve",
          "Facial nerve",
          "Trigeminal nerve"
        ],
        "answer": "Olfactory nerve",
        "explanation": "The olfactory nerve (cranial nerve I) is responsible for smell."
      }
    ],
  }

  // For subjects without specific templates, use general templates
  const generalTemplates = [
    {
      question: `Sample ${subject} question 1?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A",
      explanation: "This is the explanation for the correct answer.",
    },
    {
      question: `Sample ${subject} question 2?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option B",
      explanation: "This is the explanation for the correct answer.",
    },
    {
      question: `Sample ${subject} question 3?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option C",
      explanation: "This is the explanation for the correct answer.",
    },
  ]

  // Get templates for the subject or use general templates
  const subjectTemplates = templates[subject] || generalTemplates

  // Generate the requested number of questions
  for (let i = 0; i < count; i++) {
    // Use template questions first, then generate generic ones
    if (i < subjectTemplates.length) {
      questions.push({
        id: i + 1,
        ...subjectTemplates[i],
      })
    } else {
      questions.push({
        id: i + 1,
        question: `${subject} Question ${i + 1}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
        explanation: `This is the explanation for ${subject} Question ${i + 1}.`,
      })
    }
  }

  return questions
}

// Function to get paper data by ID
export async function getPaperData(paperId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Return paper data if it exists
  if (papers[paperId as keyof typeof papers]) {
    return papers[paperId as keyof typeof papers]
  }

  // Return null if paper doesn't exist
  return null
}
