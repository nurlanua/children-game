import random
size = 10
rang = 5
array = [[0]*size for i in range(size)]

def show():
    for x in range(size):
        print(array[x])

def recursive(prev, x, y):
    array[x][y] = array[0][0]
    if x < size-1 and array[x+1][y] == prev:
        recursive(prev,x+1,y)
        
    if x > 0 and array[x-1][y] == prev:
        recursive(prev,x-1,y)
        
    if y < size-1 and array[x][y+1] == prev:
        recursive(prev,x,y+1)
        
    if y > 0 and array[x][y-1] == prev:
        recursive(prev,x,y-1)
        
def check(num):
    count = 0
    for x in range(size):
        count += array[x].count(num)
    return count

def checkWin():
    count = []
    for x in range(rang):
        count.append(check(x))

    if 100 in count:
        return True
    else:
        return False

for x in range(size):
    for y in range(size):
        array[x][y] = random.randrange(0,rang)

show()

while not checkWin():

    error = True
    number = None
    while error:
        number = input("please choose a number between 0 and 4: ")
        try:
            number = int(number)
            if number >= rang or number < 0:
                raise ValueError
            error = False
        except ValueError:
            print("please try again")

    prev = array[0][0]
    if prev != number:
        array[0][0] = number
        recursive(prev, 0, 0)
    show()


print("Congratulations!! You won!! ")

