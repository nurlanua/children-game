import random

array = [[0]*10 for i in range(10)]

def show():
    for x in range(10):
        print(array[x])

""" def wrong():
    print("please choose a number:")
    number = input()
    if number not int:
        wrong()
    else:
        break """

for x in range(10):
    for y in range(10):
        array[x][y] = random.randrange(0,5)

show()
print("please choose a number between 0 and 4:")
try:
    number = int(input())
    print(type(number))
except ValueError:
    print("please try again")
