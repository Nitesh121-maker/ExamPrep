// Sample paper data
const papers = {
  paper1: {
    title: "General Knowledge",
    duration: 90,
    questions: generateQuestions("General Knowledge", 100),
  },
  paper2: {
    title: "Mathematics",
    duration: 90,
    questions: generateQuestions("Mathematics", 100),
  },
  paper3: {
    title: "English Language",
    duration: 90,
    questions: generateQuestions("English Language", 100),
  },
  paper4: {
    title: "Physics",
    duration: 90,
    questions: generateQuestions("Physics", 100),
  },
  paper5: {
    title: "Chemistry",
    duration: 90,
    questions: generateQuestions("Chemistry", 100),
  },
  paper6: {
    title: "Biology",
    duration: 90,
    questions: generateQuestions("Biology", 100),
  },
  paper7: {
    title: "Computer Science",
    duration: 90,
    questions: generateQuestions("Computer Science", 100),
  },
  paper8: {
    title: "Economics",
    duration: 90,
    questions: generateQuestions("Economics", 100),
  },
  paper9: {
    title: "Geography",
    duration: 90,
    questions: generateQuestions("Geography", 100),
  },
  paper10: {
    title: "History",
    duration: 90,
    questions: generateQuestions("History", 100),
  },
}

// Helper function to generate sample questions
function generateQuestions(subject: string, count: number) {
  const questions = []

  // Sample question templates for different subjects
  const templates: Record<string, any[]> = {
    "General Knowledge": [
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
        "question": "What is the normal pH range of blood?",
        "options": [
          "7.0-7.2",
          "7.35-7.45",
          "7.5-7.6",
          "6.8-7.0"
        ],
        "answer": "7.35-7.45",
        "explanation": "Normal blood pH is tightly regulated between 7.35 and 7.45."
      }
    ],
    "English Language": [
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
        "question": "Which electrolyte abnormality is common in renal failure?",
        "options": [
          "Hypernatremia",
          "Hypokalemia",
          "Hyperkalemia",
          "Hypocalcemia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Renal failure often leads to elevated potassium levels (hyperkalemia)."
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
        "question": "Which electrolyte abnormality is common in renal failure?",
        "options": [
          "Hypernatremia",
          "Hypokalemia",
          "Hyperkalemia",
          "Hypocalcemia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Renal failure often leads to elevated potassium levels (hyperkalemia)."
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
        "question": "Which electrolyte abnormality is common in renal failure?",
        "options": [
          "Hypernatremia",
          "Hypokalemia",
          "Hyperkalemia",
          "Hypocalcemia"
        ],
        "answer": "Hyperkalemia",
        "explanation": "Renal failure often leads to elevated potassium levels (hyperkalemia)."
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
        "question": "What type of isolation precaution is required for a patient with tuberculosis?",
        "options": [
          "Contact precaution",
          "Droplet precaution",
          "Airborne precaution",
          "Protective precaution"
        ],
        "answer": "Airborne precaution",
        "explanation": "TB requires airborne precautions with an N95 mask."
      }
    ],
    "Physics": [
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
