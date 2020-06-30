import unittest
import moves


class MoveTests(unittest.TestCase):
	def test_five_plus_five(self):
		assert 5 + 5 == 10

	def test_one_plus_one(self):
		assert not 1 + 1 == 3

if __name__ == '__main__':
	unittest.main()