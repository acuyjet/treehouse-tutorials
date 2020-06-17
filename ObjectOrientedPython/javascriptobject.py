class JavaScriptObject(dict):
	def __getattribute__(self, item):
		try:
			return self[item]
		except KeyError:
			return super().__getattribute__(item)