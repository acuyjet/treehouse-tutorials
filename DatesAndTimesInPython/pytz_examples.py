import datetime
import pytz

pacific = pytz.timezone('US/Pacific')
eastern = pytz.timezone('US/Eastern')
fmt = '%Y-%m-%d %H:%M:%S %Z%z'
utc = pytz.utc
start = pacific.localize(datetime.datetime(2014, 4, 21, 9))
print(start.strftime(fmt))

start_eastern = start.astimezone(eastern)
print(start_eastern)
print(start)

start_utc = datetime.datetime(2020, 6, 28, 12, 22, 42, tzinfo=utc)
print(start_utc.strftime(fmt))

start_pacific = start_utc.astimezone(pacific)
print(start_pacific)

auckland = pytz.timezone('Pacific/Auckland')
mumbai = pytz.timezone('Asia/Calcutta')
apollo_13_naive = datetime.datetime(1970, 4, 11, 14, 13)
apollo_13_eastern = eastern.localize(apollo_13_naive)
print(apollo_13_naive)
print(apollo_13_eastern)

apollo_13_utc = apollo_13_eastern.astimezone(utc)
print(apollo_13_utc.astimezone(pacific).strftime(fmt))
print(apollo_13_utc.astimezone(auckland).strftime(fmt))
print(apollo_13_utc.astimezone(mumbai).strftime(fmt))

print(pytz.all_timezones)
print(pytz.country_timezones['us'])
