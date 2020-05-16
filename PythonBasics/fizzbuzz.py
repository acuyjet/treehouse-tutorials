name = input("Please enter your name: ")
number = input("Please enter a number: ")

# TODO: Make sure the number is an integer

if number.isnumeric() == False:
	number = input("That's not a number. Please enter a number: ")
else:
	# TODO: Print out the User's name and the number entered,
	# making sure the two statements are on separate lines of output.
	print("Your name is {}.".format(name))
	print("You entered the number {}.".format(number))

# TODO: Compare the number the user gave with the different
# FizzBuzz conditions.
# *********************
# If the number is divisible by 3, print "is a Fizz number."
# If the number is divisible by 5, print "is a Buzz number."
# If the number is divisible by both 3 and 5, print "is a FizzBuzz number."
# Otherwise, print "is neither a fizzy or a buzzy number."
# *********************

# TODO: Define variables for is_fizz and is_buzz that stores
# a Boolean value of the condition. Remember that the modulo operator, %,
# can be used to check if there is a remainder.

if int(number) % 3 == 0 and int(number) % 5 == 0:
	print("{} is a FizzBuzz number!".format(number))
	is_fizz = True
	is_buzz = True
elif int(number) % 3 == 0:
	print("{} is a Fizz number!".format(number))
	is_fizz = True
	is_buzz = False
elif int(number) % 5 == 0:
	print("{} is a Buzz number!".format(number))
	is_fizz = False
	is_buzz = True
else:
	print("{} is neither Fizzy nor Buzzy".format(number))
	is_fizz = False
	is_buzz = False


# Using the variables, check the condition of the value, and print the necessary
# string

if is_fizz == True and is_buzz == True:
	print("is_fizz is True AND is_buzz is True")
elif is_fizz == True:
	print("is_fizz is True")
elif is_buzz == True:
	print("is_buzz is True")
