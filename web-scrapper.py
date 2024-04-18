# import requests
# from bs4 import BeautifulSoup
# from inflection import titleize

# r = requests.get('http://www.dailysmarty.com/topics/python')
# soup = BeautifulSoup(r.text, 'html.parser')
# r.text
# links = soup.find_all('a')

# titles = title_generator(links)

# for title in titles:
#     print(title)

import requests 
import inflection
from bs4 import BeautifulSoup

web = requests.get("https://dailysmarty.com/topics/python")

web.text

soup = BeautifulSoup(web.content, "html.parser")

for data in soup.select("div.post-link-title h2 a"):
  camelized_text = inflection.camelize(data.text)
  print(camelized_text)

