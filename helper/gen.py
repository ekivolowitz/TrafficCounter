import random

with open('gen_data.sql', 'w') as f:
    f.write('INSERT INTO Traffic(Year, Month, Day, Hour, Minute)\n')
    f.write("VALUES\n")
    for x in range(100000):
        month = random.randrange(1,13)
        day = None
        if month in [1,3,5,7,8,10,12]:
            day = random.randrange(1, 32)
        elif month in [4,6,9,11]:
            day = random.randrange(1,31)
        elif month == 2:
            day = random.randrange(1,29)
        hour = random.randrange(7,18)
        minute = random.randrange(0, 60)
        f.write('(2017, {}, {}, {}, {}),\n'.format(month, day, hour, minute)) if x < 99999 else f.write('(2017, {}, {}, {}, {});'.format(month, day, hour, minute))
