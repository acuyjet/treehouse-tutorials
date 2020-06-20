# Multiple imports

def foo_bar(arg1, arg2, arg3, arg4):
    # Way too much indentation
    return arg1, arg2, arg3, arg4


def bar(*args):
    # Bad spacing
    return 2 + 2


# Bad class name, bad spacing, bad indentation
class Treehouse:
    def one(self):
        return 1

    def two(self):
        return 2


# Bad identation and whitespace (and bad variable names)
alfa, bravo, charlie, delta = foo_bar(
    "a long string",
    "a longer string",
    "yet another long string",
    "and other crazy string",
)


# Bad spacing
one = 1
three = 3
fourteen = 14  # make fourteen equal to 12

print(alfa)
print(fourteen)

print(Treehouse().two())
