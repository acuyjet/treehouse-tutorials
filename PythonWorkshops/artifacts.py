import csv

# Opening a CSV
with open('museum.csv', newline='') as csvfile:
	# # Turn into a list
	# artreader = csv.reader(csvfile, delimiter='|')
	# rows = list(artreader)
	# for row in rows[:2]:
	# 	print(', '.join(row))

	# Turn into a dictionary:
	artreader = csv.DictReader(csvfile, delimiter='|')
	rows = list(artreader)
	for row in rows[1:2]:
		print(row['group1'])
