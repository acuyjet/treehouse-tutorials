def calculate_total(*args):
	total = sum(args)
	print(total)


def packer(*args):
	for arg in args:
		print(arg * 10)


def unpacker():
	return ("Hey")


calculate_total(25)

packer("ni ", "lumberjack ", "99 ")

var1, var2, var3 = unpacker()
print(var1)
print(var2)
print(var3)
