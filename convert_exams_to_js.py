#!/usr/bin/env python3
"""
Convert CPRE Final Exam markdown files to questions.js format
"""

import re
import json

def parse_exam_file(filename):
    """Parse a single exam markdown file and extract questions"""
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    questions = []
    # Pattern to match each question block
    question_pattern = r'### Question (\d+) \(EU \d+\) - (\d+) point[s]?\n(.*?)\n- A\) (.*?)\n- B\) (.*?)\n- C\) (.*?)\n- D\) (.*?)\n\n\*\*Answer: ([A-D])\*\*'

    matches = re.findall(question_pattern, content, re.DOTALL)

    for match in matches:
        q_id, points, question_text, opt_a, opt_b, opt_c, opt_d, answer = match

        question = {
            'id': int(q_id),
            'points': int(points),
            'type': 'single',
            'question': question_text.strip(),
            'options': [
                {'id': 'A', 'text': opt_a.strip()},
                {'id': 'B', 'text': opt_b.strip()},
                {'id': 'C', 'text': opt_c.strip()},
                {'id': 'D', 'text': opt_d.strip()}
            ],
            'correctAnswers': [answer],
            'explanation': f"Correct answer is {answer}"
        }
        questions.append(question)

    return questions

def generate_questions_js():
    """Generate the complete questions.js file"""

    exams = {}
    exam_files = [
        ('CPRE_Final_Exam_1.md', 'CPRE Final Exam 1'),
        ('CPRE_Final_Exam_2.md', 'CPRE Final Exam 2'),
        ('CPRE_Final_Exam_3.md', 'CPRE Final Exam 3'),
        ('CPRE_Final_Exam_4.md', 'CPRE Final Exam 4'),
        ('CPRE_Final_Exam_5.md', 'CPRE Final Exam 5')
    ]

    for idx, (filename, title) in enumerate(exam_files, 1):
        print(f"Parsing {filename}...")
        questions = parse_exam_file(filename)
        exams[idx] = {
            'title': title,
            'questions': questions
        }
        print(f"  Found {len(questions)} questions")

    # Generate JavaScript file
    js_content = '''// CPRE Foundation Level Final Practice Exams
// 5 comprehensive final exams with 45 questions each
// All Educational Units (1-7) covered

const allExams = '''

    # Convert to JSON with proper formatting
    js_content += json.dumps(exams, indent=4)

    js_content += ''';

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allExams;
}
'''

    # Write to file
    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

    print("\nGenerated questions.js successfully!")
    print(f"Total exams: {len(exams)}")
    total_questions = sum(len(exam['questions']) for exam in exams.values())
    print(f"Total questions: {total_questions}")

if __name__ == '__main__':
    generate_questions_js()
