class Circle:
	def __init__(self, diameter):
		self.diameter = diameter

	@property
	def radius(self):
		return self.diameter / 2

	@radius.setter
	def radius(self, radius):
		self.diameter = radius * 2

small = Circle(10)
print(small.diameter)
print(small.radius)

small.radius = 10
print(small.diameter)