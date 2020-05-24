
# Columns: Name, Day/Month, Celebrates, Age
BIRTHDAYS = (
    ("James", "9/8", True, 9),
    ("Shawna", "12/6", True, 22),
    ("Amaya", "28/2", False, 8),
    ("Kamal", "29/4", True, 19),
    ("Sam", "16/7", False, 22),
    ("Xan", "14/3", False, 34),
)

# Problem 1: Celebrations
# Loop through all of the people in BIRTHDAYS
# If they celebrate their birthday, print out
# "Happy Birthday" and their name
print("Celebrations:")

# Solution 1 here
for person in BIRTHDAYS:
    if person[2] == True:
        print("Happy Birthday {}".format(person[0]))

print("-"*20)

# Problem 2: Half birthdays
# Loop through all of the people in BIRTHDAYS
# Calculate their half birthday (six months later)
# Print out their name and half birthday
print("Half birthdays:")

# Solution 2 here
for person in BIRTHDAYS:
    month = person[1].split("/")
    half_birthday_month = int(month[1]) + 6
    if half_birthday_month > 12:
        half_birthday_month -= 12
    print("{0} {1}/{2}".format(person[0], half_birthday_month, month[0]))

print("-"*20)

# Problem 3: Only school year birthdays
# Loop through the people in BIRTHDAYS
# If their birthday is between September (9)
# And June (6), print their name
print("School birthdays:")

# Solution 3 here
for person in BIRTHDAYS:
    month = person[1].split("/")
    if int(month[1]) < 7 or int(month[1]) > 9:
        print(person[0])

print("-"*20)

# Problem 4: Wishing stars
# Loop through BIRTHDAYS
# If the person celebrates their birthday,
# AND their age is 10 or less,
# Print out their name and as many stars as their age
print("Stars:")

# Solution 4 here
for person in BIRTHDAYS:
    if person[2] == True and person[3] <= 10:
        print(person[0], "* "*person[3])

print("-"*20)
