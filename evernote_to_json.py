import os
import glob
from os import walk
from bs4 import BeautifulSoup
import json


mypath = os.getcwd()
f = glob.glob('*.html')

curr_id = 1
all_questions = []
for filename in f:
    myfile = mypath + '/' + filename
    soup = BeautifulSoup(open(myfile), 'html.parser')
    text = soup.get_text().split('\n')[2:-1]
    current = {}
    current['id'] = curr_id
    curr_id += 1
    current['question'] = text[0]
    current['answer'] = text[1]
    current['category'] = text[2]
    current['references'] = text[3:]
    all_questions.append(current)

with open('result.json', 'w') as fp:
    json.dump(all_questions, fp)


"""
import os
from os import walk
from bs4 import BeautifulSoup
import json

mypath = os.getcwd()
f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    f.extend(filenames)
    break

all_questions = []
for filename in f:
    myfile = mypath + '/' + filename
    soup = BeautifulSoup(open(myfile), 'html.parser')
    current = {}
    current['question'] = soup.title
    text = soup.find_all('div')
    for div in text:
        if div.contains <b>:
            current['category'] = div
        elif div.contains <a>:
            current['links'] = div
        else
            current['answer'] = div
    all_questions.append(current)

with open('result.json', 'w') as fp:
    json.dump(all_questions, fp)




myfile = os.getcwd() + '/merged.html'
soup = BeautifulSoup(open(myfile), 'html.parser')
titles = soup.find_all('title')
titles.pop() #remove 'Exported Notes Index'
answers = soup.find_all('div')
myqs = []
for i, title in enumerate(titles):
    curr = {}
    curr['question'] = str(title)

        # SHOOT! this means there will be too many divs for questions... darn...
        if answers[i].includes(<b>)
            curr['category'] = answers[i]

        0. create empty ALLQS array
        1. for each file in the exported-notes-folder (i.e.: loop over filenames, soup(open(filename)))
            i. soupify it
            ii. find the title: QUESTION
            iii. find the divs
                iv. if its a plain old div: ANSWER
                v. if its a <b>: CATEGORY
                vi. if its an <a: LINK // you can change this up
            vii. create that dictionary { 'id': 0, 'question': 'text', 'answer': 'text', etc }
            ix. push that dictionary to ALLQS array
        2. json.dump(ALLQS)

    curr['answer'] = str(answers[i])
    myqs.append(curr)
import json
with open('result.json', 'w') as fp:
    json.dump(myqs, fp)

# in json file:
    #   :%s/<div>
    #   :%s/<\/div>
    #   :%s/<title>
    #   :%s/<\/title>
"""

"""
import os
import json
mypath = os.getcwd() + '/result.json'
myjson = json.load(open(mypath))

for q in myjson:
    if q['answer'] == '':
        if 'algorithms' in q['references']:
            q['category'] = 'algorithms'
        if 'frameworks' in q['references']:
            q['category'] = 'frameworks'
        if 'databases' in q['references']:
            q['category'] = 'databases'
        if 'server-side' in q['references']:
            q['category'] = 'server-side'
        q['answer'] = 'stuff'
        q['references'] = []
"""