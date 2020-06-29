import csv

# When writing to CSV, you have to create the field names
with open('teachers.csv', 'a') as csvfile:
	field_names = ['first_name', 'last_name', 'topid']
	teachwriter = csv.DictWriter(csvfile, fieldnames=field_names)

	teachwriter.writeheader()
	teachwriter.writerow({
		'first_name': 'Kenneth',
		'last_name': 'Love',
		'topic': 'Python',
	})
	teachwriter.writerow({
		'first_name': 'Alena',
		'last_name': 'Holligan',
		'topic': 'PHP',
	})
