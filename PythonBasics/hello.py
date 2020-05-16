first_name = input("What is your first name?  ")

print("Hello,", first_name)

if first_name == "Allison":
	print(first_name, "is learning Python!")
elif first_name == "Paul":
    print(first_name, "is in the basement playing video games.")
else:
    # This is just in case we have a younger reader who can't yet read
    age = int(input("How old are you?  "))
    
    if age <= 6:
        print("Wow, you're {}! If you're confident with your reading already. . .".format(age))

    print("You should totally learn Python, {}!".format(first_name))

print("Have a great day, {}!".format(first_name))