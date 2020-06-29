import sys

def rememberer(thing):
	# Open file
	with open('database.txt', 'a') as file:
		# Write thing to file
		file.write(thing+'\n')

def show():
	# Open file
	with open('database.txt') as file:
		# Print out each line in file
		for line in file:
			print(line)
	# Close file

if __name__ == '__main__':
	if sys.argv[1].lower() == '--list':
		show()
	else:
		rememberer(' '.join(sys.argv[1:]))
	#rememberer(input("What should I remember? "))
