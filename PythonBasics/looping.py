name = input("What's your name?  ")

# TODO: Ask the user by name if they understand Python while loops
understand = input("{}, do you understand Python while loops? Please enter Y or N.  ".format(name))

# TODO: Write a while statement that checks if the user doesn't understand while loops
while understand != "Y":
    # TODO: Since the user doesn't understand while loops, let's explain them.
    print("While loops execute code while a condition is true (or false), and exit when it is false (or true).")
    # TODO: Ask the user again, by name, if they understand while loops.
    understand = input("Now do you get it? Please enter Y or N.  ")

# TODO: Outside the while loop, congratulate the user for understanding while loops
print("Sweet, good job!")
