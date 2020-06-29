def rememberer(thing):
	# Open file
	with open('database.txt', 'a') as file:
		# Write thing to file
		file.write(thing+'\n')
	# # Close file
	# file.close()

if __name__ == '__main__':
	rememberer(input("What should I remember? "))