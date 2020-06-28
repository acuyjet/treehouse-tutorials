import re

names_file = open("names.txt", encoding="utf-8")
data = names_file.read()
names_file.close()

# last_name = r'Love'
# first_name = r'Kenneth'

# print(re.match(last_name, data))  # Matches from the beginning of a string
# print(re.search(first_name, data))  # Matches anywhere in a string (one line)
# print(re.search(r'\(\d\d\d\) \d\d\d-\d\d\d\d', data))

# print(re.findall(r'\(?\d{3}\)?-?\s?\d{3}-\d{4}', data))
# print(re.findall(r'\w*, \w+', data))

# print(re.findall(r'[-\w\d+.]+@[-\w\d.]+', data))
# print(re.findall(r'\b[trehous]{9}\b', data, re.I))

# print(re.findall(r'''
# 	\b@[-\w\d.]*  # Find a word boundary, and @, and then any number of characters
# 	[^gov\t]+  # Ignore one or more instances of the letters g, o, or v, and a tab
# 	\b  # Match another word boundary
# ''', data, re.VERBOSE|re.I))

# print(re.findall(r'''
# 	\b[-\w]*,  # Find a word boundary, one or more hyphens or characters, and a comma
# 	\s  # Find 1 whitespace
# 	[-\w ]+  # Find one or more hyphens and characters and explicit spaces
# 	[^\t\n]  # Ignore tabs and newlines
# ''', data, re.X))

line = re.compile(r'''
	^(?P<name>(?P<last>[-\w ]*),\s(?P<first>[-\w ]+))\t  # Last and first names
	(?P<email>[-\w\d.+]+@[-\w\d.]+)\t  # Email addresses
	(?P<phone>\(?\d{3}\)?-?\s?\d{3}-\d{4})?\t  # Phone Number
	(?P<job>[\w\s]+,\s[\w\s.]+)\t?  # Job and company
	(?P<twitter>@[\w\d]+)?$  # Twitter handle
''', re.X | re.M)
# print(re.search(line, data).groupdict())
# print(line.search(data).groupdict())
for match in line.finditer(data):
	print('{first} {last} <{email}>'.format(**match.groupdict()))

