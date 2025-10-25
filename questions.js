// CPRE Foundation Level Final Practice Exams
// 5 comprehensive final exams with 45 questions each
// All Educational Units (1-7) covered

const allExams = {
    "1": {
        "title": "CPRE Final Exam 1",
        "questions": [
            {
                "id": 1,
                "points": 1,
                "type": "single",
                "question": "What is Requirements Engineering primarily concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "Writing code for software applications"
                    },
                    {
                        "id": "B",
                        "text": "Understanding and documenting the needs and capabilities that a system shall have"
                    },
                    {
                        "id": "C",
                        "text": "Testing software after development"
                    },
                    {
                        "id": "D",
                        "text": "Managing project budgets and timelines"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 2,
                "points": 2,
                "type": "single",
                "question": "Which of the following is NOT one of the nine fundamental principles of RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Value-orientation"
                    },
                    {
                        "id": "B",
                        "text": "Stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Cost-minimization"
                    },
                    {
                        "id": "D",
                        "text": "Validation"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 3,
                "points": 2,
                "type": "single",
                "question": "What is the main purpose of abstraction levels in requirements documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make documents longer"
                    },
                    {
                        "id": "B",
                        "text": "To separate concerns and manage complexity by documenting requirements at different levels of detail"
                    },
                    {
                        "id": "C",
                        "text": "To confuse stakeholders"
                    },
                    {
                        "id": "D",
                        "text": "To reduce the number of requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 4,
                "points": 2,
                "type": "single",
                "question": "According to Principle 1 (Value-orientation), how is the value of a requirement calculated?",
                "options": [
                    {
                        "id": "A",
                        "text": "Value = Cost + Benefit"
                    },
                    {
                        "id": "B",
                        "text": "Value = Benefit - Cost"
                    },
                    {
                        "id": "C",
                        "text": "Value = Cost \u00d7 Benefit"
                    },
                    {
                        "id": "D",
                        "text": "Value = Benefit / Cost"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 5,
                "points": 2,
                "type": "single",
                "question": "What is the Kano model used for in Requirements Engineering?",
                "options": [
                    {
                        "id": "A",
                        "text": "To prioritize requirements based on cost"
                    },
                    {
                        "id": "B",
                        "text": "To classify features based on their effect on customer satisfaction"
                    },
                    {
                        "id": "C",
                        "text": "To create use case diagrams"
                    },
                    {
                        "id": "D",
                        "text": "To manage project timelines"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 6,
                "points": 1,
                "type": "single",
                "question": "Which of the following is a characteristic of natural-language-based work products?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are always unambiguous"
                    },
                    {
                        "id": "B",
                        "text": "They can be understood by non-technical stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "They provide automatic consistency checking"
                    },
                    {
                        "id": "D",
                        "text": "They require special tools to read"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 7,
                "points": 2,
                "type": "single",
                "question": "What does the term \"requirement\" denote according to the CPRE glossary?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only a documented representation"
                    },
                    {
                        "id": "B",
                        "text": "Only a need perceived by a stakeholder"
                    },
                    {
                        "id": "C",
                        "text": "A need perceived by a stakeholder, a capability/property that a system shall have, and a documented representation"
                    },
                    {
                        "id": "D",
                        "text": "Only technical specifications"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 8,
                "points": 2,
                "type": "single",
                "question": "What is the primary purpose of configuring an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make the process as complex as possible"
                    },
                    {
                        "id": "B",
                        "text": "To fit the given development and system context"
                    },
                    {
                        "id": "C",
                        "text": "To follow industry standards exactly"
                    },
                    {
                        "id": "D",
                        "text": "To minimize stakeholder involvement"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 9,
                "points": 1,
                "type": "single",
                "question": "Which elicitation technique is most appropriate for reaching large numbers of stakeholders with predefined questions?",
                "options": [
                    {
                        "id": "A",
                        "text": "Interviews"
                    },
                    {
                        "id": "B",
                        "text": "Workshops"
                    },
                    {
                        "id": "C",
                        "text": "Questionnaires"
                    },
                    {
                        "id": "D",
                        "text": "Observation"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 10,
                "points": 2,
                "type": "single",
                "question": "What is requirements management primarily concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "Creating new requirements"
                    },
                    {
                        "id": "B",
                        "text": "Managing existing requirements including storing, changing, and tracing"
                    },
                    {
                        "id": "C",
                        "text": "Deleting old requirements"
                    },
                    {
                        "id": "D",
                        "text": "Only documenting requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 11,
                "points": 1,
                "type": "single",
                "question": "What is a phrase template?",
                "options": [
                    {
                        "id": "A",
                        "text": "A complete document structure"
                    },
                    {
                        "id": "B",
                        "text": "A predefined syntactic structure for expressing a single requirement"
                    },
                    {
                        "id": "C",
                        "text": "A graphical model"
                    },
                    {
                        "id": "D",
                        "text": "A test case format"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 12,
                "points": 2,
                "type": "single",
                "question": "Which principle states that requirements cannot be understood in isolation?",
                "options": [
                    {
                        "id": "A",
                        "text": "Principle 1: Value-orientation"
                    },
                    {
                        "id": "B",
                        "text": "Principle 3: Shared understanding"
                    },
                    {
                        "id": "C",
                        "text": "Principle 4: Context"
                    },
                    {
                        "id": "D",
                        "text": "Principle 7: Evolution"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 13,
                "points": 2,
                "type": "single",
                "question": "What category of Kano features provides basic functionality that customers expect?",
                "options": [
                    {
                        "id": "A",
                        "text": "Satisfiers"
                    },
                    {
                        "id": "B",
                        "text": "Delighters"
                    },
                    {
                        "id": "C",
                        "text": "Dissatisfiers"
                    },
                    {
                        "id": "D",
                        "text": "Indifferent features"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 14,
                "points": 1,
                "type": "single",
                "question": "Which type of tool support is related to defining and storing requirements attributes?",
                "options": [
                    {
                        "id": "A",
                        "text": "Documentation of knowledge"
                    },
                    {
                        "id": "B",
                        "text": "Management of requirements"
                    },
                    {
                        "id": "C",
                        "text": "Modeling of requirements"
                    },
                    {
                        "id": "D",
                        "text": "Testing of requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 15,
                "points": 2,
                "type": "single",
                "question": "What are the three aspects that requirements models can focus on?",
                "options": [
                    {
                        "id": "A",
                        "text": "Cost, time, and quality"
                    },
                    {
                        "id": "B",
                        "text": "Structure and data, function and flow, state and behavior"
                    },
                    {
                        "id": "C",
                        "text": "People, process, and technology"
                    },
                    {
                        "id": "D",
                        "text": "Planning, execution, and monitoring"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 16,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of a life cycle model for requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "To define the physical lifecycle of hardware"
                    },
                    {
                        "id": "B",
                        "text": "To define allowed statuses and state transitions for work products"
                    },
                    {
                        "id": "C",
                        "text": "To plan project schedules"
                    },
                    {
                        "id": "D",
                        "text": "To calculate costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 17,
                "points": 1,
                "type": "single",
                "question": "Why is Requirements Engineering important?",
                "options": [
                    {
                        "id": "A",
                        "text": "It only helps with documentation"
                    },
                    {
                        "id": "B",
                        "text": "It reduces the risk of building the wrong system and costly rework"
                    },
                    {
                        "id": "C",
                        "text": "It is required by law"
                    },
                    {
                        "id": "D",
                        "text": "It makes projects longer"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 18,
                "points": 1,
                "type": "single",
                "question": "Which of the following is a questioning technique?",
                "options": [
                    {
                        "id": "A",
                        "text": "Prototyping"
                    },
                    {
                        "id": "B",
                        "text": "Interviews"
                    },
                    {
                        "id": "C",
                        "text": "Perspective-based reading"
                    },
                    {
                        "id": "D",
                        "text": "Field observation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 19,
                "points": 2,
                "type": "single",
                "question": "Which factor influences the configuration of an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "The color of the office walls"
                    },
                    {
                        "id": "B",
                        "text": "Overall process fit with system development process"
                    },
                    {
                        "id": "C",
                        "text": "The personal preferences of developers"
                    },
                    {
                        "id": "D",
                        "text": "The weather conditions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 20,
                "points": 2,
                "type": "single",
                "question": "What does Principle 6 (Validation) emphasize?",
                "options": [
                    {
                        "id": "A",
                        "text": "Requirements must be validated to ensure they match stakeholders' needs"
                    },
                    {
                        "id": "B",
                        "text": "Validation is optional"
                    },
                    {
                        "id": "C",
                        "text": "Only technical requirements need validation"
                    },
                    {
                        "id": "D",
                        "text": "Validation should only happen after system deployment"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Correct answer is A"
            },
            {
                "id": 21,
                "points": 1,
                "type": "single",
                "question": "What is a form template used for?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create entire documents"
                    },
                    {
                        "id": "B",
                        "text": "To provide predefined fields to be filled in for medium-sized work products like use cases"
                    },
                    {
                        "id": "C",
                        "text": "To write code"
                    },
                    {
                        "id": "D",
                        "text": "To test requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 22,
                "points": 2,
                "type": "single",
                "question": "What is version control in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Controlling which stakeholders see requirements"
                    },
                    {
                        "id": "B",
                        "text": "Managing multiple versions of work products as they evolve"
                    },
                    {
                        "id": "C",
                        "text": "Limiting the number of requirements"
                    },
                    {
                        "id": "D",
                        "text": "Controlling project costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 23,
                "points": 2,
                "type": "single",
                "question": "What are collaboration techniques in requirements elicitation?",
                "options": [
                    {
                        "id": "A",
                        "text": "Techniques where only one person works alone"
                    },
                    {
                        "id": "B",
                        "text": "Group-oriented techniques like workshops that leverage interaction between participants"
                    },
                    {
                        "id": "C",
                        "text": "Automated requirements generation"
                    },
                    {
                        "id": "D",
                        "text": "Code review sessions"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 24,
                "points": 2,
                "type": "single",
                "question": "What should be considered when introducing RE tools?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only the license costs"
                    },
                    {
                        "id": "B",
                        "text": "All life cycle costs including implementation, operation, and maintenance"
                    },
                    {
                        "id": "C",
                        "text": "Only the training costs"
                    },
                    {
                        "id": "D",
                        "text": "Only the initial purchase costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 25,
                "points": 2,
                "type": "single",
                "question": "According to Principle 8 (Innovation), what should good RE strive for?",
                "options": [
                    {
                        "id": "A",
                        "text": "Giving stakeholders exactly what they ask for"
                    },
                    {
                        "id": "B",
                        "text": "Making stakeholders happy and excited beyond their expectations"
                    },
                    {
                        "id": "C",
                        "text": "Minimizing requirements"
                    },
                    {
                        "id": "D",
                        "text": "Following competitors exactly"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 26,
                "points": 1,
                "type": "single",
                "question": "What does \"overall process fit\" mean as an influencing factor for RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "The process should be as short as possible"
                    },
                    {
                        "id": "B",
                        "text": "The RE process must fit the overall system development process"
                    },
                    {
                        "id": "C",
                        "text": "The process should involve as few people as possible"
                    },
                    {
                        "id": "D",
                        "text": "The process should only focus on documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 27,
                "points": 2,
                "type": "single",
                "question": "Which quality criterion expresses how well a model represents the facts correctly and completely?",
                "options": [
                    {
                        "id": "A",
                        "text": "Syntactic quality"
                    },
                    {
                        "id": "B",
                        "text": "Semantic quality"
                    },
                    {
                        "id": "C",
                        "text": "Pragmatic quality"
                    },
                    {
                        "id": "D",
                        "text": "Economic quality"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 28,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of requirements attributes?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make requirements longer"
                    },
                    {
                        "id": "B",
                        "text": "To identify and collect data about work products and requirements"
                    },
                    {
                        "id": "C",
                        "text": "To hide information from stakeholders"
                    },
                    {
                        "id": "D",
                        "text": "To increase project costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 29,
                "points": 1,
                "type": "single",
                "question": "What are observation techniques used for?",
                "options": [
                    {
                        "id": "A",
                        "text": "To watch competitors"
                    },
                    {
                        "id": "B",
                        "text": "To observe stakeholders in their work environment to understand their needs"
                    },
                    {
                        "id": "C",
                        "text": "To monitor project schedules"
                    },
                    {
                        "id": "D",
                        "text": "To check code quality"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 30,
                "points": 2,
                "type": "single",
                "question": "Where does Requirements Engineering fit in the system development lifecycle?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only at the beginning"
                    },
                    {
                        "id": "B",
                        "text": "Only at the end"
                    },
                    {
                        "id": "C",
                        "text": "Throughout the entire lifecycle in various development contexts"
                    },
                    {
                        "id": "D",
                        "text": "Only during testing phase"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 31,
                "points": 2,
                "type": "single",
                "question": "What is requirements traceability?",
                "options": [
                    {
                        "id": "A",
                        "text": "The ability to track project expenses"
                    },
                    {
                        "id": "B",
                        "text": "The ability to follow relationships between requirements and other artifacts"
                    },
                    {
                        "id": "C",
                        "text": "The ability to locate requirements documents"
                    },
                    {
                        "id": "D",
                        "text": "The ability to measure requirement size"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 32,
                "points": 1,
                "type": "single",
                "question": "What is a document template?",
                "options": [
                    {
                        "id": "A",
                        "text": "A single phrase for writing requirements"
                    },
                    {
                        "id": "B",
                        "text": "A predefined skeleton structure for an entire document"
                    },
                    {
                        "id": "C",
                        "text": "A graphical diagram"
                    },
                    {
                        "id": "D",
                        "text": "A testing framework"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 33,
                "points": 2,
                "type": "single",
                "question": "Which Kano category includes features that customers explicitly request?",
                "options": [
                    {
                        "id": "A",
                        "text": "Dissatisfiers"
                    },
                    {
                        "id": "B",
                        "text": "Satisfiers"
                    },
                    {
                        "id": "C",
                        "text": "Delighters"
                    },
                    {
                        "id": "D",
                        "text": "Mandatory features"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 34,
                "points": 2,
                "type": "single",
                "question": "What does Principle 7 (Evolution) state about requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "Requirements should never change"
                    },
                    {
                        "id": "B",
                        "text": "Changing requirements are normal, not exceptional"
                    },
                    {
                        "id": "C",
                        "text": "Requirements only change in waterfall projects"
                    },
                    {
                        "id": "D",
                        "text": "Requirements evolution should be prevented"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 35,
                "points": 2,
                "type": "single",
                "question": "Which of the following is an influencing factor for RE process configuration?",
                "options": [
                    {
                        "id": "A",
                        "text": "Complexity and criticality of the system"
                    },
                    {
                        "id": "B",
                        "text": "The programming language used"
                    },
                    {
                        "id": "C",
                        "text": "The database vendor"
                    },
                    {
                        "id": "D",
                        "text": "The office location"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Correct answer is A"
            },
            {
                "id": 36,
                "points": 1,
                "type": "single",
                "question": "What is the main limitation of using office tools for requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are too expensive"
                    },
                    {
                        "id": "B",
                        "text": "They lack specific requirements management capabilities"
                    },
                    {
                        "id": "C",
                        "text": "They require special training"
                    },
                    {
                        "id": "D",
                        "text": "They are too powerful"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 37,
                "points": 2,
                "type": "single",
                "question": "What is a baseline in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "The first requirement written"
                    },
                    {
                        "id": "B",
                        "text": "A formally approved configuration that serves as a reference point"
                    },
                    {
                        "id": "C",
                        "text": "The minimum number of requirements"
                    },
                    {
                        "id": "D",
                        "text": "The project start date"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 38,
                "points": 2,
                "type": "single",
                "question": "What is the main advantage of using models over natural language requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "Models are always easier to create"
                    },
                    {
                        "id": "B",
                        "text": "Models provide overview and help understand relationships between requirements"
                    },
                    {
                        "id": "C",
                        "text": "Models don't need validation"
                    },
                    {
                        "id": "D",
                        "text": "Models are always shorter"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 39,
                "points": 1,
                "type": "single",
                "question": "What is requirements validation?",
                "options": [
                    {
                        "id": "A",
                        "text": "Making requirements longer"
                    },
                    {
                        "id": "B",
                        "text": "Confirming that requirements match stakeholders' needs"
                    },
                    {
                        "id": "C",
                        "text": "Translating requirements to code"
                    },
                    {
                        "id": "D",
                        "text": "Prioritizing requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 40,
                "points": 2,
                "type": "single",
                "question": "What does Principle 3 (Shared understanding) emphasize?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only developers need to understand requirements"
                    },
                    {
                        "id": "B",
                        "text": "Successful development requires a common understanding among stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Understanding is not important"
                    },
                    {
                        "id": "D",
                        "text": "Only technical people need to understand"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 41,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of change management for requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "To prevent any changes to requirements"
                    },
                    {
                        "id": "B",
                        "text": "To handle requirements changes in a controlled and orderly manner"
                    },
                    {
                        "id": "C",
                        "text": "To increase the number of requirements"
                    },
                    {
                        "id": "D",
                        "text": "To reduce stakeholder involvement"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 42,
                "points": 1,
                "type": "single",
                "question": "What is a requirements specification?",
                "options": [
                    {
                        "id": "A",
                        "text": "A single requirement"
                    },
                    {
                        "id": "B",
                        "text": "A systematically represented collection of requirements that satisfies given criteria"
                    },
                    {
                        "id": "C",
                        "text": "A project plan"
                    },
                    {
                        "id": "D",
                        "text": "A test case"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 43,
                "points": 1,
                "type": "single",
                "question": "Why might stakeholder availability be an influencing factor for RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "It determines office hours"
                    },
                    {
                        "id": "B",
                        "text": "It constrains when and how requirements can be elicited and validated"
                    },
                    {
                        "id": "C",
                        "text": "It affects the programming language choice"
                    },
                    {
                        "id": "D",
                        "text": "It determines the project budget"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 44,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of artifact-based elicitation techniques?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create art"
                    },
                    {
                        "id": "B",
                        "text": "To derive requirements from existing documents and systems"
                    },
                    {
                        "id": "C",
                        "text": "To replace stakeholders"
                    },
                    {
                        "id": "D",
                        "text": "To automate coding"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 45,
                "points": 1,
                "type": "single",
                "question": "What is CASE tooling in the context of RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Computer-Aided Software Engineering tools that support specific RE tasks"
                    },
                    {
                        "id": "B",
                        "text": "A case study method"
                    },
                    {
                        "id": "C",
                        "text": "A type of requirements document"
                    },
                    {
                        "id": "D",
                        "text": "A programming framework"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Correct answer is A"
            }
        ]
    },
    "2": {
        "title": "CPRE Final Exam 2",
        "questions": [
            {
                "id": 1,
                "points": 2,
                "type": "single",
                "question": "Which principle states that requirements are a means to an end, not an end in itself?",
                "options": [
                    {
                        "id": "A",
                        "text": "Principle 1: Value-orientation"
                    },
                    {
                        "id": "B",
                        "text": "Principle 2: Stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Principle 5: Problem-Requirement-Solution"
                    },
                    {
                        "id": "D",
                        "text": "Principle 9: Systematic work"
                    }
                ],
                "correctAnswers": [
                    "A"
                ],
                "explanation": "Correct answer is A"
            },
            {
                "id": 2,
                "points": 1,
                "type": "single",
                "question": "What should be avoided when creating work products according to general documentation guidelines?",
                "options": [
                    {
                        "id": "A",
                        "text": "Clear structure"
                    },
                    {
                        "id": "B",
                        "text": "Redundancy by repeating the same content"
                    },
                    {
                        "id": "C",
                        "text": "Consistent terminology"
                    },
                    {
                        "id": "D",
                        "text": "Appropriate abstraction"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 3,
                "points": 2,
                "type": "single",
                "question": "What is the main purpose of elicitation techniques?",
                "options": [
                    {
                        "id": "A",
                        "text": "To write code"
                    },
                    {
                        "id": "B",
                        "text": "To discover and gather requirements from various sources"
                    },
                    {
                        "id": "C",
                        "text": "To test software"
                    },
                    {
                        "id": "D",
                        "text": "To manage projects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 4,
                "points": 1,
                "type": "single",
                "question": "What role does a Requirements Engineer play?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only writing documentation"
                    },
                    {
                        "id": "B",
                        "text": "Eliciting, documenting, validating, and managing requirements"
                    },
                    {
                        "id": "C",
                        "text": "Only coding"
                    },
                    {
                        "id": "D",
                        "text": "Only testing"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 5,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of requirements prioritization?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make all requirements equal"
                    },
                    {
                        "id": "B",
                        "text": "To determine the order and importance of implementation"
                    },
                    {
                        "id": "C",
                        "text": "To delete requirements"
                    },
                    {
                        "id": "D",
                        "text": "To hide requirements from stakeholders"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 6,
                "points": 2,
                "type": "single",
                "question": "What is an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "A software application"
                    },
                    {
                        "id": "B",
                        "text": "A structured approach to shape and guide RE work in a given context"
                    },
                    {
                        "id": "C",
                        "text": "A database system"
                    },
                    {
                        "id": "D",
                        "text": "A testing methodology"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 7,
                "points": 1,
                "type": "single",
                "question": "What type of work product uses UML diagrams?",
                "options": [
                    {
                        "id": "A",
                        "text": "Natural-language-based"
                    },
                    {
                        "id": "B",
                        "text": "Template-based"
                    },
                    {
                        "id": "C",
                        "text": "Model-based"
                    },
                    {
                        "id": "D",
                        "text": "Code-based"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 8,
                "points": 1,
                "type": "single",
                "question": "Which type of RE tool support helps with measuring and reporting on the RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "Management of requirements"
                    },
                    {
                        "id": "B",
                        "text": "Management of the RE process"
                    },
                    {
                        "id": "C",
                        "text": "Documentation of knowledge"
                    },
                    {
                        "id": "D",
                        "text": "Modeling of requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 9,
                "points": 2,
                "type": "single",
                "question": "What are design and idea generating techniques primarily used for in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To test requirements"
                    },
                    {
                        "id": "B",
                        "text": "To find innovative solutions and delighters"
                    },
                    {
                        "id": "C",
                        "text": "To manage budgets"
                    },
                    {
                        "id": "D",
                        "text": "To write code"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 10,
                "points": 2,
                "type": "single",
                "question": "According to Principle 5 (Problem-Requirement-Solution), what is the relationship between these three elements?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are completely independent"
                    },
                    {
                        "id": "B",
                        "text": "They are inevitably intertwined"
                    },
                    {
                        "id": "C",
                        "text": "Only solution matters"
                    },
                    {
                        "id": "D",
                        "text": "They should never be mixed"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 11,
                "points": 2,
                "type": "single",
                "question": "What is implicit traceability?",
                "options": [
                    {
                        "id": "A",
                        "text": "Hidden requirements"
                    },
                    {
                        "id": "B",
                        "text": "Traceability that can be inferred from naming conventions and structures"
                    },
                    {
                        "id": "C",
                        "text": "Requirements without documentation"
                    },
                    {
                        "id": "D",
                        "text": "Deleted requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 12,
                "points": 2,
                "type": "single",
                "question": "Which aspect should be considered when documenting requirements according to general guidelines?",
                "options": [
                    {
                        "id": "A",
                        "text": "Structure and data"
                    },
                    {
                        "id": "B",
                        "text": "Function and flow"
                    },
                    {
                        "id": "C",
                        "text": "Context including external actors"
                    },
                    {
                        "id": "D",
                        "text": "All of the above"
                    }
                ],
                "correctAnswers": [
                    "D"
                ],
                "explanation": "Correct answer is D"
            },
            {
                "id": 13,
                "points": 1,
                "type": "single",
                "question": "What is one of the main challenges in Requirements Engineering?",
                "options": [
                    {
                        "id": "A",
                        "text": "Writing too many requirements"
                    },
                    {
                        "id": "B",
                        "text": "Understanding and satisfying diverse stakeholder needs"
                    },
                    {
                        "id": "C",
                        "text": "Making requirements too simple"
                    },
                    {
                        "id": "D",
                        "text": "Avoiding stakeholder involvement"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 14,
                "points": 2,
                "type": "single",
                "question": "What is crowd-based Requirements Engineering?",
                "options": [
                    {
                        "id": "A",
                        "text": "Requirements from random people"
                    },
                    {
                        "id": "B",
                        "text": "Participatory RE with a large group of stakeholders using platforms"
                    },
                    {
                        "id": "C",
                        "text": "Requirements generated by AI"
                    },
                    {
                        "id": "D",
                        "text": "Requirements from competitors"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 15,
                "points": 2,
                "type": "single",
                "question": "What does \"volatility of requirements\" refer to as an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "How expensive requirements are"
                    },
                    {
                        "id": "B",
                        "text": "How frequently requirements are expected to change"
                    },
                    {
                        "id": "C",
                        "text": "How many requirements there are"
                    },
                    {
                        "id": "D",
                        "text": "How complex requirements are"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 16,
                "points": 2,
                "type": "single",
                "question": "What is explicit traceability?",
                "options": [
                    {
                        "id": "A",
                        "text": "Obvious requirements"
                    },
                    {
                        "id": "B",
                        "text": "Traceability relationships that are explicitly documented"
                    },
                    {
                        "id": "C",
                        "text": "Requirements that everyone knows"
                    },
                    {
                        "id": "D",
                        "text": "Requirements visible to all"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 17,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of using consistent terms in documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make documents longer"
                    },
                    {
                        "id": "B",
                        "text": "To ensure clear communication and avoid misunderstandings"
                    },
                    {
                        "id": "C",
                        "text": "To confuse readers"
                    },
                    {
                        "id": "D",
                        "text": "To save time"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 18,
                "points": 2,
                "type": "single",
                "question": "What should be done before selecting an RE tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Buy the most expensive tool"
                    },
                    {
                        "id": "B",
                        "text": "Define objectives and requirements for the tool"
                    },
                    {
                        "id": "C",
                        "text": "Ask competitors what they use"
                    },
                    {
                        "id": "D",
                        "text": "Choose the tool with most features"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 19,
                "points": 2,
                "type": "single",
                "question": "What does Principle 2 (Stakeholders) emphasize?",
                "options": [
                    {
                        "id": "A",
                        "text": "Stakeholders are not important"
                    },
                    {
                        "id": "B",
                        "text": "RE is about satisfying stakeholders' desires and needs"
                    },
                    {
                        "id": "C",
                        "text": "Only end users are stakeholders"
                    },
                    {
                        "id": "D",
                        "text": "Stakeholders should not be consulted"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 20,
                "points": 1,
                "type": "single",
                "question": "Which technique involves directly observing users in their work environment?",
                "options": [
                    {
                        "id": "A",
                        "text": "Interviews"
                    },
                    {
                        "id": "B",
                        "text": "Questionnaires"
                    },
                    {
                        "id": "C",
                        "text": "Field observation"
                    },
                    {
                        "id": "D",
                        "text": "Document analysis"
                    }
                ],
                "correctAnswers": [
                    "C"
                ],
                "explanation": "Correct answer is C"
            },
            {
                "id": 21,
                "points": 2,
                "type": "single",
                "question": "What are requirements configurations?",
                "options": [
                    {
                        "id": "A",
                        "text": "Computer hardware settings"
                    },
                    {
                        "id": "B",
                        "text": "Coherent sets of requirements recognized as a unit"
                    },
                    {
                        "id": "C",
                        "text": "Project timelines"
                    },
                    {
                        "id": "D",
                        "text": "Testing strategies"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 22,
                "points": 2,
                "type": "single",
                "question": "What is pragmatic quality of a model?",
                "options": [
                    {
                        "id": "A",
                        "text": "How cheap it is to create"
                    },
                    {
                        "id": "B",
                        "text": "How suitable it is for its intended use"
                    },
                    {
                        "id": "C",
                        "text": "How fast it can be created"
                    },
                    {
                        "id": "D",
                        "text": "How many pages it has"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 23,
                "points": 2,
                "type": "single",
                "question": "Why is experience of Requirements Engineers an influencing factor for RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "It affects salary"
                    },
                    {
                        "id": "B",
                        "text": "It influences the complexity and rigor of processes that can be applied"
                    },
                    {
                        "id": "C",
                        "text": "It determines project location"
                    },
                    {
                        "id": "D",
                        "text": "It affects documentation language"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 24,
                "points": 1,
                "type": "single",
                "question": "What is the relationship between requirements and system development?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are unrelated"
                    },
                    {
                        "id": "B",
                        "text": "Requirements form the basis for development and evolution"
                    },
                    {
                        "id": "C",
                        "text": "Development should start before requirements"
                    },
                    {
                        "id": "D",
                        "text": "Requirements are only needed for documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 25,
                "points": 2,
                "type": "single",
                "question": "What is requirements validation concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "Writing requirements"
                    },
                    {
                        "id": "B",
                        "text": "Checking if the right requirements have been specified"
                    },
                    {
                        "id": "C",
                        "text": "Implementing requirements"
                    },
                    {
                        "id": "D",
                        "text": "Deleting requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 26,
                "points": 2,
                "type": "single",
                "question": "What is the benefit of using views for requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "To hide information"
                    },
                    {
                        "id": "B",
                        "text": "To present different perspectives of requirements to different stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "To make requirements more complex"
                    },
                    {
                        "id": "D",
                        "text": "To reduce the number of requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 27,
                "points": 2,
                "type": "single",
                "question": "What is syntactic quality of a model?",
                "options": [
                    {
                        "id": "A",
                        "text": "How well it follows grammar rules"
                    },
                    {
                        "id": "B",
                        "text": "How well it complies with syntactic specifications of the modeling language"
                    },
                    {
                        "id": "C",
                        "text": "How expensive it is"
                    },
                    {
                        "id": "D",
                        "text": "How fast it can be read"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 28,
                "points": 2,
                "type": "single",
                "question": "What risk exists when introducing a new RE tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Too much automation"
                    },
                    {
                        "id": "B",
                        "text": "Loss of control over requirements during transition"
                    },
                    {
                        "id": "C",
                        "text": "Tools are too simple"
                    },
                    {
                        "id": "D",
                        "text": "Stakeholders become more involved"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 29,
                "points": 2,
                "type": "single",
                "question": "What does Principle 9 (Systematic and disciplined work) emphasize?",
                "options": [
                    {
                        "id": "A",
                        "text": "Work should be random"
                    },
                    {
                        "id": "B",
                        "text": "Systematic approach is essential for effective RE"
                    },
                    {
                        "id": "C",
                        "text": "Discipline is not important"
                    },
                    {
                        "id": "D",
                        "text": "Only creativity matters"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 30,
                "points": 1,
                "type": "single",
                "question": "What is the main advantage of workshops as an elicitation technique?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are always cheap"
                    },
                    {
                        "id": "B",
                        "text": "They leverage interaction between participants to gain insights quickly"
                    },
                    {
                        "id": "C",
                        "text": "They require no preparation"
                    },
                    {
                        "id": "D",
                        "text": "They eliminate need for other techniques"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 31,
                "points": 1,
                "type": "single",
                "question": "What should an RE process configuration consider regarding stakeholders?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only their names"
                    },
                    {
                        "id": "B",
                        "text": "Their capability and availability"
                    },
                    {
                        "id": "C",
                        "text": "Only their titles"
                    },
                    {
                        "id": "D",
                        "text": "Their preferences for coffee"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 32,
                "points": 2,
                "type": "single",
                "question": "Why is traceability important in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "To track expenses"
                    },
                    {
                        "id": "B",
                        "text": "To link system behavior to original stakeholder demands and manage change impact"
                    },
                    {
                        "id": "C",
                        "text": "To count requirements"
                    },
                    {
                        "id": "D",
                        "text": "To locate documents"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 33,
                "points": 2,
                "type": "single",
                "question": "What is the main purpose of abstraction in requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make requirements vague"
                    },
                    {
                        "id": "B",
                        "text": "To manage complexity by focusing on essential aspects"
                    },
                    {
                        "id": "C",
                        "text": "To reduce work"
                    },
                    {
                        "id": "D",
                        "text": "To confuse stakeholders"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 34,
                "points": 2,
                "type": "single",
                "question": "What are the three concepts that the term \"requirement\" denotes?",
                "options": [
                    {
                        "id": "A",
                        "text": "Cost, time, quality"
                    },
                    {
                        "id": "B",
                        "text": "A need, a capability/property, and a documented representation"
                    },
                    {
                        "id": "C",
                        "text": "Plan, execute, verify"
                    },
                    {
                        "id": "D",
                        "text": "People, process, technology"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 35,
                "points": 1,
                "type": "single",
                "question": "What are creativity techniques in RE used for?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make meetings more fun"
                    },
                    {
                        "id": "B",
                        "text": "To generate innovative ideas and discover delighters"
                    },
                    {
                        "id": "C",
                        "text": "To reduce costs"
                    },
                    {
                        "id": "D",
                        "text": "To speed up coding"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 36,
                "points": 2,
                "type": "single",
                "question": "What should a change management process for requirements include?",
                "options": [
                    {
                        "id": "A",
                        "text": "Random approval"
                    },
                    {
                        "id": "B",
                        "text": "Defined procedures for requesting, evaluating, and implementing changes"
                    },
                    {
                        "id": "C",
                        "text": "Automatic rejection of all changes"
                    },
                    {
                        "id": "D",
                        "text": "No documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 37,
                "points": 1,
                "type": "single",
                "question": "What type of tool support helps with collaboration in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Code compilers"
                    },
                    {
                        "id": "B",
                        "text": "Tools that enable multiple people to work together on requirements"
                    },
                    {
                        "id": "C",
                        "text": "Database tools only"
                    },
                    {
                        "id": "D",
                        "text": "Hardware tools"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 38,
                "points": 2,
                "type": "single",
                "question": "Why should work products be planned early in a project?",
                "options": [
                    {
                        "id": "A",
                        "text": "To delay the project"
                    },
                    {
                        "id": "B",
                        "text": "To help plan efforts, resources, and ensure appropriate notations"
                    },
                    {
                        "id": "C",
                        "text": "To create more meetings"
                    },
                    {
                        "id": "D",
                        "text": "To avoid work"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 39,
                "points": 1,
                "type": "single",
                "question": "What does \"shared understanding\" mean as an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "Everyone has the same opinion"
                    },
                    {
                        "id": "B",
                        "text": "The degree to which stakeholders have common understanding of requirements"
                    },
                    {
                        "id": "C",
                        "text": "No disagreements exist"
                    },
                    {
                        "id": "D",
                        "text": "Only technical people understand"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 40,
                "points": 2,
                "type": "single",
                "question": "What is the main focus of Principle 4 (Context)?",
                "options": [
                    {
                        "id": "A",
                        "text": "Systems can be understood in isolation"
                    },
                    {
                        "id": "B",
                        "text": "Systems cannot be understood without their context"
                    },
                    {
                        "id": "C",
                        "text": "Context is not important"
                    },
                    {
                        "id": "D",
                        "text": "Only technical context matters"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 41,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of conflict resolution techniques in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To avoid conflicts entirely"
                    },
                    {
                        "id": "B",
                        "text": "To address and resolve disagreements about requirements"
                    },
                    {
                        "id": "C",
                        "text": "To eliminate stakeholders"
                    },
                    {
                        "id": "D",
                        "text": "To ignore conflicts"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 42,
                "points": 1,
                "type": "single",
                "question": "What is a key benefit of proper requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Increased costs"
                    },
                    {
                        "id": "B",
                        "text": "Improved efficiency and effectiveness of system development"
                    },
                    {
                        "id": "C",
                        "text": "More meetings"
                    },
                    {
                        "id": "D",
                        "text": "Longer project timelines"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 43,
                "points": 1,
                "type": "single",
                "question": "What is a limitation of natural language for requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's too formal"
                    },
                    {
                        "id": "B",
                        "text": "It can be ambiguous and imprecise"
                    },
                    {
                        "id": "C",
                        "text": "It's too visual"
                    },
                    {
                        "id": "D",
                        "text": "It requires special tools"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 44,
                "points": 1,
                "type": "single",
                "question": "When should employees be trained on a new RE tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Never"
                    },
                    {
                        "id": "B",
                        "text": "After the tool is selected and before full deployment"
                    },
                    {
                        "id": "C",
                        "text": "Only if they complain"
                    },
                    {
                        "id": "D",
                        "text": "Five years after implementation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 45,
                "points": 2,
                "type": "single",
                "question": "What is the relationship between RE process and system development process?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are completely independent"
                    },
                    {
                        "id": "B",
                        "text": "RE process must fit within and align with the overall development process"
                    },
                    {
                        "id": "C",
                        "text": "RE process should be the same for all projects"
                    },
                    {
                        "id": "D",
                        "text": "They should never interact"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            }
        ]
    },
    "3": {
        "title": "CPRE Final Exam 3",
        "questions": [
            {
                "id": 1,
                "points": 2,
                "type": "single",
                "question": "Which of the following is an advantage of model-based work products?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are always easier to create than text"
                    },
                    {
                        "id": "B",
                        "text": "They provide better overview and visualization of relationships"
                    },
                    {
                        "id": "C",
                        "text": "They require no validation"
                    },
                    {
                        "id": "D",
                        "text": "They are always unambiguous"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 2,
                "points": 1,
                "type": "single",
                "question": "What type of requirements do stakeholders typically voice most easily?",
                "options": [
                    {
                        "id": "A",
                        "text": "Delighters"
                    },
                    {
                        "id": "B",
                        "text": "Satisfiers"
                    },
                    {
                        "id": "C",
                        "text": "Dissatisfiers"
                    },
                    {
                        "id": "D",
                        "text": "Non-functional requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 3,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of requirements attributes?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make requirements pretty"
                    },
                    {
                        "id": "B",
                        "text": "To store metadata about requirements for management purposes"
                    },
                    {
                        "id": "C",
                        "text": "To increase requirement length"
                    },
                    {
                        "id": "D",
                        "text": "To hide requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 4,
                "points": 1,
                "type": "single",
                "question": "What makes RE challenging in practice?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's too simple"
                    },
                    {
                        "id": "B",
                        "text": "Stakeholders have diverse and sometimes conflicting needs"
                    },
                    {
                        "id": "C",
                        "text": "There are no tools available"
                    },
                    {
                        "id": "D",
                        "text": "Requirements never change"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 5,
                "points": 2,
                "type": "single",
                "question": "According to the RE principles, why must requirements evolve?",
                "options": [
                    {
                        "id": "A",
                        "text": "To keep people busy"
                    },
                    {
                        "id": "B",
                        "text": "Because business, technology, and needs constantly change"
                    },
                    {
                        "id": "C",
                        "text": "To increase costs"
                    },
                    {
                        "id": "D",
                        "text": "Because developers want changes"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 6,
                "points": 2,
                "type": "single",
                "question": "What is a key consideration for RE process configuration?",
                "options": [
                    {
                        "id": "A",
                        "text": "Making it as complex as possible"
                    },
                    {
                        "id": "B",
                        "text": "Ensuring it fits the complexity and criticality of the system"
                    },
                    {
                        "id": "C",
                        "text": "Using the same process for all projects"
                    },
                    {
                        "id": "D",
                        "text": "Ignoring stakeholder needs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 7,
                "points": 2,
                "type": "single",
                "question": "What should be evaluated when selecting an RE tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only the price"
                    },
                    {
                        "id": "B",
                        "text": "Project, process, user, product, supplier, economic, and architecture perspectives"
                    },
                    {
                        "id": "C",
                        "text": "Only the brand name"
                    },
                    {
                        "id": "D",
                        "text": "Only the color scheme"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 8,
                "points": 2,
                "type": "single",
                "question": "What is semantic quality in modeling?",
                "options": [
                    {
                        "id": "A",
                        "text": "How pretty the model looks"
                    },
                    {
                        "id": "B",
                        "text": "How correctly and completely the model represents facts"
                    },
                    {
                        "id": "C",
                        "text": "How fast the model was created"
                    },
                    {
                        "id": "D",
                        "text": "How many colors are used"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 9,
                "points": 2,
                "type": "single",
                "question": "What is the difference between quantitative and qualitative questionnaires?",
                "options": [
                    {
                        "id": "A",
                        "text": "Length of questions"
                    },
                    {
                        "id": "B",
                        "text": "Quantitative use closed-ended questions, qualitative use open-ended questions"
                    },
                    {
                        "id": "C",
                        "text": "Number of participants"
                    },
                    {
                        "id": "D",
                        "text": "Time required"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 10,
                "points": 2,
                "type": "single",
                "question": "Why do requirements need a status/life cycle model?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make management more complex"
                    },
                    {
                        "id": "B",
                        "text": "To track the state and evolution of requirements through their lifecycle"
                    },
                    {
                        "id": "C",
                        "text": "To hide requirement status"
                    },
                    {
                        "id": "D",
                        "text": "To increase costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 11,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of validation according to Principle 6?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make requirements longer"
                    },
                    {
                        "id": "B",
                        "text": "To confirm requirements match stakeholders' needs early and continuously"
                    },
                    {
                        "id": "C",
                        "text": "To test code"
                    },
                    {
                        "id": "D",
                        "text": "To reduce costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 12,
                "points": 1,
                "type": "single",
                "question": "Which work product type is best for structured medium-sized artifacts like use cases?",
                "options": [
                    {
                        "id": "A",
                        "text": "Natural language paragraphs"
                    },
                    {
                        "id": "B",
                        "text": "Form templates"
                    },
                    {
                        "id": "C",
                        "text": "Complete models"
                    },
                    {
                        "id": "D",
                        "text": "Code comments"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 13,
                "points": 2,
                "type": "single",
                "question": "What does \"available time and budget\" influence in RE process configuration?",
                "options": [
                    {
                        "id": "A",
                        "text": "Nothing significant"
                    },
                    {
                        "id": "B",
                        "text": "The depth and rigor of RE activities that can be performed"
                    },
                    {
                        "id": "C",
                        "text": "Only documentation format"
                    },
                    {
                        "id": "D",
                        "text": "Programming language choice"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 14,
                "points": 1,
                "type": "single",
                "question": "Where can Requirements Engineering be applied?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only in software projects"
                    },
                    {
                        "id": "B",
                        "text": "In any system development context including software, hardware, and services"
                    },
                    {
                        "id": "C",
                        "text": "Only in waterfall projects"
                    },
                    {
                        "id": "D",
                        "text": "Only in large organizations"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 15,
                "points": 2,
                "type": "single",
                "question": "What is the main benefit of using interviews for elicitation?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are very fast"
                    },
                    {
                        "id": "B",
                        "text": "They are flexible and can elicit detailed information"
                    },
                    {
                        "id": "C",
                        "text": "They require no preparation"
                    },
                    {
                        "id": "D",
                        "text": "They work for unlimited numbers of people"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 16,
                "points": 1,
                "type": "single",
                "question": "What limitation do office tools have for requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Too expensive"
                    },
                    {
                        "id": "B",
                        "text": "They lack dedicated traceability, versioning, and requirements-specific features"
                    },
                    {
                        "id": "C",
                        "text": "Too complex"
                    },
                    {
                        "id": "D",
                        "text": "Require special hardware"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 17,
                "points": 2,
                "type": "single",
                "question": "What is prioritization in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Deleting requirements"
                    },
                    {
                        "id": "B",
                        "text": "Ranking requirements by importance and implementation order"
                    },
                    {
                        "id": "C",
                        "text": "Making all requirements equal"
                    },
                    {
                        "id": "D",
                        "text": "Hiding low-priority requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 18,
                "points": 1,
                "type": "single",
                "question": "What should be ensured when using multiple work products?",
                "options": [
                    {
                        "id": "A",
                        "text": "They should be as different as possible"
                    },
                    {
                        "id": "B",
                        "text": "They should be kept consistent with each other"
                    },
                    {
                        "id": "C",
                        "text": "They should contradict each other"
                    },
                    {
                        "id": "D",
                        "text": "They should never reference each other"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 19,
                "points": 2,
                "type": "single",
                "question": "What does innovation (Principle 8) mean in RE context?",
                "options": [
                    {
                        "id": "A",
                        "text": "Using new technology only"
                    },
                    {
                        "id": "B",
                        "text": "Finding solutions that exceed stakeholder expectations"
                    },
                    {
                        "id": "C",
                        "text": "Making requirements complex"
                    },
                    {
                        "id": "D",
                        "text": "Following competitors"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 20,
                "points": 2,
                "type": "single",
                "question": "What are delighters in the Kano model?",
                "options": [
                    {
                        "id": "A",
                        "text": "Requirements customers explicitly ask for"
                    },
                    {
                        "id": "B",
                        "text": "Features that exceed expectations and create excitement"
                    },
                    {
                        "id": "C",
                        "text": "Basic expected functionality"
                    },
                    {
                        "id": "D",
                        "text": "Requirements that cause dissatisfaction"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 21,
                "points": 1,
                "type": "single",
                "question": "Why is \"capability and availability of stakeholders\" an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "It affects office space"
                    },
                    {
                        "id": "B",
                        "text": "It determines when and how stakeholders can participate in RE activities"
                    },
                    {
                        "id": "C",
                        "text": "It affects salary budgets"
                    },
                    {
                        "id": "D",
                        "text": "It determines project name"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 22,
                "points": 2,
                "type": "single",
                "question": "What is a baseline used for in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "To start counting requirements"
                    },
                    {
                        "id": "B",
                        "text": "As a formally approved reference point for further development"
                    },
                    {
                        "id": "C",
                        "text": "To delete old requirements"
                    },
                    {
                        "id": "D",
                        "text": "To store passwords"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 23,
                "points": 1,
                "type": "single",
                "question": "What is the main purpose of using a glossary in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make documents longer"
                    },
                    {
                        "id": "B",
                        "text": "To ensure consistent use of terminology"
                    },
                    {
                        "id": "C",
                        "text": "To confuse readers"
                    },
                    {
                        "id": "D",
                        "text": "To replace requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 24,
                "points": 2,
                "type": "single",
                "question": "What should be done to mitigate risks when introducing a new tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Introduce it in all projects simultaneously"
                    },
                    {
                        "id": "B",
                        "text": "Run pilot projects to test it on a small scale first"
                    },
                    {
                        "id": "C",
                        "text": "Skip training"
                    },
                    {
                        "id": "D",
                        "text": "Never test the tool"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 25,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of perspective-based reading in validation?",
                "options": [
                    {
                        "id": "A",
                        "text": "To read requirements faster"
                    },
                    {
                        "id": "B",
                        "text": "To review requirements from different stakeholder viewpoints"
                    },
                    {
                        "id": "C",
                        "text": "To translate requirements"
                    },
                    {
                        "id": "D",
                        "text": "To delete requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 26,
                "points": 2,
                "type": "single",
                "question": "What is a key skill for a Requirements Engineer beyond technical knowledge?",
                "options": [
                    {
                        "id": "A",
                        "text": "Programming ability"
                    },
                    {
                        "id": "B",
                        "text": "Soft skills like listening, moderating, and empathy"
                    },
                    {
                        "id": "C",
                        "text": "Database administration"
                    },
                    {
                        "id": "D",
                        "text": "Network configuration"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 27,
                "points": 2,
                "type": "single",
                "question": "What does change management help prevent?",
                "options": [
                    {
                        "id": "A",
                        "text": "All changes to requirements"
                    },
                    {
                        "id": "B",
                        "text": "Uncontrolled and chaotic changes that harm project success"
                    },
                    {
                        "id": "C",
                        "text": "Stakeholder involvement"
                    },
                    {
                        "id": "D",
                        "text": "Documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 28,
                "points": 1,
                "type": "single",
                "question": "What is a document template used for?",
                "options": [
                    {
                        "id": "A",
                        "text": "Writing single requirements"
                    },
                    {
                        "id": "B",
                        "text": "Providing predefined structure for complete documents"
                    },
                    {
                        "id": "C",
                        "text": "Creating diagrams"
                    },
                    {
                        "id": "D",
                        "text": "Testing software"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 29,
                "points": 2,
                "type": "single",
                "question": "Why is shared understanding (Principle 3) important?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not important"
                    },
                    {
                        "id": "B",
                        "text": "Without it, successful system development is impossible"
                    },
                    {
                        "id": "C",
                        "text": "Only for large projects"
                    },
                    {
                        "id": "D",
                        "text": "Only for agile projects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 30,
                "points": 1,
                "type": "single",
                "question": "What does \"constraints\" refer to as an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "Project goals"
                    },
                    {
                        "id": "B",
                        "text": "Restrictions that limit options for RE process configuration"
                    },
                    {
                        "id": "C",
                        "text": "Stakeholder wishes"
                    },
                    {
                        "id": "D",
                        "text": "Budget increases"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 31,
                "points": 2,
                "type": "single",
                "question": "What is prototyping used for in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Final product delivery"
                    },
                    {
                        "id": "B",
                        "text": "Validating requirements and exploring solutions early"
                    },
                    {
                        "id": "C",
                        "text": "Replacing documentation"
                    },
                    {
                        "id": "D",
                        "text": "Testing hardware"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 32,
                "points": 1,
                "type": "single",
                "question": "What type of tool support enables testing/simulation of requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "Document editors"
                    },
                    {
                        "id": "B",
                        "text": "Advanced RE tools with testing and simulation capabilities"
                    },
                    {
                        "id": "C",
                        "text": "Simple text editors"
                    },
                    {
                        "id": "D",
                        "text": "Email clients"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 33,
                "points": 2,
                "type": "single",
                "question": "Why is traceability necessary for impact analysis?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not necessary"
                    },
                    {
                        "id": "B",
                        "text": "To understand how changes affect related requirements and artifacts"
                    },
                    {
                        "id": "C",
                        "text": "To count requirements"
                    },
                    {
                        "id": "D",
                        "text": "To hide dependencies"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 34,
                "points": 2,
                "type": "single",
                "question": "What should be considered when selecting work products for a project?",
                "options": [
                    {
                        "id": "A",
                        "text": "What looks most impressive"
                    },
                    {
                        "id": "B",
                        "text": "Purpose, abstraction levels, level of detail, and representation format needed"
                    },
                    {
                        "id": "C",
                        "text": "What requires least effort"
                    },
                    {
                        "id": "D",
                        "text": "What competitors use"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 35,
                "points": 1,
                "type": "single",
                "question": "What does a Requirements Engineer need to understand about stakeholders?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only their names"
                    },
                    {
                        "id": "B",
                        "text": "Their needs, desires, constraints, and perspectives"
                    },
                    {
                        "id": "C",
                        "text": "Only their job titles"
                    },
                    {
                        "id": "D",
                        "text": "Their salaries"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 36,
                "points": 1,
                "type": "single",
                "question": "What is document analysis as an elicitation technique?",
                "options": [
                    {
                        "id": "A",
                        "text": "Deleting old documents"
                    },
                    {
                        "id": "B",
                        "text": "Extracting requirements from existing documentation and systems"
                    },
                    {
                        "id": "C",
                        "text": "Writing new documents"
                    },
                    {
                        "id": "D",
                        "text": "Counting pages"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 37,
                "points": 2,
                "type": "single",
                "question": "What are meaningful assessment criteria for prioritization?",
                "options": [
                    {
                        "id": "A",
                        "text": "Random selection"
                    },
                    {
                        "id": "B",
                        "text": "Business value, risk, cost, dependencies, and stakeholder importance"
                    },
                    {
                        "id": "C",
                        "text": "Document length"
                    },
                    {
                        "id": "D",
                        "text": "Alphabetical order"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 38,
                "points": 2,
                "type": "single",
                "question": "What is the relationship between problem, requirement, and solution according to Principle 5?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are completely separate"
                    },
                    {
                        "id": "B",
                        "text": "They are intertwined and influence each other"
                    },
                    {
                        "id": "C",
                        "text": "Only solution matters"
                    },
                    {
                        "id": "D",
                        "text": "They should never be discussed together"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 39,
                "points": 2,
                "type": "single",
                "question": "What is the goal of configuring an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make work more complicated"
                    },
                    {
                        "id": "B",
                        "text": "To create a process that fits the specific project context and needs"
                    },
                    {
                        "id": "C",
                        "text": "To follow standards blindly"
                    },
                    {
                        "id": "D",
                        "text": "To minimize documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 40,
                "points": 2,
                "type": "single",
                "question": "What type of model focuses on system behavior and state transitions?",
                "options": [
                    {
                        "id": "A",
                        "text": "Data model"
                    },
                    {
                        "id": "B",
                        "text": "State machine or behavior model"
                    },
                    {
                        "id": "C",
                        "text": "Context model"
                    },
                    {
                        "id": "D",
                        "text": "Structure model"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 41,
                "points": 1,
                "type": "single",
                "question": "What perspective should be considered when evaluating tools regarding user satisfaction?",
                "options": [
                    {
                        "id": "A",
                        "text": "Economic perspective"
                    },
                    {
                        "id": "B",
                        "text": "User perspective"
                    },
                    {
                        "id": "C",
                        "text": "Supplier perspective"
                    },
                    {
                        "id": "D",
                        "text": "Architecture perspective"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 42,
                "points": 2,
                "type": "single",
                "question": "What is brainstorming used for in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Testing requirements"
                    },
                    {
                        "id": "B",
                        "text": "Generating creative ideas for innovative solutions"
                    },
                    {
                        "id": "C",
                        "text": "Documenting requirements"
                    },
                    {
                        "id": "D",
                        "text": "Managing conflicts"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 43,
                "points": 1,
                "type": "single",
                "question": "What is the difference between implicit and explicit traceability?",
                "options": [
                    {
                        "id": "A",
                        "text": "No difference"
                    },
                    {
                        "id": "B",
                        "text": "Implicit is inferred, explicit is documented with links"
                    },
                    {
                        "id": "C",
                        "text": "Implicit is better"
                    },
                    {
                        "id": "D",
                        "text": "Explicit is hidden"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 44,
                "points": 2,
                "type": "single",
                "question": "Why should redundancy be avoided in documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make documents shorter"
                    },
                    {
                        "id": "B",
                        "text": "To prevent inconsistencies and reduce maintenance effort"
                    },
                    {
                        "id": "C",
                        "text": "To save paper"
                    },
                    {
                        "id": "D",
                        "text": "To confuse readers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 45,
                "points": 1,
                "type": "single",
                "question": "What is the relationship between RE process and working structure?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are unrelated"
                    },
                    {
                        "id": "B",
                        "text": "RE process shapes information flow and defines roles and communication"
                    },
                    {
                        "id": "C",
                        "text": "Only process matters"
                    },
                    {
                        "id": "D",
                        "text": "Only structure matters"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            }
        ]
    },
    "4": {
        "title": "CPRE Final Exam 4",
        "questions": [
            {
                "id": 1,
                "points": 2,
                "type": "single",
                "question": "What is a stakeholder in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only the project manager"
                    },
                    {
                        "id": "B",
                        "text": "A person or organization that has interest in or influence on the system"
                    },
                    {
                        "id": "C",
                        "text": "Only the developers"
                    },
                    {
                        "id": "D",
                        "text": "Only the customers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 2,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of modeling context in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create pretty pictures"
                    },
                    {
                        "id": "B",
                        "text": "To show system boundaries and external actors/interfaces"
                    },
                    {
                        "id": "C",
                        "text": "To replace all documentation"
                    },
                    {
                        "id": "D",
                        "text": "To test code"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 3,
                "points": 2,
                "type": "single",
                "question": "What types of prioritization techniques exist?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only voting"
                    },
                    {
                        "id": "B",
                        "text": "Analytical (e.g., cost-benefit), negotiation-based, and ranking techniques"
                    },
                    {
                        "id": "C",
                        "text": "Only random selection"
                    },
                    {
                        "id": "D",
                        "text": "Only alphabetical"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 4,
                "points": 1,
                "type": "single",
                "question": "What is the ultimate goal of Requirements Engineering?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create documentation"
                    },
                    {
                        "id": "B",
                        "text": "To build systems that satisfy stakeholder needs and desires"
                    },
                    {
                        "id": "C",
                        "text": "To follow processes"
                    },
                    {
                        "id": "D",
                        "text": "To use tools"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 5,
                "points": 2,
                "type": "single",
                "question": "Why is systematic and disciplined work (Principle 9) necessary in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not necessary"
                    },
                    {
                        "id": "B",
                        "text": "Because RE complexity requires structured approaches to be effective"
                    },
                    {
                        "id": "C",
                        "text": "To slow down projects"
                    },
                    {
                        "id": "D",
                        "text": "To create more paperwork"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 6,
                "points": 2,
                "type": "single",
                "question": "What is meant by \"overall process fit\"?",
                "options": [
                    {
                        "id": "A",
                        "text": "Physical fitness of team members"
                    },
                    {
                        "id": "B",
                        "text": "How well the RE process integrates with the development process"
                    },
                    {
                        "id": "C",
                        "text": "How fast the process is"
                    },
                    {
                        "id": "D",
                        "text": "How cheap the process is"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 7,
                "points": 1,
                "type": "single",
                "question": "What type of tool support helps with sharing requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "Hardware tools"
                    },
                    {
                        "id": "B",
                        "text": "Documentation and collaboration tools"
                    },
                    {
                        "id": "C",
                        "text": "Testing tools only"
                    },
                    {
                        "id": "D",
                        "text": "Compilers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 8,
                "points": 2,
                "type": "single",
                "question": "Which aspect of requirements focuses on system inputs, outputs, and transformations?",
                "options": [
                    {
                        "id": "A",
                        "text": "State and behavior"
                    },
                    {
                        "id": "B",
                        "text": "Function and flow"
                    },
                    {
                        "id": "C",
                        "text": "Structure and data"
                    },
                    {
                        "id": "D",
                        "text": "Context"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 9,
                "points": 2,
                "type": "single",
                "question": "What validation technique involves creating a working prototype?",
                "options": [
                    {
                        "id": "A",
                        "text": "Walkthroughs"
                    },
                    {
                        "id": "B",
                        "text": "Exploratory techniques like prototyping"
                    },
                    {
                        "id": "C",
                        "text": "Inspections only"
                    },
                    {
                        "id": "D",
                        "text": "Document analysis"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 10,
                "points": 2,
                "type": "single",
                "question": "What is version control important for?",
                "options": [
                    {
                        "id": "A",
                        "text": "Counting requirements"
                    },
                    {
                        "id": "B",
                        "text": "Managing evolution of work products through multiple versions"
                    },
                    {
                        "id": "C",
                        "text": "Deleting old files"
                    },
                    {
                        "id": "D",
                        "text": "Storing passwords"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 11,
                "points": 2,
                "type": "single",
                "question": "What does value-orientation (Principle 1) require from Requirements Engineers?",
                "options": [
                    {
                        "id": "A",
                        "text": "Maximize documentation"
                    },
                    {
                        "id": "B",
                        "text": "Balance benefit against cost of RE activities"
                    },
                    {
                        "id": "C",
                        "text": "Minimize all RE activities"
                    },
                    {
                        "id": "D",
                        "text": "Ignore costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 12,
                "points": 2,
                "type": "single",
                "question": "Why is volatility of requirements an important influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "It affects hardware"
                    },
                    {
                        "id": "B",
                        "text": "It determines how flexible and adaptive the RE process must be"
                    },
                    {
                        "id": "C",
                        "text": "It affects project name"
                    },
                    {
                        "id": "D",
                        "text": "It determines office location"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 13,
                "points": 1,
                "type": "single",
                "question": "What is a phrase template typically used for?",
                "options": [
                    {
                        "id": "A",
                        "text": "Complete documents"
                    },
                    {
                        "id": "B",
                        "text": "Writing individual requirements or user stories"
                    },
                    {
                        "id": "C",
                        "text": "Diagrams"
                    },
                    {
                        "id": "D",
                        "text": "Test cases"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 14,
                "points": 2,
                "type": "single",
                "question": "What should be done after an RE tool is selected?",
                "options": [
                    {
                        "id": "A",
                        "text": "Nothing further needed"
                    },
                    {
                        "id": "B",
                        "text": "Train users and adapt RE process to leverage tool capabilities"
                    },
                    {
                        "id": "C",
                        "text": "Buy more tools"
                    },
                    {
                        "id": "D",
                        "text": "Start a new project"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 15,
                "points": 1,
                "type": "single",
                "question": "What is a workshop in RE context?",
                "options": [
                    {
                        "id": "A",
                        "text": "A hardware repair session"
                    },
                    {
                        "id": "B",
                        "text": "A structured meeting where stakeholders collaborate on requirements"
                    },
                    {
                        "id": "C",
                        "text": "Individual work session"
                    },
                    {
                        "id": "D",
                        "text": "A coding session"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 16,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of defining a life cycle for requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "To measure age"
                    },
                    {
                        "id": "B",
                        "text": "To track status transitions from creation through implementation"
                    },
                    {
                        "id": "C",
                        "text": "To delete requirements"
                    },
                    {
                        "id": "D",
                        "text": "To hide information"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 17,
                "points": 1,
                "type": "single",
                "question": "How does RE contribute to risk reduction?",
                "options": [
                    {
                        "id": "A",
                        "text": "It doesn't"
                    },
                    {
                        "id": "B",
                        "text": "By ensuring the right system is built before expensive development starts"
                    },
                    {
                        "id": "C",
                        "text": "By increasing documentation"
                    },
                    {
                        "id": "D",
                        "text": "By extending timelines"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 18,
                "points": 2,
                "type": "single",
                "question": "What advantage do templates provide for requirements documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "They slow down work"
                    },
                    {
                        "id": "B",
                        "text": "They provide structure and improve quality consistency"
                    },
                    {
                        "id": "C",
                        "text": "They prevent stakeholder involvement"
                    },
                    {
                        "id": "D",
                        "text": "They eliminate the need for validation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 19,
                "points": 2,
                "type": "single",
                "question": "According to Principle 4 (Context), what must be understood about a system?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only internal structure"
                    },
                    {
                        "id": "B",
                        "text": "System boundary, context, external actors, and interfaces"
                    },
                    {
                        "id": "C",
                        "text": "Only technology stack"
                    },
                    {
                        "id": "D",
                        "text": "Only costs"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 20,
                "points": 2,
                "type": "single",
                "question": "What are dissatisfiers in the Kano model?",
                "options": [
                    {
                        "id": "A",
                        "text": "Features that excite customers"
                    },
                    {
                        "id": "B",
                        "text": "Basic expected features whose absence causes dissatisfaction"
                    },
                    {
                        "id": "C",
                        "text": "Optional features"
                    },
                    {
                        "id": "D",
                        "text": "Expensive features"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 21,
                "points": 1,
                "type": "single",
                "question": "What does \"development context\" include as an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only programming language"
                    },
                    {
                        "id": "B",
                        "text": "Development approach (plan-driven vs. agile), team structure, and constraints"
                    },
                    {
                        "id": "C",
                        "text": "Only team size"
                    },
                    {
                        "id": "D",
                        "text": "Only location"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 22,
                "points": 2,
                "type": "single",
                "question": "Why is traceability important for requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not important"
                    },
                    {
                        "id": "B",
                        "text": "It links requirements to their sources and implementation for verification"
                    },
                    {
                        "id": "C",
                        "text": "It makes work more complex"
                    },
                    {
                        "id": "D",
                        "text": "It increases costs only"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 23,
                "points": 2,
                "type": "single",
                "question": "What is a key consideration for tool architecture perspective?",
                "options": [
                    {
                        "id": "A",
                        "text": "Tool color"
                    },
                    {
                        "id": "B",
                        "text": "How tool fits into IT landscape and integrates with other systems"
                    },
                    {
                        "id": "C",
                        "text": "Tool weight"
                    },
                    {
                        "id": "D",
                        "text": "Tool brand popularity"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 24,
                "points": 1,
                "type": "single",
                "question": "What should work products be selected based on?",
                "options": [
                    {
                        "id": "A",
                        "text": "Personal preference"
                    },
                    {
                        "id": "B",
                        "text": "Intended purpose and project needs"
                    },
                    {
                        "id": "C",
                        "text": "What's easiest"
                    },
                    {
                        "id": "D",
                        "text": "What competitors use"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 25,
                "points": 2,
                "type": "single",
                "question": "What is requirements elicitation?",
                "options": [
                    {
                        "id": "A",
                        "text": "Deleting requirements"
                    },
                    {
                        "id": "B",
                        "text": "The process of discovering and gathering requirements from sources"
                    },
                    {
                        "id": "C",
                        "text": "Testing requirements"
                    },
                    {
                        "id": "D",
                        "text": "Implementing requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 26,
                "points": 1,
                "type": "single",
                "question": "What makes a good Requirements Engineer?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only technical skills"
                    },
                    {
                        "id": "B",
                        "text": "Combination of technical skills, analytical ability, and soft skills"
                    },
                    {
                        "id": "C",
                        "text": "Only soft skills"
                    },
                    {
                        "id": "D",
                        "text": "Only management experience"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 27,
                "points": 2,
                "type": "single",
                "question": "What is configuration management in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "Computer settings"
                    },
                    {
                        "id": "B",
                        "text": "Managing coherent sets of requirements as configurations and baselines"
                    },
                    {
                        "id": "C",
                        "text": "Network configuration"
                    },
                    {
                        "id": "D",
                        "text": "Hardware setup"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 28,
                "points": 2,
                "type": "single",
                "question": "What is the essence of stakeholder principle (Principle 2)?",
                "options": [
                    {
                        "id": "A",
                        "text": "Minimize stakeholder involvement"
                    },
                    {
                        "id": "B",
                        "text": "RE must focus on satisfying stakeholder needs and desires"
                    },
                    {
                        "id": "C",
                        "text": "Only some stakeholders matter"
                    },
                    {
                        "id": "D",
                        "text": "Stakeholders should not influence requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 29,
                "points": 2,
                "type": "single",
                "question": "What should be considered regarding system complexity as an influencing factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "Nothing specific"
                    },
                    {
                        "id": "B",
                        "text": "More complex systems require more rigorous RE processes"
                    },
                    {
                        "id": "C",
                        "text": "All systems need same process"
                    },
                    {
                        "id": "D",
                        "text": "Simple processes for complex systems"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 30,
                "points": 2,
                "type": "single",
                "question": "What is structure and data modeling concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "System behavior"
                    },
                    {
                        "id": "B",
                        "text": "Data structures, entities, relationships, and information architecture"
                    },
                    {
                        "id": "C",
                        "text": "System context"
                    },
                    {
                        "id": "D",
                        "text": "Only visual design"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 31,
                "points": 1,
                "type": "single",
                "question": "Why might different tools need to be combined for RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To increase costs"
                    },
                    {
                        "id": "B",
                        "text": "Because no single tool covers all RE activities comprehensively"
                    },
                    {
                        "id": "C",
                        "text": "To confuse users"
                    },
                    {
                        "id": "D",
                        "text": "To satisfy vendors"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 32,
                "points": 2,
                "type": "single",
                "question": "What is the goal of conflict resolution in RE?",
                "options": [
                    {
                        "id": "A",
                        "text": "To eliminate all stakeholders"
                    },
                    {
                        "id": "B",
                        "text": "To address and resolve disagreements about requirements constructively"
                    },
                    {
                        "id": "C",
                        "text": "To ignore conflicts"
                    },
                    {
                        "id": "D",
                        "text": "To force a single viewpoint"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 33,
                "points": 1,
                "type": "single",
                "question": "What steps are involved in prioritizing requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "Random selection"
                    },
                    {
                        "id": "B",
                        "text": "Define criteria, assess requirements, rank them, and validate with stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Let manager decide alone"
                    },
                    {
                        "id": "D",
                        "text": "Use only cost"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 34,
                "points": 2,
                "type": "single",
                "question": "Why is it important to plan work products early?",
                "options": [
                    {
                        "id": "A",
                        "text": "To delay project start"
                    },
                    {
                        "id": "B",
                        "text": "To ensure proper resource allocation and consistent approach"
                    },
                    {
                        "id": "C",
                        "text": "To create more meetings"
                    },
                    {
                        "id": "D",
                        "text": "To satisfy auditors only"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 35,
                "points": 2,
                "type": "single",
                "question": "What is the key message of evolution principle (Principle 7)?",
                "options": [
                    {
                        "id": "A",
                        "text": "Prevent all changes"
                    },
                    {
                        "id": "B",
                        "text": "Plan for and manage change as it's inevitable"
                    },
                    {
                        "id": "C",
                        "text": "Only agile projects have changes"
                    },
                    {
                        "id": "D",
                        "text": "Changes are always bad"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 36,
                "points": 1,
                "type": "single",
                "question": "What does \"experience of Requirements Engineers\" influence?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only salary"
                    },
                    {
                        "id": "B",
                        "text": "The sophistication and effectiveness of RE practices that can be applied"
                    },
                    {
                        "id": "C",
                        "text": "Nothing important"
                    },
                    {
                        "id": "D",
                        "text": "Only documentation format"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 37,
                "points": 1,
                "type": "single",
                "question": "What is the benefit of using questionnaires versus interviews?",
                "options": [
                    {
                        "id": "A",
                        "text": "Questionnaires are always better"
                    },
                    {
                        "id": "B",
                        "text": "Questionnaires can reach larger groups more efficiently"
                    },
                    {
                        "id": "C",
                        "text": "No benefit"
                    },
                    {
                        "id": "D",
                        "text": "Questionnaires require no planning"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 38,
                "points": 2,
                "type": "single",
                "question": "What is the economic perspective for tool evaluation concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "Tool aesthetics"
                    },
                    {
                        "id": "B",
                        "text": "Cost-benefit analysis of the tool"
                    },
                    {
                        "id": "C",
                        "text": "Tool speed only"
                    },
                    {
                        "id": "D",
                        "text": "Tool popularity"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 39,
                "points": 1,
                "type": "single",
                "question": "What is the relationship between requirements attributes and views?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are unrelated"
                    },
                    {
                        "id": "B",
                        "text": "Views use attributes to filter and present requirements to different audiences"
                    },
                    {
                        "id": "C",
                        "text": "Attributes replace views"
                    },
                    {
                        "id": "D",
                        "text": "Views replace attributes"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 40,
                "points": 2,
                "type": "single",
                "question": "What is semantic quality concerned with?",
                "options": [
                    {
                        "id": "A",
                        "text": "Document length"
                    },
                    {
                        "id": "B",
                        "text": "Correctness and completeness of representation"
                    },
                    {
                        "id": "C",
                        "text": "Visual appearance"
                    },
                    {
                        "id": "D",
                        "text": "Creation speed"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 41,
                "points": 2,
                "type": "single",
                "question": "What is the scope of Requirements Engineering?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only software requirements"
                    },
                    {
                        "id": "B",
                        "text": "Requirements for any type of system in any domain"
                    },
                    {
                        "id": "C",
                        "text": "Only functional requirements"
                    },
                    {
                        "id": "D",
                        "text": "Only technical requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 42,
                "points": 2,
                "type": "single",
                "question": "What makes observation techniques valuable?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are fast"
                    },
                    {
                        "id": "B",
                        "text": "They reveal actual behavior and needs that stakeholders may not articulate"
                    },
                    {
                        "id": "C",
                        "text": "They require no training"
                    },
                    {
                        "id": "D",
                        "text": "They eliminate need for other techniques"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 43,
                "points": 2,
                "type": "single",
                "question": "How does prioritization support decision-making?",
                "options": [
                    {
                        "id": "A",
                        "text": "It doesn't"
                    },
                    {
                        "id": "B",
                        "text": "It helps determine which requirements to implement given limited resources"
                    },
                    {
                        "id": "C",
                        "text": "It makes all requirements equal"
                    },
                    {
                        "id": "D",
                        "text": "It eliminates need for requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 44,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of defining an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create bureaucracy"
                    },
                    {
                        "id": "B",
                        "text": "To structure and guide RE work effectively in the given context"
                    },
                    {
                        "id": "C",
                        "text": "To slow down projects"
                    },
                    {
                        "id": "D",
                        "text": "To eliminate stakeholder involvement"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 45,
                "points": 1,
                "type": "single",
                "question": "What should be considered from the supplier perspective when evaluating tools?",
                "options": [
                    {
                        "id": "A",
                        "text": "Supplier location only"
                    },
                    {
                        "id": "B",
                        "text": "Service quality, reliability, support, and tool roadmap"
                    },
                    {
                        "id": "C",
                        "text": "Supplier brand only"
                    },
                    {
                        "id": "D",
                        "text": "Supplier size only"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            }
        ]
    },
    "5": {
        "title": "CPRE Final Exam 5",
        "questions": [
            {
                "id": 1,
                "points": 2,
                "type": "single",
                "question": "What is the primary benefit mentioned in the value-orientation principle?",
                "options": [
                    {
                        "id": "A",
                        "text": "Reducing costs"
                    },
                    {
                        "id": "B",
                        "text": "Building systems that satisfy stakeholder needs and reduce failure risk"
                    },
                    {
                        "id": "C",
                        "text": "Increasing documentation"
                    },
                    {
                        "id": "D",
                        "text": "Using more tools"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 2,
                "points": 1,
                "type": "single",
                "question": "What is the relationship between different aspects in requirements documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are independent"
                    },
                    {
                        "id": "B",
                        "text": "They are interrelated and must be kept consistent"
                    },
                    {
                        "id": "C",
                        "text": "Only one aspect should be documented"
                    },
                    {
                        "id": "D",
                        "text": "They should contradict each other"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 3,
                "points": 2,
                "type": "single",
                "question": "What category of elicitation technique does interviews belong to?",
                "options": [
                    {
                        "id": "A",
                        "text": "Observation techniques"
                    },
                    {
                        "id": "B",
                        "text": "Questioning techniques"
                    },
                    {
                        "id": "C",
                        "text": "Creativity techniques"
                    },
                    {
                        "id": "D",
                        "text": "Artifact-based techniques"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 4,
                "points": 2,
                "type": "single",
                "question": "What is the main goal of requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create more requirements"
                    },
                    {
                        "id": "B",
                        "text": "To maintain requirements so all roles can work effectively and efficiently"
                    },
                    {
                        "id": "C",
                        "text": "To delete requirements"
                    },
                    {
                        "id": "D",
                        "text": "To hide requirements from stakeholders"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 5,
                "points": 1,
                "type": "single",
                "question": "What are the three fundamental concepts denoted by \"requirement\"?",
                "options": [
                    {
                        "id": "A",
                        "text": "Input, process, output"
                    },
                    {
                        "id": "B",
                        "text": "Need, capability/property, documented representation"
                    },
                    {
                        "id": "C",
                        "text": "Cost, benefit, risk"
                    },
                    {
                        "id": "D",
                        "text": "Plan, do, check"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 6,
                "points": 2,
                "type": "single",
                "question": "Why must an RE process be tailored?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make it unique"
                    },
                    {
                        "id": "B",
                        "text": "Because there is no one-size-fits-all process that works for all contexts"
                    },
                    {
                        "id": "C",
                        "text": "To increase complexity"
                    },
                    {
                        "id": "D",
                        "text": "To satisfy auditors"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 7,
                "points": 1,
                "type": "single",
                "question": "What type of tool support is concerned with managing RE workflow?",
                "options": [
                    {
                        "id": "A",
                        "text": "Management of requirements"
                    },
                    {
                        "id": "B",
                        "text": "Management of the RE process"
                    },
                    {
                        "id": "C",
                        "text": "Modeling of requirements"
                    },
                    {
                        "id": "D",
                        "text": "Documentation of knowledge"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 8,
                "points": 2,
                "type": "single",
                "question": "What quality criterion assesses if a model is suitable for its intended use?",
                "options": [
                    {
                        "id": "A",
                        "text": "Syntactic quality"
                    },
                    {
                        "id": "B",
                        "text": "Pragmatic quality"
                    },
                    {
                        "id": "C",
                        "text": "Semantic quality"
                    },
                    {
                        "id": "D",
                        "text": "Economic quality"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 9,
                "points": 2,
                "type": "single",
                "question": "What is the main characteristic of creativity techniques?",
                "options": [
                    {
                        "id": "A",
                        "text": "They follow strict rules"
                    },
                    {
                        "id": "B",
                        "text": "They encourage free thinking to generate innovative ideas"
                    },
                    {
                        "id": "C",
                        "text": "They only document existing requirements"
                    },
                    {
                        "id": "D",
                        "text": "They focus on cost reduction"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 10,
                "points": 2,
                "type": "single",
                "question": "According to Principle 5, why are problem, requirement, and solution intertwined?",
                "options": [
                    {
                        "id": "A",
                        "text": "They aren't intertwined"
                    },
                    {
                        "id": "B",
                        "text": "Understanding problems influences requirements, and solution possibilities affect both"
                    },
                    {
                        "id": "C",
                        "text": "Only for complex projects"
                    },
                    {
                        "id": "D",
                        "text": "Only in waterfall development"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 11,
                "points": 2,
                "type": "single",
                "question": "What does \"storing\" requirements mean in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Physically storing documents"
                    },
                    {
                        "id": "B",
                        "text": "Maintaining requirements in accessible and organized repositories"
                    },
                    {
                        "id": "C",
                        "text": "Hiding requirements"
                    },
                    {
                        "id": "D",
                        "text": "Archiving old projects"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 12,
                "points": 1,
                "type": "single",
                "question": "What is the purpose of a system context model?",
                "options": [
                    {
                        "id": "A",
                        "text": "To show internal structure"
                    },
                    {
                        "id": "B",
                        "text": "To show system boundary and external interactions"
                    },
                    {
                        "id": "C",
                        "text": "To replace all documentation"
                    },
                    {
                        "id": "D",
                        "text": "To test system"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 13,
                "points": 2,
                "type": "single",
                "question": "What does \"criticality of the system\" refer to?",
                "options": [
                    {
                        "id": "A",
                        "text": "How expensive it is"
                    },
                    {
                        "id": "B",
                        "text": "The potential impact of system failure or defects"
                    },
                    {
                        "id": "C",
                        "text": "How many users it has"
                    },
                    {
                        "id": "D",
                        "text": "How long development takes"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 14,
                "points": 1,
                "type": "single",
                "question": "Why is RE knowledge useful for testers and architects?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not useful for them"
                    },
                    {
                        "id": "B",
                        "text": "Understanding requirements helps them perform their roles more effectively"
                    },
                    {
                        "id": "C",
                        "text": "Only Requirements Engineers need RE knowledge"
                    },
                    {
                        "id": "D",
                        "text": "To replace Requirements Engineers"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 15,
                "points": 2,
                "type": "single",
                "question": "What is artifact-based elicitation?",
                "options": [
                    {
                        "id": "A",
                        "text": "Creating art"
                    },
                    {
                        "id": "B",
                        "text": "Deriving requirements from existing documents, systems, or artifacts"
                    },
                    {
                        "id": "C",
                        "text": "Deleting requirements"
                    },
                    {
                        "id": "D",
                        "text": "Testing software"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 16,
                "points": 2,
                "type": "single",
                "question": "What is a key risk of not properly training users on a new RE tool?",
                "options": [
                    {
                        "id": "A",
                        "text": "Too much efficiency"
                    },
                    {
                        "id": "B",
                        "text": "Tool capabilities won't be fully utilized or may be misused"
                    },
                    {
                        "id": "C",
                        "text": "Over-documentation"
                    },
                    {
                        "id": "D",
                        "text": "Too much automation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 17,
                "points": 2,
                "type": "single",
                "question": "What is meant by \"changing\" requirements in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Randomly modifying requirements"
                    },
                    {
                        "id": "B",
                        "text": "Handling requirements changes in a controlled manner"
                    },
                    {
                        "id": "C",
                        "text": "Preventing all changes"
                    },
                    {
                        "id": "D",
                        "text": "Deleting requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 18,
                "points": 2,
                "type": "single",
                "question": "What advantage do models have over pure natural language?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are always faster to create"
                    },
                    {
                        "id": "B",
                        "text": "They provide better overview and show relationships visually"
                    },
                    {
                        "id": "C",
                        "text": "They never need validation"
                    },
                    {
                        "id": "D",
                        "text": "They are always unambiguous"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 19,
                "points": 2,
                "type": "single",
                "question": "What is shared understanding (Principle 3) necessary for?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not necessary"
                    },
                    {
                        "id": "B",
                        "text": "Successful system development requires common understanding among stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Only for documentation"
                    },
                    {
                        "id": "D",
                        "text": "Only for testing"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 20,
                "points": 1,
                "type": "single",
                "question": "What makes field observation different from interviews?",
                "options": [
                    {
                        "id": "A",
                        "text": "No difference"
                    },
                    {
                        "id": "B",
                        "text": "Observation watches actual behavior in real environment, interviews ask questions"
                    },
                    {
                        "id": "C",
                        "text": "Observation is faster"
                    },
                    {
                        "id": "D",
                        "text": "Interviews are always better"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 21,
                "points": 1,
                "type": "single",
                "question": "What should be balanced when configuring an RE process?",
                "options": [
                    {
                        "id": "A",
                        "text": "Cost only"
                    },
                    {
                        "id": "B",
                        "text": "Rigor and formality versus agility and time constraints"
                    },
                    {
                        "id": "C",
                        "text": "Documentation size"
                    },
                    {
                        "id": "D",
                        "text": "Number of meetings"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 22,
                "points": 2,
                "type": "single",
                "question": "Why is it important to document traceability links explicitly?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's not important"
                    },
                    {
                        "id": "B",
                        "text": "To enable systematic impact analysis and verification"
                    },
                    {
                        "id": "C",
                        "text": "To make work more complex"
                    },
                    {
                        "id": "D",
                        "text": "To satisfy auditors only"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 23,
                "points": 1,
                "type": "single",
                "question": "What is a disadvantage of using templates?",
                "options": [
                    {
                        "id": "A",
                        "text": "They provide structure"
                    },
                    {
                        "id": "B",
                        "text": "People may focus on form over content"
                    },
                    {
                        "id": "C",
                        "text": "They improve quality"
                    },
                    {
                        "id": "D",
                        "text": "They are reusable"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 24,
                "points": 2,
                "type": "single",
                "question": "What does collaboration support in RE tools provide?",
                "options": [
                    {
                        "id": "A",
                        "text": "Hardware connectivity"
                    },
                    {
                        "id": "B",
                        "text": "Capabilities for multiple people to work together on requirements"
                    },
                    {
                        "id": "C",
                        "text": "Code compilation"
                    },
                    {
                        "id": "D",
                        "text": "Database management"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 25,
                "points": 2,
                "type": "single",
                "question": "What is the purpose of validation techniques?",
                "options": [
                    {
                        "id": "A",
                        "text": "To create requirements"
                    },
                    {
                        "id": "B",
                        "text": "To verify that documented requirements match stakeholder needs"
                    },
                    {
                        "id": "C",
                        "text": "To delete requirements"
                    },
                    {
                        "id": "D",
                        "text": "To implement requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 26,
                "points": 1,
                "type": "single",
                "question": "What is a requirements specification?",
                "options": [
                    {
                        "id": "A",
                        "text": "A single requirement"
                    },
                    {
                        "id": "B",
                        "text": "A systematically represented collection of requirements"
                    },
                    {
                        "id": "C",
                        "text": "A test plan"
                    },
                    {
                        "id": "D",
                        "text": "A project schedule"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 27,
                "points": 2,
                "type": "single",
                "question": "What are typical reasons for requirements to change?",
                "options": [
                    {
                        "id": "A",
                        "text": "Random factors only"
                    },
                    {
                        "id": "B",
                        "text": "Business changes, technology evolution, stakeholder feedback, and market dynamics"
                    },
                    {
                        "id": "C",
                        "text": "Only developer preferences"
                    },
                    {
                        "id": "D",
                        "text": "Only cost considerations"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 28,
                "points": 2,
                "type": "single",
                "question": "What does innovation principle (Principle 8) encourage?",
                "options": [
                    {
                        "id": "A",
                        "text": "Copying competitors"
                    },
                    {
                        "id": "B",
                        "text": "Going beyond stated needs to delight stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "Minimizing features"
                    },
                    {
                        "id": "D",
                        "text": "Following only explicit requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 29,
                "points": 1,
                "type": "single",
                "question": "Why is stakeholder availability an important factor?",
                "options": [
                    {
                        "id": "A",
                        "text": "For scheduling meetings only"
                    },
                    {
                        "id": "B",
                        "text": "It constrains when elicitation and validation activities can occur"
                    },
                    {
                        "id": "C",
                        "text": "For determining salaries"
                    },
                    {
                        "id": "D",
                        "text": "For office assignments"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 30,
                "points": 2,
                "type": "single",
                "question": "What should be included in requirements documentation according to general guidelines?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only functional requirements"
                    },
                    {
                        "id": "B",
                        "text": "All relevant aspects: structure, function, behavior, context, and quality"
                    },
                    {
                        "id": "C",
                        "text": "Only technical details"
                    },
                    {
                        "id": "D",
                        "text": "Only what developers need"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 31,
                "points": 1,
                "type": "single",
                "question": "What should be evaluated from the product perspective when selecting tools?",
                "options": [
                    {
                        "id": "A",
                        "text": "Product packaging"
                    },
                    {
                        "id": "B",
                        "text": "Functionality coverage, data storage, roadmap, and ongoing support"
                    },
                    {
                        "id": "C",
                        "text": "Product color scheme"
                    },
                    {
                        "id": "D",
                        "text": "Product weight"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 32,
                "points": 2,
                "type": "single",
                "question": "What is the main purpose of requirements sources analysis?",
                "options": [
                    {
                        "id": "A",
                        "text": "To delete sources"
                    },
                    {
                        "id": "B",
                        "text": "To identify where requirements can be obtained"
                    },
                    {
                        "id": "C",
                        "text": "To create sources"
                    },
                    {
                        "id": "D",
                        "text": "To hide sources"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 33,
                "points": 1,
                "type": "single",
                "question": "What makes a prioritization technique meaningful?",
                "options": [
                    {
                        "id": "A",
                        "text": "Random selection"
                    },
                    {
                        "id": "B",
                        "text": "Clear criteria, stakeholder involvement, and transparency"
                    },
                    {
                        "id": "C",
                        "text": "Manager decision only"
                    },
                    {
                        "id": "D",
                        "text": "Alphabetical ordering"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 34,
                "points": 2,
                "type": "single",
                "question": "Why should terms be used consistently in documentation?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make documents longer"
                    },
                    {
                        "id": "B",
                        "text": "To avoid misunderstandings and ensure clear communication"
                    },
                    {
                        "id": "C",
                        "text": "To confuse readers"
                    },
                    {
                        "id": "D",
                        "text": "To follow arbitrary rules"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 35,
                "points": 2,
                "type": "single",
                "question": "What is the key challenge described in Principle 5 (Problem-Requirement-Solution)?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are easy to separate"
                    },
                    {
                        "id": "B",
                        "text": "They influence each other and cannot be completely separated"
                    },
                    {
                        "id": "C",
                        "text": "Only solution matters"
                    },
                    {
                        "id": "D",
                        "text": "They are unrelated"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 36,
                "points": 2,
                "type": "single",
                "question": "What does the RE process define?",
                "options": [
                    {
                        "id": "A",
                        "text": "Only documentation format"
                    },
                    {
                        "id": "B",
                        "text": "Information flow, communication model, and work products"
                    },
                    {
                        "id": "C",
                        "text": "Only meeting schedules"
                    },
                    {
                        "id": "D",
                        "text": "Only tool selection"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 37,
                "points": 1,
                "type": "single",
                "question": "What is the relationship between stakeholder roles and requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "No relationship"
                    },
                    {
                        "id": "B",
                        "text": "Different stakeholders have different needs and perspectives on requirements"
                    },
                    {
                        "id": "C",
                        "text": "All stakeholders want the same thing"
                    },
                    {
                        "id": "D",
                        "text": "Stakeholders don't influence requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 38,
                "points": 2,
                "type": "single",
                "question": "Why should tools be evaluated from multiple perspectives?",
                "options": [
                    {
                        "id": "A",
                        "text": "To make evaluation more complex"
                    },
                    {
                        "id": "B",
                        "text": "To ensure tools meet diverse needs of all stakeholders and contexts"
                    },
                    {
                        "id": "C",
                        "text": "To delay tool selection"
                    },
                    {
                        "id": "D",
                        "text": "To justify expensive tools"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 39,
                "points": 1,
                "type": "single",
                "question": "What is the benefit of using views in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "To hide information"
                    },
                    {
                        "id": "B",
                        "text": "To present relevant subsets of requirements to different stakeholders"
                    },
                    {
                        "id": "C",
                        "text": "To create more work"
                    },
                    {
                        "id": "D",
                        "text": "To reduce transparency"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 40,
                "points": 2,
                "type": "single",
                "question": "What makes modeling particularly useful for complex requirements?",
                "options": [
                    {
                        "id": "A",
                        "text": "It's always faster"
                    },
                    {
                        "id": "B",
                        "text": "It helps manage complexity through abstraction and visualization"
                    },
                    {
                        "id": "C",
                        "text": "It requires no training"
                    },
                    {
                        "id": "D",
                        "text": "It eliminates ambiguity completely"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 41,
                "points": 2,
                "type": "single",
                "question": "What is the relationship between RE and risk management?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are unrelated"
                    },
                    {
                        "id": "B",
                        "text": "Good RE reduces project risks by ensuring correct system is built"
                    },
                    {
                        "id": "C",
                        "text": "RE increases risk"
                    },
                    {
                        "id": "D",
                        "text": "Risk management replaces RE"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 42,
                "points": 2,
                "type": "single",
                "question": "What makes workshops effective for requirements elicitation?",
                "options": [
                    {
                        "id": "A",
                        "text": "They are cheap"
                    },
                    {
                        "id": "B",
                        "text": "They leverage group dynamics and diverse perspectives"
                    },
                    {
                        "id": "C",
                        "text": "They require no preparation"
                    },
                    {
                        "id": "D",
                        "text": "They eliminate need for other techniques"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 43,
                "points": 2,
                "type": "single",
                "question": "What is \"tracing\" in requirements management?",
                "options": [
                    {
                        "id": "A",
                        "text": "Drawing diagrams"
                    },
                    {
                        "id": "B",
                        "text": "Following relationships and dependencies between requirements and artifacts"
                    },
                    {
                        "id": "C",
                        "text": "Copying requirements"
                    },
                    {
                        "id": "D",
                        "text": "Deleting requirements"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 44,
                "points": 1,
                "type": "single",
                "question": "Why might different projects need different RE processes?",
                "options": [
                    {
                        "id": "A",
                        "text": "To be unique"
                    },
                    {
                        "id": "B",
                        "text": "Because contexts, constraints, and needs vary between projects"
                    },
                    {
                        "id": "C",
                        "text": "For no good reason"
                    },
                    {
                        "id": "D",
                        "text": "To confuse teams"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            },
            {
                "id": 45,
                "points": 1,
                "type": "single",
                "question": "What is the main purpose of RE tool support?",
                "options": [
                    {
                        "id": "A",
                        "text": "To replace Requirements Engineers"
                    },
                    {
                        "id": "B",
                        "text": "To make RE activities more efficient and effective"
                    },
                    {
                        "id": "C",
                        "text": "To increase costs"
                    },
                    {
                        "id": "D",
                        "text": "To create more documentation"
                    }
                ],
                "correctAnswers": [
                    "B"
                ],
                "explanation": "Correct answer is B"
            }
        ]
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allExams;
}
