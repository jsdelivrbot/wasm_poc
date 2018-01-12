#!/usr/bin/python3
from random import *

numbers = list(range(1, 91))
number_of_tickets = 500
numbers_per_ticket = 5

for i in range(number_of_tickets):
    shuffle(numbers)

    print("[", end="")

    for j in range(numbers_per_ticket):
        print(numbers[j], end="")
        if(j != numbers_per_ticket - 1):
            print(", ", end="")

    if(i != number_of_tickets - 1):
        print("],")
    else:
        print("]")
