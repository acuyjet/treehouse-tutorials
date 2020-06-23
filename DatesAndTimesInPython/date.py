import datetime


def wikipedia_link(date_string):
	date = datetime.datetime.strptime(date_string, '%b %d')
	link = "https://en.wikipedia.org/wiki/{}".format(date.strftime('%B_%d'))
	return link
	

date_string = input('Enter a date (format example: "Jun 22"): ')
print(wikipedia_link(date_string))