# TODO Create an empty list to maintain the player names
roster = []
number = 1

# TODO Ask the user if they'd like to add players to the list.
# If the user answers "Yes", let them type in a name and add it to the list.
# If the user answers "No", print out the team 'roster'
add_player = input("Would you like to add a player to the list? (Y/N)  ")
while add_player.lower() == "y":
	name = input("Cool, what's their name?  ")
	roster.append(name)
	add_player = input("Would you like to add another player? Y/N  ")
	if add_player.lower() == 'n':
		print("Here are your players: {}".format(roster))

# TODO print the number of players on the team
print("You've got {} players on the team.".format(len(roster)))

# TODO Print the player number and the player name
# The player number should start at the number one
for i in roster:
	print("Number {}: {}".format(number, i))
	number += 1

# TODO Select a goalkeeper from the above roster
goalkeeper = input("Enter a player's number to assign them as the keeper.  ")

# TODO Print the goal keeper's name
# Remember that lists use a zero based index
goalkeeper_name = roster[int(goalkeeper) - 1]
print("{} is the goalkeeper.".format(goalkeeper_name))
