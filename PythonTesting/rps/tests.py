import unittest
import moves


class MoveTests(unittest.TestCase):
	def setUp(self):
		self.rock = moves.Rock()
		self.paper = moves.Paper()
		self.scissors = moves.Scissors()

	def test_five_plus_five(self):
		assert 5 + 5 == 10

	def test_one_plus_one(self):
		assert not 1 + 1 == 3

	def test_equal(self):
		self.assertEqual(self.rock, moves.Rock())

	def test_not_equal(self):
		self.assertNotEqual(self.rock, self.paper)

	def test_rock_beats_scissors(self):
		self.assertGreater(self.rock, self.scissors)

	def test_paper_beats_rock(self):
		self.assertGreater(self.paper, self.rock)

	def test_scissors_beats_paper(self):
		self.assertGreater(self.scissors, self.paper)

if __name__ == '__main__':
	unittest.main()