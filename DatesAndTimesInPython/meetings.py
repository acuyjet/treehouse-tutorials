from datetime import datetime
import pytz

OTHER_TIMEZONES = [
    pytz.timezone('Africa/Bissau'),
   	pytz.timezone('America/Inuvik'),
	pytz.timezone('Atlantic/Faeroe'),
   	pytz.timezone('Asia/Ashgabat'),
   	pytz.timezone('UTC'),
   	pytz.timezone('Europe/Bucharest'),
]
fmt = '%Y-%m-%d %H:%M:%S %Z%z'

while True:
	date_input = input("When is your meeting? Please use MM/DD/YYYY HH:MM format. ")
	try:
		local_date = datetime.strptime(date_input, '%m/%d/%Y %H:%M')
	except ValueError:
		print("{} isn't in the correct format!".format(date_input))
	else:
		local_date = pytz.timezone('US/Eastern').localize(local_date)
		utc_date = local_date.astimezone(pytz.utc)

		output = []
		for timezone in OTHER_TIMEZONES:
			output.append(utc_date.astimezone(timezone))
		for appointment in output:
			print(appointment.strftime(fmt))
		break