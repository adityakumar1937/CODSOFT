#CodSoft - Rock-Paper-Scissor Game
import random

# Define the choices as strings
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

# Convert user input to an integer
print("Choose your move:")
print("0 for 'Rock'")
print("1 for 'Paper'")
print("2 for 'Scissor\n")
myChoice = int(input("Enter your choice: "))

# Generate a random choice for the computer
computerChoice = random.randint(0, 2)

# Display the choices made by the user and the computer
print("Your choice:")
if myChoice == 0:
    print(rock)
elif myChoice == 1:
    print(paper)
elif myChoice == 2:
    print(scissors)
else:
    print("Invalid choice. Please choose 0, 1, or 2.")

print("Computer's choice:")
if computerChoice == 0:
    print(rock)
elif computerChoice == 1:
    print(paper)
else:
    print(scissors)

# Determine the winner
if myChoice == computerChoice:
    print("It's a draw. Try again.")
elif (myChoice == 0 and computerChoice == 2) or (myChoice == 1 and computerChoice == 0) or (myChoice == 2 and computerChoice == 1):
    print("You win!")
else:
    print("Computer wins!")
