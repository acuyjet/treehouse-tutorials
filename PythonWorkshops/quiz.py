import json

with open('quiz.json') as quizfile:
	quiz = json.load(quizfile)
	print(quiz['quiz'])
