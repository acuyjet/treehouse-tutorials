# Step 1:
# Make two strings, each should be 8 characters long, made up of Xs and Os.
# First string should start with X, second string should start with O.
# Both strings should alternate between the two characters.
# You can use multiplication for this.
x = "x o " * 4
o = "o x " * 4

# Step 2:
# Make a list
# Add 1 of the X-started strings.
# Add 1 of the O-started strings.
# Repeat until you have 8 items total in the list.
# You can use multiplication for this, too.

list = []

while len(list) < 8:
    list.append(x)
    list.append(o)

# Step 3:
# Print out the list of strings, joined with newlines \n.
for item in list:
    print(item + "\n")
