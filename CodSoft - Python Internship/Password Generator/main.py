#CodSoft - Password Generator

import random

# Define character sets
letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
numbers = '0123456789'
symbols = '!#$%&()*+'

print("Password Generator!\n")

# Get user input for the number of characters
nr_letters = int(input("How many letters would you like in your password: "))
nr_numbers = int(input("How many numbers would you like: "))
nr_symbols = int(input("How many symbols would you like: "))

# Initialize an empty list to store the password characters
password = []

# Generate characters based on user input
for _ in range(nr_letters):
    password.append(random.choice(letters))
for _ in range(nr_numbers):
    password.append(random.choice(numbers))
for _ in range(nr_symbols):
    password.append(random.choice(symbols))

# Shuffle the password to make it more random
random.shuffle(password)

# Convert the password list to a string
password_str = ''.join(password)

print(f"Your Password is: {password_str}")
