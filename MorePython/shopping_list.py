shopping_list = []

def add_to_list(item):
	shopping_list.append(item)
	print("You currently have {} item(s) on your list.".format(len(shopping_list)))


def show_help():
	print("""
Enter 'DONE' to stop adding items.
Enter 'SHOW LIST' to show the list.
Enter 'HELP' for help.
""")
	print("What should we pick up at the store?")



def show_list():
	for item in shopping_list:
		print(item)


show_help()

while True:
	new_item = input("> ")
	if new_item == "HELP":
		show_help()
		continue
	elif new_item == "DONE":
		break
	elif new_item =="SHOW LIST":
		show_list()
	else:
		add_to_list(new_item)
