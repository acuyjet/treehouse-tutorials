# Problem 1: Warm the oven
# Write a while loop that checks to see if the oven
# is 350 degrees. If it is, print "The oven is ready!"
# If it's not, increase current_oven_temp by 25 and print
# out the current temperature.

current_oven_temp = 75

# Solution 1 here
while current_oven_temp < 350:
    current_oven_temp += 25
    print(current_oven_temp)
print("The oven is ready!")

# Problem 2: Total and average
# Complete the following function so that it asks for
# numbers from the user until they enter 'q' to quit.
# When they quit, print out the list of numbers,
# the sum and the average of all of the numbers.


def total_and_average(numbers):
    total = 0
    for i in range(0, len(numbers)):
        numbers[i] = int(numbers[i])
        total += numbers[i]
        average = total / len(numbers)
    print("Your numbers: {}".format(numbers))
    print("Total: {}".format(total))
    print("Average: {}".format(average))


# Solution 2 here
numbers = []
number = input("Enter a number, or 'q' to quit: ")

while number != "q":
    numbers.append(number)
    number = input("Enter a number, or 'q' to quit: ")

total_and_average(numbers)

# Problem 3: Missbuzz
# Write a while loop that increments current by 1
# If the new number is divisible by 3, 5, or both,
# print out the number. Otherwise, skip it.
# Break out of the loop when current is equal to 101.

current = 1

# Solution 3 here
while current < 101:
    if current % 3 == 0 or current % 5 == 0:
        print(current)
    current += 1

