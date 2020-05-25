# Step 1
# Ask the user for their name and the year they were born.
CURRENT_YEAR = 2020
name = input("What's your name?  ")
while True:
	birth_year = input("In what year were you born?  ")
	try:
		birth_year = int(birth_year)
	except ValueError:
		print("Whoops, try again!")
	else:
		break

# Step 2
# Calculate and print the year they'll turn 25, 50, 75, and 100.
turn_25 = birth_year + 25
turn_50 = birth_year + 50
turn_75 = birth_year + 75
turn_100 = birth_year + 100

# Step 3
# If they're already past any of these ages, skip them.
if turn_25 > CURRENT_YEAR:
	print("{}, you'll turn 25 in {}".format(name, turn_25))
if turn_50 > CURRENT_YEAR:
	print("{}, you'll turn 50 in {}".format(name, turn_50))
if turn_75 > CURRENT_YEAR:
	print("{}, you'll turn 75 in {}".format(name, turn_75))
if turn_100 > CURRENT_YEAR:
	print("{}, you'll turn 100 in {}".format(name, turn_100))
