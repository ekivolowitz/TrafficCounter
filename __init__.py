from flask import Flask
from flask import render_template
from flask import request
from pprint import pprint
import json
app = Flask(__name__)

import sqlite3

@app.route('/')
def homepage():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('select * from Traffic')
    data = cursor.fetchall()
    
    return render_template('homepage.html')

@app.route('/rangeSearch', methods=["POST", "GET"])
def rangeSearch():
    start = request.form['start']
    end = request.form['end']
    startSplit = start.split("-")
    endSplit = end.split("-")
    
    startYear = int(startSplit[0])
    startMonth = int(startSplit[1])
    startDay = int(startSplit[2])
    endYear = int(endSplit[0])
    endMonth = int(endSplit[1])
    endDay = int(endSplit[2])
    # todayYear = "2017"
    # todayMonth = "12"
    # todayDay = "24"
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    print("Start: " + str(startSplit))
    print("End: " + str(endSplit))
    query = 'select * from Traffic where Year >= {} and Year <= {} and Month >= {} and Month <= {} and Day >= {} and Day <= {}'.format(startYear, endYear, startMonth, endMonth, startDay, endDay)
    print(query)
    cursor.execute(query)
    # cursor.execute('select Hour, Minute from Traffic where Year = {} and Month = {} and Day = {}'.format(todayYear, todayMonth, todayDay))

    d = cursor.fetchall()
    # pprint(d)
    sortedData = sorted(d, key=lambda record: (record[2], record[3], record[4]))
    cleanedData = []
    for element in sortedData:
        if element[3] < 7 or element[3] > 17:
            pass
        elif element[3] == 7 and element[4] < 30:
            pass
        elif element[3] == 17 and element[4] > 30:
            pass
        else:
            cleanedData.append(element)
    pprint(cleanedData)
    return render_template('homepage.html', data = json.dumps(cleanedData))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
