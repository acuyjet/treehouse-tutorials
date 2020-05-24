TICKET_PRICE = 10
SERVICE_CHARGE = 2
tickets_remaining = 100

# Cretae the calculate_price function: takes number of tickets and returns number_tickets * TICKET_PRICE
def calculate_price(number_tickets):
	return (number_tickets * TICKET_PRICE) + SERVICE_CHARGE

while tickets_remaining > 0:
	print("There are {} tickets left.".format(tickets_remaining))
	name = input("Hi there! What's your name?  ")
	number_tickets = input("How many tickets would you like, {}?  ".format(name))

	try:
		number_tickets = int(number_tickets)

		if number_tickets > tickets_remaining:
			raise ValueError("There are only {} tickets remaining".format(tickets_remaining))
	except ValueError as err:
		print("Oops, we ran into an issue: {}. Please try again.".format(err))
	else:
		total_price = calculate_price(number_tickets)
		print("Thanks, {}! Your total price for {} tickets is ${}".format(name, number_tickets, total_price))
		confirm = input("Would you like to proceed, {}? (Y/N)  ".format(name))

		if confirm.upper() == "Y":
			print("SOLD!")

			# TODO: Gather credit card information and process it

			tickets_remaining -= number_tickets
		else:
			print("Thanks, {}! Have a great day.".format(name))

print("Sorry, the show's sold out!")
