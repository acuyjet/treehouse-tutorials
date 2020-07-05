# Decorators are functions that accept other functions as arguments; have outer an inner functions

def outer():
	number = 5

	def inner():
		print(number)

	inner()


def apply(func, x, y):
	return func(x, y)


def add(x, y):
	return x + y


def subtract(x, y):
	return x - y


# print(apply(add, 5, 5))
# print(apply(subtract, 2, 8))


def close():
	x = 5
	def inner():
		print(x)
	return inner

# closure = close()
# closure()


def add_to_five(num):
	def inner():
		print(num+5)
	return inner


# fifteen = add_to_five(10)
# fifteen()


# def logme(func):
# 	import logging
# 	logging.basicConfig(level=logging.DEBUG)

# 	def inner():
# 		logging.debug("Called {}".format(func.__name__))
# 		return func()
# 	return inner


# @logme
# def print_4():
# 	print(4)


# print_4()


# Like the above, but will take arguments

from functools import wraps

def logme(func):
	import logging
	logging.basicConfig(level=logging.DEBUG)

	@wraps(func)  # Assigns content like __docs__, __name__ on inner to func 
	def inner(*args, **kwargs):
		logging.debug("Called {} with args {} and kwargs {}".format(func.__name__, args, kwargs))
		return func(*args, **kwargs)
	# inner.__doc__ = func.__doc__  # Lets you call docstrings (but can use functools module instead)
	# inner.__name__ = func.__name__  # Lets you call func's name, otherwise inner doesn't have one
	return inner


@logme
def sub(x, y, switch=False):
	"""Returns the difference between two numbers"""
	return x - y if not switch else y - x


print(sub(5, 2))
print(sub(5, 2, switch=True))

print(sub.__name__)
