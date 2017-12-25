import random

with open('gen_data.sql', 'w') as f:
    f.write('INSERT INTO Traffic(Year, Month, Day, Hour, Minute)\n')
    f.write("VALUES\n")
    for x in range(1000):
        hour = random.randrange(7,18)
        minute = random.randrange(0, 60)
        f.write('(2017, 12, 24, {}, {}),\n'.format(hour, minute)) if x < 999 else f.write('(2017, 12, 24, {}, {});'.format(hour, minute))
