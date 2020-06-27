import datetime
import random

from questions import Add, Multiply

class Quiz:
	questions = []
	answers = []

	def __init__(self):
		question_types = (Add, Multiply)
		# Generate 10 random questions with numbers from 1 to 10
		for _ in range(10):
			num1 = random.randint(1, 10)
			num2 = random.randint(1, 10)
			question = random.choice(question_types)(num1, num2)
			# Add these questions to self.questions
			self.questions.append(question)

	def take_quiz(self):
		# Log start time
		self.start_time = datetime.datetime.now()
		# Ask all of the questions
		for question in self.questions:
			# Log if user got question right
			self.answers.append(self.ask(question))
		else:
			# Log end time
			self.end_time = datetime.datetime.now()
		# Show summary
		return self.summary()

	def ask(self, question):
		correct = False
		# Log start time
		question_start = datetime.datetime.now()
		# Capture answer
		answer = input(question.text + ' = ')
		# Check answer
		if answer == str(question.answer):
			correct = True
		# Log end time
		question_end = datetime.datetime.now()
		# If answer's correct, send back True
		# otherwise, send back false
		# Send back elapsed time
		return correct, question_end - question_start

	def total_correct(self):
		# Return the total number of correct answers
		total = 0
		for answer in self.answers:
			if answer[0]:  # Truthy
				total += 1
		return total

	def summary(self):
		# Print how many questions the user got right out of the total (ex. 6/10)
		print("You got {} out of {} right!".format(self.total_correct(), len(self.questions)))
		# Print total time for quiz (in seconds)
		print("It took you {} seconds total.".format((self.end_time-self.start_time).seconds))

Quiz().take_quiz()
